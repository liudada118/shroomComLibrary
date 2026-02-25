/**
 * useDeviceManager - React Hook 封装 DeviceManager
 *
 * 提供：
 * - 设备列表（响应式）
 * - 一键连接（Electron零弹窗 / 浏览器用已授权端口）
 * - 帧数据订阅（按通道过滤，支持多订阅者）
 * - 脚垫配置
 * - 连接状态摘要
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { getDeviceManager } from '../lib/DeviceManager.js';

/**
 * 主 Hook：管理设备连接和数据
 */
export function useDeviceManager() {
  const dmRef = useRef(getDeviceManager());
  const [deviceList, setDeviceList] = useState([]);
  const [logs, setLogs] = useState([]);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    const dm = dmRef.current;

    dm.onDeviceListChange((list) => {
      setDeviceList([...list]);
    });

    dm.onLog((msg, type) => {
      setLogs(prev => {
        const next = [...prev, { msg, type, time: Date.now() }];
        return next.length > 200 ? next.slice(-100) : next;
      });
    });

    // 初始化设备列表
    setDeviceList(dm.getDeviceList());

    return () => {
      // 不销毁单例，只清理回调
    };
  }, []);

  /** 一键连接所有设备（Electron下零弹窗！） */
  const connectAll = useCallback(async (onProgress = null) => {
    setConnecting(true);
    try {
      const results = await dmRef.current.connectAllDevices(onProgress);
      return results;
    } finally {
      setConnecting(false);
    }
  }, []);

  /** 连接一个设备 */
  const connectOne = useCallback(async () => {
    setConnecting(true);
    try {
      const result = await dmRef.current.authorizeAndConnect(true);
      return result;
    } finally {
      setConnecting(false);
    }
  }, []);

  /** 断开指定设备 */
  const disconnectOne = useCallback(async (deviceId) => {
    await dmRef.current.disconnectDevice(deviceId);
  }, []);

  /** 断开所有设备 */
  const disconnectAll = useCallback(async () => {
    await dmRef.current.disconnectAll();
  }, []);

  /** 获取状态摘要 */
  const summary = {
    total: deviceList.length,
    glove: deviceList.filter(d => d.deviceType === 'glove').length,
    seat: deviceList.filter(d => d.deviceType === 'seat').length,
    footpad: deviceList.filter(d => d.deviceType === 'footpad').length,
    allOnline: deviceList.length > 0 && deviceList.every(d => d.isOnline),
    footpadConfigured: deviceList.filter(d => d.deviceType === 'footpad' && d.footpadIndex).length,
  };

  return {
    dm: dmRef.current,
    deviceList,
    summary,
    logs,
    connecting,
    connectOne,
    connectAll,
    disconnectOne,
    disconnectAll,
  };
}

/**
 * 通道数据订阅 Hook（支持多订阅者）
 * @param {string|string[]} channels - 要订阅的通道名称
 * @param {function} onFrame - 帧回调 (channel, matrix, meta)
 */
export function useChannelData(channels, onFrame) {
  const dmRef = useRef(getDeviceManager());
  const cbRef = useRef(onFrame);
  cbRef.current = onFrame;

  const channelSet = useRef(new Set());

  useEffect(() => {
    const arr = Array.isArray(channels) ? channels : [channels];
    channelSet.current = new Set(arr);
  }, [channels]);

  useEffect(() => {
    const dm = dmRef.current;

    const handler = (channel, matrix, meta) => {
      if (channelSet.current.has(channel) && cbRef.current) {
        cbRef.current(channel, matrix, meta);
      }
    };

    // 使用 addFrameListener 支持多订阅者
    const unsubscribe = dm.addFrameListener(handler);

    return () => {
      unsubscribe();
    };
  }, []);
}

/**
 * 脚垫配置 Hook
 */
export function useFootpadConfig() {
  const dmRef = useRef(getDeviceManager());
  const [config, setConfig] = useState(() => dmRef.current.getFootpadConfig());
  const [macList, setMacList] = useState([]);

  useEffect(() => {
    const dm = dmRef.current;
    dm.onDeviceListChange(() => {
      setMacList(dm.getFootpadMacList());
    });
    setMacList(dm.getFootpadMacList());
  }, []);

  const updateConfig = useCallback((newConfig) => {
    dmRef.current.setFootpadConfig(newConfig);
    setConfig({ ...newConfig });
  }, []);

  const refreshMacs = useCallback(async () => {
    await dmRef.current.refreshFootpadMacs();
    setMacList(dmRef.current.getFootpadMacList());
  }, []);

  return {
    config,
    macList,
    updateConfig,
    refreshMacs,
  };
}

export default useDeviceManager;
