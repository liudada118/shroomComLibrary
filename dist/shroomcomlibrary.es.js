import * as b from "react";
import be, { forwardRef as Lr, useRef as G, useImperativeHandle as ia, useEffect as Te, useMemo as J0, version as h1, isValidElement as hs, useContext as Pr, useLayoutEffect as m1, useState as xn, createContext as g1 } from "react";
import * as ms from "echarts";
import * as A from "three";
import { GLTFLoader as p1 } from "three/examples/jsm/loaders/GLTFLoader.js";
import { TrackballControls as La } from "three/examples/jsm/controls/TrackballControls";
import { OrbitControls as gs } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry as Gn } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import $a, { createPortal as y1, flushSync as b1 } from "react-dom";
function C1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo = { exports: {} }, dr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function S1() {
  if (Ia)
    return dr;
  Ia = 1;
  var e = be, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u, d = {}, v = null, h = null;
    l !== void 0 && (v = "" + l), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c)
      n.call(c, u) && !a.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps)
      for (u in c = s.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: v, ref: h, props: d, _owner: o.current };
  }
  return dr.Fragment = r, dr.jsx = i, dr.jsxs = i, dr;
}
var vr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function w1() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = be, t = !1, r = !1, n = !1, o = !1, a = !1, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), C = Symbol.iterator, S = "@@iterator";
    function w(M) {
      if (M === null || typeof M != "object")
        return null;
      var W = C && M[C] || M[S];
      return typeof W == "function" ? W : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(M) {
      {
        for (var W = arguments.length, te = new Array(W > 1 ? W - 1 : 0), ye = 1; ye < W; ye++)
          te[ye - 1] = arguments[ye];
        _("error", M, te);
      }
    }
    function _(M, W, te) {
      {
        var ye = x.ReactDebugCurrentFrame, ke = ye.getStackAddendum();
        ke !== "" && (W += "%s", te = te.concat([ke]));
        var Ie = te.map(function(Ee) {
          return String(Ee);
        });
        Ie.unshift("Warning: " + W), Function.prototype.apply.call(console[M], console, Ie);
      }
    }
    var P;
    P = Symbol.for("react.module.reference");
    function R(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === c || M === u || a || M === l || M === m || M === g || o || M === p || t || r || n || typeof M == "object" && M !== null && (M.$$typeof === y || M.$$typeof === f || M.$$typeof === d || M.$$typeof === v || M.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === P || M.getModuleId !== void 0));
    }
    function T(M, W, te) {
      var ye = M.displayName;
      if (ye)
        return ye;
      var ke = W.displayName || W.name || "";
      return ke !== "" ? te + "(" + ke + ")" : te;
    }
    function F(M) {
      return M.displayName || "Context";
    }
    function k(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case c:
          return "Fragment";
        case s:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case v:
            var W = M;
            return F(W) + ".Consumer";
          case d:
            var te = M;
            return F(te._context) + ".Provider";
          case h:
            return T(M, M.render, "ForwardRef");
          case f:
            var ye = M.displayName || null;
            return ye !== null ? ye : k(M.type) || "Memo";
          case y: {
            var ke = M, Ie = ke._payload, Ee = ke._init;
            try {
              return k(Ee(Ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, $ = 0, L, I, H, B, q, U, V;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function K() {
      {
        if ($ === 0) {
          L = console.log, I = console.info, H = console.warn, B = console.error, q = console.group, U = console.groupCollapsed, V = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        $++;
      }
    }
    function X() {
      {
        if ($--, $ === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, M, {
              value: L
            }),
            info: D({}, M, {
              value: I
            }),
            warn: D({}, M, {
              value: H
            }),
            error: D({}, M, {
              value: B
            }),
            group: D({}, M, {
              value: q
            }),
            groupCollapsed: D({}, M, {
              value: U
            }),
            groupEnd: D({}, M, {
              value: V
            })
          });
        }
        $ < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = x.ReactCurrentDispatcher, J;
    function ne(M, W, te) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (ke) {
            var ye = ke.stack.trim().match(/\n( *(at )?)/);
            J = ye && ye[1] || "";
          }
        return `
` + J + M;
      }
    }
    var ce = !1, oe;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new ie();
    }
    function he(M, W) {
      if (!M || ce)
        return "";
      {
        var te = oe.get(M);
        if (te !== void 0)
          return te;
      }
      var ye;
      ce = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = z.current, z.current = null, K();
      try {
        if (W) {
          var Ee = function() {
            throw Error();
          };
          if (Object.defineProperty(Ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ee, []);
            } catch (de) {
              ye = de;
            }
            Reflect.construct(M, [], Ee);
          } else {
            try {
              Ee.call();
            } catch (de) {
              ye = de;
            }
            M.call(Ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            ye = de;
          }
          M();
        }
      } catch (de) {
        if (de && ye && typeof de.stack == "string") {
          for (var Se = de.stack.split(`
`), c0 = ye.stack.split(`
`), Ve = Se.length - 1, Je = c0.length - 1; Ve >= 1 && Je >= 0 && Se[Ve] !== c0[Je]; )
            Je--;
          for (; Ve >= 1 && Je >= 0; Ve--, Je--)
            if (Se[Ve] !== c0[Je]) {
              if (Ve !== 1 || Je !== 1)
                do
                  if (Ve--, Je--, Je < 0 || Se[Ve] !== c0[Je]) {
                    var Ge = `
` + Se[Ve].replace(" at new ", " at ");
                    return M.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", M.displayName)), typeof M == "function" && oe.set(M, Ge), Ge;
                  }
                while (Ve >= 1 && Je >= 0);
              break;
            }
        }
      } finally {
        ce = !1, z.current = Ie, X(), Error.prepareStackTrace = ke;
      }
      var O0 = M ? M.displayName || M.name : "", Ae = O0 ? ne(O0) : "";
      return typeof M == "function" && oe.set(M, Ae), Ae;
    }
    function we(M, W, te) {
      return he(M, !1);
    }
    function j(M) {
      var W = M.prototype;
      return !!(W && W.isReactComponent);
    }
    function le(M, W, te) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return he(M, j(M));
      if (typeof M == "string")
        return ne(M);
      switch (M) {
        case m:
          return ne("Suspense");
        case g:
          return ne("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case h:
            return we(M.render);
          case f:
            return le(M.type, W, te);
          case y: {
            var ye = M, ke = ye._payload, Ie = ye._init;
            try {
              return le(Ie(ke), W, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, ae = {}, ge = x.ReactDebugCurrentFrame;
    function me(M) {
      if (M) {
        var W = M._owner, te = le(M.type, M._source, W ? W.type : null);
        ge.setExtraStackFrame(te);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ye(M, W, te, ye, ke) {
      {
        var Ie = Function.call.bind(Z);
        for (var Ee in M)
          if (Ie(M, Ee)) {
            var Se = void 0;
            try {
              if (typeof M[Ee] != "function") {
                var c0 = Error((ye || "React class") + ": " + te + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw c0.name = "Invariant Violation", c0;
              }
              Se = M[Ee](W, Ee, ye, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ve) {
              Se = Ve;
            }
            Se && !(Se instanceof Error) && (me(ke), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", te, Ee, typeof Se), me(null)), Se instanceof Error && !(Se.message in ae) && (ae[Se.message] = !0, me(ke), E("Failed %s type: %s", te, Se.message), me(null));
          }
      }
    }
    var ee = Array.isArray;
    function fe(M) {
      return ee(M);
    }
    function pe(M) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, te = W && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return te;
      }
    }
    function re(M) {
      try {
        return Me(M), !1;
      } catch {
        return !0;
      }
    }
    function Me(M) {
      return "" + M;
    }
    function Fe(M) {
      if (re(M))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pe(M)), Me(M);
    }
    var We = x.ReactCurrentOwner, $e = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, r0, _e;
    _e = {};
    function Ce(M) {
      if (Z.call(M, "ref")) {
        var W = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Be(M) {
      if (Z.call(M, "key")) {
        var W = Object.getOwnPropertyDescriptor(M, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Ke(M, W) {
      if (typeof M.ref == "string" && We.current && W && We.current.stateNode !== W) {
        var te = k(We.current.type);
        _e[te] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(We.current.type), M.ref), _e[te] = !0);
      }
    }
    function l0(M, W) {
      {
        var te = function() {
          De || (De = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        te.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function u0(M, W) {
      {
        var te = function() {
          r0 || (r0 = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        te.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var o0 = function(M, W, te, ye, ke, Ie, Ee) {
      var Se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: M,
        key: W,
        ref: te,
        props: Ee,
        // Record the component responsible for creating this element.
        _owner: Ie
      };
      return Se._store = {}, Object.defineProperty(Se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ye
      }), Object.defineProperty(Se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.freeze && (Object.freeze(Se.props), Object.freeze(Se)), Se;
    };
    function f0(M, W, te, ye, ke) {
      {
        var Ie, Ee = {}, Se = null, c0 = null;
        te !== void 0 && (Fe(te), Se = "" + te), Be(W) && (Fe(W.key), Se = "" + W.key), Ce(W) && (c0 = W.ref, Ke(W, ke));
        for (Ie in W)
          Z.call(W, Ie) && !$e.hasOwnProperty(Ie) && (Ee[Ie] = W[Ie]);
        if (M && M.defaultProps) {
          var Ve = M.defaultProps;
          for (Ie in Ve)
            Ee[Ie] === void 0 && (Ee[Ie] = Ve[Ie]);
        }
        if (Se || c0) {
          var Je = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Se && l0(Ee, Je), c0 && u0(Ee, Je);
        }
        return o0(M, Se, c0, ke, ye, We.current, Ee);
      }
    }
    var w0 = x.ReactCurrentOwner, v0 = x.ReactDebugCurrentFrame;
    function b0(M) {
      if (M) {
        var W = M._owner, te = le(M.type, M._source, W ? W.type : null);
        v0.setExtraStackFrame(te);
      } else
        v0.setExtraStackFrame(null);
    }
    var Ze;
    Ze = !1;
    function Qe(M) {
      return typeof M == "object" && M !== null && M.$$typeof === i;
    }
    function i0() {
      {
        if (w0.current) {
          var M = k(w0.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function h0(M) {
      {
        if (M !== void 0) {
          var W = M.fileName.replace(/^.*[\\\/]/, ""), te = M.lineNumber;
          return `

Check your code at ` + W + ":" + te + ".";
        }
        return "";
      }
    }
    var n0 = {};
    function X0(M) {
      {
        var W = i0();
        if (!W) {
          var te = typeof M == "string" ? M : M.displayName || M.name;
          te && (W = `

Check the top-level render call using <` + te + ">.");
        }
        return W;
      }
    }
    function s0(M, W) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var te = X0(W);
        if (n0[te])
          return;
        n0[te] = !0;
        var ye = "";
        M && M._owner && M._owner !== w0.current && (ye = " It was passed a child from " + k(M._owner.type) + "."), b0(M), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, ye), b0(null);
      }
    }
    function ze(M, W) {
      {
        if (typeof M != "object")
          return;
        if (fe(M))
          for (var te = 0; te < M.length; te++) {
            var ye = M[te];
            Qe(ye) && s0(ye, W);
          }
        else if (Qe(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var ke = w(M);
          if (typeof ke == "function" && ke !== M.entries)
            for (var Ie = ke.call(M), Ee; !(Ee = Ie.next()).done; )
              Qe(Ee.value) && s0(Ee.value, W);
        }
      }
    }
    function Ue(M) {
      {
        var W = M.type;
        if (W == null || typeof W == "string")
          return;
        var te;
        if (typeof W == "function")
          te = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === f))
          te = W.propTypes;
        else
          return;
        if (te) {
          var ye = k(W);
          Ye(te, M.props, "prop", ye, M);
        } else if (W.PropTypes !== void 0 && !Ze) {
          Ze = !0;
          var ke = k(W);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function L0(M) {
      {
        for (var W = Object.keys(M.props), te = 0; te < W.length; te++) {
          var ye = W[te];
          if (ye !== "children" && ye !== "key") {
            b0(M), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), b0(null);
            break;
          }
        }
        M.ref !== null && (b0(M), E("Invalid attribute `ref` supplied to `React.Fragment`."), b0(null));
      }
    }
    function $0(M, W, te, ye, ke, Ie) {
      {
        var Ee = R(M);
        if (!Ee) {
          var Se = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c0 = h0(ke);
          c0 ? Se += c0 : Se += i0();
          var Ve;
          M === null ? Ve = "null" : fe(M) ? Ve = "array" : M !== void 0 && M.$$typeof === i ? (Ve = "<" + (k(M.type) || "Unknown") + " />", Se = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof M, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, Se);
        }
        var Je = f0(M, W, te, ke, Ie);
        if (Je == null)
          return Je;
        if (Ee) {
          var Ge = W.children;
          if (Ge !== void 0)
            if (ye)
              if (fe(Ge)) {
                for (var O0 = 0; O0 < Ge.length; O0++)
                  ze(Ge[O0], M);
                Object.freeze && Object.freeze(Ge);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(Ge, M);
        }
        return M === c ? L0(Je) : Ue(Je), Je;
      }
    }
    function F0(M, W, te) {
      return $0(M, W, te, !0);
    }
    function vt(M, W, te) {
      return $0(M, W, te, !1);
    }
    var ht = vt, nt = F0;
    vr.Fragment = c, vr.jsx = ht, vr.jsxs = nt;
  }()), vr;
}
process.env.NODE_ENV === "production" ? fo.exports = S1() : fo.exports = w1();
var Pe = fo.exports;
const x1 = ({ xData: e, yData: t, yMax: r, lineColors: n, areaColors: o }) => {
  const a = Object.keys(t || {}).map((i, s) => ({
    name: i,
    type: "line",
    data: t[i],
    smooth: !0,
    symbol: "none",
    color: n == null ? void 0 : n[s],
    areaStyle: o != null && o[s] ? { color: o[s] } : void 0
  }));
  return {
    animation: !1,
    grid: { x: 40, x2: 16, y: 20, y2: 18 },
    xAxis: {
      type: "category",
      data: e,
      splitLine: { show: !0, lineStyle: { type: "dashed", color: "#32373E" } },
      axisLabel: { color: "#E6EBF0", fontSize: 10 },
      axisLine: { lineStyle: { color: "#8A8F98" } },
      axisTick: { show: !1 }
    },
    yAxis: {
      type: "value",
      max: r,
      splitLine: { show: !0, lineStyle: { type: "dashed", color: "#32373E" } },
      axisLabel: { color: "#E6EBF0", fontSize: 10 },
      axisLine: { lineStyle: { color: "#8A8F98" } },
      axisTick: { show: !1 }
    },
    series: a
  };
}, Y4 = Lr((e, t) => {
  const { xData: r, yData: n, yMax: o, lineColors: a, areaColors: i, className: s, style: c } = e, l = G(null), u = G(null), d = (v) => {
    var h;
    (h = u.current) == null || h.setOption(x1(v));
  };
  return ia(t, () => ({
    update: (v) => d(v),
    clear: () => {
      var v, h;
      return (h = (v = u.current) == null ? void 0 : v.clear) == null ? void 0 : h.call(v);
    },
    resize: () => {
      var v, h;
      return (h = (v = u.current) == null ? void 0 : v.resize) == null ? void 0 : h.call(v);
    },
    getInstance: () => u.current
  })), Te(() => {
    if (l.current)
      return u.current = ms.init(l.current), () => {
        var v, h;
        return (h = (v = u.current) == null ? void 0 : v.dispose) == null ? void 0 : h.call(v);
      };
  }, []), Te(() => {
    !u.current || !r || !n || d({ xData: r, yData: n, yMax: o, lineColors: a, areaColors: i });
  }, [r, n, o, a, i]), /* @__PURE__ */ Pe.jsx("div", { ref: l, className: s, style: c });
}), E1 = ({ xData: e, series: t, yMax: r }) => ({
  animation: !1,
  grid: { x: 40, x2: 16, y: 20, y2: 18 },
  xAxis: {
    type: "category",
    data: e,
    splitLine: { show: !0, lineStyle: { type: "dashed", color: "#32373E" } },
    axisLabel: { color: "#E6EBF0", fontSize: 10 },
    axisLine: { lineStyle: { color: "#8A8F98" } },
    axisTick: { show: !1 }
  },
  yAxis: {
    type: "value",
    max: r,
    splitLine: { show: !0, lineStyle: { type: "dashed", color: "#32373E" } },
    axisLabel: { color: "#E6EBF0", fontSize: 10 },
    axisLine: { lineStyle: { color: "#8A8F98" } },
    axisTick: { show: !1 }
  },
  series: t
});
function K4({
  series: e,
  fullX: t,
  currentIndex: r,
  windowSize: n,
  yMax: o,
  colors: a,
  fullY1: i,
  fullY2: s,
  className: c,
  style: l
}) {
  const u = G(null), d = G(null), v = J0(() => {
    if (Array.isArray(e) && e.length)
      return e;
    const g = Array.isArray(i) ? i : [], f = Array.isArray(s) ? s : [];
    return [
      { name: "line1", data: g, color: (a == null ? void 0 : a[0]) || "#12D0BE", smooth: !0 },
      {
        name: "line2",
        data: f,
        color: (a == null ? void 0 : a[1]) || "#D3C2FF",
        smooth: !0,
        showLastDot: !0
      }
    ];
  }, [e, i, s, a]), h = J0(() => {
    const g = v.map((x) => ({
      ...x,
      data: Array.isArray(x.data) ? x.data : []
    })), f = g.length ? Math.max(...g.map((x) => x.data.length)) : 0, y = r != null, p = y ? Math.max(0, Math.min(r, f)) : f, C = n && y ? Math.max(0, p - n) : 0, S = t ? t.slice(C, p) : Array.from({ length: p - C }, (x, E) => C + E + 1), w = g.map((x) => ({
      ...x,
      data: x.data.slice(C, p)
    }));
    return { x: S, series: w };
  }, [v, t, r, n]);
  Te(() => {
    if (u.current)
      return d.current = ms.init(u.current), () => {
        var g, f;
        return (f = (g = d.current) == null ? void 0 : g.dispose) == null ? void 0 : f.call(g);
      };
  }, []), Te(() => {
    if (!d.current)
      return;
    const g = h.series.map((f) => ({
      name: f.name,
      type: "line",
      smooth: f.smooth ?? !0,
      symbol: f.showLastDot ? "circle" : "none",
      symbolSize: f.showLastDot ? (y, p) => p.dataIndex === f.data.length - 1 ? 4 : 0 : 0,
      data: f.data,
      color: f.color
    }));
    d.current.setOption(
      E1({
        xData: h.x,
        series: g,
        yMax: o
      })
    );
  }, [h, o]);
  const m = { width: "100%", height: "200px", ...l };
  return /* @__PURE__ */ Pe.jsx("div", { ref: u, className: c, style: m });
}
const Ha = (e, t, r) => Math.min(r, Math.max(t, e)), Vt = (e) => {
  if (!e)
    return { r: 1, g: 1, b: 1 };
  const t = e.replace("#", ""), r = parseInt(t.length === 3 ? t.split("").map((n) => n + n).join("") : t, 16);
  return {
    r: (r >> 16 & 255) / 255,
    g: (r >> 8 & 255) / 255,
    b: (r & 255) / 255
  };
}, gt = (e, t, r) => e + (t - e) * r, P1 = (e, t) => {
  if (!t || t.length === 0)
    return { r: 1, g: 1, b: 1 };
  if (t.length === 1)
    return Vt(t[0]);
  if (t.length === 2) {
    const i = Vt(t[0]), s = Vt(t[1]);
    return {
      r: gt(i.r, s.r, e),
      g: gt(i.g, s.g, e),
      b: gt(i.b, s.b, e)
    };
  }
  const r = Vt(t[0]), n = Vt(t[1]), o = Vt(t[2]);
  if (e <= 0.5) {
    const i = e / 0.5;
    return {
      r: gt(r.r, n.r, i),
      g: gt(r.g, n.g, i),
      b: gt(r.b, n.b, i)
    };
  }
  const a = (e - 0.5) / 0.5;
  return {
    r: gt(n.r, o.r, a),
    g: gt(n.g, o.g, a),
    b: gt(n.b, o.b, a)
  };
}, R1 = (e, t, r) => {
  let n = 1, o = 1, a = 1;
  r < e && (r = e), r > t && (r = t);
  const i = t - e;
  return r < e + 0.25 * i ? (n = 0, o = 4 * (r - e) / i) : r < e + 0.5 * i ? (n = 0, a = 1 + 4 * (e + 0.25 * i - r) / i) : r < e + 0.75 * i ? (n = 4 * (r - e - 0.5 * i) / i, a = 0) : (o = 1 + 4 * (e + 0.75 * i - r) / i, a = 0), [
    Math.round(255 * n),
    Math.round(255 * o),
    Math.round(255 * a)
  ];
}, M1 = () => {
  const e = document.createElement("canvas");
  e.width = e.height = 512;
  const t = e.getContext("2d"), r = 16, n = 32;
  t.font = "bold 18px monospace", t.textAlign = "center", t.textBaseline = "middle";
  for (let a = 0; a < 256; a++) {
    const i = a % r, s = Math.floor(a / r), c = i * n, l = s * n, [u, d, v] = R1(0, 255, a);
    t.fillStyle = `rgb(${u}, ${d}, ${v})`, t.fillRect(c, l, n, n), t.strokeStyle = "#0f172a", t.lineWidth = 1, t.strokeRect(c, l, n, n), t.fillStyle = "#ffffff", t.fillText(a.toString(), c + n / 2, l + n / 2);
  }
  const o = new A.CanvasTexture(e);
  return o.flipY = !1, o.minFilter = A.LinearFilter, o.magFilter = A.NearestFilter, o;
};
function Z4({
  data: e = [],
  rows: t = 16,
  cols: r = 16,
  size: n = 4,
  colors: o = ["#12D0BE", "#E2E8F0", "#D3C2FF"],
  valueRange: a,
  zoomable: i = !0,
  panEnabled: s = !0,
  minZoom: c = 0.5,
  maxZoom: l = 8,
  zoomStep: u = 1.1,
  className: d,
  style: v
}) {
  const h = G(null), m = G([]), g = G(o), f = G(a), y = G(i), p = G(s);
  Te(() => {
    m.current = Array.isArray(e) ? e : [];
  }, [e]), Te(() => {
    g.current = o;
  }, [o]), Te(() => {
    f.current = a;
  }, [a]), Te(() => {
    y.current = i;
  }, [i]), Te(() => {
    p.current = s;
  }, [s]);
  const C = J0(() => t * r, [t, r]);
  return Te(() => {
    if (!h.current)
      return;
    const S = new A.WebGLRenderer({ antialias: !0, alpha: !0 });
    S.setPixelRatio(window.devicePixelRatio || 1);
    const w = new A.Scene(), x = 0.032 * n, E = x, _ = r * E / 2, P = t * E / 2, R = new A.OrthographicCamera(-_, _, P, -P, 0.1, 1e3);
    R.position.z = 10;
    const T = M1(), F = new A.ShaderMaterial({
      uniforms: {
        map: { value: T },
        tileSize: { value: 1 / 16 }
      },
      vertexShader: `
        attribute vec3 instanceColor;
        attribute vec2 uvOffset;
        varying vec3 vColor;
        varying vec2 vUv;
        uniform float tileSize;
        void main() {
          vUv = uv * tileSize + uvOffset;
          vColor = instanceColor;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        varying vec2 vUv;
        varying vec3 vColor;
        void main() {
          vec4 texColor = texture2D(map, vUv);
          if (texColor.a < 0.1) discard;
          gl_FragColor = vec4(texColor.rgb * vColor, texColor.a);
        }
      `,
      transparent: !0,
      side: A.DoubleSide,
      depthWrite: !0,
      depthTest: !0
    });
    F.toneMapped = !1;
    const k = new A.PlaneGeometry(x, x), D = new Float32Array(C * 2), $ = new Float32Array(C * 3), L = new A.InstancedMesh(k, F, C), I = new A.Object3D();
    for (let j = 0; j < C; j++) {
      const le = j % r, Z = Math.floor(j / r);
      I.position.set((le - (r - 1) / 2) * E, (Z - (t - 1) / 2) * E, 0), I.updateMatrix(), L.setMatrixAt(j, I.matrix), D[j * 2] = 0, D[j * 2 + 1] = 0, $[j * 3] = 1, $[j * 3 + 1] = 1, $[j * 3 + 2] = 1;
    }
    k.setAttribute("uvOffset", new A.InstancedBufferAttribute(D, 2)), k.setAttribute("instanceColor", new A.InstancedBufferAttribute($, 3)), L.rotation.x = Math.PI, w.add(L);
    const H = () => {
      const j = h.current.getBoundingClientRect(), le = Math.max(1, Math.round(j.width || 400)), Z = Math.max(1, Math.round(j.height || 400));
      S.setSize(le, Z);
    };
    h.current.innerHTML = "", H(), window.addEventListener("resize", H);
    const B = new A.Raycaster(), q = new A.Plane(new A.Vector3(0, 0, 1), 0), U = new A.Vector2(), V = new A.Vector3(), Q = new A.Vector3(), K = new A.Vector2();
    let X = !1;
    const z = (j, le) => {
      const Z = S.domElement.getBoundingClientRect();
      return U.x = (j.clientX - Z.left) / Z.width * 2 - 1, U.y = -((j.clientY - Z.top) / Z.height) * 2 + 1, B.setFromCamera(U, R), B.ray.intersectPlane(q, le);
    }, J = (j) => {
      if (!y.current || (j.preventDefault(), !z(j, V)))
        return;
      const le = j.deltaY < 0 ? u : 1 / u, Z = Ha(R.zoom * le, c, l);
      Z !== R.zoom && (R.zoom = Z, R.updateProjectionMatrix(), z(j, Q) && R.position.add(V.sub(Q)));
    }, ne = (j) => {
      !p.current || j.button !== 0 || (X = !0, K.set(j.clientX, j.clientY), S.domElement.setPointerCapture(j.pointerId));
    }, ce = (j) => {
      if (!X)
        return;
      const le = j.clientX - K.x, Z = j.clientY - K.y;
      K.set(j.clientX, j.clientY);
      const ae = S.domElement.getBoundingClientRect(), ge = (R.right - R.left) / (ae.width * R.zoom), me = (R.top - R.bottom) / (ae.height * R.zoom);
      R.position.x -= le * ge, R.position.y += Z * me;
    }, oe = (j) => {
      X && (X = !1, S.domElement.hasPointerCapture(j.pointerId) && S.domElement.releasePointerCapture(j.pointerId));
    }, ie = S.domElement;
    ie.style.touchAction = "none", ie.addEventListener("wheel", J, { passive: !1 }), ie.addEventListener("pointerdown", ne), ie.addEventListener("pointermove", ce), ie.addEventListener("pointerup", oe), ie.addEventListener("pointerleave", oe), ie.addEventListener("pointercancel", oe);
    let he;
    const we = () => {
      const j = m.current, le = Array.isArray(j) ? j : [], Z = le.length;
      let ae = 0, ge = 255;
      const me = f.current;
      me && me.length === 2 ? (ae = me[0], ge = me[1]) : Z && (ae = Math.min(...le), ge = Math.max(...le));
      const Ye = ge - ae || 1;
      for (let ee = 0; ee < C; ee++) {
        const fe = le[ee] ?? 0, pe = Ha((fe - ae) / Ye, 0, 1), re = Math.round(pe * 255);
        D[ee * 2] = re % 16 / 16, D[ee * 2 + 1] = Math.floor(re / 16) / 16;
        const Me = P1(pe, g.current);
        $[ee * 3] = Me.r, $[ee * 3 + 1] = Me.g, $[ee * 3 + 2] = Me.b;
      }
      k.attributes.uvOffset.needsUpdate = !0, k.attributes.instanceColor.needsUpdate = !0, S.render(w, R), he = requestAnimationFrame(we);
    };
    return we(), h.current.contains(ie) || h.current.appendChild(ie), () => {
      he && cancelAnimationFrame(he), window.removeEventListener("resize", H), ie.removeEventListener("wheel", J), ie.removeEventListener("pointerdown", ne), ie.removeEventListener("pointermove", ce), ie.removeEventListener("pointerup", oe), ie.removeEventListener("pointerleave", oe), ie.removeEventListener("pointercancel", oe), ie.parentNode === h.current && h.current.removeChild(ie), S.dispose(), k.dispose(), F.dispose(), T.dispose();
    };
  }, [C, t, r, n, c, l, u]), /* @__PURE__ */ Pe.jsx(
    "div",
    {
      ref: h,
      className: d,
      style: { width: "100%", height: "100%", ...v }
    }
  );
}
const _1 = (e, t, r) => Math.min(r, Math.max(t, e)), F1 = (e) => {
  const t = document.createElement("canvas");
  t.width = 256, t.height = 1;
  const r = t.getContext("2d"), n = r.createLinearGradient(0, 0, 256, 0), o = Array.isArray(e) && e.length ? e : ["#0f172a", "#22d3ee", "#f97316"], a = 1 / (o.length - 1);
  return o.forEach((i, s) => {
    n.addColorStop(s * a, i);
  }), r.fillStyle = n, r.fillRect(0, 0, 256, 1), r.getImageData(0, 0, 256, 1).data;
}, T1 = (e, t) => {
  const r = Math.max(1, Math.round((e + t) * 2)), n = document.createElement("canvas");
  n.width = r, n.height = r;
  const o = n.getContext("2d"), a = e, i = r / 2, s = o.createRadialGradient(i, i, 0, i, i, a + t);
  return s.addColorStop(0, "rgba(0,0,0,1)"), s.addColorStop(1, "rgba(0,0,0,0)"), o.fillStyle = s, o.fillRect(0, 0, r, r), n;
};
function Q4({
  data: e = [],
  rows: t = 32,
  cols: r = 32,
  colors: n = ["#0f172a", "#22d3ee", "#f97316"],
  filterValue: o = 0,
  intensity: a = 1,
  dotSize: i = 18,
  blur: s = 10,
  minValue: c,
  maxValue: l,
  className: u,
  style: d
}) {
  const v = G(null), h = G(null), m = G(null), g = G(null), f = G(null), y = G([]), p = G({
    rows: t,
    cols: r,
    colors: n,
    filterValue: o,
    intensity: a,
    dotSize: i,
    blur: s,
    minValue: c,
    maxValue: l
  });
  Te(() => {
    y.current = Array.isArray(e) ? e : [];
  }, [e]), Te(() => {
    p.current = {
      rows: t,
      cols: r,
      colors: n,
      filterValue: o,
      intensity: a,
      dotSize: i,
      blur: s,
      minValue: c,
      maxValue: l
    };
  }, [t, r, n, o, a, i, s, c, l]);
  const C = J0(() => t * r, [t, r]);
  return Te(() => {
    if (!v.current)
      return;
    const S = document.createElement("canvas");
    h.current = S;
    const w = S.getContext("2d"), x = () => {
      const P = v.current.getBoundingClientRect(), R = Math.max(1, Math.round(P.width || 300)), T = Math.max(1, Math.round(P.height || 300));
      S.width !== R && (S.width = R), S.height !== T && (S.height = T);
    };
    x(), v.current.contains(S) || (v.current.innerHTML = "", v.current.appendChild(S)), window.ResizeObserver ? (f.current = new ResizeObserver(x), f.current.observe(v.current)) : window.addEventListener("resize", x);
    let E;
    const _ = () => {
      const P = p.current, R = y.current, T = Array.isArray(R) ? R : [], F = typeof P.maxValue == "number" ? P.maxValue : T.length ? Math.max(...T) : 1, k = typeof P.minValue == "number" ? P.minValue : 0, D = F - k || 1;
      (!m.current || m.current.colors !== P.colors) && (m.current = {
        colors: P.colors,
        data: F1(P.colors)
      }), (!g.current || g.current.size !== P.dotSize || g.current.blur !== P.blur) && (g.current = {
        size: P.dotSize,
        blur: P.blur,
        canvas: T1(P.dotSize, P.blur)
      }), w.clearRect(0, 0, S.width, S.height);
      const $ = g.current.canvas, L = $.width / 2, I = S.width / P.cols, H = S.height / P.rows;
      for (let V = 0; V < C; V++) {
        const Q = T[V] ?? 0;
        if (Q <= P.filterValue)
          continue;
        const K = _1((Q - k) / D * P.intensity, 0, 1);
        if (K <= 0)
          continue;
        const X = Math.floor(V / P.cols), J = V % P.cols * I + I / 2, ne = X * H + H / 2;
        w.globalAlpha = K, w.drawImage($, J - L, ne - L);
      }
      const B = w.getImageData(0, 0, S.width, S.height), q = B.data, U = m.current.data;
      for (let V = 3; V < q.length; V += 4) {
        const Q = q[V];
        if (Q === 0)
          continue;
        const K = Q * 4;
        q[V - 3] = U[K], q[V - 2] = U[K + 1], q[V - 1] = U[K + 2];
      }
      w.putImageData(B, 0, 0), E = requestAnimationFrame(_);
    };
    return _(), () => {
      E && cancelAnimationFrame(E), f.current ? f.current.disconnect() : window.removeEventListener("resize", x), S.parentNode === v.current && v.current.removeChild(S);
    };
  }, [C]), /* @__PURE__ */ Pe.jsx(
    "div",
    {
      ref: v,
      className: u,
      style: { width: "100%", height: "100%", ...d }
    }
  );
}
const Yr = (e, t, r) => Math.min(r, Math.max(t, e)), k1 = (e, t, r, n, o) => {
  const a = Array.isArray(e) ? e : [], i = t * n, s = r * o, c = new Array(i * s).fill(0);
  for (let l = 0; l < s; l++) {
    const u = Math.floor(l / o);
    for (let d = 0; d < i; d++) {
      const v = Math.floor(d / n);
      c[l * i + d] = a[u * t + v] ?? 0;
    }
  }
  return c;
}, O1 = (e, t, r, n, o) => {
  const a = t + n * 2, i = r + o * 2, s = new Array(a * i).fill(0);
  for (let c = 0; c < r; c++)
    for (let l = 0; l < t; l++)
      s[(c + o) * a + (l + n)] = e[c * t + l] ?? 0;
  return s;
}, A1 = (e, t, r, n = 1) => {
  const o = Math.max(1, Math.round(n)), a = new Array(t * r).fill(0);
  for (let i = 0; i < r; i++)
    for (let s = 0; s < t; s++) {
      let c = 0, l = 0;
      for (let u = -o; u <= o; u++) {
        const d = i + u;
        if (!(d < 0 || d >= r))
          for (let v = -o; v <= o; v++) {
            const h = s + v;
            h < 0 || h >= t || (c += e[d * t + h] ?? 0, l += 1);
          }
      }
      a[i * t + s] = l ? c / l : 0;
    }
  return a;
}, D1 = (e, t, r) => {
  const n = Yr((r - e) / (t - e || 1), 0, 1), o = Yr(1.5 - Math.abs(4 * n - 3), 0, 1), a = Yr(1.5 - Math.abs(4 * n - 2), 0, 1), i = Yr(1.5 - Math.abs(4 * n - 1), 0, 1);
  return [Math.round(o * 255), Math.round(a * 255), Math.round(i * 255)];
}, qn = {
  sit: {
    dataConfig: { sitnum1: 32, sitnum2: 32, sitInterp: 2, sitInterp1: 2, sitOrder: 3 },
    pointConfig: { position: [0, -30, -5], rotation: [-Math.PI / 6, 0, 0], scale: [18e-4, 18e-4, 18e-4] }
  },
  back: {
    dataConfig: { sitnum1: 32, sitnum2: 32, sitInterp: 2, sitInterp1: 2, sitOrder: 3 },
    pointConfig: { position: [2.5, -15, 0], rotation: [-Math.PI / 12 - Math.PI / 2, 0, 0], scale: [15e-4, 2e-3, 2e-3] }
  }
}, Va = { gauss: 1, color: 200, filter: 0, height: 1, coherent: 1 }, N1 = { position: [0, -25, 60], rotation: [-Math.PI / 6, -Math.PI, 0], scale: [0.4, 0.4, 0.4] }, L1 = { fov: 40, near: 1, far: 15e4, position: [0, 43.05, -120] }, $1 = { position: [0, 20, -10], rotation: [Math.PI / 6, 0, 0] }, I1 = { show: !0, size: 2e3, divisions: 100, positionY: -199, opacity: 0.25 }, j1 = {
  enabled: !0,
  rotateSpeed: 1,
  zoomSpeed: 1.2,
  panSpeed: 0.8,
  staticMoving: !0,
  dynamicDampingFactor: 0.2,
  noRotate: !1,
  noZoom: !1,
  noPan: !1,
  minDistance: 10,
  maxDistance: 1e4
}, J4 = Lr((e, t) => {
  const {
    data: r,
    dataRef: n,
    groupConfigs: o = qn,
    sitConfig: a,
    backConfig: i,
    sitPointConfig: s,
    backPointConfig: c,
    settings: l = Va,
    displayType: u = "sit",
    utils: d = {},
    modelUrl: v,
    modelConfig: h = N1,
    pointSpriteUrl: m,
    backgroundColor: g = 0,
    cameraConfig: f = L1,
    groupConfig: y = $1,
    separation: p = 100,
    gridConfig: C = I1,
    controlsConfig: S = j1,
    controlsTarget: w,
    onViewChange: x,
    className: E,
    style: _
  } = e, P = G(null), R = G(null), T = G(null), F = G(null), k = G(null), D = G(new A.Group()), $ = G(new A.Group()), L = G(r || { sit: [], back: [] }), I = G(l), H = G(u), { lineInterp: B = k1, addSide: q = O1, gaussBlurReturn: U = A1, jetWhite3: V = D1 } = d, Q = G({}), K = G(null);
  Te(() => {
    n && n.current ? L.current = n.current : r && (L.current = r);
  }, [r, n]), Te(() => {
    I.current = l;
  }, [l]), Te(() => {
    H.current = u;
  }, [u]);
  const X = J0(() => {
    const z = {
      sit: o.sit || qn.sit,
      back: o.back || qn.back
    };
    return a && (z.sit = { ...z.sit, dataConfig: a }), i && (z.back = { ...z.back, dataConfig: i }), s && (z.sit = { ...z.sit, pointConfig: s }), c && (z.back = { ...z.back, pointConfig: c }), z;
  }, [o, a, i, s, c]);
  return ia(t, () => ({
    changePointRotation: (z, J = H.current) => {
      const ne = $.current.children.find((ce) => ce.name === J);
      ne && (ne.rotation.x = -Math.PI / 2 + z * 2 / 12);
    },
    changeCamera: (z) => {
      F.current && (F.current.position.z = -120 * 100 / z);
    },
    reset3D: () => {
      var z;
      (z = k.current) == null || z.reset(), x && F.current && x(Math.floor(-120 * 100 / F.current.position.z));
    }
  })), Te(() => {
    if (!P.current)
      return;
    const z = P.current, J = new A.WebGLRenderer({ antialias: !0 });
    J.setPixelRatio(window.devicePixelRatio || 1), J.setClearColor(g);
    const ne = new A.Scene(), ce = new A.PerspectiveCamera(
      f.fov,
      z.clientWidth / z.clientHeight,
      f.near,
      f.far
    );
    ce.position.set(...f.position), R.current = J, T.current = ne, F.current = ce;
    const oe = D.current;
    oe.position.set(...y.position), oe.rotation.set(...y.rotation);
    const ie = $.current;
    if (oe.add(ie), ne.add(oe), C.show) {
      const ee = new A.GridHelper(C.size, C.divisions);
      ee.position.y = C.positionY, ee.material.opacity = C.opacity, ee.material.transparent = !0, ne.add(ee);
    }
    ne.add(new A.AmbientLight(16777215, 1)), ne.add(new A.HemisphereLight(16777215, 4473924, 1));
    const he = new A.DirectionalLight(16777215, 1);
    if (he.position.set(5, 10, 5), ne.add(he), S.enabled) {
      k.current = new La(ce, J.domElement);
      const { target: ee, ...fe } = S;
      Object.assign(k.current, fe);
      const pe = w || ee;
      Array.isArray(pe) && pe.length === 3 ? k.current.target.set(...pe) : pe && typeof pe == "object" && "x" in pe && k.current.target.set(pe.x, pe.y, pe.z);
    }
    const we = new p1();
    v && we.load(v, (ee) => {
      const fe = ee.scene;
      fe.position.set(...h.position || [0, 0, 0]), fe.rotation.set(...h.rotation || [0, 0, 0]), fe.scale.set(...h.scale || [1, 1, 1]), oe.add(fe);
    });
    const j = m ? new A.TextureLoader().load(m) : null, le = (ee, fe) => {
      var w0, v0, b0, Ze;
      const { dataConfig: pe, pointConfig: re } = fe, { sitnum1: Me, sitnum2: Fe, sitInterp: We, sitInterp1: $e, sitOrder: De } = pe, r0 = Me * We + De * 2, _e = Fe * $e + De * 2, Ce = r0 * _e, Be = new Float32Array(Ce * 3), Ke = new Float32Array(Ce * 3), l0 = new Float32Array(Ce), u0 = new A.BufferGeometry();
      u0.setAttribute("position", new A.BufferAttribute(Be, 3)), u0.setAttribute("color", new A.BufferAttribute(Ke, 3)), u0.setAttribute("aScale", new A.BufferAttribute(l0, 1));
      const o0 = new A.PointsMaterial({
        vertexColors: !0,
        transparent: !0,
        ...j ? { map: j } : {},
        size: (((w0 = re.scale) == null ? void 0 : w0[0]) || 1e-3) * 300
      });
      o0.onBeforeCompile = (Qe) => {
        Qe.vertexShader = Qe.vertexShader.replace("void main() {", `attribute float aScale;
varying float vScale;
void main() {`).replace("#include <begin_vertex>", `#include <begin_vertex>
 vScale = aScale;`), Qe.fragmentShader = Qe.fragmentShader.replace("void main() {", `varying float vScale;
void main() {`).replace("#include <clipping_planes_fragment>", `#include <clipping_planes_fragment>
 if (vScale <= 0.0) discard;`);
      };
      const f0 = new A.Points(u0, o0);
      f0.name = ee, (v0 = re.position) != null && v0.length && f0.position.set(...re.position), (b0 = re.rotation) != null && b0.length && f0.rotation.set(...re.rotation), (Ze = re.scale) != null && Ze.length && f0.scale.set(...re.scale), ie.add(f0), Q.current[ee] = new Array(Ce).fill(1);
    };
    Object.entries(X).forEach(([ee, fe]) => le(ee, fe));
    const Z = () => {
      const ee = I.current || Va, fe = (n == null ? void 0 : n.current) || L.current || {};
      Object.entries(X).forEach(([pe, re]) => {
        const { dataConfig: Me } = re, { sitnum1: Fe, sitnum2: We, sitInterp: $e, sitInterp1: De, sitOrder: r0 } = Me, _e = Fe * $e + r0 * 2, Ce = We * De + r0 * 2, Be = _e * Ce, Ke = ie.children.find((n0) => n0.name === pe);
        if (!Ke)
          return;
        const l0 = ((fe == null ? void 0 : fe[pe]) || []).slice();
        if (!l0.length)
          return;
        const u0 = B(l0, We, Fe, De, $e), o0 = q(u0, We * De, Fe * $e, r0, r0), f0 = U(
          o0,
          We * De + r0 * 2,
          Fe * $e + r0 * 2,
          ee.gauss
        ), w0 = Q.current[pe] || new Array(Be).fill(1), v0 = Ke.geometry.attributes.position.array, b0 = Ke.geometry.attributes.color.array, Ze = Ke.geometry.attributes.aScale.array;
        let Qe = 0, i0 = 0, h0 = 0;
        for (let n0 = 0; n0 < _e; n0++)
          for (let X0 = 0; X0 < Ce; X0++) {
            const s0 = (f0[i0] ?? 0) * 10;
            w0[i0] = w0[i0] + (s0 - w0[i0]) / (ee.coherent || 1), v0[Qe] = X0 * p - _e * p / 2, v0[Qe + 1] = w0[i0] * (ee.height || 1), v0[Qe + 2] = n0 * p - Ce * p / 2;
            const ze = s0 < (ee.color || 0) * 0.25 || s0 < (ee.filter || 0);
            Ze[h0] = ze ? 0 : 1;
            const Ue = V(0, ee.color || 1, w0[i0]);
            b0[Qe] = Ue[0] / 255, b0[Qe + 1] = Ue[1] / 255, b0[Qe + 2] = Ue[2] / 255, Qe += 3, i0 += 1, h0 += 1;
          }
        Ke.geometry.attributes.position.needsUpdate = !0, Ke.geometry.attributes.color.needsUpdate = !0, Ke.geometry.attributes.aScale.needsUpdate = !0;
      });
    }, ae = () => {
      var pe, re;
      const ee = Math.max(1, z.clientWidth), fe = Math.max(1, z.clientHeight);
      J.setSize(ee, fe), ce.aspect = ee / fe, ce.updateProjectionMatrix(), (re = (pe = k.current) == null ? void 0 : pe.handleResize) == null || re.call(pe);
    };
    z.innerHTML = "", z.appendChild(J.domElement), ae();
    let ge;
    window.ResizeObserver ? (ge = new ResizeObserver(ae), ge.observe(z)) : window.addEventListener("resize", ae);
    const me = () => {
      var ee;
      (ee = k.current) == null || ee.update(), Z(), J.render(ne, ce), K.current = requestAnimationFrame(me);
    };
    me();
    const Ye = () => {
      !x || !F.current || x(Math.floor(-120 * 100 / F.current.position.z));
    };
    return document.addEventListener("wheel", Ye), () => {
      var ee, fe;
      K.current && cancelAnimationFrame(K.current), document.removeEventListener("wheel", Ye), ge ? ge.disconnect() : window.removeEventListener("resize", ae), (fe = (ee = k.current) == null ? void 0 : ee.dispose) == null || fe.call(ee), J.dispose(), J.domElement && z.contains(J.domElement) && z.removeChild(J.domElement);
    };
  }, [
    X,
    g,
    f,
    y,
    C,
    v,
    h,
    m,
    p
  ]), Te(() => {
    var ie, he;
    const z = R.current, J = F.current;
    if (!z || !J)
      return;
    if (!S.enabled) {
      (he = (ie = k.current) == null ? void 0 : ie.dispose) == null || he.call(ie), k.current = null;
      return;
    }
    k.current || (k.current = new La(J, z.domElement));
    const { target: ne, ...ce } = S;
    Object.assign(k.current, ce);
    const oe = w || ne;
    Array.isArray(oe) && oe.length === 3 ? k.current.target.set(...oe) : oe && typeof oe == "object" && "x" in oe && k.current.target.set(oe.x, oe.y, oe.z);
  }, [S, w]), /* @__PURE__ */ Pe.jsx(
    "div",
    {
      ref: P,
      className: E,
      style: { width: "100%", height: "100%", ..._ }
    }
  );
});
class It {
  constructor() {
    this.vertexShader = "        attribute vec4 a_Position;        uniform vec2 u_resolution;        uniform float u_maxClick;        uniform float u_minClick;        uniform float u_filterClick;        attribute float a_click;        attribute vec2 a_center;        attribute float a_radius;        varying vec2 v_center;        varying vec2 v_resolution;        varying float v_radius;        varying float v_maxClick;        varying float v_minClick;        varying float v_filterClick;        varying float v_click;        void main() {                gl_PointSize = a_radius * 2.0;                vec2 clipspace = a_center / u_resolution * 2.0 - 1.0;                gl_Position = vec4(clipspace * vec2(1, -1), 0, 1);                v_center = a_center;                v_resolution = u_resolution;                v_radius = a_radius - 1.0;                v_maxClick = u_maxClick;                v_minClick = u_minClick;                v_filterClick = u_filterClick;                v_click = a_click;         }", this.fragmentShader = "        precision mediump float;        varying vec2 v_center;        varying vec2 v_resolution;        varying float v_radius;        varying float v_maxClick;        varying float v_minClick;        varying float v_filterClick;        varying float v_click;        varying float v_groupIdx;        void main() {                vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);                float x = gl_FragCoord.x;                float y = v_resolution[1] - gl_FragCoord.y;                float dx = v_center[0] - x;                float dy = v_center[1] - y;                float distance = sqrt(dx*dx + dy*dy);                float diff = v_radius-distance;                float currentPercent=0.95;                float blurFactory=0.55;                float pxAlpha=0.0;                if(v_maxClick>= v_click && v_click>= v_minClick){                    pxAlpha = (v_click-v_minClick)/(v_maxClick-v_minClick);                }                if(v_click>= v_maxClick){                    pxAlpha = 1.0;                }                if ( diff >  0.0 ) {                    if(diff > v_radius * blurFactory) {                        gl_FragColor = vec4(0,0,0,pxAlpha);                    } else {                        float p=diff/(v_radius*blurFactory);                        gl_FragColor = vec4(0,0,0,p*pxAlpha);                    }                } else {                    if ( diff >= 0.0 && diff <= 1.0 ){                    }                    else{                        gl_FragColor = vec4(0,0,0,0);                    }                }        }", this.vertexShader1 = "        attribute vec4 a_Position;        void main(void){            gl_Position = a_Position;        }", this.fragmentShader1 = "precision mediump float; uniform vec2 u_resolution; uniform sampler2D u_Sampler; vec3 linearToSRGB(vec3 color){   return pow(color * 1.5, vec3(1.0/2.2)); } vec3 getColorByPercent(float pct){   float p = clamp(pct, 0.0, 1.0);   /* Color stops (sRGB, hex -> 0~1) */   const vec3 c0 = vec3(0.0,    0.0,    0.0   ); /* 0.00 -> #000000 */   const vec3 c1 = vec3(0.0,    0.0,    1.0   ); /* 0.14 -> #0000FF */   const vec3 c2 = vec3(0.0,    0.4,    1.0   ); /* 0.28 -> #0066FF */   const vec3 c3 = vec3(0.0,    1.0,    0.0   ); /* 0.42 -> #00FF00 */   const vec3 c4 = vec3(1.0,    1.0,    0.0   ); /* 0.56 -> #FFFF00 */   const vec3 c5 = vec3(1.0,    0.4,    0.0   ); /* 0.70 -> #FF6600 */   const vec3 c6 = vec3(1.0,    0.0,    0.0   ); /* 0.84 -> #FF0000 */   const vec3 c7 = vec3(1.0, 0.0, 0.0 ); /* 1.00 -> #FF1E42 */     if(p <= 0.14){     float t = (p - 0.00) / (0.14 - 0.00);     return mix(c0, c1, t);   }else if(p <= 0.28){     float t = (p - 0.14) / (0.28 - 0.14);     return mix(c1, c2, t);   }else if(p <= 0.42){     float t = (p - 0.28) / (0.42 - 0.28);     return mix(c2, c3, t);   }else if(p <= 0.56){     float t = (p - 0.42) / (0.56 - 0.42);     return mix(c3, c4, t);   }else if(p <= 0.70){     float t = (p - 0.56) / (0.70 - 0.56);     return mix(c4, c5, t);   }else if(p <= 0.84){     float t = (p - 0.70) / (0.84 - 0.70);     return mix(c5, c6, t);   }else{     float t = (p - 0.84) / (1.0 - 0.84);     return mix(c6, c7, t);   } } void main(void){   vec2 uv = vec2(gl_FragCoord.x / u_resolution.x, gl_FragCoord.y / u_resolution.y);   vec4 c = texture2D(u_Sampler, uv);   float p_alpha = c.a;   if(p_alpha > 0.03){     vec3 col = getColorByPercent(p_alpha);     col = linearToSRGB(col);     gl_FragColor = vec4(col, 1.0);   }else{     discard; /* 或者输出透明：gl_FragColor = vec4(0.0); */   } }";
  }
}
It.prototype.bufferCuter = function(e) {
  var t = [], r;
  for (r = e.splice(0, 3e3); r.length > 0; )
    t.push(r), r = e.splice(0, 3e3);
  for (var n in t) {
    var o = [], a = 0;
    for (var i in t[n]) {
      var s = t[n][i];
      o[a++] = s[0], o[a++] = s[1], o[a++] = s[2];
    }
    t[n] = new Float32Array(o);
  }
  return t;
};
var He = document.createElement("canvas");
He.className = "webgl";
It.prototype.createTplCanvas = function(e, t, r) {
  He.glObj = {
    canvas: He,
    data: t,
    cfg: e
  }, He.width = e.width || 2048, He.height = e.height || 1024;
  var n = He.glObj.gl = He.getContext("webgl");
  n.clearColor(0, 0, 0, 0), n.disable(n.DEPTH_TEST), n.clear(n.COLOR_BUFFER_BIT);
  var o = Kr(n, "v", this.vertexShader), a = Kr(n, "f", this.fragmentShader), i = Kr(n, "v", this.vertexShader1), s = Kr(n, "f", this.fragmentShader1), c = He.glObj.programNode = Ba(n, o, a);
  n.useProgram(c), n.enable(n.BLEND), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.SRC_ALPHA, n.ONE);
  var l = He.glObj.resolutionLocation = n.getUniformLocation(c, "u_resolution"), u = He.glObj.centerLocation = n.getAttribLocation(c, "a_center"), d = He.glObj.radiusLocation = n.getAttribLocation(c, "a_radius"), v = He.glObj.a_clickLocation = n.getAttribLocation(c, "a_click"), h = He.glObj.u_maxClickLocation = n.getUniformLocation(c, "u_maxClick"), m = He.glObj.u_minClickLocation = n.getUniformLocation(c, "u_minClick"), g = He.glObj.u_filterClickLocation = n.getUniformLocation(c, "u_filterClick");
  n.uniform2f(l, He.width, He.height);
  function f() {
    n.uniform1f(h, He.glObj.cfg.max), n.uniform1f(m, He.glObj.cfg.min), n.uniform1f(g, He.glObj.cfg.filter), n.vertexAttrib1f(d, He.glObj.cfg.radius + 1);
    var y = n.createFramebuffer(), p = n.createTexture();
    n.bindTexture(n.TEXTURE_2D, p), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, He.width, He.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), y.texture = p;
    var C = n.createRenderbuffer();
    if (n.bindRenderbuffer(n.RENDERBUFFER, C), n.renderbufferStorage(
      n.RENDERBUFFER,
      n.DEPTH_COMPONENT16,
      He.width,
      He.height
    ), n.bindFramebuffer(n.FRAMEBUFFER, y), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, p, 0), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, C), n.checkFramebufferStatus(n.FRAMEBUFFER) != n.FRAMEBUFFER_COMPLETE) {
      alert("this combination of attachments does not work");
      return;
    }
    n.viewport(0, 0, He.width, He.height);
    var S = 3;
    for (var w in He.glObj.data) {
      var x = He.glObj.data[w], E = x, _ = n.createBuffer();
      n.bindBuffer(n.ARRAY_BUFFER, _), n.bufferData(
        n.ARRAY_BUFFER,
        E,
        n.STATIC_DRAW
      ), n.enableVertexAttribArray(u), n.enableVertexAttribArray(v), n.vertexAttribPointer(u, 2, n.FLOAT, !1, S * Float32Array.BYTES_PER_ELEMENT, Float32Array.BYTES_PER_ELEMENT * 0), n.vertexAttribPointer(v, 1, n.FLOAT, !1, S * Float32Array.BYTES_PER_ELEMENT, Float32Array.BYTES_PER_ELEMENT * 2), n.drawArrays(n.POINTS, 0, x.length / S);
    }
    var P = He.glObj.programNode1 = Ba(n, i, s);
    n.useProgram(P);
    var R = n.getAttribLocation(P, "a_Position");
    n.bindFramebuffer(n.FRAMEBUFFER, null);
    var T = n.getUniformLocation(P, "u_resolution");
    n.uniform2f(T, He.width, He.height);
    var F = [
      -1,
      -1,
      -1,
      1,
      1,
      -1,
      1,
      1
    ], k = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, k), n.bufferData(n.ARRAY_BUFFER, new Float32Array(F), n.STATIC_DRAW), n.vertexAttribPointer(R, 2, n.FLOAT, !1, 0, 0), n.enableVertexAttribArray(R), n.drawArrays(n.TRIANGLE_STRIP, 0, 4), n.deleteFramebuffer(y);
  }
  return f(), window.gl = n, He.resetCfg = function(y) {
    var p = this.glObj.gl;
    p.useProgram(c), p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), He.glObj.cfg = y, f();
  }, He;
};
It.prototype.dataCuter = function(e, t, r) {
  var n = [];
  for (var o in t)
    for (var a in t[o])
      t[o][a] = parseInt(t[o][a]);
  t.sort(function(v, h) {
    return v[1] - h[1];
  });
  for (var o in t) {
    var i = t[o], s = i[0], c = i[1], l = i[2], u = c % e.height, d = Math.floor(c / e.height);
    n[d] || (n[d] = []), n[d].push([s, c - d * e.height, l]), e.height - u < r && (n[d + 1] || (n[d + 1] = []), n[d + 1].push([s, c - (d + 1) * e.height, l])), u < r && d - 1 >= 0 && (n[d - 1] || (n[d - 1] = []), n[d - 1].push([s, e.height + u, l]));
  }
  return n;
};
It.prototype.getNearPower = function(e) {
  return e;
};
It.prototype.render = function(e, t, r) {
  e.width = this.getNearPower(e.width), e.height = this.getNearPower(e.height);
  var n = [], o = this.dataCuter(e, t, 0);
  for (var a in o) {
    var i = this.bufferCuter(o[a]), s = this.createTplCanvas(e, i, r);
    n.push(s);
  }
  return n;
};
It.prototype.reset = function(e, t) {
  for (var r in t)
    t[r].resetCfg(e);
};
function H1(e, t = 12, r = 24, n = 256, o = 256) {
  const a = [];
  for (let c = 0; c < 1; c++) {
    let l = e;
    const u = 64, d = 64;
    for (let v = 0; v < u; v++)
      for (let h = 0; h < d; h++) {
        const m = l[v * d + h] ? l[v * d + h] * 1.8 : 0;
        a.push([h * (n / d), v * (o / u), m]);
      }
  }
  return new It().render({
    width: n,
    height: o,
    radius: r,
    max: t,
    min: 0,
    filter: 0,
    class: "body"
  }, a, "dynamic")[0];
}
function Kr(e, t, r) {
  var n;
  switch (t) {
    case "v":
      n = e.createShader(e.VERTEX_SHADER);
      break;
    case "f":
      n = e.createShader(e.FRAGMENT_SHADER);
      break;
    default:
      return;
  }
  if (e.shaderSource(n, r), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS))
    return n;
  alert(e.getShaderInfoLog(n));
}
function Ba(e, t, r) {
  var n = e.createProgram();
  if (e.attachShader(n, t), e.attachShader(n, r), e.linkProgram(n), e.getProgramParameter(n, e.LINK_STATUS))
    return n;
  alert(e.getProgramInfoLog(n));
}
const V1 = (e, t, r) => Math.min(r, Math.max(t, e)), B1 = (e, t) => {
  if (!e)
    return new Array(t * t).fill(0);
  if (Array.isArray(e[0])) {
    const o = [];
    for (let a = 0; a < t; a++) {
      const i = e[a] || [];
      for (let s = 0; s < t; s++)
        o.push(i[s] ?? 0);
    }
    return o;
  }
  const r = new Array(t * t).fill(0), n = Array.isArray(e) ? e : [];
  for (let o = 0; o < r.length; o++)
    r[o] = n[o] ?? 0;
  return r;
}, z1 = (e, t, r) => {
  if (!r || r <= 0)
    return e;
  const n = [...e];
  for (let o = 0; o < t; o++)
    for (let a = 0; a < t; a++)
      (o < r || o >= t - r || a < r || a >= t - r) && (n[o * t + a] = 0);
  return n;
}, W1 = (e, t) => {
  const r = [...e];
  for (let n = 0; n < t; n++)
    for (let o = 0; o < Math.floor(t / 2); o++) {
      const a = n * t + o, i = n * t + (t - 1 - o), s = r[a];
      r[a] = r[i], r[i] = s;
    }
  return r;
};
function e7({
  data: e,
  size: t = 64,
  maxValue: r = 12,
  radius: n = 24,
  filterValue: o = 0,
  border: a = 6,
  mirrorX: i = !0,
  canvasWidth: s = 1024,
  canvasHeight: c = 1024,
  className: l,
  style: u
}) {
  const d = G(null), v = J0(() => {
    const h = V1(Number(t) || 64, 2, 512);
    let m = B1(e, h);
    return a > 0 && (m = z1(m, h, a)), i && (m = W1(m, h)), o > 0 && (m = m.map((g) => g < o ? 0 : g)), { data: m, size: h };
  }, [e, t, a, i, o]);
  return Te(() => {
    if (!d.current)
      return;
    const h = H1(
      v.data,
      r,
      n,
      s,
      c
    ), m = d.current.getContext("2d");
    m && (m.clearRect(0, 0, d.current.width, d.current.height), m.drawImage(h, 0, 0, d.current.width, d.current.height));
  }, [v, r, n, s, c]), /* @__PURE__ */ Pe.jsx("div", { className: l, style: { width: "100%", height: "100%", ...u }, children: /* @__PURE__ */ Pe.jsx(
    "canvas",
    {
      ref: d,
      width: s,
      height: c,
      style: { width: "100%", height: "100%" }
    }
  ) });
}
const U1 = 64, G1 = 64, q1 = 13.005589453473025, X1 = [
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    4067491853174354e-22,
    32178397532077035e-22,
    1681732089521519e-20,
    59537335345163384e-21,
    14703777326673773e-20,
    2633369940594436e-19,
    3573164895315069e-19,
    38167716111852404e-20,
    3275526744823631e-19,
    22449549087784048e-20,
    11905063145006926e-20,
    4667004186645746e-20,
    129359787514998e-19,
    24482546129056417e-22,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3150123878486283e-22,
    29308197975150016e-22,
    18624236681800406e-21,
    8960403823979935e-20,
    33702667495934827e-20,
    9837672641704964e-19,
    0.002190458892114752,
    0.0037221423233521327,
    0.004926330941780228,
    0.005213610948316839,
    0.0044804965111595995,
    0.0031067307797271407,
    0.0016886003787639334,
    6908093119864384e-19,
    20480874041078242e-20,
    4282869064596045e-20,
    6194121204873493e-21,
    598183179343491e-21,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    5902227802550496e-22,
    6194121204873493e-21,
    4621055506834007e-20,
    24798990361649044e-20,
    0.001024368545835364,
    0.0033908024693034495,
    0.009037669291332815,
    0.01904221447804605,
    0.031404904585828036,
    0.040968889019198325,
    0.04313089321309769,
    0.03710434821422538,
    0.0259059444135006,
    0.014279453254267648,
    0.005977862996389131,
    0.0018326602566125347,
    4004740230818567e-19,
    6107620989467133e-20,
    62858580023423006e-22,
    31501238784862827e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    5822623811666082e-22,
    8120008637727567e-21,
    6943806909999513e-20,
    43984548865827656e-20,
    0.002085387346794372,
    0.0077014195998583845,
    0.02297343600934741,
    0.05622806599601647,
    0.11175983376496185,
    0.17814005211657274,
    0.22843525863642833,
    0.23898159450112033,
    0.20588712314874602,
    0.14501914159076867,
    0.0813696032208548,
    0.03508441858395197,
    0.011251292931019822,
    0.002631363743218356,
    44784854559358863e-20,
    5632337161797057e-20,
    4948444027837884e-21,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    2340597017259952e-21,
    12341906807046911e-21,
    4759117141070468e-20,
    167106050180352e-18,
    6801607742581448e-19,
    0.003078262007698173,
    0.01240823436499681,
    0.04088162092354008,
    0.11023404608681792,
    0.24717554387970805,
    0.46035507107622453,
    0.7046428089305746,
    0.8847462618731832,
    0.9185513036051828,
    0.793089359120684,
    0.565102954798937,
    0.32439365079514615,
    0.14520448132725947,
    0.04933241494806263,
    0.012660657859630511,
    0.0025588525758257342,
    4587322896630604e-19,
    83464116110578e-18,
    15613168613493845e-21,
    2615807409666373e-21,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    23326366181715106e-22,
    11966999218083242e-21,
    41516779435455916e-21,
    10178365228784826e-20,
    19717695198019544e-20,
    37151050742218096e-20,
    7894557586425173e-19,
    0.0018429906945373266,
    0.004979404079964329,
    0.01632195900518735,
    0.05434650147291384,
    0.15774336544788878,
    0.3839289443536674,
    0.7887133226105332,
    1.3726048833389966,
    2.0097585288419646,
    2.4645456365144307,
    2.537838266998505,
    2.198875100618329,
    1.5901926906632773,
    0.939709230808581,
    0.4416233501386695,
    0.1624597729292833,
    0.04778431456626495,
    0.01227524891313859,
    0.003155862135417775,
    8424851555612925e-19,
    20732343936629246e-20,
    4107362206676314e-20,
    5787372019556059e-21,
    5743019820781669e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    4067491853174354e-22,
    3209879354119262e-21,
    16733544496834824e-21,
    58959184198887374e-21,
    144627745803423e-18,
    25815271970467866e-20,
    35793894408150744e-20,
    430311500756666e-18,
    5480591775178495e-19,
    8787200852195716e-19,
    0.001557871199104807,
    0.002563577120503437,
    0.004088925493249132,
    0.007208245794420153,
    0.013920907470348512,
    0.028885381926350807,
    0.06944102356689055,
    0.18323158223530533,
    0.4568823058804514,
    0.9967429339795186,
    1.8784322701220186,
    3.060478263283645,
    4.288872391083598,
    5.138262841978806,
    5.253394295471978,
    4.577530169913054,
    3.373264631412857,
    2.0679426240378795,
    1.0365245488872212,
    0.426131915374143,
    0.1513612367140988,
    0.05144538037772743,
    0.017881719200252347,
    0.005967553590569226,
    0.0016784147273394192,
    36006724701241496e-20,
    54782391493240595e-21,
    5779411620467617e-21,
    2990915896717455e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    7816567742811052e-22,
    8012934149383676e-21,
    5470160119831065e-20,
    2573430768141993e-19,
    8458044997699723e-19,
    0.001984807576077963,
    0.0034501110579294157,
    0.004700989737118298,
    0.005486163262429712,
    0.006378377434490646,
    0.008746267624907881,
    0.013647246684772088,
    0.020576694202407403,
    0.02951074784074351,
    0.04494570611052408,
    0.07460843941086978,
    0.12857932082549864,
    0.23919483214596843,
    0.4928469266318074,
    1.0292840379557762,
    1.990920495309689,
    3.4443119486961855,
    5.279439595297314,
    7.1135701175845085,
    8.354907962165704,
    8.506605028722557,
    7.479610302209959,
    5.645865645566523,
    3.625745785273529,
    1.975264006465685,
    0.935772672568981,
    0.4119810631531591,
    0.1806168214803809,
    0.07805788659762306,
    0.030180719228042042,
    0.009352625172704633,
    0.0021521659648663536,
    34928395941173786e-20,
    3884864304423733e-20,
    233263661817151e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    6899199768122982e-22,
    10138215975352249e-21,
    8747419987153018e-20,
    5323827300427114e-19,
    0.002317245160098382,
    0.0072405928064616125,
    0.016469162477452684,
    0.028112742185480523,
    0.037875614774002406,
    0.04345330215467948,
    0.04781922131559915,
    0.0584562310891054,
    0.08101875058543107,
    0.11207657884575756,
    0.1468396563582972,
    0.19673405698099095,
    0.28390749860672126,
    0.4232811230047093,
    0.6501493091625185,
    1.0729829134467583,
    1.860492048464582,
    3.162671600637455,
    5.023944708581552,
    7.2865989583418855,
    9.502665901752648,
    11.00172595126228,
    11.206501977768989,
    9.99235885857714,
    7.778317162299728,
    5.2872580815316095,
    3.1763476835575375,
    1.7521383130418038,
    0.9394418927310804,
    0.5014455959160791,
    0.2528838416491321,
    0.10900814031383475,
    0.03659050668723265,
    0.008972112932210254,
    0.0015394253062122041,
    1791430490352999e-19,
    1196699921808324e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    30705198876018687e-23,
    68560487495298655e-22,
    8210444598991271e-20,
    6331370334029087e-19,
    0.0035057387730382883,
    0.014145416266608786,
    0.041812306801743596,
    0.0916392646789406,
    0.15293937955652423,
    0.2033453672863444,
    0.2301089174472165,
    0.2437650633277822,
    0.27239997862129633,
    0.3370744684602516,
    0.42540728721104926,
    0.5121720055371569,
    0.6128087236404105,
    0.7740520670732438,
    1.0153923957564963,
    1.3513025628966417,
    1.8729892880931789,
    2.74187330108596,
    4.103577398165051,
    6.003421695628287,
    8.292672369455486,
    10.545326837542444,
    12.1156894893422,
    12.42368389845684,
    11.309065766780892,
    9.147405235466307,
    6.628914846203135,
    4.398312818135095,
    2.781189108201632,
    1.7424374385411743,
    1.0738477350814646,
    0.6067222169956847,
    0.2850483505811086,
    0.10240423799316467,
    0.026539537928749052,
    0.004769621462269035,
    5763300740585893e-19,
    41616476632013164e-21,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2432333814728759e-21,
    4564135605970203e-20,
    47477138969717505e-20,
    0.003308856558328843,
    0.01662633652884767,
    0.061529352981717106,
    0.16977936421719236,
    0.3543824668979764,
    0.5735692396841434,
    0.7493616460484124,
    0.8368829496359937,
    0.8627177437063328,
    0.9011796483270619,
    1.007949941188666,
    1.1570118083980474,
    1.2805285919324214,
    1.3824984976059438,
    1.5372378366982553,
    1.7815478719495006,
    2.109456686417671,
    2.56942190978552,
    3.287146451865177,
    4.4029797631588385,
    5.991415082351738,
    7.961097552023779,
    9.973356666746668,
    11.482538606333152,
    11.96337211514549,
    11.216055924711316,
    9.493930138797134,
    7.345038758200469,
    5.322207268278133,
    3.745135950132381,
    2.626147519311817,
    1.79331728939965,
    1.1029047350475065,
    0.5550486149996195,
    0.21105469791909856,
    0.057362409988502096,
    0.010747068589973006,
    0.0013523816217549261,
    10594306224961838e-20,
    7816567742811052e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12712703161119979e-21,
    2102208102220655e-19,
    0.0019847014843323157,
    0.012702786149622515,
    0.05825650893439539,
    0.19701307946412747,
    0.5025792579781705,
    0.9881848011631876,
    1.5375132277943313,
    1.9634309331779236,
    2.1614516183837953,
    2.1822566490281456,
    2.169446046907658,
    2.2308231538426355,
    2.335332943342092,
    2.3713842713363142,
    2.318639861426414,
    2.273209190996515,
    2.316001118457921,
    2.4596427654347766,
    2.7165123423711686,
    3.1531929557001175,
    3.883545529544225,
    5.010689899921164,
    6.52406906505656,
    8.206032980370331,
    9.63626744929127,
    10.354129234850424,
    10.110780328054826,
    9.007463506029836,
    7.4140477332969095,
    5.769954268019291,
    4.385262789812176,
    3.3203766516276785,
    2.433936373079014,
    1.5937780409016686,
    0.8480654680619264,
    0.3394870228135352,
    0.09714745052355436,
    0.019331589904913377,
    0.002648361536926199,
    24415568093123845e-20,
    8012934149383676e-21,
    40674918531743536e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    44823819597093136e-21,
    6787780022313034e-19,
    0.006012189385605399,
    0.036063149706095095,
    0.15327310741274583,
    0.4773783811648917,
    1.1257220204865959,
    2.074406675426215,
    3.083699687506548,
    3.8312597281852243,
    4.148960136675033,
    4.114661292682861,
    3.9411298173338913,
    3.7894994249694016,
    3.646790608749056,
    3.393801992956239,
    2.998836505547568,
    2.577062738303213,
    2.270595457899315,
    2.1401036891278515,
    2.1716588101544905,
    2.355829861926449,
    2.7500666679283787,
    3.4647583130746007,
    4.571995550220703,
    5.982411010160817,
    7.385956942142567,
    8.361677635144,
    8.609997270493729,
    8.103345862024899,
    7.060259265423491,
    5.820530594903062,
    4.680614902721806,
    3.740036973761967,
    2.886744575931738,
    1.991450456111708,
    1.1221375407808303,
    0.4816374099060221,
    0.15148113171986927,
    0.03458420615576393,
    0.005790053655727316,
    7135897189216051e-19,
    5470160119831065e-20,
    32098793541192625e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10887153414608657e-20,
    0.0015577351824634612,
    0.013265433498602753,
    0.07613502748449558,
    0.3062049320084781,
    0.8943195270513664,
    1.9730906565446498,
    3.425688713243587,
    4.8682210335258835,
    5.875822790937158,
    6.249414413109484,
    6.090834241021943,
    5.657934702841436,
    5.151830530669718,
    4.601258848406362,
    3.9294387104778257,
    3.1271103266544844,
    2.330545711708486,
    1.7244348231844475,
    1.3925951092674826,
    1.2856122998161577,
    1.3249429401239095,
    1.5100081204432239,
    1.939725594228483,
    2.7474574098694537,
    3.956601362377647,
    5.349580538407581,
    6.531268396114651,
    7.166071593146295,
    7.142004023581032,
    6.571991262656059,
    5.7152197486638485,
    4.841353480119497,
    4.068169737044329,
    3.3082284288371464,
    2.4301390376498313,
    1.4906811134450946,
    0.7211206390391093,
    0.2674485716918549,
    0.0752862844509398,
    0.01591120807330786,
    0.0024594125198031344,
    2571436824210848e-19,
    16717623698657942e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    18621575355606937e-20,
    0.0025817142546247025,
    0.021524111660278736,
    0.12044505005204398,
    0.46867705192982817,
    1.3144827772990408,
    2.773009764932633,
    4.610878947350461,
    6.323799981924417,
    7.442731472054497,
    7.776048681518626,
    7.441939836340256,
    6.715628587768037,
    5.825072015800012,
    4.856219393995954,
    3.8118897221254997,
    2.732743594724954,
    1.7600274104591547,
    1.0619756595038732,
    0.6898323886301176,
    0.553939130583486,
    0.5419461235812163,
    0.6229091611136204,
    0.8751879182780951,
    1.4547273854207394,
    2.466997360728156,
    3.791057580266452,
    5.080149455580903,
    5.9846114952080605,
    6.337903420523082,
    6.1816658648733185,
    5.707142499247187,
    5.13984647480301,
    4.591082950139577,
    3.9854845213038415,
    3.1757441005570968,
    2.172826504455368,
    1.2101051184721863,
    0.5281278976792461,
    0.17484542505788403,
    0.0424310252431539,
    0.007282536871599502,
    8430839797849472e-19,
    58743869007596e-18,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2279267943426618e-19,
    0.0031275841564728573,
    0.02589408457371671,
    0.1436478710909514,
    0.5524575791538604,
    1.5261050025593599,
    3.161330760175413,
    5.154152236786764,
    6.9370239979542845,
    8.030753824759401,
    8.260420331391268,
    7.751096297931678,
    6.780050160985845,
    5.5959892390826,
    4.346979007999595,
    3.1264975375288766,
    2.0231407139319417,
    1.1398033060427304,
    0.5611994650771172,
    0.2746982707481917,
    0.1742257623645808,
    0.1573997287304449,
    0.1922036934426093,
    0.3343112095425472,
    0.7259701174416229,
    1.5184256666001694,
    2.698257695210807,
    4.0080872838701405,
    5.104208124579637,
    5.771302914237282,
    5.995691428419416,
    5.911941771346197,
    5.693026118644424,
    5.425314545190298,
    5.02796991737389,
    4.318904391372037,
    3.236272994143923,
    1.9973837919039528,
    0.9650703954868133,
    0.34869257427011124,
    0.09045805496300202,
    0.016279556185140022,
    0.0019625430135298506,
    14287326033152748e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20018983232350575e-20,
    0.00277251738685618,
    0.023086806559889837,
    0.12895098561586577,
    0.5002307584500458,
    1.3954102492728937,
    2.9172786437097624,
    4.78528586409854,
    6.445934079866127,
    7.421971394666998,
    7.538640384821928,
    6.91683142668711,
    5.832053992407809,
    4.550635667282872,
    3.2670674809736773,
    2.1310571848788893,
    1.2390519463124567,
    0.6204944188184965,
    0.2592638550304863,
    0.09556879130838612,
    0.042125948402651735,
    0.03258307059476463,
    0.04740622362394012,
    0.12213480485877162,
    0.3659313296007685,
    0.9402092481731081,
    1.9273747548698528,
    3.1875992701464675,
    4.410818650361992,
    5.336011174391793,
    5.893246937630917,
    6.169882838893907,
    6.296213976839423,
    6.327747031090738,
    6.156950498423967,
    5.553784251221536,
    4.38810751115068,
    2.8621936757714925,
    1.456071861529346,
    0.5490270852617534,
    0.14708340159561317,
    0.027085023004224808,
    0.0033263590233126674,
    24833645835568066e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12466127042779396e-20,
    0.0017785399042309401,
    0.015096426566622231,
    0.08624122076478186,
    0.3442957968548792,
    0.9933904653453778,
    2.150395259407306,
    3.6341453163193305,
    4.989347411730792,
    5.7735442486859885,
    5.804982726046012,
    5.186604665316748,
    4.18120328765599,
    3.056035557948303,
    2.0084760555180887,
    1.1731704046962645,
    0.6045586354946273,
    0.26947850166525245,
    0.09946898593747534,
    0.029844712738222264,
    0.008755294229825336,
    0.005146278217070984,
    0.01124514218134099,
    0.047372856915592156,
    0.18610647077350256,
    0.5675836249786755,
    1.3268652702790693,
    2.439221845211924,
    3.6713467042042183,
    4.746726616508603,
    5.536072761057262,
    6.07981578089966,
    6.482365584847178,
    6.772346119220795,
    6.798441781009942,
    6.28522597414874,
    5.076496289297906,
    3.383919456055542,
    1.757339890302095,
    0.6744423619792819,
    0.18319518236514387,
    0.03407870800125559,
    0.00421899613534655,
    31892539997462456e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    53901507729552484e-21,
    811377743044622e-18,
    0.007135692784964209,
    0.04240733342602699,
    0.17777479317854045,
    0.5422761149360747,
    1.2413886219324204,
    2.2002217867375267,
    3.1183625541815725,
    3.6526339806477695,
    3.6409680617114706,
    3.1556323397135118,
    2.4125236493349123,
    1.6367035722755916,
    0.9777918619028663,
    0.5074439881800012,
    0.2283173708345081,
    0.08918912221912915,
    0.029374726013727103,
    0.007727823103245535,
    0.0016765255825990659,
    7361486334553825e-19,
    0.0030644861386200156,
    0.018805046541241405,
    0.08912343627767874,
    0.31219686961598564,
    0.8205195776462254,
    1.6674993133975935,
    2.727505235263104,
    3.7652720704819522,
    4.616334219419599,
    5.277065818072349,
    5.831827535484257,
    6.2834779277091,
    6.436883313543092,
    6.000406850732137,
    4.851555344323968,
    3.2328387170093453,
    1.680687534951617,
    0.6466440592184675,
    0.17616909505146316,
    0.032860486299855295,
    0.004077025890069209,
    30967974596823926e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    15832420563621746e-21,
    25904018101920314e-20,
    0.0024115052564489046,
    0.015186336299943504,
    0.06812849498221529,
    0.22353502569638534,
    0.5484292306485619,
    1.0284394384579887,
    1.512624634031841,
    1.7987519450176563,
    1.779609644106957,
    1.4941710400229846,
    1.0782240899496778,
    0.6744995899101429,
    0.364840057151539,
    0.16814861055739988,
    0.06564271475038973,
    0.022023437982908782,
    0.006353206994887139,
    0.0014948430781173212,
    2654820482742568e-19,
    10771088203718622e-20,
    8873748431587999e-19,
    0.006792403564594444,
    0.036840122098177094,
    0.14489326829613436,
    0.4234184693173346,
    0.9472110167665821,
    1.6819457493598782,
    2.476950392283363,
    3.187013853339618,
    3.7889924738815175,
    4.344561820912909,
    4.8275200856496845,
    5.022847345291673,
    4.672084176611681,
    3.7259845113045724,
    2.442487381818129,
    1.2535369691537335,
    0.4785321837849207,
    0.1298553755622976,
    0.02417919407337476,
    0.002996093220115989,
    2278182973129222e-19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3102221758473572e-21,
    572425843472346e-19,
    5804245553004586e-19,
    0.003944588469353688,
    0.019221461505823087,
    0.0684849589631382,
    0.1807231699750643,
    0.35840940981349956,
    0.5461947633648638,
    0.6590534421318691,
    0.6479277068703265,
    0.5280878418847286,
    0.3599874002366118,
    0.207224197872371,
    0.10129729182205631,
    0.04161339731042914,
    0.014167959221259368,
    0.004041248909837828,
    9921806898277067e-19,
    20678007924365837e-20,
    3368074239485592e-20,
    2014454114394064e-20,
    23238218391278601e-20,
    0.0020191429492774733,
    0.012199536226205204,
    0.053254117516606005,
    0.1721280162292741,
    0.422529654631015,
    0.8117712006710722,
    1.2709633829411282,
    1.7144933922267849,
    2.129328931148806,
    2.5548878737844634,
    2.945660579253053,
    3.1115579112619676,
    2.8686502733389267,
    2.230615889384202,
    1.418907297746565,
    0.710044865481996,
    0.26653952613997534,
    0.071642197100318,
    0.013273300507056805,
    0.0016385072964436472,
    12454991819268278e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    398788786228994e-21,
    8682822093128489e-21,
    9955446521608331e-20,
    7413357989473908e-19,
    0.003953947222974666,
    0.01530042109868959,
    0.043200695862241394,
    0.08997371699051215,
    0.1412777254328938,
    0.17255999623832724,
    0.16879281863649212,
    0.13415834936208962,
    0.08690497308744824,
    0.04619771740393128,
    0.020411731356623525,
    0.007495034240808133,
    0.002246904447614494,
    5466953012253577e-19,
    11126339782014482e-20,
    1967288137870673e-20,
    2831122600957753e-21,
    3014596195895367e-21,
    46821539549519366e-21,
    45958276360619986e-20,
    0.003075160493014366,
    0.014855367324737065,
    0.05293102575737331,
    0.14175343442021093,
    0.2924132429687917,
    0.4836373087031066,
    0.6837295443971809,
    0.8948729568470095,
    1.138537509261542,
    1.373806445620873,
    1.475552074884819,
    1.343102858759909,
    1.009480986363719,
    0.6154277791363053,
    0.2964739699631291,
    0.10836088215472121,
    0.028672234640116968,
    0.00526766973942338,
    6460802260421259e-19,
    490800693297722e-19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    8813539708383537e-22,
    1206468651550812e-20,
    9964620201355211e-20,
    5823589862397027e-19,
    0.0024316672521537104,
    0.0072737085339984985,
    0.0157594582426413,
    0.02532973644133211,
    0.03123028672912398,
    0.030431451966176123,
    0.02371235095104514,
    0.014721668780415309,
    0.007283298850200086,
    0.0029118023269090977,
    9496153438526661e-19,
    2472502417352659e-19,
    4893148368461285e-20,
    6947785546998672e-21,
    6899199768122981e-22,
    3184159635376554e-23,
    30705198876018687e-23,
    6748391153884175e-21,
    7675916645758331e-20,
    5717853384429878e-19,
    0.0030555402402724615,
    0.011930365548837559,
    0.03450664313980082,
    0.07559125703674069,
    0.13112601897010606,
    0.19467103862094423,
    0.271992960380603,
    0.3722574782587401,
    0.4732927957479066,
    0.5174808249892179,
    0.46442098343470717,
    0.33579660576830017,
    0.19429417242115526,
    0.08894368759328006,
    0.03128296122048996,
    0.00808383665862155,
    0.001466038741554976,
    17800051399477279e-20,
    13514129897775805e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3980199544220693e-23,
    8813539708383537e-22,
    8690782492216931e-21,
    5744197874034911e-20,
    2612498223508539e-19,
    8271513570718145e-19,
    0.001857000745322036,
    0.003044569029298078,
    0.0037831631915792915,
    0.003674970092974651,
    0.002816587993690249,
    0.001684496232264642,
    7773093693875384e-19,
    27813237127074613e-20,
    7821911688210768e-20,
    17176220091363293e-21,
    28152018027808705e-22,
    3150123878486283e-22,
    23881197265324158e-24,
    0,
    23881197265324158e-24,
    6819595777238568e-22,
    9260973239404495e-21,
    7685886365414057e-20,
    4519666083439128e-19,
    0.0019138762405384307,
    0.005902975896865529,
    0.013578071621668963,
    0.024578502960052328,
    0.03857300419530743,
    0.05847643310324596,
    0.08707974747184707,
    0.11687389015842412,
    0.13001768269135927,
    0.11512882178000748,
    0.08007169388612759,
    0.04374916899834843,
    0.01881769643233873,
    0.006284554094244816,
    0.0015694303816538408,
    27913500731247643e-20,
    3336631311430909e-20,
    2532031011286007e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    398788786228994e-21,
    3110182157562014e-21,
    1594803855835588e-20,
    5485456646479216e-20,
    1299062696562643e-19,
    21957973139871012e-20,
    2761945942502176e-19,
    26694894024383226e-20,
    19906157035595165e-20,
    1115829275174196e-19,
    4519076678696837e-20,
    12744544757473745e-21,
    24323338147287592e-22,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    6819595777238568e-22,
    6756351552972616e-21,
    44963507716868774e-21,
    20786330066807916e-20,
    6817396981147667e-19,
    0.001639668731445369,
    0.0031028308920719623,
    0.00522040045061937,
    0.008746653694166693,
    0.01425228794034056,
    0.02012658521839355,
    0.02273527808082959,
    0.01990060511733802,
    0.01336183130497554,
    0.006896273276336491,
    0.002766095073668118,
    8651320687113879e-19,
    20598209303995265e-20,
    3559129213683491e-20,
    4152615777285287e-21,
    31501238784862827e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    24402942138172007e-22,
    12844241954030993e-21,
    462833247142075e-19,
    11952514864095148e-20,
    2436751752902692e-19,
    45803552037711534e-20,
    8769016330134672e-19,
    0.0015759689815484043,
    0.0023350093282941855,
    0.0026735819070837804,
    0.0023163394973554617,
    0.001505315143556965,
    7332646401060558e-19,
    27123082440031116e-20,
    7764038262852988e-20,
    1716825969227485e-20,
    28231622018693115e-22,
    3150123878486283e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    24323338147287592e-22,
    12736584358385302e-21,
    4509902998949956e-20,
    11092896037185167e-20,
    19614920774565283e-20,
    25952604038671117e-20,
    2691365217893576e-19,
    23678463321027038e-20,
    20680962264540975e-20,
    20255805658859837e-20,
    19793257297664015e-20,
    15989136041382756e-20,
    962115954595836e-19,
    40958398251554635e-21,
    11943118020817917e-21,
    23326366181715106e-22,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    31501238784862827e-23,
    4052918580728039e-21,
    32125651316074914e-21,
    16836211770988817e-20,
    5969906951758446e-19,
    0.0014715066495674042,
    0.0026086860580670427,
    0.00344843602966067,
    0.003488586437529394,
    0.0027117432416715655,
    0.001590925587762612,
    6851610210411636e-19,
    2111738689573052e-19,
    45733092857170836e-21,
    6864009148618307e-21,
    6899199768122981e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    41470958440587676e-23,
    33095765506765107e-22,
    17503129637136886e-21,
    628484867416912e-19,
    15756289488233241e-20,
    2862274870839254e-19,
    39401309544949913e-20,
    4294350785571725e-19,
    3800390166820627e-19,
    27043775080221803e-20,
    14848520674987304e-20,
    59728769339189436e-21,
    16833241693392072e-21,
    32178397532077035e-22,
    4067491853174354e-22,
    3184159635376554e-23,
    0,
    0,
    23881197265324158e-24,
    28152018027808697e-22,
    34729970199064045e-21,
    26891845988131585e-20,
    0.0013889053701893017,
    0.004882678840368249,
    0.011983871455144828,
    0.021227286573608097,
    0.02812743997406629,
    0.028636173113635296,
    0.022543565316605757,
    0.013552617920076046,
    0.0061407080962046084,
    0.0021616320811020232,
    7200549909937481e-19,
    33550028401311736e-20,
    20521874699103127e-20,
    11158703875231021e-20,
    4512291118676489e-20,
    12736584358385302e-21,
    24323338147287592e-22,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    7896171733695467e-22,
    8212328542498173e-21,
    56735729334112206e-21,
    27107017003500224e-20,
    9090208517316576e-19,
    0.002183368478666505,
    0.0038720926781830953,
    0.005272948434356916,
    0.005738434865712983,
    0.0051163718787471104,
    0.0037224919052283338,
    0.00215040341782607,
    9601390932205893e-19,
    3294395038677667e-19,
    8806486795919523e-20,
    1842484228868591e-20,
    29148989993381187e-22,
    3150123878486283e-22,
    23881197265324158e-24,
    2990915896717455e-22,
    17068562495717603e-21,
    200935905097295e-18,
    0.0015129165281058251,
    0.007672781933775517,
    0.026676960347174167,
    0.06510784795220452,
    0.11518746655723289,
    0.15307639505432957,
    0.15708091913956163,
    0.12560205987115214,
    0.0777308634752358,
    0.037258401486361156,
    0.014848998720209696,
    0.006380484006344954,
    0.003824364213701397,
    0.002554313115497864,
    0.0014147488921945638,
    5748894027293071e-19,
    16272629009427727e-20,
    3114075098448147e-20,
    3937300585993907e-21,
    30705198876018687e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4147095844058768e-22,
    8204368143409732e-21,
    7986600500833158e-20,
    5226920047762746e-19,
    0.002386627523815926,
    0.007731083139296712,
    0.018134363812824003,
    0.031711262342062244,
    0.0429058956556851,
    0.04666181092625166,
    0.04180987229591888,
    0.030840008908294095,
    0.0183539557761939,
    0.008673242661484271,
    0.0032703684289506737,
    997775681331529e-18,
    244029304940533e-18,
    45819726681199524e-21,
    61782004066966105e-22,
    5902227802550496e-22,
    2356517815436834e-21,
    7687079748822781e-20,
    8432045300940734e-19,
    0.006059553284567811,
    0.029748062706076574,
    0.10128161951297415,
    0.24431373433337908,
    0.43045231792916977,
    0.5734955209812833,
    0.5943034071332362,
    0.48494290627189973,
    0.31182972105665274,
    0.16101724783085658,
    0.0746844721252156,
    0.04054872329313849,
    0.028439936065510873,
    0.019849565548156395,
    0.011093467346171518,
    0.004519303275861565,
    0.001280985099320443,
    2453860107308903e-19,
    3104901418701266e-20,
    24243734156403174e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3584786943082932e-21,
    5866957716605471e-20,
    5318473303191656e-19,
    0.003281406014654775,
    0.014240866566017054,
    0.044302661983630504,
    0.10097072309682155,
    0.17348875785536869,
    0.23281016385436948,
    0.25296057277448786,
    0.22807232362228808,
    0.17111063350390335,
    0.10547638466562019,
    0.05299907460942109,
    0.021834400230385655,
    0.007377729043874185,
    0.001987269175027808,
    40594043221360804e-20,
    59512575309500094e-21,
    6078503210139361e-21,
    12274051206843429e-21,
    2676167322499138e-19,
    0.0026938731549338,
    0.018141918255553287,
    0.08470935363964348,
    0.27843851603222763,
    0.6574310867052187,
    1.1473471974946265,
    1.5298008851155953,
    1.6029525160433367,
    1.340810674022468,
    0.9043725525386349,
    0.5118145868197046,
    0.2799784829988241,
    0.1840531322218364,
    0.14230153404874754,
    0.10187092355446631,
    0.057292771648986135,
    0.023401857717433763,
    0.006644374834694769,
    0.0012743513855506278,
    1613938914985743e-19,
    12620966363651172e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2990915896717455e-22,
    20957865038521434e-21,
    29586073554452677e-20,
    0.002502210477182687,
    0.014527823263598213,
    0.05964357159443533,
    0.17700453303709252,
    0.38932036483005167,
    0.6539150440309326,
    0.8680137256812239,
    0.9421275431621716,
    0.8567037023603945,
    0.6572029988890262,
    0.42316666298625527,
    0.22811435118532963,
    0.1029909960781567,
    0.03831920301449024,
    0.011270885226699237,
    0.002492556322864727,
    39610264153560893e-20,
    43785598545397966e-21,
    43957073649273115e-21,
    7238680028269114e-19,
    0.00672713552794511,
    0.042230025933582875,
    0.18540410887568545,
    0.5807744658171007,
    1.3277111349280406,
    2.2788762355761616,
    3.0307590217684712,
    3.210517844583552,
    2.760639359365795,
    1.965887352370661,
    1.2292510097744793,
    0.7832327553295501,
    0.5901637523134002,
    0.4833945144314258,
    0.3514102853788176,
    0.1986348429568935,
    0.08136458073713532,
    0.02314631266835465,
    0.004445471089561414,
    5635991631893713e-19,
    44145971254259885e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23087554209061862e-22,
    8954665697290769e-20,
    0.001102785166626576,
    0.008634470278636881,
    0.046883028625789434,
    0.18106490212895052,
    0.5094589510047125,
    1.0745758603516251,
    1.7553198377213959,
    2.298351347227422,
    2.491586191635001,
    2.2908141312625,
    1.8060890831660499,
    1.2228443424151474,
    0.7103776915727469,
    0.3508681810877463,
    0.1428716411844861,
    0.04569863510995558,
    0.010956497542336026,
    0.0019014700120901212,
    23390430978606613e-20,
    11703634685934269e-20,
    0.0015074041872296948,
    0.013196652416614678,
    0.07805420209316014,
    0.3229812399994131,
    0.9603711581183789,
    2.111784454294773,
    3.543621991829057,
    4.682802592472385,
    5.006576334390102,
    4.425360029932792,
    3.328169232934826,
    2.283842028328474,
    1.6385416889272566,
    1.3442380198867916,
    1.1360532533501462,
    0.8329442642726685,
    0.4724210731684181,
    0.19392417451066662,
    0.05524615727585499,
    0.010620979626602045,
    0.001347548406296005,
    105660079946116e-18,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    11667907628411495e-21,
    2927272898114737e-19,
    0.003172032538697223,
    0.022766774741589273,
    0.11459206858755608,
    0.413672724715954,
    1.0979477916068912,
    2.210493659633572,
    3.49777221476207,
    4.507025488744976,
    4.879526341885462,
    4.545351806994934,
    3.6951756444648334,
    2.6373251092336742,
    1.6488303211742559,
    0.8861627852289489,
    0.39317184769871527,
    0.1370690346626332,
    0.03615711535739883,
    0.007198713004537629,
    0.0012475697414006438,
    5398357489345304e-19,
    0.002723750090544183,
    0.020858807210535867,
    0.11688103798625905,
    0.46073845790741924,
    1.3086000733304262,
    2.771099416181133,
    4.537942390025063,
    5.943377126773546,
    6.3975089252107065,
    5.794646075039587,
    4.568743952076861,
    3.3680561910515343,
    2.6037935370616436,
    2.2271992435170644,
    1.9031433769671393,
    1.39690289763479,
    0.7918866892474151,
    0.3248323456587848,
    0.09247204617238666,
    0.017766331791974472,
    0.0022531329510037433,
    17646021708077672e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3890097202578955e-20,
    7380146140552953e-19,
    0.007195918429057936,
    0.047379180974053026,
    0.220234740279942,
    0.7403335698672543,
    1.848849269792764,
    3.5467831376132644,
    5.428166953956776,
    6.8753581125567695,
    7.432743036813426,
    7.0204935053898225,
    5.887554727505693,
    4.42011006911508,
    2.957856534444351,
    1.7204140993726156,
    0.8323499671390215,
    0.3205767002542007,
    0.09656257897082715,
    0.02420315181175277,
    0.007002115298287167,
    0.0042223212771710615,
    0.006959279769139136,
    0.03072884420615751,
    0.15146665547251673,
    0.5653134613482845,
    1.5405636112222945,
    3.153311630439029,
    5.0432191990150415,
    6.536808976559419,
    7.063050714369869,
    6.516557539284819,
    5.310976402936279,
    4.079598747231217,
    3.2467512380795407,
    2.7869207827158906,
    2.3587638270369036,
    1.713478022215469,
    0.9628714917408626,
    0.39211603850094806,
    0.11098367723263768,
    0.021230649640371135,
    0.002683883655376921,
    2089256038609839e-19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8627018087091166e-20,
    0.0013999922950899111,
    0.012711250216573038,
    0.0781963696774363,
    0.33943086460088767,
    1.0698224709821322,
    2.5264382577521767,
    4.6368261064790754,
    6.882165524106329,
    8.57828981329274,
    9.261694881239418,
    8.866401530683053,
    7.655191045920679,
    6.017223711038188,
    4.284578686787952,
    2.6918961853247243,
    1.4332256415183573,
    0.6274107997686672,
    0.22942688495654365,
    0.08063377450296137,
    0.03867723041159255,
    0.030329983902696526,
    0.03351092431037286,
    0.06380297710405165,
    0.20650329142011647,
    0.6671170894181692,
    1.6979783146417402,
    3.3267192363409537,
    5.168587320283759,
    6.599950305191819,
    7.1203691474660324,
    6.6304774406005045,
    5.480638062891453,
    4.235899581171452,
    3.31274761283459,
    2.7406607424439304,
    2.237947179546424,
    1.5810576330120265,
    0.8688760055007887,
    0.3474480528249808,
    0.09693787501002613,
    0.018345616577809785,
    0.0023005021598488658,
    17646021708077672e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12819241717322097e-20,
    0.0019353787013223836,
    0.01693637154372812,
    0.10021626038333975,
    0.4169734016800046,
    1.2597441092877832,
    2.8637672260608142,
    5.097592353775745,
    7.406719439365995,
    9.131602693965348,
    9.863189432684544,
    9.5650585773497,
    8.481230279983745,
    6.949994715686511,
    5.247064359132599,
    3.570569627082409,
    2.124950084226122,
    1.0938535644892675,
    0.5116518053656592,
    0.25752882813967376,
    0.17438172690348347,
    0.15628449167457759,
    0.1616561338140282,
    0.20599760338411127,
    0.3854636061775074,
    0.9041553277958783,
    1.971598775583907,
    3.549272212535021,
    5.242079591998469,
    6.507241347803186,
    6.936212795247752,
    6.436148877420483,
    5.281101727676656,
    3.9598601608155564,
    2.8907756608864252,
    2.1859888992209626,
    1.6570193309201582,
    1.1113709555229743,
    0.5871643560532135,
    0.2273704950995209,
    0.06181905584081056,
    0.011471300939556978,
    0.0014167037069956923,
    105660079946116e-18,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12819241717322097e-20,
    0.0019103433110342909,
    0.01659487365994424,
    0.0974075673144762,
    0.4015204050380526,
    1.2010962032337118,
    2.7050796855114108,
    4.779042071287847,
    6.911748606964844,
    8.516416061192471,
    9.248126789400246,
    9.094477319297624,
    8.269763949368265,
    7.046447089211637,
    5.632226019418162,
    4.166709072230963,
    2.806116426079231,
    1.7308022525068023,
    1.042052335378641,
    0.7019328647696548,
    0.5826335909128758,
    0.5604136975061367,
    0.5762823874394145,
    0.6512731830844772,
    0.8982757491841933,
    1.5098330686291543,
    2.623941274356098,
    4.117607084677102,
    5.5950738178037716,
    6.609921054762051,
    6.852564958270388,
    6.244732042308547,
    4.996562765542915,
    3.5347571012541477,
    2.293119934193587,
    1.4725370698059108,
    0.9688201258162917,
    0.5936242293418862,
    0.29544470484637936,
    0.10921557611314434,
    0.028582739356879546,
    0.005146867650194504,
    6203275242419987e-19,
    44145971254259885e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8627018087091166e-20,
    0.0013406326308655495,
    0.011883273606989903,
    0.07131025001094905,
    0.3010415600739557,
    0.9219200439421326,
    2.120491605033636,
    3.814163037987656,
    5.602666607755477,
    7.001278615671911,
    7.710578369975373,
    7.7149631767800795,
    7.194156223683294,
    6.36346964319792,
    5.374896468413219,
    4.320574757358228,
    3.2947417027337753,
    2.422760030356167,
    1.8172958278110594,
    1.5073825847242595,
    1.4147044882384,
    1.4228760830751468,
    1.473170275333862,
    1.6057651128694546,
    1.955213508053594,
    2.6891193176863952,
    3.8524133783436465,
    5.232033057418054,
    6.437164199737392,
    7.1139774439406,
    7.054432297036326,
    6.225585975959143,
    4.813211486167357,
    3.1995275078292638,
    1.8204767503482668,
    0.9311729344749607,
    0.47400337786846647,
    0.24307951017595253,
    0.10961252067347564,
    0.03802686191003824,
    0.009464756044331968,
    0.0016374718517981404,
    19063661972718677e-20,
    12620966363651172e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3890097202578955e-20,
    6777300513323457e-19,
    0.006311113033589177,
    0.039842272233848695,
    0.17705455703075565,
    0.56895602859268,
    1.365615336355118,
    2.5504732902042178,
    3.875913087732163,
    4.99067697350212,
    5.634841007730882,
    5.765089037630247,
    5.515891166332748,
    5.053621048525907,
    4.491513835457966,
    3.900029788701862,
    3.3400143215308082,
    2.8779480437726397,
    2.5816006847816046,
    2.482839898723419,
    2.5330497105049656,
    2.6415911149264284,
    2.7755706788031267,
    3.012812696219613,
    3.5142035249880097,
    4.4137858623316415,
    5.656594951599137,
    6.936723677710515,
    7.848442455933839,
    8.099929734615543,
    7.591615940402844,
    6.397464212162721,
    4.747642417825729,
    3.000719074394306,
    1.554903127566519,
    0.6524222514663331,
    0.2365843935553832,
    0.08495551599296665,
    0.03071509285878738,
    0.009537703209961095,
    0.002214317989702532,
    365378281952242e-18,
    4068337678692439e-20,
    24243734156403174e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    11667907628411495e-21,
    2544064603732366e-19,
    0.00255665836748634,
    0.017322543221654954,
    0.08210992206252465,
    0.27935651291905145,
    0.7058810154111224,
    1.3852015966066267,
    2.2098802609543493,
    2.972235766881302,
    3.472429945639027,
    3.6469069942603394,
    3.577699767310503,
    3.3814161691148232,
    3.1426496541255555,
    2.928715602806843,
    2.7995823497254384,
    2.789719229496515,
    2.9071787661878514,
    3.1386007582844995,
    3.430888160296555,
    3.7176355715480645,
    4.005945478714686,
    4.425625960316471,
    5.171317509121967,
    6.345246743427204,
    7.789683153706031,
    9.080381956834167,
    9.7414629405299,
    9.500719200276272,
    8.388109595666124,
    6.6635424421246086,
    4.684196136631395,
    2.815405385834456,
    1.3759889294965353,
    0.5205524438834439,
    0.1498837312587427,
    0.03507753760246843,
    0.007872533592098732,
    0.0018109649171961027,
    360299076153906e-18,
    5651742803937041e-20,
    5970845614493672e-21,
    30705198876018687e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23087554209061862e-22,
    733841328958508e-19,
    8042614167404026e-19,
    0.005858215609579022,
    0.029487862147583286,
    0.10581448551404296,
    0.28200567065553406,
    0.5864531638954996,
    0.9931266114837085,
    1.4070989642202756,
    1.7079794091808072,
    1.8419451610944257,
    1.8472845492074308,
    1.791270556098453,
    1.7316035492076818,
    1.7312555839485209,
    1.856052142944746,
    2.136405926877529,
    2.554284178425271,
    3.061985073820357,
    3.590158150298421,
    4.082003134327217,
    4.577122029336374,
    5.257449873693622,
    6.355585221824395,
    7.946272926413819,
    9.76188423173983,
    11.220804778610486,
    11.717954998259671,
    10.972455176024726,
    9.170435716669045,
    6.817158889529653,
    4.458977116203319,
    2.49863350286146,
    1.1462955563724682,
    0.40726738241938587,
    0.10671643813255839,
    0.020183252558171147,
    0.0028677278738453754,
    351581134659338e-18,
    3952649138707058e-20,
    5871148417936424e-21,
    5822623811666082e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2990915896717455e-22,
    16390714152884348e-21,
    19313224255509747e-20,
    0.0014917627685307362,
    0.007874556244712266,
    0.029642481848188813,
    0.08361346143129152,
    0.1858676727259888,
    0.33639012132702006,
    0.5028711096087275,
    0.6330255616426906,
    0.6987345158524634,
    0.7132175896208193,
    0.7060147125999146,
    0.7090165836610078,
    0.7679896009079008,
    0.9393516065630725,
    1.2592721610340223,
    1.7254888933180408,
    2.3013485082027803,
    2.922845988278646,
    3.538633346025268,
    4.204178153008141,
    5.137513952416537,
    6.600176095789664,
    8.639463096773023,
    10.882265854638252,
    12.58585253132409,
    13.005589453473025,
    11.849561156947475,
    9.460141816048331,
    6.582536085038992,
    3.9525242050227742,
    2.0101955611983424,
    0.8393656400112789,
    0.27524396238799,
    0.06739204554947202,
    0.011771800491636102,
    0.0014127717163506135,
    11018825850890128e-20,
    23326366181715106e-22,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    27234650053120633e-22,
    3367278199576748e-20,
    27219659342216535e-20,
    0.0014955523738769826,
    0.005914725429442063,
    0.017807476385200423,
    0.042646205988857065,
    0.0825658142239488,
    0.12962821323163204,
    0.16825638573544488,
    0.18916032650132975,
    0.1956613652403174,
    0.1971529868882363,
    0.20672548610354152,
    0.24781634454032014,
    0.354554768393992,
    0.5594606873597514,
    0.8817292462329607,
    1.318043127226538,
    1.8362223383956384,
    2.404939061665943,
    3.0897599883837916,
    4.121107386279162,
    5.766555282665314,
    8.048690342561612,
    10.53004738373338,
    12.376623475952588,
    12.770265893589997,
    11.426640683906228,
    8.79246870849093,
    5.759485428523606,
    3.1658261175702114,
    1.4359039875113373,
    0.5278595886906593,
    0.1535413424598715,
    0.03408976974095977,
    0.0055141856717163176,
    6101540127298347e-19,
    4123360864396105e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    30705198876018687e-23,
    3961181783259232e-21,
    33672781995767476e-21,
    19389386729631107e-20,
    8157498844588494e-19,
    0.002655661981352151,
    0.006885994764901244,
    0.014198771177615033,
    0.023226842691744312,
    0.030875834983862663,
    0.03518744213569924,
    0.0367632388992326,
    0.0377102543985591,
    0.04182939629557886,
    0.05732202592152049,
    0.09844869562001357,
    0.1842436350267766,
    0.33530797572015164,
    0.5659971097014986,
    0.8741502284533509,
    1.2566186286001202,
    1.7871493039188122,
    2.680042697291204,
    4.179271221007777,
    6.298982373817795,
    8.621571472980769,
    10.354835926848907,
    10.7252057814885,
    9.479685466803947,
    7.07550894993925,
    4.393939674408826,
    2.2255782666955604,
    0.9008629109693784,
    0.28721085935718815,
    0.07151904512582612,
    0.013732198635451212,
    0.001966694638536209,
    19366513078934407e-20,
    1196699921808324e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    27234650053120633e-22,
    16490411349441596e-21,
    749000050864914e-19,
    2675075524585942e-19,
    7540241988117182e-19,
    0.0016486375625998184,
    0.0027928816116701625,
    0.003784697499170934,
    0.004359700650541411,
    0.004594954354122804,
    0.0048193067336889505,
    0.005794038497317735,
    0.009468510560648685,
    0.01993359815842492,
    0.04437887049689374,
    0.09348820238713902,
    0.1790323729875685,
    0.30851904495905463,
    0.49384948196537926,
    0.8010537643224347,
    1.3950345224229925,
    2.4665316874336503,
    4.0411467254705915,
    5.8118712750796355,
    7.163601181221187,
    7.478674459543631,
    6.552025359221569,
    4.758372680501636,
    2.8141275036667994,
    1.3250615993789916,
    0.48520969338349,
    0.13566480309295761,
    0.02873231558711658,
    0.004601422627572718,
    546119132072804e-18,
    42937339980155654e-21,
    233263661817151e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    24323338147287592e-22,
    12744544757473745e-21,
    45222608383322136e-21,
    1119817163036486e-19,
    20217175251351367e-20,
    2829049392012766e-19,
    33144794950123877e-20,
    3541011499838016e-19,
    38596348806539503e-20,
    5309338320761818e-19,
    0.0011046118722372743,
    0.002909656365969105,
    0.007720057394011568,
    0.018842407272220495,
    0.04097053730362834,
    0.07907346852671535,
    0.14383336090174967,
    0.27664006881903935,
    0.5746351265397084,
    1.1579538708246417,
    2.0633661294271226,
    3.1279705101317252,
    3.9752557512241573,
    4.19926129417208,
    3.6539482483226706,
    2.583516119332894,
    1.4566197597363932,
    0.6407896606775935,
    0.21507069320633057,
    0.053951711983768386,
    0.009963779319736238,
    0.0013374778734163602,
    1251360322947594e-19,
    6564917558946561e-21,
    2990915896717455e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    2715504606223622e-21,
    16382753753795904e-21,
    7616396497468911e-20,
    2895577404260802e-19,
    9462058612817631e-19,
    0.002695851817421179,
    0.00665606853915967,
    0.014495710719026658,
    0.031020913173001707,
    0.07375929081205834,
    0.18424950644350988,
    0.41981058074632394,
    0.8113274586656899,
    1.3006801274724626,
    1.712562586772885,
    1.8367707454026552,
    1.5894295777638612,
    1.0938635970279753,
    0.587716489170019,
    0.24184979372015322,
    0.07485192672910793,
    0.017111337613026658,
    0.0028356362043123,
    32955587898681e-17,
    24240032264343817e-21,
    6739991786354153e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    2715504606223622e-21,
    162910169563271e-19,
    7298149494542397e-20,
    25735375765419696e-20,
    7406694486832852e-19,
    0.001878428222822324,
    0.0050073792012368555,
    0.01513090702848038,
    0.04479003667624511,
    0.11381392957762673,
    0.23803652814306797,
    0.4048428125837173,
    0.5541202575032977,
    0.6046305132862502,
    0.5208353781452475,
    0.3491415530726313,
    0.17891182657334515,
    0.06893352741363643,
    0.019704070400269582,
    0.004124152097814433,
    6208854861695935e-19,
    6351989884318667e-20,
    36844841396401805e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    2340597017259952e-21,
    12357827605223793e-21,
    4798996019693367e-20,
    1624092261889027e-19,
    6006804778627589e-19,
    0.002329296694898684,
    0.007985138716771062,
    0.02240627405672311,
    0.050713743732433,
    0.09164702813957162,
    0.1304517099997004,
    0.14481670378266487,
    0.12428898283428214,
    0.0813441963633752,
    0.03989331023291019,
    0.014439584843007256,
    0.003818835859825974,
    7319517131969791e-19,
    10021540102219016e-20,
    8989874081888676e-21,
    4147095844058768e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    598183179343491e-21,
    6393515597987991e-21,
    4746713766475114e-20,
    251201357816461e-18,
    0.0010011132134747117,
    0.003113534554217674,
    0.007648273096757398,
    0.014674863052957305,
    0.02166787968749958,
    0.024432520887098675,
    0.020908207459889,
    0.013405705621619392,
    0.006326299176438175,
    0.002163659149710805,
    5316226131123376e-19,
    9339821365743738e-20,
    11602153363966244e-21,
    8893143699267951e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    32297278693706967e-23,
    29308197975150016e-22,
    18045502428222603e-21,
    8240692790728146e-20,
    2889484395561491e-19,
    7795157066284844e-19,
    0.0015924905955298787,
    0.002436533302135232,
    0.00278775756120765,
    0.00237953642268871,
    0.0014969207312956478,
    6803636002808941e-19,
    21907757463240926e-20,
    4925897633768825e-20,
    764155468800881e-20,
    7975775724579879e-22,
    3980199544220693e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    23326366181715106e-22,
    11943118020817917e-21,
    4093451705428931e-20,
    959045434708234e-19,
    1574590265990988e-19,
    18519598861825484e-20,
    1574590265990988e-19,
    959045434708234e-19,
    4093451705428931e-20,
    11943118020817917e-21,
    23326366181715106e-22,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
], za = {
  width: U1,
  height: G1,
  max_val: q1,
  data: X1
};
function Xn(e, t = 5, r = 1.5) {
  const n = e.length, o = e[0].length, a = [], i = [], s = Math.floor(t / 2);
  let c = 0;
  for (let l = -s; l <= s; l++) {
    const u = [];
    for (let d = -s; d <= s; d++) {
      const v = Math.exp(-(d * d + l * l) / (2 * r * r));
      u.push(v), c += v;
    }
    i.push(u);
  }
  for (let l = 0; l < t; l++)
    for (let u = 0; u < t; u++)
      i[l][u] /= c;
  for (let l = 0; l < n; l++) {
    const u = [];
    for (let d = 0; d < o; d++) {
      let v = 0;
      for (let h = -s; h <= s; h++)
        for (let m = -s; m <= s; m++) {
          let g = Math.max(0, Math.min(n - 1, l + h)), f = Math.max(0, Math.min(o - 1, d + m));
          v += e[g][f] * i[h + s][m + s];
        }
      u.push(v);
    }
    a.push(u);
  }
  return a;
}
function Y1(e, t, r) {
  const n = e.length, o = e[0].length, a = Math.floor(t), i = Math.floor(r), s = Math.min(a + 1, o - 1), c = Math.min(i + 1, n - 1), l = t - a, u = r - i, d = e[i][a], v = e[i][s], h = e[c][a], m = e[c][s], g = d * (1 - l) + v * l, f = h * (1 - l) + m * l;
  return g * (1 - u) + f * u;
}
function vo(e, t = 256) {
  const r = e.length, n = e[0].length, o = Xn(e, 5, 1.2), a = Xn(o, 3, 0.8), i = new Float32Array(t * t);
  for (let l = 0; l < t; l++)
    for (let u = 0; u < t; u++) {
      const d = u / t * (n - 1), v = l / t * (r - 1);
      let h = Y1(a, d, v);
      h = Math.max(0, Math.min(h, 255)), i[l * t + u] = h;
    }
  const s = [];
  for (let l = 0; l < t; l++) {
    const u = [];
    for (let d = 0; d < t; d++)
      u.push(i[l * t + d]);
    s.push(u);
  }
  const c = Xn(s, 7, 2);
  for (let l = 0; l < t; l++)
    for (let u = 0; u < t; u++)
      i[l * t + u] = c[l][u];
  return i;
}
const Wa = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform sampler2D uPressureMap;
uniform float uDisplacementScale;
uniform float uThickness;
uniform float uSmoothness;

float getSmoothedPressure(vec2 uv) {
    float texSize = 256.0;
    float offset = 1.0 / texSize;
    
    float p = texture2D(uPressureMap, uv).r;
    
    if (uSmoothness < 0.01) return p;
    
    float kernel[25];
    kernel[0] = 0.003765; kernel[1] = 0.015019; kernel[2] = 0.023792; kernel[3] = 0.015019; kernel[4] = 0.003765;
    kernel[5] = 0.015019; kernel[6] = 0.059912; kernel[7] = 0.094907; kernel[8] = 0.059912; kernel[9] = 0.015019;
    kernel[10] = 0.023792; kernel[11] = 0.094907; kernel[12] = 0.150342; kernel[13] = 0.094907; kernel[14] = 0.023792;
    kernel[15] = 0.015019; kernel[16] = 0.059912; kernel[17] = 0.094907; kernel[18] = 0.059912; kernel[19] = 0.015019;
    kernel[20] = 0.003765; kernel[21] = 0.015019; kernel[22] = 0.023792; kernel[23] = 0.015019; kernel[24] = 0.003765;
    
    float blurred = 0.0;
    int idx = 0;
    
    for (int dy = -2; dy <= 2; dy++) {
        for (int dx = -2; dx <= 2; dx++) {
            vec2 sampleUv = uv + vec2(float(dx) * offset, float(dy) * offset);
            blurred += texture2D(uPressureMap, sampleUv).r * kernel[idx];
            idx++;
        }
    }
    
    float smoothFactor = uSmoothness * 2.0;
    smoothFactor = clamp(smoothFactor, 0.0, 1.0);
    
    return mix(p, blurred, smoothFactor);
}

void main() {
  vUv = uv;
  vec3 objectNormal = normal;
  
  if (objectNormal.z > 0.5) {
      float pressure = getSmoothedPressure(uv);
      vPressure = pressure;
      
      vec3 newPosition = position;
      
      float maxDisplacement = uThickness * 0.85;
      float mappedPressure = pow(pressure, 0.7);
      float displacement = min(mappedPressure * uDisplacementScale, maxDisplacement);
      
      newPosition.z -= displacement;
      
      float texSize = 256.0;
      float offset = 2.0 / texSize;
      
      float pL = getSmoothedPressure(uv + vec2(-offset, 0.0));
      float pR = getSmoothedPressure(uv + vec2(offset, 0.0));
      float pD = getSmoothedPressure(uv + vec2(0.0, -offset));
      float pU = getSmoothedPressure(uv + vec2(0.0, offset));
      
      float hL = min(pL * uDisplacementScale, maxDisplacement);
      float hR = min(pR * uDisplacementScale, maxDisplacement);
      float hD = min(pD * uDisplacementScale, maxDisplacement);
      float hU = min(pU * uDisplacementScale, maxDisplacement);
      
      vec3 vT = normalize(vec3(2.0 * offset, 0.0, hL - hR));
      vec3 vB = normalize(vec3(0.0, 2.0 * offset, hD - hU));
      vNormal = normalize(cross(vT, vB));
      
      vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  } else {
      vPressure = 0.0;
      vNormal = normal;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
}
`, K1 = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform bool uShowHeatmap;
uniform vec3 uBaseColor;
uniform bool uEnableClipping;
uniform float uClipLevel;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  t = smoothstep(0.0, 1.0, t);
  
  vec3 c0 = vec3(0.0, 0.0, 0.5);
  vec3 c1 = vec3(0.0, 0.5, 1.0);
  vec3 c2 = vec3(0.0, 1.0, 0.5);
  vec3 c3 = vec3(0.5, 1.0, 0.0);
  vec3 c4 = vec3(1.0, 0.8, 0.0);
  vec3 c5 = vec3(1.0, 0.3, 0.0);
  vec3 c6 = vec3(0.5, 0.0, 0.0);
  
  if (t < 0.167) return mix(c0, c1, t / 0.167);
  if (t < 0.333) return mix(c1, c2, (t - 0.167) / 0.166);
  if (t < 0.5) return mix(c2, c3, (t - 0.333) / 0.167);
  if (t < 0.667) return mix(c3, c4, (t - 0.5) / 0.167);
  if (t < 0.833) return mix(c4, c5, (t - 0.667) / 0.166);
  return mix(c5, c6, (t - 0.833) / 0.167);
}

void main() {
  if (uEnableClipping && vUv.y < uClipLevel) discard;

  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  
  vec3 ambient = vec3(0.35);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.65);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
  vec3 specular = spec * vec3(0.15);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.005) {
      vec3 heatColor = getHeatmapColor(vPressure);
      float blendFactor = smoothstep(0.0, 0.1, vPressure) * 0.95;
      surfaceColor = mix(surfaceColor, heatColor, blendFactor);
  }

  if (uEnableClipping && abs(vUv.y - uClipLevel) < 0.005) {
      surfaceColor = vec3(1.0, 0.2, 0.2);
      ambient = vec3(1.0);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`, Z1 = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform bool uShowHeatmap;
uniform vec3 uBaseColor;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  t = smoothstep(0.0, 1.0, t);
  
  vec3 c0 = vec3(0.0, 0.0, 0.5);
  vec3 c1 = vec3(0.0, 0.5, 1.0);
  vec3 c2 = vec3(0.0, 1.0, 0.5);
  vec3 c3 = vec3(0.5, 1.0, 0.0);
  vec3 c4 = vec3(1.0, 0.8, 0.0);
  vec3 c5 = vec3(1.0, 0.3, 0.0);
  vec3 c6 = vec3(0.5, 0.0, 0.0);
  
  if (t < 0.167) return mix(c0, c1, t / 0.167);
  if (t < 0.333) return mix(c1, c2, (t - 0.167) / 0.166);
  if (t < 0.5) return mix(c2, c3, (t - 0.333) / 0.167);
  if (t < 0.667) return mix(c3, c4, (t - 0.5) / 0.167);
  if (t < 0.833) return mix(c4, c5, (t - 0.667) / 0.166);
  return mix(c5, c6, (t - 0.833) / 0.167);
}

void main() {
  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  
  vec3 ambient = vec3(0.35);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.65);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
  vec3 specular = spec * vec3(0.15);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.005) {
      vec3 heatColor = getHeatmapColor(vPressure);
      float blendFactor = smoothstep(0.0, 0.1, vPressure) * 0.95;
      surfaceColor = mix(surfaceColor, heatColor, blendFactor);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`;
function t7({
  showHeatmap: e = !0,
  enableClipping: t = !1,
  clipLevel: r = 0.5,
  depthScale: n = 0,
  smoothness: o = 0.5,
  seatData: a = null,
  footpadData: i = null,
  realtimeData: s = null,
  className: c,
  style: l
}) {
  const u = G(null), d = G(null), v = G(null), h = G(null), m = G(null), g = G(null), f = G(null), y = G(null), p = G(null), C = G(null), S = a ?? s, w = 256, x = 0.015;
  return Te(() => {
    if (!u.current)
      return;
    const E = new A.Scene();
    E.background = new A.Color(15262944), d.current = E;
    const _ = new A.PerspectiveCamera(
      42,
      u.current.clientWidth / u.current.clientHeight,
      0.1,
      1e3
    );
    _.position.set(0.9, 0.85, 1.3), h.current = _;
    const P = new A.WebGLRenderer({ antialias: !0, alpha: !0 });
    P.setSize(u.current.clientWidth, u.current.clientHeight), P.setPixelRatio(Math.min(window.devicePixelRatio, 2)), P.shadowMap.enabled = !0, P.shadowMap.type = A.PCFSoftShadowMap, P.toneMapping = A.ACESFilmicToneMapping, P.toneMappingExposure = 1, u.current.appendChild(P.domElement), v.current = P;
    const R = new gs(_, P.domElement);
    R.enablePan = !0, R.minPolarAngle = Math.PI / 6, R.maxPolarAngle = Math.PI / 2.2, R.minDistance = 0.8, R.maxDistance = 3.5, R.target.set(0, 0.38, 0.05), R.enableDamping = !0, R.dampingFactor = 0.05, m.current = R;
    const T = new A.AmbientLight(16775408, 0.5);
    E.add(T);
    const F = new A.DirectionalLight(16775925, 0.9);
    F.position.set(4, 6, 4), F.castShadow = !0, F.shadow.mapSize.width = 2048, F.shadow.mapSize.height = 2048, F.shadow.camera.far = 15, F.shadow.camera.left = -3, F.shadow.camera.right = 3, F.shadow.camera.top = 3, F.shadow.camera.bottom = -3, E.add(F);
    const k = new A.DirectionalLight(15266047, 0.35);
    k.position.set(-3, 3, -2), E.add(k);
    const D = new A.PointLight(16774630, 0.2);
    D.position.set(-1.5, 2, 3), E.add(D);
    const $ = new A.PlaneGeometry(6, 6), L = new A.MeshStandardMaterial({
      color: 15262944,
      metalness: 0.02,
      roughness: 0.85,
      side: A.DoubleSide
    }), I = new A.Mesh($, L);
    I.rotation.x = -Math.PI / 2, I.receiveShadow = !0, E.add(I);
    const H = new A.CircleGeometry(0.8, 64), B = new A.MeshStandardMaterial({
      color: 15789288,
      metalness: 0.05,
      roughness: 0.7,
      transparent: !0,
      opacity: 0.6,
      side: A.DoubleSide
    }), q = new A.Mesh(H, B);
    q.rotation.x = -Math.PI / 2, q.position.set(0, 2e-3, 0.2), E.add(q), el(E);
    const U = Q1(w, za.data, za.max_val);
    p.current = U;
    const V = new A.ShaderMaterial({
      vertexShader: Wa,
      fragmentShader: K1,
      uniforms: {
        uPressureMap: { value: U },
        uDisplacementScale: { value: n },
        uThickness: { value: x },
        uShowHeatmap: { value: e },
        uBaseColor: { value: new A.Color("#f5f5f5") },
        uEnableClipping: { value: t },
        uClipLevel: { value: r },
        uSmoothness: { value: o }
      },
      side: A.DoubleSide
    });
    f.current = V;
    const Q = new A.BoxGeometry(0.45, 0.45, x, 128, 128, 1), K = new A.Mesh(Q, V);
    K.rotation.x = -Math.PI / 2, K.position.set(0, 0.455, 0), E.add(K);
    const X = J1(w);
    C.current = X;
    const z = new A.ShaderMaterial({
      vertexShader: Wa,
      fragmentShader: Z1,
      uniforms: {
        uPressureMap: { value: X },
        uDisplacementScale: { value: n * 0.6 },
        uThickness: { value: x },
        uShowHeatmap: { value: e },
        uBaseColor: { value: new A.Color("#f0f0f0") },
        uSmoothness: { value: o }
      },
      side: A.DoubleSide
    });
    y.current = z;
    const J = new A.BoxGeometry(1.5, 1, x, 256, 256, 1), ne = new A.Mesh(J, z);
    ne.rotation.x = -Math.PI / 2, ne.position.set(0, 8e-3, 0.52), ne.scale.set(0.36, 0.42, 1), E.add(ne);
    const ce = new A.PlaneGeometry(1.2, 1.2), oe = new A.MeshBasicMaterial({
      color: 2960685,
      transparent: !0,
      opacity: 0.15,
      side: A.DoubleSide
    }), ie = new A.Mesh(ce, oe);
    ie.rotation.x = -Math.PI / 2, ie.position.set(0, 1e-3, 0), E.add(ie);
    const he = () => {
      g.current = requestAnimationFrame(he), R.update(), P.render(E, _);
    };
    he();
    const we = () => {
      if (!u.current)
        return;
      const j = u.current.clientWidth, le = u.current.clientHeight;
      _.aspect = j / le, _.updateProjectionMatrix(), P.setSize(j, le);
    };
    return window.addEventListener("resize", we), () => {
      window.removeEventListener("resize", we), g.current && cancelAnimationFrame(g.current), u.current && P.domElement && u.current.removeChild(P.domElement), P.dispose();
    };
  }, []), Te(() => {
    f.current && (f.current.uniforms.uShowHeatmap.value = e, f.current.uniforms.uEnableClipping.value = t, f.current.uniforms.uClipLevel.value = r, f.current.uniforms.uDisplacementScale.value = n, f.current.uniforms.uSmoothness.value = o), y.current && (y.current.uniforms.uShowHeatmap.value = e, y.current.uniforms.uDisplacementScale.value = n * 0.6, y.current.uniforms.uSmoothness.value = o);
  }, [e, t, r, n, o]), Te(() => {
    if (!p.current || !S)
      return;
    const E = vo(S, w), _ = p.current.image.data;
    for (let P = 0; P < w; P++)
      for (let R = 0; R < w; R++) {
        const T = (w - 1 - P) * w + R, F = E[T];
        _[P * w + R] = Math.min(F / 255, 1);
      }
    p.current.needsUpdate = !0;
  }, [S]), Te(() => {
    if (!C.current || !i)
      return;
    const E = vo(i, w), _ = C.current.image.data;
    for (let P = 0; P < w; P++)
      for (let R = 0; R < w; R++) {
        const T = (w - 1 - P) * w + R, F = E[T];
        _[P * w + R] = Math.min(F / 255, 1);
      }
    C.current.needsUpdate = !0;
  }, [i]), /* @__PURE__ */ Pe.jsxs(
    "div",
    {
      className: `w-full h-full relative ${c || ""}`.trim(),
      style: {
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #d4d0cc 0%, #e8e4e0 50%, #d8d4d0 100%)",
        ...l
      },
      children: [
        /* @__PURE__ */ Pe.jsx("div", { ref: u, className: "w-full h-full", style: { width: "100%", height: "100%" } }),
        /* @__PURE__ */ Pe.jsx("div", { className: "absolute bottom-4 left-4 text-xs text-gray-500/60 pointer-events-none font-light tracking-wide", children: /* @__PURE__ */ Pe.jsx("p", { children: "Drag to rotate • Scroll to zoom" }) })
      ]
    }
  );
}
function Q1(e, t, r) {
  const n = new Float32Array(e * e), o = vo(t, e);
  for (let i = 0; i < e * e; i++)
    n[i] = o[i] / r;
  const a = new A.DataTexture(n, e, e, A.RedFormat, A.FloatType);
  return a.magFilter = A.LinearFilter, a.minFilter = A.LinearMipmapLinearFilter, a.generateMipmaps = !0, a.needsUpdate = !0, a;
}
function J1(e) {
  const t = new Float32Array(e * e);
  t.fill(0);
  const r = new A.DataTexture(t, e, e, A.RedFormat, A.FloatType);
  return r.magFilter = A.LinearFilter, r.minFilter = A.LinearMipmapLinearFilter, r.generateMipmaps = !0, r.needsUpdate = !0, r;
}
function el(e) {
  const o = new A.MeshStandardMaterial({
    color: 1710618,
    metalness: 0.7,
    roughness: 0.3
  }), a = new A.MeshStandardMaterial({
    color: 4013373,
    metalness: 0.2,
    roughness: 0.8
  }), i = new A.MeshStandardMaterial({
    color: 5592405,
    metalness: 0.1,
    roughness: 0.9
  }), s = new Gn(0.44, 0.035, 0.44, 4, 0.012), c = new A.Mesh(s, a);
  c.position.set(0, 0.43, 0), c.castShadow = !0, e.add(c);
  const l = new Gn(0.42, 0.48, 0.025, 4, 0.01), u = new A.Mesh(l, i);
  u.position.set(0, 0.72, -0.2), u.rotation.x = 0.08, u.castShadow = !0, e.add(u), [
    [-0.18, 0.215, 0.18],
    [0.18, 0.215, 0.18],
    [-0.18, 0.215, -0.18],
    [0.18, 0.215, -0.18]
  ].forEach((f) => {
    const y = new A.Group(), p = new A.CylinderGeometry(0.012, 0.016, 0.4, 16), C = new A.Mesh(p, o);
    C.castShadow = !0, y.add(C);
    const S = new A.SphereGeometry(0.012, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), w = new A.Mesh(S, o);
    w.position.y = 0.2, y.add(w);
    const x = new A.SphereGeometry(0.016, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), E = new A.Mesh(x, o);
    E.position.y = -0.2, E.rotation.x = Math.PI, y.add(E), y.position.set(...f), e.add(y);
  }), [
    [-0.18, 0.58, -0.19],
    [0.18, 0.58, -0.19]
  ].forEach((f) => {
    const y = new A.Group(), p = new A.CylinderGeometry(8e-3, 8e-3, 0.28, 12), C = new A.Mesh(p, o);
    y.add(C);
    const S = new A.SphereGeometry(8e-3, 12, 8), w = new A.Mesh(S, o);
    w.position.y = 0.14, y.add(w);
    const x = new A.Mesh(S, o);
    x.position.y = -0.14, y.add(x), y.position.set(...f), e.add(y);
  });
  const h = new Gn(0.025, 0.025, 0.28, 4, 8e-3);
  [
    [-0.24, 0.58, 0.02],
    [0.24, 0.58, 0.02]
  ].forEach((f) => {
    const y = new A.Mesh(h, i);
    y.position.set(...f), e.add(y);
  }), [
    [-0.24, 0.51, -0.08],
    [0.24, 0.51, -0.08]
  ].forEach((f) => {
    const y = new A.Group(), p = new A.CylinderGeometry(6e-3, 6e-3, 0.12, 12), C = new A.Mesh(p, o);
    y.add(C);
    const S = new A.SphereGeometry(6e-3, 12, 8), w = new A.Mesh(S, o);
    w.position.y = 0.06, y.add(w);
    const x = new A.Mesh(S, o);
    x.position.y = -0.06, y.add(x), y.position.set(...f), e.add(y);
  });
}
const ho = (e, t, r) => Math.min(r, Math.max(t, e)), sa = (e) => {
  if (!e)
    return [];
  if (Array.isArray(e[0]))
    return e;
  const r = Array.isArray(e) || ArrayBuffer.isView(e) ? e : [], n = Math.sqrt(r.length);
  if (!Number.isInteger(n))
    return [];
  const o = [];
  for (let a = 0; a < n; a++) {
    const i = [];
    for (let s = 0; s < n; s++)
      i.push(r[a * n + s] ?? 0);
    o.push(i);
  }
  return o;
};
function Ua(e, t = 5, r = 1.5) {
  var u;
  const n = sa(e), o = n.length, a = ((u = n[0]) == null ? void 0 : u.length) || 0;
  if (!o || !a)
    return [];
  const i = [], s = [], c = Math.floor(t / 2);
  let l = 0;
  for (let d = -c; d <= c; d++) {
    const v = [];
    for (let h = -c; h <= c; h++) {
      const m = Math.exp(-(h * h + d * d) / (2 * r * r));
      v.push(m), l += m;
    }
    s.push(v);
  }
  for (let d = 0; d < t; d++)
    for (let v = 0; v < t; v++)
      s[d][v] /= l;
  for (let d = 0; d < o; d++) {
    const v = [];
    for (let h = 0; h < a; h++) {
      let m = 0;
      for (let g = -c; g <= c; g++)
        for (let f = -c; f <= c; f++) {
          const y = ho(d + g, 0, o - 1), p = ho(h + f, 0, a - 1);
          m += n[y][p] * s[g + c][f + c];
        }
      v.push(m);
    }
    i.push(v);
  }
  return i;
}
function tl(e, t, r) {
  var p;
  const n = sa(e), o = n.length, a = ((p = n[0]) == null ? void 0 : p.length) || 0;
  if (!o || !a)
    return 0;
  const i = Math.floor(t), s = Math.floor(r), c = Math.min(i + 1, a - 1), l = Math.min(s + 1, o - 1), u = t - i, d = r - s, v = n[s][i], h = n[s][c], m = n[l][i], g = n[l][c], f = v * (1 - u) + h * u, y = m * (1 - d) + g * d;
  return f * (1 - d) + y * d;
}
function Ga(e, t = 256) {
  var c;
  const r = sa(e), n = r.length, o = ((c = r[0]) == null ? void 0 : c.length) || 0;
  if (!n || !o)
    return new Float32Array(t * t);
  const a = Ua(r, 5, 1.2), i = Ua(a, 3, 0.8), s = new Float32Array(t * t);
  for (let l = 0; l < t; l++)
    for (let u = 0; u < t; u++) {
      const d = u / t * (o - 1), v = l / t * (n - 1);
      let h = tl(i, d, v);
      h = ho(h, 0, 255), s[l * t + u] = h;
    }
  return s;
}
const rl = `
precision highp float;
precision highp int;
varying vec2 vUv;
varying float vPressure;
varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform sampler2D uPressureMap;
uniform float uDisplacementScale;
uniform float uThickness;
uniform float uSmoothness;

float getSmoothedPressure(vec2 uv) {
    float texSize = 256.0;
    float offset = 1.0 / texSize;
    
    float p = texture2D(uPressureMap, uv).r;
    
    if (uSmoothness < 0.01) return p;
    
    float kernel[25];
    kernel[0] = 0.003765; kernel[1] = 0.015019; kernel[2] = 0.023792; kernel[3] = 0.015019; kernel[4] = 0.003765;
    kernel[5] = 0.015019; kernel[6] = 0.059912; kernel[7] = 0.094907; kernel[8] = 0.059912; kernel[9] = 0.015019;
    kernel[10] = 0.023792; kernel[11] = 0.094907; kernel[12] = 0.150342; kernel[13] = 0.094907; kernel[14] = 0.023792;
    kernel[15] = 0.015019; kernel[16] = 0.059912; kernel[17] = 0.094907; kernel[18] = 0.059912; kernel[19] = 0.015019;
    kernel[20] = 0.003765; kernel[21] = 0.015019; kernel[22] = 0.023792; kernel[23] = 0.015019; kernel[24] = 0.003765;
    
    float blurred = 0.0;
    int idx = 0;
    
    for (int dy = -2; dy <= 2; dy++) {
        for (int dx = -2; dx <= 2; dx++) {
            vec2 sampleUv = uv + vec2(float(dx) * offset, float(dy) * offset);
            blurred += texture2D(uPressureMap, sampleUv).r * kernel[idx];
            idx++;
        }
    }
    
    float smoothFactor = uSmoothness * 2.0;
    smoothFactor = clamp(smoothFactor, 0.0, 1.0);
    
    return mix(p, blurred, smoothFactor);
}

void main() {
  vUv = uv;
  vec3 objectNormal = normal;
  
  if (objectNormal.z > 0.5) {
      float pressure = getSmoothedPressure(uv);
      vPressure = pressure;
      
      vec3 newPosition = position;
      
      float maxDisplacement = uThickness * 0.85;
      float mappedPressure = pow(pressure, 0.7);
      float displacement = min(mappedPressure * uDisplacementScale, maxDisplacement);
      
      newPosition.z -= displacement;
      
      float texSize = 256.0;
      float offset = 2.0 / texSize;
      
      float pL = getSmoothedPressure(uv + vec2(-offset, 0.0));
      float pR = getSmoothedPressure(uv + vec2(offset, 0.0));
      float pD = getSmoothedPressure(uv + vec2(0.0, -offset));
      float pU = getSmoothedPressure(uv + vec2(0.0, offset));
      
      float hL = min(pL * uDisplacementScale, maxDisplacement);
      float hR = min(pR * uDisplacementScale, maxDisplacement);
      float hD = min(pD * uDisplacementScale, maxDisplacement);
      float hU = min(pU * uDisplacementScale, maxDisplacement);
      
      vec3 vT = normalize(vec3(2.0 * offset, 0.0, hL - hR));
      vec3 vB = normalize(vec3(0.0, 2.0 * offset, hD - hU));
      vNormal = normalize(cross(vT, vB));
      
      vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  } else {
      vPressure = 0.0;
      vNormal = normal;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
}
`, nl = `
precision highp float;
precision highp int;
varying vec2 vUv;
varying float vPressure;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform bool uShowHeatmap;
uniform vec3 uBaseColor;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  t = smoothstep(0.0, 1.0, t);
  
  vec3 c0 = vec3(0.0, 0.0, 0.5);
  vec3 c1 = vec3(0.0, 0.5, 1.0);
  vec3 c2 = vec3(0.0, 1.0, 0.5);
  vec3 c3 = vec3(0.5, 1.0, 0.0);
  vec3 c4 = vec3(1.0, 0.8, 0.0);
  vec3 c5 = vec3(1.0, 0.3, 0.0);
  vec3 c6 = vec3(0.5, 0.0, 0.0);
  
  if (t < 0.167) return mix(c0, c1, t / 0.167);
  if (t < 0.333) return mix(c1, c2, (t - 0.167) / 0.166);
  if (t < 0.5) return mix(c2, c3, (t - 0.333) / 0.167);
  if (t < 0.667) return mix(c3, c4, (t - 0.5) / 0.167);
  if (t < 0.833) return mix(c4, c5, (t - 0.667) / 0.166);
  return mix(c5, c6, (t - 0.833) / 0.167);
}

void main() {
  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  
  vec3 ambient = vec3(0.35);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.65);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
  vec3 specular = spec * vec3(0.15);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.005) {
      vec3 heatColor = getHeatmapColor(vPressure);
      float blendFactor = smoothstep(0.0, 0.1, vPressure) * 0.95;
      surfaceColor = mix(surfaceColor, heatColor, blendFactor);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`, ol = `
precision highp float;
precision highp int;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
}
`, al = `
precision highp float;
precision highp int;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

uniform sampler2D uPressureMap;
uniform bool uShowHeatmap;
uniform vec3 uBaseColor;
uniform float uSmoothness;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  t = smoothstep(0.0, 1.0, t);
  
  vec3 c0 = vec3(0.0, 0.0, 0.5);
  vec3 c1 = vec3(0.0, 0.5, 1.0);
  vec3 c2 = vec3(0.0, 1.0, 0.5);
  vec3 c3 = vec3(0.5, 1.0, 0.0);
  vec3 c4 = vec3(1.0, 0.8, 0.0);
  vec3 c5 = vec3(1.0, 0.3, 0.0);
  vec3 c6 = vec3(0.5, 0.0, 0.0);
  
  if (t < 0.167) return mix(c0, c1, t / 0.167);
  if (t < 0.333) return mix(c1, c2, (t - 0.167) / 0.166);
  if (t < 0.5) return mix(c2, c3, (t - 0.333) / 0.167);
  if (t < 0.667) return mix(c3, c4, (t - 0.5) / 0.167);
  if (t < 0.833) return mix(c4, c5, (t - 0.667) / 0.166);
  return mix(c5, c6, (t - 0.833) / 0.167);
}

float getPressure(vec2 uv) {
  float p = texture2D(uPressureMap, uv).r;
  if (uSmoothness < 0.01) return p;
  float texSize = 128.0;
  float offset = 1.0 / texSize;
  float blurred = 0.0;
  float kernel[9];
  kernel[0] = 0.077847; kernel[1] = 0.123317; kernel[2] = 0.077847;
  kernel[3] = 0.123317; kernel[4] = 0.195346; kernel[5] = 0.123317;
  kernel[6] = 0.077847; kernel[7] = 0.123317; kernel[8] = 0.077847;
  int idx = 0;
  for (int dy = -1; dy <= 1; dy++) {
    for (int dx = -1; dx <= 1; dx++) {
      vec2 sampleUv = uv + vec2(float(dx) * offset, float(dy) * offset);
      blurred += texture2D(uPressureMap, sampleUv).r * kernel[idx];
      idx++;
    }
  }
  float smoothFactor = clamp(uSmoothness, 0.0, 1.0);
  return mix(p, blurred, smoothFactor);
}

void main() {
  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0));
  
  vec3 ambient = vec3(0.35);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.65);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
  vec3 specular = spec * vec3(0.15);

  float pressure = getPressure(vUv);
  vec3 surfaceColor = uBaseColor;
  if (!gl_FrontFacing) {
    surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && pressure > 0.005) {
    vec3 heatColor = getHeatmapColor(pressure);
    float blendFactor = smoothstep(0.0, 0.1, pressure) * 0.95;
    surfaceColor = mix(surfaceColor, heatColor, blendFactor);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`, U0 = 128, Yt = 0.4, qa = 0.015;
function il({ supportsDisplacement: e }) {
  const t = new A.BoxGeometry(
    Yt,
    Yt,
    qa,
    128,
    128,
    1
  ), r = U0 * U0, n = new Uint8Array(r);
  n.fill(0);
  const o = new A.DataTexture(
    n,
    U0,
    U0,
    A.RedFormat,
    A.UnsignedByteType
  );
  o.magFilter = A.LinearFilter, o.minFilter = A.LinearFilter, o.generateMipmaps = !1, o.needsUpdate = !0;
  const a = new A.ShaderMaterial({
    vertexShader: e ? rl : ol,
    fragmentShader: e ? nl : al,
    uniforms: {
      uPressureMap: { value: o },
      uDisplacementScale: { value: 0.1 },
      uThickness: { value: qa },
      uShowHeatmap: { value: !0 },
      uBaseColor: { value: new A.Color("#f0f0f0") },
      uSmoothness: { value: 0.5 }
    },
    side: A.DoubleSide
  }), i = new A.Mesh(t, a);
  return i.rotation.x = -Math.PI / 2, { mesh: i, texture: o, material: a };
}
function r7({
  showHeatmap: e = !0,
  depthScale: t = 0.1,
  smoothness: r = 0.5,
  sensorData: n = {},
  className: o,
  style: a
}) {
  console.log(n);
  const i = G(null), s = G(null), c = G(null), l = G(null), u = G(null), d = G([]), v = G(null);
  return Te(() => {
    const h = i.current;
    if (!h)
      return;
    const m = new A.Scene();
    m.background = new A.Color("#e0dcd8"), s.current = m;
    const g = new A.PerspectiveCamera(
      60,
      h.clientWidth / h.clientHeight,
      0.01,
      100
    );
    g.position.set(0, 1.8, 1.5), g.lookAt(0, 0, 0), l.current = g;
    const f = new A.WebGLRenderer({ antialias: !0, alpha: !0 });
    f.setSize(h.clientWidth, h.clientHeight), f.setPixelRatio(Math.min(window.devicePixelRatio, 2)), f.shadowMap.enabled = !0, h.appendChild(f.domElement), c.current = f;
    const y = new gs(g, f.domElement);
    y.enablePan = !0, y.minPolarAngle = 0, y.maxPolarAngle = Math.PI / 2.1, y.minDistance = 1, y.maxDistance = 5, y.target.set(0, 0, 0), y.enableDamping = !0, y.dampingFactor = 0.05, u.current = y;
    const p = new A.AmbientLight("#fff8f0", 0.6);
    m.add(p);
    const C = new A.DirectionalLight("#fffaf5", 0.8);
    C.position.set(3, 5, 3), C.castShadow = !0, C.shadow.mapSize.set(2048, 2048), m.add(C);
    const S = new A.DirectionalLight("#e8f0ff", 0.35);
    S.position.set(-3, 3, -2), m.add(S);
    const w = new A.PointLight("#fff5e6", 0.2);
    w.position.set(-1.5, 2, 3), m.add(w);
    const x = new A.PlaneGeometry(8, 4), E = new A.MeshStandardMaterial({
      color: "#e8e4e0",
      metalness: 0.02,
      roughness: 0.85,
      side: A.DoubleSide
    }), _ = new A.Mesh(x, E);
    _.rotation.x = -Math.PI / 2, _.position.y = 0, _.receiveShadow = !0, m.add(_);
    const P = new A.PlaneGeometry(2, 0.8), R = new A.MeshStandardMaterial({
      color: "#f0ece8",
      metalness: 0.05,
      roughness: 0.7,
      transparent: !0,
      opacity: 0.6,
      side: A.DoubleSide
    }), T = new A.Mesh(P, R);
    T.rotation.x = -Math.PI / 2, T.position.y = 2e-3, m.add(T);
    const F = f.capabilities.maxVertexTextures > 0, k = 4 * Yt, D = -k / 2 + Yt / 2, $ = [];
    for (let U = 0; U < 4; U++) {
      const { mesh: V, texture: Q, material: K } = il({ supportsDisplacement: F });
      V.position.set(D + U * Yt, 0.01, 0), m.add(V), $.push({ mesh: V, texture: Q, material: K });
    }
    const L = new A.PlaneGeometry(k + 0.04, Yt + 0.04), I = new A.MeshStandardMaterial({
      color: "#e0e0e0",
      metalness: 0.1,
      roughness: 0.9,
      side: A.DoubleSide
    }), H = new A.Mesh(L, I);
    H.rotation.x = -Math.PI / 2, H.position.set(0, 5e-3, 0), m.add(H), d.current = $;
    function B() {
      v.current = requestAnimationFrame(B), y.update(), f.render(m, g);
    }
    B();
    function q() {
      if (!h)
        return;
      const U = h.clientWidth, V = h.clientHeight;
      g.aspect = U / V, g.updateProjectionMatrix(), f.setSize(U, V);
    }
    return window.addEventListener("resize", q), () => {
      window.removeEventListener("resize", q), cancelAnimationFrame(v.current), y.dispose(), f.dispose(), h && f.domElement.parentNode === h && h.removeChild(f.domElement);
    };
  }, []), Te(() => {
    d.current.forEach(({ material: h }) => {
      h && (h.uniforms.uShowHeatmap.value = e, h.uniforms.uDisplacementScale.value = t, h.uniforms.uSmoothness.value = r);
    });
  }, [e, t, r]), Te(() => {
    (Array.isArray(n) ? n : [n == null ? void 0 : n.sensor1, n == null ? void 0 : n.sensor2, n == null ? void 0 : n.sensor3, n == null ? void 0 : n.sensor4]).forEach((m, g) => {
      const f = d.current[g];
      if (!f || !m)
        return;
      let y = null;
      if (Array.isArray(m) || ArrayBuffer.isView(m) ? m.length === U0 * U0 ? y = m : y = Ga(m, U0) : (Array.isArray(m == null ? void 0 : m.data) || ArrayBuffer.isView(m == null ? void 0 : m.data)) && (y = Ga(m.data, U0)), !y)
        return;
      let C = 0;
      for (let x = 0; x < y.length; x++) {
        const E = y[x];
        E > C && (C = E);
      }
      let S = 1;
      C > 0 && C <= 1 ? S = 255 : C > 255 && (S = 255 / C);
      const w = f.texture.image.data;
      for (let x = 0; x < U0; x++)
        for (let E = 0; E < U0; E++) {
          const _ = (U0 - 1 - x) * U0 + E, P = (y[_] ?? 0) * S;
          w[x * U0 + E] = Math.min(Math.max(Math.round(P), 0), 255);
        }
      f.texture.needsUpdate = !0;
    });
  }, [n]), /* @__PURE__ */ Pe.jsxs(
    "div",
    {
      className: o,
      style: {
        width: "100%",
        height: "100%",
        position: "relative",
        background: "linear-gradient(135deg, #d4d0cc 0%, #e8e4e0 50%, #d8d4d0 100%)",
        ...a
      },
      children: [
        /* @__PURE__ */ Pe.jsx(
          "div",
          {
            ref: i,
            style: { width: "100%", height: "100%" }
          }
        ),
        /* @__PURE__ */ Pe.jsx(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 16,
              left: 16,
              fontSize: 12,
              color: "rgba(107,114,128,0.6)",
              pointerEvents: "none",
              fontWeight: 300,
              letterSpacing: "0.05em"
            },
            children: "Drag to rotate · Scroll to zoom"
          }
        )
      ]
    }
  );
}
function hr(e, t) {
  return e[1] + 0.5 * t * (e[2] - e[0] + t * (2 * e[0] - 5 * e[1] + 4 * e[2] - e[3] + t * (3 * (e[1] - e[2]) + e[3] - e[0])));
}
function sl(e, t, r) {
  const n = new Array(4);
  return n[0] = hr(e[0], r), n[1] = hr(e[1], r), n[2] = hr(e[2], r), n[3] = hr(e[3], r), hr(n, t);
}
function Xa(e, t = 4) {
  const r = e.length, n = e[0].length, o = r * t, a = n * t, i = new Float32Array(a * o), s = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  for (let c = 0; c < o; c++)
    for (let l = 0; l < a; l++) {
      const u = l / t, d = c / t, v = Math.floor(u), h = Math.floor(d), m = u - v, g = d - h;
      for (let y = -1; y <= 2; y++)
        for (let p = -1; p <= 2; p++) {
          let C = h + y, S = v + p;
          C < 0 && (C = 0), C >= r && (C = r - 1), S < 0 && (S = 0), S >= n && (S = n - 1), s[y + 1][p + 1] = e[C][S];
        }
      let f = sl(s, m, g);
      f = Math.max(0, Math.min(f, 255)), i[c * a + l] = f;
    }
  return i;
}
const cl = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform sampler2D uPressureMap;
uniform float uDisplacementScale;
uniform float uThickness;
uniform float uSmoothness;
uniform vec2 uTexelSize;

float getSmoothedPressure(vec2 uv) {
    vec2 offset = uTexelSize;
    float p = texture2D(uPressureMap, uv).r;
    if (uSmoothness < 0.01) return p;
    
    float pL = texture2D(uPressureMap, uv + vec2(-offset.x, 0.0)).r;
    float pR = texture2D(uPressureMap, uv + vec2(offset.x, 0.0)).r;
    float pD = texture2D(uPressureMap, uv + vec2(0.0, -offset.y)).r;
    float pU = texture2D(uPressureMap, uv + vec2(0.0, offset.y)).r;
    float pTL = texture2D(uPressureMap, uv + vec2(-offset.x, offset.y)).r;
    float pTR = texture2D(uPressureMap, uv + vec2(offset.x, offset.y)).r;
    float pDL = texture2D(uPressureMap, uv + vec2(-offset.x, -offset.y)).r;
    float pDR = texture2D(uPressureMap, uv + vec2(offset.x, -offset.y)).r;
    float avg = (p + pL + pR + pD + pU + pTL + pTR + pDL + pDR) / 9.0;
    return mix(p, avg, uSmoothness);
}

void main() {
  vUv = uv;
  vec3 objectNormal = normal;
  
  if (objectNormal.z > 0.5) {
      float pressure = getSmoothedPressure(uv);
      vPressure = pressure;
      vec3 newPosition = position;
      float maxDisplacement = uThickness * 0.95;
      float displacement = min(pressure * uDisplacementScale, maxDisplacement);
      newPosition.z -= displacement;
      
      vec2 offset = uTexelSize;
      float pL = getSmoothedPressure(uv + vec2(-offset.x, 0.0));
      float pR = getSmoothedPressure(uv + vec2(offset.x, 0.0));
      float pD = getSmoothedPressure(uv + vec2(0.0, -offset.y));
      float pU = getSmoothedPressure(uv + vec2(0.0, offset.y));
      
      float hL = min(pL * uDisplacementScale, maxDisplacement);
      float hR = min(pR * uDisplacementScale, maxDisplacement);
      float hD = min(pD * uDisplacementScale, maxDisplacement);
      float hU = min(pU * uDisplacementScale, maxDisplacement);
      
      vec3 vT = normalize(vec3(2.0 * offset.x, 0.0, hL - hR));
      vec3 vB = normalize(vec3(0.0, 2.0 * offset.y, hD - hU));
      vNormal = normalize(cross(vT, vB));
      
      vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  } else {
      vPressure = 0.0;
      vNormal = normal;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
}
`, ll = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform bool uShowHeatmap;
uniform vec3 uBaseColor;
uniform bool uEnableClipping;
uniform float uClipLevel;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  float r = clamp(1.5 - abs(2.0 * t - 1.0) * 2.0, 0.0, 1.0);
  float g = clamp(1.5 - abs(2.0 * t - 0.5) * 2.0, 0.0, 1.0);
  float b = clamp(1.5 - abs(2.0 * t - 0.0) * 2.0, 0.0, 1.0);
  return vec3(r, g, b);
}

void main() {
  if (uEnableClipping && vUv.y < uClipLevel) discard;

  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  vec3 ambient = vec3(0.3);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.7);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
  vec3 specular = spec * vec3(0.1);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.01) {
      vec3 heatColor = getHeatmapColor(vPressure);
      surfaceColor = mix(surfaceColor, heatColor, 0.9);
  }

  if (uEnableClipping && abs(vUv.y - uClipLevel) < 0.005) {
      surfaceColor = vec3(1.0, 0.2, 0.2);
      ambient = vec3(1.0);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`, br = 256, Cr = 64, Ya = 1, ul = 4, fl = 1, ps = (e = br, t = Cr) => {
  const r = new Array(t);
  for (let n = 0; n < t; n++) {
    r[n] = new Array(e);
    for (let o = 0; o < e; o++) {
      const a = (o - e / 2) / (e / 2), i = (n - t / 2) / (t / 2), s = Math.sqrt(a * a + i * i);
      r[n][o] = Math.max(0, 255 * (1 - s));
    }
  }
  return r;
}, Ka = (e, t, r) => {
  if (!Array.isArray(e))
    return ps(t, r);
  if (Array.isArray(e[0]))
    return e;
  const n = r, o = t, a = new Array(n);
  for (let i = 0; i < n; i++) {
    a[i] = new Array(o);
    for (let s = 0; s < o; s++)
      a[i][s] = e[i * o + s] ?? 0;
  }
  return a;
};
function dl({
  showHeatmap: e,
  enableClipping: t,
  clipLevel: r,
  depthScale: n,
  smoothness: o,
  realtimeData: a,
  sourceData: i,
  sourceMax: s,
  upscale: c = Ya
}) {
  const l = G(null), u = G(null), d = G(null), v = G(null), h = G(null), m = G(null), g = G(null), f = G(null), y = G(i), p = G(s), C = G({
    width: br,
    height: Cr,
    scale: Ya,
    max: 1
  });
  Te(() => {
    y.current = i, p.current = s;
  }, [i, s]);
  const S = G(!1), w = G({ x: 0, y: 0 }), x = G({ radius: 6, phi: Math.PI / 4, theta: 0 }), E = G(new A.Vector3(0, 0, 0));
  return Te(() => {
    var le;
    if (!l.current)
      return;
    const _ = new A.Scene();
    _.background = new A.Color(16119285), d.current = _;
    const P = new A.PerspectiveCamera(50, l.current.clientWidth / l.current.clientHeight, 0.1, 1e3);
    P.position.set(0, 4, 4), P.lookAt(0, 0, 0), v.current = P;
    const R = new A.WebGLRenderer({ antialias: !0 });
    R.setSize(l.current.clientWidth, l.current.clientHeight), R.setPixelRatio(Math.min(window.devicePixelRatio, 2)), l.current.appendChild(R.domElement), u.current = R;
    const T = new A.AmbientLight(16777215, 0.4);
    _.add(T);
    const F = new A.SpotLight(16777215, 0.8);
    F.position.set(10, 10, 10), _.add(F);
    const k = new A.PointLight(16777215, 0.5);
    k.position.set(-10, 5, -10), _.add(k);
    const D = y.current || ps(br, Cr), $ = Ka(D, br, Cr), L = typeof p.current == "number" ? p.current : 255, I = Math.max(1, Math.round(c)), H = ((le = $[0]) == null ? void 0 : le.length) || br, B = $.length || Cr, q = H * I, U = B * I, V = q * U, Q = new Float32Array(V), K = Xa($, I);
    for (let Z = 0; Z < V; Z++)
      Q[Z] = (K[Z] ?? 0) / L;
    C.current = { width: q, height: U, scale: I, max: L };
    const X = new A.DataTexture(Q, q, U, A.RedFormat, A.FloatType);
    X.magFilter = A.LinearFilter, X.minFilter = A.LinearFilter, X.needsUpdate = !0, g.current = X;
    const z = new A.ShaderMaterial({
      vertexShader: cl,
      fragmentShader: ll,
      uniforms: {
        uPressureMap: { value: X },
        uDisplacementScale: { value: n },
        uThickness: { value: 0.15 },
        uShowHeatmap: { value: e },
        uBaseColor: { value: new A.Color("#eeeeee") },
        uEnableClipping: { value: t },
        uClipLevel: { value: r },
        uSmoothness: { value: o },
        uTexelSize: { value: new A.Vector2(1 / q, 1 / U) }
      },
      side: A.DoubleSide
    });
    m.current = z;
    const J = new A.BoxGeometry(
      ul,
      fl,
      0.15,
      H,
      B,
      1
    ), ne = new A.Mesh(J, z);
    ne.rotation.x = -Math.PI / 2, _.add(ne), h.current = ne;
    const ce = (Z) => {
      S.current = !0, w.current = { x: Z.clientX, y: Z.clientY };
    }, oe = () => {
      S.current = !1;
    }, ie = (Z) => {
      if (!S.current)
        return;
      const ae = Z.clientX - w.current.x, ge = Z.clientY - w.current.y;
      x.current.theta -= ae * 0.01, x.current.phi -= ge * 0.01, x.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, x.current.phi)), w.current = { x: Z.clientX, y: Z.clientY };
    }, he = (Z) => {
      x.current.radius += Z.deltaY * 0.01, x.current.radius = Math.max(2, Math.min(15, x.current.radius));
    };
    R.domElement.addEventListener("mousedown", ce), R.domElement.addEventListener("mouseup", oe), R.domElement.addEventListener("mousemove", ie), R.domElement.addEventListener("wheel", he);
    const we = () => {
      f.current = requestAnimationFrame(we);
      const { radius: Z, phi: ae, theta: ge } = x.current;
      P.position.x = Z * Math.sin(ae) * Math.sin(ge), P.position.y = Z * Math.cos(ae), P.position.z = Z * Math.sin(ae) * Math.cos(ge), P.lookAt(E.current), R.render(_, P);
    };
    we();
    const j = () => {
      if (!l.current)
        return;
      const Z = l.current.clientWidth, ae = l.current.clientHeight;
      P.aspect = Z / ae, P.updateProjectionMatrix(), R.setSize(Z, ae);
    };
    return window.addEventListener("resize", j), () => {
      window.removeEventListener("resize", j), R.domElement.removeEventListener("mousedown", ce), R.domElement.removeEventListener("mouseup", oe), R.domElement.removeEventListener("mousemove", ie), R.domElement.removeEventListener("wheel", he), f.current && cancelAnimationFrame(f.current), J.dispose(), z.dispose(), X.dispose(), R.dispose(), l.current && R.domElement && l.current.removeChild(R.domElement);
    };
  }, []), Te(() => {
    m.current && (m.current.uniforms.uShowHeatmap.value = e, m.current.uniforms.uEnableClipping.value = t, m.current.uniforms.uClipLevel.value = r, m.current.uniforms.uDisplacementScale.value = n, m.current.uniforms.uSmoothness.value = o);
  }, [e, t, r, n, o]), Te(() => {
    const _ = g.current;
    if (!_ || !a)
      return;
    const { width: P, height: R, scale: T, max: F } = C.current, k = Ka(a, P / T, R / T), D = Xa(k, T), $ = _.image.data;
    for (let L = 0; L < R; L++)
      for (let I = 0; I < P; I++) {
        const H = (R - 1 - L) * P + I, B = D[H];
        $[L * P + I] = Math.min((B ?? 0) / (F || 1), 1);
      }
    _.needsUpdate = !0;
  }, [a]), /* @__PURE__ */ Pe.jsxs(
    "div",
    {
      className: "w-full h-full relative bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800",
      style: { width: "100%", height: "100%", position: "relative" },
      children: [
        /* @__PURE__ */ Pe.jsx("div", { ref: l, className: "w-full h-full", style: { width: "100%", height: "100%" } }),
        /* @__PURE__ */ Pe.jsxs("div", { className: "absolute bottom-4 left-4 text-xs text-gray-400 pointer-events-none", children: [
          /* @__PURE__ */ Pe.jsx("p", { children: "Left Click + Drag: Rotate" }),
          /* @__PURE__ */ Pe.jsx("p", { children: "Scroll: Zoom" })
        ] })
      ]
    }
  );
}
function n7({ className: e, style: t, ...r }) {
  return /* @__PURE__ */ Pe.jsx(
    "div",
    {
      className: e,
      style: {
        width: "100%",
        height: "100%",
        ...t
      },
      children: /* @__PURE__ */ Pe.jsx(dl, { ...r })
    }
  );
}
var ys = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (a = o(a, n(s)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var i = "";
      for (var s in a)
        t.call(a, s) && a[s] && (i = o(i, s));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ys);
var vl = ys.exports;
const Ne = /* @__PURE__ */ C1(vl);
function N0() {
  return N0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, N0.apply(null, arguments);
}
function Re(e) {
  "@babel/helpers - typeof";
  return Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Re(e);
}
var hl = Symbol.for("react.element"), ml = Symbol.for("react.transitional.element"), gl = Symbol.for("react.fragment");
function bs(e) {
  return (
    // Base object type
    e && Re(e) === "object" && // React Element type
    (e.$$typeof === hl || e.$$typeof === ml) && // React Fragment type
    e.type === gl
  );
}
function mn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return be.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(mn(n)) : bs(n) && n.props ? r = r.concat(mn(n.props.children, t)) : r.push(n));
  }), r;
}
var mo = {}, ca = [], pl = function(t) {
  ca.push(t);
};
function $t(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ca.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function yl(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ca.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Cs() {
  mo = {};
}
function Ss(e, t, r) {
  !t && !mo[r] && (e(!1, r), mo[r] = !0);
}
function a0(e, t) {
  Ss($t, e, t);
}
function bl(e, t) {
  Ss(yl, e, t);
}
a0.preMessage = pl;
a0.resetWarned = Cs;
a0.noteOnce = bl;
function Cl(e, t) {
  if (Re(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Re(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ws(e) {
  var t = Cl(e, "string");
  return Re(t) == "symbol" ? t : t + "";
}
function O(e, t, r) {
  return (t = ws(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Za(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Za(Object(r), !0).forEach(function(n) {
      O(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Za(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rr(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Sl(e) {
  return e && Re(e) === "object" && Rr(e.nativeElement) ? e.nativeElement : Rr(e) ? e : null;
}
function ln(e) {
  var t = Sl(e);
  if (t)
    return t;
  if (e instanceof be.Component) {
    var r;
    return (r = $a.findDOMNode) === null || r === void 0 ? void 0 : r.call($a, e);
  }
  return null;
}
var go = { exports: {} }, qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa;
function wl() {
  if (Qa)
    return qe;
  Qa = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case i:
                case c:
                case v:
                case d:
                case a:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return qe.ContextConsumer = i, qe.ContextProvider = a, qe.Element = e, qe.ForwardRef = c, qe.Fragment = r, qe.Lazy = v, qe.Memo = d, qe.Portal = t, qe.Profiler = o, qe.StrictMode = n, qe.Suspense = l, qe.SuspenseList = u, qe.isAsyncMode = function() {
    return !1;
  }, qe.isConcurrentMode = function() {
    return !1;
  }, qe.isContextConsumer = function(f) {
    return g(f) === i;
  }, qe.isContextProvider = function(f) {
    return g(f) === a;
  }, qe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, qe.isForwardRef = function(f) {
    return g(f) === c;
  }, qe.isFragment = function(f) {
    return g(f) === r;
  }, qe.isLazy = function(f) {
    return g(f) === v;
  }, qe.isMemo = function(f) {
    return g(f) === d;
  }, qe.isPortal = function(f) {
    return g(f) === t;
  }, qe.isProfiler = function(f) {
    return g(f) === o;
  }, qe.isStrictMode = function(f) {
    return g(f) === n;
  }, qe.isSuspense = function(f) {
    return g(f) === l;
  }, qe.isSuspenseList = function(f) {
    return g(f) === u;
  }, qe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === c || f.$$typeof === m || f.getModuleId !== void 0);
  }, qe.typeOf = g, qe;
}
var Xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function xl() {
  return Ja || (Ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, g = !1, f = !1, y = !1, p = !1, C;
    C = Symbol.for("react.module.reference");
    function S(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === o || p || j === n || j === l || j === u || y || j === h || m || g || f || typeof j == "object" && j !== null && (j.$$typeof === v || j.$$typeof === d || j.$$typeof === a || j.$$typeof === i || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === C || j.getModuleId !== void 0));
    }
    function w(j) {
      if (typeof j == "object" && j !== null) {
        var le = j.$$typeof;
        switch (le) {
          case e:
            var Z = j.type;
            switch (Z) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return Z;
              default:
                var ae = Z && Z.$$typeof;
                switch (ae) {
                  case s:
                  case i:
                  case c:
                  case v:
                  case d:
                  case a:
                    return ae;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var x = i, E = a, _ = e, P = c, R = r, T = v, F = d, k = t, D = o, $ = n, L = l, I = u, H = !1, B = !1;
    function q(j) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(j) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(j) {
      return w(j) === i;
    }
    function Q(j) {
      return w(j) === a;
    }
    function K(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function X(j) {
      return w(j) === c;
    }
    function z(j) {
      return w(j) === r;
    }
    function J(j) {
      return w(j) === v;
    }
    function ne(j) {
      return w(j) === d;
    }
    function ce(j) {
      return w(j) === t;
    }
    function oe(j) {
      return w(j) === o;
    }
    function ie(j) {
      return w(j) === n;
    }
    function he(j) {
      return w(j) === l;
    }
    function we(j) {
      return w(j) === u;
    }
    Xe.ContextConsumer = x, Xe.ContextProvider = E, Xe.Element = _, Xe.ForwardRef = P, Xe.Fragment = R, Xe.Lazy = T, Xe.Memo = F, Xe.Portal = k, Xe.Profiler = D, Xe.StrictMode = $, Xe.Suspense = L, Xe.SuspenseList = I, Xe.isAsyncMode = q, Xe.isConcurrentMode = U, Xe.isContextConsumer = V, Xe.isContextProvider = Q, Xe.isElement = K, Xe.isForwardRef = X, Xe.isFragment = z, Xe.isLazy = J, Xe.isMemo = ne, Xe.isPortal = ce, Xe.isProfiler = oe, Xe.isStrictMode = ie, Xe.isSuspense = he, Xe.isSuspenseList = we, Xe.isValidElementType = S, Xe.typeOf = w;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? go.exports = wl() : go.exports = xl();
var Yn = go.exports;
function El(e, t, r) {
  var n = b.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Pl = Number(h1.split(".")[0]), la = function(t, r) {
  typeof t == "function" ? t(r) : Re(t) === "object" && t && "current" in t && (t.current = r);
}, ua = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      la(i, a);
    });
  };
}, fa = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return El(function() {
    return ua.apply(void 0, r);
  }, r, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, En = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (xs(t) && Pl >= 19)
    return !0;
  var o = Yn.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Yn.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Yn.ForwardRef);
};
function xs(e) {
  return /* @__PURE__ */ hs(e) && !bs(e);
}
var da = function(t) {
  if (t && xs(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
}, po = /* @__PURE__ */ b.createContext(null);
function Rl(e) {
  var t = e.children, r = e.onBatchResize, n = b.useRef(0), o = b.useRef([]), a = b.useContext(po), i = b.useCallback(function(s, c, l) {
    n.current += 1;
    var u = n.current;
    o.current.push({
      size: s,
      element: c,
      data: l
    }), Promise.resolve().then(function() {
      u === n.current && (r == null || r(o.current), o.current = []);
    }), a == null || a(s, c, l);
  }, [r, a]);
  return /* @__PURE__ */ b.createElement(po.Provider, {
    value: i
  }, t);
}
var Es = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(o, a) {
      return o[0] === r ? (n = a, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), o = this.__entries__[n];
        return o && o[1];
      }, t.prototype.set = function(r, n) {
        var o = e(this.__entries__, r);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, o = e(n, r);
        ~o && n.splice(o, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var i = a[o];
          r.call(n, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), yo = typeof window < "u" && typeof document < "u" && window.document === document, gn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ml = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(gn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), _l = 2;
function Fl(e, t) {
  var r = !1, n = !1, o = 0;
  function a() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    Ml(a);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - o < _l)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    o = c;
  }
  return s;
}
var Tl = 20, kl = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ol = typeof MutationObserver < "u", Al = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Fl(this.refresh.bind(this), Tl);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !yo || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ol ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !yo || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = kl.some(function(a) {
        return !!~n.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ps = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var o = n[r];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, tr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || gn;
}, Rs = Pn(0, 0, 0, 0);
function pn(e) {
  return parseFloat(e) || 0;
}
function ei(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var a = e["border-" + o + "-width"];
    return n + pn(a);
  }, 0);
}
function Dl(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var a = o[n], i = e["padding-" + a];
    r[a] = pn(i);
  }
  return r;
}
function Nl(e) {
  var t = e.getBBox();
  return Pn(0, 0, t.width, t.height);
}
function Ll(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Rs;
  var n = tr(e).getComputedStyle(e), o = Dl(n), a = o.left + o.right, i = o.top + o.bottom, s = pn(n.width), c = pn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= ei(n, "left", "right") + a), Math.round(c + i) !== r && (c -= ei(n, "top", "bottom") + i)), !Il(e)) {
    var l = Math.round(s + a) - t, u = Math.round(c + i) - r;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return Pn(o.left, o.top, s, c);
}
var $l = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof tr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof tr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Il(e) {
  return e === tr(e).document.documentElement;
}
function jl(e) {
  return yo ? $l(e) ? Nl(e) : Ll(e) : Rs;
}
function Hl(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(a.prototype);
  return Ps(i, {
    x: t,
    y: r,
    width: n,
    height: o,
    top: r,
    right: t + n,
    bottom: o + r,
    left: t
  }), i;
}
function Pn(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Vl = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Pn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = jl(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Bl = (
  /** @class */
  function() {
    function e(t, r) {
      var n = Hl(r);
      Ps(this, { target: t, contentRect: n });
    }
    return e;
  }()
), zl = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Es(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof tr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Vl(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof tr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Bl(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Ms = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Es(), _s = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Al.getInstance(), n = new zl(t, r, this);
      Ms.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  _s.prototype[e] = function() {
    var t;
    return (t = Ms.get(this))[e].apply(t, arguments);
  };
});
var Wl = function() {
  return typeof gn.ResizeObserver < "u" ? gn.ResizeObserver : _s;
}(), bt = /* @__PURE__ */ new Map();
function Fs(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = bt.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var Ts = new Wl(Fs);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Ul(e, t) {
  bt.has(e) || (bt.set(e, /* @__PURE__ */ new Set()), Ts.observe(e)), bt.get(e).add(t);
}
function Gl(e, t) {
  bt.has(e) && (bt.get(e).delete(t), bt.get(e).size || (Ts.unobserve(e), bt.delete(e)));
}
function M0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ti(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ws(n.key), n);
  }
}
function _0(e, t, r) {
  return t && ti(e.prototype, t), r && ti(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Mr(e, t) {
  return Mr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Mr(e, t);
}
function Tt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Mr(e, t);
}
function _r(e) {
  return _r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _r(e);
}
function va() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (va = function() {
    return !!e;
  })();
}
function Oe(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ql(e, t) {
  if (t && (Re(t) == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oe(e);
}
function kt(e) {
  var t = va();
  return function() {
    var r, n = _r(e);
    if (t) {
      var o = _r(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else
      r = n.apply(this, arguments);
    return ql(this, r);
  };
}
var Xl = /* @__PURE__ */ function(e) {
  Tt(r, e);
  var t = kt(r);
  function r() {
    return M0(this, r), t.apply(this, arguments);
  }
  return _0(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(b.Component);
function Yl(e, t) {
  var r = e.children, n = e.disabled, o = b.useRef(null), a = b.useRef(null), i = b.useContext(po), s = typeof r == "function", c = s ? r(o) : r, l = b.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ b.isValidElement(c) && En(c), d = u ? da(c) : null, v = fa(d, o), h = function() {
    var y;
    return ln(o.current) || // Support `nativeElement` format
    (o.current && Re(o.current) === "object" ? ln((y = o.current) === null || y === void 0 ? void 0 : y.nativeElement) : null) || ln(a.current);
  };
  b.useImperativeHandle(t, function() {
    return h();
  });
  var m = b.useRef(e);
  m.current = e;
  var g = b.useCallback(function(f) {
    var y = m.current, p = y.onResize, C = y.data, S = f.getBoundingClientRect(), w = S.width, x = S.height, E = f.offsetWidth, _ = f.offsetHeight, P = Math.floor(w), R = Math.floor(x);
    if (l.current.width !== P || l.current.height !== R || l.current.offsetWidth !== E || l.current.offsetHeight !== _) {
      var T = {
        width: P,
        height: R,
        offsetWidth: E,
        offsetHeight: _
      };
      l.current = T;
      var F = E === Math.round(w) ? w : E, k = _ === Math.round(x) ? x : _, D = N(N({}, T), {}, {
        offsetWidth: F,
        offsetHeight: k
      });
      i == null || i(D, f, C), p && Promise.resolve().then(function() {
        p(D, f);
      });
    }
  }, []);
  return b.useEffect(function() {
    var f = h();
    return f && !n && Ul(f, g), function() {
      return Gl(f, g);
    };
  }, [o.current, n]), /* @__PURE__ */ b.createElement(Xl, {
    ref: a
  }, u ? /* @__PURE__ */ b.cloneElement(c, {
    ref: v
  }) : c);
}
var ks = /* @__PURE__ */ b.forwardRef(Yl);
process.env.NODE_ENV !== "production" && (ks.displayName = "SingleObserver");
var Kl = "rc-observer-key";
function Zl(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : mn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? $t(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && $t(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, a) {
    var i = (o == null ? void 0 : o.key) || "".concat(Kl, "-").concat(a);
    return /* @__PURE__ */ b.createElement(ks, N0({}, e, {
      key: i,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var Rn = /* @__PURE__ */ b.forwardRef(Zl);
process.env.NODE_ENV !== "production" && (Rn.displayName = "ResizeObserver");
Rn.Collection = Rl;
function bo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ql(e) {
  if (Array.isArray(e))
    return bo(e);
}
function Os(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ha(e, t) {
  if (e) {
    if (typeof e == "string")
      return bo(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? bo(e, t) : void 0;
  }
}
function Jl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ve(e) {
  return Ql(e) || Os(e) || ha(e) || Jl();
}
var As = function(t) {
  return +setTimeout(t, 16);
}, Ds = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (As = function(t) {
  return window.requestAnimationFrame(t);
}, Ds = function(t) {
  return window.cancelAnimationFrame(t);
});
var ri = 0, Mn = /* @__PURE__ */ new Map();
function Ns(e) {
  Mn.delete(e);
}
var Ct = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ri += 1;
  var n = ri;
  function o(a) {
    if (a === 0)
      Ns(n), t();
    else {
      var i = As(function() {
        o(a - 1);
      });
      Mn.set(n, i);
    }
  }
  return o(r), n;
};
Ct.cancel = function(e) {
  var t = Mn.get(e);
  return Ns(e), Ds(t);
};
process.env.NODE_ENV !== "production" && (Ct.ids = function() {
  return Mn;
});
function Ls(e) {
  if (Array.isArray(e))
    return e;
}
function eu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && r.return != null && (i = r.return(), Object(i) !== i))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return s;
  }
}
function $s() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Ls(e) || eu(e, t) || ha(e, t) || $s();
}
function Fr(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function q0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function tu(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var ni = "data-rc-order", oi = "data-rc-priority", ru = "rc-util-key", Co = /* @__PURE__ */ new Map();
function Is() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : ru;
}
function _n(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function nu(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ma(e) {
  return Array.from((Co.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function js(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!q0())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = nu(n), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(ni, i), s && a && c.setAttribute(oi, "".concat(a)), r != null && r.nonce && (c.nonce = r == null ? void 0 : r.nonce), c.innerHTML = e;
  var l = _n(t), u = l.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || ma(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(ni)))
          return !1;
        var h = Number(v.getAttribute(oi) || 0);
        return a >= h;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Hs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _n(t);
  return (t.styles || ma(r)).find(function(n) {
    return n.getAttribute(Is(t)) === e;
  });
}
function Tr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Hs(e, t);
  if (r) {
    var n = _n(t);
    n.removeChild(r);
  }
}
function ou(e, t) {
  var r = Co.get(e);
  if (!r || !tu(document, r)) {
    var n = js("", t), o = n.parentNode;
    Co.set(e, o), e.removeChild(n);
  }
}
function Nt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = _n(r), o = ma(n), a = N(N({}, r), {}, {
    styles: o
  });
  ou(n, a);
  var i = Hs(t, a);
  if (i) {
    var s, c;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = a.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = js(e, a);
  return u.setAttribute(Is(a), t), u;
}
function au(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1)
        continue;
      r[n] = e[n];
    }
  return r;
}
function lt(e, t) {
  if (e == null)
    return {};
  var r, n, o = au(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function So(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(a);
    if (a0(!c, "Warning: There may be circular references"), c)
      return !1;
    if (a === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(a);
    var l = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++)
        if (!o(a[u], i[u], l))
          return !1;
      return !0;
    }
    if (a && i && Re(a) === "object" && Re(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(v) {
        return o(a[v], i[v], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var iu = "%";
function wo(e) {
  return e.join(iu);
}
var su = /* @__PURE__ */ function() {
  function e(t) {
    M0(this, e), O(this, "instanceId", void 0), O(this, "cache", /* @__PURE__ */ new Map()), O(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return _0(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(wo(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(wo(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), rr = "data-token-hash", st = "data-css-hash", cu = "data-cache-path", Mt = "__cssinjs_instance__";
function lu() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(st, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Mt] = o[Mt] || e, o[Mt] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(st, "]"))).forEach(function(o) {
      var a = o.getAttribute(st);
      if (n[a]) {
        if (o[Mt] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new su(e);
}
var Fn = /* @__PURE__ */ b.createContext({
  hashPriority: "low",
  cache: lu(),
  defaultCache: !0
});
function uu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var ga = /* @__PURE__ */ function() {
  function e() {
    M0(this, e), O(this, "cache", void 0), O(this, "keys", void 0), O(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return _0(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (n = i) !== null && n !== void 0 && n.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(l, u) {
            var d = Y(l, 2), v = d[1];
            return o.internalGet(u)[1] < v ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = Y(a, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var c = this.cache;
      r.forEach(function(l, u) {
        if (u === r.length - 1)
          c.set(l, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var d = c.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var a;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !uu(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
O(ga, "MAX_CACHE_SIZE", 20);
O(ga, "MAX_CACHE_OFFSET", 5);
var ai = 0, Vs = /* @__PURE__ */ function() {
  function e(t) {
    M0(this, e), O(this, "derivatives", void 0), O(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = ai, t.length === 0 && $t(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), ai += 1;
  }
  return _0(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), Kn = new ga();
function fu(e) {
  var t = Array.isArray(e) ? e : [e];
  return Kn.has(t) || Kn.set(t, new Vs(t)), Kn.get(t);
}
var du = /* @__PURE__ */ new WeakMap(), Zn = {};
function vu(e, t) {
  for (var r = du, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Zn) || r.set(Zn, e()), r.get(Zn);
}
var ii = /* @__PURE__ */ new WeakMap();
function xr(e) {
  var t = ii.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Vs ? t += n.id : n && Re(n) === "object" ? t += xr(n) : t += n;
  }), t = Fr(t), ii.set(e, t)), t;
}
function si(e, t) {
  return Fr("".concat(t, "_").concat(xr(e)));
}
var xo = q0();
function C0(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function yn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = N(N({}, n), {}, O(O({}, rr, t), st, r)), i = Object.keys(a).map(function(s) {
    var c = a[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var un = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, hu = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = Y(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Bs = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = Y(i, 2), u = l[0], d = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[u])
      a[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[u])) {
      var v, h = un(u, n == null ? void 0 : n.prefix);
      o[h] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[u]) ? "".concat(d, "px") : String(d), a[u] = "var(".concat(h, ")");
    }
  }), [a, hu(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, ci = process.env.NODE_ENV !== "test" && q0() ? b.useLayoutEffect : b.useEffect, D0 = function(t, r) {
  var n = b.useRef(!0);
  ci(function() {
    return t(n.current);
  }, r), ci(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, li = function(t, r) {
  D0(function(n) {
    if (!n)
      return t();
  }, r);
}, mu = N({}, b), ui = mu.useInsertionEffect, gu = function(t, r, n) {
  b.useMemo(t, n), D0(function() {
    return r(!0);
  }, n);
}, pu = ui ? function(e, t, r) {
  return ui(function() {
    return e(), t();
  }, r);
} : gu, yu = N({}, b), bu = yu.useInsertionEffect, Cu = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && $t(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return b.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, Su = function() {
  return function(t) {
    t();
  };
}, wu = typeof bu < "u" ? Cu : Su;
function xu() {
  return !1;
}
var Eo = !1;
function Eu() {
  return Eo;
}
const Pu = process.env.NODE_ENV === "production" ? xu : Eu;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Zr && typeof Zr.webpackHotUpdate == "function") {
    var Ru = Zr.webpackHotUpdate;
    Zr.webpackHotUpdate = function() {
      return Eo = !0, setTimeout(function() {
        Eo = !1;
      }, 0), Ru.apply(void 0, arguments);
    };
  }
}
function pa(e, t, r, n, o) {
  var a = b.useContext(Fn), i = a.cache, s = [e].concat(ve(t)), c = wo(s), l = wu([c]), u = Pu(), d = function(g) {
    i.opUpdate(c, function(f) {
      var y = f || [void 0, void 0], p = Y(y, 2), C = p[0], S = C === void 0 ? 0 : C, w = p[1], x = w;
      process.env.NODE_ENV !== "production" && w && u && (n == null || n(x, u), x = null);
      var E = x || r(), _ = [S, E];
      return g ? g(_) : _;
    });
  };
  b.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var v = i.opGet(c);
  process.env.NODE_ENV !== "production" && !v && (d(), v = i.opGet(c));
  var h = v[1];
  return pu(function() {
    o == null || o(h);
  }, function(m) {
    return d(function(g) {
      var f = Y(g, 2), y = f[0], p = f[1];
      return m && y === 0 && (o == null || o(h)), [y + 1, p];
    }), function() {
      i.opUpdate(c, function(g) {
        var f = g || [], y = Y(f, 2), p = y[0], C = p === void 0 ? 0 : p, S = y[1], w = C - 1;
        return w === 0 ? (l(function() {
          (m || !i.opGet(c)) && (n == null || n(S, !1));
        }), null) : [C - 1, S];
      });
    };
  }, [c]), h;
}
var Mu = {}, _u = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Ot = /* @__PURE__ */ new Map();
function Fu(e) {
  Ot.set(e, (Ot.get(e) || 0) + 1);
}
function Tu(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(rr, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Mt] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var ku = 0;
function Ou(e, t) {
  Ot.set(e, (Ot.get(e) || 0) - 1);
  var r = /* @__PURE__ */ new Set();
  Ot.forEach(function(n, o) {
    n <= 0 && r.add(o);
  }), Ot.size - r.size > ku && r.forEach(function(n) {
    Tu(n, t), Ot.delete(n);
  });
}
var Au = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = N(N({}, a), r);
  return o && (i = o(i)), i;
}, zs = "token";
function Du(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Pr(Fn), o = n.cache.instanceId, a = n.container, i = r.salt, s = i === void 0 ? "" : i, c = r.override, l = c === void 0 ? Mu : c, u = r.formatToken, d = r.getComputedToken, v = r.cssVar, h = vu(function() {
    return Object.assign.apply(Object, [{}].concat(ve(t)));
  }, t), m = xr(h), g = xr(l), f = v ? xr(v) : "", y = pa(zs, [s, e.id, m, g, f], function() {
    var p, C = d ? d(h, l, e) : Au(h, l, e, u), S = N({}, C), w = "";
    if (v) {
      var x = Bs(C, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), E = Y(x, 2);
      C = E[0], w = E[1];
    }
    var _ = si(C, s);
    C._tokenKey = _, S._tokenKey = si(S, s);
    var P = (p = v == null ? void 0 : v.key) !== null && p !== void 0 ? p : _;
    C._themeKey = P, Fu(P);
    var R = "".concat(_u, "-").concat(Fr(_));
    return C._hashId = R, [C, R, S, w, (v == null ? void 0 : v.key) || ""];
  }, function(p) {
    Ou(p[0]._themeKey, o);
  }, function(p) {
    var C = Y(p, 4), S = C[0], w = C[3];
    if (v && w) {
      var x = Nt(w, Fr("css-variables-".concat(S._themeKey)), {
        mark: st,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      x[Mt] = o, x.setAttribute(rr, S._themeKey);
    }
  });
  return y;
}
var Nu = function(t, r, n) {
  var o = Y(t, 5), a = o[2], i = o[3], s = o[4], c = n || {}, l = c.plain;
  if (!i)
    return null;
  var u = a._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, h = yn(i, s, u, v, l);
  return [d, u, h];
}, Lu = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ws = "comm", Us = "rule", Gs = "decl", $u = "@import", Iu = "@namespace", ju = "@keyframes", Hu = "@layer", qs = Math.abs, ya = String.fromCharCode;
function Xs(e) {
  return e.trim();
}
function fn(e, t, r) {
  return e.replace(t, r);
}
function Vu(e, t, r) {
  return e.indexOf(t, r);
}
function Qt(e, t) {
  return e.charCodeAt(t) | 0;
}
function nr(e, t, r) {
  return e.slice(t, r);
}
function ft(e) {
  return e.length;
}
function Bu(e) {
  return e.length;
}
function Qr(e, t) {
  return t.push(e), e;
}
var Tn = 1, or = 1, Ys = 0, et = 0, S0 = 0, ir = "";
function ba(e, t, r, n, o, a, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Tn, column: or, length: i, return: "", siblings: s };
}
function zu() {
  return S0;
}
function Wu() {
  return S0 = et > 0 ? Qt(ir, --et) : 0, or--, S0 === 10 && (or = 1, Tn--), S0;
}
function ct() {
  return S0 = et < Ys ? Qt(ir, et++) : 0, or++, S0 === 10 && (or = 1, Tn++), S0;
}
function _t() {
  return Qt(ir, et);
}
function dn() {
  return et;
}
function kn(e, t) {
  return nr(ir, e, t);
}
function kr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Uu(e) {
  return Tn = or = 1, Ys = ft(ir = e), et = 0, [];
}
function Gu(e) {
  return ir = "", e;
}
function Qn(e) {
  return Xs(kn(et - 1, Po(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qu(e) {
  for (; (S0 = _t()) && S0 < 33; )
    ct();
  return kr(e) > 2 || kr(S0) > 3 ? "" : " ";
}
function Xu(e, t) {
  for (; --t && ct() && !(S0 < 48 || S0 > 102 || S0 > 57 && S0 < 65 || S0 > 70 && S0 < 97); )
    ;
  return kn(e, dn() + (t < 6 && _t() == 32 && ct() == 32));
}
function Po(e) {
  for (; ct(); )
    switch (S0) {
      case e:
        return et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Po(S0);
        break;
      case 40:
        e === 41 && Po(e);
        break;
      case 92:
        ct();
        break;
    }
  return et;
}
function Yu(e, t) {
  for (; ct() && e + S0 !== 47 + 10; )
    if (e + S0 === 42 + 42 && _t() === 47)
      break;
  return "/*" + kn(t, et - 1) + "*" + ya(e === 47 ? e : ct());
}
function Ku(e) {
  for (; !kr(_t()); )
    ct();
  return kn(e, et);
}
function Zu(e) {
  return Gu(vn("", null, null, null, [""], e = Uu(e), 0, [0], e));
}
function vn(e, t, r, n, o, a, i, s, c) {
  for (var l = 0, u = 0, d = i, v = 0, h = 0, m = 0, g = 1, f = 1, y = 1, p = 0, C = "", S = o, w = a, x = n, E = C; f; )
    switch (m = p, p = ct()) {
      case 40:
        if (m != 108 && Qt(E, d - 1) == 58) {
          Vu(E += fn(Qn(p), "&", "&\f"), "&\f", qs(l ? s[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Qn(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += qu(m);
        break;
      case 92:
        E += Xu(dn() - 1, 7);
        continue;
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            Qr(Qu(Yu(ct(), dn()), t, r, c), c), (kr(m || 1) == 5 || kr(_t() || 1) == 5) && ft(E) && nr(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        s[l++] = ft(E) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            f = 0;
          case 59 + u:
            y == -1 && (E = fn(E, /\f/g, "")), h > 0 && (ft(E) - d || g === 0 && m === 47) && Qr(h > 32 ? di(E + ";", n, r, d - 1, c) : di(fn(E, " ", "") + ";", n, r, d - 2, c), c);
            break;
          case 59:
            E += ";";
          default:
            if (Qr(x = fi(E, t, r, l, u, o, s, C, S = [], w = [], d, a), a), p === 123)
              if (u === 0)
                vn(E, t, x, x, S, a, d, s, w);
              else {
                switch (v) {
                  case 99:
                    if (Qt(E, 3) === 110)
                      break;
                  case 108:
                    if (Qt(E, 2) === 97)
                      break;
                  default:
                    u = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                u ? vn(e, x, x, n && Qr(fi(e, x, x, 0, 0, o, s, C, o, S = [], d, w), w), o, w, d, s, n ? S : w) : vn(E, x, x, x, [""], w, 0, s, w);
              }
        }
        l = u = h = 0, g = y = 1, C = E = "", d = i;
        break;
      case 58:
        d = 1 + ft(E), h = m;
      default:
        if (g < 1) {
          if (p == 123)
            --g;
          else if (p == 125 && g++ == 0 && Wu() == 125)
            continue;
        }
        switch (E += ya(p), p * g) {
          case 38:
            y = u > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[l++] = (ft(E) - 1) * y, y = 1;
            break;
          case 64:
            _t() === 45 && (E += Qn(ct())), v = _t(), u = d = ft(C = E += Ku(dn())), p++;
            break;
          case 45:
            m === 45 && ft(E) == 2 && (g = 0);
        }
    }
  return a;
}
function fi(e, t, r, n, o, a, i, s, c, l, u, d) {
  for (var v = o - 1, h = o === 0 ? a : [""], m = Bu(h), g = 0, f = 0, y = 0; g < n; ++g)
    for (var p = 0, C = nr(e, v + 1, v = qs(f = i[g])), S = e; p < m; ++p)
      (S = Xs(f > 0 ? h[p] + " " + C : fn(C, /&\f/g, h[p]))) && (c[y++] = S);
  return ba(e, t, r, o === 0 ? Us : s, c, l, u, d);
}
function Qu(e, t, r, n) {
  return ba(e, t, r, Ws, ya(zu()), nr(e, 2, -2), 0, n);
}
function di(e, t, r, n, o) {
  return ba(e, t, r, Gs, nr(e, 0, n), nr(e, n + 1, -1), n, o);
}
function Ro(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Ju(e, t, r, n) {
  switch (e.type) {
    case Hu:
      if (e.children.length)
        break;
    case $u:
    case Iu:
    case Gs:
      return e.return = e.return || e.value;
    case Ws:
      return "";
    case ju:
      return e.return = e.value + "{" + Ro(e.children, n) + "}";
    case Us:
      if (!ft(e.value = e.props.join(",")))
        return "";
  }
  return ft(r = Ro(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ks(e, t) {
  var r = t.path, n = t.parentSelectors;
  a0(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var e2 = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Ks("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, t2 = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Ks("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, vi = "data-ant-cssinjs-cache-path", Zs = "_FILE_STYLE__", Lt, Qs = !0;
function r2() {
  if (!Lt && (Lt = {}, q0())) {
    var e = document.createElement("div");
    e.className = vi, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = Y(a, 2), s = i[0], c = i[1];
      Lt[s] = c;
    });
    var r = document.querySelector("style[".concat(vi, "]"));
    if (r) {
      var n;
      Qs = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function n2(e) {
  return r2(), !!Lt[e];
}
function o2(e) {
  var t = Lt[e], r = null;
  if (t && q0())
    if (Qs)
      r = Zs;
    else {
      var n = document.querySelector("style[".concat(st, '="').concat(Lt[e], '"]'));
      n ? r = n.innerHTML : delete Lt[e];
    }
  return [r, t];
}
var Js = "_skip_check_", ec = "_multi_value_";
function hn(e) {
  var t = Ro(Zu(e), Ju);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function a2(e) {
  return Re(e) === "object" && e && (Js in e || ec in e);
}
function hi(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(ve(c.slice(1))).join(" ");
  });
  return a.join(",");
}
var i2 = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, s = r.hashId, c = r.layer, l = r.path, u = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, h = r.linters, m = h === void 0 ? [] : h, g = "", f = {};
  function y(S) {
    var w = S.getName(s);
    if (!f[w]) {
      var x = e(S.style, r, {
        root: !1,
        parentSelectors: i
      }), E = Y(x, 1), _ = E[0];
      f[w] = "@keyframes ".concat(S.getName(s)).concat(_);
    }
  }
  function p(S) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach(function(x) {
      Array.isArray(x) ? p(x, w) : x && w.push(x);
    }), w;
  }
  var C = p(Array.isArray(t) ? t : [t]);
  return C.forEach(function(S) {
    var w = typeof S == "string" && !o ? {} : S;
    if (typeof w == "string")
      g += "".concat(w, `
`);
    else if (w._keyframe)
      y(w);
    else {
      var x = v.reduce(function(E, _) {
        var P;
        return (_ == null || (P = _.visit) === null || P === void 0 ? void 0 : P.call(_, E)) || E;
      }, w);
      Object.keys(x).forEach(function(E) {
        var _ = x[E];
        if (Re(_) === "object" && _ && (E !== "animationName" || !_._keyframe) && !a2(_)) {
          var P = !1, R = E.trim(), T = !1;
          (o || a) && s ? R.startsWith("@") ? P = !0 : R === "&" ? R = hi("", s, u) : R = hi(E, s, u) : o && !s && (R === "&" || R === "") && (R = "", T = !0);
          var F = e(_, r, {
            root: T,
            injectHash: P,
            parentSelectors: [].concat(ve(i), [R])
          }), k = Y(F, 2), D = k[0], $ = k[1];
          f = N(N({}, f), $), g += "".concat(R).concat(D);
        } else {
          let H = function(B, q) {
            process.env.NODE_ENV !== "production" && (Re(_) !== "object" || !(_ != null && _[Js])) && [e2, t2].concat(ve(m)).forEach(function(Q) {
              return Q(B, q, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var U = B.replace(/[A-Z]/g, function(Q) {
              return "-".concat(Q.toLowerCase());
            }), V = q;
            !Lu[B] && typeof V == "number" && V !== 0 && (V = "".concat(V, "px")), B === "animationName" && q !== null && q !== void 0 && q._keyframe && (y(q), V = q.getName(s)), g += "".concat(U, ":").concat(V, ";");
          };
          var L, I = (L = _ == null ? void 0 : _.value) !== null && L !== void 0 ? L : _;
          Re(_) === "object" && _ !== null && _ !== void 0 && _[ec] && Array.isArray(I) ? I.forEach(function(B) {
            H(E, B);
          }) : H(E, I);
        }
      });
    }
  }), o ? c && (g && (g = "@layer ".concat(c.name, " {").concat(g, "}")), c.dependencies && (f["@layer ".concat(c.name)] = c.dependencies.map(function(S) {
    return "@layer ".concat(S, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, f];
};
function tc(e, t) {
  return Fr("".concat(e.join("%")).concat(t));
}
function s2() {
  return null;
}
var rc = "style";
function mi(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = b.useContext(Fn), d = u.autoClear, v = u.mock, h = u.defaultCache, m = u.hashPriority, g = u.container, f = u.ssrInline, y = u.transformers, p = u.linters, C = u.cache, S = u.layer, w = r._tokenKey, x = [w];
  S && x.push("layer"), x.push.apply(x, ve(n));
  var E = xo;
  process.env.NODE_ENV !== "production" && v !== void 0 && (E = v === "client");
  var _ = pa(
    rc,
    x,
    // Create cache if needed
    function() {
      var k = x.join("|");
      if (n2(k)) {
        var D = o2(k), $ = Y(D, 2), L = $[0], I = $[1];
        if (L)
          return [L, w, I, {}, s, l];
      }
      var H = t(), B = i2(H, {
        hashId: o,
        hashPriority: m,
        layer: S ? a : void 0,
        path: n.join("-"),
        transformers: y,
        linters: p
      }), q = Y(B, 2), U = q[0], V = q[1], Q = hn(U), K = tc(x, Q);
      return [Q, w, K, V, s, l];
    },
    // Remove cache if no need
    function(k, D) {
      var $ = Y(k, 3), L = $[2];
      (D || d) && xo && Tr(L, {
        mark: st,
        attachTo: g
      });
    },
    // Effect: Inject style here
    function(k) {
      var D = Y(k, 4), $ = D[0];
      D[1];
      var L = D[2], I = D[3];
      if (E && $ !== Zs) {
        var H = {
          mark: st,
          prepend: S ? !1 : "queue",
          attachTo: g,
          priority: l
        }, B = typeof i == "function" ? i() : i;
        B && (H.csp = {
          nonce: B
        });
        var q = [], U = [];
        Object.keys(I).forEach(function(Q) {
          Q.startsWith("@layer") ? q.push(Q) : U.push(Q);
        }), q.forEach(function(Q) {
          Nt(hn(I[Q]), "_layer-".concat(Q), N(N({}, H), {}, {
            prepend: !0
          }));
        });
        var V = Nt($, L, H);
        V[Mt] = C.instanceId, V.setAttribute(rr, w), process.env.NODE_ENV !== "production" && V.setAttribute(cu, x.join("|")), U.forEach(function(Q) {
          Nt(hn(I[Q]), "_effect-".concat(Q), H);
        });
      }
    }
  ), P = Y(_, 3), R = P[0], T = P[1], F = P[2];
  return function(k) {
    var D;
    return !f || E || !h ? D = /* @__PURE__ */ b.createElement(s2, null) : D = /* @__PURE__ */ b.createElement("style", N0({}, O(O({}, rr, T), st, F), {
      dangerouslySetInnerHTML: {
        __html: R
      }
    })), /* @__PURE__ */ b.createElement(b.Fragment, null, D, k);
  };
}
var c2 = function(t, r, n) {
  var o = Y(t, 6), a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = o[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var h = a, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return h = yn(a, i, s, m, v), c && Object.keys(c).forEach(function(g) {
    if (!r[g]) {
      r[g] = !0;
      var f = hn(c[g]), y = yn(f, i, "_effect-".concat(g), m, v);
      g.startsWith("@layer") ? h = y + h : h += y;
    }
  }), [u, s, h];
}, nc = "cssVar", l2 = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = Pr(Fn), d = u.cache.instanceId, v = u.container, h = s._tokenKey, m = [].concat(ve(t.path), [n, l, h]), g = pa(nc, m, function() {
    var f = r(), y = Bs(f, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), p = Y(y, 2), C = p[0], S = p[1], w = tc(m, S);
    return [C, S, w, n];
  }, function(f) {
    var y = Y(f, 3), p = y[2];
    xo && Tr(p, {
      mark: st,
      attachTo: v
    });
  }, function(f) {
    var y = Y(f, 3), p = y[1], C = y[2];
    if (p) {
      var S = Nt(p, C, {
        mark: st,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      S[Mt] = d, S.setAttribute(rr, n);
    }
  });
  return g;
}, u2 = function(t, r, n) {
  var o = Y(t, 4), a = o[1], i = o[2], s = o[3], c = n || {}, l = c.plain;
  if (!a)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, v = yn(a, s, i, d, l);
  return [u, i, v];
};
O(O(O({}, rc, c2), zs, Nu), nc, u2);
var rt = /* @__PURE__ */ function() {
  function e(t, r) {
    M0(this, e), O(this, "name", void 0), O(this, "style", void 0), O(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return _0(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Bt(e) {
  return e.notSplit = !0, e;
}
Bt(["borderTop", "borderBottom"]), Bt(["borderTop"]), Bt(["borderBottom"]), Bt(["borderLeft", "borderRight"]), Bt(["borderLeft"]), Bt(["borderRight"]);
function f2(e) {
  return Ls(e) || Os(e) || ha(e) || $s();
}
function dt(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function oc(e, t, r, n) {
  if (!t.length)
    return r;
  var o = f2(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = ve(e) : s = N({}, e), n && r === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = oc(s[a], i, r, n), s;
}
function at(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !dt(e, t.slice(0, -1)) ? e : oc(e, t, r, n);
}
function d2(e) {
  return Re(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function gi(e) {
  return Array.isArray(e) ? [] : {};
}
var v2 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Sr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = gi(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var c = new Set(s), l = dt(o, i), u = Array.isArray(l);
      if (u || d2(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = dt(n, i);
          u ? n = at(n, i, []) : (!d || Re(d) !== "object") && (n = at(n, i, gi(l))), v2(l).forEach(function(v) {
            a([].concat(ve(i), [v]), c);
          });
        }
      } else
        n = at(n, i, l);
    }
    a([]);
  }), n;
}
function ac() {
}
let pt = null;
function h2() {
  pt = null, Cs();
}
let ic = ac;
process.env.NODE_ENV !== "production" && (ic = (e, t, r) => {
  a0(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && h2();
});
const m2 = ic, g2 = /* @__PURE__ */ b.createContext({}), Ca = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = b.useContext(g2), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = pt;
        pt || (pt = {}), pt[e] = pt[e] || [], pt[e].includes(a || "") || pt[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", pt);
      } else
        process.env.NODE_ENV !== "production" && m2(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = ac, e;
}, sc = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, p2 = Object.assign(Object.assign({}, sc), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), bn = p2, P0 = Math.round;
function Jn(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const pi = (e, t, r) => r === 0 ? e : e / 100;
function mr(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class p0 {
  constructor(t) {
    O(this, "isValid", !0), O(this, "r", 0), O(this, "g", 0), O(this, "b", 0), O(this, "a", 1), O(this, "_h", void 0), O(this, "_s", void 0), O(this, "_l", void 0), O(this, "_v", void 0), O(this, "_max", void 0), O(this, "_min", void 0), O(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t)
      if (typeof t == "string") {
        let o = function(a) {
          return n.startsWith(a);
        };
        const n = t.trim();
        /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
      } else if (t instanceof p0)
        this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
      else if (r("rgb"))
        this.r = mr(t.r), this.g = mr(t.g), this.b = mr(t.b), this.a = typeof t.a == "number" ? mr(t.a, 1) : 1;
      else if (r("hsl"))
        this.fromHsl(t);
      else if (r("hsv"))
        this.fromHsv(t);
      else
        throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const r = this.toHsv();
    return r.h = t, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const i = a / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = P0(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, a = (s) => (n[s] - this[s]) * o + this[s], i = {
      r: P0(a("r")),
      g: P0(a("g")),
      b: P0(a("b")),
      a: P0(a("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (a) => P0((this[a] * this.a + r[a] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = P0(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), r = P0(this.getSaturation() * 100), n = P0(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = mr(r, n), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const r = t.replace("#", "");
    function n(o, a) {
      return parseInt(r[o] + r[a || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const v = P0(n * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let a = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * n - 1)) * r, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (a = l, i = u) : c >= 1 && c < 2 ? (a = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (a = u, s = l) : c >= 5 && c < 6 && (a = l, s = u);
    const d = n - l / 2;
    this.r = P0((a + d) * 255), this.g = P0((i + d) * 255), this.b = P0((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const a = P0(n * 255);
    if (this.r = a, this.g = a, this.b = a, r <= 0)
      return;
    const i = t / 60, s = Math.floor(i), c = i - s, l = P0(n * (1 - r) * 255), u = P0(n * (1 - r * c) * 255), d = P0(n * (1 - r * (1 - c)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = Jn(t, pi);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Jn(t, pi);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Jn(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? P0(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var Jr = 2, yi = 0.16, y2 = 0.05, b2 = 0.05, C2 = 0.15, cc = 5, lc = 4, S2 = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function bi(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Jr * t : Math.round(e.h) + Jr * t : n = r ? Math.round(e.h) + Jr * t : Math.round(e.h) - Jr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ci(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - yi * t : t === lc ? n = e.s + yi : n = e.s + y2 * t, n > 1 && (n = 1), r && t === cc && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function Si(e, t, r) {
  var n;
  return r ? n = e.v + b2 * t : n = e.v - C2 * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function uc(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new p0(e), o = n.toHsv(), a = cc; a > 0; a -= 1) {
    var i = new p0({
      h: bi(o, a, !0),
      s: Ci(o, a, !0),
      v: Si(o, a, !0)
    });
    r.push(i);
  }
  r.push(n);
  for (var s = 1; s <= lc; s += 1) {
    var c = new p0({
      h: bi(o, s),
      s: Ci(o, s),
      v: Si(o, s)
    });
    r.push(c);
  }
  return t.theme === "dark" ? S2.map(function(l) {
    var u = l.index, d = l.amount;
    return new p0(t.backgroundColor || "#141414").mix(r[u], d).toHexString();
  }) : r.map(function(l) {
    return l.toHexString();
  });
}
var eo = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Mo = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Mo.primary = Mo[5];
var _o = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
_o.primary = _o[5];
var Fo = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Fo.primary = Fo[5];
var To = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
To.primary = To[5];
var ko = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
ko.primary = ko[5];
var Oo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Oo.primary = Oo[5];
var Ao = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ao.primary = Ao[5];
var Do = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Do.primary = Do[5];
var No = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
No.primary = No[5];
var Lo = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Lo.primary = Lo[5];
var $o = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
$o.primary = $o[5];
var Io = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Io.primary = Io[5];
var jo = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
jo.primary = jo[5];
var to = {
  red: Mo,
  volcano: _o,
  orange: Fo,
  gold: To,
  yellow: ko,
  lime: Oo,
  green: Ao,
  cyan: Do,
  blue: No,
  geekblue: Lo,
  purple: $o,
  magenta: Io,
  grey: jo
};
function w2(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: r
}) {
  const {
    colorSuccess: n,
    colorWarning: o,
    colorError: a,
    colorInfo: i,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: l
  } = e, u = t(s), d = t(n), v = t(o), h = t(a), m = t(i), g = r(c, l), f = e.colorLink || e.colorInfo, y = t(f), p = new p0(h[1]).mix(new p0(h[3]), 50).toHexString();
  return Object.assign(Object.assign({}, g), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBgFilledHover: p,
    colorErrorBgActive: h[3],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new p0("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const x2 = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, E2 = x2;
function P2(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, E2(n));
}
const R2 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, M2 = R2;
function _2(e) {
  return (e + 8) / e;
}
function F2(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: _2(r)
  }));
}
const T2 = (e) => {
  const t = F2(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], a = r[0], i = r[2], s = n[1], c = n[0], l = n[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: s,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(c * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
}, k2 = T2;
function O2(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const K0 = (e, t) => new p0(e).setA(t).toRgbString(), gr = (e, t) => new p0(e).darken(t).toHexString(), A2 = (e) => {
  const t = uc(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, D2 = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: K0(n, 0.88),
    colorTextSecondary: K0(n, 0.65),
    colorTextTertiary: K0(n, 0.45),
    colorTextQuaternary: K0(n, 0.25),
    colorFill: K0(n, 0.15),
    colorFillSecondary: K0(n, 0.06),
    colorFillTertiary: K0(n, 0.04),
    colorFillQuaternary: K0(n, 0.02),
    colorBgSolid: K0(n, 1),
    colorBgSolidHover: K0(n, 0.75),
    colorBgSolidActive: K0(n, 0.95),
    colorBgLayout: gr(r, 4),
    colorBgContainer: gr(r, 0),
    colorBgElevated: gr(r, 0),
    colorBgSpotlight: K0(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: gr(r, 15),
    colorBorderSecondary: gr(r, 6)
  };
};
function N2(e) {
  eo.pink = eo.magenta, to.pink = to.magenta;
  const t = Object.keys(sc).map((r) => {
    const n = e[r] === eo[r] ? to[r] : uc(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), w2(e, {
    generateColorPalettes: A2,
    generateNeutralColorPalettes: D2
  })), k2(e.fontSize)), O2(e)), M2(e)), P2(e));
}
const L2 = fu(N2), $2 = L2, I2 = {
  token: bn,
  override: {
    override: bn
  },
  hashed: !0
}, j2 = /* @__PURE__ */ be.createContext(I2), wi = "ant", fc = "anticon", H2 = (e, t) => t || (e ? `${wi}-${e}` : wi), Or = /* @__PURE__ */ b.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: H2,
  iconPrefixCls: fc
}), xi = {};
function Sa(e) {
  const t = b.useContext(Or), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: xi,
    styles: xi
  }, a), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  });
}
const V2 = /* @__PURE__ */ b.createContext(!1), B2 = V2;
var dc = /* @__PURE__ */ _0(function e() {
  M0(this, e);
}), vc = "CALC_UNIT", z2 = new RegExp(vc, "g");
function ro(e) {
  return typeof e == "number" ? "".concat(e).concat(vc) : e;
}
var W2 = /* @__PURE__ */ function(e) {
  Tt(r, e);
  var t = kt(r);
  function r(n, o) {
    var a;
    M0(this, r), a = t.call(this), O(Oe(a), "result", ""), O(Oe(a), "unitlessCssVar", void 0), O(Oe(a), "lowPriority", void 0);
    var i = Re(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = ro(n) : i === "string" && (a.result = n), a;
  }
  return _0(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(ro(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(ro(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, s = i.unit, c = !0;
      return typeof s == "boolean" ? c = s : Array.from(this.unitlessCssVar).some(function(l) {
        return a.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(z2, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(dc), U2 = /* @__PURE__ */ function(e) {
  Tt(r, e);
  var t = kt(r);
  function r(n) {
    var o;
    return M0(this, r), o = t.call(this), O(Oe(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return _0(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(dc), G2 = function(t, r) {
  var n = t === "css" ? W2 : U2;
  return function(o) {
    return new n(o, r);
  };
}, Ei = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function R0(e) {
  var t = b.useRef();
  t.current = e;
  var r = b.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function Ar(e) {
  var t = b.useRef(!1), r = b.useState(e), n = Y(r, 2), o = n[0], a = n[1];
  b.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, c) {
    c && t.current || a(s);
  }
  return [o, i];
}
function no(e) {
  return e !== void 0;
}
function On(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, a = r.onChange, i = r.postState, s = Ar(function() {
    return no(o) ? o : no(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = Y(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, v = i ? i(d) : d, h = R0(a), m = Ar([d]), g = Y(m, 2), f = g[0], y = g[1];
  li(function() {
    var C = f[0];
    l !== C && h(l, C);
  }, [f]), li(function() {
    no(o) || u(o);
  }, [o]);
  var p = R0(function(C, S) {
    u(C, S), y([d], S);
  });
  return [v, p];
}
function Pi(e, t, r, n) {
  var o = N({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(s) {
      var c = Y(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && a0(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var i = N(N({}, r), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var hc = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ho = !0;
function sr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!hc)
    return Object.assign.apply(Object, [{}].concat(t));
  Ho = !1;
  var n = {};
  return t.forEach(function(o) {
    if (Re(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), Ho = !0, n;
}
var Ri = {};
function q2() {
}
var X2 = function(t) {
  var r, n = t, o = q2;
  return hc && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(i, s) {
      if (Ho) {
        var c;
        (c = r) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var c;
    Ri[i] = {
      global: Array.from(r),
      component: N(N({}, (c = Ri[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function Mi(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(sr(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function Y2(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(a) {
        return C0(a);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(a) {
        return C0(a);
      }).join(","), ")");
    }
  };
}
var K2 = 1e3 * 60 * 10, Z2 = /* @__PURE__ */ function() {
  function e() {
    M0(this, e), O(this, "map", /* @__PURE__ */ new Map()), O(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), O(this, "nextID", 0), O(this, "lastAccessBeat", /* @__PURE__ */ new Map()), O(this, "accessBeat", 0);
  }
  return _0(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, o = r.map(function(a) {
        return a && Re(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(Re(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          n - o > K2 && (r.map.delete(a), r.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), _i = new Z2();
function Q2(e, t) {
  return be.useMemo(function() {
    var r = _i.get(t);
    if (r)
      return r;
    var n = e();
    return _i.set(t, n), n;
  }, t);
}
var J2 = function() {
  return {};
};
function e3(e) {
  var t = e.useCSP, r = t === void 0 ? J2 : t, n = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(v, h, m, g) {
    var f = Array.isArray(v) ? v[0] : v;
    function y(_) {
      return "".concat(String(f)).concat(_.slice(0, 1).toUpperCase()).concat(_.slice(1));
    }
    var p = (g == null ? void 0 : g.unitless) || {}, C = typeof s == "function" ? s(v) : {}, S = N(N({}, C), {}, O({}, y("zIndexPopup"), !0));
    Object.keys(p).forEach(function(_) {
      S[y(_)] = p[_];
    });
    var w = N(N({}, g), {}, {
      unitless: S,
      prefixToken: y
    }), x = u(v, h, m, w), E = l(f, m, w);
    return function(_) {
      var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _, R = x(_, P), T = Y(R, 2), F = T[1], k = E(P), D = Y(k, 2), $ = D[0], L = D[1];
      return [$, F, L];
    };
  }
  function l(v, h, m) {
    var g = m.unitless, f = m.injectStyle, y = f === void 0 ? !0 : f, p = m.prefixToken, C = m.ignore, S = function(E) {
      var _ = E.rootCls, P = E.cssVar, R = P === void 0 ? {} : P, T = n(), F = T.realToken;
      return l2({
        path: [v],
        prefix: R.prefix,
        key: R.key,
        unitless: g,
        ignore: C,
        token: F,
        scope: _
      }, function() {
        var k = Mi(v, F, h), D = Pi(v, F, k, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(k).forEach(function($) {
          D[p($)] = D[$], delete D[$];
        }), D;
      }), null;
    }, w = function(E) {
      var _ = n(), P = _.cssVar;
      return [function(R) {
        return y && P ? /* @__PURE__ */ be.createElement(be.Fragment, null, /* @__PURE__ */ be.createElement(S, {
          rootCls: E,
          cssVar: P,
          component: v
        }), R) : R;
      }, P == null ? void 0 : P.key];
    };
    return w;
  }
  function u(v, h, m) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = Array.isArray(v) ? v : [v, v], y = Y(f, 1), p = y[0], C = f.join("-"), S = e.layer || {
      name: "antd"
    };
    return function(w) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, E = n(), _ = E.theme, P = E.realToken, R = E.hashId, T = E.token, F = E.cssVar, k = o(), D = k.rootPrefixCls, $ = k.iconPrefixCls, L = r(), I = F ? "css" : "js", H = Q2(function() {
        var K = /* @__PURE__ */ new Set();
        return F && Object.keys(g.unitless || {}).forEach(function(X) {
          K.add(un(X, F.prefix)), K.add(un(X, Ei(p, F.prefix)));
        }), G2(I, K);
      }, [I, p, F == null ? void 0 : F.prefix]), B = Y2(I), q = B.max, U = B.min, V = {
        theme: _,
        token: T,
        hashId: R,
        nonce: function() {
          return L.nonce;
        },
        clientOnly: g.clientOnly,
        layer: S,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof a == "function" && mi(N(N({}, V), {}, {
        clientOnly: !1,
        path: ["Shared", D]
      }), function() {
        return a(T, {
          prefix: {
            rootPrefixCls: D,
            iconPrefixCls: $
          },
          csp: L
        });
      });
      var Q = mi(N(N({}, V), {}, {
        path: [C, w, $]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var K = X2(T), X = K.token, z = K.flush, J = Mi(p, P, m), ne = ".".concat(w), ce = Pi(p, P, J, {
          deprecatedTokens: g.deprecatedTokens
        });
        F && J && Re(J) === "object" && Object.keys(J).forEach(function(we) {
          J[we] = "var(".concat(un(we, Ei(p, F.prefix)), ")");
        });
        var oe = sr(X, {
          componentCls: ne,
          prefixCls: w,
          iconCls: ".".concat($),
          antCls: ".".concat(D),
          calc: H,
          // @ts-ignore
          max: q,
          // @ts-ignore
          min: U
        }, F ? J : ce), ie = h(oe, {
          hashId: R,
          prefixCls: w,
          rootPrefixCls: D,
          iconPrefixCls: $
        });
        z(p, ce);
        var he = typeof i == "function" ? i(oe, w, x, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : he, ie];
      });
      return [Q, R];
    };
  }
  function d(v, h, m) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = u(v, h, m, N({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), y = function(C) {
      var S = C.prefixCls, w = C.rootCls, x = w === void 0 ? S : w;
      return f(S, x), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Dr = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], t3 = "5.29.3";
function oo(e) {
  return e >= 0 && e <= 255;
}
function en(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new p0(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: s,
    b: c
  } = new p0(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((r - i * (1 - l)) / l), d = Math.round((n - s * (1 - l)) / l), v = Math.round((o - c * (1 - l)) / l);
    if (oo(u) && oo(d) && oo(v))
      return new p0({
        r: u,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new p0({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var r3 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function mc(e) {
  const {
    override: t
  } = e, r = r3(e, ["override"]), n = Object.assign({}, t);
  Object.keys(bn).forEach((v) => {
    delete n[v];
  });
  const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, s = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: en(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: en(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: en(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 3,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: en(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new p0("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new p0("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new p0("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var Fi = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const gc = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, n3 = {
  motionBase: !0,
  motionUnit: !0
}, o3 = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, pc = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = Fi(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = mc(i), a && Object.entries(a).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = Fi(c, ["theme"]);
    let d = u;
    l && (d = pc(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = d;
  }), i;
};
function wa() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = be.useContext(j2), a = `${t3}-${t || ""}`, i = r || $2, [s, c, l] = Du(i, [bn, e], {
    salt: a,
    override: n,
    getComputedToken: pc,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: mc,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: gc,
      ignore: n3,
      preserve: o3
    }
  });
  return [i, l, t ? c : "", s, o];
}
const xa = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), a3 = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), i3 = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), s3 = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [o]: i
    })
  };
}, c3 = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, a3()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ea,
  genComponentStyleHook: o7,
  genSubStyleComponent: a7
} = e3({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Pr(Or);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = wa();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = Pr(Or);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = i3(e);
    return [n, {
      "&": n
    }, c3((r = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && r !== void 0 ? r : fc)];
  },
  getCommonStyle: s3,
  getCompUnitless: () => gc
});
function l3(e, t) {
  return Dr.reduce((r, n) => {
    const o = e[`${n}1`], a = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: o,
      lightBorderColor: a,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
var u3 = /* @__PURE__ */ b.createContext({}), f3 = /* @__PURE__ */ function(e) {
  Tt(r, e);
  var t = kt(r);
  function r() {
    return M0(this, r), t.apply(this, arguments);
  }
  return _0(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(b.Component);
function d3(e) {
  var t = b.useReducer(function(s) {
    return s + 1;
  }, 0), r = Y(t, 2), n = r[1], o = b.useRef(e), a = R0(function() {
    return o.current;
  }), i = R0(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, n();
  });
  return [a, i];
}
var Rt = "none", tn = "appear", rn = "enter", nn = "leave", Ti = "none", it = "prepare", Kt = "start", Zt = "active", Pa = "end", yc = "prepared";
function ki(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function v3(e, t) {
  var r = {
    animationend: ki("Animation", "AnimationEnd"),
    transitionend: ki("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var h3 = v3(q0(), typeof window < "u" ? window : {}), bc = {};
if (q0()) {
  var m3 = document.createElement("div");
  bc = m3.style;
}
var on = {};
function Cc(e) {
  if (on[e])
    return on[e];
  var t = h3[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in bc)
        return on[e] = t[a], on[e];
    }
  return "";
}
var Sc = Cc("animationend"), wc = Cc("transitionend"), xc = !!(Sc && wc), Oi = Sc || "animationend", Ai = wc || "transitionend";
function Di(e, t) {
  if (!e)
    return null;
  if (Re(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const g3 = function(e) {
  var t = G();
  function r(o) {
    o && (o.removeEventListener(Ai, e), o.removeEventListener(Oi, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Ai, e), o.addEventListener(Oi, e), t.current = o);
  }
  return b.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Ec = q0() ? m1 : Te;
const p3 = function() {
  var e = b.useRef(null);
  function t() {
    Ct.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Ct(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return b.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var y3 = [it, Kt, Zt, Pa], b3 = [it, yc], Pc = !1, C3 = !0;
function Rc(e) {
  return e === Zt || e === Pa;
}
const S3 = function(e, t, r) {
  var n = Ar(Ti), o = Y(n, 2), a = o[0], i = o[1], s = p3(), c = Y(s, 2), l = c[0], u = c[1];
  function d() {
    i(it, !0);
  }
  var v = t ? b3 : y3;
  return Ec(function() {
    if (a !== Ti && a !== Pa) {
      var h = v.indexOf(a), m = v[h + 1], g = r(a);
      g === Pc ? i(m, !0) : m && l(function(f) {
        function y() {
          f.isCanceled() || i(m, !0);
        }
        g === !0 ? y() : Promise.resolve(g).then(y);
      });
    }
  }, [e, a]), b.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, a];
};
function w3(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, s = i === void 0 ? !0 : i, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, h = n.onEnterPrepare, m = n.onLeavePrepare, g = n.onAppearStart, f = n.onEnterStart, y = n.onLeaveStart, p = n.onAppearActive, C = n.onEnterActive, S = n.onLeaveActive, w = n.onAppearEnd, x = n.onEnterEnd, E = n.onLeaveEnd, _ = n.onVisibleChanged, P = Ar(), R = Y(P, 2), T = R[0], F = R[1], k = d3(Rt), D = Y(k, 2), $ = D[0], L = D[1], I = Ar(null), H = Y(I, 2), B = H[0], q = H[1], U = $(), V = G(!1), Q = G(null);
  function K() {
    return r();
  }
  var X = G(!1);
  function z() {
    L(Rt), q(null, !0);
  }
  var J = R0(function(ee) {
    var fe = $();
    if (fe !== Rt) {
      var pe = K();
      if (!(ee && !ee.deadline && ee.target !== pe)) {
        var re = X.current, Me;
        fe === tn && re ? Me = w == null ? void 0 : w(pe, ee) : fe === rn && re ? Me = x == null ? void 0 : x(pe, ee) : fe === nn && re && (Me = E == null ? void 0 : E(pe, ee)), re && Me !== !1 && z();
      }
    }
  }), ne = g3(J), ce = Y(ne, 1), oe = ce[0], ie = function(fe) {
    switch (fe) {
      case tn:
        return O(O(O({}, it, v), Kt, g), Zt, p);
      case rn:
        return O(O(O({}, it, h), Kt, f), Zt, C);
      case nn:
        return O(O(O({}, it, m), Kt, y), Zt, S);
      default:
        return {};
    }
  }, he = b.useMemo(function() {
    return ie(U);
  }, [U]), we = S3(U, !e, function(ee) {
    if (ee === it) {
      var fe = he[it];
      return fe ? fe(K()) : Pc;
    }
    if (Z in he) {
      var pe;
      q(((pe = he[Z]) === null || pe === void 0 ? void 0 : pe.call(he, K(), null)) || null);
    }
    return Z === Zt && U !== Rt && (oe(K()), u > 0 && (clearTimeout(Q.current), Q.current = setTimeout(function() {
      J({
        deadline: !0
      });
    }, u))), Z === yc && z(), C3;
  }), j = Y(we, 2), le = j[0], Z = j[1], ae = Rc(Z);
  X.current = ae;
  var ge = G(null);
  Ec(function() {
    if (!(V.current && ge.current === t)) {
      F(t);
      var ee = V.current;
      V.current = !0;
      var fe;
      !ee && t && s && (fe = tn), ee && t && a && (fe = rn), (ee && !t && l || !ee && d && !t && l) && (fe = nn);
      var pe = ie(fe);
      fe && (e || pe[it]) ? (L(fe), le()) : L(Rt), ge.current = t;
    }
  }, [t]), Te(function() {
    // Cancel appear
    (U === tn && !s || // Cancel enter
    U === rn && !a || // Cancel leave
    U === nn && !l) && L(Rt);
  }, [s, a, l]), Te(function() {
    return function() {
      V.current = !1, clearTimeout(Q.current);
    };
  }, []);
  var me = b.useRef(!1);
  Te(function() {
    T && (me.current = !0), T !== void 0 && U === Rt && ((me.current || T) && (_ == null || _(T)), me.current = !0);
  }, [T, U]);
  var Ye = B;
  return he[it] && Z === Kt && (Ye = N({
    transition: "none"
  }, Ye)), [U, Z, Ye, T ?? t];
}
function x3(e) {
  var t = e;
  Re(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ b.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, v = o.motionName, h = o.leavedClassName, m = o.eventProps, g = b.useContext(u3), f = g.motion, y = r(o, f), p = G(), C = G();
    function S() {
      try {
        return p.current instanceof HTMLElement ? p.current : ln(C.current);
      } catch {
        return null;
      }
    }
    var w = w3(y, s, S, o), x = Y(w, 4), E = x[0], _ = x[1], P = x[2], R = x[3], T = b.useRef(R);
    R && (T.current = !0);
    var F = b.useCallback(function(H) {
      p.current = H, la(a, H);
    }, [a]), k, D = N(N({}, m), {}, {
      visible: s
    });
    if (!d)
      k = null;
    else if (E === Rt)
      R ? k = d(N({}, D), F) : !l && T.current && h ? k = d(N(N({}, D), {}, {
        className: h
      }), F) : u || !l && !h ? k = d(N(N({}, D), {}, {
        style: {
          display: "none"
        }
      }), F) : k = null;
    else {
      var $;
      _ === it ? $ = "prepare" : Rc(_) ? $ = "active" : _ === Kt && ($ = "start");
      var L = Di(v, "".concat(E, "-").concat($));
      k = d(N(N({}, D), {}, {
        className: Ne(Di(v, E), O(O({}, L, L && $), v, typeof v == "string")),
        style: P
      }), F);
    }
    if (/* @__PURE__ */ b.isValidElement(k) && En(k)) {
      var I = da(k);
      I || (k = /* @__PURE__ */ b.cloneElement(k, {
        ref: F
      }));
    }
    return /* @__PURE__ */ b.createElement(f3, {
      ref: C
    }, k);
  });
  return n.displayName = "CSSMotion", n;
}
const Ra = x3(xc);
var Vo = "add", Bo = "keep", zo = "remove", ao = "removed";
function E3(e) {
  var t;
  return e && Re(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, N(N({}, t), {}, {
    key: String(t.key)
  });
}
function Wo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(E3);
}
function P3() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = Wo(e), i = Wo(t);
  a.forEach(function(l) {
    for (var u = !1, d = n; d < o; d += 1) {
      var v = i[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(h) {
          return N(N({}, h), {}, {
            status: Vo
          });
        })), n = d), r.push(N(N({}, v), {}, {
          status: Bo
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(N(N({}, l), {}, {
      status: zo
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(l) {
    return N(N({}, l), {}, {
      status: Vo
    });
  })));
  var s = {};
  r.forEach(function(l) {
    var u = l.key;
    s[u] = (s[u] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    r = r.filter(function(u) {
      var d = u.key, v = u.status;
      return d !== l || v !== zo;
    }), r.forEach(function(u) {
      u.key === l && (u.status = Bo);
    });
  }), r;
}
var R3 = ["component", "children", "onVisibleChanged", "onAllRemoved"], M3 = ["status"], _3 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function F3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ra, r = /* @__PURE__ */ function(n) {
    Tt(a, n);
    var o = kt(a);
    function a() {
      var i;
      M0(this, a);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), O(Oe(i), "state", {
        keyEntities: []
      }), O(Oe(i), "removeKey", function(u) {
        i.setState(function(d) {
          var v = d.keyEntities.map(function(h) {
            return h.key !== u ? h : N(N({}, h), {}, {
              status: ao
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var d = i.state.keyEntities, v = d.filter(function(h) {
            var m = h.status;
            return m !== ao;
          }).length;
          v === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return _0(a, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, v = l.onVisibleChanged;
        l.onAllRemoved;
        var h = lt(l, R3), m = u || b.Fragment, g = {};
        return _3.forEach(function(f) {
          g[f] = h[f], delete h[f];
        }), delete h.keys, /* @__PURE__ */ b.createElement(m, h, c.map(function(f, y) {
          var p = f.status, C = lt(f, M3), S = p === Vo || p === Bo;
          return /* @__PURE__ */ b.createElement(t, N0({}, g, {
            key: C.key,
            visible: S,
            eventProps: C,
            onVisibleChanged: function(x) {
              v == null || v(x, {
                key: C.key
              }), x || s.removeKey(C.key);
            }
          }), function(w, x) {
            return d(N(N({}, w), {}, {
              index: y
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, d = Wo(l), v = P3(u, d);
        return {
          keyEntities: v.filter(function(h) {
            var m = u.find(function(g) {
              var f = g.key;
              return h.key === f;
            });
            return !(m && m.status === ao && h.status === zo);
          })
        };
      }
    }]), a;
  }(b.Component);
  return O(r, "defaultProps", {
    component: "div"
  }), r;
}
F3(xc);
function Mc(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function T3(e) {
  return Mc(e) instanceof ShadowRoot;
}
function Uo(e) {
  return T3(e) ? Mc(e) : null;
}
function k3(e) {
  return e && /* @__PURE__ */ be.isValidElement(e) && e.type === be.Fragment;
}
const O3 = (e, t, r) => /* @__PURE__ */ be.isValidElement(e) ? /* @__PURE__ */ be.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function _c(e, t) {
  return O3(e, e, t);
}
var se = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= se.F1 && r <= se.F12)
      return !1;
    switch (r) {
      case se.ALT:
      case se.CAPS_LOCK:
      case se.CONTEXT_MENU:
      case se.CTRL:
      case se.DOWN:
      case se.END:
      case se.ESC:
      case se.HOME:
      case se.INSERT:
      case se.LEFT:
      case se.MAC_FF_META:
      case se.META:
      case se.NUMLOCK:
      case se.NUM_CENTER:
      case se.PAGE_DOWN:
      case se.PAGE_UP:
      case se.PAUSE:
      case se.PRINT_SCREEN:
      case se.RIGHT:
      case se.SHIFT:
      case se.UP:
      case se.WIN_KEY:
      case se.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= se.ZERO && t <= se.NINE || t >= se.NUM_ZERO && t <= se.NUM_MULTIPLY || t >= se.A && t <= se.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case se.SPACE:
      case se.QUESTION_MARK:
      case se.NUM_PLUS:
      case se.NUM_MINUS:
      case se.NUM_PERIOD:
      case se.NUM_DIVISION:
      case se.SEMICOLON:
      case se.DASH:
      case se.EQUALS:
      case se.COMMA:
      case se.PERIOD:
      case se.SLASH:
      case se.APOSTROPHE:
      case se.SINGLE_QUOTE:
      case se.OPEN_SQUARE_BRACKET:
      case se.BACKSLASH:
      case se.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
const Fc = /* @__PURE__ */ be.createContext(void 0);
process.env.NODE_ENV !== "production" && (Fc.displayName = "zIndexContext");
const Tc = Fc, yt = 100, A3 = 10, D3 = yt * A3, N3 = D3 + yt, kc = {
  Modal: yt,
  Drawer: yt,
  Popover: yt,
  Popconfirm: yt,
  Tooltip: yt,
  Tour: yt,
  FloatButton: yt
}, L3 = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function $3(e) {
  return e in kc;
}
const I3 = (e, t) => {
  const [, r] = wa(), n = be.useContext(Tc), o = $3(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = n ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : r.zIndexPopupBase) + // Container offset
    kc[e] : i += L3[e], a = [n === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = Ca(e), s = r.zIndexPopupBase + N3, c = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
};
function Oc(e, t) {
  this.v = e, this.k = t;
}
function A0(e, t, r, n) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  A0 = function(i, s, c, l) {
    function u(d, v) {
      A0(i, d, function(h) {
        return this._invoke(d, v, h);
      });
    }
    s ? o ? o(i, s, {
      value: c,
      enumerable: !l,
      configurable: !l,
      writable: !l
    }) : i[s] = c : (u("next", 0), u("throw", 1), u("return", 2));
  }, A0(e, t, r, n);
}
function Ma() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function a(h, m, g, f) {
    var y = m && m.prototype instanceof s ? m : s, p = Object.create(y.prototype);
    return A0(p, "_invoke", function(C, S, w) {
      var x, E, _, P = 0, R = w || [], T = !1, F = {
        p: 0,
        n: 0,
        v: e,
        a: k,
        f: k.bind(e, 4),
        d: function($, L) {
          return x = $, E = 0, _ = e, F.n = L, i;
        }
      };
      function k(D, $) {
        for (E = D, _ = $, t = 0; !T && P && !L && t < R.length; t++) {
          var L, I = R[t], H = F.p, B = I[2];
          D > 3 ? (L = B === $) && (_ = I[(E = I[4]) ? 5 : (E = 3, 3)], I[4] = I[5] = e) : I[0] <= H && ((L = D < 2 && H < I[1]) ? (E = 0, F.v = $, F.n = I[1]) : H < B && (L = D < 3 || I[0] > $ || $ > B) && (I[4] = D, I[5] = $, F.n = B, E = 0));
        }
        if (L || D > 1)
          return i;
        throw T = !0, $;
      }
      return function(D, $, L) {
        if (P > 1)
          throw TypeError("Generator is already running");
        for (T && $ === 1 && k($, L), E = $, _ = L; (t = E < 2 ? e : _) || !T; ) {
          x || (E ? E < 3 ? (E > 1 && (F.n = -1), k(E, _)) : F.n = _ : F.v = _);
          try {
            if (P = 2, x) {
              if (E || (D = "next"), t = x[D]) {
                if (!(t = t.call(x, _)))
                  throw TypeError("iterator result is not an object");
                if (!t.done)
                  return t;
                _ = t.value, E < 2 && (E = 0);
              } else
                E === 1 && (t = x.return) && t.call(x), E < 2 && (_ = TypeError("The iterator does not provide a '" + D + "' method"), E = 1);
              x = e;
            } else if ((t = (T = F.n < 0) ? _ : C.call(S, F)) !== i)
              break;
          } catch (I) {
            x = e, E = 1, _ = I;
          } finally {
            P = 1;
          }
        }
        return {
          value: t,
          done: T
        };
      };
    }(h, g, f), !0), p;
  }
  var i = {};
  function s() {
  }
  function c() {
  }
  function l() {
  }
  t = Object.getPrototypeOf;
  var u = [][n] ? t(t([][n]())) : (A0(t = {}, n, function() {
    return this;
  }), t), d = l.prototype = s.prototype = Object.create(u);
  function v(h) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(h, l) : (h.__proto__ = l, A0(h, o, "GeneratorFunction")), h.prototype = Object.create(d), h;
  }
  return c.prototype = l, A0(d, "constructor", l), A0(l, "constructor", c), c.displayName = "GeneratorFunction", A0(l, o, "GeneratorFunction"), A0(d), A0(d, o, "Generator"), A0(d, n, function() {
    return this;
  }), A0(d, "toString", function() {
    return "[object Generator]";
  }), (Ma = function() {
    return {
      w: a,
      m: v
    };
  })();
}
function Cn(e, t) {
  function r(o, a, i, s) {
    try {
      var c = e[o](a), l = c.value;
      return l instanceof Oc ? t.resolve(l.v).then(function(u) {
        r("next", u, i, s);
      }, function(u) {
        r("throw", u, i, s);
      }) : t.resolve(l).then(function(u) {
        c.value = u, i(c);
      }, function(u) {
        return r("throw", u, i, s);
      });
    } catch (u) {
      s(u);
    }
  }
  var n;
  this.next || (A0(Cn.prototype), A0(Cn.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), A0(this, "_invoke", function(o, a, i) {
    function s() {
      return new t(function(c, l) {
        r(o, i, c, l);
      });
    }
    return n = n ? n.then(s, s) : s();
  }, !0);
}
function Ac(e, t, r, n, o) {
  return new Cn(Ma().w(e, t, r, n), o || Promise);
}
function j3(e, t, r, n, o) {
  var a = Ac(e, t, r, n, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function H3(e) {
  var t = Object(e), r = [];
  for (var n in t)
    r.unshift(n);
  return function o() {
    for (; r.length; )
      if ((n = r.pop()) in t)
        return o.value = n, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Ni(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], r = 0;
    if (t)
      return t.call(e);
    if (typeof e.next == "function")
      return e;
    if (!isNaN(e.length))
      return {
        next: function() {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          };
        }
      };
  }
  throw new TypeError(Re(e) + " is not iterable");
}
function tt() {
  var e = Ma(), t = e.m(tt), r = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function n(i) {
    var s = typeof i == "function" && i.constructor;
    return !!s && (s === r || (s.displayName || s.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(i) {
    var s, c;
    return function(l) {
      s || (s = {
        stop: function() {
          return c(l.a, 2);
        },
        catch: function() {
          return l.v;
        },
        abrupt: function(d, v) {
          return c(l.a, o[d], v);
        },
        delegateYield: function(d, v, h) {
          return s.resultName = v, c(l.d, Ni(d), h);
        },
        finish: function(d) {
          return c(l.f, d);
        }
      }, c = function(d, v, h) {
        l.p = s.prev, l.n = s.next;
        try {
          return d(v, h);
        } finally {
          s.next = l.n;
        }
      }), s.resultName && (s[s.resultName] = l.v, s.resultName = void 0), s.sent = l.v, s.next = l.n;
      try {
        return i.call(this, s);
      } finally {
        l.p = s.prev, l.n = s.next;
      }
    };
  }
  return (tt = function() {
    return {
      wrap: function(c, l, u, d) {
        return e.w(a(c), l, u, d && d.reverse());
      },
      isGeneratorFunction: n,
      mark: e.m,
      awrap: function(c, l) {
        return new Oc(c, l);
      },
      AsyncIterator: Cn,
      async: function(c, l, u, d, v) {
        return (n(l) ? Ac : j3)(a(c), l, u, d, v);
      },
      keys: H3,
      values: Ni
    };
  })();
}
function Li(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i), c = s.value;
  } catch (l) {
    return void r(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, o);
}
function $r(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(c) {
        Li(a, n, o, i, s, "next", c);
      }
      function s(c) {
        Li(a, n, o, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
const Dc = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, V3 = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
};
globalThis && globalThis.__rest;
const B3 = /* @__PURE__ */ b.createContext(null), z3 = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ b.createElement(B3.Provider, {
    value: null
  }, t);
};
var W3 = ["b"], U3 = ["v"], io = function(t) {
  return Math.round(Number(t || 0));
}, G3 = function(t) {
  if (t instanceof p0)
    return t;
  if (t && Re(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, o = lt(r, W3);
    return N(N({}, o), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Ft = /* @__PURE__ */ function(e) {
  Tt(r, e);
  var t = kt(r);
  function r(n) {
    return M0(this, r), t.call(this, G3(n));
  }
  return _0(r, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = io(o.s * 100), i = io(o.b * 100), s = io(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = lt(o, U3);
      return N(N({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), r;
}(p0), q3 = "rc-color-picker", Jt = function(t) {
  return t instanceof Ft ? t : new Ft(t);
}, X3 = Jt("#1677ff"), Nc = function(t) {
  var r = t.offset, n = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = n.current.getBoundingClientRect(), d = u.width, v = u.height, h = d / 2, m = v / 2, g = (r.x + h) / c, f = 1 - (r.y + m) / l, y = a.toHsb(), p = g, C = (r.x + h) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return Jt(N(N({}, y), {}, {
          h: C <= 0 ? 0 : C
        }));
      case "alpha":
        return Jt(N(N({}, y), {}, {
          a: p <= 0 ? 0 : p
        }));
    }
  return Jt({
    h: y.h,
    s: g <= 0 ? 0 : g,
    b: f >= 1 ? 1 : f,
    a: y.a
  });
}, Lc = function(t, r) {
  var n = t.toHsb();
  switch (r) {
    case "hue":
      return {
        x: n.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    default:
      return {
        x: n.s * 100,
        y: (1 - n.b) * 100
      };
  }
}, Y3 = function(t) {
  var r = t.color, n = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(n, "-color-block");
  return /* @__PURE__ */ be.createElement("div", {
    className: Ne(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ be.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: r
    }
  }));
};
function K3(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function $c(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, c = e.disabledDrag, l = xn({
    x: 0,
    y: 0
  }), u = Y(l, 2), d = u[0], v = u[1], h = G(null), m = G(null);
  Te(function() {
    v(i());
  }, [s]), Te(function() {
    return function() {
      document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", m.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", m.current), h.current = null, m.current = null;
    };
  }, []);
  var g = function(S) {
    var w = K3(S), x = w.pageX, E = w.pageY, _ = r.current.getBoundingClientRect(), P = _.x, R = _.y, T = _.width, F = _.height, k = t.current.getBoundingClientRect(), D = k.width, $ = k.height, L = D / 2, I = $ / 2, H = Math.max(0, Math.min(x - P, T)) - L, B = Math.max(0, Math.min(E - R, F)) - I, q = {
      x: H,
      y: n === "x" ? d.y : B
    };
    if (D === 0 && $ === 0 || D !== $)
      return !1;
    o == null || o(q);
  }, f = function(S) {
    S.preventDefault(), g(S);
  }, y = function(S) {
    S.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", m.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", m.current), h.current = null, m.current = null, a == null || a();
  }, p = function(S) {
    document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", m.current), !c && (g(S), document.addEventListener("mousemove", f), document.addEventListener("mouseup", y), document.addEventListener("touchmove", f), document.addEventListener("touchend", y), h.current = f, m.current = y);
  };
  return [d, p];
}
var Ic = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ be.createElement("div", {
    className: Ne("".concat(a, "-handler"), O({}, "".concat(a, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, jc = function(t) {
  var r = t.children, n = t.style, o = t.prefixCls;
  return /* @__PURE__ */ be.createElement("div", {
    className: "".concat(o, "-palette"),
    style: N({
      position: "relative"
    }, n)
  }, r);
}, Hc = /* @__PURE__ */ Lr(function(e, t) {
  var r = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ be.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), Z3 = function(t) {
  var r = t.color, n = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = G(), c = G(), l = G(r), u = R0(function(g) {
    var f = Nc({
      offset: g,
      targetRef: c,
      containerRef: s,
      color: r
    });
    l.current = f, n(f);
  }), d = $c({
    color: r,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return Lc(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a == null ? void 0 : a(l.current);
    },
    disabledDrag: i
  }), v = Y(d, 2), h = v[0], m = v[1];
  return /* @__PURE__ */ be.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: m,
    onTouchStart: m
  }, /* @__PURE__ */ be.createElement(jc, {
    prefixCls: o
  }, /* @__PURE__ */ be.createElement(Hc, {
    x: h.x,
    y: h.y,
    ref: c
  }, /* @__PURE__ */ be.createElement(Ic, {
    color: r.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ be.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Q3 = function(t, r) {
  var n = On(t, {
    value: r
  }), o = Y(n, 2), a = o[0], i = o[1], s = J0(function() {
    return Jt(a);
  }, [a]);
  return [s, i];
}, J3 = function(t) {
  var r = t.colors, n = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, c = J0(function() {
    return r.map(function(l, u) {
      var d = Jt(l);
      return i === "alpha" && u === r.length - 1 && (d = new Ft(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [r, i]);
  return /* @__PURE__ */ be.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(c, ")")
    }
  }, n);
}, e5 = function(t) {
  var r = t.prefixCls, n = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, c = t.type, l = G(), u = G(), d = G(s), v = function(w) {
    return c === "hue" ? w.getHue() : w.a * 100;
  }, h = R0(function(S) {
    var w = Nc({
      offset: S,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    d.current = w, a(v(w));
  }), m = $c({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return Lc(s, c);
    },
    onDragChange: h,
    onDragChangeComplete: function() {
      i(v(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), g = Y(m, 2), f = g[0], y = g[1], p = be.useMemo(function() {
    if (c === "hue") {
      var S = s.toHsb();
      S.s = 1, S.b = 1, S.a = 1;
      var w = new Ft(S);
      return w;
    }
    return s;
  }, [s, c]), C = be.useMemo(function() {
    return n.map(function(S) {
      return "".concat(S.color, " ").concat(S.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ be.createElement("div", {
    ref: l,
    className: Ne("".concat(r, "-slider"), "".concat(r, "-slider-").concat(c)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ be.createElement(jc, {
    prefixCls: r
  }, /* @__PURE__ */ be.createElement(Hc, {
    x: f.x,
    y: f.y,
    ref: u
  }, /* @__PURE__ */ be.createElement(Ic, {
    size: "small",
    color: p.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ be.createElement(J3, {
    colors: C,
    type: c,
    prefixCls: r
  })));
};
function t5(e) {
  return b.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || e5];
  }, [e]);
}
var r5 = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], n5 = /* @__PURE__ */ Lr(function(e, t) {
  var r = e.value, n = e.defaultValue, o = e.prefixCls, a = o === void 0 ? q3 : o, i = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, v = d === void 0 ? !1 : d, h = e.disabled, m = h === void 0 ? !1 : h, g = e.components, f = t5(g), y = Y(f, 1), p = y[0], C = Q3(n || X3, r), S = Y(C, 2), w = S[0], x = S[1], E = J0(function() {
    return w.setA(1).toRgbString();
  }, [w]), _ = function(B, q) {
    r || x(B), i == null || i(B, q);
  }, P = function(B) {
    return new Ft(w.setHue(B));
  }, R = function(B) {
    return new Ft(w.setA(B / 100));
  }, T = function(B) {
    _(P(B), {
      type: "hue",
      value: B
    });
  }, F = function(B) {
    _(R(B), {
      type: "alpha",
      value: B
    });
  }, k = function(B) {
    s && s(P(B));
  }, D = function(B) {
    s && s(R(B));
  }, $ = Ne("".concat(a, "-panel"), c, O({}, "".concat(a, "-panel-disabled"), m)), L = {
    prefixCls: a,
    disabled: m,
    color: w
  }, I = /* @__PURE__ */ be.createElement(be.Fragment, null, /* @__PURE__ */ be.createElement(Z3, N0({
    onChange: _
  }, L, {
    onChangeComplete: s
  })), /* @__PURE__ */ be.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ be.createElement("div", {
    className: Ne("".concat(a, "-slider-group"), O({}, "".concat(a, "-slider-group-disabled-alpha"), v))
  }, /* @__PURE__ */ be.createElement(p, N0({}, L, {
    type: "hue",
    colors: r5,
    min: 0,
    max: 359,
    value: w.getHue(),
    onChange: T,
    onChangeComplete: k
  })), !v && /* @__PURE__ */ be.createElement(p, N0({}, L, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: E
    }],
    min: 0,
    max: 100,
    value: w.a * 100,
    onChange: F,
    onChangeComplete: D
  }))), /* @__PURE__ */ be.createElement(Y3, {
    color: w.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ be.createElement("div", {
    className: $,
    style: l,
    ref: t
  }, typeof u == "function" ? u(I) : I);
});
process.env.NODE_ENV !== "production" && (n5.displayName = "ColorPicker");
const o5 = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", a5 = (e, t) => e ? o5(e, t) : "";
let $i = /* @__PURE__ */ function() {
  function e(t) {
    M0(this, e);
    var r;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (r = t.colors) === null || r === void 0 ? void 0 : r.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const n = Array.isArray(t);
    n && t.length ? (this.colors = t.map(({
      color: o,
      percent: a
    }) => ({
      color: new e(o),
      percent: a
    })), this.metaColor = new Ft(this.colors[0].color.metaColor)) : this.metaColor = new Ft(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return _0(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return a5(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: r
      } = this;
      return r ? `linear-gradient(90deg, ${r.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(r) {
      return !r || this.isGradient() !== r.isGradient() ? !1 : this.isGradient() ? this.colors.length === r.colors.length && this.colors.every((n, o) => {
        const a = r.colors[o];
        return n.percent === a.percent && n.color.equals(a.color);
      }) : this.toHexString() === r.toHexString();
    }
  }]);
}();
const i5 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), s5 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), c5 = (e, t, r, n, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, i5(n)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, s5(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${a}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, l5 = new rt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), u5 = new rt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Ii = new rt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ji = new rt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), f5 = new rt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), d5 = new rt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), v5 = new rt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), h5 = new rt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), m5 = new rt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), g5 = new rt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), p5 = new rt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), y5 = new rt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), b5 = {
  zoom: {
    inKeyframes: l5,
    outKeyframes: u5
  },
  "zoom-big": {
    inKeyframes: Ii,
    outKeyframes: ji
  },
  "zoom-big-fast": {
    inKeyframes: Ii,
    outKeyframes: ji
  },
  "zoom-left": {
    inKeyframes: v5,
    outKeyframes: h5
  },
  "zoom-right": {
    inKeyframes: m5,
    outKeyframes: g5
  },
  "zoom-up": {
    inKeyframes: f5,
    outKeyframes: d5
  },
  "zoom-down": {
    inKeyframes: p5,
    outKeyframes: y5
  }
}, Vc = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = b5[t];
  return [c5(n, o, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, C5 = (e) => e instanceof $i ? e : new $i(e);
var Bc = /* @__PURE__ */ b.createContext(null), Hi = [];
function S5(e, t) {
  var r = b.useState(function() {
    if (!q0())
      return null;
    var m = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && m.setAttribute("data-debug", t), m;
  }), n = Y(r, 1), o = n[0], a = b.useRef(!1), i = b.useContext(Bc), s = b.useState(Hi), c = Y(s, 2), l = c[0], u = c[1], d = i || (a.current ? void 0 : function(m) {
    u(function(g) {
      var f = [m].concat(ve(g));
      return f;
    });
  });
  function v() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function h() {
    var m;
    (m = o.parentElement) === null || m === void 0 || m.removeChild(o), a.current = !1;
  }
  return D0(function() {
    return e ? i ? i(v) : v() : h(), h;
  }, [e]), D0(function() {
    l.length && (l.forEach(function(m) {
      return m();
    }), u(Hi));
  }, [l]), [o, d];
}
function w5(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var o, a;
  if (e) {
    var i = getComputedStyle(e);
    n.scrollbarColor = i.scrollbarColor, n.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), c = parseInt(s.width, 10), l = parseInt(s.height, 10);
    try {
      var u = c ? "width: ".concat(s.width, ";") : "", d = l ? "height: ".concat(s.height, ";") : "";
      Nt(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(d, `
}`), t);
    } catch (m) {
      console.error(m), o = c, a = l;
    }
  }
  document.body.appendChild(r);
  var v = e && o && !isNaN(o) ? o : r.offsetWidth - r.clientWidth, h = e && a && !isNaN(a) ? a : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Tr(t), {
    width: v,
    height: h
  };
}
function x5(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : w5(e);
}
function E5() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var P5 = "rc-util-locker-".concat(Date.now()), Vi = 0;
function R5(e) {
  var t = !!e, r = b.useState(function() {
    return Vi += 1, "".concat(P5, "_").concat(Vi);
  }), n = Y(r, 1), o = n[0];
  D0(function() {
    if (t) {
      var a = x5(document.body).width, i = E5();
      Nt(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      Tr(o);
    return function() {
      Tr(o);
    };
  }, [t, o]);
}
var Bi = !1;
function M5(e) {
  return typeof e == "boolean" && (Bi = e), Bi;
}
var zi = function(t) {
  return t === !1 ? !1 : !q0() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, _a = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, c = e.children, l = b.useState(r), u = Y(l, 2), d = u[0], v = u[1], h = d || r;
  process.env.NODE_ENV !== "production" && a0(q0() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), b.useEffect(function() {
    (s || r) && v(r);
  }, [r, s]);
  var m = b.useState(function() {
    return zi(o);
  }), g = Y(m, 2), f = g[0], y = g[1];
  b.useEffect(function() {
    var F = zi(o);
    y(F ?? null);
  });
  var p = S5(h && !f, a), C = Y(p, 2), S = C[0], w = C[1], x = f ?? S;
  R5(n && r && q0() && (x === S || x === document.body));
  var E = null;
  if (c && En(c) && t) {
    var _ = c;
    E = _.ref;
  }
  var P = fa(E, t);
  if (!h || !q0() || f === void 0)
    return null;
  var R = x === !1 || M5(), T = c;
  return t && (T = /* @__PURE__ */ b.cloneElement(c, {
    ref: P
  })), /* @__PURE__ */ b.createElement(Bc.Provider, {
    value: w
  }, R ? T : /* @__PURE__ */ y1(T, x));
});
process.env.NODE_ENV !== "production" && (_a.displayName = "Portal");
function _5() {
  var e = N({}, b);
  return e.useId;
}
var Wi = 0, Ui = _5();
const zc = Ui ? (
  // Use React `useId`
  function(t) {
    var r = Ui();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = b.useState("ssr-id"), n = Y(r, 2), o = n[0], a = n[1];
    return b.useEffect(function() {
      var i = Wi;
      Wi += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var Dt = "RC_FORM_INTERNAL_HOOKS", t0 = function() {
  a0(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, ar = /* @__PURE__ */ b.createContext({
  getFieldValue: t0,
  getFieldsValue: t0,
  getFieldError: t0,
  getFieldWarning: t0,
  getFieldsError: t0,
  isFieldsTouched: t0,
  isFieldTouched: t0,
  isFieldValidating: t0,
  isFieldsValidating: t0,
  resetFields: t0,
  setFields: t0,
  setFieldValue: t0,
  setFieldsValue: t0,
  validateFields: t0,
  submit: t0,
  getInternalHooks: function() {
    return t0(), {
      dispatch: t0,
      initEntityValue: t0,
      registerField: t0,
      useSubscribe: t0,
      setInitialValues: t0,
      destroyForm: t0,
      setCallbacks: t0,
      registerWatch: t0,
      getFields: t0,
      setValidateMessages: t0,
      setPreserve: t0,
      getInitialValue: t0
    };
  }
}), Sn = /* @__PURE__ */ b.createContext(null);
function Go(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function F5(e) {
  return e && !!e._init;
}
function qo() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      tel: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Xo = qo();
function T5(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function k5(e, t, r) {
  if (va())
    return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Mr(o, r.prototype), o;
}
function Yo(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Yo = function(n) {
    if (n === null || !T5(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return k5(n, arguments, _r(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Mr(o, n);
  }, Yo(e);
}
var O5 = /%[sdj%]/g, Wc = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Wc = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function Ko(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function G0(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(O5, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(r[o++]);
        case "%d":
          return Number(r[o++]);
        case "%j":
          try {
            return JSON.stringify(r[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function A5(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern" || e === "tel";
}
function E0(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || A5(t) && typeof e == "string" && !e);
}
function D5(e, t, r) {
  var n = [], o = 0, a = e.length;
  function i(s) {
    n.push.apply(n, ve(s || [])), o++, o === a && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Gi(e, t, r) {
  var n = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      r(i);
      return;
    }
    var s = n;
    n = n + 1, s < o ? t(e[s], a) : r([]);
  }
  a([]);
}
function N5(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, ve(e[r] || []));
  }), t;
}
var qi = /* @__PURE__ */ function(e) {
  Tt(r, e);
  var t = kt(r);
  function r(n, o) {
    var a;
    return M0(this, r), a = t.call(this, "Async Validation Error"), O(Oe(a), "errors", void 0), O(Oe(a), "fields", void 0), a.errors = n, a.fields = o, a;
  }
  return _0(r);
}(/* @__PURE__ */ Yo(Error));
function L5(e, t, r, n, o) {
  if (t.first) {
    var a = new Promise(function(v, h) {
      var m = function(y) {
        return n(y), y.length ? h(new qi(y, Ko(y))) : v(o);
      }, g = N5(e);
      Gi(g, r, m);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], d = new Promise(function(v, h) {
    var m = function(f) {
      if (u.push.apply(u, f), l++, l === c)
        return n(u), u.length ? h(new qi(u, Ko(u))) : v(o);
    };
    s.length || (n(u), v(o)), s.forEach(function(g) {
      var f = e[g];
      i.indexOf(g) !== -1 ? Gi(f, r, m) : D5(f, r, m);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function $5(e) {
  return !!(e && e.message !== void 0);
}
function I5(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Xi(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = I5(t, e.fullFields) : n = t[r.field || e.fullField], $5(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Yi(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        Re(n) === "object" && Re(e[r]) === "object" ? e[r] = N(N({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var zt = "enum", j5 = function(t, r, n, o, a) {
  t[zt] = Array.isArray(t[zt]) ? t[zt] : [], t[zt].indexOf(r) === -1 && o.push(G0(a.messages[zt], t.fullField, t[zt].join(", ")));
}, H5 = function(t, r, n, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(G0(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || o.push(G0(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, V5 = function(t, r, n, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = r, d = null, v = typeof r == "number", h = typeof r == "string", m = Array.isArray(r);
  if (v ? d = "number" : h ? d = "string" : m && (d = "array"), !d)
    return !1;
  m && (u = r.length), h && (u = r.replace(l, "_").length), i ? u !== t.len && o.push(G0(a.messages[d].len, t.fullField, t.len)) : s && !c && u < t.min ? o.push(G0(a.messages[d].min, t.fullField, t.min)) : c && !s && u > t.max ? o.push(G0(a.messages[d].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && o.push(G0(a.messages[d].range, t.fullField, t.min, t.max));
}, Uc = function(t, r, n, o, a, i) {
  t.required && (!n.hasOwnProperty(t.field) || E0(r, i || t.type)) && o.push(G0(a.messages.required, t.fullField));
}, an;
const B5 = function() {
  if (an)
    return an;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(r, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(r, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(r, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(r, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(r, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(r, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(r, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), s = new RegExp("(?:^".concat(r, "$)|(?:^").concat(i, "$)")), c = new RegExp("^".concat(r, "$")), l = new RegExp("^".concat(i, "$")), u = function(x) {
    return x && x.exact ? s : new RegExp("(?:".concat(t(x)).concat(r).concat(t(x), ")|(?:").concat(t(x)).concat(i).concat(t(x), ")"), "g");
  };
  u.v4 = function(w) {
    return w && w.exact ? c : new RegExp("".concat(t(w)).concat(r).concat(t(w)), "g");
  }, u.v6 = function(w) {
    return w && w.exact ? l : new RegExp("".concat(t(w)).concat(i).concat(t(w)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", h = u.v4().source, m = u.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", f = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", C = '(?:[/?#][^\\s"]*)?', S = "(?:".concat(d, "|www\\.)").concat(v, "(?:localhost|").concat(h, "|").concat(m, "|").concat(g).concat(f).concat(y, ")").concat(p).concat(C);
  return an = new RegExp("(?:^".concat(S, "$)"), "i"), an;
};
var so = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, wr = {
  integer: function(t) {
    return wr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return wr.number(t) && !wr.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return Re(t) === "object" && !wr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(so.email);
  },
  tel: function(t) {
    return typeof t == "string" && t.length <= 32 && !!t.match(so.tel);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(B5());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(so.hex);
  }
}, z5 = function(t, r, n, o, a) {
  if (t.required && r === void 0) {
    Uc(t, r, n, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? wr[s](r) || o.push(G0(a.messages.types[s], t.fullField, t.type)) : s && Re(r) !== t.type && o.push(G0(a.messages.types[s], t.fullField, t.type));
}, W5 = function(t, r, n, o, a) {
  (/^\s+$/.test(r) || r === "") && o.push(G0(a.messages.whitespace, t.fullField));
};
const Le = {
  required: Uc,
  whitespace: W5,
  type: z5,
  range: V5,
  enum: j5,
  pattern: H5
};
var U5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a);
  }
  n(i);
}, G5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Le.required(t, r, o, i, a, "array"), r != null && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, q5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le.type(t, r, o, i, a);
  }
  n(i);
}, X5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r, "date") && !t.required)
      return n();
    if (Le.required(t, r, o, i, a), !E0(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), Le.type(t, c, o, i, a), c && Le.range(t, c.getTime(), o, i, a);
    }
  }
  n(i);
}, Y5 = "enum", K5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le[Y5](t, r, o, i, a);
  }
  n(i);
}, Z5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, Q5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, J5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le.type(t, r, o, i, a);
  }
  n(i);
}, e6 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, t6 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le.type(t, r, o, i, a);
  }
  n(i);
}, r6 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r, "string") && !t.required)
      return n();
    Le.required(t, r, o, i, a), E0(r, "string") || Le.pattern(t, r, o, i, a);
  }
  n(i);
}, n6 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), E0(r) || Le.type(t, r, o, i, a);
  }
  n(i);
}, o6 = function(t, r, n, o, a) {
  var i = [], s = Array.isArray(r) ? "array" : Re(r);
  Le.required(t, r, o, i, a, s), n(i);
}, a6 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (E0(r, "string") && !t.required)
      return n();
    Le.required(t, r, o, i, a, "string"), E0(r, "string") || (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a), Le.pattern(t, r, o, i, a), t.whitespace === !0 && Le.whitespace(t, r, o, i, a));
  }
  n(i);
}, sn = function(t, r, n, o, a) {
  var i = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (E0(r, i) && !t.required)
      return n();
    Le.required(t, r, o, s, a, i), E0(r, i) || Le.type(t, r, o, s, a);
  }
  n(s);
};
const Er = {
  string: a6,
  method: J5,
  number: e6,
  boolean: q5,
  regexp: n6,
  integer: Q5,
  float: Z5,
  array: G5,
  object: t6,
  enum: K5,
  pattern: r6,
  date: X5,
  url: sn,
  hex: sn,
  email: sn,
  tel: sn,
  required: o6,
  any: U5
};
var Ir = /* @__PURE__ */ function() {
  function e(t) {
    M0(this, e), O(this, "rules", null), O(this, "_messages", Xo), this.define(t);
  }
  return _0(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (Re(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(o) {
        var a = r[o];
        n.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = Yi(qo(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = r, s = o, c = a;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function l(m) {
        var g = [], f = {};
        function y(C) {
          if (Array.isArray(C)) {
            var S;
            g = (S = g).concat.apply(S, ve(C));
          } else
            g.push(C);
        }
        for (var p = 0; p < m.length; p++)
          y(m[p]);
        g.length ? (f = Ko(g), c(g, f)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === Xo && (u = qo()), Yi(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(m) {
        var g = n.rules[m], f = i[m];
        g.forEach(function(y) {
          var p = y;
          typeof p.transform == "function" && (i === r && (i = N({}, i)), f = i[m] = p.transform(f), f != null && (p.type = p.type || (Array.isArray(f) ? "array" : Re(f)))), typeof p == "function" ? p = {
            validator: p
          } : p = N({}, p), p.validator = n.getValidationMethod(p), p.validator && (p.field = m, p.fullField = p.fullField || m, p.type = n.getType(p), d[m] = d[m] || [], d[m].push({
            rule: p,
            value: f,
            source: i,
            field: m
          }));
        });
      });
      var h = {};
      return L5(d, s, function(m, g) {
        var f = m.rule, y = (f.type === "object" || f.type === "array") && (Re(f.fields) === "object" || Re(f.defaultField) === "object");
        y = y && (f.required || !f.required && m.value), f.field = m.field;
        function p(E, _) {
          return N(N({}, _), {}, {
            fullField: "".concat(f.fullField, ".").concat(E),
            fullFields: f.fullFields ? [].concat(ve(f.fullFields), [E]) : [E]
          });
        }
        function C() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], _ = Array.isArray(E) ? E : [E];
          !s.suppressWarning && _.length && e.warning("async-validator:", _), _.length && f.message !== void 0 && f.message !== null && (_ = [].concat(f.message));
          var P = _.map(Xi(f, i));
          if (s.first && P.length)
            return h[f.field] = 1, g(P);
          if (!y)
            g(P);
          else {
            if (f.required && !m.value)
              return f.message !== void 0 ? P = [].concat(f.message).map(Xi(f, i)) : s.error && (P = [s.error(f, G0(s.messages.required, f.field))]), g(P);
            var R = {};
            f.defaultField && Object.keys(m.value).map(function(k) {
              R[k] = f.defaultField;
            }), R = N(N({}, R), m.rule.fields);
            var T = {};
            Object.keys(R).forEach(function(k) {
              var D = R[k], $ = Array.isArray(D) ? D : [D];
              T[k] = $.map(p.bind(null, k));
            });
            var F = new e(T);
            F.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m.rule.options.error = s.error), F.validate(m.value, m.rule.options || s, function(k) {
              var D = [];
              P && P.length && D.push.apply(D, ve(P)), k && k.length && D.push.apply(D, ve(k)), g(D.length ? D : null);
            });
          }
        }
        var S;
        if (f.asyncValidator)
          S = f.asyncValidator(f, m.value, C, m.source, s);
        else if (f.validator) {
          try {
            S = f.validator(f, m.value, C, m.source, s);
          } catch (E) {
            var w, x;
            (w = (x = console).error) === null || w === void 0 || w.call(x, E), s.suppressValidatorError || setTimeout(function() {
              throw E;
            }, 0), C(E.message);
          }
          S === !0 ? C() : S === !1 ? C(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || "".concat(f.fullField || f.field, " fails")) : S instanceof Array ? C(S) : S instanceof Error && C(S.message);
        }
        S && S.then && S.then(function() {
          return C();
        }, function(E) {
          return C(E);
        });
      }, function(m) {
        l(m);
      }, i);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Er.hasOwnProperty(r.type))
        throw new Error(G0("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), o = n.indexOf("message");
      return o !== -1 && n.splice(o, 1), n.length === 1 && n[0] === "required" ? Er.required : Er[this.getType(r)] || void 0;
    }
  }]), e;
}();
O(Ir, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Er[t] = r;
});
O(Ir, "warning", Wc);
O(Ir, "messages", Xo);
O(Ir, "validators", Er);
var W0 = "'${name}' is not a valid ${type}", Gc = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: W0,
    method: W0,
    array: W0,
    object: W0,
    number: W0,
    date: W0,
    boolean: W0,
    integer: W0,
    float: W0,
    regexp: W0,
    email: W0,
    url: W0,
    hex: W0
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Ki = Ir;
function i6(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(r) {
    if (r.startsWith("\\"))
      return r.slice(1);
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Zi = "CODE_LOGIC_ERROR";
function Zo(e, t, r, n, o) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = $r(/* @__PURE__ */ tt().mark(function e(t, r, n, o, a) {
    var i, s, c, l, u, d, v, h, m;
    return tt().wrap(function(f) {
      for (; ; )
        switch (f.prev = f.next) {
          case 0:
            return i = N({}, n), delete i.ruleIndex, Ki.warning = function() {
            }, i.validator && (s = i.validator, i.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (y) {
                return console.error(y), Promise.reject(Zi);
              }
            }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new Ki(O({}, t, [i])), u = Sr(Gc, o.validateMessages), l.messages(u), d = [], f.prev = 10, f.next = 13, Promise.resolve(l.validate(O({}, t, r), N({}, o)));
          case 13:
            f.next = 18;
            break;
          case 15:
            f.prev = 15, f.t0 = f.catch(10), f.t0.errors && (d = f.t0.errors.map(function(y, p) {
              var C = y.message, S = C === Zi ? u.default : C;
              return /* @__PURE__ */ b.isValidElement(S) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ b.cloneElement(S, {
                  key: "error_".concat(p)
                })
              ) : S;
            }));
          case 18:
            if (!(!d.length && c && Array.isArray(r) && r.length > 0)) {
              f.next = 23;
              break;
            }
            return f.next = 21, Promise.all(r.map(function(y, p) {
              return Zo("".concat(t, ".").concat(p), y, c, o, a);
            }));
          case 21:
            return v = f.sent, f.abrupt("return", v.reduce(function(y, p) {
              return [].concat(ve(y), ve(p));
            }, []));
          case 23:
            return h = N(N({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, a), m = d.map(function(y) {
              return typeof y == "string" ? i6(y, h) : y;
            }), f.abrupt("return", m);
          case 26:
          case "end":
            return f.stop();
        }
    }, e, null, [[10, 15]]);
  })), Qo.apply(this, arguments);
}
function s6(e, t, r, n, o, a) {
  var i = e.join("."), s = r.map(function(u, d) {
    var v = u.validator, h = N(N({}, u), {}, {
      ruleIndex: d
    });
    return v && (h.validator = function(m, g, f) {
      var y = !1, p = function() {
        for (var w = arguments.length, x = new Array(w), E = 0; E < w; E++)
          x[E] = arguments[E];
        Promise.resolve().then(function() {
          a0(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || f.apply(void 0, x);
        });
      }, C = v(m, g, p);
      y = C && typeof C.then == "function" && typeof C.catch == "function", a0(y, "`callback` is deprecated. Please return a promise instead."), y && C.then(function() {
        f();
      }).catch(function(S) {
        f(S || " ");
      });
    }), h;
  }).sort(function(u, d) {
    var v = u.warningOnly, h = u.ruleIndex, m = d.warningOnly, g = d.ruleIndex;
    return !!v == !!m ? h - g : v ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var u = $r(/* @__PURE__ */ tt().mark(function d(v, h) {
        var m, g, f;
        return tt().wrap(function(p) {
          for (; ; )
            switch (p.prev = p.next) {
              case 0:
                m = 0;
              case 1:
                if (!(m < s.length)) {
                  p.next = 12;
                  break;
                }
                return g = s[m], p.next = 5, Zo(i, t, g, n, a);
              case 5:
                if (f = p.sent, !f.length) {
                  p.next = 9;
                  break;
                }
                return h([{
                  errors: f,
                  rule: g
                }]), p.abrupt("return");
              case 9:
                m += 1, p.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return p.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(u) {
      return Zo(i, t, u, n, a).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    c = (o ? l6(l) : c6(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function c6(e) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = $r(/* @__PURE__ */ tt().mark(function e(t) {
    return tt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(o) {
              var a, i = (a = []).concat.apply(a, ve(o));
              return i;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Jo.apply(this, arguments);
}
function l6(e) {
  return ea.apply(this, arguments);
}
function ea() {
  return ea = $r(/* @__PURE__ */ tt().mark(function e(t) {
    var r;
    return tt().wrap(function(o) {
      for (; ; )
        switch (o.prev = o.next) {
          case 0:
            return r = 0, o.abrupt("return", new Promise(function(a) {
              t.forEach(function(i) {
                i.then(function(s) {
                  s.errors.length && a([s]), r += 1, r === t.length && a([]);
                });
              });
            }));
          case 2:
          case "end":
            return o.stop();
        }
    }, e);
  })), ea.apply(this, arguments);
}
function y0(e) {
  return Go(e);
}
function Qi(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = dt(e, n);
    r = at(r, n, o);
  }), r;
}
function er(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return qc(t, n, r);
  });
}
function qc(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, o) {
    return e[o] === n;
  });
}
function u6(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Re(e) !== "object" || Re(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return ve(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function f6(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Re(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Ji(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], a = t - r;
  return a > 0 ? [].concat(ve(e.slice(0, r)), [o], ve(e.slice(r, t)), ve(e.slice(t + 1, n))) : a < 0 ? [].concat(ve(e.slice(0, t)), ve(e.slice(t + 1, r + 1)), [o], ve(e.slice(r + 1, n))) : e;
}
var d6 = ["name"], Z0 = [];
function co(e, t, r, n, o, a) {
  return typeof e == "function" ? e(t, r, "source" in a ? {
    source: a.source
  } : {}) : n !== o;
}
var Fa = /* @__PURE__ */ function(e) {
  Tt(r, e);
  var t = kt(r);
  function r(n) {
    var o;
    if (M0(this, r), o = t.call(this, n), O(Oe(o), "state", {
      resetCount: 0
    }), O(Oe(o), "cancelRegisterFunc", null), O(Oe(o), "mounted", !1), O(Oe(o), "touched", !1), O(Oe(o), "dirty", !1), O(Oe(o), "validatePromise", void 0), O(Oe(o), "prevValidating", void 0), O(Oe(o), "errors", Z0), O(Oe(o), "warnings", Z0), O(Oe(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, d = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, y0(d)), o.cancelRegisterFunc = null;
    }), O(Oe(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, d = u.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(ve(v), ve(l)) : [];
    }), O(Oe(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, d = c.fieldContext;
      return u.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), O(Oe(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), O(Oe(o), "metaCache", null), O(Oe(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = N(N({}, o.getMeta()), {}, {
          destroy: c
        });
        So(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), O(Oe(o), "onStoreChange", function(c, l, u) {
      var d = o.props, v = d.shouldUpdate, h = d.dependencies, m = h === void 0 ? [] : h, g = d.onReset, f = u.store, y = o.getNamePath(), p = o.getValue(c), C = o.getValue(f), S = l && er(l, y);
      switch (u.type === "valueUpdate" && u.source === "external" && !So(p, C) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = Z0, o.warnings = Z0, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || S) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = Z0, o.warnings = Z0, o.triggerMetaEvent(), g == null || g(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (v && co(v, c, f, p, C, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var w = u.data;
          if (S) {
            "touched" in w && (o.touched = w.touched), "validating" in w && !("originRCField" in w) && (o.validatePromise = w.validating ? Promise.resolve([]) : null), "errors" in w && (o.errors = w.errors || Z0), "warnings" in w && (o.warnings = w.warnings || Z0), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in w && er(l, y, !0)) {
            o.reRender();
            return;
          }
          if (v && !y.length && co(v, c, f, p, C, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var x = m.map(y0);
          if (x.some(function(E) {
            return er(u.relatedFields, E);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (S || (!m.length || y.length || v) && co(v, c, f, p, C, u)) {
            o.reRender();
            return;
          }
          break;
      }
      v === !0 && o.reRender();
    }), O(Oe(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), d = c || {}, v = d.triggerName, h = d.validateOnly, m = h === void 0 ? !1 : h, g = Promise.resolve().then(/* @__PURE__ */ $r(/* @__PURE__ */ tt().mark(function f() {
        var y, p, C, S, w, x, E;
        return tt().wrap(function(P) {
          for (; ; )
            switch (P.prev = P.next) {
              case 0:
                if (o.mounted) {
                  P.next = 2;
                  break;
                }
                return P.abrupt("return", []);
              case 2:
                if (y = o.props, p = y.validateFirst, C = p === void 0 ? !1 : p, S = y.messageVariables, w = y.validateDebounce, x = o.getRules(), v && (x = x.filter(function(R) {
                  return R;
                }).filter(function(R) {
                  var T = R.validateTrigger;
                  if (!T)
                    return !0;
                  var F = Go(T);
                  return F.includes(v);
                })), !(w && v)) {
                  P.next = 10;
                  break;
                }
                return P.next = 8, new Promise(function(R) {
                  setTimeout(R, w);
                });
              case 8:
                if (o.validatePromise === g) {
                  P.next = 10;
                  break;
                }
                return P.abrupt("return", []);
              case 10:
                return E = s6(l, u, x, c, C, S), E.catch(function(R) {
                  return R;
                }).then(function() {
                  var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Z0;
                  if (o.validatePromise === g) {
                    var T;
                    o.validatePromise = null;
                    var F = [], k = [];
                    (T = R.forEach) === null || T === void 0 || T.call(R, function(D) {
                      var $ = D.rule.warningOnly, L = D.errors, I = L === void 0 ? Z0 : L;
                      $ ? k.push.apply(k, ve(I)) : F.push.apply(F, ve(I));
                    }), o.errors = F, o.warnings = k, o.triggerMetaEvent(), o.reRender();
                  }
                }), P.abrupt("return", E);
              case 13:
              case "end":
                return P.stop();
            }
        }, f);
      })));
      return m || (o.validatePromise = g, o.dirty = !0, o.errors = Z0, o.warnings = Z0, o.triggerMetaEvent(), o.reRender()), g;
    }), O(Oe(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), O(Oe(o), "isFieldTouched", function() {
      return o.touched;
    }), O(Oe(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Dt), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), O(Oe(o), "getErrors", function() {
      return o.errors;
    }), O(Oe(o), "getWarnings", function() {
      return o.warnings;
    }), O(Oe(o), "isListField", function() {
      return o.props.isListField;
    }), O(Oe(o), "isList", function() {
      return o.props.isList;
    }), O(Oe(o), "isPreserve", function() {
      return o.props.preserve;
    }), O(Oe(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var c = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return c;
    }), O(Oe(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return N(N({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = mn(c);
      return u.length !== 1 || !/* @__PURE__ */ b.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), O(Oe(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return dt(c || l(!0), u);
    }), O(Oe(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, d = l.trigger, v = l.validateTrigger, h = l.getValueFromEvent, m = l.normalize, g = l.valuePropName, f = l.getValueProps, y = l.fieldContext, p = v !== void 0 ? v : y.validateTrigger, C = o.getNamePath(), S = y.getInternalHooks, w = y.getFieldsValue, x = S(Dt), E = x.dispatch, _ = o.getValue(), P = f || function(D) {
        return O({}, g, D);
      }, R = c[d], T = u !== void 0 ? P(_) : {};
      process.env.NODE_ENV !== "production" && T && Object.keys(T).forEach(function(D) {
        a0(typeof T[D] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(D, ")"));
      });
      var F = N(N({}, c), T);
      F[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var D, $ = arguments.length, L = new Array($), I = 0; I < $; I++)
          L[I] = arguments[I];
        h ? D = h.apply(void 0, L) : D = f6.apply(void 0, [g].concat(L)), m && (D = m(D, _, w(!0))), D !== _ && E({
          type: "updateValue",
          namePath: C,
          value: D
        }), R && R.apply(void 0, L);
      };
      var k = Go(p || []);
      return k.forEach(function(D) {
        var $ = F[D];
        F[D] = function() {
          $ && $.apply(void 0, arguments);
          var L = o.props.rules;
          L && L.length && E({
            type: "validateField",
            namePath: C,
            triggerName: D
          });
        };
      }), F;
    }), n.fieldContext) {
      var a = n.fieldContext.getInternalHooks, i = a(Dt), s = i.initEntityValue;
      s(Oe(o));
    }
    return o;
  }
  return _0(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, c = s(Dt), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      a === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), s = i.child, c = i.isFunction, l;
      return c ? l = s : /* @__PURE__ */ b.isValidElement(s) ? l = /* @__PURE__ */ b.cloneElement(s, this.getControlled(s.props)) : (a0(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ b.createElement(b.Fragment, {
        key: o
      }, l);
    }
  }]), r;
}(b.Component);
O(Fa, "contextType", ar);
O(Fa, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Xc(e) {
  var t, r = e.name, n = lt(e, d6), o = b.useContext(ar), a = b.useContext(Sn), i = r !== void 0 ? y0(r) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!a, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && i.length <= 1 && a0(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ b.createElement(Fa, N0({
    key: c,
    name: i,
    isListField: s
  }, n, {
    fieldContext: o
  }));
}
function v6(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = b.useContext(ar), c = b.useContext(Sn), l = b.useRef({
    keys: [],
    id: 0
  }), u = l.current, d = b.useMemo(function() {
    var g = y0(s.prefixName) || [];
    return [].concat(ve(g), ve(y0(t)));
  }, [s.prefixName, t]), v = b.useMemo(function() {
    return N(N({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), h = b.useMemo(function() {
    return {
      getKey: function(f) {
        var y = d.length, p = f[y];
        return [u.keys[p], f.slice(y + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return a0(!1, "Form.List only accepts function as children."), null;
  var m = function(f, y, p) {
    var C = p.source;
    return C === "internal" ? !1 : f !== y;
  };
  return /* @__PURE__ */ b.createElement(Sn.Provider, {
    value: h
  }, /* @__PURE__ */ b.createElement(ar.Provider, {
    value: v
  }, /* @__PURE__ */ b.createElement(Xc, {
    name: [],
    shouldUpdate: m,
    rules: o,
    validateTrigger: a,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!c
  }, function(g, f) {
    var y = g.value, p = y === void 0 ? [] : y, C = g.onChange, S = s.getFieldValue, w = function() {
      var P = S(d || []);
      return P || [];
    }, x = {
      add: function(P, R) {
        var T = w();
        R >= 0 && R <= T.length ? (u.keys = [].concat(ve(u.keys.slice(0, R)), [u.id], ve(u.keys.slice(R))), C([].concat(ve(T.slice(0, R)), [P], ve(T.slice(R))))) : (process.env.NODE_ENV !== "production" && (R < 0 || R > T.length) && a0(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(ve(u.keys), [u.id]), C([].concat(ve(T), [P]))), u.id += 1;
      },
      remove: function(P) {
        var R = w(), T = new Set(Array.isArray(P) ? P : [P]);
        T.size <= 0 || (u.keys = u.keys.filter(function(F, k) {
          return !T.has(k);
        }), C(R.filter(function(F, k) {
          return !T.has(k);
        })));
      },
      move: function(P, R) {
        if (P !== R) {
          var T = w();
          P < 0 || P >= T.length || R < 0 || R >= T.length || (u.keys = Ji(u.keys, P, R), C(Ji(T, P, R)));
        }
      }
    }, E = p || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && a0(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(E.map(function(_, P) {
      var R = u.keys[P];
      return R === void 0 && (u.keys[P] = u.id, R = u.keys[P], u.id += 1), {
        name: P,
        key: R,
        isListField: !0
      };
    }), x, f);
  })));
}
function h6(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, s) {
      i.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        r -= 1, n[s] = c, !(r > 0) && (t && a(n), o(n));
      });
    });
  }) : Promise.resolve([]);
}
var Yc = "__@field_split__";
function lo(e) {
  return e.map(function(t) {
    return "".concat(Re(t), ":").concat(t);
  }).join(Yc);
}
var Wt = /* @__PURE__ */ function() {
  function e() {
    M0(this, e), O(this, "kvs", /* @__PURE__ */ new Map());
  }
  return _0(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(lo(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(lo(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = this.get(r), a = n(o);
      a ? this.set(r, a) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(lo(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return ve(this.kvs.entries()).map(function(n) {
        var o = Y(n, 2), a = o[0], i = o[1], s = a.split(Yc);
        return r({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = Y(l, 3), d = u[1], v = u[2];
            return d === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var o = n.key, a = n.value;
        return r[o.join(".")] = a, null;
      }), r;
    }
  }]), e;
}(), m6 = ["name"], g6 = /* @__PURE__ */ _0(function e(t) {
  var r = this;
  M0(this, e), O(this, "formHooked", !1), O(this, "forceRootUpdate", void 0), O(this, "subscribable", !0), O(this, "store", {}), O(this, "fieldEntities", []), O(this, "initialValues", {}), O(this, "callbacks", {}), O(this, "validateMessages", null), O(this, "preserve", null), O(this, "lastValidatePromise", null), O(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), O(this, "getInternalHooks", function(n) {
    return n === Dt ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (a0(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), O(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), O(this, "prevWithoutPreserves", null), O(this, "setInitialValues", function(n, o) {
    if (r.initialValues = n || {}, o) {
      var a, i = Sr(n, r.store);
      (a = r.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        i = at(i, c, dt(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), O(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var o = new Wt();
      r.getFieldEntities(!0).forEach(function(a) {
        r.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), r.prevWithoutPreserves = o;
    }
  }), O(this, "getInitialValue", function(n) {
    var o = dt(r.initialValues, n);
    return n.length ? Sr(o) : o;
  }), O(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), O(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), O(this, "setPreserve", function(n) {
    r.preserve = n;
  }), O(this, "watchList", []), O(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), O(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var o = r.getFieldsValue(), a = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(o, a, n);
      });
    }
  }), O(this, "timeoutId", null), O(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || a0(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), O(this, "updateStore", function(n) {
    r.store = n;
  }), O(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }), O(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Wt();
    return r.getFieldEntities(n).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), O(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(a) {
      var i = y0(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: y0(a)
      };
    });
  }), O(this, "getFieldsValue", function(n, o) {
    r.warningUnhooked();
    var a, i, s;
    if (n === !0 || Array.isArray(n) ? (a = n, i = o) : n && Re(n) === "object" && (s = n.strict, i = n.filter), a === !0 && !i)
      return r.store;
    var c = r.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), l = [];
    return c.forEach(function(u) {
      var d, v, h = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var m, g;
        if ((m = (g = u).isList) !== null && m !== void 0 && m.call(g))
          return;
      } else if (!a && (d = (v = u).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!i)
        l.push(h);
      else {
        var f = "getMeta" in u ? u.getMeta() : null;
        i(f) && l.push(h);
      }
    }), Qi(r.store, l.map(y0));
  }), O(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var o = y0(n);
    return dt(r.store, o);
  }), O(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntitiesForNamePathList(n);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: y0(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), O(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var o = y0(n), a = r.getFieldsError([o])[0];
    return a.errors;
  }), O(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var o = y0(n), a = r.getFieldsError([o])[0];
    return a.warnings;
  }), O(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(i) ? (c = i.map(y0), l = !1) : (c = null, l = i) : (c = i.map(y0), l = s);
    var u = r.getFieldEntities(!0), d = function(f) {
      return f.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(g) {
        return d(g) || g.isList();
      }) : u.some(d);
    var v = new Wt();
    c.forEach(function(g) {
      v.set(g, []);
    }), u.forEach(function(g) {
      var f = g.getNamePath();
      c.forEach(function(y) {
        y.every(function(p, C) {
          return f[C] === p;
        }) && v.update(y, function(p) {
          return [].concat(ve(p), [g]);
        });
      });
    });
    var h = function(f) {
      return f.some(d);
    }, m = v.map(function(g) {
      var f = g.value;
      return f;
    });
    return l ? m.every(h) : m.some(h);
  }), O(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), O(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntities();
    if (!n)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = n.map(y0);
    return o.some(function(i) {
      var s = i.getNamePath();
      return er(a, s) && i.isFieldValidating();
    });
  }), O(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), O(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Wt(), a = r.getFieldEntities(!0);
    a.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var d = o.get(u) || /* @__PURE__ */ new Set();
        d.add({
          entity: c,
          value: l
        }), o.set(u, d);
      }
    });
    var i = function(l) {
      l.forEach(function(u) {
        var d = u.props.initialValue;
        if (d !== void 0) {
          var v = u.getNamePath(), h = r.getInitialValue(v);
          if (h !== void 0)
            a0(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var m = o.get(v);
            if (m && m.size > 1)
              a0(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var g = r.getFieldValue(v), f = u.isListField();
              !f && (!n.skipExist || g === void 0) && r.updateStore(at(r.store, v, ve(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, ve(ve(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = a, i(s);
  }), O(this, "resetFields", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(Sr(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var a = n.map(y0);
    a.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(at(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: a
    }), r.notifyObservers(o, a, {
      type: "reset"
    }), r.notifyWatch(a);
  }), O(this, "setFields", function(n) {
    r.warningUnhooked();
    var o = r.store, a = [];
    n.forEach(function(i) {
      var s = i.name, c = lt(i, m6), l = y0(s);
      a.push(l), "value" in c && r.updateStore(at(r.store, l, c.value)), r.notifyObservers(o, [l], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(a);
  }), O(this, "getFields", function() {
    var n = r.getFieldEntities(!0), o = n.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), c = N(N({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }), O(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var a = n.getNamePath(), i = dt(r.store, a);
      i === void 0 && r.updateStore(at(r.store, a, o));
    }
  }), O(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : r.preserve;
    return o ?? !0;
  }), O(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var o = n.getNamePath();
    if (r.notifyWatch([o]), n.props.initialValue !== void 0) {
      var a = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(a, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(s) && (!i || c.length > 1)) {
        var l = i ? void 0 : r.getInitialValue(o);
        if (o.length && r.getFieldValue(o) !== l && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !qc(d.getNamePath(), o)
          );
        })) {
          var u = r.store;
          r.updateStore(at(u, o, l, !0)), r.notifyObservers(u, [o], {
            type: "remove"
          }), r.triggerDependenciesUpdate(u, o);
        }
      }
      r.notifyWatch([o]);
    };
  }), O(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var o = n.namePath, a = n.value;
        r.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = n.namePath, s = n.triggerName;
        r.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), O(this, "notifyObservers", function(n, o, a) {
    if (r.subscribable) {
      var i = N(N({}, a), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, o, i);
      });
    } else
      r.forceRootUpdate();
  }), O(this, "triggerDependenciesUpdate", function(n, o) {
    var a = r.getDependencyChildrenFields(o);
    return a.length && r.validateFields(a), r.notifyObservers(n, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(ve(a))
    }), a;
  }), O(this, "updateValue", function(n, o) {
    var a = y0(n), i = r.store;
    r.updateStore(at(r.store, a, o)), r.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([a]);
    var s = r.triggerDependenciesUpdate(i, a), c = r.callbacks.onValuesChange;
    if (c) {
      var l = Qi(r.store, [a]);
      c(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([a].concat(ve(s)));
  }), O(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var a = Sr(r.store, n);
      r.updateStore(a);
    }
    r.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), O(this, "setFieldValue", function(n, o) {
    r.setFields([{
      name: n,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), O(this, "getDependencyChildrenFields", function(n) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new Wt();
    r.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var d = y0(u);
        i.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var s = function c(l) {
      var u = i.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (a.push(v), c(v));
        }
      });
    };
    return s(n), a;
  }), O(this, "triggerOnFieldsChange", function(n, o) {
    var a = r.callbacks.onFieldsChange;
    if (a) {
      var i = r.getFields();
      if (o) {
        var s = new Wt();
        o.forEach(function(l) {
          var u = l.name, d = l.errors;
          s.set(u, d);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = i.filter(function(l) {
        var u = l.name;
        return er(n, u);
      });
      c.length && a(c, i);
    }
  }), O(this, "validateFields", function(n, o) {
    r.warningUnhooked();
    var a, i;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (a = n, i = o) : i = n;
    var s = !!a, c = s ? a.map(y0) : [], l = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), v = i || {}, h = v.recursive, m = v.dirty;
    r.getFieldEntities(!0).forEach(function(p) {
      if (s || c.push(p.getNamePath()), !(!p.props.rules || !p.props.rules.length) && !(m && !p.isFieldDirty())) {
        var C = p.getNamePath();
        if (d.add(C.join(u)), !s || er(c, C, h)) {
          var S = p.validateRules(N({
            validateMessages: N(N({}, Gc), r.validateMessages)
          }, i));
          l.push(S.then(function() {
            return {
              name: C,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var x, E = [], _ = [];
            return (x = w.forEach) === null || x === void 0 || x.call(w, function(P) {
              var R = P.rule.warningOnly, T = P.errors;
              R ? _.push.apply(_, ve(T)) : E.push.apply(E, ve(T));
            }), E.length ? Promise.reject({
              name: C,
              errors: E,
              warnings: _
            }) : {
              name: C,
              errors: E,
              warnings: _
            };
          }));
        }
      }
    });
    var g = h6(l);
    r.lastValidatePromise = g, g.catch(function(p) {
      return p;
    }).then(function(p) {
      var C = p.map(function(S) {
        var w = S.name;
        return w;
      });
      r.notifyObservers(r.store, C, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(C, p);
    });
    var f = g.then(function() {
      return r.lastValidatePromise === g ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(p) {
      var C = p.filter(function(S) {
        return S && S.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(c),
        errorFields: C,
        outOfDate: r.lastValidatePromise !== g
      });
    });
    f.catch(function(p) {
      return p;
    });
    var y = c.filter(function(p) {
      return d.has(p.join(u));
    });
    return r.triggerOnFieldsChange(y), f;
  }), O(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var o = r.callbacks.onFinish;
      if (o)
        try {
          o(n);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(n) {
      var o = r.callbacks.onFinishFailed;
      o && o(n);
    });
  }), this.forceRootUpdate = t;
});
function Kc(e) {
  var t = b.useRef(), r = b.useState({}), n = Y(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new g6(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var ta = /* @__PURE__ */ b.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), p6 = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, a = t.children, i = b.useContext(ta), s = b.useRef({});
  return /* @__PURE__ */ b.createElement(ta.Provider, {
    value: N(N({}, i), {}, {
      validateMessages: N(N({}, i.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, u) {
        n && n(l, {
          changedFields: u,
          forms: s.current
        }), i.triggerFormChange(l, u);
      },
      triggerFormFinish: function(l, u) {
        o && o(l, {
          values: u,
          forms: s.current
        }), i.triggerFormFinish(l, u);
      },
      registerForm: function(l, u) {
        l && (s.current = N(N({}, s.current), {}, O({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = N({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, a);
}, y6 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], b6 = function(t, r) {
  var n = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, d = t.validateMessages, v = t.validateTrigger, h = v === void 0 ? "onChange" : v, m = t.onValuesChange, g = t.onFieldsChange, f = t.onFinish, y = t.onFinishFailed, p = t.clearOnDestroy, C = lt(t, y6), S = b.useRef(null), w = b.useContext(ta), x = Kc(i), E = Y(x, 1), _ = E[0], P = _.getInternalHooks(Dt), R = P.useSubscribe, T = P.setInitialValues, F = P.setCallbacks, k = P.setValidateMessages, D = P.setPreserve, $ = P.destroyForm;
  b.useImperativeHandle(r, function() {
    return N(N({}, _), {}, {
      nativeElement: S.current
    });
  }), b.useEffect(function() {
    return w.registerForm(n, _), function() {
      w.unregisterForm(n);
    };
  }, [w, _, n]), k(N(N({}, w.validateMessages), d)), F({
    onValuesChange: m,
    onFieldsChange: function(K) {
      if (w.triggerFormChange(n, K), g) {
        for (var X = arguments.length, z = new Array(X > 1 ? X - 1 : 0), J = 1; J < X; J++)
          z[J - 1] = arguments[J];
        g.apply(void 0, [K].concat(z));
      }
    },
    onFinish: function(K) {
      w.triggerFormFinish(n, K), f && f(K);
    },
    onFinishFailed: y
  }), D(s);
  var L = b.useRef(null);
  T(o, !L.current), L.current || (L.current = !0), b.useEffect(
    function() {
      return function() {
        return $(p);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var I, H = typeof c == "function";
  if (H) {
    var B = _.getFieldsValue(!0);
    I = c(B, _);
  } else
    I = c;
  R(!H);
  var q = b.useRef();
  b.useEffect(function() {
    u6(q.current || [], a || []) || _.setFields(a || []), q.current = a;
  }, [a, _]);
  var U = b.useMemo(function() {
    return N(N({}, _), {}, {
      validateTrigger: h
    });
  }, [_, h]), V = /* @__PURE__ */ b.createElement(Sn.Provider, {
    value: null
  }, /* @__PURE__ */ b.createElement(ar.Provider, {
    value: U
  }, I));
  return u === !1 ? V : /* @__PURE__ */ b.createElement(u, N0({}, C, {
    ref: S,
    onSubmit: function(K) {
      K.preventDefault(), K.stopPropagation(), _.submit();
    },
    onReset: function(K) {
      var X;
      K.preventDefault(), _.resetFields(), (X = C.onReset) === null || X === void 0 || X.call(C, K);
    }
  }), V);
};
function es(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var C6 = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = G(t);
  a0(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function S6() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = t[1], a = o === void 0 ? {} : o, i = F5(a) ? {
    form: a
  } : a, s = i.form, c = xn(), l = Y(c, 2), u = l[0], d = l[1], v = J0(function() {
    return es(u);
  }, [u]), h = G(v);
  h.current = v;
  var m = Pr(ar), g = s || m, f = g && g._init;
  process.env.NODE_ENV !== "production" && a0(t.length === 2 ? s ? f : !0 : f, "useWatch requires a form instance since it can not auto detect from context.");
  var y = y0(n), p = G(y);
  return p.current = y, C6(y), Te(
    function() {
      if (f) {
        var C = g.getFieldsValue, S = g.getInternalHooks, w = S(Dt), x = w.registerWatch, E = function(T, F) {
          var k = i.preserve ? F : T;
          return typeof n == "function" ? n(k) : dt(k, p.current);
        }, _ = x(function(R, T) {
          var F = E(R, T), k = es(F);
          h.current !== k && (h.current = k, d(F));
        }), P = E(C(), C(!0));
        return u !== P && d(P), _;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f]
  ), u;
}
var w6 = /* @__PURE__ */ b.forwardRef(b6), jr = w6;
jr.FormProvider = p6;
jr.Field = Xc;
jr.List = v6;
jr.useForm = Kc;
jr.useWatch = S6;
const ra = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (ra.displayName = "FormItemInputContext");
const x6 = ({
  children: e,
  status: t,
  override: r
}) => {
  const n = b.useContext(ra), o = b.useMemo(() => {
    const a = Object.assign({}, n);
    return r && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, r, n]);
  return /* @__PURE__ */ b.createElement(ra.Provider, {
    value: o
  }, e);
}, E6 = (e) => {
  const {
    space: t,
    form: r,
    children: n
  } = e;
  if (n == null)
    return null;
  let o = n;
  return r && (o = /* @__PURE__ */ be.createElement(x6, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ be.createElement(z3, null, o)), o;
}, P6 = E6, R6 = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
function M6(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, a = n || {}, i = a.className, s = a.content, c = o.x, l = c === void 0 ? 0 : c, u = o.y, d = u === void 0 ? 0 : u, v = b.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var m = r.points[0], g = r.points[1], f = m[0], y = m[1], p = g[0], C = g[1];
    f === p || !["t", "b"].includes(f) ? h.top = d : f === "t" ? h.top = 0 : h.bottom = 0, y === C || !["l", "r"].includes(y) ? h.left = l : y === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ b.createElement("div", {
    ref: v,
    className: Ne("".concat(t, "-arrow"), i),
    style: h
  }, s);
}
function _6(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, a = e.motion;
  return o ? /* @__PURE__ */ b.createElement(Ra, N0({}, a, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ b.createElement("div", {
      style: {
        zIndex: n
      },
      className: Ne("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Zc = /* @__PURE__ */ b.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Zc.displayName = "PopupContent");
var Qc = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, a = e.style, i = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, u = e.fresh, d = e.onClick, v = e.mask, h = e.arrow, m = e.arrowPos, g = e.align, f = e.motion, y = e.maskMotion, p = e.forceRender, C = e.getPopupContainer, S = e.autoDestroy, w = e.portal, x = e.zIndex, E = e.onMouseEnter, _ = e.onMouseLeave, P = e.onPointerEnter, R = e.onPointerDownCapture, T = e.ready, F = e.offsetX, k = e.offsetY, D = e.offsetR, $ = e.offsetB, L = e.onAlign, I = e.onPrepare, H = e.stretch, B = e.targetWidth, q = e.targetHeight, U = typeof r == "function" ? r() : r, V = c || l, Q = (C == null ? void 0 : C.length) > 0, K = b.useState(!C || !Q), X = Y(K, 2), z = X[0], J = X[1];
  if (D0(function() {
    !z && Q && i && J(!0);
  }, [z, Q, i]), !z)
    return null;
  var ne = "auto", ce = {
    left: "-1000vw",
    top: "-1000vh",
    right: ne,
    bottom: ne
  };
  if (T || !c) {
    var oe, ie = g.points, he = g.dynamicInset || ((oe = g._experimental) === null || oe === void 0 ? void 0 : oe.dynamicInset), we = he && ie[0][1] === "r", j = he && ie[0][0] === "b";
    we ? (ce.right = D, ce.left = ne) : (ce.left = F, ce.right = ne), j ? (ce.bottom = $, ce.top = ne) : (ce.top = k, ce.bottom = ne);
  }
  var le = {};
  return H && (H.includes("height") && q ? le.height = q : H.includes("minHeight") && q && (le.minHeight = q), H.includes("width") && B ? le.width = B : H.includes("minWidth") && B && (le.minWidth = B)), c || (le.pointerEvents = "none"), /* @__PURE__ */ b.createElement(w, {
    open: p || V,
    getContainer: C && function() {
      return C(i);
    },
    autoDestroy: S
  }, /* @__PURE__ */ b.createElement(_6, {
    prefixCls: o,
    open: c,
    zIndex: x,
    mask: v,
    motion: y
  }), /* @__PURE__ */ b.createElement(Rn, {
    onResize: L,
    disabled: !c
  }, function(Z) {
    return /* @__PURE__ */ b.createElement(Ra, N0({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(o, "-hidden")
    }, f, {
      onAppearPrepare: I,
      onEnterPrepare: I,
      visible: c,
      onVisibleChanged: function(ge) {
        var me;
        f == null || (me = f.onVisibleChanged) === null || me === void 0 || me.call(f, ge), s(ge);
      }
    }), function(ae, ge) {
      var me = ae.className, Ye = ae.style, ee = Ne(o, me, n);
      return /* @__PURE__ */ b.createElement("div", {
        ref: ua(Z, t, ge),
        className: ee,
        style: N(N(N(N({
          "--arrow-x": "".concat(m.x || 0, "px"),
          "--arrow-y": "".concat(m.y || 0, "px")
        }, ce), le), Ye), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, a),
        onMouseEnter: E,
        onMouseLeave: _,
        onPointerEnter: P,
        onClick: d,
        onPointerDownCapture: R
      }, h && /* @__PURE__ */ b.createElement(M6, {
        prefixCls: o,
        arrow: h,
        arrowPos: m,
        align: g
      }), /* @__PURE__ */ b.createElement(Zc, {
        cache: !c && !u
      }, U));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Qc.displayName = "Popup");
var Jc = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = En(r), a = b.useCallback(function(s) {
    la(t, n ? n(s) : s);
  }, [n]), i = fa(a, da(r));
  return o ? /* @__PURE__ */ b.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (Jc.displayName = "TriggerWrapper");
var ts = /* @__PURE__ */ b.createContext(null);
function rs(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function F6(e, t, r, n) {
  return b.useMemo(function() {
    var o = rs(r ?? t), a = rs(n ?? t), i = new Set(o), s = new Set(a);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function T6() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function k6(e, t, r, n) {
  for (var o = r.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var s, c = a[i];
    if (T6((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function ns(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function Hr(e) {
  return e.ownerDocument.defaultView;
}
function na(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = Hr(r).getComputedStyle(r), a = o.overflowX, i = o.overflowY, s = o.overflow;
    [a, i, s].some(function(c) {
      return n.includes(c);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function Nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function pr(e) {
  return Nr(parseFloat(e), 0);
}
function os(e, t) {
  var r = N({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var o = Hr(n).getComputedStyle(n), a = o.overflow, i = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, l = o.borderLeftWidth, u = o.borderRightWidth, d = n.getBoundingClientRect(), v = n.offsetHeight, h = n.clientHeight, m = n.offsetWidth, g = n.clientWidth, f = pr(s), y = pr(c), p = pr(l), C = pr(u), S = Nr(Math.round(d.width / m * 1e3) / 1e3), w = Nr(Math.round(d.height / v * 1e3) / 1e3), x = (m - g - p - C) * S, E = (v - h - f - y) * w, _ = f * w, P = y * w, R = p * S, T = C * S, F = 0, k = 0;
      if (a === "clip") {
        var D = pr(i);
        F = D * S, k = D * w;
      }
      var $ = d.x + R - F, L = d.y + _ - k, I = $ + d.width + 2 * F - R - T - x, H = L + d.height + 2 * k - _ - P - E;
      r.left = Math.max(r.left, $), r.top = Math.max(r.top, L), r.right = Math.min(r.right, I), r.bottom = Math.min(r.bottom, H);
    }
  }), r;
}
function as(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function is(e, t) {
  var r = t || [], n = Y(r, 2), o = n[0], a = n[1];
  return [as(e.width, o), as(e.height, a)];
}
function ss() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Ut(e, t) {
  var r = t[0], n = t[1], o, a;
  return r === "t" ? a = e.y : r === "b" ? a = e.y + e.height : a = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: a
  };
}
function Pt(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, o) {
    return o === t ? r[n] || "c" : n;
  }).join("");
}
function O6(e, t, r, n, o, a, i) {
  var s = b.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[n] || {}
  }), c = Y(s, 2), l = c[0], u = c[1], d = b.useRef(0), v = b.useMemo(function() {
    return t ? na(t) : [];
  }, [t]), h = b.useRef({}), m = function() {
    h.current = {};
  };
  e || m();
  var g = R0(function() {
    if (t && r && e) {
      let Y0 = function(ur, mt) {
        var Et = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Me, fr = V.x + ur, Gr = V.y + mt, Bn = fr + j, zn = Gr + we, Wn = Math.max(fr, Et.left), ue = Math.max(Gr, Et.top), xe = Math.min(Bn, Et.right), d0 = Math.min(zn, Et.bottom);
        return Math.max(0, (xe - Wn) * (d0 - ue));
      }, Ht = function() {
        Ee = V.y + Ue, Se = Ee + we, c0 = V.x + ze, Ve = c0 + j;
      };
      var p, C, S, w, x = t, E = x.ownerDocument, _ = Hr(x), P = _.getComputedStyle(x), R = P.position, T = x.style.left, F = x.style.top, k = x.style.right, D = x.style.bottom, $ = x.style.overflow, L = N(N({}, o[n]), a), I = E.createElement("div");
      (p = x.parentElement) === null || p === void 0 || p.appendChild(I), I.style.left = "".concat(x.offsetLeft, "px"), I.style.top = "".concat(x.offsetTop, "px"), I.style.position = R, I.style.height = "".concat(x.offsetHeight, "px"), I.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto", x.style.overflow = "hidden";
      var H;
      if (Array.isArray(r))
        H = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var B, q, U = r.getBoundingClientRect();
        U.x = (B = U.x) !== null && B !== void 0 ? B : U.left, U.y = (q = U.y) !== null && q !== void 0 ? q : U.top, H = {
          x: U.x,
          y: U.y,
          width: U.width,
          height: U.height
        };
      }
      var V = x.getBoundingClientRect(), Q = _.getComputedStyle(x), K = Q.height, X = Q.width;
      V.x = (C = V.x) !== null && C !== void 0 ? C : V.left, V.y = (S = V.y) !== null && S !== void 0 ? S : V.top;
      var z = E.documentElement, J = z.clientWidth, ne = z.clientHeight, ce = z.scrollWidth, oe = z.scrollHeight, ie = z.scrollTop, he = z.scrollLeft, we = V.height, j = V.width, le = H.height, Z = H.width, ae = {
        left: 0,
        top: 0,
        right: J,
        bottom: ne
      }, ge = {
        left: -he,
        top: -ie,
        right: ce - he,
        bottom: oe - ie
      }, me = L.htmlRegion, Ye = "visible", ee = "visibleFirst";
      me !== "scroll" && me !== ee && (me = Ye);
      var fe = me === ee, pe = os(ge, v), re = os(ae, v), Me = me === Ye ? re : pe, Fe = fe ? re : Me;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var We = x.getBoundingClientRect();
      x.style.left = T, x.style.top = F, x.style.right = k, x.style.bottom = D, x.style.overflow = $, (w = x.parentElement) === null || w === void 0 || w.removeChild(I);
      var $e = Nr(Math.round(j / parseFloat(X) * 1e3) / 1e3), De = Nr(Math.round(we / parseFloat(K) * 1e3) / 1e3);
      if ($e === 0 || De === 0 || Rr(r) && !V3(r))
        return;
      var r0 = L.offset, _e = L.targetOffset, Ce = is(V, r0), Be = Y(Ce, 2), Ke = Be[0], l0 = Be[1], u0 = is(H, _e), o0 = Y(u0, 2), f0 = o0[0], w0 = o0[1];
      H.x -= f0, H.y -= w0;
      var v0 = L.points || [], b0 = Y(v0, 2), Ze = b0[0], Qe = b0[1], i0 = ss(Qe), h0 = ss(Ze), n0 = Ut(H, i0), X0 = Ut(V, h0), s0 = N({}, L), ze = n0.x - X0.x + Ke, Ue = n0.y - X0.y + l0, L0 = Y0(ze, Ue), $0 = Y0(ze, Ue, re), F0 = Ut(H, ["t", "l"]), vt = Ut(V, ["t", "l"]), ht = Ut(H, ["b", "r"]), nt = Ut(V, ["b", "r"]), M = L.overflow || {}, W = M.adjustX, te = M.adjustY, ye = M.shiftX, ke = M.shiftY, Ie = function(mt) {
        return typeof mt == "boolean" ? mt : mt >= 0;
      }, Ee, Se, c0, Ve;
      Ht();
      var Je = Ie(te), Ge = h0[0] === i0[0];
      if (Je && h0[0] === "t" && (Se > Fe.bottom || h.current.bt)) {
        var O0 = Ue;
        Ge ? O0 -= we - le : O0 = F0.y - nt.y - l0;
        var Ae = Y0(ze, O0), de = Y0(ze, O0, re);
        // Of course use larger one
        Ae > L0 || Ae === L0 && (!fe || // Choose recommend one
        de >= $0) ? (h.current.bt = !0, Ue = O0, l0 = -l0, s0.points = [Pt(h0, 0), Pt(i0, 0)]) : h.current.bt = !1;
      }
      if (Je && h0[0] === "b" && (Ee < Fe.top || h.current.tb)) {
        var je = Ue;
        Ge ? je += we - le : je = ht.y - vt.y - l0;
        var e0 = Y0(ze, je), m0 = Y0(ze, je, re);
        // Of course use larger one
        e0 > L0 || e0 === L0 && (!fe || // Choose recommend one
        m0 >= $0) ? (h.current.tb = !0, Ue = je, l0 = -l0, s0.points = [Pt(h0, 0), Pt(i0, 0)]) : h.current.tb = !1;
      }
      var B0 = Ie(W), I0 = h0[1] === i0[1];
      if (B0 && h0[1] === "l" && (Ve > Fe.right || h.current.rl)) {
        var T0 = ze;
        I0 ? T0 -= j - Z : T0 = F0.x - nt.x - Ke;
        var k0 = Y0(T0, Ue), z0 = Y0(T0, Ue, re);
        // Of course use larger one
        k0 > L0 || k0 === L0 && (!fe || // Choose recommend one
        z0 >= $0) ? (h.current.rl = !0, ze = T0, Ke = -Ke, s0.points = [Pt(h0, 1), Pt(i0, 1)]) : h.current.rl = !1;
      }
      if (B0 && h0[1] === "r" && (c0 < Fe.left || h.current.lr)) {
        var j0 = ze;
        I0 ? j0 += j - Z : j0 = ht.x - vt.x - Ke;
        var H0 = Y0(j0, Ue), ot = Y0(j0, Ue, re);
        // Of course use larger one
        H0 > L0 || H0 === L0 && (!fe || // Choose recommend one
        ot >= $0) ? (h.current.lr = !0, ze = j0, Ke = -Ke, s0.points = [Pt(h0, 1), Pt(i0, 1)]) : h.current.lr = !1;
      }
      Ht();
      var V0 = ye === !0 ? 0 : ye;
      typeof V0 == "number" && (c0 < re.left && (ze -= c0 - re.left - Ke, H.x + Z < re.left + V0 && (ze += H.x - re.left + Z - V0)), Ve > re.right && (ze -= Ve - re.right - Ke, H.x > re.right - V0 && (ze += H.x - re.right + V0)));
      var St = ke === !0 ? 0 : ke;
      typeof St == "number" && (Ee < re.top && (Ue -= Ee - re.top - l0, H.y + le < re.top + St && (Ue += H.y - re.top + le - St)), Se > re.bottom && (Ue -= Se - re.bottom - l0, H.y > re.bottom - St && (Ue += H.y - re.bottom + St)));
      var wt = V.x + ze, xt = wt + j, cr = V.y + Ue, An = cr + we, Vr = H.x, Br = Vr + Z, zr = H.y, Dn = zr + le, Nn = Math.max(wt, Vr), Wr = Math.min(xt, Br), Ln = (Nn + Wr) / 2, $n = Ln - wt, Ur = Math.max(cr, zr), In = Math.min(An, Dn), jn = (Ur + In) / 2, Hn = jn - cr;
      i == null || i(t, s0);
      var ut = We.right - V.x - (ze + V.width), lr = We.bottom - V.y - (Ue + V.height);
      $e === 1 && (ze = Math.floor(ze), ut = Math.floor(ut)), De === 1 && (Ue = Math.floor(Ue), lr = Math.floor(lr));
      var Vn = {
        ready: !0,
        offsetX: ze / $e,
        offsetY: Ue / De,
        offsetR: ut / $e,
        offsetB: lr / De,
        arrowX: $n / $e,
        arrowY: Hn / De,
        scaleX: $e,
        scaleY: De,
        align: s0
      };
      u(Vn);
    }
  }), f = function() {
    d.current += 1;
    var C = d.current;
    Promise.resolve().then(function() {
      d.current === C && g();
    });
  }, y = function() {
    u(function(C) {
      return N(N({}, C), {}, {
        ready: !1
      });
    });
  };
  return D0(y, [n]), D0(function() {
    e || y();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, f];
}
function A6(e, t, r, n, o) {
  D0(function() {
    if (e && t && r) {
      let d = function() {
        n(), o();
      };
      var a = t, i = r, s = na(a), c = na(i), l = Hr(i), u = new Set([l].concat(ve(s), ve(c)));
      return u.forEach(function(v) {
        v.addEventListener("scroll", d, {
          passive: !0
        });
      }), l.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        u.forEach(function(v) {
          v.removeEventListener("scroll", d), l.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, r]);
}
function D6(e, t, r, n, o, a, i, s) {
  var c = b.useRef(e);
  c.current = e;
  var l = b.useRef(!1);
  b.useEffect(function() {
    if (t && n && (!o || a)) {
      var d = function() {
        l.current = !1;
      }, v = function(S) {
        var w;
        c.current && !i(((w = S.composedPath) === null || w === void 0 || (w = w.call(S)) === null || w === void 0 ? void 0 : w[0]) || S.target) && !l.current && s(!1);
      }, h = Hr(n);
      h.addEventListener("pointerdown", d, !0), h.addEventListener("mousedown", v, !0), h.addEventListener("contextmenu", v, !0);
      var m = Uo(r);
      if (m && (m.addEventListener("mousedown", v, !0), m.addEventListener("contextmenu", v, !0)), process.env.NODE_ENV !== "production") {
        var g, f, y = r == null || (g = r.getRootNode) === null || g === void 0 ? void 0 : g.call(r), p = (f = n.getRootNode) === null || f === void 0 ? void 0 : f.call(n);
        $t(y === p, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        h.removeEventListener("pointerdown", d, !0), h.removeEventListener("mousedown", v, !0), h.removeEventListener("contextmenu", v, !0), m && (m.removeEventListener("mousedown", v, !0), m.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, r, n, o, a]);
  function u() {
    l.current = !0;
  }
  return u;
}
var N6 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function L6() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _a, t = /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = r.prefixCls, a = o === void 0 ? "rc-trigger-popup" : o, i = r.children, s = r.action, c = s === void 0 ? "hover" : s, l = r.showAction, u = r.hideAction, d = r.popupVisible, v = r.defaultPopupVisible, h = r.onPopupVisibleChange, m = r.afterPopupVisibleChange, g = r.mouseEnterDelay, f = r.mouseLeaveDelay, y = f === void 0 ? 0.1 : f, p = r.focusDelay, C = r.blurDelay, S = r.mask, w = r.maskClosable, x = w === void 0 ? !0 : w, E = r.getPopupContainer, _ = r.forceRender, P = r.autoDestroy, R = r.destroyPopupOnHide, T = r.popup, F = r.popupClassName, k = r.popupStyle, D = r.popupPlacement, $ = r.builtinPlacements, L = $ === void 0 ? {} : $, I = r.popupAlign, H = r.zIndex, B = r.stretch, q = r.getPopupClassNameFromAlign, U = r.fresh, V = r.alignPoint, Q = r.onPopupClick, K = r.onPopupAlign, X = r.arrow, z = r.popupMotion, J = r.maskMotion, ne = r.popupTransitionName, ce = r.popupAnimation, oe = r.maskTransitionName, ie = r.maskAnimation, he = r.className, we = r.getTriggerDOMNode, j = lt(r, N6), le = P || R || !1, Z = b.useState(!1), ae = Y(Z, 2), ge = ae[0], me = ae[1];
    D0(function() {
      me(R6());
    }, []);
    var Ye = b.useRef({}), ee = b.useContext(ts), fe = b.useMemo(function() {
      return {
        registerSubPopup: function(xe, d0) {
          Ye.current[xe] = d0, ee == null || ee.registerSubPopup(xe, d0);
        }
      };
    }, [ee]), pe = zc(), re = b.useState(null), Me = Y(re, 2), Fe = Me[0], We = Me[1], $e = b.useRef(null), De = R0(function(ue) {
      $e.current = ue, Rr(ue) && Fe !== ue && We(ue), ee == null || ee.registerSubPopup(pe, ue);
    }), r0 = b.useState(null), _e = Y(r0, 2), Ce = _e[0], Be = _e[1], Ke = b.useRef(null), l0 = R0(function(ue) {
      Rr(ue) && Ce !== ue && (Be(ue), Ke.current = ue);
    }), u0 = b.Children.only(i), o0 = (u0 == null ? void 0 : u0.props) || {}, f0 = {}, w0 = R0(function(ue) {
      var xe, d0, x0 = Ce;
      return (x0 == null ? void 0 : x0.contains(ue)) || ((xe = Uo(x0)) === null || xe === void 0 ? void 0 : xe.host) === ue || ue === x0 || (Fe == null ? void 0 : Fe.contains(ue)) || ((d0 = Uo(Fe)) === null || d0 === void 0 ? void 0 : d0.host) === ue || ue === Fe || Object.values(Ye.current).some(function(g0) {
        return (g0 == null ? void 0 : g0.contains(ue)) || ue === g0;
      });
    }), v0 = ns(a, z, ce, ne), b0 = ns(a, J, ie, oe), Ze = b.useState(v || !1), Qe = Y(Ze, 2), i0 = Qe[0], h0 = Qe[1], n0 = d ?? i0, X0 = R0(function(ue) {
      d === void 0 && h0(ue);
    });
    D0(function() {
      h0(d || !1);
    }, [d]);
    var s0 = b.useRef(n0);
    s0.current = n0;
    var ze = b.useRef([]);
    ze.current = [];
    var Ue = R0(function(ue) {
      var xe;
      X0(ue), ((xe = ze.current[ze.current.length - 1]) !== null && xe !== void 0 ? xe : n0) !== ue && (ze.current.push(ue), h == null || h(ue));
    }), L0 = b.useRef(), $0 = function() {
      clearTimeout(L0.current);
    }, F0 = function(xe) {
      var d0 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      $0(), d0 === 0 ? Ue(xe) : L0.current = setTimeout(function() {
        Ue(xe);
      }, d0 * 1e3);
    };
    b.useEffect(function() {
      return $0;
    }, []);
    var vt = b.useState(!1), ht = Y(vt, 2), nt = ht[0], M = ht[1];
    D0(function(ue) {
      (!ue || n0) && M(!0);
    }, [n0]);
    var W = b.useState(null), te = Y(W, 2), ye = te[0], ke = te[1], Ie = b.useState(null), Ee = Y(Ie, 2), Se = Ee[0], c0 = Ee[1], Ve = function(xe) {
      c0([xe.clientX, xe.clientY]);
    }, Je = O6(n0, Fe, V && Se !== null ? Se : Ce, D, L, I, K), Ge = Y(Je, 11), O0 = Ge[0], Ae = Ge[1], de = Ge[2], je = Ge[3], e0 = Ge[4], m0 = Ge[5], B0 = Ge[6], I0 = Ge[7], T0 = Ge[8], k0 = Ge[9], z0 = Ge[10], j0 = F6(ge, c, l, u), H0 = Y(j0, 2), ot = H0[0], V0 = H0[1], St = ot.has("click"), wt = V0.has("click") || V0.has("contextMenu"), xt = R0(function() {
      nt || z0();
    }), cr = function() {
      s0.current && V && wt && F0(!1);
    };
    A6(n0, Ce, Fe, xt, cr), D0(function() {
      xt();
    }, [Se, D]), D0(function() {
      n0 && !(L != null && L[D]) && xt();
    }, [JSON.stringify(I)]);
    var An = b.useMemo(function() {
      var ue = k6(L, a, k0, V);
      return Ne(ue, q == null ? void 0 : q(k0));
    }, [k0, q, L, a, V]);
    b.useImperativeHandle(n, function() {
      return {
        nativeElement: Ke.current,
        popupElement: $e.current,
        forceAlign: xt
      };
    });
    var Vr = b.useState(0), Br = Y(Vr, 2), zr = Br[0], Dn = Br[1], Nn = b.useState(0), Wr = Y(Nn, 2), Ln = Wr[0], $n = Wr[1], Ur = function() {
      if (B && Ce) {
        var xe = Ce.getBoundingClientRect();
        Dn(xe.width), $n(xe.height);
      }
    }, In = function() {
      Ur(), xt();
    }, jn = function(xe) {
      M(!1), z0(), m == null || m(xe);
    }, Hn = function() {
      return new Promise(function(xe) {
        Ur(), ke(function() {
          return xe;
        });
      });
    };
    D0(function() {
      ye && (z0(), ye(), ke(null));
    }, [ye]);
    function ut(ue, xe, d0, x0) {
      f0[ue] = function(g0) {
        var qr;
        x0 == null || x0(g0), F0(xe, d0);
        for (var Un = arguments.length, Na = new Array(Un > 1 ? Un - 1 : 0), Xr = 1; Xr < Un; Xr++)
          Na[Xr - 1] = arguments[Xr];
        (qr = o0[ue]) === null || qr === void 0 || qr.call.apply(qr, [o0, g0].concat(Na));
      };
    }
    (St || wt) && (f0.onClick = function(ue) {
      var xe;
      s0.current && wt ? F0(!1) : !s0.current && St && (Ve(ue), F0(!0));
      for (var d0 = arguments.length, x0 = new Array(d0 > 1 ? d0 - 1 : 0), g0 = 1; g0 < d0; g0++)
        x0[g0 - 1] = arguments[g0];
      (xe = o0.onClick) === null || xe === void 0 || xe.call.apply(xe, [o0, ue].concat(x0));
    });
    var lr = D6(n0, wt, Ce, Fe, S, x, w0, F0), Vn = ot.has("hover"), Y0 = V0.has("hover"), Ht, ur;
    Vn && (ut("onMouseEnter", !0, g, function(ue) {
      Ve(ue);
    }), ut("onPointerEnter", !0, g, function(ue) {
      Ve(ue);
    }), Ht = function(xe) {
      (n0 || nt) && Fe !== null && Fe !== void 0 && Fe.contains(xe.target) && F0(!0, g);
    }, V && (f0.onMouseMove = function(ue) {
      var xe;
      (xe = o0.onMouseMove) === null || xe === void 0 || xe.call(o0, ue);
    })), Y0 && (ut("onMouseLeave", !1, y), ut("onPointerLeave", !1, y), ur = function() {
      F0(!1, y);
    }), ot.has("focus") && ut("onFocus", !0, p), V0.has("focus") && ut("onBlur", !1, C), ot.has("contextMenu") && (f0.onContextMenu = function(ue) {
      var xe;
      s0.current && V0.has("contextMenu") ? F0(!1) : (Ve(ue), F0(!0)), ue.preventDefault();
      for (var d0 = arguments.length, x0 = new Array(d0 > 1 ? d0 - 1 : 0), g0 = 1; g0 < d0; g0++)
        x0[g0 - 1] = arguments[g0];
      (xe = o0.onContextMenu) === null || xe === void 0 || xe.call.apply(xe, [o0, ue].concat(x0));
    }), he && (f0.className = Ne(o0.className, he));
    var mt = b.useRef(!1);
    mt.current || (mt.current = _ || n0 || nt);
    var Et = N(N({}, o0), f0), fr = {}, Gr = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Gr.forEach(function(ue) {
      j[ue] && (fr[ue] = function() {
        for (var xe, d0 = arguments.length, x0 = new Array(d0), g0 = 0; g0 < d0; g0++)
          x0[g0] = arguments[g0];
        (xe = Et[ue]) === null || xe === void 0 || xe.call.apply(xe, [Et].concat(x0)), j[ue].apply(j, x0);
      });
    });
    var Bn = /* @__PURE__ */ b.cloneElement(u0, N(N({}, Et), fr)), zn = {
      x: m0,
      y: B0
    }, Wn = X ? N({}, X !== !0 ? X : {}) : null;
    return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Rn, {
      disabled: !n0,
      ref: l0,
      onResize: In
    }, /* @__PURE__ */ b.createElement(Jc, {
      getTriggerDOMNode: we
    }, Bn)), mt.current && /* @__PURE__ */ b.createElement(ts.Provider, {
      value: fe
    }, /* @__PURE__ */ b.createElement(Qc, {
      portal: e,
      ref: De,
      prefixCls: a,
      popup: T,
      className: Ne(F, An),
      style: k,
      target: Ce,
      onMouseEnter: Ht,
      onMouseLeave: ur,
      onPointerEnter: Ht,
      zIndex: H,
      open: n0,
      keepDom: nt,
      fresh: U,
      onClick: Q,
      onPointerDownCapture: lr,
      mask: S,
      motion: v0,
      maskMotion: b0,
      onVisibleChanged: jn,
      onPrepare: Hn,
      forceRender: _,
      autoDestroy: le,
      getPopupContainer: E,
      align: k0,
      arrow: Wn,
      arrowPos: zn,
      ready: O0,
      offsetX: Ae,
      offsetY: de,
      offsetR: je,
      offsetB: e0,
      onAlign: xt,
      stretch: B,
      targetWidth: zr / I0,
      targetHeight: Ln / T0
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const $6 = L6(_a), wn = (e) => e ? typeof e == "function" ? e() : e : null;
function Ta(e) {
  var t = e.children, r = e.prefixCls, n = e.id, o = e.overlayInnerStyle, a = e.bodyClassName, i = e.className, s = e.style;
  return /* @__PURE__ */ b.createElement("div", {
    className: Ne("".concat(r, "-content"), i),
    style: s
  }, /* @__PURE__ */ b.createElement("div", {
    className: Ne("".concat(r, "-inner"), a),
    id: n,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
var Gt = {
  shiftX: 64,
  adjustY: 1
}, qt = {
  adjustX: 1,
  shiftY: !0
}, Q0 = [0, 0], I6 = {
  left: {
    points: ["cr", "cl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Q0
  },
  right: {
    points: ["cl", "cr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Q0
  },
  top: {
    points: ["bc", "tc"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Q0
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Q0
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Q0
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Q0
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Q0
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Q0
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Q0
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Q0
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Q0
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Q0
  }
}, j6 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], H6 = function(t, r) {
  var n = t.overlayClassName, o = t.trigger, a = o === void 0 ? ["hover"] : o, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, c = t.mouseLeaveDelay, l = c === void 0 ? 0.1 : c, u = t.overlayStyle, d = t.prefixCls, v = d === void 0 ? "rc-tooltip" : d, h = t.children, m = t.onVisibleChange, g = t.afterVisibleChange, f = t.transitionName, y = t.animation, p = t.motion, C = t.placement, S = C === void 0 ? "right" : C, w = t.align, x = w === void 0 ? {} : w, E = t.destroyTooltipOnHide, _ = E === void 0 ? !1 : E, P = t.defaultVisible, R = t.getTooltipContainer, T = t.overlayInnerStyle;
  t.arrowContent;
  var F = t.overlay, k = t.id, D = t.showArrow, $ = D === void 0 ? !0 : D, L = t.classNames, I = t.styles, H = lt(t, j6), B = zc(k), q = G(null);
  ia(r, function() {
    return q.current;
  });
  var U = N({}, H);
  "visible" in t && (U.popupVisible = t.visible);
  var V = function() {
    return /* @__PURE__ */ b.createElement(Ta, {
      key: "content",
      prefixCls: v,
      id: B,
      bodyClassName: L == null ? void 0 : L.body,
      overlayInnerStyle: N(N({}, T), I == null ? void 0 : I.body)
    }, F);
  }, Q = function() {
    var X = b.Children.only(h), z = (X == null ? void 0 : X.props) || {}, J = N(N({}, z), {}, {
      "aria-describedby": F ? B : null
    });
    return /* @__PURE__ */ b.cloneElement(h, J);
  };
  return /* @__PURE__ */ b.createElement($6, N0({
    popupClassName: Ne(n, L == null ? void 0 : L.root),
    prefixCls: v,
    popup: V,
    action: a,
    builtinPlacements: I6,
    popupPlacement: S,
    ref: q,
    popupAlign: x,
    getPopupContainer: R,
    onPopupVisibleChange: m,
    afterPopupVisibleChange: g,
    popupTransitionName: f,
    popupAnimation: y,
    popupMotion: p,
    defaultPopupVisible: P,
    autoDestroy: _,
    mouseLeaveDelay: l,
    popupStyle: N(N({}, u), I == null ? void 0 : I.root),
    mouseEnterDelay: s,
    arrow: $
  }, U), Q());
};
const V6 = /* @__PURE__ */ Lr(H6);
function e1(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, o = t / 2, a = 0, i = o, s = n * 1 / Math.sqrt(2), c = o - n * (1 - 1 / Math.sqrt(2)), l = o - r * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), d = 2 * o - l, v = u, h = 2 * o - s, m = c, g = 2 * o - a, f = i, y = o * Math.sqrt(2) + n * (Math.sqrt(2) - 2), p = n * (Math.sqrt(2) - 1), C = `polygon(${p}px 100%, 50% ${p}px, ${2 * o - p}px 100%, ${p}px 100%)`, S = `path('M ${a} ${i} A ${n} ${n} 0 0 0 ${s} ${c} L ${l} ${u} A ${r} ${r} 0 0 1 ${d} ${v} L ${h} ${m} A ${n} ${n} 0 0 0 ${g} ${f} Z')`;
  return {
    arrowShadowWidth: y,
    arrowPath: S,
    arrowPolygon: C
  };
}
const B6 = (e, t, r) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: o,
    arrowPath: a,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: c
  } = e;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: c(n).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [o, a]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${C0(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, t1 = 8;
function ka(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? t1 : n
  };
}
function cn(e, t) {
  return e ? t : {};
}
function r1(e, t, r) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: o,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = r || {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, B6(e, t, o)), {
        "&:before": {
          background: t
        }
      })]
    }, cn(!!c.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${C0(i)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), cn(!!c.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${C0(i)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), cn(!!c.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: a
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: a
      }
    })), cn(!!c.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: a
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function z6(e, t, r, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = n && typeof n == "object" ? n : {}, a = {};
  switch (e) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + r, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + r, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, a), o);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const cs = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, W6 = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, U6 = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function G6(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: o,
    borderRadius: a,
    visibleFirst: i
  } = e, s = t / 2, c = {}, l = ka({
    contentRadius: a,
    limitVerticalRadius: !0
  });
  return Object.keys(cs).forEach((u) => {
    const d = n && W6[u] || cs[u], v = Object.assign(Object.assign({}, d), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[u] = v, U6.has(u) && (v.autoArrow = !1), u) {
      case "top":
      case "topLeft":
      case "topRight":
        v.offset[1] = -s - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        v.offset[1] = s + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        v.offset[0] = -s - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        v.offset[0] = s + o;
        break;
    }
    if (n)
      switch (u) {
        case "topLeft":
        case "bottomLeft":
          v.offset[0] = -l.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          v.offset[0] = l.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          v.offset[1] = -l.arrowOffsetHorizontal * 2 + s;
          break;
        case "leftBottom":
        case "rightBottom":
          v.offset[1] = l.arrowOffsetHorizontal * 2 - s;
          break;
      }
    v.overflow = z6(u, l, t, r), i && (v.htmlRegion = "visibleFirst");
  }), c;
}
const q6 = (e) => {
  const {
    calc: t,
    componentCls: r,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: o,
    tooltipBg: a,
    tooltipBorderRadius: i,
    zIndexPopup: s,
    controlHeight: c,
    boxShadowSecondary: l,
    paddingSM: u,
    paddingXS: d,
    arrowOffsetHorizontal: v,
    sizePopupArrow: h
  } = e, m = t(i).add(h).add(v).equal(), g = t(i).mul(2).add(h).equal();
  return [
    {
      [r]: Object.assign(Object.assign(Object.assign(Object.assign({}, xa(e)), {
        position: "absolute",
        zIndex: s,
        display: "block",
        width: "max-content",
        maxWidth: n,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${r}-inner`]: {
          minWidth: g,
          minHeight: c,
          padding: `${C0(e.calc(u).div(2).equal())} ${C0(d)}`,
          color: `var(--ant-tooltip-color, ${o})`,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: i,
          boxShadow: l,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: m
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${r}-inner`]: {
            borderRadius: e.min(i, t1)
          }
        },
        [`${r}-content`]: {
          position: "relative"
        }
      }), l3(e, (f, {
        darkColor: y
      }) => ({
        [`&${r}-${f}`]: {
          [`${r}-inner`]: {
            backgroundColor: y
          },
          [`${r}-arrow`]: {
            "--antd-arrow-background-color": y
          }
        }
      }))), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    r1(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${r}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, X6 = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, ka({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), e1(sr(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), n1 = (e, t = !0) => Ea("Tooltip", (n) => {
  const {
    borderRadius: o,
    colorTextLightSolid: a,
    colorBgSpotlight: i
  } = n, s = sr(n, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: a,
    tooltipBorderRadius: o,
    tooltipBg: i
  });
  return [q6(s), Vc(n, "zoom-big-fast")];
}, X6, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(e), Y6 = Dr.map((e) => `${e}-inverse`);
function K6(e, t = !0) {
  return t ? [].concat(ve(Y6), ve(Dr)).includes(e) : Dr.includes(e);
}
function o1(e, t) {
  const r = K6(t), n = Ne({
    [`${e}-${t}`]: t && r
  }), o = {}, a = {}, i = C5(t).toRgb(), c = (0.299 * i.r + 0.587 * i.g + 0.114 * i.b) / 255 < 0.5 ? "#FFF" : "#000";
  return t && !r && (o.background = t, o["--ant-tooltip-color"] = c, a["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: o,
    arrowStyle: a
  };
}
const Z6 = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: o,
    color: a,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = b.useContext(Or), c = s("tooltip", t), [l, u, d] = n1(c), v = o1(c, a), h = v.arrowStyle, m = Object.assign(Object.assign({}, i), v.overlayStyle), g = Ne(u, d, c, `${c}-pure`, `${c}-placement-${n}`, r, v.className);
  return l(/* @__PURE__ */ b.createElement("div", {
    className: g,
    style: h
  }, /* @__PURE__ */ b.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ b.createElement(Ta, Object.assign({}, e, {
    className: u,
    prefixCls: c,
    overlayInnerStyle: m
  }), o)));
}, Q6 = Z6;
var J6 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const e4 = /* @__PURE__ */ b.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: o,
    openClassName: a,
    getTooltipContainer: i,
    color: s,
    overlayInnerStyle: c,
    children: l,
    afterOpenChange: u,
    afterVisibleChange: d,
    destroyTooltipOnHide: v,
    destroyOnHidden: h,
    arrow: m = !0,
    title: g,
    overlay: f,
    builtinPlacements: y,
    arrowPointAtCenter: p = !1,
    autoAdjustOverflow: C = !0,
    motion: S,
    getPopupContainer: w,
    placement: x = "top",
    mouseEnterDelay: E = 0.1,
    mouseLeaveDelay: _ = 0.1,
    overlayStyle: P,
    rootClassName: R,
    overlayClassName: T,
    styles: F,
    classNames: k
  } = e, D = J6(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), $ = !!m, [, L] = wa(), {
    getPopupContainer: I,
    getPrefixCls: H,
    direction: B,
    className: q,
    style: U,
    classNames: V,
    styles: Q
  } = Sa("tooltip"), K = Ca("Tooltip"), X = b.useRef(null), z = () => {
    var _e;
    (_e = X.current) === null || _e === void 0 || _e.forceAlign();
  };
  b.useImperativeHandle(t, () => {
    var _e, Ce;
    return {
      forceAlign: z,
      forcePopupAlign: () => {
        K.deprecated(!1, "forcePopupAlign", "forceAlign"), z();
      },
      nativeElement: (_e = X.current) === null || _e === void 0 ? void 0 : _e.nativeElement,
      popupElement: (Ce = X.current) === null || Ce === void 0 ? void 0 : Ce.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([_e, Ce]) => {
    K.deprecated(!(_e in e), _e, Ce);
  }), process.env.NODE_ENV !== "production" && K(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && K(!m || typeof m == "boolean" || !("arrowPointAtCenter" in m), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [J, ne] = On(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), ce = !g && !f && g !== 0, oe = (_e) => {
    var Ce, Be;
    ne(ce ? !1 : _e), ce || ((Ce = e.onOpenChange) === null || Ce === void 0 || Ce.call(e, _e), (Be = e.onVisibleChange) === null || Be === void 0 || Be.call(e, _e));
  }, ie = b.useMemo(() => {
    var _e, Ce;
    let Be = p;
    return typeof m == "object" && (Be = (Ce = (_e = m.pointAtCenter) !== null && _e !== void 0 ? _e : m.arrowPointAtCenter) !== null && Ce !== void 0 ? Ce : p), y || G6({
      arrowPointAtCenter: Be,
      autoAdjustOverflow: C,
      arrowWidth: $ ? L.sizePopupArrow : 0,
      borderRadius: L.borderRadius,
      offset: L.marginXXS,
      visibleFirst: !0
    });
  }, [p, m, y, L]), he = b.useMemo(() => g === 0 ? g : f || g || "", [f, g]), we = /* @__PURE__ */ b.createElement(P6, {
    space: !0
  }, typeof he == "function" ? he() : he), j = H("tooltip", o), le = H(), Z = e["data-popover-inject"];
  let ae = J;
  !("open" in e) && !("visible" in e) && ce && (ae = !1);
  const ge = /* @__PURE__ */ b.isValidElement(l) && !k3(l) ? l : /* @__PURE__ */ b.createElement("span", null, l), me = ge.props, Ye = !me.className || typeof me.className == "string" ? Ne(me.className, a || `${j}-open`) : me.className, [ee, fe, pe] = n1(j, !Z), re = o1(j, s), Me = re.arrowStyle, Fe = Ne(T, {
    [`${j}-rtl`]: B === "rtl"
  }, re.className, R, fe, pe, q, V.root, k == null ? void 0 : k.root), We = Ne(V.body, k == null ? void 0 : k.body), [$e, De] = I3("Tooltip", D.zIndex), r0 = /* @__PURE__ */ b.createElement(V6, Object.assign({}, D, {
    zIndex: $e,
    showArrow: $,
    placement: x,
    mouseEnterDelay: E,
    mouseLeaveDelay: _,
    prefixCls: j,
    classNames: {
      root: Fe,
      body: We
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Me), Q.root), U), P), F == null ? void 0 : F.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, Q.body), c), F == null ? void 0 : F.body), re.overlayStyle)
    },
    getTooltipContainer: w || i || I,
    ref: X,
    builtinPlacements: ie,
    overlay: we,
    visible: ae,
    onVisibleChange: oe,
    afterVisibleChange: u ?? d,
    arrowContent: /* @__PURE__ */ b.createElement("span", {
      className: `${j}-arrow-content`
    }),
    motion: {
      motionName: Dc(le, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: h ?? !!v
  }), ae ? _c(ge, {
    className: Ye
  }) : ge);
  return ee(/* @__PURE__ */ b.createElement(Tc.Provider, {
    value: De
  }, r0));
}), Oa = e4;
process.env.NODE_ENV !== "production" && (Oa.displayName = "Tooltip");
Oa._InternalPanelDoNotUseOrYouWillBeFired = Q6;
const a1 = Oa, t4 = (e) => {
  const {
    componentCls: t,
    popoverColor: r,
    titleMinWidth: n,
    fontWeightStrong: o,
    innerPadding: a,
    boxShadowSecondary: i,
    colorTextHeading: s,
    borderRadiusLG: c,
    zIndexPopup: l,
    titleMarginBottom: u,
    colorBgElevated: d,
    popoverBg: v,
    titleBorderBottom: h,
    innerContentPadding: m,
    titlePadding: g
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, xa(e)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: l,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "--antd-arrow-background-color": d,
        width: "max-content",
        maxWidth: "100vw",
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${t}-content`]: {
          position: "relative"
        },
        [`${t}-inner`]: {
          backgroundColor: v,
          backgroundClip: "padding-box",
          borderRadius: c,
          boxShadow: i,
          padding: a
        },
        [`${t}-title`]: {
          minWidth: n,
          marginBottom: u,
          color: s,
          fontWeight: o,
          borderBottom: h,
          padding: g
        },
        [`${t}-inner-content`]: {
          color: r,
          padding: m
        }
      })
    },
    // Arrow Style
    r1(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow,
        display: "inline-block",
        [`${t}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
}, r4 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Dr.map((r) => {
      const n = e[`${r}6`];
      return {
        [`&${t}-${r}`]: {
          "--antd-arrow-background-color": n,
          [`${t}-inner`]: {
            backgroundColor: n
          },
          [`${t}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
}, n4 = (e) => {
  const {
    lineWidth: t,
    controlHeight: r,
    fontHeight: n,
    padding: o,
    wireframe: a,
    zIndexPopupBase: i,
    borderRadiusLG: s,
    marginXS: c,
    lineType: l,
    colorSplit: u,
    paddingSM: d
  } = e, v = r - n, h = v / 2, m = v / 2 - t, g = o;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: i + 30
  }, e1(e)), ka({
    contentRadius: s,
    limitVerticalRadius: !0
  })), {
    // internal
    innerPadding: a ? 0 : 12,
    titleMarginBottom: a ? 0 : c,
    titlePadding: a ? `${h}px ${g}px ${m}px` : 0,
    titleBorderBottom: a ? `${t}px ${l} ${u}` : "none",
    innerContentPadding: a ? `${d}px ${g}px` : 0
  });
}, i1 = Ea("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: r
  } = e, n = sr(e, {
    popoverBg: t,
    popoverColor: r
  });
  return [t4(n), r4(n), Vc(n, "zoom-big")];
}, n4, {
  resetStyle: !1,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var o4 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const s1 = ({
  title: e,
  content: t,
  prefixCls: r
}) => !e && !t ? null : /* @__PURE__ */ b.createElement(b.Fragment, null, e && /* @__PURE__ */ b.createElement("div", {
  className: `${r}-title`
}, e), t && /* @__PURE__ */ b.createElement("div", {
  className: `${r}-inner-content`
}, t)), a4 = (e) => {
  const {
    hashId: t,
    prefixCls: r,
    className: n,
    style: o,
    placement: a = "top",
    title: i,
    content: s,
    children: c
  } = e, l = wn(i), u = wn(s), d = Ne(t, r, `${r}-pure`, `${r}-placement-${a}`, n);
  return /* @__PURE__ */ b.createElement("div", {
    className: d,
    style: o
  }, /* @__PURE__ */ b.createElement("div", {
    className: `${r}-arrow`
  }), /* @__PURE__ */ b.createElement(Ta, Object.assign({}, e, {
    className: t,
    prefixCls: r
  }), c || /* @__PURE__ */ b.createElement(s1, {
    prefixCls: r,
    title: l,
    content: u
  })));
}, i4 = (e) => {
  const {
    prefixCls: t,
    className: r
  } = e, n = o4(e, ["prefixCls", "className"]), {
    getPrefixCls: o
  } = b.useContext(Or), a = o("popover", t), [i, s, c] = i1(a);
  return i(/* @__PURE__ */ b.createElement(a4, Object.assign({}, n, {
    prefixCls: a,
    hashId: s,
    className: Ne(r, c)
  })));
}, s4 = i4;
var c4 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const l4 = /* @__PURE__ */ b.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: o,
    title: a,
    content: i,
    overlayClassName: s,
    placement: c = "top",
    trigger: l = "hover",
    children: u,
    mouseEnterDelay: d = 0.1,
    mouseLeaveDelay: v = 0.1,
    onOpenChange: h,
    overlayStyle: m = {},
    styles: g,
    classNames: f
  } = e, y = c4(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle", "styles", "classNames"]), {
    getPrefixCls: p,
    className: C,
    style: S,
    classNames: w,
    styles: x
  } = Sa("popover"), E = p("popover", o), [_, P, R] = i1(E), T = p(), F = Ne(s, P, R, C, w.root, f == null ? void 0 : f.root), k = Ne(w.body, f == null ? void 0 : f.body), [D, $] = On(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), L = (U, V) => {
    $(U, !0), h == null || h(U, V);
  }, I = (U) => {
    U.keyCode === se.ESC && L(!1, U);
  }, H = (U) => {
    L(U);
  }, B = wn(a), q = wn(i);
  return _(/* @__PURE__ */ b.createElement(a1, Object.assign({
    placement: c,
    trigger: l,
    mouseEnterDelay: d,
    mouseLeaveDelay: v
  }, y, {
    prefixCls: E,
    classNames: {
      root: F,
      body: k
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign({}, x.root), S), m), g == null ? void 0 : g.root),
      body: Object.assign(Object.assign({}, x.body), g == null ? void 0 : g.body)
    },
    ref: t,
    open: D,
    onOpenChange: H,
    overlay: B || q ? /* @__PURE__ */ b.createElement(s1, {
      prefixCls: E,
      title: B,
      content: q
    }) : null,
    transitionName: Dc(T, "zoom-big", y.transitionName),
    "data-popover-inject": !0
  }), _c(u, {
    onKeyDown: (U) => {
      var V, Q;
      /* @__PURE__ */ hs(u) && ((Q = u == null ? void 0 : (V = u.props).onKeyDown) === null || Q === void 0 || Q.call(V, U)), I(U);
    }
  })));
}), Aa = l4;
Aa._InternalPanelDoNotUseOrYouWillBeFired = s4;
process.env.NODE_ENV !== "production" && (Aa.displayName = "Popover");
const u4 = Aa;
function oa(e, t, r) {
  return (e - t) / (r - t);
}
function Da(e, t, r, n) {
  var o = oa(t, r, n), a = {};
  switch (e) {
    case "rtl":
      a.right = "".concat(o * 100, "%"), a.transform = "translateX(50%)";
      break;
    case "btt":
      a.bottom = "".concat(o * 100, "%"), a.transform = "translateY(50%)";
      break;
    case "ttb":
      a.top = "".concat(o * 100, "%"), a.transform = "translateY(-50%)";
      break;
    default:
      a.left = "".concat(o * 100, "%"), a.transform = "translateX(-50%)";
      break;
  }
  return a;
}
function At(e, t) {
  return Array.isArray(e) ? e[t] : e;
}
var jt = /* @__PURE__ */ b.createContext({
  min: 0,
  max: 0,
  direction: "ltr",
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: !0,
  styles: {},
  classNames: {}
}), f4 = /* @__PURE__ */ b.createContext({}), d4 = ["prefixCls", "value", "valueIndex", "onStartMove", "onDelete", "style", "render", "dragging", "draggingDelete", "onOffsetChange", "onChangeComplete", "onFocus", "onMouseEnter"], aa = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.value, o = e.valueIndex, a = e.onStartMove, i = e.onDelete, s = e.style, c = e.render, l = e.dragging, u = e.draggingDelete, d = e.onOffsetChange, v = e.onChangeComplete, h = e.onFocus, m = e.onMouseEnter, g = lt(e, d4), f = b.useContext(jt), y = f.min, p = f.max, C = f.direction, S = f.disabled, w = f.keyboard, x = f.range, E = f.tabIndex, _ = f.ariaLabelForHandle, P = f.ariaLabelledByForHandle, R = f.ariaRequired, T = f.ariaValueTextFormatterForHandle, F = f.styles, k = f.classNames, D = "".concat(r, "-handle"), $ = function(X) {
    S || a(X, o);
  }, L = function(X) {
    h == null || h(X, o);
  }, I = function(X) {
    m(X, o);
  }, H = function(X) {
    if (!S && w) {
      var z = null;
      switch (X.which || X.keyCode) {
        case se.LEFT:
          z = C === "ltr" || C === "btt" ? -1 : 1;
          break;
        case se.RIGHT:
          z = C === "ltr" || C === "btt" ? 1 : -1;
          break;
        case se.UP:
          z = C !== "ttb" ? 1 : -1;
          break;
        case se.DOWN:
          z = C !== "ttb" ? -1 : 1;
          break;
        case se.HOME:
          z = "min";
          break;
        case se.END:
          z = "max";
          break;
        case se.PAGE_UP:
          z = 2;
          break;
        case se.PAGE_DOWN:
          z = -2;
          break;
        case se.BACKSPACE:
        case se.DELETE:
          i == null || i(o);
          break;
      }
      z !== null && (X.preventDefault(), d(z, o));
    }
  }, B = function(X) {
    switch (X.which || X.keyCode) {
      case se.LEFT:
      case se.RIGHT:
      case se.UP:
      case se.DOWN:
      case se.HOME:
      case se.END:
      case se.PAGE_UP:
      case se.PAGE_DOWN:
        v == null || v();
        break;
    }
  }, q = Da(C, n, y, p), U = {};
  if (o !== null) {
    var V;
    U = {
      tabIndex: S ? null : At(E, o),
      role: "slider",
      "aria-valuemin": y,
      "aria-valuemax": p,
      "aria-valuenow": n,
      "aria-disabled": S,
      "aria-label": At(_, o),
      "aria-labelledby": At(P, o),
      "aria-required": At(R, o),
      "aria-valuetext": (V = At(T, o)) === null || V === void 0 ? void 0 : V(n),
      "aria-orientation": C === "ltr" || C === "rtl" ? "horizontal" : "vertical",
      onMouseDown: $,
      onTouchStart: $,
      onFocus: L,
      onMouseEnter: I,
      onKeyDown: H,
      onKeyUp: B
    };
  }
  var Q = /* @__PURE__ */ b.createElement("div", N0({
    ref: t,
    className: Ne(D, O(O(O({}, "".concat(D, "-").concat(o + 1), o !== null && x), "".concat(D, "-dragging"), l), "".concat(D, "-dragging-delete"), u), k.handle),
    style: N(N(N({}, q), s), F.handle)
  }, U, g));
  return c && (Q = c(Q, {
    index: o,
    prefixCls: r,
    value: n,
    dragging: l,
    draggingDelete: u
  })), Q;
});
process.env.NODE_ENV !== "production" && (aa.displayName = "Handle");
var v4 = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "activeHandleRender", "draggingIndex", "draggingDelete", "onFocus"], c1 = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.onStartMove, a = e.onOffsetChange, i = e.values, s = e.handleRender, c = e.activeHandleRender, l = e.draggingIndex, u = e.draggingDelete, d = e.onFocus, v = lt(e, v4), h = b.useRef({}), m = b.useState(!1), g = Y(m, 2), f = g[0], y = g[1], p = b.useState(-1), C = Y(p, 2), S = C[0], w = C[1], x = function(T) {
    w(T), y(!0);
  }, E = function(T, F) {
    x(F), d == null || d(T);
  }, _ = function(T, F) {
    x(F);
  };
  b.useImperativeHandle(t, function() {
    return {
      focus: function(T) {
        var F;
        (F = h.current[T]) === null || F === void 0 || F.focus();
      },
      hideHelp: function() {
        b1(function() {
          y(!1);
        });
      }
    };
  });
  var P = N({
    prefixCls: r,
    onStartMove: o,
    onOffsetChange: a,
    render: s,
    onFocus: E,
    onMouseEnter: _
  }, v);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, i.map(function(R, T) {
    var F = l === T;
    return /* @__PURE__ */ b.createElement(aa, N0({
      ref: function(D) {
        D ? h.current[T] = D : delete h.current[T];
      },
      dragging: F,
      draggingDelete: F && u,
      style: At(n, T),
      key: T,
      value: R,
      valueIndex: T
    }, P));
  }), c && f && /* @__PURE__ */ b.createElement(aa, N0({
    key: "a11y"
  }, P, {
    value: i[S],
    valueIndex: null,
    dragging: l !== -1,
    draggingDelete: u,
    render: c,
    style: {
      pointerEvents: "none"
    },
    tabIndex: null,
    "aria-hidden": !0
  })));
});
process.env.NODE_ENV !== "production" && (c1.displayName = "Handles");
var h4 = function(t) {
  var r = t.prefixCls, n = t.style, o = t.children, a = t.value, i = t.onClick, s = b.useContext(jt), c = s.min, l = s.max, u = s.direction, d = s.includedStart, v = s.includedEnd, h = s.included, m = "".concat(r, "-text"), g = Da(u, a, c, l);
  return /* @__PURE__ */ b.createElement("span", {
    className: Ne(m, O({}, "".concat(m, "-active"), h && d <= a && a <= v)),
    style: N(N({}, g), n),
    onMouseDown: function(y) {
      y.stopPropagation();
    },
    onClick: function() {
      i(a);
    }
  }, o);
}, m4 = function(t) {
  var r = t.prefixCls, n = t.marks, o = t.onClick, a = "".concat(r, "-mark");
  return n.length ? /* @__PURE__ */ b.createElement("div", {
    className: a
  }, n.map(function(i) {
    var s = i.value, c = i.style, l = i.label;
    return /* @__PURE__ */ b.createElement(h4, {
      key: s,
      prefixCls: a,
      style: c,
      value: s,
      onClick: o
    }, l);
  })) : null;
}, g4 = function(t) {
  var r = t.prefixCls, n = t.value, o = t.style, a = t.activeStyle, i = b.useContext(jt), s = i.min, c = i.max, l = i.direction, u = i.included, d = i.includedStart, v = i.includedEnd, h = "".concat(r, "-dot"), m = u && d <= n && n <= v, g = N(N({}, Da(l, n, s, c)), typeof o == "function" ? o(n) : o);
  return m && (g = N(N({}, g), typeof a == "function" ? a(n) : a)), /* @__PURE__ */ b.createElement("span", {
    className: Ne(h, O({}, "".concat(h, "-active"), m)),
    style: g
  });
}, p4 = function(t) {
  var r = t.prefixCls, n = t.marks, o = t.dots, a = t.style, i = t.activeStyle, s = b.useContext(jt), c = s.min, l = s.max, u = s.step, d = b.useMemo(function() {
    var v = /* @__PURE__ */ new Set();
    if (n.forEach(function(m) {
      v.add(m.value);
    }), o && u !== null)
      for (var h = c; h <= l; )
        v.add(h), h += u;
    return Array.from(v);
  }, [c, l, u, o, n]);
  return /* @__PURE__ */ b.createElement("div", {
    className: "".concat(r, "-step")
  }, d.map(function(v) {
    return /* @__PURE__ */ b.createElement(g4, {
      prefixCls: r,
      key: v,
      value: v,
      style: a,
      activeStyle: i
    });
  }));
}, ls = function(t) {
  var r = t.prefixCls, n = t.style, o = t.start, a = t.end, i = t.index, s = t.onStartMove, c = t.replaceCls, l = b.useContext(jt), u = l.direction, d = l.min, v = l.max, h = l.disabled, m = l.range, g = l.classNames, f = "".concat(r, "-track"), y = oa(o, d, v), p = oa(a, d, v), C = function(E) {
    !h && s && s(E, -1);
  }, S = {};
  switch (u) {
    case "rtl":
      S.right = "".concat(y * 100, "%"), S.width = "".concat(p * 100 - y * 100, "%");
      break;
    case "btt":
      S.bottom = "".concat(y * 100, "%"), S.height = "".concat(p * 100 - y * 100, "%");
      break;
    case "ttb":
      S.top = "".concat(y * 100, "%"), S.height = "".concat(p * 100 - y * 100, "%");
      break;
    default:
      S.left = "".concat(y * 100, "%"), S.width = "".concat(p * 100 - y * 100, "%");
  }
  var w = c || Ne(f, O(O({}, "".concat(f, "-").concat(i + 1), i !== null && m), "".concat(r, "-track-draggable"), s), g.track);
  return /* @__PURE__ */ b.createElement("div", {
    className: w,
    style: N(N({}, S), n),
    onMouseDown: C,
    onTouchStart: C
  });
}, y4 = function(t) {
  var r = t.prefixCls, n = t.style, o = t.values, a = t.startPoint, i = t.onStartMove, s = b.useContext(jt), c = s.included, l = s.range, u = s.min, d = s.styles, v = s.classNames, h = b.useMemo(function() {
    if (!l) {
      if (o.length === 0)
        return [];
      var g = a ?? u, f = o[0];
      return [{
        start: Math.min(g, f),
        end: Math.max(g, f)
      }];
    }
    for (var y = [], p = 0; p < o.length - 1; p += 1)
      y.push({
        start: o[p],
        end: o[p + 1]
      });
    return y;
  }, [o, l, a, u]);
  if (!c)
    return null;
  var m = h != null && h.length && (v.tracks || d.tracks) ? /* @__PURE__ */ b.createElement(ls, {
    index: null,
    prefixCls: r,
    start: h[0].start,
    end: h[h.length - 1].end,
    replaceCls: Ne(v.tracks, "".concat(r, "-tracks")),
    style: d.tracks
  }) : null;
  return /* @__PURE__ */ b.createElement(b.Fragment, null, m, h.map(function(g, f) {
    var y = g.start, p = g.end;
    return /* @__PURE__ */ b.createElement(ls, {
      index: f,
      prefixCls: r,
      style: N(N({}, At(n, f)), d.track),
      start: y,
      end: p,
      key: f,
      onStartMove: i
    });
  }));
}, b4 = 130;
function us(e) {
  var t = "targetTouches" in e ? e.targetTouches[0] : e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function C4(e, t, r, n, o, a, i, s, c, l, u) {
  var d = b.useState(null), v = Y(d, 2), h = v[0], m = v[1], g = b.useState(-1), f = Y(g, 2), y = f[0], p = f[1], C = b.useState(!1), S = Y(C, 2), w = S[0], x = S[1], E = b.useState(r), _ = Y(E, 2), P = _[0], R = _[1], T = b.useState(r), F = Y(T, 2), k = F[0], D = F[1], $ = b.useRef(null), L = b.useRef(null), I = b.useRef(null), H = b.useContext(f4), B = H.onDragStart, q = H.onDragChange;
  D0(function() {
    y === -1 && R(r);
  }, [r, y]), b.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", $.current), document.removeEventListener("mouseup", L.current), I.current && (I.current.removeEventListener("touchmove", $.current), I.current.removeEventListener("touchend", L.current));
    };
  }, []);
  var U = function(z, J, ne) {
    J !== void 0 && m(J), R(z);
    var ce = z;
    ne && (ce = z.filter(function(oe, ie) {
      return ie !== y;
    })), i(ce), q && q({
      rawValues: z,
      deleteIndex: ne ? y : -1,
      draggingIndex: y,
      draggingValue: J
    });
  }, V = R0(function(X, z, J) {
    if (X === -1) {
      var ne = k[0], ce = k[k.length - 1], oe = n - ne, ie = o - ce, he = z * (o - n);
      he = Math.max(he, oe), he = Math.min(he, ie);
      var we = a(ne + he);
      he = we - ne;
      var j = k.map(function(ge) {
        return ge + he;
      });
      U(j);
    } else {
      var le = (o - n) * z, Z = ve(P);
      Z[X] = k[X];
      var ae = c(Z, le, X, "dist");
      U(ae.values, ae.value, J);
    }
  }), Q = function(z, J, ne) {
    z.stopPropagation();
    var ce = ne || r, oe = ce[J];
    p(J), m(oe), D(ce), R(ce), x(!1);
    var ie = us(z), he = ie.pageX, we = ie.pageY, j = !1;
    B && B({
      rawValues: ce,
      draggingIndex: J,
      draggingValue: oe
    });
    var le = function(ge) {
      ge.preventDefault();
      var me = us(ge), Ye = me.pageX, ee = me.pageY, fe = Ye - he, pe = ee - we, re = e.current.getBoundingClientRect(), Me = re.width, Fe = re.height, We, $e;
      switch (t) {
        case "btt":
          We = -pe / Fe, $e = fe;
          break;
        case "ttb":
          We = pe / Fe, $e = fe;
          break;
        case "rtl":
          We = -fe / Me, $e = pe;
          break;
        default:
          We = fe / Me, $e = pe;
      }
      j = l ? Math.abs($e) > b4 && u < P.length : !1, x(j), V(J, We, j);
    }, Z = function ae(ge) {
      ge.preventDefault(), document.removeEventListener("mouseup", ae), document.removeEventListener("mousemove", le), I.current && (I.current.removeEventListener("touchmove", $.current), I.current.removeEventListener("touchend", L.current)), $.current = null, L.current = null, I.current = null, s(j), p(-1), x(!1);
    };
    document.addEventListener("mouseup", Z), document.addEventListener("mousemove", le), z.currentTarget.addEventListener("touchend", Z), z.currentTarget.addEventListener("touchmove", le), $.current = le, L.current = Z, I.current = z.currentTarget;
  }, K = b.useMemo(function() {
    var X = ve(r).sort(function(oe, ie) {
      return oe - ie;
    }), z = ve(P).sort(function(oe, ie) {
      return oe - ie;
    }), J = {};
    z.forEach(function(oe) {
      J[oe] = (J[oe] || 0) + 1;
    }), X.forEach(function(oe) {
      J[oe] = (J[oe] || 0) - 1;
    });
    var ne = l ? 1 : 0, ce = Object.values(J).reduce(function(oe, ie) {
      return oe + Math.abs(ie);
    }, 0);
    return ce <= ne ? P : r;
  }, [r, P, l]);
  return [y, h, w, K, Q];
}
function S4(e, t, r, n, o, a) {
  var i = b.useCallback(function(h) {
    return Math.max(e, Math.min(t, h));
  }, [e, t]), s = b.useCallback(function(h) {
    if (r !== null) {
      var m = e + Math.round((i(h) - e) / r) * r, g = function(C) {
        return (String(C).split(".")[1] || "").length;
      }, f = Math.max(g(r), g(t), g(e)), y = Number(m.toFixed(f));
      return e <= y && y <= t ? y : null;
    }
    return null;
  }, [r, e, t, i]), c = b.useCallback(function(h) {
    var m = i(h), g = n.map(function(p) {
      return p.value;
    });
    r !== null && g.push(s(h)), g.push(e, t);
    var f = g[0], y = t - e;
    return g.forEach(function(p) {
      var C = Math.abs(m - p);
      C <= y && (f = p, y = C);
    }), f;
  }, [e, t, n, r, i, s]), l = function h(m, g, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof g == "number") {
      var p, C = m[f], S = C + g, w = [];
      n.forEach(function(R) {
        w.push(R.value);
      }), w.push(e, t), w.push(s(C));
      var x = g > 0 ? 1 : -1;
      y === "unit" ? w.push(s(C + x * r)) : w.push(s(S)), w = w.filter(function(R) {
        return R !== null;
      }).filter(function(R) {
        return g < 0 ? R <= C : R >= C;
      }), y === "unit" && (w = w.filter(function(R) {
        return R !== C;
      }));
      var E = y === "unit" ? C : S;
      p = w[0];
      var _ = Math.abs(p - E);
      if (w.forEach(function(R) {
        var T = Math.abs(R - E);
        T < _ && (p = R, _ = T);
      }), p === void 0)
        return g < 0 ? e : t;
      if (y === "dist")
        return p;
      if (Math.abs(g) > 1) {
        var P = ve(m);
        return P[f] = p, h(P, g - x, f, y);
      }
      return p;
    } else {
      if (g === "min")
        return e;
      if (g === "max")
        return t;
    }
  }, u = function(m, g, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = m[f], C = l(m, g, f, y);
    return {
      value: C,
      changed: C !== p
    };
  }, d = function(m) {
    return a === null && m === 0 || typeof a == "number" && m < a;
  }, v = function(m, g, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = m.map(c), C = p[f], S = l(p, g, f, y);
    if (p[f] = S, o === !1) {
      var w = a || 0;
      f > 0 && p[f - 1] !== C && (p[f] = Math.max(p[f], p[f - 1] + w)), f < p.length - 1 && p[f + 1] !== C && (p[f] = Math.min(p[f], p[f + 1] - w));
    } else if (typeof a == "number" || a === null) {
      for (var x = f + 1; x < p.length; x += 1)
        for (var E = !0; d(p[x] - p[x - 1]) && E; ) {
          var _ = u(p, 1, x);
          p[x] = _.value, E = _.changed;
        }
      for (var P = f; P > 0; P -= 1)
        for (var R = !0; d(p[P] - p[P - 1]) && R; ) {
          var T = u(p, -1, P - 1);
          p[P - 1] = T.value, R = T.changed;
        }
      for (var F = p.length - 1; F > 0; F -= 1)
        for (var k = !0; d(p[F] - p[F - 1]) && k; ) {
          var D = u(p, -1, F - 1);
          p[F - 1] = D.value, k = D.changed;
        }
      for (var $ = 0; $ < p.length - 1; $ += 1)
        for (var L = !0; d(p[$ + 1] - p[$]) && L; ) {
          var I = u(p, 1, $ + 1);
          p[$ + 1] = I.value, L = I.changed;
        }
    }
    return {
      value: p[f],
      values: p
    };
  };
  return [c, v];
}
function w4(e) {
  return J0(function() {
    if (e === !0 || !e)
      return [!!e, !1, !1, 0];
    var t = e.editable, r = e.draggableTrack, n = e.minCount, o = e.maxCount;
    return process.env.NODE_ENV !== "production" && $t(!t || !r, "`editable` can not work with `draggableTrack`."), [!0, t, !t && r, n || 0, o];
  }, [e]);
}
var l1 = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-slider" : r, o = e.className, a = e.style, i = e.classNames, s = e.styles, c = e.id, l = e.disabled, u = l === void 0 ? !1 : l, d = e.keyboard, v = d === void 0 ? !0 : d, h = e.autoFocus, m = e.onFocus, g = e.onBlur, f = e.min, y = f === void 0 ? 0 : f, p = e.max, C = p === void 0 ? 100 : p, S = e.step, w = S === void 0 ? 1 : S, x = e.value, E = e.defaultValue, _ = e.range, P = e.count, R = e.onChange, T = e.onBeforeChange, F = e.onAfterChange, k = e.onChangeComplete, D = e.allowCross, $ = D === void 0 ? !0 : D, L = e.pushable, I = L === void 0 ? !1 : L, H = e.reverse, B = e.vertical, q = e.included, U = q === void 0 ? !0 : q, V = e.startPoint, Q = e.trackStyle, K = e.handleStyle, X = e.railStyle, z = e.dotStyle, J = e.activeDotStyle, ne = e.marks, ce = e.dots, oe = e.handleRender, ie = e.activeHandleRender, he = e.track, we = e.tabIndex, j = we === void 0 ? 0 : we, le = e.ariaLabelForHandle, Z = e.ariaLabelledByForHandle, ae = e.ariaRequired, ge = e.ariaValueTextFormatterForHandle, me = b.useRef(null), Ye = b.useRef(null), ee = b.useMemo(function() {
    return B ? H ? "ttb" : "btt" : H ? "rtl" : "ltr";
  }, [H, B]), fe = w4(_), pe = Y(fe, 5), re = pe[0], Me = pe[1], Fe = pe[2], We = pe[3], $e = pe[4], De = b.useMemo(function() {
    return isFinite(y) ? y : 0;
  }, [y]), r0 = b.useMemo(function() {
    return isFinite(C) ? C : 100;
  }, [C]), _e = b.useMemo(function() {
    return w !== null && w <= 0 ? 1 : w;
  }, [w]), Ce = b.useMemo(function() {
    return typeof I == "boolean" ? I ? _e : !1 : I >= 0 ? I : !1;
  }, [I, _e]), Be = b.useMemo(function() {
    return Object.keys(ne || {}).map(function(Ae) {
      var de = ne[Ae], je = {
        value: Number(Ae)
      };
      return de && Re(de) === "object" && !/* @__PURE__ */ b.isValidElement(de) && ("label" in de || "style" in de) ? (je.style = de.style, je.label = de.label) : je.label = de, je;
    }).filter(function(Ae) {
      var de = Ae.label;
      return de || typeof de == "number";
    }).sort(function(Ae, de) {
      return Ae.value - de.value;
    });
  }, [ne]), Ke = S4(De, r0, _e, Be, $, Ce), l0 = Y(Ke, 2), u0 = l0[0], o0 = l0[1], f0 = On(E, {
    value: x
  }), w0 = Y(f0, 2), v0 = w0[0], b0 = w0[1], Ze = b.useMemo(function() {
    var Ae = v0 == null ? [] : Array.isArray(v0) ? v0 : [v0], de = Y(Ae, 1), je = de[0], e0 = je === void 0 ? De : je, m0 = v0 === null ? [] : [e0];
    if (re) {
      if (m0 = ve(Ae), P || v0 === void 0) {
        var B0 = P >= 0 ? P + 1 : 2;
        for (m0 = m0.slice(0, B0); m0.length < B0; ) {
          var I0;
          m0.push((I0 = m0[m0.length - 1]) !== null && I0 !== void 0 ? I0 : De);
        }
      }
      m0.sort(function(T0, k0) {
        return T0 - k0;
      });
    }
    return m0.forEach(function(T0, k0) {
      m0[k0] = u0(T0);
    }), m0;
  }, [v0, re, De, P, u0]), Qe = function(de) {
    return re ? de : de[0];
  }, i0 = R0(function(Ae) {
    var de = ve(Ae).sort(function(je, e0) {
      return je - e0;
    });
    R && !So(de, Ze, !0) && R(Qe(de)), b0(de);
  }), h0 = R0(function(Ae) {
    Ae && me.current.hideHelp();
    var de = Qe(Ze);
    F == null || F(de), a0(!F, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), k == null || k(de);
  }), n0 = function(de) {
    if (!(u || !Me || Ze.length <= We)) {
      var je = ve(Ze);
      je.splice(de, 1), T == null || T(Qe(je)), i0(je);
      var e0 = Math.max(0, de - 1);
      me.current.hideHelp(), me.current.focus(e0);
    }
  }, X0 = C4(Ye, ee, Ze, De, r0, u0, i0, h0, o0, Me, We), s0 = Y(X0, 5), ze = s0[0], Ue = s0[1], L0 = s0[2], $0 = s0[3], F0 = s0[4], vt = function(de, je) {
    if (!u) {
      var e0 = ve(Ze), m0 = 0, B0 = 0, I0 = r0 - De;
      Ze.forEach(function(H0, ot) {
        var V0 = Math.abs(de - H0);
        V0 <= I0 && (I0 = V0, m0 = ot), H0 < de && (B0 = ot);
      });
      var T0 = m0;
      Me && I0 !== 0 && (!$e || Ze.length < $e) ? (e0.splice(B0 + 1, 0, de), T0 = B0 + 1) : e0[m0] = de, re && !Ze.length && P === void 0 && e0.push(de);
      var k0 = Qe(e0);
      if (T == null || T(k0), i0(e0), je) {
        var z0, j0;
        (z0 = document.activeElement) === null || z0 === void 0 || (j0 = z0.blur) === null || j0 === void 0 || j0.call(z0), me.current.focus(T0), F0(je, T0, e0);
      } else
        F == null || F(k0), a0(!F, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), k == null || k(k0);
    }
  }, ht = function(de) {
    de.preventDefault();
    var je = Ye.current.getBoundingClientRect(), e0 = je.width, m0 = je.height, B0 = je.left, I0 = je.top, T0 = je.bottom, k0 = je.right, z0 = de.clientX, j0 = de.clientY, H0;
    switch (ee) {
      case "btt":
        H0 = (T0 - j0) / m0;
        break;
      case "ttb":
        H0 = (j0 - I0) / m0;
        break;
      case "rtl":
        H0 = (k0 - z0) / e0;
        break;
      default:
        H0 = (z0 - B0) / e0;
    }
    var ot = De + H0 * (r0 - De);
    vt(u0(ot), de);
  }, nt = b.useState(null), M = Y(nt, 2), W = M[0], te = M[1], ye = function(de, je) {
    if (!u) {
      var e0 = o0(Ze, de, je);
      T == null || T(Qe(Ze)), i0(e0.values), te(e0.value);
    }
  };
  b.useEffect(function() {
    if (W !== null) {
      var Ae = Ze.indexOf(W);
      Ae >= 0 && me.current.focus(Ae);
    }
    te(null);
  }, [W]);
  var ke = b.useMemo(function() {
    return Fe && _e === null ? (process.env.NODE_ENV !== "production" && a0(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : Fe;
  }, [Fe, _e]), Ie = R0(function(Ae, de) {
    F0(Ae, de), T == null || T(Qe(Ze));
  }), Ee = ze !== -1;
  b.useEffect(function() {
    if (!Ee) {
      var Ae = Ze.lastIndexOf(Ue);
      me.current.focus(Ae);
    }
  }, [Ee]);
  var Se = b.useMemo(function() {
    return ve($0).sort(function(Ae, de) {
      return Ae - de;
    });
  }, [$0]), c0 = b.useMemo(function() {
    return re ? [Se[0], Se[Se.length - 1]] : [De, Se[0]];
  }, [Se, re, De]), Ve = Y(c0, 2), Je = Ve[0], Ge = Ve[1];
  b.useImperativeHandle(t, function() {
    return {
      focus: function() {
        me.current.focus(0);
      },
      blur: function() {
        var de, je = document, e0 = je.activeElement;
        (de = Ye.current) !== null && de !== void 0 && de.contains(e0) && (e0 == null || e0.blur());
      }
    };
  }), b.useEffect(function() {
    h && me.current.focus(0);
  }, []);
  var O0 = b.useMemo(function() {
    return {
      min: De,
      max: r0,
      direction: ee,
      disabled: u,
      keyboard: v,
      step: _e,
      included: U,
      includedStart: Je,
      includedEnd: Ge,
      range: re,
      tabIndex: j,
      ariaLabelForHandle: le,
      ariaLabelledByForHandle: Z,
      ariaRequired: ae,
      ariaValueTextFormatterForHandle: ge,
      styles: s || {},
      classNames: i || {}
    };
  }, [De, r0, ee, u, v, _e, U, Je, Ge, re, j, le, Z, ae, ge, s, i]);
  return /* @__PURE__ */ b.createElement(jt.Provider, {
    value: O0
  }, /* @__PURE__ */ b.createElement("div", {
    ref: Ye,
    className: Ne(n, o, O(O(O(O({}, "".concat(n, "-disabled"), u), "".concat(n, "-vertical"), B), "".concat(n, "-horizontal"), !B), "".concat(n, "-with-marks"), Be.length)),
    style: a,
    onMouseDown: ht,
    id: c
  }, /* @__PURE__ */ b.createElement("div", {
    className: Ne("".concat(n, "-rail"), i == null ? void 0 : i.rail),
    style: N(N({}, X), s == null ? void 0 : s.rail)
  }), he !== !1 && /* @__PURE__ */ b.createElement(y4, {
    prefixCls: n,
    style: Q,
    values: Ze,
    startPoint: V,
    onStartMove: ke ? Ie : void 0
  }), /* @__PURE__ */ b.createElement(p4, {
    prefixCls: n,
    marks: Be,
    dots: ce,
    style: z,
    activeStyle: J
  }), /* @__PURE__ */ b.createElement(c1, {
    ref: me,
    prefixCls: n,
    style: K,
    values: $0,
    draggingIndex: ze,
    draggingDelete: L0,
    onStartMove: Ie,
    onOffsetChange: ye,
    onFocus: m,
    onBlur: g,
    handleRender: oe,
    activeHandleRender: ie,
    onChangeComplete: h0,
    onDelete: Me ? n0 : void 0
  }), /* @__PURE__ */ b.createElement(m4, {
    prefixCls: n,
    marks: Be,
    onClick: vt
  })));
});
process.env.NODE_ENV !== "production" && (l1.displayName = "Slider");
const x4 = /* @__PURE__ */ g1({}), E4 = x4, u1 = /* @__PURE__ */ b.forwardRef((e, t) => {
  const {
    open: r,
    draggingDelete: n,
    value: o
  } = e, a = G(null), i = r && !n, s = G(null);
  function c() {
    Ct.cancel(s.current), s.current = null;
  }
  function l() {
    s.current = Ct(() => {
      var u;
      (u = a.current) === null || u === void 0 || u.forceAlign(), s.current = null;
    });
  }
  return b.useEffect(() => (i ? l() : c(), c), [i, e.title, o]), /* @__PURE__ */ b.createElement(a1, Object.assign({
    ref: ua(a, t)
  }, e, {
    open: i
  }));
});
process.env.NODE_ENV !== "production" && (u1.displayName = "SliderTooltip");
const fs = u1, P4 = (e) => {
  const {
    componentCls: t,
    antCls: r,
    controlSize: n,
    dotSize: o,
    marginFull: a,
    marginPart: i,
    colorFillContentHover: s,
    handleColorDisabled: c,
    calc: l,
    handleSize: u,
    handleSizeHover: d,
    handleActiveColor: v,
    handleActiveOutlineColor: h,
    handleLineWidth: m,
    handleLineWidthHover: g,
    motionDurationMid: f
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, xa(e)), {
      position: "relative",
      height: n,
      margin: `${C0(i)} ${C0(a)}`,
      padding: 0,
      cursor: "pointer",
      touchAction: "none",
      "&-vertical": {
        margin: `${C0(a)} ${C0(i)}`
      },
      [`${t}-rail`]: {
        position: "absolute",
        backgroundColor: e.railBg,
        borderRadius: e.borderRadiusXS,
        transition: `background-color ${f}`
      },
      [`${t}-track,${t}-tracks`]: {
        position: "absolute",
        transition: `background-color ${f}`
      },
      [`${t}-track`]: {
        backgroundColor: e.trackBg,
        borderRadius: e.borderRadiusXS
      },
      [`${t}-track-draggable`]: {
        boxSizing: "content-box",
        backgroundClip: "content-box",
        border: "solid rgba(0,0,0,0)"
      },
      "&:hover": {
        [`${t}-rail`]: {
          backgroundColor: e.railHoverBg
        },
        [`${t}-track`]: {
          backgroundColor: e.trackHoverBg
        },
        [`${t}-dot`]: {
          borderColor: s
        },
        [`${t}-handle::after`]: {
          boxShadow: `0 0 0 ${C0(m)} ${e.colorPrimaryBorderHover}`
        },
        [`${t}-dot-active`]: {
          borderColor: e.dotActiveBorderColor
        }
      },
      [`${t}-handle`]: {
        position: "absolute",
        width: u,
        height: u,
        outline: "none",
        userSelect: "none",
        // Dragging status
        "&-dragging-delete": {
          opacity: 0
        },
        // 扩大选区
        "&::before": {
          content: '""',
          position: "absolute",
          insetInlineStart: l(m).mul(-1).equal(),
          insetBlockStart: l(m).mul(-1).equal(),
          width: l(u).add(l(m).mul(2)).equal(),
          height: l(u).add(l(m).mul(2)).equal(),
          backgroundColor: "transparent"
        },
        "&::after": {
          content: '""',
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: u,
          height: u,
          backgroundColor: e.colorBgElevated,
          boxShadow: `0 0 0 ${C0(m)} ${e.handleColor}`,
          outline: "0px solid transparent",
          borderRadius: "50%",
          cursor: "pointer",
          transition: `
            inset-inline-start ${f},
            inset-block-start ${f},
            width ${f},
            height ${f},
            box-shadow ${f},
            outline ${f}
          `
        },
        "&:hover, &:active, &:focus": {
          "&::before": {
            insetInlineStart: l(d).sub(u).div(2).add(g).mul(-1).equal(),
            insetBlockStart: l(d).sub(u).div(2).add(g).mul(-1).equal(),
            width: l(d).add(l(g).mul(2)).equal(),
            height: l(d).add(l(g).mul(2)).equal()
          },
          "&::after": {
            boxShadow: `0 0 0 ${C0(g)} ${v}`,
            outline: `6px solid ${h}`,
            width: d,
            height: d,
            insetInlineStart: e.calc(u).sub(d).div(2).equal(),
            insetBlockStart: e.calc(u).sub(d).div(2).equal()
          }
        }
      },
      [`&-lock ${t}-handle`]: {
        "&::before, &::after": {
          transition: "none"
        }
      },
      [`${t}-mark`]: {
        position: "absolute",
        fontSize: e.fontSize
      },
      [`${t}-mark-text`]: {
        position: "absolute",
        display: "inline-block",
        color: e.colorTextDescription,
        textAlign: "center",
        wordBreak: "keep-all",
        cursor: "pointer",
        userSelect: "none",
        "&-active": {
          color: e.colorText
        }
      },
      [`${t}-step`]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none"
      },
      [`${t}-dot`]: {
        position: "absolute",
        width: o,
        height: o,
        backgroundColor: e.colorBgElevated,
        border: `${C0(m)} solid ${e.dotBorderColor}`,
        borderRadius: "50%",
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        pointerEvents: "auto",
        "&-active": {
          borderColor: e.dotActiveBorderColor
        }
      },
      [`&${t}-disabled`]: {
        cursor: "not-allowed",
        [`${t}-rail`]: {
          backgroundColor: `${e.railBg} !important`
        },
        [`${t}-track`]: {
          backgroundColor: `${e.trackBgDisabled} !important`
        },
        [`
          ${t}-dot
        `]: {
          backgroundColor: e.colorBgElevated,
          borderColor: e.trackBgDisabled,
          boxShadow: "none",
          cursor: "not-allowed"
        },
        [`${t}-handle::after`]: {
          backgroundColor: e.colorBgElevated,
          cursor: "not-allowed",
          width: u,
          height: u,
          boxShadow: `0 0 0 ${C0(m)} ${c}`,
          insetInlineStart: 0,
          insetBlockStart: 0
        },
        [`
          ${t}-mark-text,
          ${t}-dot
        `]: {
          cursor: "not-allowed !important"
        }
      },
      [`&-tooltip ${r}-tooltip-inner`]: {
        minWidth: "unset"
      }
    })
  };
}, f1 = (e, t) => {
  const {
    componentCls: r,
    railSize: n,
    handleSize: o,
    dotSize: a,
    marginFull: i,
    calc: s
  } = e, c = t ? "paddingBlock" : "paddingInline", l = t ? "width" : "height", u = t ? "height" : "width", d = t ? "insetBlockStart" : "insetInlineStart", v = t ? "top" : "insetInlineStart", h = s(n).mul(3).sub(o).div(2).equal(), m = s(o).sub(n).div(2).equal(), g = t ? {
    borderWidth: `${C0(m)} 0`,
    transform: `translateY(${C0(s(m).mul(-1).equal())})`
  } : {
    borderWidth: `0 ${C0(m)}`,
    transform: `translateX(${C0(e.calc(m).mul(-1).equal())})`
  };
  return {
    [c]: n,
    [u]: s(n).mul(3).equal(),
    [`${r}-rail`]: {
      [l]: "100%",
      [u]: n
    },
    [`${r}-track,${r}-tracks`]: {
      [u]: n
    },
    [`${r}-track-draggable`]: Object.assign({}, g),
    [`${r}-handle`]: {
      [d]: h
    },
    [`${r}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      // https://github.com/ant-design/ant-design/issues/43731
      [v]: s(n).mul(3).add(t ? 0 : i).equal(),
      [l]: "100%"
    },
    [`${r}-step`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [v]: n,
      [l]: "100%",
      [u]: n
    },
    [`${r}-dot`]: {
      position: "absolute",
      [d]: s(n).sub(a).div(2).equal()
    }
  };
}, R4 = (e) => {
  const {
    componentCls: t,
    marginPartWithMark: r
  } = e;
  return {
    [`${t}-horizontal`]: Object.assign(Object.assign({}, f1(e, !0)), {
      [`&${t}-with-marks`]: {
        marginBottom: r
      }
    })
  };
}, M4 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-vertical`]: Object.assign(Object.assign({}, f1(e, !1)), {
      height: "100%"
    })
  };
}, _4 = (e) => {
  const r = e.controlHeightLG / 4, n = e.controlHeightSM / 2, o = e.lineWidth + 1, a = e.lineWidth + 1 * 1.5, i = e.colorPrimary, s = new p0(i).setA(0.2).toRgbString();
  return {
    controlSize: r,
    railSize: 4,
    handleSize: r,
    handleSizeHover: n,
    dotSize: 8,
    handleLineWidth: o,
    handleLineWidthHover: a,
    railBg: e.colorFillTertiary,
    railHoverBg: e.colorFillSecondary,
    trackBg: e.colorPrimaryBorder,
    trackHoverBg: e.colorPrimaryBorderHover,
    handleColor: e.colorPrimaryBorder,
    handleActiveColor: i,
    handleActiveOutlineColor: s,
    handleColorDisabled: new p0(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString(),
    dotBorderColor: e.colorBorderSecondary,
    dotActiveBorderColor: e.colorPrimaryBorder,
    trackBgDisabled: e.colorBgContainerDisabled
  };
}, F4 = Ea("Slider", (e) => {
  const t = sr(e, {
    marginPart: e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),
    marginFull: e.calc(e.controlSize).div(2).equal(),
    marginPartWithMark: e.calc(e.controlHeightLG).sub(e.controlSize).equal()
  });
  return [P4(t), R4(t), M4(t)];
}, _4);
function uo() {
  const [e, t] = b.useState(!1), r = b.useRef(null), n = () => {
    Ct.cancel(r.current);
  }, o = (a) => {
    n(), a ? t(a) : r.current = Ct(() => {
      t(a);
    });
  };
  return b.useEffect(() => n, []), [e, o];
}
var T4 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function k4(e, t) {
  return e || e === null ? e : t || t === null ? t : (r) => typeof r == "number" ? r.toString() : "";
}
const d1 = /* @__PURE__ */ be.forwardRef((e, t) => {
  const {
    prefixCls: r,
    range: n,
    className: o,
    rootClassName: a,
    style: i,
    disabled: s,
    // Deprecated Props
    tooltipPrefixCls: c,
    tipFormatter: l,
    tooltipVisible: u,
    getTooltipPopupContainer: d,
    tooltipPlacement: v,
    tooltip: h = {},
    onChangeComplete: m,
    classNames: g,
    styles: f
  } = e, y = T4(e, ["prefixCls", "range", "className", "rootClassName", "style", "disabled", "tooltipPrefixCls", "tipFormatter", "tooltipVisible", "getTooltipPopupContainer", "tooltipPlacement", "tooltip", "onChangeComplete", "classNames", "styles"]), {
    vertical: p
  } = e, {
    getPrefixCls: C,
    direction: S,
    className: w,
    style: x,
    classNames: E,
    styles: _,
    getPopupContainer: P
  } = Sa("slider"), R = be.useContext(B2), T = s ?? R, {
    handleRender: F,
    direction: k
  } = be.useContext(E4), $ = (k || S) === "rtl", [L, I] = uo(), [H, B] = uo(), q = Object.assign({}, h), {
    open: U,
    placement: V,
    getPopupContainer: Q,
    prefixCls: K,
    formatter: X
  } = q, z = U ?? u, J = (L || H) && z !== !1, ne = k4(X, l), [ce, oe] = uo(), ie = (re) => {
    m == null || m(re), oe(!1);
  }, he = (re, Me) => re || (Me ? $ ? "left" : "right" : "top"), we = C("slider", r), [j, le, Z] = F4(we), ae = Ne(o, w, E.root, g == null ? void 0 : g.root, a, {
    [`${we}-rtl`]: $,
    [`${we}-lock`]: ce
  }, le, Z);
  if ($ && !y.vertical && (y.reverse = !y.reverse), process.env.NODE_ENV !== "production") {
    const re = Ca("Slider");
    [["tooltipPrefixCls", "prefixCls"], ["getTooltipPopupContainer", "getPopupContainer"], ["tipFormatter", "formatter"], ["tooltipPlacement", "placement"], ["tooltipVisible", "open"]].forEach(([Me, Fe]) => {
      re.deprecated(!(Me in e), Me, `tooltip.${Fe}`);
    });
  }
  be.useEffect(() => {
    const re = () => {
      Ct(() => {
        B(!1);
      }, 1);
    };
    return document.addEventListener("mouseup", re), () => {
      document.removeEventListener("mouseup", re);
    };
  }, []);
  const ge = n && !z, me = F || ((re, Me) => {
    const {
      index: Fe
    } = Me, We = re.props;
    function $e(Ce, Be, Ke) {
      var l0, u0, o0, f0;
      Ke && ((u0 = (l0 = y)[Ce]) === null || u0 === void 0 || u0.call(l0, Be)), (f0 = (o0 = We)[Ce]) === null || f0 === void 0 || f0.call(o0, Be);
    }
    const De = Object.assign(Object.assign({}, We), {
      onMouseEnter: (Ce) => {
        I(!0), $e("onMouseEnter", Ce);
      },
      onMouseLeave: (Ce) => {
        I(!1), $e("onMouseLeave", Ce);
      },
      onMouseDown: (Ce) => {
        B(!0), oe(!0), $e("onMouseDown", Ce);
      },
      onFocus: (Ce) => {
        var Be;
        B(!0), (Be = y.onFocus) === null || Be === void 0 || Be.call(y, Ce), $e("onFocus", Ce, !0);
      },
      onBlur: (Ce) => {
        var Be;
        B(!1), (Be = y.onBlur) === null || Be === void 0 || Be.call(y, Ce), $e("onBlur", Ce, !0);
      }
    }), r0 = /* @__PURE__ */ be.cloneElement(re, De), _e = (!!z || J) && ne !== null;
    return ge ? r0 : /* @__PURE__ */ be.createElement(fs, Object.assign({}, q, {
      prefixCls: C("tooltip", K ?? c),
      title: ne ? ne(Me.value) : "",
      value: Me.value,
      open: _e,
      placement: he(V ?? v, p),
      key: Fe,
      classNames: {
        root: `${we}-tooltip`
      },
      getPopupContainer: Q || d || P
    }), r0);
  }), Ye = ge ? (re, Me) => {
    const Fe = /* @__PURE__ */ be.cloneElement(re, {
      style: Object.assign(Object.assign({}, re.props.style), {
        visibility: "hidden"
      })
    });
    return /* @__PURE__ */ be.createElement(fs, Object.assign({}, q, {
      prefixCls: C("tooltip", K ?? c),
      title: ne ? ne(Me.value) : "",
      open: ne !== null && J,
      placement: he(V ?? v, p),
      key: "tooltip",
      classNames: {
        root: `${we}-tooltip`
      },
      getPopupContainer: Q || d || P,
      draggingDelete: Me.draggingDelete
    }), Fe);
  } : void 0, ee = Object.assign(Object.assign(Object.assign(Object.assign({}, _.root), x), f == null ? void 0 : f.root), i), fe = Object.assign(Object.assign({}, _.tracks), f == null ? void 0 : f.tracks), pe = Ne(E.tracks, g == null ? void 0 : g.tracks);
  return j(
    // @ts-ignore
    /* @__PURE__ */ be.createElement(l1, Object.assign({}, y, {
      classNames: Object.assign({
        handle: Ne(E.handle, g == null ? void 0 : g.handle),
        rail: Ne(E.rail, g == null ? void 0 : g.rail),
        track: Ne(E.track, g == null ? void 0 : g.track)
      }, pe ? {
        tracks: pe
      } : {}),
      styles: Object.assign({
        handle: Object.assign(Object.assign({}, _.handle), f == null ? void 0 : f.handle),
        rail: Object.assign(Object.assign({}, _.rail), f == null ? void 0 : f.rail),
        track: Object.assign(Object.assign({}, _.track), f == null ? void 0 : f.track)
      }, Object.keys(fe).length ? {
        tracks: fe
      } : {}),
      step: y.step,
      range: n,
      className: ae,
      style: ee,
      disabled: T,
      ref: t,
      prefixCls: we,
      handleRender: me,
      activeHandleRender: Ye,
      onChangeComplete: ie
    }))
  );
});
process.env.NODE_ENV !== "production" && (d1.displayName = "Slider");
const O4 = d1, A4 = ["0.5", "1.0", "2.0", "4.0", "8.0"];
function D4({ value: e, onChange: t, speeds: r = A4 }) {
  return /* @__PURE__ */ Pe.jsx("div", { children: r.map((n) => /* @__PURE__ */ Pe.jsxs(
    "div",
    {
      className: "cursor",
      style: {
        color: e === n ? "#0072EF" : "#E6EBF0",
        fontWeight: 500,
        padding: "4px 2px"
      },
      onClick: () => t(n),
      children: [
        n,
        "X"
      ]
    },
    n
  )) });
}
function N4({ isPaused: e, onPlay: t, onStop: r }) {
  return /* @__PURE__ */ Pe.jsx("div", { className: "playOrStop", children: e ? /* @__PURE__ */ Pe.jsx("i", { className: "iconfont cursor", onClick: t, children: "" }) : /* @__PURE__ */ Pe.jsx("i", { className: "iconfont cursor", onClick: r, children: "" }) });
}
function i7(e) {
  const {
    name: t,
    dataLength: r = 0,
    index: n = 0,
    showPlayToggle: o = !1,
    showSpeed: a = !1,
    showHistory: i = !1,
    speedLabel: s = "speed",
    historyLabel: c = "history",
    style: l,
    contentStyle: u,
    onHistoryClick: d,
    isPaused: v = !0,
    speedValue: h = "1.0",
    onIndexChange: m,
    onPlay: g,
    onStop: f,
    onSpeedChange: y,
    timestamp: p,
    formatTimestamp: C,
    speeds: S
  } = e, w = Math.max(0, (Number(r) || 0) - 1), x = Number.isFinite(Number(n)) ? Number(n) : 0, E = h ?? "1.0", _ = !!v, P = J0(() => p == null ? "" : typeof C == "function" ? C(p) : String(p), [p, C]), [R, T] = xn(_);
  return Te(() => T(_), [_]), /* @__PURE__ */ Pe.jsxs("div", { style: l, children: [
    /* @__PURE__ */ Pe.jsx("div", { className: "colDate", children: t }),
    /* @__PURE__ */ Pe.jsxs("div", { className: "playContent", style: u, children: [
      /* @__PURE__ */ Pe.jsx(O4, { defaultValue: 0, value: x, onChange: m, max: w }),
      /* @__PURE__ */ Pe.jsxs("div", { className: "playControl", children: [
        /* @__PURE__ */ Pe.jsxs("div", { className: "playLeftContent", children: [
          o ? /* @__PURE__ */ Pe.jsx(
            N4,
            {
              isPaused: R,
              onPlay: () => {
                T(!1), g == null || g();
              },
              onStop: () => {
                T(!0), f == null || f();
              }
            }
          ) : null,
          /* @__PURE__ */ Pe.jsx("div", { className: "playStamp", children: P })
        ] }),
        a || i ? /* @__PURE__ */ Pe.jsxs("div", { className: "playRightContent", children: [
          a ? /* @__PURE__ */ Pe.jsx("div", { className: "playSpeed cursor", children: /* @__PURE__ */ Pe.jsx(
            u4,
            {
              color: "#202327",
              className: "set-popover",
              placement: "top",
              content: /* @__PURE__ */ Pe.jsx(D4, { value: E, onChange: y, speeds: S }),
              children: /* @__PURE__ */ Pe.jsx(Pe.Fragment, { children: E === "1.0" ? s : `${E}X` })
            }
          ) }) : null,
          i ? /* @__PURE__ */ Pe.jsx("div", { className: "playHistoryData cursor", onClick: d, children: c }) : null
        ] }) : null
      ] })
    ] })
  ] });
}
const L4 = 64, $4 = 64, I4 = 13.005589453473025, j4 = [
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    4067491853174354e-22,
    32178397532077035e-22,
    1681732089521519e-20,
    59537335345163384e-21,
    14703777326673773e-20,
    2633369940594436e-19,
    3573164895315069e-19,
    38167716111852404e-20,
    3275526744823631e-19,
    22449549087784048e-20,
    11905063145006926e-20,
    4667004186645746e-20,
    129359787514998e-19,
    24482546129056417e-22,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3150123878486283e-22,
    29308197975150016e-22,
    18624236681800406e-21,
    8960403823979935e-20,
    33702667495934827e-20,
    9837672641704964e-19,
    0.002190458892114752,
    0.0037221423233521327,
    0.004926330941780228,
    0.005213610948316839,
    0.0044804965111595995,
    0.0031067307797271407,
    0.0016886003787639334,
    6908093119864384e-19,
    20480874041078242e-20,
    4282869064596045e-20,
    6194121204873493e-21,
    598183179343491e-21,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    5902227802550496e-22,
    6194121204873493e-21,
    4621055506834007e-20,
    24798990361649044e-20,
    0.001024368545835364,
    0.0033908024693034495,
    0.009037669291332815,
    0.01904221447804605,
    0.031404904585828036,
    0.040968889019198325,
    0.04313089321309769,
    0.03710434821422538,
    0.0259059444135006,
    0.014279453254267648,
    0.005977862996389131,
    0.0018326602566125347,
    4004740230818567e-19,
    6107620989467133e-20,
    62858580023423006e-22,
    31501238784862827e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    5822623811666082e-22,
    8120008637727567e-21,
    6943806909999513e-20,
    43984548865827656e-20,
    0.002085387346794372,
    0.0077014195998583845,
    0.02297343600934741,
    0.05622806599601647,
    0.11175983376496185,
    0.17814005211657274,
    0.22843525863642833,
    0.23898159450112033,
    0.20588712314874602,
    0.14501914159076867,
    0.0813696032208548,
    0.03508441858395197,
    0.011251292931019822,
    0.002631363743218356,
    44784854559358863e-20,
    5632337161797057e-20,
    4948444027837884e-21,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    2340597017259952e-21,
    12341906807046911e-21,
    4759117141070468e-20,
    167106050180352e-18,
    6801607742581448e-19,
    0.003078262007698173,
    0.01240823436499681,
    0.04088162092354008,
    0.11023404608681792,
    0.24717554387970805,
    0.46035507107622453,
    0.7046428089305746,
    0.8847462618731832,
    0.9185513036051828,
    0.793089359120684,
    0.565102954798937,
    0.32439365079514615,
    0.14520448132725947,
    0.04933241494806263,
    0.012660657859630511,
    0.0025588525758257342,
    4587322896630604e-19,
    83464116110578e-18,
    15613168613493845e-21,
    2615807409666373e-21,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    23326366181715106e-22,
    11966999218083242e-21,
    41516779435455916e-21,
    10178365228784826e-20,
    19717695198019544e-20,
    37151050742218096e-20,
    7894557586425173e-19,
    0.0018429906945373266,
    0.004979404079964329,
    0.01632195900518735,
    0.05434650147291384,
    0.15774336544788878,
    0.3839289443536674,
    0.7887133226105332,
    1.3726048833389966,
    2.0097585288419646,
    2.4645456365144307,
    2.537838266998505,
    2.198875100618329,
    1.5901926906632773,
    0.939709230808581,
    0.4416233501386695,
    0.1624597729292833,
    0.04778431456626495,
    0.01227524891313859,
    0.003155862135417775,
    8424851555612925e-19,
    20732343936629246e-20,
    4107362206676314e-20,
    5787372019556059e-21,
    5743019820781669e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    4067491853174354e-22,
    3209879354119262e-21,
    16733544496834824e-21,
    58959184198887374e-21,
    144627745803423e-18,
    25815271970467866e-20,
    35793894408150744e-20,
    430311500756666e-18,
    5480591775178495e-19,
    8787200852195716e-19,
    0.001557871199104807,
    0.002563577120503437,
    0.004088925493249132,
    0.007208245794420153,
    0.013920907470348512,
    0.028885381926350807,
    0.06944102356689055,
    0.18323158223530533,
    0.4568823058804514,
    0.9967429339795186,
    1.8784322701220186,
    3.060478263283645,
    4.288872391083598,
    5.138262841978806,
    5.253394295471978,
    4.577530169913054,
    3.373264631412857,
    2.0679426240378795,
    1.0365245488872212,
    0.426131915374143,
    0.1513612367140988,
    0.05144538037772743,
    0.017881719200252347,
    0.005967553590569226,
    0.0016784147273394192,
    36006724701241496e-20,
    54782391493240595e-21,
    5779411620467617e-21,
    2990915896717455e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    7816567742811052e-22,
    8012934149383676e-21,
    5470160119831065e-20,
    2573430768141993e-19,
    8458044997699723e-19,
    0.001984807576077963,
    0.0034501110579294157,
    0.004700989737118298,
    0.005486163262429712,
    0.006378377434490646,
    0.008746267624907881,
    0.013647246684772088,
    0.020576694202407403,
    0.02951074784074351,
    0.04494570611052408,
    0.07460843941086978,
    0.12857932082549864,
    0.23919483214596843,
    0.4928469266318074,
    1.0292840379557762,
    1.990920495309689,
    3.4443119486961855,
    5.279439595297314,
    7.1135701175845085,
    8.354907962165704,
    8.506605028722557,
    7.479610302209959,
    5.645865645566523,
    3.625745785273529,
    1.975264006465685,
    0.935772672568981,
    0.4119810631531591,
    0.1806168214803809,
    0.07805788659762306,
    0.030180719228042042,
    0.009352625172704633,
    0.0021521659648663536,
    34928395941173786e-20,
    3884864304423733e-20,
    233263661817151e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    6899199768122982e-22,
    10138215975352249e-21,
    8747419987153018e-20,
    5323827300427114e-19,
    0.002317245160098382,
    0.0072405928064616125,
    0.016469162477452684,
    0.028112742185480523,
    0.037875614774002406,
    0.04345330215467948,
    0.04781922131559915,
    0.0584562310891054,
    0.08101875058543107,
    0.11207657884575756,
    0.1468396563582972,
    0.19673405698099095,
    0.28390749860672126,
    0.4232811230047093,
    0.6501493091625185,
    1.0729829134467583,
    1.860492048464582,
    3.162671600637455,
    5.023944708581552,
    7.2865989583418855,
    9.502665901752648,
    11.00172595126228,
    11.206501977768989,
    9.99235885857714,
    7.778317162299728,
    5.2872580815316095,
    3.1763476835575375,
    1.7521383130418038,
    0.9394418927310804,
    0.5014455959160791,
    0.2528838416491321,
    0.10900814031383475,
    0.03659050668723265,
    0.008972112932210254,
    0.0015394253062122041,
    1791430490352999e-19,
    1196699921808324e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    30705198876018687e-23,
    68560487495298655e-22,
    8210444598991271e-20,
    6331370334029087e-19,
    0.0035057387730382883,
    0.014145416266608786,
    0.041812306801743596,
    0.0916392646789406,
    0.15293937955652423,
    0.2033453672863444,
    0.2301089174472165,
    0.2437650633277822,
    0.27239997862129633,
    0.3370744684602516,
    0.42540728721104926,
    0.5121720055371569,
    0.6128087236404105,
    0.7740520670732438,
    1.0153923957564963,
    1.3513025628966417,
    1.8729892880931789,
    2.74187330108596,
    4.103577398165051,
    6.003421695628287,
    8.292672369455486,
    10.545326837542444,
    12.1156894893422,
    12.42368389845684,
    11.309065766780892,
    9.147405235466307,
    6.628914846203135,
    4.398312818135095,
    2.781189108201632,
    1.7424374385411743,
    1.0738477350814646,
    0.6067222169956847,
    0.2850483505811086,
    0.10240423799316467,
    0.026539537928749052,
    0.004769621462269035,
    5763300740585893e-19,
    41616476632013164e-21,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2432333814728759e-21,
    4564135605970203e-20,
    47477138969717505e-20,
    0.003308856558328843,
    0.01662633652884767,
    0.061529352981717106,
    0.16977936421719236,
    0.3543824668979764,
    0.5735692396841434,
    0.7493616460484124,
    0.8368829496359937,
    0.8627177437063328,
    0.9011796483270619,
    1.007949941188666,
    1.1570118083980474,
    1.2805285919324214,
    1.3824984976059438,
    1.5372378366982553,
    1.7815478719495006,
    2.109456686417671,
    2.56942190978552,
    3.287146451865177,
    4.4029797631588385,
    5.991415082351738,
    7.961097552023779,
    9.973356666746668,
    11.482538606333152,
    11.96337211514549,
    11.216055924711316,
    9.493930138797134,
    7.345038758200469,
    5.322207268278133,
    3.745135950132381,
    2.626147519311817,
    1.79331728939965,
    1.1029047350475065,
    0.5550486149996195,
    0.21105469791909856,
    0.057362409988502096,
    0.010747068589973006,
    0.0013523816217549261,
    10594306224961838e-20,
    7816567742811052e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12712703161119979e-21,
    2102208102220655e-19,
    0.0019847014843323157,
    0.012702786149622515,
    0.05825650893439539,
    0.19701307946412747,
    0.5025792579781705,
    0.9881848011631876,
    1.5375132277943313,
    1.9634309331779236,
    2.1614516183837953,
    2.1822566490281456,
    2.169446046907658,
    2.2308231538426355,
    2.335332943342092,
    2.3713842713363142,
    2.318639861426414,
    2.273209190996515,
    2.316001118457921,
    2.4596427654347766,
    2.7165123423711686,
    3.1531929557001175,
    3.883545529544225,
    5.010689899921164,
    6.52406906505656,
    8.206032980370331,
    9.63626744929127,
    10.354129234850424,
    10.110780328054826,
    9.007463506029836,
    7.4140477332969095,
    5.769954268019291,
    4.385262789812176,
    3.3203766516276785,
    2.433936373079014,
    1.5937780409016686,
    0.8480654680619264,
    0.3394870228135352,
    0.09714745052355436,
    0.019331589904913377,
    0.002648361536926199,
    24415568093123845e-20,
    8012934149383676e-21,
    40674918531743536e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    44823819597093136e-21,
    6787780022313034e-19,
    0.006012189385605399,
    0.036063149706095095,
    0.15327310741274583,
    0.4773783811648917,
    1.1257220204865959,
    2.074406675426215,
    3.083699687506548,
    3.8312597281852243,
    4.148960136675033,
    4.114661292682861,
    3.9411298173338913,
    3.7894994249694016,
    3.646790608749056,
    3.393801992956239,
    2.998836505547568,
    2.577062738303213,
    2.270595457899315,
    2.1401036891278515,
    2.1716588101544905,
    2.355829861926449,
    2.7500666679283787,
    3.4647583130746007,
    4.571995550220703,
    5.982411010160817,
    7.385956942142567,
    8.361677635144,
    8.609997270493729,
    8.103345862024899,
    7.060259265423491,
    5.820530594903062,
    4.680614902721806,
    3.740036973761967,
    2.886744575931738,
    1.991450456111708,
    1.1221375407808303,
    0.4816374099060221,
    0.15148113171986927,
    0.03458420615576393,
    0.005790053655727316,
    7135897189216051e-19,
    5470160119831065e-20,
    32098793541192625e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10887153414608657e-20,
    0.0015577351824634612,
    0.013265433498602753,
    0.07613502748449558,
    0.3062049320084781,
    0.8943195270513664,
    1.9730906565446498,
    3.425688713243587,
    4.8682210335258835,
    5.875822790937158,
    6.249414413109484,
    6.090834241021943,
    5.657934702841436,
    5.151830530669718,
    4.601258848406362,
    3.9294387104778257,
    3.1271103266544844,
    2.330545711708486,
    1.7244348231844475,
    1.3925951092674826,
    1.2856122998161577,
    1.3249429401239095,
    1.5100081204432239,
    1.939725594228483,
    2.7474574098694537,
    3.956601362377647,
    5.349580538407581,
    6.531268396114651,
    7.166071593146295,
    7.142004023581032,
    6.571991262656059,
    5.7152197486638485,
    4.841353480119497,
    4.068169737044329,
    3.3082284288371464,
    2.4301390376498313,
    1.4906811134450946,
    0.7211206390391093,
    0.2674485716918549,
    0.0752862844509398,
    0.01591120807330786,
    0.0024594125198031344,
    2571436824210848e-19,
    16717623698657942e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    18621575355606937e-20,
    0.0025817142546247025,
    0.021524111660278736,
    0.12044505005204398,
    0.46867705192982817,
    1.3144827772990408,
    2.773009764932633,
    4.610878947350461,
    6.323799981924417,
    7.442731472054497,
    7.776048681518626,
    7.441939836340256,
    6.715628587768037,
    5.825072015800012,
    4.856219393995954,
    3.8118897221254997,
    2.732743594724954,
    1.7600274104591547,
    1.0619756595038732,
    0.6898323886301176,
    0.553939130583486,
    0.5419461235812163,
    0.6229091611136204,
    0.8751879182780951,
    1.4547273854207394,
    2.466997360728156,
    3.791057580266452,
    5.080149455580903,
    5.9846114952080605,
    6.337903420523082,
    6.1816658648733185,
    5.707142499247187,
    5.13984647480301,
    4.591082950139577,
    3.9854845213038415,
    3.1757441005570968,
    2.172826504455368,
    1.2101051184721863,
    0.5281278976792461,
    0.17484542505788403,
    0.0424310252431539,
    0.007282536871599502,
    8430839797849472e-19,
    58743869007596e-18,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2279267943426618e-19,
    0.0031275841564728573,
    0.02589408457371671,
    0.1436478710909514,
    0.5524575791538604,
    1.5261050025593599,
    3.161330760175413,
    5.154152236786764,
    6.9370239979542845,
    8.030753824759401,
    8.260420331391268,
    7.751096297931678,
    6.780050160985845,
    5.5959892390826,
    4.346979007999595,
    3.1264975375288766,
    2.0231407139319417,
    1.1398033060427304,
    0.5611994650771172,
    0.2746982707481917,
    0.1742257623645808,
    0.1573997287304449,
    0.1922036934426093,
    0.3343112095425472,
    0.7259701174416229,
    1.5184256666001694,
    2.698257695210807,
    4.0080872838701405,
    5.104208124579637,
    5.771302914237282,
    5.995691428419416,
    5.911941771346197,
    5.693026118644424,
    5.425314545190298,
    5.02796991737389,
    4.318904391372037,
    3.236272994143923,
    1.9973837919039528,
    0.9650703954868133,
    0.34869257427011124,
    0.09045805496300202,
    0.016279556185140022,
    0.0019625430135298506,
    14287326033152748e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20018983232350575e-20,
    0.00277251738685618,
    0.023086806559889837,
    0.12895098561586577,
    0.5002307584500458,
    1.3954102492728937,
    2.9172786437097624,
    4.78528586409854,
    6.445934079866127,
    7.421971394666998,
    7.538640384821928,
    6.91683142668711,
    5.832053992407809,
    4.550635667282872,
    3.2670674809736773,
    2.1310571848788893,
    1.2390519463124567,
    0.6204944188184965,
    0.2592638550304863,
    0.09556879130838612,
    0.042125948402651735,
    0.03258307059476463,
    0.04740622362394012,
    0.12213480485877162,
    0.3659313296007685,
    0.9402092481731081,
    1.9273747548698528,
    3.1875992701464675,
    4.410818650361992,
    5.336011174391793,
    5.893246937630917,
    6.169882838893907,
    6.296213976839423,
    6.327747031090738,
    6.156950498423967,
    5.553784251221536,
    4.38810751115068,
    2.8621936757714925,
    1.456071861529346,
    0.5490270852617534,
    0.14708340159561317,
    0.027085023004224808,
    0.0033263590233126674,
    24833645835568066e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12466127042779396e-20,
    0.0017785399042309401,
    0.015096426566622231,
    0.08624122076478186,
    0.3442957968548792,
    0.9933904653453778,
    2.150395259407306,
    3.6341453163193305,
    4.989347411730792,
    5.7735442486859885,
    5.804982726046012,
    5.186604665316748,
    4.18120328765599,
    3.056035557948303,
    2.0084760555180887,
    1.1731704046962645,
    0.6045586354946273,
    0.26947850166525245,
    0.09946898593747534,
    0.029844712738222264,
    0.008755294229825336,
    0.005146278217070984,
    0.01124514218134099,
    0.047372856915592156,
    0.18610647077350256,
    0.5675836249786755,
    1.3268652702790693,
    2.439221845211924,
    3.6713467042042183,
    4.746726616508603,
    5.536072761057262,
    6.07981578089966,
    6.482365584847178,
    6.772346119220795,
    6.798441781009942,
    6.28522597414874,
    5.076496289297906,
    3.383919456055542,
    1.757339890302095,
    0.6744423619792819,
    0.18319518236514387,
    0.03407870800125559,
    0.00421899613534655,
    31892539997462456e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    53901507729552484e-21,
    811377743044622e-18,
    0.007135692784964209,
    0.04240733342602699,
    0.17777479317854045,
    0.5422761149360747,
    1.2413886219324204,
    2.2002217867375267,
    3.1183625541815725,
    3.6526339806477695,
    3.6409680617114706,
    3.1556323397135118,
    2.4125236493349123,
    1.6367035722755916,
    0.9777918619028663,
    0.5074439881800012,
    0.2283173708345081,
    0.08918912221912915,
    0.029374726013727103,
    0.007727823103245535,
    0.0016765255825990659,
    7361486334553825e-19,
    0.0030644861386200156,
    0.018805046541241405,
    0.08912343627767874,
    0.31219686961598564,
    0.8205195776462254,
    1.6674993133975935,
    2.727505235263104,
    3.7652720704819522,
    4.616334219419599,
    5.277065818072349,
    5.831827535484257,
    6.2834779277091,
    6.436883313543092,
    6.000406850732137,
    4.851555344323968,
    3.2328387170093453,
    1.680687534951617,
    0.6466440592184675,
    0.17616909505146316,
    0.032860486299855295,
    0.004077025890069209,
    30967974596823926e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    15832420563621746e-21,
    25904018101920314e-20,
    0.0024115052564489046,
    0.015186336299943504,
    0.06812849498221529,
    0.22353502569638534,
    0.5484292306485619,
    1.0284394384579887,
    1.512624634031841,
    1.7987519450176563,
    1.779609644106957,
    1.4941710400229846,
    1.0782240899496778,
    0.6744995899101429,
    0.364840057151539,
    0.16814861055739988,
    0.06564271475038973,
    0.022023437982908782,
    0.006353206994887139,
    0.0014948430781173212,
    2654820482742568e-19,
    10771088203718622e-20,
    8873748431587999e-19,
    0.006792403564594444,
    0.036840122098177094,
    0.14489326829613436,
    0.4234184693173346,
    0.9472110167665821,
    1.6819457493598782,
    2.476950392283363,
    3.187013853339618,
    3.7889924738815175,
    4.344561820912909,
    4.8275200856496845,
    5.022847345291673,
    4.672084176611681,
    3.7259845113045724,
    2.442487381818129,
    1.2535369691537335,
    0.4785321837849207,
    0.1298553755622976,
    0.02417919407337476,
    0.002996093220115989,
    2278182973129222e-19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3102221758473572e-21,
    572425843472346e-19,
    5804245553004586e-19,
    0.003944588469353688,
    0.019221461505823087,
    0.0684849589631382,
    0.1807231699750643,
    0.35840940981349956,
    0.5461947633648638,
    0.6590534421318691,
    0.6479277068703265,
    0.5280878418847286,
    0.3599874002366118,
    0.207224197872371,
    0.10129729182205631,
    0.04161339731042914,
    0.014167959221259368,
    0.004041248909837828,
    9921806898277067e-19,
    20678007924365837e-20,
    3368074239485592e-20,
    2014454114394064e-20,
    23238218391278601e-20,
    0.0020191429492774733,
    0.012199536226205204,
    0.053254117516606005,
    0.1721280162292741,
    0.422529654631015,
    0.8117712006710722,
    1.2709633829411282,
    1.7144933922267849,
    2.129328931148806,
    2.5548878737844634,
    2.945660579253053,
    3.1115579112619676,
    2.8686502733389267,
    2.230615889384202,
    1.418907297746565,
    0.710044865481996,
    0.26653952613997534,
    0.071642197100318,
    0.013273300507056805,
    0.0016385072964436472,
    12454991819268278e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    398788786228994e-21,
    8682822093128489e-21,
    9955446521608331e-20,
    7413357989473908e-19,
    0.003953947222974666,
    0.01530042109868959,
    0.043200695862241394,
    0.08997371699051215,
    0.1412777254328938,
    0.17255999623832724,
    0.16879281863649212,
    0.13415834936208962,
    0.08690497308744824,
    0.04619771740393128,
    0.020411731356623525,
    0.007495034240808133,
    0.002246904447614494,
    5466953012253577e-19,
    11126339782014482e-20,
    1967288137870673e-20,
    2831122600957753e-21,
    3014596195895367e-21,
    46821539549519366e-21,
    45958276360619986e-20,
    0.003075160493014366,
    0.014855367324737065,
    0.05293102575737331,
    0.14175343442021093,
    0.2924132429687917,
    0.4836373087031066,
    0.6837295443971809,
    0.8948729568470095,
    1.138537509261542,
    1.373806445620873,
    1.475552074884819,
    1.343102858759909,
    1.009480986363719,
    0.6154277791363053,
    0.2964739699631291,
    0.10836088215472121,
    0.028672234640116968,
    0.00526766973942338,
    6460802260421259e-19,
    490800693297722e-19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    8813539708383537e-22,
    1206468651550812e-20,
    9964620201355211e-20,
    5823589862397027e-19,
    0.0024316672521537104,
    0.0072737085339984985,
    0.0157594582426413,
    0.02532973644133211,
    0.03123028672912398,
    0.030431451966176123,
    0.02371235095104514,
    0.014721668780415309,
    0.007283298850200086,
    0.0029118023269090977,
    9496153438526661e-19,
    2472502417352659e-19,
    4893148368461285e-20,
    6947785546998672e-21,
    6899199768122981e-22,
    3184159635376554e-23,
    30705198876018687e-23,
    6748391153884175e-21,
    7675916645758331e-20,
    5717853384429878e-19,
    0.0030555402402724615,
    0.011930365548837559,
    0.03450664313980082,
    0.07559125703674069,
    0.13112601897010606,
    0.19467103862094423,
    0.271992960380603,
    0.3722574782587401,
    0.4732927957479066,
    0.5174808249892179,
    0.46442098343470717,
    0.33579660576830017,
    0.19429417242115526,
    0.08894368759328006,
    0.03128296122048996,
    0.00808383665862155,
    0.001466038741554976,
    17800051399477279e-20,
    13514129897775805e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3980199544220693e-23,
    8813539708383537e-22,
    8690782492216931e-21,
    5744197874034911e-20,
    2612498223508539e-19,
    8271513570718145e-19,
    0.001857000745322036,
    0.003044569029298078,
    0.0037831631915792915,
    0.003674970092974651,
    0.002816587993690249,
    0.001684496232264642,
    7773093693875384e-19,
    27813237127074613e-20,
    7821911688210768e-20,
    17176220091363293e-21,
    28152018027808705e-22,
    3150123878486283e-22,
    23881197265324158e-24,
    0,
    23881197265324158e-24,
    6819595777238568e-22,
    9260973239404495e-21,
    7685886365414057e-20,
    4519666083439128e-19,
    0.0019138762405384307,
    0.005902975896865529,
    0.013578071621668963,
    0.024578502960052328,
    0.03857300419530743,
    0.05847643310324596,
    0.08707974747184707,
    0.11687389015842412,
    0.13001768269135927,
    0.11512882178000748,
    0.08007169388612759,
    0.04374916899834843,
    0.01881769643233873,
    0.006284554094244816,
    0.0015694303816538408,
    27913500731247643e-20,
    3336631311430909e-20,
    2532031011286007e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    398788786228994e-21,
    3110182157562014e-21,
    1594803855835588e-20,
    5485456646479216e-20,
    1299062696562643e-19,
    21957973139871012e-20,
    2761945942502176e-19,
    26694894024383226e-20,
    19906157035595165e-20,
    1115829275174196e-19,
    4519076678696837e-20,
    12744544757473745e-21,
    24323338147287592e-22,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    6819595777238568e-22,
    6756351552972616e-21,
    44963507716868774e-21,
    20786330066807916e-20,
    6817396981147667e-19,
    0.001639668731445369,
    0.0031028308920719623,
    0.00522040045061937,
    0.008746653694166693,
    0.01425228794034056,
    0.02012658521839355,
    0.02273527808082959,
    0.01990060511733802,
    0.01336183130497554,
    0.006896273276336491,
    0.002766095073668118,
    8651320687113879e-19,
    20598209303995265e-20,
    3559129213683491e-20,
    4152615777285287e-21,
    31501238784862827e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    24402942138172007e-22,
    12844241954030993e-21,
    462833247142075e-19,
    11952514864095148e-20,
    2436751752902692e-19,
    45803552037711534e-20,
    8769016330134672e-19,
    0.0015759689815484043,
    0.0023350093282941855,
    0.0026735819070837804,
    0.0023163394973554617,
    0.001505315143556965,
    7332646401060558e-19,
    27123082440031116e-20,
    7764038262852988e-20,
    1716825969227485e-20,
    28231622018693115e-22,
    3150123878486283e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    24323338147287592e-22,
    12736584358385302e-21,
    4509902998949956e-20,
    11092896037185167e-20,
    19614920774565283e-20,
    25952604038671117e-20,
    2691365217893576e-19,
    23678463321027038e-20,
    20680962264540975e-20,
    20255805658859837e-20,
    19793257297664015e-20,
    15989136041382756e-20,
    962115954595836e-19,
    40958398251554635e-21,
    11943118020817917e-21,
    23326366181715106e-22,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    31501238784862827e-23,
    4052918580728039e-21,
    32125651316074914e-21,
    16836211770988817e-20,
    5969906951758446e-19,
    0.0014715066495674042,
    0.0026086860580670427,
    0.00344843602966067,
    0.003488586437529394,
    0.0027117432416715655,
    0.001590925587762612,
    6851610210411636e-19,
    2111738689573052e-19,
    45733092857170836e-21,
    6864009148618307e-21,
    6899199768122981e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    41470958440587676e-23,
    33095765506765107e-22,
    17503129637136886e-21,
    628484867416912e-19,
    15756289488233241e-20,
    2862274870839254e-19,
    39401309544949913e-20,
    4294350785571725e-19,
    3800390166820627e-19,
    27043775080221803e-20,
    14848520674987304e-20,
    59728769339189436e-21,
    16833241693392072e-21,
    32178397532077035e-22,
    4067491853174354e-22,
    3184159635376554e-23,
    0,
    0,
    23881197265324158e-24,
    28152018027808697e-22,
    34729970199064045e-21,
    26891845988131585e-20,
    0.0013889053701893017,
    0.004882678840368249,
    0.011983871455144828,
    0.021227286573608097,
    0.02812743997406629,
    0.028636173113635296,
    0.022543565316605757,
    0.013552617920076046,
    0.0061407080962046084,
    0.0021616320811020232,
    7200549909937481e-19,
    33550028401311736e-20,
    20521874699103127e-20,
    11158703875231021e-20,
    4512291118676489e-20,
    12736584358385302e-21,
    24323338147287592e-22,
    3070519887601869e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3184159635376554e-23,
    7896171733695467e-22,
    8212328542498173e-21,
    56735729334112206e-21,
    27107017003500224e-20,
    9090208517316576e-19,
    0.002183368478666505,
    0.0038720926781830953,
    0.005272948434356916,
    0.005738434865712983,
    0.0051163718787471104,
    0.0037224919052283338,
    0.00215040341782607,
    9601390932205893e-19,
    3294395038677667e-19,
    8806486795919523e-20,
    1842484228868591e-20,
    29148989993381187e-22,
    3150123878486283e-22,
    23881197265324158e-24,
    2990915896717455e-22,
    17068562495717603e-21,
    200935905097295e-18,
    0.0015129165281058251,
    0.007672781933775517,
    0.026676960347174167,
    0.06510784795220452,
    0.11518746655723289,
    0.15307639505432957,
    0.15708091913956163,
    0.12560205987115214,
    0.0777308634752358,
    0.037258401486361156,
    0.014848998720209696,
    0.006380484006344954,
    0.003824364213701397,
    0.002554313115497864,
    0.0014147488921945638,
    5748894027293071e-19,
    16272629009427727e-20,
    3114075098448147e-20,
    3937300585993907e-21,
    30705198876018687e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4147095844058768e-22,
    8204368143409732e-21,
    7986600500833158e-20,
    5226920047762746e-19,
    0.002386627523815926,
    0.007731083139296712,
    0.018134363812824003,
    0.031711262342062244,
    0.0429058956556851,
    0.04666181092625166,
    0.04180987229591888,
    0.030840008908294095,
    0.0183539557761939,
    0.008673242661484271,
    0.0032703684289506737,
    997775681331529e-18,
    244029304940533e-18,
    45819726681199524e-21,
    61782004066966105e-22,
    5902227802550496e-22,
    2356517815436834e-21,
    7687079748822781e-20,
    8432045300940734e-19,
    0.006059553284567811,
    0.029748062706076574,
    0.10128161951297415,
    0.24431373433337908,
    0.43045231792916977,
    0.5734955209812833,
    0.5943034071332362,
    0.48494290627189973,
    0.31182972105665274,
    0.16101724783085658,
    0.0746844721252156,
    0.04054872329313849,
    0.028439936065510873,
    0.019849565548156395,
    0.011093467346171518,
    0.004519303275861565,
    0.001280985099320443,
    2453860107308903e-19,
    3104901418701266e-20,
    24243734156403174e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3584786943082932e-21,
    5866957716605471e-20,
    5318473303191656e-19,
    0.003281406014654775,
    0.014240866566017054,
    0.044302661983630504,
    0.10097072309682155,
    0.17348875785536869,
    0.23281016385436948,
    0.25296057277448786,
    0.22807232362228808,
    0.17111063350390335,
    0.10547638466562019,
    0.05299907460942109,
    0.021834400230385655,
    0.007377729043874185,
    0.001987269175027808,
    40594043221360804e-20,
    59512575309500094e-21,
    6078503210139361e-21,
    12274051206843429e-21,
    2676167322499138e-19,
    0.0026938731549338,
    0.018141918255553287,
    0.08470935363964348,
    0.27843851603222763,
    0.6574310867052187,
    1.1473471974946265,
    1.5298008851155953,
    1.6029525160433367,
    1.340810674022468,
    0.9043725525386349,
    0.5118145868197046,
    0.2799784829988241,
    0.1840531322218364,
    0.14230153404874754,
    0.10187092355446631,
    0.057292771648986135,
    0.023401857717433763,
    0.006644374834694769,
    0.0012743513855506278,
    1613938914985743e-19,
    12620966363651172e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2990915896717455e-22,
    20957865038521434e-21,
    29586073554452677e-20,
    0.002502210477182687,
    0.014527823263598213,
    0.05964357159443533,
    0.17700453303709252,
    0.38932036483005167,
    0.6539150440309326,
    0.8680137256812239,
    0.9421275431621716,
    0.8567037023603945,
    0.6572029988890262,
    0.42316666298625527,
    0.22811435118532963,
    0.1029909960781567,
    0.03831920301449024,
    0.011270885226699237,
    0.002492556322864727,
    39610264153560893e-20,
    43785598545397966e-21,
    43957073649273115e-21,
    7238680028269114e-19,
    0.00672713552794511,
    0.042230025933582875,
    0.18540410887568545,
    0.5807744658171007,
    1.3277111349280406,
    2.2788762355761616,
    3.0307590217684712,
    3.210517844583552,
    2.760639359365795,
    1.965887352370661,
    1.2292510097744793,
    0.7832327553295501,
    0.5901637523134002,
    0.4833945144314258,
    0.3514102853788176,
    0.1986348429568935,
    0.08136458073713532,
    0.02314631266835465,
    0.004445471089561414,
    5635991631893713e-19,
    44145971254259885e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23087554209061862e-22,
    8954665697290769e-20,
    0.001102785166626576,
    0.008634470278636881,
    0.046883028625789434,
    0.18106490212895052,
    0.5094589510047125,
    1.0745758603516251,
    1.7553198377213959,
    2.298351347227422,
    2.491586191635001,
    2.2908141312625,
    1.8060890831660499,
    1.2228443424151474,
    0.7103776915727469,
    0.3508681810877463,
    0.1428716411844861,
    0.04569863510995558,
    0.010956497542336026,
    0.0019014700120901212,
    23390430978606613e-20,
    11703634685934269e-20,
    0.0015074041872296948,
    0.013196652416614678,
    0.07805420209316014,
    0.3229812399994131,
    0.9603711581183789,
    2.111784454294773,
    3.543621991829057,
    4.682802592472385,
    5.006576334390102,
    4.425360029932792,
    3.328169232934826,
    2.283842028328474,
    1.6385416889272566,
    1.3442380198867916,
    1.1360532533501462,
    0.8329442642726685,
    0.4724210731684181,
    0.19392417451066662,
    0.05524615727585499,
    0.010620979626602045,
    0.001347548406296005,
    105660079946116e-18,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    11667907628411495e-21,
    2927272898114737e-19,
    0.003172032538697223,
    0.022766774741589273,
    0.11459206858755608,
    0.413672724715954,
    1.0979477916068912,
    2.210493659633572,
    3.49777221476207,
    4.507025488744976,
    4.879526341885462,
    4.545351806994934,
    3.6951756444648334,
    2.6373251092336742,
    1.6488303211742559,
    0.8861627852289489,
    0.39317184769871527,
    0.1370690346626332,
    0.03615711535739883,
    0.007198713004537629,
    0.0012475697414006438,
    5398357489345304e-19,
    0.002723750090544183,
    0.020858807210535867,
    0.11688103798625905,
    0.46073845790741924,
    1.3086000733304262,
    2.771099416181133,
    4.537942390025063,
    5.943377126773546,
    6.3975089252107065,
    5.794646075039587,
    4.568743952076861,
    3.3680561910515343,
    2.6037935370616436,
    2.2271992435170644,
    1.9031433769671393,
    1.39690289763479,
    0.7918866892474151,
    0.3248323456587848,
    0.09247204617238666,
    0.017766331791974472,
    0.0022531329510037433,
    17646021708077672e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3890097202578955e-20,
    7380146140552953e-19,
    0.007195918429057936,
    0.047379180974053026,
    0.220234740279942,
    0.7403335698672543,
    1.848849269792764,
    3.5467831376132644,
    5.428166953956776,
    6.8753581125567695,
    7.432743036813426,
    7.0204935053898225,
    5.887554727505693,
    4.42011006911508,
    2.957856534444351,
    1.7204140993726156,
    0.8323499671390215,
    0.3205767002542007,
    0.09656257897082715,
    0.02420315181175277,
    0.007002115298287167,
    0.0042223212771710615,
    0.006959279769139136,
    0.03072884420615751,
    0.15146665547251673,
    0.5653134613482845,
    1.5405636112222945,
    3.153311630439029,
    5.0432191990150415,
    6.536808976559419,
    7.063050714369869,
    6.516557539284819,
    5.310976402936279,
    4.079598747231217,
    3.2467512380795407,
    2.7869207827158906,
    2.3587638270369036,
    1.713478022215469,
    0.9628714917408626,
    0.39211603850094806,
    0.11098367723263768,
    0.021230649640371135,
    0.002683883655376921,
    2089256038609839e-19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8627018087091166e-20,
    0.0013999922950899111,
    0.012711250216573038,
    0.0781963696774363,
    0.33943086460088767,
    1.0698224709821322,
    2.5264382577521767,
    4.6368261064790754,
    6.882165524106329,
    8.57828981329274,
    9.261694881239418,
    8.866401530683053,
    7.655191045920679,
    6.017223711038188,
    4.284578686787952,
    2.6918961853247243,
    1.4332256415183573,
    0.6274107997686672,
    0.22942688495654365,
    0.08063377450296137,
    0.03867723041159255,
    0.030329983902696526,
    0.03351092431037286,
    0.06380297710405165,
    0.20650329142011647,
    0.6671170894181692,
    1.6979783146417402,
    3.3267192363409537,
    5.168587320283759,
    6.599950305191819,
    7.1203691474660324,
    6.6304774406005045,
    5.480638062891453,
    4.235899581171452,
    3.31274761283459,
    2.7406607424439304,
    2.237947179546424,
    1.5810576330120265,
    0.8688760055007887,
    0.3474480528249808,
    0.09693787501002613,
    0.018345616577809785,
    0.0023005021598488658,
    17646021708077672e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12819241717322097e-20,
    0.0019353787013223836,
    0.01693637154372812,
    0.10021626038333975,
    0.4169734016800046,
    1.2597441092877832,
    2.8637672260608142,
    5.097592353775745,
    7.406719439365995,
    9.131602693965348,
    9.863189432684544,
    9.5650585773497,
    8.481230279983745,
    6.949994715686511,
    5.247064359132599,
    3.570569627082409,
    2.124950084226122,
    1.0938535644892675,
    0.5116518053656592,
    0.25752882813967376,
    0.17438172690348347,
    0.15628449167457759,
    0.1616561338140282,
    0.20599760338411127,
    0.3854636061775074,
    0.9041553277958783,
    1.971598775583907,
    3.549272212535021,
    5.242079591998469,
    6.507241347803186,
    6.936212795247752,
    6.436148877420483,
    5.281101727676656,
    3.9598601608155564,
    2.8907756608864252,
    2.1859888992209626,
    1.6570193309201582,
    1.1113709555229743,
    0.5871643560532135,
    0.2273704950995209,
    0.06181905584081056,
    0.011471300939556978,
    0.0014167037069956923,
    105660079946116e-18,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12819241717322097e-20,
    0.0019103433110342909,
    0.01659487365994424,
    0.0974075673144762,
    0.4015204050380526,
    1.2010962032337118,
    2.7050796855114108,
    4.779042071287847,
    6.911748606964844,
    8.516416061192471,
    9.248126789400246,
    9.094477319297624,
    8.269763949368265,
    7.046447089211637,
    5.632226019418162,
    4.166709072230963,
    2.806116426079231,
    1.7308022525068023,
    1.042052335378641,
    0.7019328647696548,
    0.5826335909128758,
    0.5604136975061367,
    0.5762823874394145,
    0.6512731830844772,
    0.8982757491841933,
    1.5098330686291543,
    2.623941274356098,
    4.117607084677102,
    5.5950738178037716,
    6.609921054762051,
    6.852564958270388,
    6.244732042308547,
    4.996562765542915,
    3.5347571012541477,
    2.293119934193587,
    1.4725370698059108,
    0.9688201258162917,
    0.5936242293418862,
    0.29544470484637936,
    0.10921557611314434,
    0.028582739356879546,
    0.005146867650194504,
    6203275242419987e-19,
    44145971254259885e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    8627018087091166e-20,
    0.0013406326308655495,
    0.011883273606989903,
    0.07131025001094905,
    0.3010415600739557,
    0.9219200439421326,
    2.120491605033636,
    3.814163037987656,
    5.602666607755477,
    7.001278615671911,
    7.710578369975373,
    7.7149631767800795,
    7.194156223683294,
    6.36346964319792,
    5.374896468413219,
    4.320574757358228,
    3.2947417027337753,
    2.422760030356167,
    1.8172958278110594,
    1.5073825847242595,
    1.4147044882384,
    1.4228760830751468,
    1.473170275333862,
    1.6057651128694546,
    1.955213508053594,
    2.6891193176863952,
    3.8524133783436465,
    5.232033057418054,
    6.437164199737392,
    7.1139774439406,
    7.054432297036326,
    6.225585975959143,
    4.813211486167357,
    3.1995275078292638,
    1.8204767503482668,
    0.9311729344749607,
    0.47400337786846647,
    0.24307951017595253,
    0.10961252067347564,
    0.03802686191003824,
    0.009464756044331968,
    0.0016374718517981404,
    19063661972718677e-20,
    12620966363651172e-21,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3890097202578955e-20,
    6777300513323457e-19,
    0.006311113033589177,
    0.039842272233848695,
    0.17705455703075565,
    0.56895602859268,
    1.365615336355118,
    2.5504732902042178,
    3.875913087732163,
    4.99067697350212,
    5.634841007730882,
    5.765089037630247,
    5.515891166332748,
    5.053621048525907,
    4.491513835457966,
    3.900029788701862,
    3.3400143215308082,
    2.8779480437726397,
    2.5816006847816046,
    2.482839898723419,
    2.5330497105049656,
    2.6415911149264284,
    2.7755706788031267,
    3.012812696219613,
    3.5142035249880097,
    4.4137858623316415,
    5.656594951599137,
    6.936723677710515,
    7.848442455933839,
    8.099929734615543,
    7.591615940402844,
    6.397464212162721,
    4.747642417825729,
    3.000719074394306,
    1.554903127566519,
    0.6524222514663331,
    0.2365843935553832,
    0.08495551599296665,
    0.03071509285878738,
    0.009537703209961095,
    0.002214317989702532,
    365378281952242e-18,
    4068337678692439e-20,
    24243734156403174e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    11667907628411495e-21,
    2544064603732366e-19,
    0.00255665836748634,
    0.017322543221654954,
    0.08210992206252465,
    0.27935651291905145,
    0.7058810154111224,
    1.3852015966066267,
    2.2098802609543493,
    2.972235766881302,
    3.472429945639027,
    3.6469069942603394,
    3.577699767310503,
    3.3814161691148232,
    3.1426496541255555,
    2.928715602806843,
    2.7995823497254384,
    2.789719229496515,
    2.9071787661878514,
    3.1386007582844995,
    3.430888160296555,
    3.7176355715480645,
    4.005945478714686,
    4.425625960316471,
    5.171317509121967,
    6.345246743427204,
    7.789683153706031,
    9.080381956834167,
    9.7414629405299,
    9.500719200276272,
    8.388109595666124,
    6.6635424421246086,
    4.684196136631395,
    2.815405385834456,
    1.3759889294965353,
    0.5205524438834439,
    0.1498837312587427,
    0.03507753760246843,
    0.007872533592098732,
    0.0018109649171961027,
    360299076153906e-18,
    5651742803937041e-20,
    5970845614493672e-21,
    30705198876018687e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23087554209061862e-22,
    733841328958508e-19,
    8042614167404026e-19,
    0.005858215609579022,
    0.029487862147583286,
    0.10581448551404296,
    0.28200567065553406,
    0.5864531638954996,
    0.9931266114837085,
    1.4070989642202756,
    1.7079794091808072,
    1.8419451610944257,
    1.8472845492074308,
    1.791270556098453,
    1.7316035492076818,
    1.7312555839485209,
    1.856052142944746,
    2.136405926877529,
    2.554284178425271,
    3.061985073820357,
    3.590158150298421,
    4.082003134327217,
    4.577122029336374,
    5.257449873693622,
    6.355585221824395,
    7.946272926413819,
    9.76188423173983,
    11.220804778610486,
    11.717954998259671,
    10.972455176024726,
    9.170435716669045,
    6.817158889529653,
    4.458977116203319,
    2.49863350286146,
    1.1462955563724682,
    0.40726738241938587,
    0.10671643813255839,
    0.020183252558171147,
    0.0028677278738453754,
    351581134659338e-18,
    3952649138707058e-20,
    5871148417936424e-21,
    5822623811666082e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2990915896717455e-22,
    16390714152884348e-21,
    19313224255509747e-20,
    0.0014917627685307362,
    0.007874556244712266,
    0.029642481848188813,
    0.08361346143129152,
    0.1858676727259888,
    0.33639012132702006,
    0.5028711096087275,
    0.6330255616426906,
    0.6987345158524634,
    0.7132175896208193,
    0.7060147125999146,
    0.7090165836610078,
    0.7679896009079008,
    0.9393516065630725,
    1.2592721610340223,
    1.7254888933180408,
    2.3013485082027803,
    2.922845988278646,
    3.538633346025268,
    4.204178153008141,
    5.137513952416537,
    6.600176095789664,
    8.639463096773023,
    10.882265854638252,
    12.58585253132409,
    13.005589453473025,
    11.849561156947475,
    9.460141816048331,
    6.582536085038992,
    3.9525242050227742,
    2.0101955611983424,
    0.8393656400112789,
    0.27524396238799,
    0.06739204554947202,
    0.011771800491636102,
    0.0014127717163506135,
    11018825850890128e-20,
    23326366181715106e-22,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    27234650053120633e-22,
    3367278199576748e-20,
    27219659342216535e-20,
    0.0014955523738769826,
    0.005914725429442063,
    0.017807476385200423,
    0.042646205988857065,
    0.0825658142239488,
    0.12962821323163204,
    0.16825638573544488,
    0.18916032650132975,
    0.1956613652403174,
    0.1971529868882363,
    0.20672548610354152,
    0.24781634454032014,
    0.354554768393992,
    0.5594606873597514,
    0.8817292462329607,
    1.318043127226538,
    1.8362223383956384,
    2.404939061665943,
    3.0897599883837916,
    4.121107386279162,
    5.766555282665314,
    8.048690342561612,
    10.53004738373338,
    12.376623475952588,
    12.770265893589997,
    11.426640683906228,
    8.79246870849093,
    5.759485428523606,
    3.1658261175702114,
    1.4359039875113373,
    0.5278595886906593,
    0.1535413424598715,
    0.03408976974095977,
    0.0055141856717163176,
    6101540127298347e-19,
    4123360864396105e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    30705198876018687e-23,
    3961181783259232e-21,
    33672781995767476e-21,
    19389386729631107e-20,
    8157498844588494e-19,
    0.002655661981352151,
    0.006885994764901244,
    0.014198771177615033,
    0.023226842691744312,
    0.030875834983862663,
    0.03518744213569924,
    0.0367632388992326,
    0.0377102543985591,
    0.04182939629557886,
    0.05732202592152049,
    0.09844869562001357,
    0.1842436350267766,
    0.33530797572015164,
    0.5659971097014986,
    0.8741502284533509,
    1.2566186286001202,
    1.7871493039188122,
    2.680042697291204,
    4.179271221007777,
    6.298982373817795,
    8.621571472980769,
    10.354835926848907,
    10.7252057814885,
    9.479685466803947,
    7.07550894993925,
    4.393939674408826,
    2.2255782666955604,
    0.9008629109693784,
    0.28721085935718815,
    0.07151904512582612,
    0.013732198635451212,
    0.001966694638536209,
    19366513078934407e-20,
    1196699921808324e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    27234650053120633e-22,
    16490411349441596e-21,
    749000050864914e-19,
    2675075524585942e-19,
    7540241988117182e-19,
    0.0016486375625998184,
    0.0027928816116701625,
    0.003784697499170934,
    0.004359700650541411,
    0.004594954354122804,
    0.0048193067336889505,
    0.005794038497317735,
    0.009468510560648685,
    0.01993359815842492,
    0.04437887049689374,
    0.09348820238713902,
    0.1790323729875685,
    0.30851904495905463,
    0.49384948196537926,
    0.8010537643224347,
    1.3950345224229925,
    2.4665316874336503,
    4.0411467254705915,
    5.8118712750796355,
    7.163601181221187,
    7.478674459543631,
    6.552025359221569,
    4.758372680501636,
    2.8141275036667994,
    1.3250615993789916,
    0.48520969338349,
    0.13566480309295761,
    0.02873231558711658,
    0.004601422627572718,
    546119132072804e-18,
    42937339980155654e-21,
    233263661817151e-20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    24323338147287592e-22,
    12744544757473745e-21,
    45222608383322136e-21,
    1119817163036486e-19,
    20217175251351367e-20,
    2829049392012766e-19,
    33144794950123877e-20,
    3541011499838016e-19,
    38596348806539503e-20,
    5309338320761818e-19,
    0.0011046118722372743,
    0.002909656365969105,
    0.007720057394011568,
    0.018842407272220495,
    0.04097053730362834,
    0.07907346852671535,
    0.14383336090174967,
    0.27664006881903935,
    0.5746351265397084,
    1.1579538708246417,
    2.0633661294271226,
    3.1279705101317252,
    3.9752557512241573,
    4.19926129417208,
    3.6539482483226706,
    2.583516119332894,
    1.4566197597363932,
    0.6407896606775935,
    0.21507069320633057,
    0.053951711983768386,
    0.009963779319736238,
    0.0013374778734163602,
    1251360322947594e-19,
    6564917558946561e-21,
    2990915896717455e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    2715504606223622e-21,
    16382753753795904e-21,
    7616396497468911e-20,
    2895577404260802e-19,
    9462058612817631e-19,
    0.002695851817421179,
    0.00665606853915967,
    0.014495710719026658,
    0.031020913173001707,
    0.07375929081205834,
    0.18424950644350988,
    0.41981058074632394,
    0.8113274586656899,
    1.3006801274724626,
    1.712562586772885,
    1.8367707454026552,
    1.5894295777638612,
    1.0938635970279753,
    0.587716489170019,
    0.24184979372015322,
    0.07485192672910793,
    0.017111337613026658,
    0.0028356362043123,
    32955587898681e-17,
    24240032264343817e-21,
    6739991786354153e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    3070519887601869e-22,
    2715504606223622e-21,
    162910169563271e-19,
    7298149494542397e-20,
    25735375765419696e-20,
    7406694486832852e-19,
    0.001878428222822324,
    0.0050073792012368555,
    0.01513090702848038,
    0.04479003667624511,
    0.11381392957762673,
    0.23803652814306797,
    0.4048428125837173,
    0.5541202575032977,
    0.6046305132862502,
    0.5208353781452475,
    0.3491415530726313,
    0.17891182657334515,
    0.06893352741363643,
    0.019704070400269582,
    0.004124152097814433,
    6208854861695935e-19,
    6351989884318667e-20,
    36844841396401805e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    2340597017259952e-21,
    12357827605223793e-21,
    4798996019693367e-20,
    1624092261889027e-19,
    6006804778627589e-19,
    0.002329296694898684,
    0.007985138716771062,
    0.02240627405672311,
    0.050713743732433,
    0.09164702813957162,
    0.1304517099997004,
    0.14481670378266487,
    0.12428898283428214,
    0.0813441963633752,
    0.03989331023291019,
    0.014439584843007256,
    0.003818835859825974,
    7319517131969791e-19,
    10021540102219016e-20,
    8989874081888676e-21,
    4147095844058768e-22,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    598183179343491e-21,
    6393515597987991e-21,
    4746713766475114e-20,
    251201357816461e-18,
    0.0010011132134747117,
    0.003113534554217674,
    0.007648273096757398,
    0.014674863052957305,
    0.02166787968749958,
    0.024432520887098675,
    0.020908207459889,
    0.013405705621619392,
    0.006326299176438175,
    0.002163659149710805,
    5316226131123376e-19,
    9339821365743738e-20,
    11602153363966244e-21,
    8893143699267951e-22,
    3184159635376554e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    32297278693706967e-23,
    29308197975150016e-22,
    18045502428222603e-21,
    8240692790728146e-20,
    2889484395561491e-19,
    7795157066284844e-19,
    0.0015924905955298787,
    0.002436533302135232,
    0.00278775756120765,
    0.00237953642268871,
    0.0014969207312956478,
    6803636002808941e-19,
    21907757463240926e-20,
    4925897633768825e-20,
    764155468800881e-20,
    7975775724579879e-22,
    3980199544220693e-23,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    23881197265324158e-24,
    2990915896717455e-22,
    23326366181715106e-22,
    11943118020817917e-21,
    4093451705428931e-20,
    959045434708234e-19,
    1574590265990988e-19,
    18519598861825484e-20,
    1574590265990988e-19,
    959045434708234e-19,
    4093451705428931e-20,
    11943118020817917e-21,
    23326366181715106e-22,
    2990915896717455e-22,
    23881197265324158e-24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
], Xt = {
  width: L4,
  height: $4,
  max_val: I4,
  data: j4
};
function yr(e, t) {
  return e[1] + 0.5 * t * (e[2] - e[0] + t * (2 * e[0] - 5 * e[1] + 4 * e[2] - e[3] + t * (3 * (e[1] - e[2]) + e[3] - e[0])));
}
function H4(e, t, r) {
  const n = new Array(4);
  return n[0] = yr(e[0], r), n[1] = yr(e[1], r), n[2] = yr(e[2], r), n[3] = yr(e[3], r), yr(n, t);
}
function ds(e, t = 4) {
  const r = e.length, n = e[0].length, o = r * t, a = n * t, i = new Float32Array(a * o), s = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  for (let c = 0; c < o; c++)
    for (let l = 0; l < a; l++) {
      const u = l / t, d = c / t, v = Math.floor(u), h = Math.floor(d), m = u - v, g = d - h;
      for (let y = -1; y <= 2; y++)
        for (let p = -1; p <= 2; p++) {
          let C = h + y, S = v + p;
          C < 0 && (C = 0), C >= r && (C = r - 1), S < 0 && (S = 0), S >= n && (S = n - 1), s[y + 1][p + 1] = e[C][S];
        }
      let f = H4(s, m, g);
      f = Math.max(0, Math.min(f, 255)), i[c * a + l] = f;
    }
  return i;
}
const V4 = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform sampler2D uPressureMap;
uniform float uDisplacementScale;
uniform float uThickness;
uniform float uSmoothness;

float getSmoothedPressure(vec2 uv) {
    float offset = 1.0 / 128.0;
    float p = texture2D(uPressureMap, uv).r;
    if (uSmoothness < 0.01) return p;
    
    float pL = texture2D(uPressureMap, uv + vec2(-offset, 0.0)).r;
    float pR = texture2D(uPressureMap, uv + vec2(offset, 0.0)).r;
    float pD = texture2D(uPressureMap, uv + vec2(0.0, -offset)).r;
    float pU = texture2D(uPressureMap, uv + vec2(0.0, offset)).r;
    float pTL = texture2D(uPressureMap, uv + vec2(-offset, offset)).r;
    float pTR = texture2D(uPressureMap, uv + vec2(offset, offset)).r;
    float pDL = texture2D(uPressureMap, uv + vec2(-offset, -offset)).r;
    float pDR = texture2D(uPressureMap, uv + vec2(offset, -offset)).r;
    float avg = (p + pL + pR + pD + pU + pTL + pTR + pDL + pDR) / 9.0;
    return mix(p, avg, uSmoothness);
}

void main() {
  vUv = uv;
  vec3 objectNormal = normal;
  
  if (objectNormal.z > 0.5) {
      float pressure = getSmoothedPressure(uv);
      vPressure = pressure;
      vec3 newPosition = position;
      float maxDisplacement = uThickness * 0.95;
      float displacement = min(pressure * uDisplacementScale, maxDisplacement);
      newPosition.z -= displacement;
      
      float offset = 1.0 / 128.0;
      float pL = getSmoothedPressure(uv + vec2(-offset, 0.0));
      float pR = getSmoothedPressure(uv + vec2(offset, 0.0));
      float pD = getSmoothedPressure(uv + vec2(0.0, -offset));
      float pU = getSmoothedPressure(uv + vec2(0.0, offset));
      
      float hL = min(pL * uDisplacementScale, maxDisplacement);
      float hR = min(pR * uDisplacementScale, maxDisplacement);
      float hD = min(pD * uDisplacementScale, maxDisplacement);
      float hU = min(pU * uDisplacementScale, maxDisplacement);
      
      vec3 vT = normalize(vec3(2.0 * offset, 0.0, hL - hR));
      vec3 vB = normalize(vec3(0.0, 2.0 * offset, hD - hU));
      vNormal = normalize(cross(vT, vB));
      
      vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  } else {
      vPressure = 0.0;
      vNormal = normal;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
}
`, B4 = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform bool uShowHeatmap;
uniform vec3 uBaseColor;
uniform bool uEnableClipping;
uniform float uClipLevel;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  float r = clamp(1.5 - abs(2.0 * t - 1.0) * 2.0, 0.0, 1.0);
  float g = clamp(1.5 - abs(2.0 * t - 0.5) * 2.0, 0.0, 1.0);
  float b = clamp(1.5 - abs(2.0 * t - 0.0) * 2.0, 0.0, 1.0);
  return vec3(r, g, b);
}

void main() {
  if (uEnableClipping && vUv.y < uClipLevel) discard;

  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  vec3 ambient = vec3(0.3);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.7);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
  vec3 specular = spec * vec3(0.1);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.01) {
      vec3 heatColor = getHeatmapColor(vPressure);
      surfaceColor = mix(surfaceColor, heatColor, 0.9);
  }

  if (uEnableClipping && abs(vUv.y - uClipLevel) < 0.005) {
      surfaceColor = vec3(1.0, 0.2, 0.2);
      ambient = vec3(1.0);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`, v1 = (e = 64) => {
  const t = new Array(e);
  for (let r = 0; r < e; r++) {
    t[r] = new Array(e);
    for (let n = 0; n < e; n++) {
      const o = (n - e / 2) / (e / 2), a = (r - e / 2) / (e / 2), i = Math.sqrt(o * o + a * a);
      t[r][n] = Math.max(0, 255 * (1 - i));
    }
  }
  return t;
}, vs = (e, t, r) => {
  if (!Array.isArray(e))
    return v1(t);
  if (Array.isArray(e[0]))
    return e;
  const n = r, o = t, a = new Array(n);
  for (let i = 0; i < n; i++) {
    a[i] = new Array(o);
    for (let s = 0; s < o; s++)
      a[i][s] = e[i * o + s] ?? 0;
  }
  return a;
};
function s7({
  showHeatmap: e,
  enableClipping: t,
  clipLevel: r,
  depthScale: n,
  smoothness: o,
  realtimeData: a,
  sourceData: i,
  sourceMax: s,
  upscale: c = 2
}) {
  const l = G(null), u = G(null), d = G(null), v = G(null), h = G(null), m = G(null), g = G(null), f = G(null), [y, p] = xn(!1), C = G(i), S = G(s), w = G({ width: 128, height: 128, scale: c, max: 1 });
  Te(() => {
    C.current = i, S.current = s;
  }, [i, s]);
  const x = G(!1), E = G({ x: 0, y: 0 }), _ = G({ radius: 6, phi: Math.PI / 4, theta: 0 }), P = G(new A.Vector3(0, 0, 0));
  return Te(() => {
    var le, Z;
    if (!l.current)
      return;
    const R = new A.Scene();
    R.background = new A.Color(16119285), d.current = R;
    const T = new A.PerspectiveCamera(50, l.current.clientWidth / l.current.clientHeight, 0.1, 1e3);
    T.position.set(0, 4, 4), T.lookAt(0, 0, 0), v.current = T;
    const F = new A.WebGLRenderer({ antialias: !0 });
    F.setSize(l.current.clientWidth, l.current.clientHeight), F.setPixelRatio(Math.min(window.devicePixelRatio, 2)), l.current.appendChild(F.domElement), u.current = F;
    const k = new A.AmbientLight(16777215, 0.4);
    R.add(k);
    const D = new A.SpotLight(16777215, 0.8);
    D.position.set(10, 10, 10), R.add(D);
    const $ = new A.PointLight(16777215, 0.5);
    $.position.set(-10, 5, -10), R.add($);
    const L = C.current || (Xt == null ? void 0 : Xt.data) || v1(64), I = vs(L, ((le = L[0]) == null ? void 0 : le.length) || 64, L.length || 64), H = typeof S.current == "number" ? S.current : Xt == null ? void 0 : Xt.max_val, B = Math.max(1, Math.round(c)), q = (Z = I[0]) != null && Z.length ? I[0].length * B : 128, U = I.length ? I.length * B : 128, V = q * U, Q = new Float32Array(V), K = ds(I, B);
    for (let ae = 0; ae < V; ae++)
      Q[ae] = (K[ae] ?? 0) / H;
    w.current = { width: q, height: U, scale: B, max: H };
    const X = new A.DataTexture(Q, q, U, A.RedFormat, A.FloatType);
    X.magFilter = A.LinearFilter, X.minFilter = A.LinearFilter, X.needsUpdate = !0, g.current = X;
    const z = new A.ShaderMaterial({
      vertexShader: V4,
      fragmentShader: B4,
      uniforms: {
        uPressureMap: { value: X },
        uDisplacementScale: { value: n },
        uThickness: { value: 0.15 },
        uShowHeatmap: { value: e },
        uBaseColor: { value: new A.Color("#eeeeee") },
        uEnableClipping: { value: t },
        uClipLevel: { value: r },
        uSmoothness: { value: o }
      },
      side: A.DoubleSide
    });
    m.current = z;
    const J = new A.BoxGeometry(2, 2, 0.15, 256, 256, 1), ne = new A.Mesh(J, z);
    ne.rotation.x = -Math.PI / 2, R.add(ne), h.current = ne;
    const ce = (ae) => {
      x.current = !0, E.current = { x: ae.clientX, y: ae.clientY };
    }, oe = () => {
      x.current = !1;
    }, ie = (ae) => {
      if (!x.current)
        return;
      const ge = ae.clientX - E.current.x, me = ae.clientY - E.current.y;
      _.current.theta -= ge * 0.01, _.current.phi -= me * 0.01, _.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, _.current.phi)), E.current = { x: ae.clientX, y: ae.clientY };
    }, he = (ae) => {
      _.current.radius += ae.deltaY * 0.01, _.current.radius = Math.max(2, Math.min(15, _.current.radius));
    };
    F.domElement.addEventListener("mousedown", ce), F.domElement.addEventListener("mouseup", oe), F.domElement.addEventListener("mousemove", ie), F.domElement.addEventListener("wheel", he);
    const we = () => {
      f.current = requestAnimationFrame(we);
      const { radius: ae, phi: ge, theta: me } = _.current;
      T.position.x = ae * Math.sin(ge) * Math.sin(me), T.position.y = ae * Math.cos(ge), T.position.z = ae * Math.sin(ge) * Math.cos(me), T.lookAt(P.current), F.render(R, T);
    };
    we();
    const j = () => {
      if (!l.current)
        return;
      const ae = l.current.clientWidth, ge = l.current.clientHeight;
      T.aspect = ae / ge, T.updateProjectionMatrix(), F.setSize(ae, ge);
    };
    return window.addEventListener("resize", j), p(!0), () => {
      window.removeEventListener("resize", j), F.domElement.removeEventListener("mousedown", ce), F.domElement.removeEventListener("mouseup", oe), F.domElement.removeEventListener("mousemove", ie), F.domElement.removeEventListener("wheel", he), f.current && cancelAnimationFrame(f.current), J.dispose(), z.dispose(), X.dispose(), F.dispose(), l.current && F.domElement && l.current.removeChild(F.domElement);
    };
  }, []), Te(() => {
    m.current && (m.current.uniforms.uShowHeatmap.value = e, m.current.uniforms.uEnableClipping.value = t, m.current.uniforms.uClipLevel.value = r, m.current.uniforms.uDisplacementScale.value = n, m.current.uniforms.uSmoothness.value = o);
  }, [e, t, r, n, o]), Te(() => {
    const R = g.current;
    if (!R || !a)
      return;
    const { width: T, height: F, scale: k, max: D } = w.current, $ = vs(a, T / k, F / k), L = ds($, k), I = R.image.data;
    for (let H = 0; H < F; H++)
      for (let B = 0; B < T; B++) {
        const q = (F - 1 - H) * T + B, U = L[q];
        I[H * T + B] = Math.min((U ?? 0) / (D || 1), 1);
      }
    R.needsUpdate = !0;
  }, [a]), /* @__PURE__ */ Pe.jsxs(
    "div",
    {
      className: "w-full h-full relative bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800",
      style: { width: "100%", height: "100%", position: "relative" },
      children: [
        /* @__PURE__ */ Pe.jsx("div", { ref: l, className: "w-full h-full", style: { width: "100%", height: "100%" } }),
        /* @__PURE__ */ Pe.jsxs("div", { className: "absolute bottom-4 left-4 text-xs text-gray-400 pointer-events-none", children: [
          /* @__PURE__ */ Pe.jsx("p", { children: "Left Click + Drag: Rotate" }),
          /* @__PURE__ */ Pe.jsx("p", { children: "Scroll: Zoom" })
        ] })
      ]
    }
  );
}
export {
  Q4 as CanvasHeatmap,
  r7 as FootLenScene,
  n7 as FootSinkScene,
  Z4 as NumThreeColor,
  i7 as PlaybackBar,
  N4 as PlaybackPlayToggle,
  D4 as PlaybackSpeedMenu,
  K4 as ReplayWindowLineChart,
  Y4 as SimpleLineChart,
  t7 as SitAndFootScene,
  J4 as ThreeAndCarPoint,
  s7 as ThreeSinkScene,
  dl as ThreeSinkScene256x64,
  e7 as WebglHeatmap
};
