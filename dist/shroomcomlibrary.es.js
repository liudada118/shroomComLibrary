import * as b from "react";
import ye, { forwardRef as Ar, useRef as Y, useImperativeHandle as na, useEffect as ke, useMemo as Q0, version as ic, isValidElement as ss, useContext as wr, useLayoutEffect as sc, useState as Cn, createContext as cc } from "react";
import * as cs from "echarts";
import * as N from "three";
import { GLTFLoader as lc } from "three/examples/jsm/loaders/GLTFLoader.js";
import { TrackballControls as Aa } from "three/examples/jsm/controls/TrackballControls";
import { OrbitControls as ls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry as zn } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import Na, { createPortal as uc, flushSync as fc } from "react-dom";
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var co = { exports: {} }, dr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function vc() {
  if (Da)
    return dr;
  Da = 1;
  var e = ye, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var La;
function hc() {
  return La || (La = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = !1, r = !1, n = !1, o = !1, a = !1, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), C = Symbol.iterator, w = "@@iterator";
    function S(P) {
      if (P === null || typeof P != "object")
        return null;
      var W = C && P[C] || P[w];
      return typeof W == "function" ? W : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(P) {
      {
        for (var W = arguments.length, Q = new Array(W > 1 ? W - 1 : 0), pe = 1; pe < W; pe++)
          Q[pe - 1] = arguments[pe];
        M("error", P, Q);
      }
    }
    function M(P, W, Q) {
      {
        var pe = x.ReactDebugCurrentFrame, Fe = pe.getStackAddendum();
        Fe !== "" && (W += "%s", Q = Q.concat([Fe]));
        var Ie = Q.map(function(xe) {
          return String(xe);
        });
        Ie.unshift("Warning: " + W), Function.prototype.apply.call(console[P], console, Ie);
      }
    }
    var R;
    R = Symbol.for("react.module.reference");
    function _(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === c || P === u || a || P === l || P === g || P === m || o || P === p || t || r || n || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === f || P.$$typeof === d || P.$$typeof === v || P.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === R || P.getModuleId !== void 0));
    }
    function O(P, W, Q) {
      var pe = P.displayName;
      if (pe)
        return pe;
      var Fe = W.displayName || W.name || "";
      return Fe !== "" ? Q + "(" + Fe + ")" : Q;
    }
    function F(P) {
      return P.displayName || "Context";
    }
    function k(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case c:
          return "Fragment";
        case s:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case g:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case v:
            var W = P;
            return F(W) + ".Consumer";
          case d:
            var Q = P;
            return F(Q._context) + ".Provider";
          case h:
            return O(P, P.render, "ForwardRef");
          case f:
            var pe = P.displayName || null;
            return pe !== null ? pe : k(P.type) || "Memo";
          case y: {
            var Fe = P, Ie = Fe._payload, xe = Fe._init;
            try {
              return k(xe(Ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, $ = 0, I, j, V, B, G, U, H;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function K() {
      {
        if ($ === 0) {
          I = console.log, j = console.info, V = console.warn, B = console.error, G = console.group, U = console.groupCollapsed, H = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        $++;
      }
    }
    function X() {
      {
        if ($--, $ === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, P, {
              value: I
            }),
            info: A({}, P, {
              value: j
            }),
            warn: A({}, P, {
              value: V
            }),
            error: A({}, P, {
              value: B
            }),
            group: A({}, P, {
              value: G
            }),
            groupCollapsed: A({}, P, {
              value: U
            }),
            groupEnd: A({}, P, {
              value: H
            })
          });
        }
        $ < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = x.ReactCurrentDispatcher, te;
    function re(P, W, Q) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (Fe) {
            var pe = Fe.stack.trim().match(/\n( *(at )?)/);
            te = pe && pe[1] || "";
          }
        return `
` + te + P;
      }
    }
    var ce = !1, ne;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new oe();
    }
    function me(P, W) {
      if (!P || ce)
        return "";
      {
        var Q = ne.get(P);
        if (Q !== void 0)
          return Q;
      }
      var pe;
      ce = !0;
      var Fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = z.current, z.current = null, K();
      try {
        if (W) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch (ue) {
              pe = ue;
            }
            Reflect.construct(P, [], xe);
          } else {
            try {
              xe.call();
            } catch (ue) {
              pe = ue;
            }
            P.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            pe = ue;
          }
          P();
        }
      } catch (ue) {
        if (ue && pe && typeof ue.stack == "string") {
          for (var Se = ue.stack.split(`
`), c0 = pe.stack.split(`
`), He = Se.length - 1, Je = c0.length - 1; He >= 1 && Je >= 0 && Se[He] !== c0[Je]; )
            Je--;
          for (; He >= 1 && Je >= 0; He--, Je--)
            if (Se[He] !== c0[Je]) {
              if (He !== 1 || Je !== 1)
                do
                  if (He--, Je--, Je < 0 || Se[He] !== c0[Je]) {
                    var Ge = `
` + Se[He].replace(" at new ", " at ");
                    return P.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", P.displayName)), typeof P == "function" && ne.set(P, Ge), Ge;
                  }
                while (He >= 1 && Je >= 0);
              break;
            }
        }
      } finally {
        ce = !1, z.current = Ie, X(), Error.prepareStackTrace = Fe;
      }
      var k0 = P ? P.displayName || P.name : "", Ae = k0 ? re(k0) : "";
      return typeof P == "function" && ne.set(P, Ae), Ae;
    }
    function Ee(P, W, Q) {
      return me(P, !1);
    }
    function L(P) {
      var W = P.prototype;
      return !!(W && W.isReactComponent);
    }
    function fe(P, W, Q) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return me(P, L(P));
      if (typeof P == "string")
        return re(P);
      switch (P) {
        case g:
          return re("Suspense");
        case m:
          return re("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case h:
            return Ee(P.render);
          case f:
            return fe(P.type, W, Q);
          case y: {
            var pe = P, Fe = pe._payload, Ie = pe._init;
            try {
              return fe(Ie(Fe), W, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, ie = {}, Ce = x.ReactDebugCurrentFrame;
    function he(P) {
      if (P) {
        var W = P._owner, Q = fe(P.type, P._source, W ? W.type : null);
        Ce.setExtraStackFrame(Q);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ye(P, W, Q, pe, Fe) {
      {
        var Ie = Function.call.bind(de);
        for (var xe in P)
          if (Ie(P, xe)) {
            var Se = void 0;
            try {
              if (typeof P[xe] != "function") {
                var c0 = Error((pe || "React class") + ": " + Q + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw c0.name = "Invariant Violation", c0;
              }
              Se = P[xe](W, xe, pe, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (He) {
              Se = He;
            }
            Se && !(Se instanceof Error) && (he(Fe), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", Q, xe, typeof Se), he(null)), Se instanceof Error && !(Se.message in ie) && (ie[Se.message] = !0, he(Fe), E("Failed %s type: %s", Q, Se.message), he(null));
          }
      }
    }
    var Z = Array.isArray;
    function le(P) {
      return Z(P);
    }
    function ge(P) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, Q = W && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return Q;
      }
    }
    function J(P) {
      try {
        return Re(P), !1;
      } catch {
        return !0;
      }
    }
    function Re(P) {
      return "" + P;
    }
    function Me(P) {
      if (J(P))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(P)), Re(P);
    }
    var We = x.ReactCurrentOwner, $e = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, r0, _e;
    _e = {};
    function be(P) {
      if (de.call(P, "ref")) {
        var W = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function Be(P) {
      if (de.call(P, "key")) {
        var W = Object.getOwnPropertyDescriptor(P, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function Ke(P, W) {
      if (typeof P.ref == "string" && We.current && W && We.current.stateNode !== W) {
        var Q = k(We.current.type);
        _e[Q] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(We.current.type), P.ref), _e[Q] = !0);
      }
    }
    function l0(P, W) {
      {
        var Q = function() {
          Ne || (Ne = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Q.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function u0(P, W) {
      {
        var Q = function() {
          r0 || (r0 = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Q.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var o0 = function(P, W, Q, pe, Fe, Ie, xe) {
      var Se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: P,
        key: W,
        ref: Q,
        props: xe,
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
        value: pe
      }), Object.defineProperty(Se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.freeze && (Object.freeze(Se.props), Object.freeze(Se)), Se;
    };
    function f0(P, W, Q, pe, Fe) {
      {
        var Ie, xe = {}, Se = null, c0 = null;
        Q !== void 0 && (Me(Q), Se = "" + Q), Be(W) && (Me(W.key), Se = "" + W.key), be(W) && (c0 = W.ref, Ke(W, Fe));
        for (Ie in W)
          de.call(W, Ie) && !$e.hasOwnProperty(Ie) && (xe[Ie] = W[Ie]);
        if (P && P.defaultProps) {
          var He = P.defaultProps;
          for (Ie in He)
            xe[Ie] === void 0 && (xe[Ie] = He[Ie]);
        }
        if (Se || c0) {
          var Je = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          Se && l0(xe, Je), c0 && u0(xe, Je);
        }
        return o0(P, Se, c0, Fe, pe, We.current, xe);
      }
    }
    var w0 = x.ReactCurrentOwner, v0 = x.ReactDebugCurrentFrame;
    function b0(P) {
      if (P) {
        var W = P._owner, Q = fe(P.type, P._source, W ? W.type : null);
        v0.setExtraStackFrame(Q);
      } else
        v0.setExtraStackFrame(null);
    }
    var Ze;
    Ze = !1;
    function Qe(P) {
      return typeof P == "object" && P !== null && P.$$typeof === i;
    }
    function i0() {
      {
        if (w0.current) {
          var P = k(w0.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function h0(P) {
      {
        if (P !== void 0) {
          var W = P.fileName.replace(/^.*[\\\/]/, ""), Q = P.lineNumber;
          return `

Check your code at ` + W + ":" + Q + ".";
        }
        return "";
      }
    }
    var n0 = {};
    function q0(P) {
      {
        var W = i0();
        if (!W) {
          var Q = typeof P == "string" ? P : P.displayName || P.name;
          Q && (W = `

Check the top-level render call using <` + Q + ">.");
        }
        return W;
      }
    }
    function s0(P, W) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var Q = q0(W);
        if (n0[Q])
          return;
        n0[Q] = !0;
        var pe = "";
        P && P._owner && P._owner !== w0.current && (pe = " It was passed a child from " + k(P._owner.type) + "."), b0(P), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, pe), b0(null);
      }
    }
    function ze(P, W) {
      {
        if (typeof P != "object")
          return;
        if (le(P))
          for (var Q = 0; Q < P.length; Q++) {
            var pe = P[Q];
            Qe(pe) && s0(pe, W);
          }
        else if (Qe(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Fe = S(P);
          if (typeof Fe == "function" && Fe !== P.entries)
            for (var Ie = Fe.call(P), xe; !(xe = Ie.next()).done; )
              Qe(xe.value) && s0(xe.value, W);
        }
      }
    }
    function Ue(P) {
      {
        var W = P.type;
        if (W == null || typeof W == "string")
          return;
        var Q;
        if (typeof W == "function")
          Q = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === f))
          Q = W.propTypes;
        else
          return;
        if (Q) {
          var pe = k(W);
          Ye(Q, P.props, "prop", pe, P);
        } else if (W.PropTypes !== void 0 && !Ze) {
          Ze = !0;
          var Fe = k(W);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Fe || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function L0(P) {
      {
        for (var W = Object.keys(P.props), Q = 0; Q < W.length; Q++) {
          var pe = W[Q];
          if (pe !== "children" && pe !== "key") {
            b0(P), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), b0(null);
            break;
          }
        }
        P.ref !== null && (b0(P), E("Invalid attribute `ref` supplied to `React.Fragment`."), b0(null));
      }
    }
    function $0(P, W, Q, pe, Fe, Ie) {
      {
        var xe = _(P);
        if (!xe) {
          var Se = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (Se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c0 = h0(Fe);
          c0 ? Se += c0 : Se += i0();
          var He;
          P === null ? He = "null" : le(P) ? He = "array" : P !== void 0 && P.$$typeof === i ? (He = "<" + (k(P.type) || "Unknown") + " />", Se = " Did you accidentally export a JSX literal instead of a component?") : He = typeof P, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", He, Se);
        }
        var Je = f0(P, W, Q, Fe, Ie);
        if (Je == null)
          return Je;
        if (xe) {
          var Ge = W.children;
          if (Ge !== void 0)
            if (pe)
              if (le(Ge)) {
                for (var k0 = 0; k0 < Ge.length; k0++)
                  ze(Ge[k0], P);
                Object.freeze && Object.freeze(Ge);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(Ge, P);
        }
        return P === c ? L0(Je) : Ue(Je), Je;
      }
    }
    function F0(P, W, Q) {
      return $0(P, W, Q, !0);
    }
    function vt(P, W, Q) {
      return $0(P, W, Q, !1);
    }
    var ht = vt, rt = F0;
    vr.Fragment = c, vr.jsx = ht, vr.jsxs = rt;
  }()), vr;
}
process.env.NODE_ENV === "production" ? co.exports = vc() : co.exports = hc();
var Te = co.exports;
const mc = ({ xData: e, yData: t, yMax: r, lineColors: n, areaColors: o }) => {
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
}, N4 = Ar((e, t) => {
  const { xData: r, yData: n, yMax: o, lineColors: a, areaColors: i, className: s, style: c } = e, l = Y(null), u = Y(null), d = (v) => {
    var h;
    (h = u.current) == null || h.setOption(mc(v));
  };
  return na(t, () => ({
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
  })), ke(() => {
    if (l.current)
      return u.current = cs.init(l.current), () => {
        var v, h;
        return (h = (v = u.current) == null ? void 0 : v.dispose) == null ? void 0 : h.call(v);
      };
  }, []), ke(() => {
    !u.current || !r || !n || d({ xData: r, yData: n, yMax: o, lineColors: a, areaColors: i });
  }, [r, n, o, a, i]), /* @__PURE__ */ Te.jsx("div", { ref: l, className: s, style: c });
}), gc = ({ xData: e, series: t, yMax: r }) => ({
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
function D4({
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
  const u = Y(null), d = Y(null), v = Q0(() => {
    if (Array.isArray(e) && e.length)
      return e;
    const m = Array.isArray(i) ? i : [], f = Array.isArray(s) ? s : [];
    return [
      { name: "line1", data: m, color: (a == null ? void 0 : a[0]) || "#12D0BE", smooth: !0 },
      {
        name: "line2",
        data: f,
        color: (a == null ? void 0 : a[1]) || "#D3C2FF",
        smooth: !0,
        showLastDot: !0
      }
    ];
  }, [e, i, s, a]), h = Q0(() => {
    const m = v.map((x) => ({
      ...x,
      data: Array.isArray(x.data) ? x.data : []
    })), f = m.length ? Math.max(...m.map((x) => x.data.length)) : 0, y = r != null, p = y ? Math.max(0, Math.min(r, f)) : f, C = n && y ? Math.max(0, p - n) : 0, w = t ? t.slice(C, p) : Array.from({ length: p - C }, (x, E) => C + E + 1), S = m.map((x) => ({
      ...x,
      data: x.data.slice(C, p)
    }));
    return { x: w, series: S };
  }, [v, t, r, n]);
  ke(() => {
    if (u.current)
      return d.current = cs.init(u.current), () => {
        var m, f;
        return (f = (m = d.current) == null ? void 0 : m.dispose) == null ? void 0 : f.call(m);
      };
  }, []), ke(() => {
    if (!d.current)
      return;
    const m = h.series.map((f) => ({
      name: f.name,
      type: "line",
      smooth: f.smooth ?? !0,
      symbol: f.showLastDot ? "circle" : "none",
      symbolSize: f.showLastDot ? (y, p) => p.dataIndex === f.data.length - 1 ? 4 : 0 : 0,
      data: f.data,
      color: f.color
    }));
    d.current.setOption(
      gc({
        xData: h.x,
        series: m,
        yMax: o
      })
    );
  }, [h, o]);
  const g = { width: "100%", height: "200px", ...l };
  return /* @__PURE__ */ Te.jsx("div", { ref: u, className: c, style: g });
}
const $a = (e, t, r) => Math.min(r, Math.max(t, e)), Ht = (e) => {
  if (!e)
    return { r: 1, g: 1, b: 1 };
  const t = e.replace("#", ""), r = parseInt(t.length === 3 ? t.split("").map((n) => n + n).join("") : t, 16);
  return {
    r: (r >> 16 & 255) / 255,
    g: (r >> 8 & 255) / 255,
    b: (r & 255) / 255
  };
}, gt = (e, t, r) => e + (t - e) * r, pc = (e, t) => {
  if (!t || t.length === 0)
    return { r: 1, g: 1, b: 1 };
  if (t.length === 1)
    return Ht(t[0]);
  if (t.length === 2) {
    const i = Ht(t[0]), s = Ht(t[1]);
    return {
      r: gt(i.r, s.r, e),
      g: gt(i.g, s.g, e),
      b: gt(i.b, s.b, e)
    };
  }
  const r = Ht(t[0]), n = Ht(t[1]), o = Ht(t[2]);
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
}, yc = (e, t, r) => {
  let n = 1, o = 1, a = 1;
  r < e && (r = e), r > t && (r = t);
  const i = t - e;
  return r < e + 0.25 * i ? (n = 0, o = 4 * (r - e) / i) : r < e + 0.5 * i ? (n = 0, a = 1 + 4 * (e + 0.25 * i - r) / i) : r < e + 0.75 * i ? (n = 4 * (r - e - 0.5 * i) / i, a = 0) : (o = 1 + 4 * (e + 0.75 * i - r) / i, a = 0), [
    Math.round(255 * n),
    Math.round(255 * o),
    Math.round(255 * a)
  ];
}, bc = () => {
  const e = document.createElement("canvas");
  e.width = e.height = 512;
  const t = e.getContext("2d"), r = 16, n = 32;
  t.font = "bold 18px monospace", t.textAlign = "center", t.textBaseline = "middle";
  for (let a = 0; a < 256; a++) {
    const i = a % r, s = Math.floor(a / r), c = i * n, l = s * n, [u, d, v] = yc(0, 255, a);
    t.fillStyle = `rgb(${u}, ${d}, ${v})`, t.fillRect(c, l, n, n), t.strokeStyle = "#0f172a", t.lineWidth = 1, t.strokeRect(c, l, n, n), t.fillStyle = "#ffffff", t.fillText(a.toString(), c + n / 2, l + n / 2);
  }
  const o = new N.CanvasTexture(e);
  return o.flipY = !1, o.minFilter = N.LinearFilter, o.magFilter = N.NearestFilter, o;
};
function L4({
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
  const h = Y(null), g = Y([]), m = Y(o), f = Y(a), y = Y(i), p = Y(s);
  ke(() => {
    g.current = Array.isArray(e) ? e : [];
  }, [e]), ke(() => {
    m.current = o;
  }, [o]), ke(() => {
    f.current = a;
  }, [a]), ke(() => {
    y.current = i;
  }, [i]), ke(() => {
    p.current = s;
  }, [s]);
  const C = Q0(() => t * r, [t, r]);
  return ke(() => {
    if (!h.current)
      return;
    const w = new N.WebGLRenderer({ antialias: !0, alpha: !0 });
    w.setPixelRatio(window.devicePixelRatio || 1);
    const S = new N.Scene(), x = 0.032 * n, E = x, M = r * E / 2, R = t * E / 2, _ = new N.OrthographicCamera(-M, M, R, -R, 0.1, 1e3);
    _.position.z = 10;
    const O = bc(), F = new N.ShaderMaterial({
      uniforms: {
        map: { value: O },
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
      side: N.DoubleSide,
      depthWrite: !0,
      depthTest: !0
    });
    F.toneMapped = !1;
    const k = new N.PlaneGeometry(x, x), A = new Float32Array(C * 2), $ = new Float32Array(C * 3), I = new N.InstancedMesh(k, F, C), j = new N.Object3D();
    for (let L = 0; L < C; L++) {
      const fe = L % r, de = Math.floor(L / r);
      j.position.set((fe - (r - 1) / 2) * E, (de - (t - 1) / 2) * E, 0), j.updateMatrix(), I.setMatrixAt(L, j.matrix), A[L * 2] = 0, A[L * 2 + 1] = 0, $[L * 3] = 1, $[L * 3 + 1] = 1, $[L * 3 + 2] = 1;
    }
    k.setAttribute("uvOffset", new N.InstancedBufferAttribute(A, 2)), k.setAttribute("instanceColor", new N.InstancedBufferAttribute($, 3)), I.rotation.x = Math.PI, S.add(I);
    const V = () => {
      const L = h.current.getBoundingClientRect(), fe = Math.max(1, Math.round(L.width || 400)), de = Math.max(1, Math.round(L.height || 400));
      w.setSize(fe, de);
    };
    h.current.innerHTML = "", V(), window.addEventListener("resize", V);
    const B = new N.Raycaster(), G = new N.Plane(new N.Vector3(0, 0, 1), 0), U = new N.Vector2(), H = new N.Vector3(), ee = new N.Vector3(), K = new N.Vector2();
    let X = !1;
    const z = (L, fe) => {
      const de = w.domElement.getBoundingClientRect();
      return U.x = (L.clientX - de.left) / de.width * 2 - 1, U.y = -((L.clientY - de.top) / de.height) * 2 + 1, B.setFromCamera(U, _), B.ray.intersectPlane(G, fe);
    }, te = (L) => {
      if (!y.current || (L.preventDefault(), !z(L, H)))
        return;
      const fe = L.deltaY < 0 ? u : 1 / u, de = $a(_.zoom * fe, c, l);
      de !== _.zoom && (_.zoom = de, _.updateProjectionMatrix(), z(L, ee) && _.position.add(H.sub(ee)));
    }, re = (L) => {
      !p.current || L.button !== 0 || (X = !0, K.set(L.clientX, L.clientY), w.domElement.setPointerCapture(L.pointerId));
    }, ce = (L) => {
      if (!X)
        return;
      const fe = L.clientX - K.x, de = L.clientY - K.y;
      K.set(L.clientX, L.clientY);
      const ie = w.domElement.getBoundingClientRect(), Ce = (_.right - _.left) / (ie.width * _.zoom), he = (_.top - _.bottom) / (ie.height * _.zoom);
      _.position.x -= fe * Ce, _.position.y += de * he;
    }, ne = (L) => {
      X && (X = !1, w.domElement.hasPointerCapture(L.pointerId) && w.domElement.releasePointerCapture(L.pointerId));
    }, oe = w.domElement;
    oe.style.touchAction = "none", oe.addEventListener("wheel", te, { passive: !1 }), oe.addEventListener("pointerdown", re), oe.addEventListener("pointermove", ce), oe.addEventListener("pointerup", ne), oe.addEventListener("pointerleave", ne), oe.addEventListener("pointercancel", ne);
    let me;
    const Ee = () => {
      const L = g.current, fe = Array.isArray(L) ? L : [], de = fe.length;
      let ie = 0, Ce = 255;
      const he = f.current;
      he && he.length === 2 ? (ie = he[0], Ce = he[1]) : de && (ie = Math.min(...fe), Ce = Math.max(...fe));
      const Ye = Ce - ie || 1;
      for (let Z = 0; Z < C; Z++) {
        const le = fe[Z] ?? 0, ge = $a((le - ie) / Ye, 0, 1), J = Math.round(ge * 255);
        A[Z * 2] = J % 16 / 16, A[Z * 2 + 1] = Math.floor(J / 16) / 16;
        const Re = pc(ge, m.current);
        $[Z * 3] = Re.r, $[Z * 3 + 1] = Re.g, $[Z * 3 + 2] = Re.b;
      }
      k.attributes.uvOffset.needsUpdate = !0, k.attributes.instanceColor.needsUpdate = !0, w.render(S, _), me = requestAnimationFrame(Ee);
    };
    return Ee(), h.current.contains(oe) || h.current.appendChild(oe), () => {
      me && cancelAnimationFrame(me), window.removeEventListener("resize", V), oe.removeEventListener("wheel", te), oe.removeEventListener("pointerdown", re), oe.removeEventListener("pointermove", ce), oe.removeEventListener("pointerup", ne), oe.removeEventListener("pointerleave", ne), oe.removeEventListener("pointercancel", ne), oe.parentNode === h.current && h.current.removeChild(oe), w.dispose(), k.dispose(), F.dispose(), O.dispose();
    };
  }, [C, t, r, n, c, l, u]), /* @__PURE__ */ Te.jsx(
    "div",
    {
      ref: h,
      className: d,
      style: { width: "100%", height: "100%", ...v }
    }
  );
}
const Cc = (e, t, r) => Math.min(r, Math.max(t, e)), Sc = (e) => {
  const t = document.createElement("canvas");
  t.width = 256, t.height = 1;
  const r = t.getContext("2d"), n = r.createLinearGradient(0, 0, 256, 0), o = Array.isArray(e) && e.length ? e : ["#0f172a", "#22d3ee", "#f97316"], a = 1 / (o.length - 1);
  return o.forEach((i, s) => {
    n.addColorStop(s * a, i);
  }), r.fillStyle = n, r.fillRect(0, 0, 256, 1), r.getImageData(0, 0, 256, 1).data;
}, wc = (e, t) => {
  const r = Math.max(1, Math.round((e + t) * 2)), n = document.createElement("canvas");
  n.width = r, n.height = r;
  const o = n.getContext("2d"), a = e, i = r / 2, s = o.createRadialGradient(i, i, 0, i, i, a + t);
  return s.addColorStop(0, "rgba(0,0,0,1)"), s.addColorStop(1, "rgba(0,0,0,0)"), o.fillStyle = s, o.fillRect(0, 0, r, r), n;
};
function $4({
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
  const v = Y(null), h = Y(null), g = Y(null), m = Y(null), f = Y(null), y = Y([]), p = Y({
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
  ke(() => {
    y.current = Array.isArray(e) ? e : [];
  }, [e]), ke(() => {
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
  const C = Q0(() => t * r, [t, r]);
  return ke(() => {
    if (!v.current)
      return;
    const w = document.createElement("canvas");
    h.current = w;
    const S = w.getContext("2d"), x = () => {
      const R = v.current.getBoundingClientRect(), _ = Math.max(1, Math.round(R.width || 300)), O = Math.max(1, Math.round(R.height || 300));
      w.width !== _ && (w.width = _), w.height !== O && (w.height = O);
    };
    x(), v.current.contains(w) || (v.current.innerHTML = "", v.current.appendChild(w)), window.ResizeObserver ? (f.current = new ResizeObserver(x), f.current.observe(v.current)) : window.addEventListener("resize", x);
    let E;
    const M = () => {
      const R = p.current, _ = y.current, O = Array.isArray(_) ? _ : [], F = typeof R.maxValue == "number" ? R.maxValue : O.length ? Math.max(...O) : 1, k = typeof R.minValue == "number" ? R.minValue : 0, A = F - k || 1;
      (!g.current || g.current.colors !== R.colors) && (g.current = {
        colors: R.colors,
        data: Sc(R.colors)
      }), (!m.current || m.current.size !== R.dotSize || m.current.blur !== R.blur) && (m.current = {
        size: R.dotSize,
        blur: R.blur,
        canvas: wc(R.dotSize, R.blur)
      }), S.clearRect(0, 0, w.width, w.height);
      const $ = m.current.canvas, I = $.width / 2, j = w.width / R.cols, V = w.height / R.rows;
      for (let H = 0; H < C; H++) {
        const ee = O[H] ?? 0;
        if (ee <= R.filterValue)
          continue;
        const K = Cc((ee - k) / A * R.intensity, 0, 1);
        if (K <= 0)
          continue;
        const X = Math.floor(H / R.cols), te = H % R.cols * j + j / 2, re = X * V + V / 2;
        S.globalAlpha = K, S.drawImage($, te - I, re - I);
      }
      const B = S.getImageData(0, 0, w.width, w.height), G = B.data, U = g.current.data;
      for (let H = 3; H < G.length; H += 4) {
        const ee = G[H];
        if (ee === 0)
          continue;
        const K = ee * 4;
        G[H - 3] = U[K], G[H - 2] = U[K + 1], G[H - 1] = U[K + 2];
      }
      S.putImageData(B, 0, 0), E = requestAnimationFrame(M);
    };
    return M(), () => {
      E && cancelAnimationFrame(E), f.current ? f.current.disconnect() : window.removeEventListener("resize", x), w.parentNode === v.current && v.current.removeChild(w);
    };
  }, [C]), /* @__PURE__ */ Te.jsx(
    "div",
    {
      ref: v,
      className: u,
      style: { width: "100%", height: "100%", ...d }
    }
  );
}
const Gr = (e, t, r) => Math.min(r, Math.max(t, e)), Ec = (e, t, r, n, o) => {
  const a = Array.isArray(e) ? e : [], i = t * n, s = r * o, c = new Array(i * s).fill(0);
  for (let l = 0; l < s; l++) {
    const u = Math.floor(l / o);
    for (let d = 0; d < i; d++) {
      const v = Math.floor(d / n);
      c[l * i + d] = a[u * t + v] ?? 0;
    }
  }
  return c;
}, xc = (e, t, r, n, o) => {
  const a = t + n * 2, i = r + o * 2, s = new Array(a * i).fill(0);
  for (let c = 0; c < r; c++)
    for (let l = 0; l < t; l++)
      s[(c + o) * a + (l + n)] = e[c * t + l] ?? 0;
  return s;
}, Pc = (e, t, r, n = 1) => {
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
}, Rc = (e, t, r) => {
  const n = Gr((r - e) / (t - e || 1), 0, 1), o = Gr(1.5 - Math.abs(4 * n - 3), 0, 1), a = Gr(1.5 - Math.abs(4 * n - 2), 0, 1), i = Gr(1.5 - Math.abs(4 * n - 1), 0, 1);
  return [Math.round(o * 255), Math.round(a * 255), Math.round(i * 255)];
}, Wn = {
  sit: {
    dataConfig: { sitnum1: 32, sitnum2: 32, sitInterp: 2, sitInterp1: 2, sitOrder: 3 },
    pointConfig: { position: [0, -30, -5], rotation: [-Math.PI / 6, 0, 0], scale: [18e-4, 18e-4, 18e-4] }
  },
  back: {
    dataConfig: { sitnum1: 32, sitnum2: 32, sitInterp: 2, sitInterp1: 2, sitOrder: 3 },
    pointConfig: { position: [2.5, -15, 0], rotation: [-Math.PI / 12 - Math.PI / 2, 0, 0], scale: [15e-4, 2e-3, 2e-3] }
  }
}, Ia = { gauss: 1, color: 200, filter: 0, height: 1, coherent: 1 }, _c = { position: [0, -25, 60], rotation: [-Math.PI / 6, -Math.PI, 0], scale: [0.4, 0.4, 0.4] }, Mc = { fov: 40, near: 1, far: 15e4, position: [0, 43.05, -120] }, Fc = { position: [0, 20, -10], rotation: [Math.PI / 6, 0, 0] }, Oc = { show: !0, size: 2e3, divisions: 100, positionY: -199, opacity: 0.25 }, Tc = {
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
}, I4 = Ar((e, t) => {
  const {
    data: r,
    dataRef: n,
    groupConfigs: o = Wn,
    sitConfig: a,
    backConfig: i,
    sitPointConfig: s,
    backPointConfig: c,
    settings: l = Ia,
    displayType: u = "sit",
    utils: d = {},
    modelUrl: v,
    modelConfig: h = _c,
    pointSpriteUrl: g,
    backgroundColor: m = 0,
    cameraConfig: f = Mc,
    groupConfig: y = Fc,
    separation: p = 100,
    gridConfig: C = Oc,
    controlsConfig: w = Tc,
    controlsTarget: S,
    onViewChange: x,
    className: E,
    style: M
  } = e, R = Y(null), _ = Y(null), O = Y(null), F = Y(null), k = Y(null), A = Y(new N.Group()), $ = Y(new N.Group()), I = Y(r || { sit: [], back: [] }), j = Y(l), V = Y(u), { lineInterp: B = Ec, addSide: G = xc, gaussBlurReturn: U = Pc, jetWhite3: H = Rc } = d, ee = Y({}), K = Y(null);
  ke(() => {
    n && n.current ? I.current = n.current : r && (I.current = r);
  }, [r, n]), ke(() => {
    j.current = l;
  }, [l]), ke(() => {
    V.current = u;
  }, [u]);
  const X = Q0(() => {
    const z = {
      sit: o.sit || Wn.sit,
      back: o.back || Wn.back
    };
    return a && (z.sit = { ...z.sit, dataConfig: a }), i && (z.back = { ...z.back, dataConfig: i }), s && (z.sit = { ...z.sit, pointConfig: s }), c && (z.back = { ...z.back, pointConfig: c }), z;
  }, [o, a, i, s, c]);
  return na(t, () => ({
    changePointRotation: (z, te = V.current) => {
      const re = $.current.children.find((ce) => ce.name === te);
      re && (re.rotation.x = -Math.PI / 2 + z * 2 / 12);
    },
    changeCamera: (z) => {
      F.current && (F.current.position.z = -120 * 100 / z);
    },
    reset3D: () => {
      var z;
      (z = k.current) == null || z.reset(), x && F.current && x(Math.floor(-120 * 100 / F.current.position.z));
    }
  })), ke(() => {
    if (!R.current)
      return;
    const z = R.current, te = new N.WebGLRenderer({ antialias: !0 });
    te.setPixelRatio(window.devicePixelRatio || 1), te.setClearColor(m);
    const re = new N.Scene(), ce = new N.PerspectiveCamera(
      f.fov,
      z.clientWidth / z.clientHeight,
      f.near,
      f.far
    );
    ce.position.set(...f.position), _.current = te, O.current = re, F.current = ce;
    const ne = A.current;
    ne.position.set(...y.position), ne.rotation.set(...y.rotation);
    const oe = $.current;
    if (ne.add(oe), re.add(ne), C.show) {
      const Z = new N.GridHelper(C.size, C.divisions);
      Z.position.y = C.positionY, Z.material.opacity = C.opacity, Z.material.transparent = !0, re.add(Z);
    }
    re.add(new N.AmbientLight(16777215, 1)), re.add(new N.HemisphereLight(16777215, 4473924, 1));
    const me = new N.DirectionalLight(16777215, 1);
    if (me.position.set(5, 10, 5), re.add(me), w.enabled) {
      k.current = new Aa(ce, te.domElement);
      const { target: Z, ...le } = w;
      Object.assign(k.current, le);
      const ge = S || Z;
      Array.isArray(ge) && ge.length === 3 ? k.current.target.set(...ge) : ge && typeof ge == "object" && "x" in ge && k.current.target.set(ge.x, ge.y, ge.z);
    }
    const Ee = new lc();
    v && Ee.load(v, (Z) => {
      const le = Z.scene;
      le.position.set(...h.position || [0, 0, 0]), le.rotation.set(...h.rotation || [0, 0, 0]), le.scale.set(...h.scale || [1, 1, 1]), ne.add(le);
    });
    const L = g ? new N.TextureLoader().load(g) : null, fe = (Z, le) => {
      var w0, v0, b0, Ze;
      const { dataConfig: ge, pointConfig: J } = le, { sitnum1: Re, sitnum2: Me, sitInterp: We, sitInterp1: $e, sitOrder: Ne } = ge, r0 = Re * We + Ne * 2, _e = Me * $e + Ne * 2, be = r0 * _e, Be = new Float32Array(be * 3), Ke = new Float32Array(be * 3), l0 = new Float32Array(be), u0 = new N.BufferGeometry();
      u0.setAttribute("position", new N.BufferAttribute(Be, 3)), u0.setAttribute("color", new N.BufferAttribute(Ke, 3)), u0.setAttribute("aScale", new N.BufferAttribute(l0, 1));
      const o0 = new N.PointsMaterial({
        vertexColors: !0,
        transparent: !0,
        ...L ? { map: L } : {},
        size: (((w0 = J.scale) == null ? void 0 : w0[0]) || 1e-3) * 300
      });
      o0.onBeforeCompile = (Qe) => {
        Qe.vertexShader = Qe.vertexShader.replace("void main() {", `attribute float aScale;
varying float vScale;
void main() {`).replace("#include <begin_vertex>", `#include <begin_vertex>
 vScale = aScale;`), Qe.fragmentShader = Qe.fragmentShader.replace("void main() {", `varying float vScale;
void main() {`).replace("#include <clipping_planes_fragment>", `#include <clipping_planes_fragment>
 if (vScale <= 0.0) discard;`);
      };
      const f0 = new N.Points(u0, o0);
      f0.name = Z, (v0 = J.position) != null && v0.length && f0.position.set(...J.position), (b0 = J.rotation) != null && b0.length && f0.rotation.set(...J.rotation), (Ze = J.scale) != null && Ze.length && f0.scale.set(...J.scale), oe.add(f0), ee.current[Z] = new Array(be).fill(1);
    };
    Object.entries(X).forEach(([Z, le]) => fe(Z, le));
    const de = () => {
      const Z = j.current || Ia, le = (n == null ? void 0 : n.current) || I.current || {};
      Object.entries(X).forEach(([ge, J]) => {
        const { dataConfig: Re } = J, { sitnum1: Me, sitnum2: We, sitInterp: $e, sitInterp1: Ne, sitOrder: r0 } = Re, _e = Me * $e + r0 * 2, be = We * Ne + r0 * 2, Be = _e * be, Ke = oe.children.find((n0) => n0.name === ge);
        if (!Ke)
          return;
        const l0 = ((le == null ? void 0 : le[ge]) || []).slice();
        if (!l0.length)
          return;
        const u0 = B(l0, We, Me, Ne, $e), o0 = G(u0, We * Ne, Me * $e, r0, r0), f0 = U(
          o0,
          We * Ne + r0 * 2,
          Me * $e + r0 * 2,
          Z.gauss
        ), w0 = ee.current[ge] || new Array(Be).fill(1), v0 = Ke.geometry.attributes.position.array, b0 = Ke.geometry.attributes.color.array, Ze = Ke.geometry.attributes.aScale.array;
        let Qe = 0, i0 = 0, h0 = 0;
        for (let n0 = 0; n0 < _e; n0++)
          for (let q0 = 0; q0 < be; q0++) {
            const s0 = (f0[i0] ?? 0) * 10;
            w0[i0] = w0[i0] + (s0 - w0[i0]) / (Z.coherent || 1), v0[Qe] = q0 * p - _e * p / 2, v0[Qe + 1] = w0[i0] * (Z.height || 1), v0[Qe + 2] = n0 * p - be * p / 2;
            const ze = s0 < (Z.color || 0) * 0.25 || s0 < (Z.filter || 0);
            Ze[h0] = ze ? 0 : 1;
            const Ue = H(0, Z.color || 1, w0[i0]);
            b0[Qe] = Ue[0] / 255, b0[Qe + 1] = Ue[1] / 255, b0[Qe + 2] = Ue[2] / 255, Qe += 3, i0 += 1, h0 += 1;
          }
        Ke.geometry.attributes.position.needsUpdate = !0, Ke.geometry.attributes.color.needsUpdate = !0, Ke.geometry.attributes.aScale.needsUpdate = !0;
      });
    }, ie = () => {
      var ge, J;
      const Z = Math.max(1, z.clientWidth), le = Math.max(1, z.clientHeight);
      te.setSize(Z, le), ce.aspect = Z / le, ce.updateProjectionMatrix(), (J = (ge = k.current) == null ? void 0 : ge.handleResize) == null || J.call(ge);
    };
    z.innerHTML = "", z.appendChild(te.domElement), ie();
    let Ce;
    window.ResizeObserver ? (Ce = new ResizeObserver(ie), Ce.observe(z)) : window.addEventListener("resize", ie);
    const he = () => {
      var Z;
      (Z = k.current) == null || Z.update(), de(), te.render(re, ce), K.current = requestAnimationFrame(he);
    };
    he();
    const Ye = () => {
      !x || !F.current || x(Math.floor(-120 * 100 / F.current.position.z));
    };
    return document.addEventListener("wheel", Ye), () => {
      var Z, le;
      K.current && cancelAnimationFrame(K.current), document.removeEventListener("wheel", Ye), Ce ? Ce.disconnect() : window.removeEventListener("resize", ie), (le = (Z = k.current) == null ? void 0 : Z.dispose) == null || le.call(Z), te.dispose(), te.domElement && z.contains(te.domElement) && z.removeChild(te.domElement);
    };
  }, [
    X,
    m,
    f,
    y,
    C,
    v,
    h,
    g,
    p
  ]), ke(() => {
    var oe, me;
    const z = _.current, te = F.current;
    if (!z || !te)
      return;
    if (!w.enabled) {
      (me = (oe = k.current) == null ? void 0 : oe.dispose) == null || me.call(oe), k.current = null;
      return;
    }
    k.current || (k.current = new Aa(te, z.domElement));
    const { target: re, ...ce } = w;
    Object.assign(k.current, ce);
    const ne = S || re;
    Array.isArray(ne) && ne.length === 3 ? k.current.target.set(...ne) : ne && typeof ne == "object" && "x" in ne && k.current.target.set(ne.x, ne.y, ne.z);
  }, [w, S]), /* @__PURE__ */ Te.jsx(
    "div",
    {
      ref: R,
      className: E,
      style: { width: "100%", height: "100%", ...M }
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
var Ve = document.createElement("canvas");
Ve.className = "webgl";
It.prototype.createTplCanvas = function(e, t, r) {
  Ve.glObj = {
    canvas: Ve,
    data: t,
    cfg: e
  }, Ve.width = e.width || 2048, Ve.height = e.height || 1024;
  var n = Ve.glObj.gl = Ve.getContext("webgl");
  n.clearColor(0, 0, 0, 0), n.disable(n.DEPTH_TEST), n.clear(n.COLOR_BUFFER_BIT);
  var o = qr(n, "v", this.vertexShader), a = qr(n, "f", this.fragmentShader), i = qr(n, "v", this.vertexShader1), s = qr(n, "f", this.fragmentShader1), c = Ve.glObj.programNode = ja(n, o, a);
  n.useProgram(c), n.enable(n.BLEND), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.SRC_ALPHA, n.ONE);
  var l = Ve.glObj.resolutionLocation = n.getUniformLocation(c, "u_resolution"), u = Ve.glObj.centerLocation = n.getAttribLocation(c, "a_center"), d = Ve.glObj.radiusLocation = n.getAttribLocation(c, "a_radius"), v = Ve.glObj.a_clickLocation = n.getAttribLocation(c, "a_click"), h = Ve.glObj.u_maxClickLocation = n.getUniformLocation(c, "u_maxClick"), g = Ve.glObj.u_minClickLocation = n.getUniformLocation(c, "u_minClick"), m = Ve.glObj.u_filterClickLocation = n.getUniformLocation(c, "u_filterClick");
  n.uniform2f(l, Ve.width, Ve.height);
  function f() {
    n.uniform1f(h, Ve.glObj.cfg.max), n.uniform1f(g, Ve.glObj.cfg.min), n.uniform1f(m, Ve.glObj.cfg.filter), n.vertexAttrib1f(d, Ve.glObj.cfg.radius + 1);
    var y = n.createFramebuffer(), p = n.createTexture();
    n.bindTexture(n.TEXTURE_2D, p), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, Ve.width, Ve.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), y.texture = p;
    var C = n.createRenderbuffer();
    if (n.bindRenderbuffer(n.RENDERBUFFER, C), n.renderbufferStorage(
      n.RENDERBUFFER,
      n.DEPTH_COMPONENT16,
      Ve.width,
      Ve.height
    ), n.bindFramebuffer(n.FRAMEBUFFER, y), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, p, 0), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, C), n.checkFramebufferStatus(n.FRAMEBUFFER) != n.FRAMEBUFFER_COMPLETE) {
      alert("this combination of attachments does not work");
      return;
    }
    n.viewport(0, 0, Ve.width, Ve.height);
    var w = 3;
    for (var S in Ve.glObj.data) {
      var x = Ve.glObj.data[S], E = x, M = n.createBuffer();
      n.bindBuffer(n.ARRAY_BUFFER, M), n.bufferData(
        n.ARRAY_BUFFER,
        E,
        n.STATIC_DRAW
      ), n.enableVertexAttribArray(u), n.enableVertexAttribArray(v), n.vertexAttribPointer(u, 2, n.FLOAT, !1, w * Float32Array.BYTES_PER_ELEMENT, Float32Array.BYTES_PER_ELEMENT * 0), n.vertexAttribPointer(v, 1, n.FLOAT, !1, w * Float32Array.BYTES_PER_ELEMENT, Float32Array.BYTES_PER_ELEMENT * 2), n.drawArrays(n.POINTS, 0, x.length / w);
    }
    var R = Ve.glObj.programNode1 = ja(n, i, s);
    n.useProgram(R);
    var _ = n.getAttribLocation(R, "a_Position");
    n.bindFramebuffer(n.FRAMEBUFFER, null);
    var O = n.getUniformLocation(R, "u_resolution");
    n.uniform2f(O, Ve.width, Ve.height);
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
    n.bindBuffer(n.ARRAY_BUFFER, k), n.bufferData(n.ARRAY_BUFFER, new Float32Array(F), n.STATIC_DRAW), n.vertexAttribPointer(_, 2, n.FLOAT, !1, 0, 0), n.enableVertexAttribArray(_), n.drawArrays(n.TRIANGLE_STRIP, 0, 4), n.deleteFramebuffer(y);
  }
  return f(), window.gl = n, Ve.resetCfg = function(y) {
    var p = this.glObj.gl;
    p.useProgram(c), p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), Ve.glObj.cfg = y, f();
  }, Ve;
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
function kc(e, t = 12, r = 24, n = 256, o = 256) {
  const a = [];
  for (let c = 0; c < 1; c++) {
    let l = e;
    const u = 64, d = 64;
    for (let v = 0; v < u; v++)
      for (let h = 0; h < d; h++) {
        const g = l[v * d + h] ? l[v * d + h] * 1.8 : 0;
        a.push([h * (n / d), v * (o / u), g]);
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
function qr(e, t, r) {
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
function ja(e, t, r) {
  var n = e.createProgram();
  if (e.attachShader(n, t), e.attachShader(n, r), e.linkProgram(n), e.getProgramParameter(n, e.LINK_STATUS))
    return n;
  alert(e.getProgramInfoLog(n));
}
const Ac = (e, t, r) => Math.min(r, Math.max(t, e)), Nc = (e, t) => {
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
}, Dc = (e, t, r) => {
  if (!r || r <= 0)
    return e;
  const n = [...e];
  for (let o = 0; o < t; o++)
    for (let a = 0; a < t; a++)
      (o < r || o >= t - r || a < r || a >= t - r) && (n[o * t + a] = 0);
  return n;
}, Lc = (e, t) => {
  const r = [...e];
  for (let n = 0; n < t; n++)
    for (let o = 0; o < Math.floor(t / 2); o++) {
      const a = n * t + o, i = n * t + (t - 1 - o), s = r[a];
      r[a] = r[i], r[i] = s;
    }
  return r;
};
function j4({
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
  const d = Y(null), v = Q0(() => {
    const h = Ac(Number(t) || 64, 2, 512);
    let g = Nc(e, h);
    return a > 0 && (g = Dc(g, h, a)), i && (g = Lc(g, h)), o > 0 && (g = g.map((m) => m < o ? 0 : m)), { data: g, size: h };
  }, [e, t, a, i, o]);
  return ke(() => {
    if (!d.current)
      return;
    const h = kc(
      v.data,
      r,
      n,
      s,
      c
    ), g = d.current.getContext("2d");
    g && (g.clearRect(0, 0, d.current.width, d.current.height), g.drawImage(h, 0, 0, d.current.width, d.current.height));
  }, [v, r, n, s, c]), /* @__PURE__ */ Te.jsx("div", { className: l, style: { width: "100%", height: "100%", ...u }, children: /* @__PURE__ */ Te.jsx(
    "canvas",
    {
      ref: d,
      width: s,
      height: c,
      style: { width: "100%", height: "100%" }
    }
  ) });
}
const $c = 64, Ic = 64, jc = 13.005589453473025, Vc = [
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
], Va = {
  width: $c,
  height: Ic,
  max_val: jc,
  data: Vc
};
function Un(e, t = 5, r = 1.5) {
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
        for (let g = -s; g <= s; g++) {
          let m = Math.max(0, Math.min(n - 1, l + h)), f = Math.max(0, Math.min(o - 1, d + g));
          v += e[m][f] * i[h + s][g + s];
        }
      u.push(v);
    }
    a.push(u);
  }
  return a;
}
function Hc(e, t, r) {
  const n = e.length, o = e[0].length, a = Math.floor(t), i = Math.floor(r), s = Math.min(a + 1, o - 1), c = Math.min(i + 1, n - 1), l = t - a, u = r - i, d = e[i][a], v = e[i][s], h = e[c][a], g = e[c][s], m = d * (1 - l) + v * l, f = h * (1 - l) + g * l;
  return m * (1 - u) + f * u;
}
function lo(e, t = 256) {
  const r = e.length, n = e[0].length, o = Un(e, 5, 1.2), a = Un(o, 3, 0.8), i = new Float32Array(t * t);
  for (let l = 0; l < t; l++)
    for (let u = 0; u < t; u++) {
      const d = u / t * (n - 1), v = l / t * (r - 1);
      let h = Hc(a, d, v);
      h = Math.max(0, Math.min(h, 255)), i[l * t + u] = h;
    }
  const s = [];
  for (let l = 0; l < t; l++) {
    const u = [];
    for (let d = 0; d < t; d++)
      u.push(i[l * t + d]);
    s.push(u);
  }
  const c = Un(s, 7, 2);
  for (let l = 0; l < t; l++)
    for (let u = 0; u < t; u++)
      i[l * t + u] = c[l][u];
  return i;
}
const Ha = `
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
`, Bc = `
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
`, zc = `
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
function V4({
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
  const u = Y(null), d = Y(null), v = Y(null), h = Y(null), g = Y(null), m = Y(null), f = Y(null), y = Y(null), p = Y(null), C = Y(null), w = a ?? s, S = 256, x = 0.015;
  return ke(() => {
    if (!u.current)
      return;
    const E = new N.Scene();
    E.background = new N.Color(15262944), d.current = E;
    const M = new N.PerspectiveCamera(
      42,
      u.current.clientWidth / u.current.clientHeight,
      0.1,
      1e3
    );
    M.position.set(0.9, 0.85, 1.3), h.current = M;
    const R = new N.WebGLRenderer({ antialias: !0, alpha: !0 });
    R.setSize(u.current.clientWidth, u.current.clientHeight), R.setPixelRatio(Math.min(window.devicePixelRatio, 2)), R.shadowMap.enabled = !0, R.shadowMap.type = N.PCFSoftShadowMap, R.toneMapping = N.ACESFilmicToneMapping, R.toneMappingExposure = 1, u.current.appendChild(R.domElement), v.current = R;
    const _ = new ls(M, R.domElement);
    _.enablePan = !0, _.minPolarAngle = Math.PI / 6, _.maxPolarAngle = Math.PI / 2.2, _.minDistance = 0.8, _.maxDistance = 3.5, _.target.set(0, 0.38, 0.05), _.enableDamping = !0, _.dampingFactor = 0.05, g.current = _;
    const O = new N.AmbientLight(16775408, 0.5);
    E.add(O);
    const F = new N.DirectionalLight(16775925, 0.9);
    F.position.set(4, 6, 4), F.castShadow = !0, F.shadow.mapSize.width = 2048, F.shadow.mapSize.height = 2048, F.shadow.camera.far = 15, F.shadow.camera.left = -3, F.shadow.camera.right = 3, F.shadow.camera.top = 3, F.shadow.camera.bottom = -3, E.add(F);
    const k = new N.DirectionalLight(15266047, 0.35);
    k.position.set(-3, 3, -2), E.add(k);
    const A = new N.PointLight(16774630, 0.2);
    A.position.set(-1.5, 2, 3), E.add(A);
    const $ = new N.PlaneGeometry(6, 6), I = new N.MeshStandardMaterial({
      color: 15262944,
      metalness: 0.02,
      roughness: 0.85,
      side: N.DoubleSide
    }), j = new N.Mesh($, I);
    j.rotation.x = -Math.PI / 2, j.receiveShadow = !0, E.add(j);
    const V = new N.CircleGeometry(0.8, 64), B = new N.MeshStandardMaterial({
      color: 15789288,
      metalness: 0.05,
      roughness: 0.7,
      transparent: !0,
      opacity: 0.6,
      side: N.DoubleSide
    }), G = new N.Mesh(V, B);
    G.rotation.x = -Math.PI / 2, G.position.set(0, 2e-3, 0.2), E.add(G), Gc(E);
    const U = Wc(S, Va.data, Va.max_val);
    p.current = U;
    const H = new N.ShaderMaterial({
      vertexShader: Ha,
      fragmentShader: Bc,
      uniforms: {
        uPressureMap: { value: U },
        uDisplacementScale: { value: n },
        uThickness: { value: x },
        uShowHeatmap: { value: e },
        uBaseColor: { value: new N.Color("#f5f5f5") },
        uEnableClipping: { value: t },
        uClipLevel: { value: r },
        uSmoothness: { value: o }
      },
      side: N.DoubleSide
    });
    f.current = H;
    const ee = new N.BoxGeometry(0.45, 0.45, x, 128, 128, 1), K = new N.Mesh(ee, H);
    K.rotation.x = -Math.PI / 2, K.position.set(0, 0.455, 0), E.add(K);
    const X = Uc(S);
    C.current = X;
    const z = new N.ShaderMaterial({
      vertexShader: Ha,
      fragmentShader: zc,
      uniforms: {
        uPressureMap: { value: X },
        uDisplacementScale: { value: n * 0.6 },
        uThickness: { value: x },
        uShowHeatmap: { value: e },
        uBaseColor: { value: new N.Color("#f0f0f0") },
        uSmoothness: { value: o }
      },
      side: N.DoubleSide
    });
    y.current = z;
    const te = new N.BoxGeometry(1.5, 1, x, 256, 256, 1), re = new N.Mesh(te, z);
    re.rotation.x = -Math.PI / 2, re.position.set(0, 8e-3, 0.52), re.scale.set(0.36, 0.42, 1), E.add(re);
    const ce = new N.PlaneGeometry(1.2, 1.2), ne = new N.MeshBasicMaterial({
      color: 2960685,
      transparent: !0,
      opacity: 0.15,
      side: N.DoubleSide
    }), oe = new N.Mesh(ce, ne);
    oe.rotation.x = -Math.PI / 2, oe.position.set(0, 1e-3, 0), E.add(oe);
    const me = () => {
      m.current = requestAnimationFrame(me), _.update(), R.render(E, M);
    };
    me();
    const Ee = () => {
      if (!u.current)
        return;
      const L = u.current.clientWidth, fe = u.current.clientHeight;
      M.aspect = L / fe, M.updateProjectionMatrix(), R.setSize(L, fe);
    };
    return window.addEventListener("resize", Ee), () => {
      window.removeEventListener("resize", Ee), m.current && cancelAnimationFrame(m.current), u.current && R.domElement && u.current.removeChild(R.domElement), R.dispose();
    };
  }, []), ke(() => {
    f.current && (f.current.uniforms.uShowHeatmap.value = e, f.current.uniforms.uEnableClipping.value = t, f.current.uniforms.uClipLevel.value = r, f.current.uniforms.uDisplacementScale.value = n, f.current.uniforms.uSmoothness.value = o), y.current && (y.current.uniforms.uShowHeatmap.value = e, y.current.uniforms.uDisplacementScale.value = n * 0.6, y.current.uniforms.uSmoothness.value = o);
  }, [e, t, r, n, o]), ke(() => {
    if (!p.current || !w)
      return;
    const E = lo(w, S), M = p.current.image.data;
    for (let R = 0; R < S; R++)
      for (let _ = 0; _ < S; _++) {
        const O = (S - 1 - R) * S + _, F = E[O];
        M[R * S + _] = Math.min(F / 255, 1);
      }
    p.current.needsUpdate = !0;
  }, [w]), ke(() => {
    if (!C.current || !i)
      return;
    const E = lo(i, S), M = C.current.image.data;
    for (let R = 0; R < S; R++)
      for (let _ = 0; _ < S; _++) {
        const O = (S - 1 - R) * S + _, F = E[O];
        M[R * S + _] = Math.min(F / 255, 1);
      }
    C.current.needsUpdate = !0;
  }, [i]), /* @__PURE__ */ Te.jsxs(
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
        /* @__PURE__ */ Te.jsx("div", { ref: u, className: "w-full h-full", style: { width: "100%", height: "100%" } }),
        /* @__PURE__ */ Te.jsx("div", { className: "absolute bottom-4 left-4 text-xs text-gray-500/60 pointer-events-none font-light tracking-wide", children: /* @__PURE__ */ Te.jsx("p", { children: "Drag to rotate • Scroll to zoom" }) })
      ]
    }
  );
}
function Wc(e, t, r) {
  const n = new Float32Array(e * e), o = lo(t, e);
  for (let i = 0; i < e * e; i++)
    n[i] = o[i] / r;
  const a = new N.DataTexture(n, e, e, N.RedFormat, N.FloatType);
  return a.magFilter = N.LinearFilter, a.minFilter = N.LinearMipmapLinearFilter, a.generateMipmaps = !0, a.needsUpdate = !0, a;
}
function Uc(e) {
  const t = new Float32Array(e * e);
  t.fill(0);
  const r = new N.DataTexture(t, e, e, N.RedFormat, N.FloatType);
  return r.magFilter = N.LinearFilter, r.minFilter = N.LinearMipmapLinearFilter, r.generateMipmaps = !0, r.needsUpdate = !0, r;
}
function Gc(e) {
  const o = new N.MeshStandardMaterial({
    color: 1710618,
    metalness: 0.7,
    roughness: 0.3
  }), a = new N.MeshStandardMaterial({
    color: 4013373,
    metalness: 0.2,
    roughness: 0.8
  }), i = new N.MeshStandardMaterial({
    color: 5592405,
    metalness: 0.1,
    roughness: 0.9
  }), s = new zn(0.44, 0.035, 0.44, 4, 0.012), c = new N.Mesh(s, a);
  c.position.set(0, 0.43, 0), c.castShadow = !0, e.add(c);
  const l = new zn(0.42, 0.48, 0.025, 4, 0.01), u = new N.Mesh(l, i);
  u.position.set(0, 0.72, -0.2), u.rotation.x = 0.08, u.castShadow = !0, e.add(u), [
    [-0.18, 0.215, 0.18],
    [0.18, 0.215, 0.18],
    [-0.18, 0.215, -0.18],
    [0.18, 0.215, -0.18]
  ].forEach((f) => {
    const y = new N.Group(), p = new N.CylinderGeometry(0.012, 0.016, 0.4, 16), C = new N.Mesh(p, o);
    C.castShadow = !0, y.add(C);
    const w = new N.SphereGeometry(0.012, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), S = new N.Mesh(w, o);
    S.position.y = 0.2, y.add(S);
    const x = new N.SphereGeometry(0.016, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), E = new N.Mesh(x, o);
    E.position.y = -0.2, E.rotation.x = Math.PI, y.add(E), y.position.set(...f), e.add(y);
  }), [
    [-0.18, 0.58, -0.19],
    [0.18, 0.58, -0.19]
  ].forEach((f) => {
    const y = new N.Group(), p = new N.CylinderGeometry(8e-3, 8e-3, 0.28, 12), C = new N.Mesh(p, o);
    y.add(C);
    const w = new N.SphereGeometry(8e-3, 12, 8), S = new N.Mesh(w, o);
    S.position.y = 0.14, y.add(S);
    const x = new N.Mesh(w, o);
    x.position.y = -0.14, y.add(x), y.position.set(...f), e.add(y);
  });
  const h = new zn(0.025, 0.025, 0.28, 4, 8e-3);
  [
    [-0.24, 0.58, 0.02],
    [0.24, 0.58, 0.02]
  ].forEach((f) => {
    const y = new N.Mesh(h, i);
    y.position.set(...f), e.add(y);
  }), [
    [-0.24, 0.51, -0.08],
    [0.24, 0.51, -0.08]
  ].forEach((f) => {
    const y = new N.Group(), p = new N.CylinderGeometry(6e-3, 6e-3, 0.12, 12), C = new N.Mesh(p, o);
    y.add(C);
    const w = new N.SphereGeometry(6e-3, 12, 8), S = new N.Mesh(w, o);
    S.position.y = 0.06, y.add(S);
    const x = new N.Mesh(w, o);
    x.position.y = -0.06, y.add(x), y.position.set(...f), e.add(y);
  });
}
const uo = (e, t, r) => Math.min(r, Math.max(t, e)), oa = (e) => {
  if (!e)
    return [];
  if (Array.isArray(e[0]))
    return e;
  const t = Array.isArray(e) ? e : [], r = Math.sqrt(t.length);
  if (!Number.isInteger(r))
    return [];
  const n = [];
  for (let o = 0; o < r; o++) {
    const a = [];
    for (let i = 0; i < r; i++)
      a.push(t[o * r + i] ?? 0);
    n.push(a);
  }
  return n;
};
function Ba(e, t = 5, r = 1.5) {
  var u;
  const n = oa(e), o = n.length, a = ((u = n[0]) == null ? void 0 : u.length) || 0;
  if (!o || !a)
    return [];
  const i = [], s = [], c = Math.floor(t / 2);
  let l = 0;
  for (let d = -c; d <= c; d++) {
    const v = [];
    for (let h = -c; h <= c; h++) {
      const g = Math.exp(-(h * h + d * d) / (2 * r * r));
      v.push(g), l += g;
    }
    s.push(v);
  }
  for (let d = 0; d < t; d++)
    for (let v = 0; v < t; v++)
      s[d][v] /= l;
  for (let d = 0; d < o; d++) {
    const v = [];
    for (let h = 0; h < a; h++) {
      let g = 0;
      for (let m = -c; m <= c; m++)
        for (let f = -c; f <= c; f++) {
          const y = uo(d + m, 0, o - 1), p = uo(h + f, 0, a - 1);
          g += n[y][p] * s[m + c][f + c];
        }
      v.push(g);
    }
    i.push(v);
  }
  return i;
}
function qc(e, t, r) {
  var p;
  const n = oa(e), o = n.length, a = ((p = n[0]) == null ? void 0 : p.length) || 0;
  if (!o || !a)
    return 0;
  const i = Math.floor(t), s = Math.floor(r), c = Math.min(i + 1, a - 1), l = Math.min(s + 1, o - 1), u = t - i, d = r - s, v = n[s][i], h = n[s][c], g = n[l][i], m = n[l][c], f = v * (1 - u) + h * u, y = g * (1 - d) + m * d;
  return f * (1 - d) + y * d;
}
function Xc(e, t = 256) {
  var c;
  const r = oa(e), n = r.length, o = ((c = r[0]) == null ? void 0 : c.length) || 0;
  if (!n || !o)
    return new Float32Array(t * t);
  const a = Ba(r, 5, 1.2), i = Ba(a, 3, 0.8), s = new Float32Array(t * t);
  for (let l = 0; l < t; l++)
    for (let u = 0; u < t; u++) {
      const d = u / t * (o - 1), v = l / t * (n - 1);
      let h = qc(i, d, v);
      h = uo(h, 0, 255), s[l * t + u] = h;
    }
  return s;
}
const Yc = `
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
`, Kc = `
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
`, ft = 128, Yt = 0.4, za = 0.015;
function Zc() {
  const e = new N.BoxGeometry(
    Yt,
    Yt,
    za,
    128,
    128,
    1
  ), t = ft * ft, r = new Float32Array(t);
  r.fill(0);
  const n = new N.DataTexture(
    r,
    ft,
    ft,
    N.RedFormat,
    N.FloatType
  );
  n.magFilter = N.LinearFilter, n.minFilter = N.LinearMipmapLinearFilter, n.generateMipmaps = !0, n.needsUpdate = !0;
  const o = new N.ShaderMaterial({
    vertexShader: Yc,
    fragmentShader: Kc,
    uniforms: {
      uPressureMap: { value: n },
      uDisplacementScale: { value: 0.1 },
      uThickness: { value: za },
      uShowHeatmap: { value: !0 },
      uBaseColor: { value: new N.Color("#f0f0f0") },
      uSmoothness: { value: 0.5 }
    },
    side: N.DoubleSide
  }), a = new N.Mesh(e, o);
  return a.rotation.x = -Math.PI / 2, { mesh: a, texture: n, material: o };
}
function H4({
  showHeatmap: e = !0,
  depthScale: t = 0.1,
  smoothness: r = 0.5,
  sensorData: n = {},
  className: o,
  style: a
}) {
  const i = Y(null), s = Y(null), c = Y(null), l = Y(null), u = Y(null), d = Y([]), v = Y(null);
  return ke(() => {
    const h = i.current;
    if (!h)
      return;
    const g = new N.Scene();
    g.background = new N.Color("#e0dcd8"), s.current = g;
    const m = new N.PerspectiveCamera(
      60,
      h.clientWidth / h.clientHeight,
      0.01,
      100
    );
    m.position.set(0, 1.8, 1.5), m.lookAt(0, 0, 0), l.current = m;
    const f = new N.WebGLRenderer({ antialias: !0, alpha: !0 });
    f.setSize(h.clientWidth, h.clientHeight), f.setPixelRatio(Math.min(window.devicePixelRatio, 2)), f.shadowMap.enabled = !0, h.appendChild(f.domElement), c.current = f;
    const y = new ls(m, f.domElement);
    y.enablePan = !0, y.minPolarAngle = 0, y.maxPolarAngle = Math.PI / 2.1, y.minDistance = 1, y.maxDistance = 5, y.target.set(0, 0, 0), y.enableDamping = !0, y.dampingFactor = 0.05, u.current = y;
    const p = new N.AmbientLight("#fff8f0", 0.6);
    g.add(p);
    const C = new N.DirectionalLight("#fffaf5", 0.8);
    C.position.set(3, 5, 3), C.castShadow = !0, C.shadow.mapSize.set(2048, 2048), g.add(C);
    const w = new N.DirectionalLight("#e8f0ff", 0.35);
    w.position.set(-3, 3, -2), g.add(w);
    const S = new N.PointLight("#fff5e6", 0.2);
    S.position.set(-1.5, 2, 3), g.add(S);
    const x = new N.PlaneGeometry(8, 4), E = new N.MeshStandardMaterial({
      color: "#e8e4e0",
      metalness: 0.02,
      roughness: 0.85,
      side: N.DoubleSide
    }), M = new N.Mesh(x, E);
    M.rotation.x = -Math.PI / 2, M.position.y = 0, M.receiveShadow = !0, g.add(M);
    const R = new N.PlaneGeometry(2, 0.8), _ = new N.MeshStandardMaterial({
      color: "#f0ece8",
      metalness: 0.05,
      roughness: 0.7,
      transparent: !0,
      opacity: 0.6,
      side: N.DoubleSide
    }), O = new N.Mesh(R, _);
    O.rotation.x = -Math.PI / 2, O.position.y = 2e-3, g.add(O);
    const F = 4 * Yt, k = -F / 2 + Yt / 2, A = [];
    for (let G = 0; G < 4; G++) {
      const { mesh: U, texture: H, material: ee } = Zc();
      U.position.set(k + G * Yt, 0.01, 0), g.add(U), A.push({ mesh: U, texture: H, material: ee });
    }
    const $ = new N.PlaneGeometry(F + 0.04, Yt + 0.04), I = new N.MeshStandardMaterial({
      color: "#e0e0e0",
      metalness: 0.1,
      roughness: 0.9,
      side: N.DoubleSide
    }), j = new N.Mesh($, I);
    j.rotation.x = -Math.PI / 2, j.position.set(0, 5e-3, 0), g.add(j), d.current = A;
    function V() {
      v.current = requestAnimationFrame(V), y.update(), f.render(g, m);
    }
    V();
    function B() {
      if (!h)
        return;
      const G = h.clientWidth, U = h.clientHeight;
      m.aspect = G / U, m.updateProjectionMatrix(), f.setSize(G, U);
    }
    return window.addEventListener("resize", B), () => {
      window.removeEventListener("resize", B), cancelAnimationFrame(v.current), y.dispose(), f.dispose(), h && f.domElement.parentNode === h && h.removeChild(f.domElement);
    };
  }, []), ke(() => {
    d.current.forEach(({ material: h }) => {
      h && (h.uniforms.uShowHeatmap.value = e, h.uniforms.uDisplacementScale.value = t, h.uniforms.uSmoothness.value = r);
    });
  }, [e, t, r]), ke(() => {
    ["sensor1", "sensor2", "sensor3", "sensor4"].forEach((g, m) => {
      const f = d.current[m];
      if (!f)
        return;
      const y = n[g];
      if (y && y.length === 64) {
        const p = Xc(y, ft), C = f.texture.image.data;
        for (let w = 0; w < ft; w++)
          for (let S = 0; S < ft; S++) {
            const x = (ft - 1 - w) * ft + S, E = p[x];
            C[w * ft + S] = Math.min(E / 255, 1);
          }
        f.texture.needsUpdate = !0;
      }
    });
  }, [n]), /* @__PURE__ */ Te.jsx(
    "div",
    {
      ref: i,
      className: o,
      style: {
        width: "100%",
        height: "100%",
        position: "relative",
        background: "linear-gradient(135deg, #d4d0cc 0%, #e8e4e0 50%, #d8d4d0 100%)",
        ...a
      },
      children: /* @__PURE__ */ Te.jsx(
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
    }
  );
}
var us = { exports: {} };
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
})(us);
var Qc = us.exports;
const De = /* @__PURE__ */ dc(Qc);
function D0() {
  return D0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, D0.apply(null, arguments);
}
function Pe(e) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pe(e);
}
var Jc = Symbol.for("react.element"), el = Symbol.for("react.transitional.element"), tl = Symbol.for("react.fragment");
function fs(e) {
  return (
    // Base object type
    e && Pe(e) === "object" && // React Element type
    (e.$$typeof === Jc || e.$$typeof === el) && // React Fragment type
    e.type === tl
  );
}
function dn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return ye.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(dn(n)) : fs(n) && n.props ? r = r.concat(dn(n.props.children, t)) : r.push(n));
  }), r;
}
var fo = {}, aa = [], rl = function(t) {
  aa.push(t);
};
function $t(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = aa.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function nl(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = aa.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function ds() {
  fo = {};
}
function vs(e, t, r) {
  !t && !fo[r] && (e(!1, r), fo[r] = !0);
}
function a0(e, t) {
  vs($t, e, t);
}
function ol(e, t) {
  vs(nl, e, t);
}
a0.preMessage = rl;
a0.resetWarned = ds;
a0.noteOnce = ol;
function al(e, t) {
  if (Pe(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Pe(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hs(e) {
  var t = al(e, "string");
  return Pe(t) == "symbol" ? t : t + "";
}
function T(e, t, r) {
  return (t = hs(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Wa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wa(Object(r), !0).forEach(function(n) {
      T(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Er(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function il(e) {
  return e && Pe(e) === "object" && Er(e.nativeElement) ? e.nativeElement : Er(e) ? e : null;
}
function an(e) {
  var t = il(e);
  if (t)
    return t;
  if (e instanceof ye.Component) {
    var r;
    return (r = Na.findDOMNode) === null || r === void 0 ? void 0 : r.call(Na, e);
  }
  return null;
}
var vo = { exports: {} }, qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua;
function sl() {
  if (Ua)
    return qe;
  Ua = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function m(f) {
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
    return m(f) === i;
  }, qe.isContextProvider = function(f) {
    return m(f) === a;
  }, qe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, qe.isForwardRef = function(f) {
    return m(f) === c;
  }, qe.isFragment = function(f) {
    return m(f) === r;
  }, qe.isLazy = function(f) {
    return m(f) === v;
  }, qe.isMemo = function(f) {
    return m(f) === d;
  }, qe.isPortal = function(f) {
    return m(f) === t;
  }, qe.isProfiler = function(f) {
    return m(f) === o;
  }, qe.isStrictMode = function(f) {
    return m(f) === n;
  }, qe.isSuspense = function(f) {
    return m(f) === l;
  }, qe.isSuspenseList = function(f) {
    return m(f) === u;
  }, qe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === c || f.$$typeof === g || f.getModuleId !== void 0);
  }, qe.typeOf = m, qe;
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
var Ga;
function cl() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = !1, m = !1, f = !1, y = !1, p = !1, C;
    C = Symbol.for("react.module.reference");
    function w(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === o || p || L === n || L === l || L === u || y || L === h || g || m || f || typeof L == "object" && L !== null && (L.$$typeof === v || L.$$typeof === d || L.$$typeof === a || L.$$typeof === i || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === C || L.getModuleId !== void 0));
    }
    function S(L) {
      if (typeof L == "object" && L !== null) {
        var fe = L.$$typeof;
        switch (fe) {
          case e:
            var de = L.type;
            switch (de) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case s:
                  case i:
                  case c:
                  case v:
                  case d:
                  case a:
                    return ie;
                  default:
                    return fe;
                }
            }
          case t:
            return fe;
        }
      }
    }
    var x = i, E = a, M = e, R = c, _ = r, O = v, F = d, k = t, A = o, $ = n, I = l, j = u, V = !1, B = !1;
    function G(L) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(L) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(L) {
      return S(L) === i;
    }
    function ee(L) {
      return S(L) === a;
    }
    function K(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function X(L) {
      return S(L) === c;
    }
    function z(L) {
      return S(L) === r;
    }
    function te(L) {
      return S(L) === v;
    }
    function re(L) {
      return S(L) === d;
    }
    function ce(L) {
      return S(L) === t;
    }
    function ne(L) {
      return S(L) === o;
    }
    function oe(L) {
      return S(L) === n;
    }
    function me(L) {
      return S(L) === l;
    }
    function Ee(L) {
      return S(L) === u;
    }
    Xe.ContextConsumer = x, Xe.ContextProvider = E, Xe.Element = M, Xe.ForwardRef = R, Xe.Fragment = _, Xe.Lazy = O, Xe.Memo = F, Xe.Portal = k, Xe.Profiler = A, Xe.StrictMode = $, Xe.Suspense = I, Xe.SuspenseList = j, Xe.isAsyncMode = G, Xe.isConcurrentMode = U, Xe.isContextConsumer = H, Xe.isContextProvider = ee, Xe.isElement = K, Xe.isForwardRef = X, Xe.isFragment = z, Xe.isLazy = te, Xe.isMemo = re, Xe.isPortal = ce, Xe.isProfiler = ne, Xe.isStrictMode = oe, Xe.isSuspense = me, Xe.isSuspenseList = Ee, Xe.isValidElementType = w, Xe.typeOf = S;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? vo.exports = sl() : vo.exports = cl();
var Gn = vo.exports;
function ll(e, t, r) {
  var n = b.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var ul = Number(ic.split(".")[0]), ia = function(t, r) {
  typeof t == "function" ? t(r) : Pe(t) === "object" && t && "current" in t && (t.current = r);
}, sa = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      ia(i, a);
    });
  };
}, ca = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return ll(function() {
    return sa.apply(void 0, r);
  }, r, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, Sn = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (ms(t) && ul >= 19)
    return !0;
  var o = Gn.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Gn.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Gn.ForwardRef);
};
function ms(e) {
  return /* @__PURE__ */ ss(e) && !fs(e);
}
var la = function(t) {
  if (t && ms(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
}, ho = /* @__PURE__ */ b.createContext(null);
function fl(e) {
  var t = e.children, r = e.onBatchResize, n = b.useRef(0), o = b.useRef([]), a = b.useContext(ho), i = b.useCallback(function(s, c, l) {
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
  return /* @__PURE__ */ b.createElement(ho.Provider, {
    value: i
  }, t);
}
var gs = function() {
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
}(), mo = typeof window < "u" && typeof document < "u" && window.document === document, vn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), dl = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(vn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), vl = 2;
function hl(e, t) {
  var r = !1, n = !1, o = 0;
  function a() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    dl(a);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - o < vl)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    o = c;
  }
  return s;
}
var ml = 20, gl = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], pl = typeof MutationObserver < "u", yl = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = hl(this.refresh.bind(this), ml);
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
      !mo || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), pl ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !mo || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = gl.some(function(a) {
        return !!~n.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ps = function(e, t) {
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
  return t || vn;
}, ys = wn(0, 0, 0, 0);
function hn(e) {
  return parseFloat(e) || 0;
}
function qa(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var a = e["border-" + o + "-width"];
    return n + hn(a);
  }, 0);
}
function bl(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var a = o[n], i = e["padding-" + a];
    r[a] = hn(i);
  }
  return r;
}
function Cl(e) {
  var t = e.getBBox();
  return wn(0, 0, t.width, t.height);
}
function Sl(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return ys;
  var n = tr(e).getComputedStyle(e), o = bl(n), a = o.left + o.right, i = o.top + o.bottom, s = hn(n.width), c = hn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= qa(n, "left", "right") + a), Math.round(c + i) !== r && (c -= qa(n, "top", "bottom") + i)), !El(e)) {
    var l = Math.round(s + a) - t, u = Math.round(c + i) - r;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return wn(o.left, o.top, s, c);
}
var wl = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof tr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof tr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function El(e) {
  return e === tr(e).document.documentElement;
}
function xl(e) {
  return mo ? wl(e) ? Cl(e) : Sl(e) : ys;
}
function Pl(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(a.prototype);
  return ps(i, {
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
function wn(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Rl = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = wn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = xl(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), _l = (
  /** @class */
  function() {
    function e(t, r) {
      var n = Pl(r);
      ps(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Ml = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new gs(), typeof t != "function")
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
        r.has(t) || (r.set(t, new Rl(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new _l(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), bs = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new gs(), Cs = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = yl.getInstance(), n = new Ml(t, r, this);
      bs.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Cs.prototype[e] = function() {
    var t;
    return (t = bs.get(this))[e].apply(t, arguments);
  };
});
var Fl = function() {
  return typeof vn.ResizeObserver < "u" ? vn.ResizeObserver : Cs;
}(), bt = /* @__PURE__ */ new Map();
function Ss(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = bt.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var ws = new Fl(Ss);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Ol(e, t) {
  bt.has(e) || (bt.set(e, /* @__PURE__ */ new Set()), ws.observe(e)), bt.get(e).add(t);
}
function Tl(e, t) {
  bt.has(e) && (bt.get(e).delete(t), bt.get(e).size || (ws.unobserve(e), bt.delete(e)));
}
function _0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hs(n.key), n);
  }
}
function M0(e, t, r) {
  return t && Xa(e.prototype, t), r && Xa(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function xr(e, t) {
  return xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, xr(e, t);
}
function Ot(e, t) {
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
  }), t && xr(e, t);
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Pr(e);
}
function ua() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ua = function() {
    return !!e;
  })();
}
function Oe(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kl(e, t) {
  if (t && (Pe(t) == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oe(e);
}
function Tt(e) {
  var t = ua();
  return function() {
    var r, n = Pr(e);
    if (t) {
      var o = Pr(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else
      r = n.apply(this, arguments);
    return kl(this, r);
  };
}
var Al = /* @__PURE__ */ function(e) {
  Ot(r, e);
  var t = Tt(r);
  function r() {
    return _0(this, r), t.apply(this, arguments);
  }
  return M0(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(b.Component);
function Nl(e, t) {
  var r = e.children, n = e.disabled, o = b.useRef(null), a = b.useRef(null), i = b.useContext(ho), s = typeof r == "function", c = s ? r(o) : r, l = b.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ b.isValidElement(c) && Sn(c), d = u ? la(c) : null, v = ca(d, o), h = function() {
    var y;
    return an(o.current) || // Support `nativeElement` format
    (o.current && Pe(o.current) === "object" ? an((y = o.current) === null || y === void 0 ? void 0 : y.nativeElement) : null) || an(a.current);
  };
  b.useImperativeHandle(t, function() {
    return h();
  });
  var g = b.useRef(e);
  g.current = e;
  var m = b.useCallback(function(f) {
    var y = g.current, p = y.onResize, C = y.data, w = f.getBoundingClientRect(), S = w.width, x = w.height, E = f.offsetWidth, M = f.offsetHeight, R = Math.floor(S), _ = Math.floor(x);
    if (l.current.width !== R || l.current.height !== _ || l.current.offsetWidth !== E || l.current.offsetHeight !== M) {
      var O = {
        width: R,
        height: _,
        offsetWidth: E,
        offsetHeight: M
      };
      l.current = O;
      var F = E === Math.round(S) ? S : E, k = M === Math.round(x) ? x : M, A = D(D({}, O), {}, {
        offsetWidth: F,
        offsetHeight: k
      });
      i == null || i(A, f, C), p && Promise.resolve().then(function() {
        p(A, f);
      });
    }
  }, []);
  return b.useEffect(function() {
    var f = h();
    return f && !n && Ol(f, m), function() {
      return Tl(f, m);
    };
  }, [o.current, n]), /* @__PURE__ */ b.createElement(Al, {
    ref: a
  }, u ? /* @__PURE__ */ b.cloneElement(c, {
    ref: v
  }) : c);
}
var Es = /* @__PURE__ */ b.forwardRef(Nl);
process.env.NODE_ENV !== "production" && (Es.displayName = "SingleObserver");
var Dl = "rc-observer-key";
function Ll(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : dn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? $t(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && $t(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, a) {
    var i = (o == null ? void 0 : o.key) || "".concat(Dl, "-").concat(a);
    return /* @__PURE__ */ b.createElement(Es, D0({}, e, {
      key: i,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var En = /* @__PURE__ */ b.forwardRef(Ll);
process.env.NODE_ENV !== "production" && (En.displayName = "ResizeObserver");
En.Collection = fl;
function go(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function $l(e) {
  if (Array.isArray(e))
    return go(e);
}
function xs(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function fa(e, t) {
  if (e) {
    if (typeof e == "string")
      return go(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? go(e, t) : void 0;
  }
}
function Il() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ve(e) {
  return $l(e) || xs(e) || fa(e) || Il();
}
var Ps = function(t) {
  return +setTimeout(t, 16);
}, Rs = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Ps = function(t) {
  return window.requestAnimationFrame(t);
}, Rs = function(t) {
  return window.cancelAnimationFrame(t);
});
var Ya = 0, xn = /* @__PURE__ */ new Map();
function _s(e) {
  xn.delete(e);
}
var Ct = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ya += 1;
  var n = Ya;
  function o(a) {
    if (a === 0)
      _s(n), t();
    else {
      var i = Ps(function() {
        o(a - 1);
      });
      xn.set(n, i);
    }
  }
  return o(r), n;
};
Ct.cancel = function(e) {
  var t = xn.get(e);
  return _s(e), Rs(t);
};
process.env.NODE_ENV !== "production" && (Ct.ids = function() {
  return xn;
});
function Ms(e) {
  if (Array.isArray(e))
    return e;
}
function jl(e, t) {
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
function Fs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q(e, t) {
  return Ms(e) || jl(e, t) || fa(e, t) || Fs();
}
function Rr(e) {
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
function G0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Vl(e, t) {
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
var Ka = "data-rc-order", Za = "data-rc-priority", Hl = "rc-util-key", po = /* @__PURE__ */ new Map();
function Os() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Hl;
}
function Pn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Bl(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function da(e) {
  return Array.from((po.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ts(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!G0())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = Bl(n), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(Ka, i), s && a && c.setAttribute(Za, "".concat(a)), r != null && r.nonce && (c.nonce = r == null ? void 0 : r.nonce), c.innerHTML = e;
  var l = Pn(t), u = l.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || da(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Ka)))
          return !1;
        var h = Number(v.getAttribute(Za) || 0);
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
function ks(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Pn(t);
  return (t.styles || da(r)).find(function(n) {
    return n.getAttribute(Os(t)) === e;
  });
}
function _r(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ks(e, t);
  if (r) {
    var n = Pn(t);
    n.removeChild(r);
  }
}
function zl(e, t) {
  var r = po.get(e);
  if (!r || !Vl(document, r)) {
    var n = Ts("", t), o = n.parentNode;
    po.set(e, o), e.removeChild(n);
  }
}
function Dt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Pn(r), o = da(n), a = D(D({}, r), {}, {
    styles: o
  });
  zl(n, a);
  var i = ks(t, a);
  if (i) {
    var s, c;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = a.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Ts(e, a);
  return u.setAttribute(Os(a), t), u;
}
function Wl(e, t) {
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
function ct(e, t) {
  if (e == null)
    return {};
  var r, n, o = Wl(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function yo(e, t) {
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
    if (a && i && Pe(a) === "object" && Pe(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(v) {
        return o(a[v], i[v], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Ul = "%";
function bo(e) {
  return e.join(Ul);
}
var Gl = /* @__PURE__ */ function() {
  function e(t) {
    _0(this, e), T(this, "instanceId", void 0), T(this, "cache", /* @__PURE__ */ new Map()), T(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return M0(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(bo(r));
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
      return this.opUpdate(bo(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), rr = "data-token-hash", it = "data-css-hash", ql = "data-cache-path", _t = "__cssinjs_instance__";
function Xl() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(it, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[_t] = o[_t] || e, o[_t] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(it, "]"))).forEach(function(o) {
      var a = o.getAttribute(it);
      if (n[a]) {
        if (o[_t] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new Gl(e);
}
var Rn = /* @__PURE__ */ b.createContext({
  hashPriority: "low",
  cache: Xl(),
  defaultCache: !0
});
function Yl(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var va = /* @__PURE__ */ function() {
  function e() {
    _0(this, e), T(this, "cache", void 0), T(this, "keys", void 0), T(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return M0(e, [{
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
            var d = q(l, 2), v = d[1];
            return o.internalGet(u)[1] < v ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = q(a, 1), s = i[0];
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
          return !Yl(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
T(va, "MAX_CACHE_SIZE", 20);
T(va, "MAX_CACHE_OFFSET", 5);
var Qa = 0, As = /* @__PURE__ */ function() {
  function e(t) {
    _0(this, e), T(this, "derivatives", void 0), T(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Qa, t.length === 0 && $t(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return M0(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), qn = new va();
function Kl(e) {
  var t = Array.isArray(e) ? e : [e];
  return qn.has(t) || qn.set(t, new As(t)), qn.get(t);
}
var Zl = /* @__PURE__ */ new WeakMap(), Xn = {};
function Ql(e, t) {
  for (var r = Zl, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Xn) || r.set(Xn, e()), r.get(Xn);
}
var Ja = /* @__PURE__ */ new WeakMap();
function Cr(e) {
  var t = Ja.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof As ? t += n.id : n && Pe(n) === "object" ? t += Cr(n) : t += n;
  }), t = Rr(t), Ja.set(e, t)), t;
}
function ei(e, t) {
  return Rr("".concat(t, "_").concat(Cr(e)));
}
var Co = G0();
function C0(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function mn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = D(D({}, n), {}, T(T({}, rr, t), it, r)), i = Object.keys(a).map(function(s) {
    var c = a[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var sn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Jl = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = q(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Ns = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = q(i, 2), u = l[0], d = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[u])
      a[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[u])) {
      var v, h = sn(u, n == null ? void 0 : n.prefix);
      o[h] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[u]) ? "".concat(d, "px") : String(d), a[u] = "var(".concat(h, ")");
    }
  }), [a, Jl(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, ti = process.env.NODE_ENV !== "test" && G0() ? b.useLayoutEffect : b.useEffect, N0 = function(t, r) {
  var n = b.useRef(!0);
  ti(function() {
    return t(n.current);
  }, r), ti(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ri = function(t, r) {
  N0(function(n) {
    if (!n)
      return t();
  }, r);
}, eu = D({}, b), ni = eu.useInsertionEffect, tu = function(t, r, n) {
  b.useMemo(t, n), N0(function() {
    return r(!0);
  }, n);
}, ru = ni ? function(e, t, r) {
  return ni(function() {
    return e(), t();
  }, r);
} : tu, nu = D({}, b), ou = nu.useInsertionEffect, au = function(t) {
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
}, iu = function() {
  return function(t) {
    t();
  };
}, su = typeof ou < "u" ? au : iu;
function cu() {
  return !1;
}
var So = !1;
function lu() {
  return So;
}
const uu = process.env.NODE_ENV === "production" ? cu : lu;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Xr && typeof Xr.webpackHotUpdate == "function") {
    var fu = Xr.webpackHotUpdate;
    Xr.webpackHotUpdate = function() {
      return So = !0, setTimeout(function() {
        So = !1;
      }, 0), fu.apply(void 0, arguments);
    };
  }
}
function ha(e, t, r, n, o) {
  var a = b.useContext(Rn), i = a.cache, s = [e].concat(ve(t)), c = bo(s), l = su([c]), u = uu(), d = function(m) {
    i.opUpdate(c, function(f) {
      var y = f || [void 0, void 0], p = q(y, 2), C = p[0], w = C === void 0 ? 0 : C, S = p[1], x = S;
      process.env.NODE_ENV !== "production" && S && u && (n == null || n(x, u), x = null);
      var E = x || r(), M = [w, E];
      return m ? m(M) : M;
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
  return ru(function() {
    o == null || o(h);
  }, function(g) {
    return d(function(m) {
      var f = q(m, 2), y = f[0], p = f[1];
      return g && y === 0 && (o == null || o(h)), [y + 1, p];
    }), function() {
      i.opUpdate(c, function(m) {
        var f = m || [], y = q(f, 2), p = y[0], C = p === void 0 ? 0 : p, w = y[1], S = C - 1;
        return S === 0 ? (l(function() {
          (g || !i.opGet(c)) && (n == null || n(w, !1));
        }), null) : [C - 1, w];
      });
    };
  }, [c]), h;
}
var du = {}, vu = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", kt = /* @__PURE__ */ new Map();
function hu(e) {
  kt.set(e, (kt.get(e) || 0) + 1);
}
function mu(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(rr, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[_t] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var gu = 0;
function pu(e, t) {
  kt.set(e, (kt.get(e) || 0) - 1);
  var r = /* @__PURE__ */ new Set();
  kt.forEach(function(n, o) {
    n <= 0 && r.add(o);
  }), kt.size - r.size > gu && r.forEach(function(n) {
    mu(n, t), kt.delete(n);
  });
}
var yu = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = D(D({}, a), r);
  return o && (i = o(i)), i;
}, Ds = "token";
function bu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = wr(Rn), o = n.cache.instanceId, a = n.container, i = r.salt, s = i === void 0 ? "" : i, c = r.override, l = c === void 0 ? du : c, u = r.formatToken, d = r.getComputedToken, v = r.cssVar, h = Ql(function() {
    return Object.assign.apply(Object, [{}].concat(ve(t)));
  }, t), g = Cr(h), m = Cr(l), f = v ? Cr(v) : "", y = ha(Ds, [s, e.id, g, m, f], function() {
    var p, C = d ? d(h, l, e) : yu(h, l, e, u), w = D({}, C), S = "";
    if (v) {
      var x = Ns(C, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), E = q(x, 2);
      C = E[0], S = E[1];
    }
    var M = ei(C, s);
    C._tokenKey = M, w._tokenKey = ei(w, s);
    var R = (p = v == null ? void 0 : v.key) !== null && p !== void 0 ? p : M;
    C._themeKey = R, hu(R);
    var _ = "".concat(vu, "-").concat(Rr(M));
    return C._hashId = _, [C, _, w, S, (v == null ? void 0 : v.key) || ""];
  }, function(p) {
    pu(p[0]._themeKey, o);
  }, function(p) {
    var C = q(p, 4), w = C[0], S = C[3];
    if (v && S) {
      var x = Dt(S, Rr("css-variables-".concat(w._themeKey)), {
        mark: it,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      x[_t] = o, x.setAttribute(rr, w._themeKey);
    }
  });
  return y;
}
var Cu = function(t, r, n) {
  var o = q(t, 5), a = o[2], i = o[3], s = o[4], c = n || {}, l = c.plain;
  if (!i)
    return null;
  var u = a._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, h = mn(i, s, u, v, l);
  return [d, u, h];
}, Su = {
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
}, Ls = "comm", $s = "rule", Is = "decl", wu = "@import", Eu = "@namespace", xu = "@keyframes", Pu = "@layer", js = Math.abs, ma = String.fromCharCode;
function Vs(e) {
  return e.trim();
}
function cn(e, t, r) {
  return e.replace(t, r);
}
function Ru(e, t, r) {
  return e.indexOf(t, r);
}
function Qt(e, t) {
  return e.charCodeAt(t) | 0;
}
function nr(e, t, r) {
  return e.slice(t, r);
}
function ut(e) {
  return e.length;
}
function _u(e) {
  return e.length;
}
function Yr(e, t) {
  return t.push(e), e;
}
var _n = 1, or = 1, Hs = 0, J0 = 0, S0 = 0, ir = "";
function ga(e, t, r, n, o, a, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: _n, column: or, length: i, return: "", siblings: s };
}
function Mu() {
  return S0;
}
function Fu() {
  return S0 = J0 > 0 ? Qt(ir, --J0) : 0, or--, S0 === 10 && (or = 1, _n--), S0;
}
function st() {
  return S0 = J0 < Hs ? Qt(ir, J0++) : 0, or++, S0 === 10 && (or = 1, _n++), S0;
}
function Mt() {
  return Qt(ir, J0);
}
function ln() {
  return J0;
}
function Mn(e, t) {
  return nr(ir, e, t);
}
function Mr(e) {
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
function Ou(e) {
  return _n = or = 1, Hs = ut(ir = e), J0 = 0, [];
}
function Tu(e) {
  return ir = "", e;
}
function Yn(e) {
  return Vs(Mn(J0 - 1, wo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ku(e) {
  for (; (S0 = Mt()) && S0 < 33; )
    st();
  return Mr(e) > 2 || Mr(S0) > 3 ? "" : " ";
}
function Au(e, t) {
  for (; --t && st() && !(S0 < 48 || S0 > 102 || S0 > 57 && S0 < 65 || S0 > 70 && S0 < 97); )
    ;
  return Mn(e, ln() + (t < 6 && Mt() == 32 && st() == 32));
}
function wo(e) {
  for (; st(); )
    switch (S0) {
      case e:
        return J0;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wo(S0);
        break;
      case 40:
        e === 41 && wo(e);
        break;
      case 92:
        st();
        break;
    }
  return J0;
}
function Nu(e, t) {
  for (; st() && e + S0 !== 47 + 10; )
    if (e + S0 === 42 + 42 && Mt() === 47)
      break;
  return "/*" + Mn(t, J0 - 1) + "*" + ma(e === 47 ? e : st());
}
function Du(e) {
  for (; !Mr(Mt()); )
    st();
  return Mn(e, J0);
}
function Lu(e) {
  return Tu(un("", null, null, null, [""], e = Ou(e), 0, [0], e));
}
function un(e, t, r, n, o, a, i, s, c) {
  for (var l = 0, u = 0, d = i, v = 0, h = 0, g = 0, m = 1, f = 1, y = 1, p = 0, C = "", w = o, S = a, x = n, E = C; f; )
    switch (g = p, p = st()) {
      case 40:
        if (g != 108 && Qt(E, d - 1) == 58) {
          Ru(E += cn(Yn(p), "&", "&\f"), "&\f", js(l ? s[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Yn(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += ku(g);
        break;
      case 92:
        E += Au(ln() - 1, 7);
        continue;
      case 47:
        switch (Mt()) {
          case 42:
          case 47:
            Yr($u(Nu(st(), ln()), t, r, c), c), (Mr(g || 1) == 5 || Mr(Mt() || 1) == 5) && ut(E) && nr(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      case 123 * m:
        s[l++] = ut(E) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            f = 0;
          case 59 + u:
            y == -1 && (E = cn(E, /\f/g, "")), h > 0 && (ut(E) - d || m === 0 && g === 47) && Yr(h > 32 ? ai(E + ";", n, r, d - 1, c) : ai(cn(E, " ", "") + ";", n, r, d - 2, c), c);
            break;
          case 59:
            E += ";";
          default:
            if (Yr(x = oi(E, t, r, l, u, o, s, C, w = [], S = [], d, a), a), p === 123)
              if (u === 0)
                un(E, t, x, x, w, a, d, s, S);
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
                u ? un(e, x, x, n && Yr(oi(e, x, x, 0, 0, o, s, C, o, w = [], d, S), S), o, S, d, s, n ? w : S) : un(E, x, x, x, [""], S, 0, s, S);
              }
        }
        l = u = h = 0, m = y = 1, C = E = "", d = i;
        break;
      case 58:
        d = 1 + ut(E), h = g;
      default:
        if (m < 1) {
          if (p == 123)
            --m;
          else if (p == 125 && m++ == 0 && Fu() == 125)
            continue;
        }
        switch (E += ma(p), p * m) {
          case 38:
            y = u > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[l++] = (ut(E) - 1) * y, y = 1;
            break;
          case 64:
            Mt() === 45 && (E += Yn(st())), v = Mt(), u = d = ut(C = E += Du(ln())), p++;
            break;
          case 45:
            g === 45 && ut(E) == 2 && (m = 0);
        }
    }
  return a;
}
function oi(e, t, r, n, o, a, i, s, c, l, u, d) {
  for (var v = o - 1, h = o === 0 ? a : [""], g = _u(h), m = 0, f = 0, y = 0; m < n; ++m)
    for (var p = 0, C = nr(e, v + 1, v = js(f = i[m])), w = e; p < g; ++p)
      (w = Vs(f > 0 ? h[p] + " " + C : cn(C, /&\f/g, h[p]))) && (c[y++] = w);
  return ga(e, t, r, o === 0 ? $s : s, c, l, u, d);
}
function $u(e, t, r, n) {
  return ga(e, t, r, Ls, ma(Mu()), nr(e, 2, -2), 0, n);
}
function ai(e, t, r, n, o) {
  return ga(e, t, r, Is, nr(e, 0, n), nr(e, n + 1, -1), n, o);
}
function Eo(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Iu(e, t, r, n) {
  switch (e.type) {
    case Pu:
      if (e.children.length)
        break;
    case wu:
    case Eu:
    case Is:
      return e.return = e.return || e.value;
    case Ls:
      return "";
    case xu:
      return e.return = e.value + "{" + Eo(e.children, n) + "}";
    case $s:
      if (!ut(e.value = e.props.join(",")))
        return "";
  }
  return ut(r = Eo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Bs(e, t) {
  var r = t.path, n = t.parentSelectors;
  a0(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var ju = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Bs("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Vu = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Bs("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, ii = "data-ant-cssinjs-cache-path", zs = "_FILE_STYLE__", Lt, Ws = !0;
function Hu() {
  if (!Lt && (Lt = {}, G0())) {
    var e = document.createElement("div");
    e.className = ii, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = q(a, 2), s = i[0], c = i[1];
      Lt[s] = c;
    });
    var r = document.querySelector("style[".concat(ii, "]"));
    if (r) {
      var n;
      Ws = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Bu(e) {
  return Hu(), !!Lt[e];
}
function zu(e) {
  var t = Lt[e], r = null;
  if (t && G0())
    if (Ws)
      r = zs;
    else {
      var n = document.querySelector("style[".concat(it, '="').concat(Lt[e], '"]'));
      n ? r = n.innerHTML : delete Lt[e];
    }
  return [r, t];
}
var Us = "_skip_check_", Gs = "_multi_value_";
function fn(e) {
  var t = Eo(Lu(e), Iu);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Wu(e) {
  return Pe(e) === "object" && e && (Us in e || Gs in e);
}
function si(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(ve(c.slice(1))).join(" ");
  });
  return a.join(",");
}
var Uu = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, s = r.hashId, c = r.layer, l = r.path, u = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, h = r.linters, g = h === void 0 ? [] : h, m = "", f = {};
  function y(w) {
    var S = w.getName(s);
    if (!f[S]) {
      var x = e(w.style, r, {
        root: !1,
        parentSelectors: i
      }), E = q(x, 1), M = E[0];
      f[S] = "@keyframes ".concat(w.getName(s)).concat(M);
    }
  }
  function p(w) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(x) {
      Array.isArray(x) ? p(x, S) : x && S.push(x);
    }), S;
  }
  var C = p(Array.isArray(t) ? t : [t]);
  return C.forEach(function(w) {
    var S = typeof w == "string" && !o ? {} : w;
    if (typeof S == "string")
      m += "".concat(S, `
`);
    else if (S._keyframe)
      y(S);
    else {
      var x = v.reduce(function(E, M) {
        var R;
        return (M == null || (R = M.visit) === null || R === void 0 ? void 0 : R.call(M, E)) || E;
      }, S);
      Object.keys(x).forEach(function(E) {
        var M = x[E];
        if (Pe(M) === "object" && M && (E !== "animationName" || !M._keyframe) && !Wu(M)) {
          var R = !1, _ = E.trim(), O = !1;
          (o || a) && s ? _.startsWith("@") ? R = !0 : _ === "&" ? _ = si("", s, u) : _ = si(E, s, u) : o && !s && (_ === "&" || _ === "") && (_ = "", O = !0);
          var F = e(M, r, {
            root: O,
            injectHash: R,
            parentSelectors: [].concat(ve(i), [_])
          }), k = q(F, 2), A = k[0], $ = k[1];
          f = D(D({}, f), $), m += "".concat(_).concat(A);
        } else {
          let V = function(B, G) {
            process.env.NODE_ENV !== "production" && (Pe(M) !== "object" || !(M != null && M[Us])) && [ju, Vu].concat(ve(g)).forEach(function(ee) {
              return ee(B, G, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var U = B.replace(/[A-Z]/g, function(ee) {
              return "-".concat(ee.toLowerCase());
            }), H = G;
            !Su[B] && typeof H == "number" && H !== 0 && (H = "".concat(H, "px")), B === "animationName" && G !== null && G !== void 0 && G._keyframe && (y(G), H = G.getName(s)), m += "".concat(U, ":").concat(H, ";");
          };
          var I, j = (I = M == null ? void 0 : M.value) !== null && I !== void 0 ? I : M;
          Pe(M) === "object" && M !== null && M !== void 0 && M[Gs] && Array.isArray(j) ? j.forEach(function(B) {
            V(E, B);
          }) : V(E, j);
        }
      });
    }
  }), o ? c && (m && (m = "@layer ".concat(c.name, " {").concat(m, "}")), c.dependencies && (f["@layer ".concat(c.name)] = c.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(c.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, f];
};
function qs(e, t) {
  return Rr("".concat(e.join("%")).concat(t));
}
function Gu() {
  return null;
}
var Xs = "style";
function ci(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = b.useContext(Rn), d = u.autoClear, v = u.mock, h = u.defaultCache, g = u.hashPriority, m = u.container, f = u.ssrInline, y = u.transformers, p = u.linters, C = u.cache, w = u.layer, S = r._tokenKey, x = [S];
  w && x.push("layer"), x.push.apply(x, ve(n));
  var E = Co;
  process.env.NODE_ENV !== "production" && v !== void 0 && (E = v === "client");
  var M = ha(
    Xs,
    x,
    // Create cache if needed
    function() {
      var k = x.join("|");
      if (Bu(k)) {
        var A = zu(k), $ = q(A, 2), I = $[0], j = $[1];
        if (I)
          return [I, S, j, {}, s, l];
      }
      var V = t(), B = Uu(V, {
        hashId: o,
        hashPriority: g,
        layer: w ? a : void 0,
        path: n.join("-"),
        transformers: y,
        linters: p
      }), G = q(B, 2), U = G[0], H = G[1], ee = fn(U), K = qs(x, ee);
      return [ee, S, K, H, s, l];
    },
    // Remove cache if no need
    function(k, A) {
      var $ = q(k, 3), I = $[2];
      (A || d) && Co && _r(I, {
        mark: it,
        attachTo: m
      });
    },
    // Effect: Inject style here
    function(k) {
      var A = q(k, 4), $ = A[0];
      A[1];
      var I = A[2], j = A[3];
      if (E && $ !== zs) {
        var V = {
          mark: it,
          prepend: w ? !1 : "queue",
          attachTo: m,
          priority: l
        }, B = typeof i == "function" ? i() : i;
        B && (V.csp = {
          nonce: B
        });
        var G = [], U = [];
        Object.keys(j).forEach(function(ee) {
          ee.startsWith("@layer") ? G.push(ee) : U.push(ee);
        }), G.forEach(function(ee) {
          Dt(fn(j[ee]), "_layer-".concat(ee), D(D({}, V), {}, {
            prepend: !0
          }));
        });
        var H = Dt($, I, V);
        H[_t] = C.instanceId, H.setAttribute(rr, S), process.env.NODE_ENV !== "production" && H.setAttribute(ql, x.join("|")), U.forEach(function(ee) {
          Dt(fn(j[ee]), "_effect-".concat(ee), V);
        });
      }
    }
  ), R = q(M, 3), _ = R[0], O = R[1], F = R[2];
  return function(k) {
    var A;
    return !f || E || !h ? A = /* @__PURE__ */ b.createElement(Gu, null) : A = /* @__PURE__ */ b.createElement("style", D0({}, T(T({}, rr, O), it, F), {
      dangerouslySetInnerHTML: {
        __html: _
      }
    })), /* @__PURE__ */ b.createElement(b.Fragment, null, A, k);
  };
}
var qu = function(t, r, n) {
  var o = q(t, 6), a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = o[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var h = a, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return h = mn(a, i, s, g, v), c && Object.keys(c).forEach(function(m) {
    if (!r[m]) {
      r[m] = !0;
      var f = fn(c[m]), y = mn(f, i, "_effect-".concat(m), g, v);
      m.startsWith("@layer") ? h = y + h : h += y;
    }
  }), [u, s, h];
}, Ys = "cssVar", Xu = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = wr(Rn), d = u.cache.instanceId, v = u.container, h = s._tokenKey, g = [].concat(ve(t.path), [n, l, h]), m = ha(Ys, g, function() {
    var f = r(), y = Ns(f, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), p = q(y, 2), C = p[0], w = p[1], S = qs(g, w);
    return [C, w, S, n];
  }, function(f) {
    var y = q(f, 3), p = y[2];
    Co && _r(p, {
      mark: it,
      attachTo: v
    });
  }, function(f) {
    var y = q(f, 3), p = y[1], C = y[2];
    if (p) {
      var w = Dt(p, C, {
        mark: it,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      w[_t] = d, w.setAttribute(rr, n);
    }
  });
  return m;
}, Yu = function(t, r, n) {
  var o = q(t, 4), a = o[1], i = o[2], s = o[3], c = n || {}, l = c.plain;
  if (!a)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, v = mn(a, s, i, d, l);
  return [u, i, v];
};
T(T(T({}, Xs, qu), Ds, Cu), Ys, Yu);
var tt = /* @__PURE__ */ function() {
  function e(t, r) {
    _0(this, e), T(this, "name", void 0), T(this, "style", void 0), T(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return M0(e, [{
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
function Ku(e) {
  return Ms(e) || xs(e) || fa(e) || Fs();
}
function dt(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Ks(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Ku(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = ve(e) : s = D({}, e), n && r === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = Ks(s[a], i, r, n), s;
}
function ot(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !dt(e, t.slice(0, -1)) ? e : Ks(e, t, r, n);
}
function Zu(e) {
  return Pe(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function li(e) {
  return Array.isArray(e) ? [] : {};
}
var Qu = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function yr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = li(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var c = new Set(s), l = dt(o, i), u = Array.isArray(l);
      if (u || Zu(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = dt(n, i);
          u ? n = ot(n, i, []) : (!d || Pe(d) !== "object") && (n = ot(n, i, li(l))), Qu(l).forEach(function(v) {
            a([].concat(ve(i), [v]), c);
          });
        }
      } else
        n = ot(n, i, l);
    }
    a([]);
  }), n;
}
function Zs() {
}
let pt = null;
function Ju() {
  pt = null, ds();
}
let Qs = Zs;
process.env.NODE_ENV !== "production" && (Qs = (e, t, r) => {
  a0(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Ju();
});
const e2 = Qs, t2 = /* @__PURE__ */ b.createContext({}), pa = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = b.useContext(t2), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = pt;
        pt || (pt = {}), pt[e] = pt[e] || [], pt[e].includes(a || "") || pt[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", pt);
      } else
        process.env.NODE_ENV !== "production" && e2(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = Zs, e;
}, Js = {
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
}, r2 = Object.assign(Object.assign({}, Js), {
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
}), gn = r2, P0 = Math.round;
function Kn(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const ui = (e, t, r) => r === 0 ? e : e / 100;
function hr(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class p0 {
  constructor(t) {
    T(this, "isValid", !0), T(this, "r", 0), T(this, "g", 0), T(this, "b", 0), T(this, "a", 1), T(this, "_h", void 0), T(this, "_s", void 0), T(this, "_l", void 0), T(this, "_v", void 0), T(this, "_max", void 0), T(this, "_min", void 0), T(this, "_brightness", void 0);
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
        this.r = hr(t.r), this.g = hr(t.g), this.b = hr(t.b), this.a = typeof t.a == "number" ? hr(t.a, 1) : 1;
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
    return o[t] = hr(r, n), o;
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
    const r = Kn(t, ui);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Kn(t, ui);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Kn(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? P0(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var Kr = 2, fi = 0.16, n2 = 0.05, o2 = 0.05, a2 = 0.15, e1 = 5, t1 = 4, i2 = [{
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
function di(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Kr * t : Math.round(e.h) + Kr * t : n = r ? Math.round(e.h) + Kr * t : Math.round(e.h) - Kr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function vi(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - fi * t : t === t1 ? n = e.s + fi : n = e.s + n2 * t, n > 1 && (n = 1), r && t === e1 && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function hi(e, t, r) {
  var n;
  return r ? n = e.v + o2 * t : n = e.v - a2 * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function r1(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new p0(e), o = n.toHsv(), a = e1; a > 0; a -= 1) {
    var i = new p0({
      h: di(o, a, !0),
      s: vi(o, a, !0),
      v: hi(o, a, !0)
    });
    r.push(i);
  }
  r.push(n);
  for (var s = 1; s <= t1; s += 1) {
    var c = new p0({
      h: di(o, s),
      s: vi(o, s),
      v: hi(o, s)
    });
    r.push(c);
  }
  return t.theme === "dark" ? i2.map(function(l) {
    var u = l.index, d = l.amount;
    return new p0(t.backgroundColor || "#141414").mix(r[u], d).toHexString();
  }) : r.map(function(l) {
    return l.toHexString();
  });
}
var Zn = {
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
}, xo = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
xo.primary = xo[5];
var Po = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Po.primary = Po[5];
var Ro = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Ro.primary = Ro[5];
var _o = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
_o.primary = _o[5];
var Mo = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Mo.primary = Mo[5];
var Fo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Fo.primary = Fo[5];
var Oo = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Oo.primary = Oo[5];
var To = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
To.primary = To[5];
var ko = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ko.primary = ko[5];
var Ao = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Ao.primary = Ao[5];
var No = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
No.primary = No[5];
var Do = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Do.primary = Do[5];
var Lo = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Lo.primary = Lo[5];
var Qn = {
  red: xo,
  volcano: Po,
  orange: Ro,
  gold: _o,
  yellow: Mo,
  lime: Fo,
  green: Oo,
  cyan: To,
  blue: ko,
  geekblue: Ao,
  purple: No,
  magenta: Do,
  grey: Lo
};
function s2(e, {
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
  } = e, u = t(s), d = t(n), v = t(o), h = t(a), g = t(i), m = r(c, l), f = e.colorLink || e.colorInfo, y = t(f), p = new p0(h[1]).mix(new p0(h[3]), 50).toHexString();
  return Object.assign(Object.assign({}, m), {
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
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new p0("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const c2 = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, l2 = c2;
function u2(e) {
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
  }, l2(n));
}
const f2 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, d2 = f2;
function v2(e) {
  return (e + 8) / e;
}
function h2(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: v2(r)
  }));
}
const m2 = (e) => {
  const t = h2(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], a = r[0], i = r[2], s = n[1], c = n[0], l = n[2];
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
}, g2 = m2;
function p2(e) {
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
const Y0 = (e, t) => new p0(e).setA(t).toRgbString(), mr = (e, t) => new p0(e).darken(t).toHexString(), y2 = (e) => {
  const t = r1(e);
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
}, b2 = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Y0(n, 0.88),
    colorTextSecondary: Y0(n, 0.65),
    colorTextTertiary: Y0(n, 0.45),
    colorTextQuaternary: Y0(n, 0.25),
    colorFill: Y0(n, 0.15),
    colorFillSecondary: Y0(n, 0.06),
    colorFillTertiary: Y0(n, 0.04),
    colorFillQuaternary: Y0(n, 0.02),
    colorBgSolid: Y0(n, 1),
    colorBgSolidHover: Y0(n, 0.75),
    colorBgSolidActive: Y0(n, 0.95),
    colorBgLayout: mr(r, 4),
    colorBgContainer: mr(r, 0),
    colorBgElevated: mr(r, 0),
    colorBgSpotlight: Y0(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: mr(r, 15),
    colorBorderSecondary: mr(r, 6)
  };
};
function C2(e) {
  Zn.pink = Zn.magenta, Qn.pink = Qn.magenta;
  const t = Object.keys(Js).map((r) => {
    const n = e[r] === Zn[r] ? Qn[r] : r1(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s2(e, {
    generateColorPalettes: y2,
    generateNeutralColorPalettes: b2
  })), g2(e.fontSize)), p2(e)), d2(e)), u2(e));
}
const S2 = Kl(C2), w2 = S2, E2 = {
  token: gn,
  override: {
    override: gn
  },
  hashed: !0
}, x2 = /* @__PURE__ */ ye.createContext(E2), mi = "ant", n1 = "anticon", P2 = (e, t) => t || (e ? `${mi}-${e}` : mi), Fr = /* @__PURE__ */ b.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: P2,
  iconPrefixCls: n1
}), gi = {};
function ya(e) {
  const t = b.useContext(Fr), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: gi,
    styles: gi
  }, a), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  });
}
const R2 = /* @__PURE__ */ b.createContext(!1), _2 = R2;
var o1 = /* @__PURE__ */ M0(function e() {
  _0(this, e);
}), a1 = "CALC_UNIT", M2 = new RegExp(a1, "g");
function Jn(e) {
  return typeof e == "number" ? "".concat(e).concat(a1) : e;
}
var F2 = /* @__PURE__ */ function(e) {
  Ot(r, e);
  var t = Tt(r);
  function r(n, o) {
    var a;
    _0(this, r), a = t.call(this), T(Oe(a), "result", ""), T(Oe(a), "unitlessCssVar", void 0), T(Oe(a), "lowPriority", void 0);
    var i = Pe(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = Jn(n) : i === "string" && (a.result = n), a;
  }
  return M0(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Jn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Jn(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(M2, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(o1), O2 = /* @__PURE__ */ function(e) {
  Ot(r, e);
  var t = Tt(r);
  function r(n) {
    var o;
    return _0(this, r), o = t.call(this), T(Oe(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return M0(r, [{
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
}(o1), T2 = function(t, r) {
  var n = t === "css" ? F2 : O2;
  return function(o) {
    return new n(o, r);
  };
}, pi = function(t, r) {
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
function Or(e) {
  var t = b.useRef(!1), r = b.useState(e), n = q(r, 2), o = n[0], a = n[1];
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
function eo(e) {
  return e !== void 0;
}
function Fn(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, a = r.onChange, i = r.postState, s = Or(function() {
    return eo(o) ? o : eo(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = q(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, v = i ? i(d) : d, h = R0(a), g = Or([d]), m = q(g, 2), f = m[0], y = m[1];
  ri(function() {
    var C = f[0];
    l !== C && h(l, C);
  }, [f]), ri(function() {
    eo(o) || u(o);
  }, [o]);
  var p = R0(function(C, w) {
    u(C, w), y([d], w);
  });
  return [v, p];
}
function yi(e, t, r, n) {
  var o = D({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(s) {
      var c = q(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && a0(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var i = D(D({}, r), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var i1 = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", $o = !0;
function sr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!i1)
    return Object.assign.apply(Object, [{}].concat(t));
  $o = !1;
  var n = {};
  return t.forEach(function(o) {
    if (Pe(o) === "object") {
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
  }), $o = !0, n;
}
var bi = {};
function k2() {
}
var A2 = function(t) {
  var r, n = t, o = k2;
  return i1 && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(i, s) {
      if ($o) {
        var c;
        (c = r) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var c;
    bi[i] = {
      global: Array.from(r),
      component: D(D({}, (c = bi[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function Ci(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(sr(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function N2(e) {
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
var D2 = 1e3 * 60 * 10, L2 = /* @__PURE__ */ function() {
  function e() {
    _0(this, e), T(this, "map", /* @__PURE__ */ new Map()), T(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), T(this, "nextID", 0), T(this, "lastAccessBeat", /* @__PURE__ */ new Map()), T(this, "accessBeat", 0);
  }
  return M0(e, [{
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
        return a && Pe(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(Pe(a), "_").concat(a);
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
          n - o > D2 && (r.map.delete(a), r.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Si = new L2();
function $2(e, t) {
  return ye.useMemo(function() {
    var r = Si.get(t);
    if (r)
      return r;
    var n = e();
    return Si.set(t, n), n;
  }, t);
}
var I2 = function() {
  return {};
};
function j2(e) {
  var t = e.useCSP, r = t === void 0 ? I2 : t, n = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(v, h, g, m) {
    var f = Array.isArray(v) ? v[0] : v;
    function y(M) {
      return "".concat(String(f)).concat(M.slice(0, 1).toUpperCase()).concat(M.slice(1));
    }
    var p = (m == null ? void 0 : m.unitless) || {}, C = typeof s == "function" ? s(v) : {}, w = D(D({}, C), {}, T({}, y("zIndexPopup"), !0));
    Object.keys(p).forEach(function(M) {
      w[y(M)] = p[M];
    });
    var S = D(D({}, m), {}, {
      unitless: w,
      prefixToken: y
    }), x = u(v, h, g, S), E = l(f, g, S);
    return function(M) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : M, _ = x(M, R), O = q(_, 2), F = O[1], k = E(R), A = q(k, 2), $ = A[0], I = A[1];
      return [$, F, I];
    };
  }
  function l(v, h, g) {
    var m = g.unitless, f = g.injectStyle, y = f === void 0 ? !0 : f, p = g.prefixToken, C = g.ignore, w = function(E) {
      var M = E.rootCls, R = E.cssVar, _ = R === void 0 ? {} : R, O = n(), F = O.realToken;
      return Xu({
        path: [v],
        prefix: _.prefix,
        key: _.key,
        unitless: m,
        ignore: C,
        token: F,
        scope: M
      }, function() {
        var k = Ci(v, F, h), A = yi(v, F, k, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(k).forEach(function($) {
          A[p($)] = A[$], delete A[$];
        }), A;
      }), null;
    }, S = function(E) {
      var M = n(), R = M.cssVar;
      return [function(_) {
        return y && R ? /* @__PURE__ */ ye.createElement(ye.Fragment, null, /* @__PURE__ */ ye.createElement(w, {
          rootCls: E,
          cssVar: R,
          component: v
        }), _) : _;
      }, R == null ? void 0 : R.key];
    };
    return S;
  }
  function u(v, h, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = Array.isArray(v) ? v : [v, v], y = q(f, 1), p = y[0], C = f.join("-"), w = e.layer || {
      name: "antd"
    };
    return function(S) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S, E = n(), M = E.theme, R = E.realToken, _ = E.hashId, O = E.token, F = E.cssVar, k = o(), A = k.rootPrefixCls, $ = k.iconPrefixCls, I = r(), j = F ? "css" : "js", V = $2(function() {
        var K = /* @__PURE__ */ new Set();
        return F && Object.keys(m.unitless || {}).forEach(function(X) {
          K.add(sn(X, F.prefix)), K.add(sn(X, pi(p, F.prefix)));
        }), T2(j, K);
      }, [j, p, F == null ? void 0 : F.prefix]), B = N2(j), G = B.max, U = B.min, H = {
        theme: M,
        token: O,
        hashId: _,
        nonce: function() {
          return I.nonce;
        },
        clientOnly: m.clientOnly,
        layer: w,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof a == "function" && ci(D(D({}, H), {}, {
        clientOnly: !1,
        path: ["Shared", A]
      }), function() {
        return a(O, {
          prefix: {
            rootPrefixCls: A,
            iconPrefixCls: $
          },
          csp: I
        });
      });
      var ee = ci(D(D({}, H), {}, {
        path: [C, S, $]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var K = A2(O), X = K.token, z = K.flush, te = Ci(p, R, g), re = ".".concat(S), ce = yi(p, R, te, {
          deprecatedTokens: m.deprecatedTokens
        });
        F && te && Pe(te) === "object" && Object.keys(te).forEach(function(Ee) {
          te[Ee] = "var(".concat(sn(Ee, pi(p, F.prefix)), ")");
        });
        var ne = sr(X, {
          componentCls: re,
          prefixCls: S,
          iconCls: ".".concat($),
          antCls: ".".concat(A),
          calc: V,
          // @ts-ignore
          max: G,
          // @ts-ignore
          min: U
        }, F ? te : ce), oe = h(ne, {
          hashId: _,
          prefixCls: S,
          rootPrefixCls: A,
          iconPrefixCls: $
        });
        z(p, ce);
        var me = typeof i == "function" ? i(ne, S, x, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : me, oe];
      });
      return [ee, _];
    };
  }
  function d(v, h, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = u(v, h, g, D({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), y = function(C) {
      var w = C.prefixCls, S = C.rootCls, x = S === void 0 ? w : S;
      return f(w, x), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Tr = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], V2 = "5.29.3";
function to(e) {
  return e >= 0 && e <= 255;
}
function Zr(e, t) {
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
    if (to(u) && to(d) && to(v))
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
var H2 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function s1(e) {
  const {
    override: t
  } = e, r = H2(e, ["override"]), n = Object.assign({}, t);
  Object.keys(gn).forEach((v) => {
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
    colorSplit: Zr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Zr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Zr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Zr(o.colorPrimaryBg, o.colorBgContainer),
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
var wi = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const c1 = {
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
}, B2 = {
  motionBase: !0,
  motionUnit: !0
}, z2 = {
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
}, l1 = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = wi(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = s1(i), a && Object.entries(a).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = wi(c, ["theme"]);
    let d = u;
    l && (d = l1(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = d;
  }), i;
};
function ba() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = ye.useContext(x2), a = `${V2}-${t || ""}`, i = r || w2, [s, c, l] = bu(i, [gn, e], {
    salt: a,
    override: n,
    getComputedToken: l1,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: s1,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: c1,
      ignore: B2,
      preserve: z2
    }
  });
  return [i, l, t ? c : "", s, o];
}
const Ca = (e, t = !1) => ({
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
}), W2 = () => ({
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
}), U2 = (e) => ({
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
}), G2 = (e, t, r, n) => {
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
}, q2 = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, W2()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Sa,
  genComponentStyleHook: B4,
  genSubStyleComponent: z4
} = j2({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = wr(Fr);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = ba();
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
    } = wr(Fr);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = U2(e);
    return [n, {
      "&": n
    }, q2((r = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && r !== void 0 ? r : n1)];
  },
  getCommonStyle: G2,
  getCompUnitless: () => c1
});
function X2(e, t) {
  return Tr.reduce((r, n) => {
    const o = e[`${n}1`], a = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: o,
      lightBorderColor: a,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
var Y2 = /* @__PURE__ */ b.createContext({}), K2 = /* @__PURE__ */ function(e) {
  Ot(r, e);
  var t = Tt(r);
  function r() {
    return _0(this, r), t.apply(this, arguments);
  }
  return M0(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(b.Component);
function Z2(e) {
  var t = b.useReducer(function(s) {
    return s + 1;
  }, 0), r = q(t, 2), n = r[1], o = b.useRef(e), a = R0(function() {
    return o.current;
  }), i = R0(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, n();
  });
  return [a, i];
}
var Rt = "none", Qr = "appear", Jr = "enter", en = "leave", Ei = "none", at = "prepare", Kt = "start", Zt = "active", wa = "end", u1 = "prepared";
function xi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Q2(e, t) {
  var r = {
    animationend: xi("Animation", "AnimationEnd"),
    transitionend: xi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var J2 = Q2(G0(), typeof window < "u" ? window : {}), f1 = {};
if (G0()) {
  var e3 = document.createElement("div");
  f1 = e3.style;
}
var tn = {};
function d1(e) {
  if (tn[e])
    return tn[e];
  var t = J2[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in f1)
        return tn[e] = t[a], tn[e];
    }
  return "";
}
var v1 = d1("animationend"), h1 = d1("transitionend"), m1 = !!(v1 && h1), Pi = v1 || "animationend", Ri = h1 || "transitionend";
function _i(e, t) {
  if (!e)
    return null;
  if (Pe(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const t3 = function(e) {
  var t = Y();
  function r(o) {
    o && (o.removeEventListener(Ri, e), o.removeEventListener(Pi, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Ri, e), o.addEventListener(Pi, e), t.current = o);
  }
  return b.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var g1 = G0() ? sc : ke;
const r3 = function() {
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
var n3 = [at, Kt, Zt, wa], o3 = [at, u1], p1 = !1, a3 = !0;
function y1(e) {
  return e === Zt || e === wa;
}
const i3 = function(e, t, r) {
  var n = Or(Ei), o = q(n, 2), a = o[0], i = o[1], s = r3(), c = q(s, 2), l = c[0], u = c[1];
  function d() {
    i(at, !0);
  }
  var v = t ? o3 : n3;
  return g1(function() {
    if (a !== Ei && a !== wa) {
      var h = v.indexOf(a), g = v[h + 1], m = r(a);
      m === p1 ? i(g, !0) : g && l(function(f) {
        function y() {
          f.isCanceled() || i(g, !0);
        }
        m === !0 ? y() : Promise.resolve(m).then(y);
      });
    }
  }, [e, a]), b.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, a];
};
function s3(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, s = i === void 0 ? !0 : i, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, h = n.onEnterPrepare, g = n.onLeavePrepare, m = n.onAppearStart, f = n.onEnterStart, y = n.onLeaveStart, p = n.onAppearActive, C = n.onEnterActive, w = n.onLeaveActive, S = n.onAppearEnd, x = n.onEnterEnd, E = n.onLeaveEnd, M = n.onVisibleChanged, R = Or(), _ = q(R, 2), O = _[0], F = _[1], k = Z2(Rt), A = q(k, 2), $ = A[0], I = A[1], j = Or(null), V = q(j, 2), B = V[0], G = V[1], U = $(), H = Y(!1), ee = Y(null);
  function K() {
    return r();
  }
  var X = Y(!1);
  function z() {
    I(Rt), G(null, !0);
  }
  var te = R0(function(Z) {
    var le = $();
    if (le !== Rt) {
      var ge = K();
      if (!(Z && !Z.deadline && Z.target !== ge)) {
        var J = X.current, Re;
        le === Qr && J ? Re = S == null ? void 0 : S(ge, Z) : le === Jr && J ? Re = x == null ? void 0 : x(ge, Z) : le === en && J && (Re = E == null ? void 0 : E(ge, Z)), J && Re !== !1 && z();
      }
    }
  }), re = t3(te), ce = q(re, 1), ne = ce[0], oe = function(le) {
    switch (le) {
      case Qr:
        return T(T(T({}, at, v), Kt, m), Zt, p);
      case Jr:
        return T(T(T({}, at, h), Kt, f), Zt, C);
      case en:
        return T(T(T({}, at, g), Kt, y), Zt, w);
      default:
        return {};
    }
  }, me = b.useMemo(function() {
    return oe(U);
  }, [U]), Ee = i3(U, !e, function(Z) {
    if (Z === at) {
      var le = me[at];
      return le ? le(K()) : p1;
    }
    if (de in me) {
      var ge;
      G(((ge = me[de]) === null || ge === void 0 ? void 0 : ge.call(me, K(), null)) || null);
    }
    return de === Zt && U !== Rt && (ne(K()), u > 0 && (clearTimeout(ee.current), ee.current = setTimeout(function() {
      te({
        deadline: !0
      });
    }, u))), de === u1 && z(), a3;
  }), L = q(Ee, 2), fe = L[0], de = L[1], ie = y1(de);
  X.current = ie;
  var Ce = Y(null);
  g1(function() {
    if (!(H.current && Ce.current === t)) {
      F(t);
      var Z = H.current;
      H.current = !0;
      var le;
      !Z && t && s && (le = Qr), Z && t && a && (le = Jr), (Z && !t && l || !Z && d && !t && l) && (le = en);
      var ge = oe(le);
      le && (e || ge[at]) ? (I(le), fe()) : I(Rt), Ce.current = t;
    }
  }, [t]), ke(function() {
    // Cancel appear
    (U === Qr && !s || // Cancel enter
    U === Jr && !a || // Cancel leave
    U === en && !l) && I(Rt);
  }, [s, a, l]), ke(function() {
    return function() {
      H.current = !1, clearTimeout(ee.current);
    };
  }, []);
  var he = b.useRef(!1);
  ke(function() {
    O && (he.current = !0), O !== void 0 && U === Rt && ((he.current || O) && (M == null || M(O)), he.current = !0);
  }, [O, U]);
  var Ye = B;
  return me[at] && de === Kt && (Ye = D({
    transition: "none"
  }, Ye)), [U, de, Ye, O ?? t];
}
function c3(e) {
  var t = e;
  Pe(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ b.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, v = o.motionName, h = o.leavedClassName, g = o.eventProps, m = b.useContext(Y2), f = m.motion, y = r(o, f), p = Y(), C = Y();
    function w() {
      try {
        return p.current instanceof HTMLElement ? p.current : an(C.current);
      } catch {
        return null;
      }
    }
    var S = s3(y, s, w, o), x = q(S, 4), E = x[0], M = x[1], R = x[2], _ = x[3], O = b.useRef(_);
    _ && (O.current = !0);
    var F = b.useCallback(function(V) {
      p.current = V, ia(a, V);
    }, [a]), k, A = D(D({}, g), {}, {
      visible: s
    });
    if (!d)
      k = null;
    else if (E === Rt)
      _ ? k = d(D({}, A), F) : !l && O.current && h ? k = d(D(D({}, A), {}, {
        className: h
      }), F) : u || !l && !h ? k = d(D(D({}, A), {}, {
        style: {
          display: "none"
        }
      }), F) : k = null;
    else {
      var $;
      M === at ? $ = "prepare" : y1(M) ? $ = "active" : M === Kt && ($ = "start");
      var I = _i(v, "".concat(E, "-").concat($));
      k = d(D(D({}, A), {}, {
        className: De(_i(v, E), T(T({}, I, I && $), v, typeof v == "string")),
        style: R
      }), F);
    }
    if (/* @__PURE__ */ b.isValidElement(k) && Sn(k)) {
      var j = la(k);
      j || (k = /* @__PURE__ */ b.cloneElement(k, {
        ref: F
      }));
    }
    return /* @__PURE__ */ b.createElement(K2, {
      ref: C
    }, k);
  });
  return n.displayName = "CSSMotion", n;
}
const Ea = c3(m1);
var Io = "add", jo = "keep", Vo = "remove", ro = "removed";
function l3(e) {
  var t;
  return e && Pe(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, D(D({}, t), {}, {
    key: String(t.key)
  });
}
function Ho() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(l3);
}
function u3() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = Ho(e), i = Ho(t);
  a.forEach(function(l) {
    for (var u = !1, d = n; d < o; d += 1) {
      var v = i[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(h) {
          return D(D({}, h), {}, {
            status: Io
          });
        })), n = d), r.push(D(D({}, v), {}, {
          status: jo
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(D(D({}, l), {}, {
      status: Vo
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(l) {
    return D(D({}, l), {}, {
      status: Io
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
      return d !== l || v !== Vo;
    }), r.forEach(function(u) {
      u.key === l && (u.status = jo);
    });
  }), r;
}
var f3 = ["component", "children", "onVisibleChanged", "onAllRemoved"], d3 = ["status"], v3 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function h3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea, r = /* @__PURE__ */ function(n) {
    Ot(a, n);
    var o = Tt(a);
    function a() {
      var i;
      _0(this, a);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), T(Oe(i), "state", {
        keyEntities: []
      }), T(Oe(i), "removeKey", function(u) {
        i.setState(function(d) {
          var v = d.keyEntities.map(function(h) {
            return h.key !== u ? h : D(D({}, h), {}, {
              status: ro
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var d = i.state.keyEntities, v = d.filter(function(h) {
            var g = h.status;
            return g !== ro;
          }).length;
          v === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return M0(a, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, v = l.onVisibleChanged;
        l.onAllRemoved;
        var h = ct(l, f3), g = u || b.Fragment, m = {};
        return v3.forEach(function(f) {
          m[f] = h[f], delete h[f];
        }), delete h.keys, /* @__PURE__ */ b.createElement(g, h, c.map(function(f, y) {
          var p = f.status, C = ct(f, d3), w = p === Io || p === jo;
          return /* @__PURE__ */ b.createElement(t, D0({}, m, {
            key: C.key,
            visible: w,
            eventProps: C,
            onVisibleChanged: function(x) {
              v == null || v(x, {
                key: C.key
              }), x || s.removeKey(C.key);
            }
          }), function(S, x) {
            return d(D(D({}, S), {}, {
              index: y
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, d = Ho(l), v = u3(u, d);
        return {
          keyEntities: v.filter(function(h) {
            var g = u.find(function(m) {
              var f = m.key;
              return h.key === f;
            });
            return !(g && g.status === ro && h.status === Vo);
          })
        };
      }
    }]), a;
  }(b.Component);
  return T(r, "defaultProps", {
    component: "div"
  }), r;
}
h3(m1);
function b1(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function m3(e) {
  return b1(e) instanceof ShadowRoot;
}
function Bo(e) {
  return m3(e) ? b1(e) : null;
}
function g3(e) {
  return e && /* @__PURE__ */ ye.isValidElement(e) && e.type === ye.Fragment;
}
const p3 = (e, t, r) => /* @__PURE__ */ ye.isValidElement(e) ? /* @__PURE__ */ ye.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function C1(e, t) {
  return p3(e, e, t);
}
var ae = {
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
    r >= ae.F1 && r <= ae.F12)
      return !1;
    switch (r) {
      case ae.ALT:
      case ae.CAPS_LOCK:
      case ae.CONTEXT_MENU:
      case ae.CTRL:
      case ae.DOWN:
      case ae.END:
      case ae.ESC:
      case ae.HOME:
      case ae.INSERT:
      case ae.LEFT:
      case ae.MAC_FF_META:
      case ae.META:
      case ae.NUMLOCK:
      case ae.NUM_CENTER:
      case ae.PAGE_DOWN:
      case ae.PAGE_UP:
      case ae.PAUSE:
      case ae.PRINT_SCREEN:
      case ae.RIGHT:
      case ae.SHIFT:
      case ae.UP:
      case ae.WIN_KEY:
      case ae.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= ae.ZERO && t <= ae.NINE || t >= ae.NUM_ZERO && t <= ae.NUM_MULTIPLY || t >= ae.A && t <= ae.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case ae.SPACE:
      case ae.QUESTION_MARK:
      case ae.NUM_PLUS:
      case ae.NUM_MINUS:
      case ae.NUM_PERIOD:
      case ae.NUM_DIVISION:
      case ae.SEMICOLON:
      case ae.DASH:
      case ae.EQUALS:
      case ae.COMMA:
      case ae.PERIOD:
      case ae.SLASH:
      case ae.APOSTROPHE:
      case ae.SINGLE_QUOTE:
      case ae.OPEN_SQUARE_BRACKET:
      case ae.BACKSLASH:
      case ae.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
const S1 = /* @__PURE__ */ ye.createContext(void 0);
process.env.NODE_ENV !== "production" && (S1.displayName = "zIndexContext");
const w1 = S1, yt = 100, y3 = 10, b3 = yt * y3, C3 = b3 + yt, E1 = {
  Modal: yt,
  Drawer: yt,
  Popover: yt,
  Popconfirm: yt,
  Tooltip: yt,
  Tour: yt,
  FloatButton: yt
}, S3 = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function w3(e) {
  return e in E1;
}
const E3 = (e, t) => {
  const [, r] = ba(), n = ye.useContext(w1), o = w3(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = n ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : r.zIndexPopupBase) + // Container offset
    E1[e] : i += S3[e], a = [n === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = pa(e), s = r.zIndexPopupBase + C3, c = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
};
function x1(e, t) {
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
function xa() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function a(h, g, m, f) {
    var y = g && g.prototype instanceof s ? g : s, p = Object.create(y.prototype);
    return A0(p, "_invoke", function(C, w, S) {
      var x, E, M, R = 0, _ = S || [], O = !1, F = {
        p: 0,
        n: 0,
        v: e,
        a: k,
        f: k.bind(e, 4),
        d: function($, I) {
          return x = $, E = 0, M = e, F.n = I, i;
        }
      };
      function k(A, $) {
        for (E = A, M = $, t = 0; !O && R && !I && t < _.length; t++) {
          var I, j = _[t], V = F.p, B = j[2];
          A > 3 ? (I = B === $) && (M = j[(E = j[4]) ? 5 : (E = 3, 3)], j[4] = j[5] = e) : j[0] <= V && ((I = A < 2 && V < j[1]) ? (E = 0, F.v = $, F.n = j[1]) : V < B && (I = A < 3 || j[0] > $ || $ > B) && (j[4] = A, j[5] = $, F.n = B, E = 0));
        }
        if (I || A > 1)
          return i;
        throw O = !0, $;
      }
      return function(A, $, I) {
        if (R > 1)
          throw TypeError("Generator is already running");
        for (O && $ === 1 && k($, I), E = $, M = I; (t = E < 2 ? e : M) || !O; ) {
          x || (E ? E < 3 ? (E > 1 && (F.n = -1), k(E, M)) : F.n = M : F.v = M);
          try {
            if (R = 2, x) {
              if (E || (A = "next"), t = x[A]) {
                if (!(t = t.call(x, M)))
                  throw TypeError("iterator result is not an object");
                if (!t.done)
                  return t;
                M = t.value, E < 2 && (E = 0);
              } else
                E === 1 && (t = x.return) && t.call(x), E < 2 && (M = TypeError("The iterator does not provide a '" + A + "' method"), E = 1);
              x = e;
            } else if ((t = (O = F.n < 0) ? M : C.call(w, F)) !== i)
              break;
          } catch (j) {
            x = e, E = 1, M = j;
          } finally {
            R = 1;
          }
        }
        return {
          value: t,
          done: O
        };
      };
    }(h, m, f), !0), p;
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
  }), (xa = function() {
    return {
      w: a,
      m: v
    };
  })();
}
function pn(e, t) {
  function r(o, a, i, s) {
    try {
      var c = e[o](a), l = c.value;
      return l instanceof x1 ? t.resolve(l.v).then(function(u) {
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
  this.next || (A0(pn.prototype), A0(pn.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
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
function P1(e, t, r, n, o) {
  return new pn(xa().w(e, t, r, n), o || Promise);
}
function x3(e, t, r, n, o) {
  var a = P1(e, t, r, n, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function P3(e) {
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
function Mi(e) {
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
  throw new TypeError(Pe(e) + " is not iterable");
}
function et() {
  var e = xa(), t = e.m(et), r = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
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
          return s.resultName = v, c(l.d, Mi(d), h);
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
  return (et = function() {
    return {
      wrap: function(c, l, u, d) {
        return e.w(a(c), l, u, d && d.reverse());
      },
      isGeneratorFunction: n,
      mark: e.m,
      awrap: function(c, l) {
        return new x1(c, l);
      },
      AsyncIterator: pn,
      async: function(c, l, u, d, v) {
        return (n(l) ? P1 : x3)(a(c), l, u, d, v);
      },
      keys: P3,
      values: Mi
    };
  })();
}
function Fi(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i), c = s.value;
  } catch (l) {
    return void r(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, o);
}
function Nr(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(c) {
        Fi(a, n, o, i, s, "next", c);
      }
      function s(c) {
        Fi(a, n, o, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
const R1 = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, R3 = function(e) {
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
const _3 = /* @__PURE__ */ b.createContext(null), M3 = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ b.createElement(_3.Provider, {
    value: null
  }, t);
};
var F3 = ["b"], O3 = ["v"], no = function(t) {
  return Math.round(Number(t || 0));
}, T3 = function(t) {
  if (t instanceof p0)
    return t;
  if (t && Pe(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, o = ct(r, F3);
    return D(D({}, o), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Ft = /* @__PURE__ */ function(e) {
  Ot(r, e);
  var t = Tt(r);
  function r(n) {
    return _0(this, r), t.call(this, T3(n));
  }
  return M0(r, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = no(o.s * 100), i = no(o.b * 100), s = no(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = ct(o, O3);
      return D(D({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), r;
}(p0), k3 = "rc-color-picker", Jt = function(t) {
  return t instanceof Ft ? t : new Ft(t);
}, A3 = Jt("#1677ff"), _1 = function(t) {
  var r = t.offset, n = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = n.current.getBoundingClientRect(), d = u.width, v = u.height, h = d / 2, g = v / 2, m = (r.x + h) / c, f = 1 - (r.y + g) / l, y = a.toHsb(), p = m, C = (r.x + h) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return Jt(D(D({}, y), {}, {
          h: C <= 0 ? 0 : C
        }));
      case "alpha":
        return Jt(D(D({}, y), {}, {
          a: p <= 0 ? 0 : p
        }));
    }
  return Jt({
    h: y.h,
    s: m <= 0 ? 0 : m,
    b: f >= 1 ? 1 : f,
    a: y.a
  });
}, M1 = function(t, r) {
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
}, N3 = function(t) {
  var r = t.color, n = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(n, "-color-block");
  return /* @__PURE__ */ ye.createElement("div", {
    className: De(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ ye.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: r
    }
  }));
};
function D3(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function F1(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, c = e.disabledDrag, l = Cn({
    x: 0,
    y: 0
  }), u = q(l, 2), d = u[0], v = u[1], h = Y(null), g = Y(null);
  ke(function() {
    v(i());
  }, [s]), ke(function() {
    return function() {
      document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", g.current), h.current = null, g.current = null;
    };
  }, []);
  var m = function(w) {
    var S = D3(w), x = S.pageX, E = S.pageY, M = r.current.getBoundingClientRect(), R = M.x, _ = M.y, O = M.width, F = M.height, k = t.current.getBoundingClientRect(), A = k.width, $ = k.height, I = A / 2, j = $ / 2, V = Math.max(0, Math.min(x - R, O)) - I, B = Math.max(0, Math.min(E - _, F)) - j, G = {
      x: V,
      y: n === "x" ? d.y : B
    };
    if (A === 0 && $ === 0 || A !== $)
      return !1;
    o == null || o(G);
  }, f = function(w) {
    w.preventDefault(), m(w);
  }, y = function(w) {
    w.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", g.current), h.current = null, g.current = null, a == null || a();
  }, p = function(w) {
    document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), !c && (m(w), document.addEventListener("mousemove", f), document.addEventListener("mouseup", y), document.addEventListener("touchmove", f), document.addEventListener("touchend", y), h.current = f, g.current = y);
  };
  return [d, p];
}
var O1 = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ ye.createElement("div", {
    className: De("".concat(a, "-handler"), T({}, "".concat(a, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, T1 = function(t) {
  var r = t.children, n = t.style, o = t.prefixCls;
  return /* @__PURE__ */ ye.createElement("div", {
    className: "".concat(o, "-palette"),
    style: D({
      position: "relative"
    }, n)
  }, r);
}, k1 = /* @__PURE__ */ Ar(function(e, t) {
  var r = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ ye.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), L3 = function(t) {
  var r = t.color, n = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = Y(), c = Y(), l = Y(r), u = R0(function(m) {
    var f = _1({
      offset: m,
      targetRef: c,
      containerRef: s,
      color: r
    });
    l.current = f, n(f);
  }), d = F1({
    color: r,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return M1(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a == null ? void 0 : a(l.current);
    },
    disabledDrag: i
  }), v = q(d, 2), h = v[0], g = v[1];
  return /* @__PURE__ */ ye.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ ye.createElement(T1, {
    prefixCls: o
  }, /* @__PURE__ */ ye.createElement(k1, {
    x: h.x,
    y: h.y,
    ref: c
  }, /* @__PURE__ */ ye.createElement(O1, {
    color: r.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ ye.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, $3 = function(t, r) {
  var n = Fn(t, {
    value: r
  }), o = q(n, 2), a = o[0], i = o[1], s = Q0(function() {
    return Jt(a);
  }, [a]);
  return [s, i];
}, I3 = function(t) {
  var r = t.colors, n = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, c = Q0(function() {
    return r.map(function(l, u) {
      var d = Jt(l);
      return i === "alpha" && u === r.length - 1 && (d = new Ft(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [r, i]);
  return /* @__PURE__ */ ye.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(c, ")")
    }
  }, n);
}, j3 = function(t) {
  var r = t.prefixCls, n = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, c = t.type, l = Y(), u = Y(), d = Y(s), v = function(S) {
    return c === "hue" ? S.getHue() : S.a * 100;
  }, h = R0(function(w) {
    var S = _1({
      offset: w,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    d.current = S, a(v(S));
  }), g = F1({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return M1(s, c);
    },
    onDragChange: h,
    onDragChangeComplete: function() {
      i(v(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), m = q(g, 2), f = m[0], y = m[1], p = ye.useMemo(function() {
    if (c === "hue") {
      var w = s.toHsb();
      w.s = 1, w.b = 1, w.a = 1;
      var S = new Ft(w);
      return S;
    }
    return s;
  }, [s, c]), C = ye.useMemo(function() {
    return n.map(function(w) {
      return "".concat(w.color, " ").concat(w.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ ye.createElement("div", {
    ref: l,
    className: De("".concat(r, "-slider"), "".concat(r, "-slider-").concat(c)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ ye.createElement(T1, {
    prefixCls: r
  }, /* @__PURE__ */ ye.createElement(k1, {
    x: f.x,
    y: f.y,
    ref: u
  }, /* @__PURE__ */ ye.createElement(O1, {
    size: "small",
    color: p.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ ye.createElement(I3, {
    colors: C,
    type: c,
    prefixCls: r
  })));
};
function V3(e) {
  return b.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || j3];
  }, [e]);
}
var H3 = [{
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
}], B3 = /* @__PURE__ */ Ar(function(e, t) {
  var r = e.value, n = e.defaultValue, o = e.prefixCls, a = o === void 0 ? k3 : o, i = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, v = d === void 0 ? !1 : d, h = e.disabled, g = h === void 0 ? !1 : h, m = e.components, f = V3(m), y = q(f, 1), p = y[0], C = $3(n || A3, r), w = q(C, 2), S = w[0], x = w[1], E = Q0(function() {
    return S.setA(1).toRgbString();
  }, [S]), M = function(B, G) {
    r || x(B), i == null || i(B, G);
  }, R = function(B) {
    return new Ft(S.setHue(B));
  }, _ = function(B) {
    return new Ft(S.setA(B / 100));
  }, O = function(B) {
    M(R(B), {
      type: "hue",
      value: B
    });
  }, F = function(B) {
    M(_(B), {
      type: "alpha",
      value: B
    });
  }, k = function(B) {
    s && s(R(B));
  }, A = function(B) {
    s && s(_(B));
  }, $ = De("".concat(a, "-panel"), c, T({}, "".concat(a, "-panel-disabled"), g)), I = {
    prefixCls: a,
    disabled: g,
    color: S
  }, j = /* @__PURE__ */ ye.createElement(ye.Fragment, null, /* @__PURE__ */ ye.createElement(L3, D0({
    onChange: M
  }, I, {
    onChangeComplete: s
  })), /* @__PURE__ */ ye.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ ye.createElement("div", {
    className: De("".concat(a, "-slider-group"), T({}, "".concat(a, "-slider-group-disabled-alpha"), v))
  }, /* @__PURE__ */ ye.createElement(p, D0({}, I, {
    type: "hue",
    colors: H3,
    min: 0,
    max: 359,
    value: S.getHue(),
    onChange: O,
    onChangeComplete: k
  })), !v && /* @__PURE__ */ ye.createElement(p, D0({}, I, {
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
    value: S.a * 100,
    onChange: F,
    onChangeComplete: A
  }))), /* @__PURE__ */ ye.createElement(N3, {
    color: S.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ ye.createElement("div", {
    className: $,
    style: l,
    ref: t
  }, typeof u == "function" ? u(j) : j);
});
process.env.NODE_ENV !== "production" && (B3.displayName = "ColorPicker");
const z3 = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", W3 = (e, t) => e ? z3(e, t) : "";
let Oi = /* @__PURE__ */ function() {
  function e(t) {
    _0(this, e);
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
  return M0(e, [{
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
      return W3(this.toHexString(), this.metaColor.a < 1);
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
const U3 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), G3 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), q3 = (e, t, r, n, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, U3(n)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, G3(n)), {
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
}, X3 = new tt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Y3 = new tt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Ti = new tt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ki = new tt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), K3 = new tt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Z3 = new tt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Q3 = new tt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), J3 = new tt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), e5 = new tt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), t5 = new tt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), r5 = new tt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), n5 = new tt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), o5 = {
  zoom: {
    inKeyframes: X3,
    outKeyframes: Y3
  },
  "zoom-big": {
    inKeyframes: Ti,
    outKeyframes: ki
  },
  "zoom-big-fast": {
    inKeyframes: Ti,
    outKeyframes: ki
  },
  "zoom-left": {
    inKeyframes: Q3,
    outKeyframes: J3
  },
  "zoom-right": {
    inKeyframes: e5,
    outKeyframes: t5
  },
  "zoom-up": {
    inKeyframes: K3,
    outKeyframes: Z3
  },
  "zoom-down": {
    inKeyframes: r5,
    outKeyframes: n5
  }
}, A1 = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = o5[t];
  return [q3(n, o, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, a5 = (e) => e instanceof Oi ? e : new Oi(e);
var N1 = /* @__PURE__ */ b.createContext(null), Ai = [];
function i5(e, t) {
  var r = b.useState(function() {
    if (!G0())
      return null;
    var g = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && g.setAttribute("data-debug", t), g;
  }), n = q(r, 1), o = n[0], a = b.useRef(!1), i = b.useContext(N1), s = b.useState(Ai), c = q(s, 2), l = c[0], u = c[1], d = i || (a.current ? void 0 : function(g) {
    u(function(m) {
      var f = [g].concat(ve(m));
      return f;
    });
  });
  function v() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function h() {
    var g;
    (g = o.parentElement) === null || g === void 0 || g.removeChild(o), a.current = !1;
  }
  return N0(function() {
    return e ? i ? i(v) : v() : h(), h;
  }, [e]), N0(function() {
    l.length && (l.forEach(function(g) {
      return g();
    }), u(Ai));
  }, [l]), [o, d];
}
function s5(e) {
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
      Dt(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(d, `
}`), t);
    } catch (g) {
      console.error(g), o = c, a = l;
    }
  }
  document.body.appendChild(r);
  var v = e && o && !isNaN(o) ? o : r.offsetWidth - r.clientWidth, h = e && a && !isNaN(a) ? a : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), _r(t), {
    width: v,
    height: h
  };
}
function c5(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : s5(e);
}
function l5() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var u5 = "rc-util-locker-".concat(Date.now()), Ni = 0;
function f5(e) {
  var t = !!e, r = b.useState(function() {
    return Ni += 1, "".concat(u5, "_").concat(Ni);
  }), n = q(r, 1), o = n[0];
  N0(function() {
    if (t) {
      var a = c5(document.body).width, i = l5();
      Dt(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      _r(o);
    return function() {
      _r(o);
    };
  }, [t, o]);
}
var Di = !1;
function d5(e) {
  return typeof e == "boolean" && (Di = e), Di;
}
var Li = function(t) {
  return t === !1 ? !1 : !G0() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Pa = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, c = e.children, l = b.useState(r), u = q(l, 2), d = u[0], v = u[1], h = d || r;
  process.env.NODE_ENV !== "production" && a0(G0() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), b.useEffect(function() {
    (s || r) && v(r);
  }, [r, s]);
  var g = b.useState(function() {
    return Li(o);
  }), m = q(g, 2), f = m[0], y = m[1];
  b.useEffect(function() {
    var F = Li(o);
    y(F ?? null);
  });
  var p = i5(h && !f, a), C = q(p, 2), w = C[0], S = C[1], x = f ?? w;
  f5(n && r && G0() && (x === w || x === document.body));
  var E = null;
  if (c && Sn(c) && t) {
    var M = c;
    E = M.ref;
  }
  var R = ca(E, t);
  if (!h || !G0() || f === void 0)
    return null;
  var _ = x === !1 || d5(), O = c;
  return t && (O = /* @__PURE__ */ b.cloneElement(c, {
    ref: R
  })), /* @__PURE__ */ b.createElement(N1.Provider, {
    value: S
  }, _ ? O : /* @__PURE__ */ uc(O, x));
});
process.env.NODE_ENV !== "production" && (Pa.displayName = "Portal");
function v5() {
  var e = D({}, b);
  return e.useId;
}
var $i = 0, Ii = v5();
const D1 = Ii ? (
  // Use React `useId`
  function(t) {
    var r = Ii();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = b.useState("ssr-id"), n = q(r, 2), o = n[0], a = n[1];
    return b.useEffect(function() {
      var i = $i;
      $i += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var Nt = "RC_FORM_INTERNAL_HOOKS", t0 = function() {
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
}), yn = /* @__PURE__ */ b.createContext(null);
function zo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function h5(e) {
  return e && !!e._init;
}
function Wo() {
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
var Uo = Wo();
function m5(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function g5(e, t, r) {
  if (ua())
    return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && xr(o, r.prototype), o;
}
function Go(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Go = function(n) {
    if (n === null || !m5(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return g5(n, arguments, Pr(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), xr(o, n);
  }, Go(e);
}
var p5 = /%[sdj%]/g, L1 = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (L1 = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function qo(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function U0(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(p5, function(s) {
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
function y5(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern" || e === "tel";
}
function x0(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || y5(t) && typeof e == "string" && !e);
}
function b5(e, t, r) {
  var n = [], o = 0, a = e.length;
  function i(s) {
    n.push.apply(n, ve(s || [])), o++, o === a && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function ji(e, t, r) {
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
function C5(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, ve(e[r] || []));
  }), t;
}
var Vi = /* @__PURE__ */ function(e) {
  Ot(r, e);
  var t = Tt(r);
  function r(n, o) {
    var a;
    return _0(this, r), a = t.call(this, "Async Validation Error"), T(Oe(a), "errors", void 0), T(Oe(a), "fields", void 0), a.errors = n, a.fields = o, a;
  }
  return M0(r);
}(/* @__PURE__ */ Go(Error));
function S5(e, t, r, n, o) {
  if (t.first) {
    var a = new Promise(function(v, h) {
      var g = function(y) {
        return n(y), y.length ? h(new Vi(y, qo(y))) : v(o);
      }, m = C5(e);
      ji(m, r, g);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], d = new Promise(function(v, h) {
    var g = function(f) {
      if (u.push.apply(u, f), l++, l === c)
        return n(u), u.length ? h(new Vi(u, qo(u))) : v(o);
    };
    s.length || (n(u), v(o)), s.forEach(function(m) {
      var f = e[m];
      i.indexOf(m) !== -1 ? ji(f, r, g) : b5(f, r, g);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function w5(e) {
  return !!(e && e.message !== void 0);
}
function E5(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Hi(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = E5(t, e.fullFields) : n = t[r.field || e.fullField], w5(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Bi(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        Pe(n) === "object" && Pe(e[r]) === "object" ? e[r] = D(D({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var zt = "enum", x5 = function(t, r, n, o, a) {
  t[zt] = Array.isArray(t[zt]) ? t[zt] : [], t[zt].indexOf(r) === -1 && o.push(U0(a.messages[zt], t.fullField, t[zt].join(", ")));
}, P5 = function(t, r, n, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(U0(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || o.push(U0(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, R5 = function(t, r, n, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = r, d = null, v = typeof r == "number", h = typeof r == "string", g = Array.isArray(r);
  if (v ? d = "number" : h ? d = "string" : g && (d = "array"), !d)
    return !1;
  g && (u = r.length), h && (u = r.replace(l, "_").length), i ? u !== t.len && o.push(U0(a.messages[d].len, t.fullField, t.len)) : s && !c && u < t.min ? o.push(U0(a.messages[d].min, t.fullField, t.min)) : c && !s && u > t.max ? o.push(U0(a.messages[d].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && o.push(U0(a.messages[d].range, t.fullField, t.min, t.max));
}, $1 = function(t, r, n, o, a, i) {
  t.required && (!n.hasOwnProperty(t.field) || x0(r, i || t.type)) && o.push(U0(a.messages.required, t.fullField));
}, rn;
const _5 = function() {
  if (rn)
    return rn;
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
  u.v4 = function(S) {
    return S && S.exact ? c : new RegExp("".concat(t(S)).concat(r).concat(t(S)), "g");
  }, u.v6 = function(S) {
    return S && S.exact ? l : new RegExp("".concat(t(S)).concat(i).concat(t(S)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", h = u.v4().source, g = u.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", f = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", C = '(?:[/?#][^\\s"]*)?', w = "(?:".concat(d, "|www\\.)").concat(v, "(?:localhost|").concat(h, "|").concat(g, "|").concat(m).concat(f).concat(y, ")").concat(p).concat(C);
  return rn = new RegExp("(?:^".concat(w, "$)"), "i"), rn;
};
var oo = {
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
}, br = {
  integer: function(t) {
    return br.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return br.number(t) && !br.integer(t);
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
    return Pe(t) === "object" && !br.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(oo.email);
  },
  tel: function(t) {
    return typeof t == "string" && t.length <= 32 && !!t.match(oo.tel);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(_5());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(oo.hex);
  }
}, M5 = function(t, r, n, o, a) {
  if (t.required && r === void 0) {
    $1(t, r, n, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? br[s](r) || o.push(U0(a.messages.types[s], t.fullField, t.type)) : s && Pe(r) !== t.type && o.push(U0(a.messages.types[s], t.fullField, t.type));
}, F5 = function(t, r, n, o, a) {
  (/^\s+$/.test(r) || r === "") && o.push(U0(a.messages.whitespace, t.fullField));
};
const Le = {
  required: $1,
  whitespace: F5,
  type: M5,
  range: R5,
  enum: x5,
  pattern: P5
};
var O5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a);
  }
  n(i);
}, T5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Le.required(t, r, o, i, a, "array"), r != null && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, k5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le.type(t, r, o, i, a);
  }
  n(i);
}, A5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r, "date") && !t.required)
      return n();
    if (Le.required(t, r, o, i, a), !x0(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), Le.type(t, c, o, i, a), c && Le.range(t, c.getTime(), o, i, a);
    }
  }
  n(i);
}, N5 = "enum", D5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le[N5](t, r, o, i, a);
  }
  n(i);
}, L5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, $5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, I5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le.type(t, r, o, i, a);
  }
  n(i);
}, j5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a));
  }
  n(i);
}, V5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), r !== void 0 && Le.type(t, r, o, i, a);
  }
  n(i);
}, H5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r, "string") && !t.required)
      return n();
    Le.required(t, r, o, i, a), x0(r, "string") || Le.pattern(t, r, o, i, a);
  }
  n(i);
}, B5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r) && !t.required)
      return n();
    Le.required(t, r, o, i, a), x0(r) || Le.type(t, r, o, i, a);
  }
  n(i);
}, z5 = function(t, r, n, o, a) {
  var i = [], s = Array.isArray(r) ? "array" : Pe(r);
  Le.required(t, r, o, i, a, s), n(i);
}, W5 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (x0(r, "string") && !t.required)
      return n();
    Le.required(t, r, o, i, a, "string"), x0(r, "string") || (Le.type(t, r, o, i, a), Le.range(t, r, o, i, a), Le.pattern(t, r, o, i, a), t.whitespace === !0 && Le.whitespace(t, r, o, i, a));
  }
  n(i);
}, nn = function(t, r, n, o, a) {
  var i = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (x0(r, i) && !t.required)
      return n();
    Le.required(t, r, o, s, a, i), x0(r, i) || Le.type(t, r, o, s, a);
  }
  n(s);
};
const Sr = {
  string: W5,
  method: I5,
  number: j5,
  boolean: k5,
  regexp: B5,
  integer: $5,
  float: L5,
  array: T5,
  object: V5,
  enum: D5,
  pattern: H5,
  date: A5,
  url: nn,
  hex: nn,
  email: nn,
  tel: nn,
  required: z5,
  any: O5
};
var Dr = /* @__PURE__ */ function() {
  function e(t) {
    _0(this, e), T(this, "rules", null), T(this, "_messages", Uo), this.define(t);
  }
  return M0(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (Pe(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(o) {
        var a = r[o];
        n.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = Bi(Wo(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = r, s = o, c = a;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function l(g) {
        var m = [], f = {};
        function y(C) {
          if (Array.isArray(C)) {
            var w;
            m = (w = m).concat.apply(w, ve(C));
          } else
            m.push(C);
        }
        for (var p = 0; p < g.length; p++)
          y(g[p]);
        m.length ? (f = qo(m), c(m, f)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === Uo && (u = Wo()), Bi(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(g) {
        var m = n.rules[g], f = i[g];
        m.forEach(function(y) {
          var p = y;
          typeof p.transform == "function" && (i === r && (i = D({}, i)), f = i[g] = p.transform(f), f != null && (p.type = p.type || (Array.isArray(f) ? "array" : Pe(f)))), typeof p == "function" ? p = {
            validator: p
          } : p = D({}, p), p.validator = n.getValidationMethod(p), p.validator && (p.field = g, p.fullField = p.fullField || g, p.type = n.getType(p), d[g] = d[g] || [], d[g].push({
            rule: p,
            value: f,
            source: i,
            field: g
          }));
        });
      });
      var h = {};
      return S5(d, s, function(g, m) {
        var f = g.rule, y = (f.type === "object" || f.type === "array") && (Pe(f.fields) === "object" || Pe(f.defaultField) === "object");
        y = y && (f.required || !f.required && g.value), f.field = g.field;
        function p(E, M) {
          return D(D({}, M), {}, {
            fullField: "".concat(f.fullField, ".").concat(E),
            fullFields: f.fullFields ? [].concat(ve(f.fullFields), [E]) : [E]
          });
        }
        function C() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], M = Array.isArray(E) ? E : [E];
          !s.suppressWarning && M.length && e.warning("async-validator:", M), M.length && f.message !== void 0 && f.message !== null && (M = [].concat(f.message));
          var R = M.map(Hi(f, i));
          if (s.first && R.length)
            return h[f.field] = 1, m(R);
          if (!y)
            m(R);
          else {
            if (f.required && !g.value)
              return f.message !== void 0 ? R = [].concat(f.message).map(Hi(f, i)) : s.error && (R = [s.error(f, U0(s.messages.required, f.field))]), m(R);
            var _ = {};
            f.defaultField && Object.keys(g.value).map(function(k) {
              _[k] = f.defaultField;
            }), _ = D(D({}, _), g.rule.fields);
            var O = {};
            Object.keys(_).forEach(function(k) {
              var A = _[k], $ = Array.isArray(A) ? A : [A];
              O[k] = $.map(p.bind(null, k));
            });
            var F = new e(O);
            F.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), F.validate(g.value, g.rule.options || s, function(k) {
              var A = [];
              R && R.length && A.push.apply(A, ve(R)), k && k.length && A.push.apply(A, ve(k)), m(A.length ? A : null);
            });
          }
        }
        var w;
        if (f.asyncValidator)
          w = f.asyncValidator(f, g.value, C, g.source, s);
        else if (f.validator) {
          try {
            w = f.validator(f, g.value, C, g.source, s);
          } catch (E) {
            var S, x;
            (S = (x = console).error) === null || S === void 0 || S.call(x, E), s.suppressValidatorError || setTimeout(function() {
              throw E;
            }, 0), C(E.message);
          }
          w === !0 ? C() : w === !1 ? C(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || "".concat(f.fullField || f.field, " fails")) : w instanceof Array ? C(w) : w instanceof Error && C(w.message);
        }
        w && w.then && w.then(function() {
          return C();
        }, function(E) {
          return C(E);
        });
      }, function(g) {
        l(g);
      }, i);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Sr.hasOwnProperty(r.type))
        throw new Error(U0("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), o = n.indexOf("message");
      return o !== -1 && n.splice(o, 1), n.length === 1 && n[0] === "required" ? Sr.required : Sr[this.getType(r)] || void 0;
    }
  }]), e;
}();
T(Dr, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Sr[t] = r;
});
T(Dr, "warning", L1);
T(Dr, "messages", Uo);
T(Dr, "validators", Sr);
var W0 = "'${name}' is not a valid ${type}", I1 = {
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
}, zi = Dr;
function U5(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(r) {
    if (r.startsWith("\\"))
      return r.slice(1);
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Wi = "CODE_LOGIC_ERROR";
function Xo(e, t, r, n, o) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = Nr(/* @__PURE__ */ et().mark(function e(t, r, n, o, a) {
    var i, s, c, l, u, d, v, h, g;
    return et().wrap(function(f) {
      for (; ; )
        switch (f.prev = f.next) {
          case 0:
            return i = D({}, n), delete i.ruleIndex, zi.warning = function() {
            }, i.validator && (s = i.validator, i.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (y) {
                return console.error(y), Promise.reject(Wi);
              }
            }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new zi(T({}, t, [i])), u = yr(I1, o.validateMessages), l.messages(u), d = [], f.prev = 10, f.next = 13, Promise.resolve(l.validate(T({}, t, r), D({}, o)));
          case 13:
            f.next = 18;
            break;
          case 15:
            f.prev = 15, f.t0 = f.catch(10), f.t0.errors && (d = f.t0.errors.map(function(y, p) {
              var C = y.message, w = C === Wi ? u.default : C;
              return /* @__PURE__ */ b.isValidElement(w) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ b.cloneElement(w, {
                  key: "error_".concat(p)
                })
              ) : w;
            }));
          case 18:
            if (!(!d.length && c && Array.isArray(r) && r.length > 0)) {
              f.next = 23;
              break;
            }
            return f.next = 21, Promise.all(r.map(function(y, p) {
              return Xo("".concat(t, ".").concat(p), y, c, o, a);
            }));
          case 21:
            return v = f.sent, f.abrupt("return", v.reduce(function(y, p) {
              return [].concat(ve(y), ve(p));
            }, []));
          case 23:
            return h = D(D({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, a), g = d.map(function(y) {
              return typeof y == "string" ? U5(y, h) : y;
            }), f.abrupt("return", g);
          case 26:
          case "end":
            return f.stop();
        }
    }, e, null, [[10, 15]]);
  })), Yo.apply(this, arguments);
}
function G5(e, t, r, n, o, a) {
  var i = e.join("."), s = r.map(function(u, d) {
    var v = u.validator, h = D(D({}, u), {}, {
      ruleIndex: d
    });
    return v && (h.validator = function(g, m, f) {
      var y = !1, p = function() {
        for (var S = arguments.length, x = new Array(S), E = 0; E < S; E++)
          x[E] = arguments[E];
        Promise.resolve().then(function() {
          a0(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || f.apply(void 0, x);
        });
      }, C = v(g, m, p);
      y = C && typeof C.then == "function" && typeof C.catch == "function", a0(y, "`callback` is deprecated. Please return a promise instead."), y && C.then(function() {
        f();
      }).catch(function(w) {
        f(w || " ");
      });
    }), h;
  }).sort(function(u, d) {
    var v = u.warningOnly, h = u.ruleIndex, g = d.warningOnly, m = d.ruleIndex;
    return !!v == !!g ? h - m : v ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var u = Nr(/* @__PURE__ */ et().mark(function d(v, h) {
        var g, m, f;
        return et().wrap(function(p) {
          for (; ; )
            switch (p.prev = p.next) {
              case 0:
                g = 0;
              case 1:
                if (!(g < s.length)) {
                  p.next = 12;
                  break;
                }
                return m = s[g], p.next = 5, Xo(i, t, m, n, a);
              case 5:
                if (f = p.sent, !f.length) {
                  p.next = 9;
                  break;
                }
                return h([{
                  errors: f,
                  rule: m
                }]), p.abrupt("return");
              case 9:
                g += 1, p.next = 1;
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
      return Xo(i, t, u, n, a).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    c = (o ? X5(l) : q5(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function q5(e) {
  return Ko.apply(this, arguments);
}
function Ko() {
  return Ko = Nr(/* @__PURE__ */ et().mark(function e(t) {
    return et().wrap(function(n) {
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
  })), Ko.apply(this, arguments);
}
function X5(e) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = Nr(/* @__PURE__ */ et().mark(function e(t) {
    var r;
    return et().wrap(function(o) {
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
  })), Zo.apply(this, arguments);
}
function y0(e) {
  return zo(e);
}
function Ui(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = dt(e, n);
    r = ot(r, n, o);
  }), r;
}
function er(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return j1(t, n, r);
  });
}
function j1(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, o) {
    return e[o] === n;
  });
}
function Y5(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Pe(e) !== "object" || Pe(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return ve(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function K5(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Pe(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Gi(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], a = t - r;
  return a > 0 ? [].concat(ve(e.slice(0, r)), [o], ve(e.slice(r, t)), ve(e.slice(t + 1, n))) : a < 0 ? [].concat(ve(e.slice(0, t)), ve(e.slice(t + 1, r + 1)), [o], ve(e.slice(r + 1, n))) : e;
}
var Z5 = ["name"], K0 = [];
function ao(e, t, r, n, o, a) {
  return typeof e == "function" ? e(t, r, "source" in a ? {
    source: a.source
  } : {}) : n !== o;
}
var Ra = /* @__PURE__ */ function(e) {
  Ot(r, e);
  var t = Tt(r);
  function r(n) {
    var o;
    if (_0(this, r), o = t.call(this, n), T(Oe(o), "state", {
      resetCount: 0
    }), T(Oe(o), "cancelRegisterFunc", null), T(Oe(o), "mounted", !1), T(Oe(o), "touched", !1), T(Oe(o), "dirty", !1), T(Oe(o), "validatePromise", void 0), T(Oe(o), "prevValidating", void 0), T(Oe(o), "errors", K0), T(Oe(o), "warnings", K0), T(Oe(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, d = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, y0(d)), o.cancelRegisterFunc = null;
    }), T(Oe(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, d = u.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(ve(v), ve(l)) : [];
    }), T(Oe(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, d = c.fieldContext;
      return u.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), T(Oe(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), T(Oe(o), "metaCache", null), T(Oe(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = D(D({}, o.getMeta()), {}, {
          destroy: c
        });
        yo(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), T(Oe(o), "onStoreChange", function(c, l, u) {
      var d = o.props, v = d.shouldUpdate, h = d.dependencies, g = h === void 0 ? [] : h, m = d.onReset, f = u.store, y = o.getNamePath(), p = o.getValue(c), C = o.getValue(f), w = l && er(l, y);
      switch (u.type === "valueUpdate" && u.source === "external" && !yo(p, C) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = K0, o.warnings = K0, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || w) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = K0, o.warnings = K0, o.triggerMetaEvent(), m == null || m(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (v && ao(v, c, f, p, C, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var S = u.data;
          if (w) {
            "touched" in S && (o.touched = S.touched), "validating" in S && !("originRCField" in S) && (o.validatePromise = S.validating ? Promise.resolve([]) : null), "errors" in S && (o.errors = S.errors || K0), "warnings" in S && (o.warnings = S.warnings || K0), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in S && er(l, y, !0)) {
            o.reRender();
            return;
          }
          if (v && !y.length && ao(v, c, f, p, C, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var x = g.map(y0);
          if (x.some(function(E) {
            return er(u.relatedFields, E);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!g.length || y.length || v) && ao(v, c, f, p, C, u)) {
            o.reRender();
            return;
          }
          break;
      }
      v === !0 && o.reRender();
    }), T(Oe(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), d = c || {}, v = d.triggerName, h = d.validateOnly, g = h === void 0 ? !1 : h, m = Promise.resolve().then(/* @__PURE__ */ Nr(/* @__PURE__ */ et().mark(function f() {
        var y, p, C, w, S, x, E;
        return et().wrap(function(R) {
          for (; ; )
            switch (R.prev = R.next) {
              case 0:
                if (o.mounted) {
                  R.next = 2;
                  break;
                }
                return R.abrupt("return", []);
              case 2:
                if (y = o.props, p = y.validateFirst, C = p === void 0 ? !1 : p, w = y.messageVariables, S = y.validateDebounce, x = o.getRules(), v && (x = x.filter(function(_) {
                  return _;
                }).filter(function(_) {
                  var O = _.validateTrigger;
                  if (!O)
                    return !0;
                  var F = zo(O);
                  return F.includes(v);
                })), !(S && v)) {
                  R.next = 10;
                  break;
                }
                return R.next = 8, new Promise(function(_) {
                  setTimeout(_, S);
                });
              case 8:
                if (o.validatePromise === m) {
                  R.next = 10;
                  break;
                }
                return R.abrupt("return", []);
              case 10:
                return E = G5(l, u, x, c, C, w), E.catch(function(_) {
                  return _;
                }).then(function() {
                  var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K0;
                  if (o.validatePromise === m) {
                    var O;
                    o.validatePromise = null;
                    var F = [], k = [];
                    (O = _.forEach) === null || O === void 0 || O.call(_, function(A) {
                      var $ = A.rule.warningOnly, I = A.errors, j = I === void 0 ? K0 : I;
                      $ ? k.push.apply(k, ve(j)) : F.push.apply(F, ve(j));
                    }), o.errors = F, o.warnings = k, o.triggerMetaEvent(), o.reRender();
                  }
                }), R.abrupt("return", E);
              case 13:
              case "end":
                return R.stop();
            }
        }, f);
      })));
      return g || (o.validatePromise = m, o.dirty = !0, o.errors = K0, o.warnings = K0, o.triggerMetaEvent(), o.reRender()), m;
    }), T(Oe(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), T(Oe(o), "isFieldTouched", function() {
      return o.touched;
    }), T(Oe(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Nt), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), T(Oe(o), "getErrors", function() {
      return o.errors;
    }), T(Oe(o), "getWarnings", function() {
      return o.warnings;
    }), T(Oe(o), "isListField", function() {
      return o.props.isListField;
    }), T(Oe(o), "isList", function() {
      return o.props.isList;
    }), T(Oe(o), "isPreserve", function() {
      return o.props.preserve;
    }), T(Oe(o), "getMeta", function() {
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
    }), T(Oe(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return D(D({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = dn(c);
      return u.length !== 1 || !/* @__PURE__ */ b.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), T(Oe(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return dt(c || l(!0), u);
    }), T(Oe(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, d = l.trigger, v = l.validateTrigger, h = l.getValueFromEvent, g = l.normalize, m = l.valuePropName, f = l.getValueProps, y = l.fieldContext, p = v !== void 0 ? v : y.validateTrigger, C = o.getNamePath(), w = y.getInternalHooks, S = y.getFieldsValue, x = w(Nt), E = x.dispatch, M = o.getValue(), R = f || function(A) {
        return T({}, m, A);
      }, _ = c[d], O = u !== void 0 ? R(M) : {};
      process.env.NODE_ENV !== "production" && O && Object.keys(O).forEach(function(A) {
        a0(typeof O[A] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(A, ")"));
      });
      var F = D(D({}, c), O);
      F[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var A, $ = arguments.length, I = new Array($), j = 0; j < $; j++)
          I[j] = arguments[j];
        h ? A = h.apply(void 0, I) : A = K5.apply(void 0, [m].concat(I)), g && (A = g(A, M, S(!0))), A !== M && E({
          type: "updateValue",
          namePath: C,
          value: A
        }), _ && _.apply(void 0, I);
      };
      var k = zo(p || []);
      return k.forEach(function(A) {
        var $ = F[A];
        F[A] = function() {
          $ && $.apply(void 0, arguments);
          var I = o.props.rules;
          I && I.length && E({
            type: "validateField",
            namePath: C,
            triggerName: A
          });
        };
      }), F;
    }), n.fieldContext) {
      var a = n.fieldContext.getInternalHooks, i = a(Nt), s = i.initEntityValue;
      s(Oe(o));
    }
    return o;
  }
  return M0(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, c = s(Nt), l = c.registerField;
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
T(Ra, "contextType", ar);
T(Ra, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function V1(e) {
  var t, r = e.name, n = ct(e, Z5), o = b.useContext(ar), a = b.useContext(yn), i = r !== void 0 ? y0(r) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!a, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && i.length <= 1 && a0(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ b.createElement(Ra, D0({
    key: c,
    name: i,
    isListField: s
  }, n, {
    fieldContext: o
  }));
}
function Q5(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = b.useContext(ar), c = b.useContext(yn), l = b.useRef({
    keys: [],
    id: 0
  }), u = l.current, d = b.useMemo(function() {
    var m = y0(s.prefixName) || [];
    return [].concat(ve(m), ve(y0(t)));
  }, [s.prefixName, t]), v = b.useMemo(function() {
    return D(D({}, s), {}, {
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
  var g = function(f, y, p) {
    var C = p.source;
    return C === "internal" ? !1 : f !== y;
  };
  return /* @__PURE__ */ b.createElement(yn.Provider, {
    value: h
  }, /* @__PURE__ */ b.createElement(ar.Provider, {
    value: v
  }, /* @__PURE__ */ b.createElement(V1, {
    name: [],
    shouldUpdate: g,
    rules: o,
    validateTrigger: a,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!c
  }, function(m, f) {
    var y = m.value, p = y === void 0 ? [] : y, C = m.onChange, w = s.getFieldValue, S = function() {
      var R = w(d || []);
      return R || [];
    }, x = {
      add: function(R, _) {
        var O = S();
        _ >= 0 && _ <= O.length ? (u.keys = [].concat(ve(u.keys.slice(0, _)), [u.id], ve(u.keys.slice(_))), C([].concat(ve(O.slice(0, _)), [R], ve(O.slice(_))))) : (process.env.NODE_ENV !== "production" && (_ < 0 || _ > O.length) && a0(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(ve(u.keys), [u.id]), C([].concat(ve(O), [R]))), u.id += 1;
      },
      remove: function(R) {
        var _ = S(), O = new Set(Array.isArray(R) ? R : [R]);
        O.size <= 0 || (u.keys = u.keys.filter(function(F, k) {
          return !O.has(k);
        }), C(_.filter(function(F, k) {
          return !O.has(k);
        })));
      },
      move: function(R, _) {
        if (R !== _) {
          var O = S();
          R < 0 || R >= O.length || _ < 0 || _ >= O.length || (u.keys = Gi(u.keys, R, _), C(Gi(O, R, _)));
        }
      }
    }, E = p || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && a0(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(E.map(function(M, R) {
      var _ = u.keys[R];
      return _ === void 0 && (u.keys[R] = u.id, _ = u.keys[R], u.id += 1), {
        name: R,
        key: _,
        isListField: !0
      };
    }), x, f);
  })));
}
function J5(e) {
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
var H1 = "__@field_split__";
function io(e) {
  return e.map(function(t) {
    return "".concat(Pe(t), ":").concat(t);
  }).join(H1);
}
var Wt = /* @__PURE__ */ function() {
  function e() {
    _0(this, e), T(this, "kvs", /* @__PURE__ */ new Map());
  }
  return M0(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(io(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(io(r));
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
      this.kvs.delete(io(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return ve(this.kvs.entries()).map(function(n) {
        var o = q(n, 2), a = o[0], i = o[1], s = a.split(H1);
        return r({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = q(l, 3), d = u[1], v = u[2];
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
}(), e6 = ["name"], t6 = /* @__PURE__ */ M0(function e(t) {
  var r = this;
  _0(this, e), T(this, "formHooked", !1), T(this, "forceRootUpdate", void 0), T(this, "subscribable", !0), T(this, "store", {}), T(this, "fieldEntities", []), T(this, "initialValues", {}), T(this, "callbacks", {}), T(this, "validateMessages", null), T(this, "preserve", null), T(this, "lastValidatePromise", null), T(this, "getForm", function() {
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
  }), T(this, "getInternalHooks", function(n) {
    return n === Nt ? (r.formHooked = !0, {
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
  }), T(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), T(this, "prevWithoutPreserves", null), T(this, "setInitialValues", function(n, o) {
    if (r.initialValues = n || {}, o) {
      var a, i = yr(n, r.store);
      (a = r.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        i = ot(i, c, dt(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), T(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var o = new Wt();
      r.getFieldEntities(!0).forEach(function(a) {
        r.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), r.prevWithoutPreserves = o;
    }
  }), T(this, "getInitialValue", function(n) {
    var o = dt(r.initialValues, n);
    return n.length ? yr(o) : o;
  }), T(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), T(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), T(this, "setPreserve", function(n) {
    r.preserve = n;
  }), T(this, "watchList", []), T(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), T(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var o = r.getFieldsValue(), a = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(o, a, n);
      });
    }
  }), T(this, "timeoutId", null), T(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || a0(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), T(this, "updateStore", function(n) {
    r.store = n;
  }), T(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }), T(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Wt();
    return r.getFieldEntities(n).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), T(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(a) {
      var i = y0(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: y0(a)
      };
    });
  }), T(this, "getFieldsValue", function(n, o) {
    r.warningUnhooked();
    var a, i, s;
    if (n === !0 || Array.isArray(n) ? (a = n, i = o) : n && Pe(n) === "object" && (s = n.strict, i = n.filter), a === !0 && !i)
      return r.store;
    var c = r.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), l = [];
    return c.forEach(function(u) {
      var d, v, h = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var g, m;
        if ((g = (m = u).isList) !== null && g !== void 0 && g.call(m))
          return;
      } else if (!a && (d = (v = u).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!i)
        l.push(h);
      else {
        var f = "getMeta" in u ? u.getMeta() : null;
        i(f) && l.push(h);
      }
    }), Ui(r.store, l.map(y0));
  }), T(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var o = y0(n);
    return dt(r.store, o);
  }), T(this, "getFieldsError", function(n) {
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
  }), T(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var o = y0(n), a = r.getFieldsError([o])[0];
    return a.errors;
  }), T(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var o = y0(n), a = r.getFieldsError([o])[0];
    return a.warnings;
  }), T(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(i) ? (c = i.map(y0), l = !1) : (c = null, l = i) : (c = i.map(y0), l = s);
    var u = r.getFieldEntities(!0), d = function(f) {
      return f.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(m) {
        return d(m) || m.isList();
      }) : u.some(d);
    var v = new Wt();
    c.forEach(function(m) {
      v.set(m, []);
    }), u.forEach(function(m) {
      var f = m.getNamePath();
      c.forEach(function(y) {
        y.every(function(p, C) {
          return f[C] === p;
        }) && v.update(y, function(p) {
          return [].concat(ve(p), [m]);
        });
      });
    });
    var h = function(f) {
      return f.some(d);
    }, g = v.map(function(m) {
      var f = m.value;
      return f;
    });
    return l ? g.every(h) : g.some(h);
  }), T(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), T(this, "isFieldsValidating", function(n) {
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
  }), T(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), T(this, "resetWithFieldInitialValue", function() {
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
            var g = o.get(v);
            if (g && g.size > 1)
              a0(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (g) {
              var m = r.getFieldValue(v), f = u.isListField();
              !f && (!n.skipExist || m === void 0) && r.updateStore(ot(r.store, v, ve(g)[0].value));
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
  }), T(this, "resetFields", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(yr(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var a = n.map(y0);
    a.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(ot(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: a
    }), r.notifyObservers(o, a, {
      type: "reset"
    }), r.notifyWatch(a);
  }), T(this, "setFields", function(n) {
    r.warningUnhooked();
    var o = r.store, a = [];
    n.forEach(function(i) {
      var s = i.name, c = ct(i, e6), l = y0(s);
      a.push(l), "value" in c && r.updateStore(ot(r.store, l, c.value)), r.notifyObservers(o, [l], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(a);
  }), T(this, "getFields", function() {
    var n = r.getFieldEntities(!0), o = n.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), c = D(D({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }), T(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var a = n.getNamePath(), i = dt(r.store, a);
      i === void 0 && r.updateStore(ot(r.store, a, o));
    }
  }), T(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : r.preserve;
    return o ?? !0;
  }), T(this, "registerField", function(n) {
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
            !j1(d.getNamePath(), o)
          );
        })) {
          var u = r.store;
          r.updateStore(ot(u, o, l, !0)), r.notifyObservers(u, [o], {
            type: "remove"
          }), r.triggerDependenciesUpdate(u, o);
        }
      }
      r.notifyWatch([o]);
    };
  }), T(this, "dispatch", function(n) {
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
  }), T(this, "notifyObservers", function(n, o, a) {
    if (r.subscribable) {
      var i = D(D({}, a), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, o, i);
      });
    } else
      r.forceRootUpdate();
  }), T(this, "triggerDependenciesUpdate", function(n, o) {
    var a = r.getDependencyChildrenFields(o);
    return a.length && r.validateFields(a), r.notifyObservers(n, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(ve(a))
    }), a;
  }), T(this, "updateValue", function(n, o) {
    var a = y0(n), i = r.store;
    r.updateStore(ot(r.store, a, o)), r.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([a]);
    var s = r.triggerDependenciesUpdate(i, a), c = r.callbacks.onValuesChange;
    if (c) {
      var l = Ui(r.store, [a]);
      c(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([a].concat(ve(s)));
  }), T(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var a = yr(r.store, n);
      r.updateStore(a);
    }
    r.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), T(this, "setFieldValue", function(n, o) {
    r.setFields([{
      name: n,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), T(this, "getDependencyChildrenFields", function(n) {
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
  }), T(this, "triggerOnFieldsChange", function(n, o) {
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
  }), T(this, "validateFields", function(n, o) {
    r.warningUnhooked();
    var a, i;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (a = n, i = o) : i = n;
    var s = !!a, c = s ? a.map(y0) : [], l = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), v = i || {}, h = v.recursive, g = v.dirty;
    r.getFieldEntities(!0).forEach(function(p) {
      if (s || c.push(p.getNamePath()), !(!p.props.rules || !p.props.rules.length) && !(g && !p.isFieldDirty())) {
        var C = p.getNamePath();
        if (d.add(C.join(u)), !s || er(c, C, h)) {
          var w = p.validateRules(D({
            validateMessages: D(D({}, I1), r.validateMessages)
          }, i));
          l.push(w.then(function() {
            return {
              name: C,
              errors: [],
              warnings: []
            };
          }).catch(function(S) {
            var x, E = [], M = [];
            return (x = S.forEach) === null || x === void 0 || x.call(S, function(R) {
              var _ = R.rule.warningOnly, O = R.errors;
              _ ? M.push.apply(M, ve(O)) : E.push.apply(E, ve(O));
            }), E.length ? Promise.reject({
              name: C,
              errors: E,
              warnings: M
            }) : {
              name: C,
              errors: E,
              warnings: M
            };
          }));
        }
      }
    });
    var m = J5(l);
    r.lastValidatePromise = m, m.catch(function(p) {
      return p;
    }).then(function(p) {
      var C = p.map(function(w) {
        var S = w.name;
        return S;
      });
      r.notifyObservers(r.store, C, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(C, p);
    });
    var f = m.then(function() {
      return r.lastValidatePromise === m ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(p) {
      var C = p.filter(function(w) {
        return w && w.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(c),
        errorFields: C,
        outOfDate: r.lastValidatePromise !== m
      });
    });
    f.catch(function(p) {
      return p;
    });
    var y = c.filter(function(p) {
      return d.has(p.join(u));
    });
    return r.triggerOnFieldsChange(y), f;
  }), T(this, "submit", function() {
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
function B1(e) {
  var t = b.useRef(), r = b.useState({}), n = q(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new t6(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var Qo = /* @__PURE__ */ b.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), r6 = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, a = t.children, i = b.useContext(Qo), s = b.useRef({});
  return /* @__PURE__ */ b.createElement(Qo.Provider, {
    value: D(D({}, i), {}, {
      validateMessages: D(D({}, i.validateMessages), r),
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
        l && (s.current = D(D({}, s.current), {}, T({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = D({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, a);
}, n6 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], o6 = function(t, r) {
  var n = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, d = t.validateMessages, v = t.validateTrigger, h = v === void 0 ? "onChange" : v, g = t.onValuesChange, m = t.onFieldsChange, f = t.onFinish, y = t.onFinishFailed, p = t.clearOnDestroy, C = ct(t, n6), w = b.useRef(null), S = b.useContext(Qo), x = B1(i), E = q(x, 1), M = E[0], R = M.getInternalHooks(Nt), _ = R.useSubscribe, O = R.setInitialValues, F = R.setCallbacks, k = R.setValidateMessages, A = R.setPreserve, $ = R.destroyForm;
  b.useImperativeHandle(r, function() {
    return D(D({}, M), {}, {
      nativeElement: w.current
    });
  }), b.useEffect(function() {
    return S.registerForm(n, M), function() {
      S.unregisterForm(n);
    };
  }, [S, M, n]), k(D(D({}, S.validateMessages), d)), F({
    onValuesChange: g,
    onFieldsChange: function(K) {
      if (S.triggerFormChange(n, K), m) {
        for (var X = arguments.length, z = new Array(X > 1 ? X - 1 : 0), te = 1; te < X; te++)
          z[te - 1] = arguments[te];
        m.apply(void 0, [K].concat(z));
      }
    },
    onFinish: function(K) {
      S.triggerFormFinish(n, K), f && f(K);
    },
    onFinishFailed: y
  }), A(s);
  var I = b.useRef(null);
  O(o, !I.current), I.current || (I.current = !0), b.useEffect(
    function() {
      return function() {
        return $(p);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var j, V = typeof c == "function";
  if (V) {
    var B = M.getFieldsValue(!0);
    j = c(B, M);
  } else
    j = c;
  _(!V);
  var G = b.useRef();
  b.useEffect(function() {
    Y5(G.current || [], a || []) || M.setFields(a || []), G.current = a;
  }, [a, M]);
  var U = b.useMemo(function() {
    return D(D({}, M), {}, {
      validateTrigger: h
    });
  }, [M, h]), H = /* @__PURE__ */ b.createElement(yn.Provider, {
    value: null
  }, /* @__PURE__ */ b.createElement(ar.Provider, {
    value: U
  }, j));
  return u === !1 ? H : /* @__PURE__ */ b.createElement(u, D0({}, C, {
    ref: w,
    onSubmit: function(K) {
      K.preventDefault(), K.stopPropagation(), M.submit();
    },
    onReset: function(K) {
      var X;
      K.preventDefault(), M.resetFields(), (X = C.onReset) === null || X === void 0 || X.call(C, K);
    }
  }), H);
};
function qi(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var a6 = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Y(t);
  a0(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function i6() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = t[1], a = o === void 0 ? {} : o, i = h5(a) ? {
    form: a
  } : a, s = i.form, c = Cn(), l = q(c, 2), u = l[0], d = l[1], v = Q0(function() {
    return qi(u);
  }, [u]), h = Y(v);
  h.current = v;
  var g = wr(ar), m = s || g, f = m && m._init;
  process.env.NODE_ENV !== "production" && a0(t.length === 2 ? s ? f : !0 : f, "useWatch requires a form instance since it can not auto detect from context.");
  var y = y0(n), p = Y(y);
  return p.current = y, a6(y), ke(
    function() {
      if (f) {
        var C = m.getFieldsValue, w = m.getInternalHooks, S = w(Nt), x = S.registerWatch, E = function(O, F) {
          var k = i.preserve ? F : O;
          return typeof n == "function" ? n(k) : dt(k, p.current);
        }, M = x(function(_, O) {
          var F = E(_, O), k = qi(F);
          h.current !== k && (h.current = k, d(F));
        }), R = E(C(), C(!0));
        return u !== R && d(R), M;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f]
  ), u;
}
var s6 = /* @__PURE__ */ b.forwardRef(o6), Lr = s6;
Lr.FormProvider = r6;
Lr.Field = V1;
Lr.List = Q5;
Lr.useForm = B1;
Lr.useWatch = i6;
const Jo = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Jo.displayName = "FormItemInputContext");
const c6 = ({
  children: e,
  status: t,
  override: r
}) => {
  const n = b.useContext(Jo), o = b.useMemo(() => {
    const a = Object.assign({}, n);
    return r && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, r, n]);
  return /* @__PURE__ */ b.createElement(Jo.Provider, {
    value: o
  }, e);
}, l6 = (e) => {
  const {
    space: t,
    form: r,
    children: n
  } = e;
  if (n == null)
    return null;
  let o = n;
  return r && (o = /* @__PURE__ */ ye.createElement(c6, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ ye.createElement(M3, null, o)), o;
}, u6 = l6, f6 = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
function d6(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, a = n || {}, i = a.className, s = a.content, c = o.x, l = c === void 0 ? 0 : c, u = o.y, d = u === void 0 ? 0 : u, v = b.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var g = r.points[0], m = r.points[1], f = g[0], y = g[1], p = m[0], C = m[1];
    f === p || !["t", "b"].includes(f) ? h.top = d : f === "t" ? h.top = 0 : h.bottom = 0, y === C || !["l", "r"].includes(y) ? h.left = l : y === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ b.createElement("div", {
    ref: v,
    className: De("".concat(t, "-arrow"), i),
    style: h
  }, s);
}
function v6(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, a = e.motion;
  return o ? /* @__PURE__ */ b.createElement(Ea, D0({}, a, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ b.createElement("div", {
      style: {
        zIndex: n
      },
      className: De("".concat(t, "-mask"), s)
    });
  }) : null;
}
var z1 = /* @__PURE__ */ b.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (z1.displayName = "PopupContent");
var W1 = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, a = e.style, i = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, u = e.fresh, d = e.onClick, v = e.mask, h = e.arrow, g = e.arrowPos, m = e.align, f = e.motion, y = e.maskMotion, p = e.forceRender, C = e.getPopupContainer, w = e.autoDestroy, S = e.portal, x = e.zIndex, E = e.onMouseEnter, M = e.onMouseLeave, R = e.onPointerEnter, _ = e.onPointerDownCapture, O = e.ready, F = e.offsetX, k = e.offsetY, A = e.offsetR, $ = e.offsetB, I = e.onAlign, j = e.onPrepare, V = e.stretch, B = e.targetWidth, G = e.targetHeight, U = typeof r == "function" ? r() : r, H = c || l, ee = (C == null ? void 0 : C.length) > 0, K = b.useState(!C || !ee), X = q(K, 2), z = X[0], te = X[1];
  if (N0(function() {
    !z && ee && i && te(!0);
  }, [z, ee, i]), !z)
    return null;
  var re = "auto", ce = {
    left: "-1000vw",
    top: "-1000vh",
    right: re,
    bottom: re
  };
  if (O || !c) {
    var ne, oe = m.points, me = m.dynamicInset || ((ne = m._experimental) === null || ne === void 0 ? void 0 : ne.dynamicInset), Ee = me && oe[0][1] === "r", L = me && oe[0][0] === "b";
    Ee ? (ce.right = A, ce.left = re) : (ce.left = F, ce.right = re), L ? (ce.bottom = $, ce.top = re) : (ce.top = k, ce.bottom = re);
  }
  var fe = {};
  return V && (V.includes("height") && G ? fe.height = G : V.includes("minHeight") && G && (fe.minHeight = G), V.includes("width") && B ? fe.width = B : V.includes("minWidth") && B && (fe.minWidth = B)), c || (fe.pointerEvents = "none"), /* @__PURE__ */ b.createElement(S, {
    open: p || H,
    getContainer: C && function() {
      return C(i);
    },
    autoDestroy: w
  }, /* @__PURE__ */ b.createElement(v6, {
    prefixCls: o,
    open: c,
    zIndex: x,
    mask: v,
    motion: y
  }), /* @__PURE__ */ b.createElement(En, {
    onResize: I,
    disabled: !c
  }, function(de) {
    return /* @__PURE__ */ b.createElement(Ea, D0({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(o, "-hidden")
    }, f, {
      onAppearPrepare: j,
      onEnterPrepare: j,
      visible: c,
      onVisibleChanged: function(Ce) {
        var he;
        f == null || (he = f.onVisibleChanged) === null || he === void 0 || he.call(f, Ce), s(Ce);
      }
    }), function(ie, Ce) {
      var he = ie.className, Ye = ie.style, Z = De(o, he, n);
      return /* @__PURE__ */ b.createElement("div", {
        ref: sa(de, t, Ce),
        className: Z,
        style: D(D(D(D({
          "--arrow-x": "".concat(g.x || 0, "px"),
          "--arrow-y": "".concat(g.y || 0, "px")
        }, ce), fe), Ye), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, a),
        onMouseEnter: E,
        onMouseLeave: M,
        onPointerEnter: R,
        onClick: d,
        onPointerDownCapture: _
      }, h && /* @__PURE__ */ b.createElement(d6, {
        prefixCls: o,
        arrow: h,
        arrowPos: g,
        align: m
      }), /* @__PURE__ */ b.createElement(z1, {
        cache: !c && !u
      }, U));
    });
  }));
});
process.env.NODE_ENV !== "production" && (W1.displayName = "Popup");
var U1 = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = Sn(r), a = b.useCallback(function(s) {
    ia(t, n ? n(s) : s);
  }, [n]), i = ca(a, la(r));
  return o ? /* @__PURE__ */ b.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (U1.displayName = "TriggerWrapper");
var Xi = /* @__PURE__ */ b.createContext(null);
function Yi(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function h6(e, t, r, n) {
  return b.useMemo(function() {
    var o = Yi(r ?? t), a = Yi(n ?? t), i = new Set(o), s = new Set(a);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function m6() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function g6(e, t, r, n) {
  for (var o = r.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var s, c = a[i];
    if (m6((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function Ki(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function $r(e) {
  return e.ownerDocument.defaultView;
}
function ea(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = $r(r).getComputedStyle(r), a = o.overflowX, i = o.overflowY, s = o.overflow;
    [a, i, s].some(function(c) {
      return n.includes(c);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function kr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function gr(e) {
  return kr(parseFloat(e), 0);
}
function Zi(e, t) {
  var r = D({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var o = $r(n).getComputedStyle(n), a = o.overflow, i = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, l = o.borderLeftWidth, u = o.borderRightWidth, d = n.getBoundingClientRect(), v = n.offsetHeight, h = n.clientHeight, g = n.offsetWidth, m = n.clientWidth, f = gr(s), y = gr(c), p = gr(l), C = gr(u), w = kr(Math.round(d.width / g * 1e3) / 1e3), S = kr(Math.round(d.height / v * 1e3) / 1e3), x = (g - m - p - C) * w, E = (v - h - f - y) * S, M = f * S, R = y * S, _ = p * w, O = C * w, F = 0, k = 0;
      if (a === "clip") {
        var A = gr(i);
        F = A * w, k = A * S;
      }
      var $ = d.x + _ - F, I = d.y + M - k, j = $ + d.width + 2 * F - _ - O - x, V = I + d.height + 2 * k - M - R - E;
      r.left = Math.max(r.left, $), r.top = Math.max(r.top, I), r.right = Math.min(r.right, j), r.bottom = Math.min(r.bottom, V);
    }
  }), r;
}
function Qi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Ji(e, t) {
  var r = t || [], n = q(r, 2), o = n[0], a = n[1];
  return [Qi(e.width, o), Qi(e.height, a)];
}
function es() {
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
function p6(e, t, r, n, o, a, i) {
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
  }), c = q(s, 2), l = c[0], u = c[1], d = b.useRef(0), v = b.useMemo(function() {
    return t ? ea(t) : [];
  }, [t]), h = b.useRef({}), g = function() {
    h.current = {};
  };
  e || g();
  var m = R0(function() {
    if (t && r && e) {
      let X0 = function(ur, mt) {
        var xt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Re, fr = H.x + ur, zr = H.y + mt, jn = fr + L, Vn = zr + Ee, Hn = Math.max(fr, xt.left), se = Math.max(zr, xt.top), we = Math.min(jn, xt.right), d0 = Math.min(Vn, xt.bottom);
        return Math.max(0, (we - Hn) * (d0 - se));
      }, Vt = function() {
        xe = H.y + Ue, Se = xe + Ee, c0 = H.x + ze, He = c0 + L;
      };
      var p, C, w, S, x = t, E = x.ownerDocument, M = $r(x), R = M.getComputedStyle(x), _ = R.position, O = x.style.left, F = x.style.top, k = x.style.right, A = x.style.bottom, $ = x.style.overflow, I = D(D({}, o[n]), a), j = E.createElement("div");
      (p = x.parentElement) === null || p === void 0 || p.appendChild(j), j.style.left = "".concat(x.offsetLeft, "px"), j.style.top = "".concat(x.offsetTop, "px"), j.style.position = _, j.style.height = "".concat(x.offsetHeight, "px"), j.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto", x.style.overflow = "hidden";
      var V;
      if (Array.isArray(r))
        V = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var B, G, U = r.getBoundingClientRect();
        U.x = (B = U.x) !== null && B !== void 0 ? B : U.left, U.y = (G = U.y) !== null && G !== void 0 ? G : U.top, V = {
          x: U.x,
          y: U.y,
          width: U.width,
          height: U.height
        };
      }
      var H = x.getBoundingClientRect(), ee = M.getComputedStyle(x), K = ee.height, X = ee.width;
      H.x = (C = H.x) !== null && C !== void 0 ? C : H.left, H.y = (w = H.y) !== null && w !== void 0 ? w : H.top;
      var z = E.documentElement, te = z.clientWidth, re = z.clientHeight, ce = z.scrollWidth, ne = z.scrollHeight, oe = z.scrollTop, me = z.scrollLeft, Ee = H.height, L = H.width, fe = V.height, de = V.width, ie = {
        left: 0,
        top: 0,
        right: te,
        bottom: re
      }, Ce = {
        left: -me,
        top: -oe,
        right: ce - me,
        bottom: ne - oe
      }, he = I.htmlRegion, Ye = "visible", Z = "visibleFirst";
      he !== "scroll" && he !== Z && (he = Ye);
      var le = he === Z, ge = Zi(Ce, v), J = Zi(ie, v), Re = he === Ye ? J : ge, Me = le ? J : Re;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var We = x.getBoundingClientRect();
      x.style.left = O, x.style.top = F, x.style.right = k, x.style.bottom = A, x.style.overflow = $, (S = x.parentElement) === null || S === void 0 || S.removeChild(j);
      var $e = kr(Math.round(L / parseFloat(X) * 1e3) / 1e3), Ne = kr(Math.round(Ee / parseFloat(K) * 1e3) / 1e3);
      if ($e === 0 || Ne === 0 || Er(r) && !R3(r))
        return;
      var r0 = I.offset, _e = I.targetOffset, be = Ji(H, r0), Be = q(be, 2), Ke = Be[0], l0 = Be[1], u0 = Ji(V, _e), o0 = q(u0, 2), f0 = o0[0], w0 = o0[1];
      V.x -= f0, V.y -= w0;
      var v0 = I.points || [], b0 = q(v0, 2), Ze = b0[0], Qe = b0[1], i0 = es(Qe), h0 = es(Ze), n0 = Ut(V, i0), q0 = Ut(H, h0), s0 = D({}, I), ze = n0.x - q0.x + Ke, Ue = n0.y - q0.y + l0, L0 = X0(ze, Ue), $0 = X0(ze, Ue, J), F0 = Ut(V, ["t", "l"]), vt = Ut(H, ["t", "l"]), ht = Ut(V, ["b", "r"]), rt = Ut(H, ["b", "r"]), P = I.overflow || {}, W = P.adjustX, Q = P.adjustY, pe = P.shiftX, Fe = P.shiftY, Ie = function(mt) {
        return typeof mt == "boolean" ? mt : mt >= 0;
      }, xe, Se, c0, He;
      Vt();
      var Je = Ie(Q), Ge = h0[0] === i0[0];
      if (Je && h0[0] === "t" && (Se > Me.bottom || h.current.bt)) {
        var k0 = Ue;
        Ge ? k0 -= Ee - fe : k0 = F0.y - rt.y - l0;
        var Ae = X0(ze, k0), ue = X0(ze, k0, J);
        // Of course use larger one
        Ae > L0 || Ae === L0 && (!le || // Choose recommend one
        ue >= $0) ? (h.current.bt = !0, Ue = k0, l0 = -l0, s0.points = [Pt(h0, 0), Pt(i0, 0)]) : h.current.bt = !1;
      }
      if (Je && h0[0] === "b" && (xe < Me.top || h.current.tb)) {
        var je = Ue;
        Ge ? je += Ee - fe : je = ht.y - vt.y - l0;
        var e0 = X0(ze, je), m0 = X0(ze, je, J);
        // Of course use larger one
        e0 > L0 || e0 === L0 && (!le || // Choose recommend one
        m0 >= $0) ? (h.current.tb = !0, Ue = je, l0 = -l0, s0.points = [Pt(h0, 0), Pt(i0, 0)]) : h.current.tb = !1;
      }
      var B0 = Ie(W), I0 = h0[1] === i0[1];
      if (B0 && h0[1] === "l" && (He > Me.right || h.current.rl)) {
        var O0 = ze;
        I0 ? O0 -= L - de : O0 = F0.x - rt.x - Ke;
        var T0 = X0(O0, Ue), z0 = X0(O0, Ue, J);
        // Of course use larger one
        T0 > L0 || T0 === L0 && (!le || // Choose recommend one
        z0 >= $0) ? (h.current.rl = !0, ze = O0, Ke = -Ke, s0.points = [Pt(h0, 1), Pt(i0, 1)]) : h.current.rl = !1;
      }
      if (B0 && h0[1] === "r" && (c0 < Me.left || h.current.lr)) {
        var j0 = ze;
        I0 ? j0 += L - de : j0 = ht.x - vt.x - Ke;
        var V0 = X0(j0, Ue), nt = X0(j0, Ue, J);
        // Of course use larger one
        V0 > L0 || V0 === L0 && (!le || // Choose recommend one
        nt >= $0) ? (h.current.lr = !0, ze = j0, Ke = -Ke, s0.points = [Pt(h0, 1), Pt(i0, 1)]) : h.current.lr = !1;
      }
      Vt();
      var H0 = pe === !0 ? 0 : pe;
      typeof H0 == "number" && (c0 < J.left && (ze -= c0 - J.left - Ke, V.x + de < J.left + H0 && (ze += V.x - J.left + de - H0)), He > J.right && (ze -= He - J.right - Ke, V.x > J.right - H0 && (ze += V.x - J.right + H0)));
      var St = Fe === !0 ? 0 : Fe;
      typeof St == "number" && (xe < J.top && (Ue -= xe - J.top - l0, V.y + fe < J.top + St && (Ue += V.y - J.top + fe - St)), Se > J.bottom && (Ue -= Se - J.bottom - l0, V.y > J.bottom - St && (Ue += V.y - J.bottom + St)));
      var wt = H.x + ze, Et = wt + L, cr = H.y + Ue, On = cr + Ee, Ir = V.x, jr = Ir + de, Vr = V.y, Tn = Vr + fe, kn = Math.max(wt, Ir), Hr = Math.min(Et, jr), An = (kn + Hr) / 2, Nn = An - wt, Br = Math.max(cr, Vr), Dn = Math.min(On, Tn), Ln = (Br + Dn) / 2, $n = Ln - cr;
      i == null || i(t, s0);
      var lt = We.right - H.x - (ze + H.width), lr = We.bottom - H.y - (Ue + H.height);
      $e === 1 && (ze = Math.floor(ze), lt = Math.floor(lt)), Ne === 1 && (Ue = Math.floor(Ue), lr = Math.floor(lr));
      var In = {
        ready: !0,
        offsetX: ze / $e,
        offsetY: Ue / Ne,
        offsetR: lt / $e,
        offsetB: lr / Ne,
        arrowX: Nn / $e,
        arrowY: $n / Ne,
        scaleX: $e,
        scaleY: Ne,
        align: s0
      };
      u(In);
    }
  }), f = function() {
    d.current += 1;
    var C = d.current;
    Promise.resolve().then(function() {
      d.current === C && m();
    });
  }, y = function() {
    u(function(C) {
      return D(D({}, C), {}, {
        ready: !1
      });
    });
  };
  return N0(y, [n]), N0(function() {
    e || y();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, f];
}
function y6(e, t, r, n, o) {
  N0(function() {
    if (e && t && r) {
      let d = function() {
        n(), o();
      };
      var a = t, i = r, s = ea(a), c = ea(i), l = $r(i), u = new Set([l].concat(ve(s), ve(c)));
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
function b6(e, t, r, n, o, a, i, s) {
  var c = b.useRef(e);
  c.current = e;
  var l = b.useRef(!1);
  b.useEffect(function() {
    if (t && n && (!o || a)) {
      var d = function() {
        l.current = !1;
      }, v = function(w) {
        var S;
        c.current && !i(((S = w.composedPath) === null || S === void 0 || (S = S.call(w)) === null || S === void 0 ? void 0 : S[0]) || w.target) && !l.current && s(!1);
      }, h = $r(n);
      h.addEventListener("pointerdown", d, !0), h.addEventListener("mousedown", v, !0), h.addEventListener("contextmenu", v, !0);
      var g = Bo(r);
      if (g && (g.addEventListener("mousedown", v, !0), g.addEventListener("contextmenu", v, !0)), process.env.NODE_ENV !== "production") {
        var m, f, y = r == null || (m = r.getRootNode) === null || m === void 0 ? void 0 : m.call(r), p = (f = n.getRootNode) === null || f === void 0 ? void 0 : f.call(n);
        $t(y === p, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        h.removeEventListener("pointerdown", d, !0), h.removeEventListener("mousedown", v, !0), h.removeEventListener("contextmenu", v, !0), g && (g.removeEventListener("mousedown", v, !0), g.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, r, n, o, a]);
  function u() {
    l.current = !0;
  }
  return u;
}
var C6 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function S6() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pa, t = /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = r.prefixCls, a = o === void 0 ? "rc-trigger-popup" : o, i = r.children, s = r.action, c = s === void 0 ? "hover" : s, l = r.showAction, u = r.hideAction, d = r.popupVisible, v = r.defaultPopupVisible, h = r.onPopupVisibleChange, g = r.afterPopupVisibleChange, m = r.mouseEnterDelay, f = r.mouseLeaveDelay, y = f === void 0 ? 0.1 : f, p = r.focusDelay, C = r.blurDelay, w = r.mask, S = r.maskClosable, x = S === void 0 ? !0 : S, E = r.getPopupContainer, M = r.forceRender, R = r.autoDestroy, _ = r.destroyPopupOnHide, O = r.popup, F = r.popupClassName, k = r.popupStyle, A = r.popupPlacement, $ = r.builtinPlacements, I = $ === void 0 ? {} : $, j = r.popupAlign, V = r.zIndex, B = r.stretch, G = r.getPopupClassNameFromAlign, U = r.fresh, H = r.alignPoint, ee = r.onPopupClick, K = r.onPopupAlign, X = r.arrow, z = r.popupMotion, te = r.maskMotion, re = r.popupTransitionName, ce = r.popupAnimation, ne = r.maskTransitionName, oe = r.maskAnimation, me = r.className, Ee = r.getTriggerDOMNode, L = ct(r, C6), fe = R || _ || !1, de = b.useState(!1), ie = q(de, 2), Ce = ie[0], he = ie[1];
    N0(function() {
      he(f6());
    }, []);
    var Ye = b.useRef({}), Z = b.useContext(Xi), le = b.useMemo(function() {
      return {
        registerSubPopup: function(we, d0) {
          Ye.current[we] = d0, Z == null || Z.registerSubPopup(we, d0);
        }
      };
    }, [Z]), ge = D1(), J = b.useState(null), Re = q(J, 2), Me = Re[0], We = Re[1], $e = b.useRef(null), Ne = R0(function(se) {
      $e.current = se, Er(se) && Me !== se && We(se), Z == null || Z.registerSubPopup(ge, se);
    }), r0 = b.useState(null), _e = q(r0, 2), be = _e[0], Be = _e[1], Ke = b.useRef(null), l0 = R0(function(se) {
      Er(se) && be !== se && (Be(se), Ke.current = se);
    }), u0 = b.Children.only(i), o0 = (u0 == null ? void 0 : u0.props) || {}, f0 = {}, w0 = R0(function(se) {
      var we, d0, E0 = be;
      return (E0 == null ? void 0 : E0.contains(se)) || ((we = Bo(E0)) === null || we === void 0 ? void 0 : we.host) === se || se === E0 || (Me == null ? void 0 : Me.contains(se)) || ((d0 = Bo(Me)) === null || d0 === void 0 ? void 0 : d0.host) === se || se === Me || Object.values(Ye.current).some(function(g0) {
        return (g0 == null ? void 0 : g0.contains(se)) || se === g0;
      });
    }), v0 = Ki(a, z, ce, re), b0 = Ki(a, te, oe, ne), Ze = b.useState(v || !1), Qe = q(Ze, 2), i0 = Qe[0], h0 = Qe[1], n0 = d ?? i0, q0 = R0(function(se) {
      d === void 0 && h0(se);
    });
    N0(function() {
      h0(d || !1);
    }, [d]);
    var s0 = b.useRef(n0);
    s0.current = n0;
    var ze = b.useRef([]);
    ze.current = [];
    var Ue = R0(function(se) {
      var we;
      q0(se), ((we = ze.current[ze.current.length - 1]) !== null && we !== void 0 ? we : n0) !== se && (ze.current.push(se), h == null || h(se));
    }), L0 = b.useRef(), $0 = function() {
      clearTimeout(L0.current);
    }, F0 = function(we) {
      var d0 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      $0(), d0 === 0 ? Ue(we) : L0.current = setTimeout(function() {
        Ue(we);
      }, d0 * 1e3);
    };
    b.useEffect(function() {
      return $0;
    }, []);
    var vt = b.useState(!1), ht = q(vt, 2), rt = ht[0], P = ht[1];
    N0(function(se) {
      (!se || n0) && P(!0);
    }, [n0]);
    var W = b.useState(null), Q = q(W, 2), pe = Q[0], Fe = Q[1], Ie = b.useState(null), xe = q(Ie, 2), Se = xe[0], c0 = xe[1], He = function(we) {
      c0([we.clientX, we.clientY]);
    }, Je = p6(n0, Me, H && Se !== null ? Se : be, A, I, j, K), Ge = q(Je, 11), k0 = Ge[0], Ae = Ge[1], ue = Ge[2], je = Ge[3], e0 = Ge[4], m0 = Ge[5], B0 = Ge[6], I0 = Ge[7], O0 = Ge[8], T0 = Ge[9], z0 = Ge[10], j0 = h6(Ce, c, l, u), V0 = q(j0, 2), nt = V0[0], H0 = V0[1], St = nt.has("click"), wt = H0.has("click") || H0.has("contextMenu"), Et = R0(function() {
      rt || z0();
    }), cr = function() {
      s0.current && H && wt && F0(!1);
    };
    y6(n0, be, Me, Et, cr), N0(function() {
      Et();
    }, [Se, A]), N0(function() {
      n0 && !(I != null && I[A]) && Et();
    }, [JSON.stringify(j)]);
    var On = b.useMemo(function() {
      var se = g6(I, a, T0, H);
      return De(se, G == null ? void 0 : G(T0));
    }, [T0, G, I, a, H]);
    b.useImperativeHandle(n, function() {
      return {
        nativeElement: Ke.current,
        popupElement: $e.current,
        forceAlign: Et
      };
    });
    var Ir = b.useState(0), jr = q(Ir, 2), Vr = jr[0], Tn = jr[1], kn = b.useState(0), Hr = q(kn, 2), An = Hr[0], Nn = Hr[1], Br = function() {
      if (B && be) {
        var we = be.getBoundingClientRect();
        Tn(we.width), Nn(we.height);
      }
    }, Dn = function() {
      Br(), Et();
    }, Ln = function(we) {
      P(!1), z0(), g == null || g(we);
    }, $n = function() {
      return new Promise(function(we) {
        Br(), Fe(function() {
          return we;
        });
      });
    };
    N0(function() {
      pe && (z0(), pe(), Fe(null));
    }, [pe]);
    function lt(se, we, d0, E0) {
      f0[se] = function(g0) {
        var Wr;
        E0 == null || E0(g0), F0(we, d0);
        for (var Bn = arguments.length, ka = new Array(Bn > 1 ? Bn - 1 : 0), Ur = 1; Ur < Bn; Ur++)
          ka[Ur - 1] = arguments[Ur];
        (Wr = o0[se]) === null || Wr === void 0 || Wr.call.apply(Wr, [o0, g0].concat(ka));
      };
    }
    (St || wt) && (f0.onClick = function(se) {
      var we;
      s0.current && wt ? F0(!1) : !s0.current && St && (He(se), F0(!0));
      for (var d0 = arguments.length, E0 = new Array(d0 > 1 ? d0 - 1 : 0), g0 = 1; g0 < d0; g0++)
        E0[g0 - 1] = arguments[g0];
      (we = o0.onClick) === null || we === void 0 || we.call.apply(we, [o0, se].concat(E0));
    });
    var lr = b6(n0, wt, be, Me, w, x, w0, F0), In = nt.has("hover"), X0 = H0.has("hover"), Vt, ur;
    In && (lt("onMouseEnter", !0, m, function(se) {
      He(se);
    }), lt("onPointerEnter", !0, m, function(se) {
      He(se);
    }), Vt = function(we) {
      (n0 || rt) && Me !== null && Me !== void 0 && Me.contains(we.target) && F0(!0, m);
    }, H && (f0.onMouseMove = function(se) {
      var we;
      (we = o0.onMouseMove) === null || we === void 0 || we.call(o0, se);
    })), X0 && (lt("onMouseLeave", !1, y), lt("onPointerLeave", !1, y), ur = function() {
      F0(!1, y);
    }), nt.has("focus") && lt("onFocus", !0, p), H0.has("focus") && lt("onBlur", !1, C), nt.has("contextMenu") && (f0.onContextMenu = function(se) {
      var we;
      s0.current && H0.has("contextMenu") ? F0(!1) : (He(se), F0(!0)), se.preventDefault();
      for (var d0 = arguments.length, E0 = new Array(d0 > 1 ? d0 - 1 : 0), g0 = 1; g0 < d0; g0++)
        E0[g0 - 1] = arguments[g0];
      (we = o0.onContextMenu) === null || we === void 0 || we.call.apply(we, [o0, se].concat(E0));
    }), me && (f0.className = De(o0.className, me));
    var mt = b.useRef(!1);
    mt.current || (mt.current = M || n0 || rt);
    var xt = D(D({}, o0), f0), fr = {}, zr = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    zr.forEach(function(se) {
      L[se] && (fr[se] = function() {
        for (var we, d0 = arguments.length, E0 = new Array(d0), g0 = 0; g0 < d0; g0++)
          E0[g0] = arguments[g0];
        (we = xt[se]) === null || we === void 0 || we.call.apply(we, [xt].concat(E0)), L[se].apply(L, E0);
      });
    });
    var jn = /* @__PURE__ */ b.cloneElement(u0, D(D({}, xt), fr)), Vn = {
      x: m0,
      y: B0
    }, Hn = X ? D({}, X !== !0 ? X : {}) : null;
    return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(En, {
      disabled: !n0,
      ref: l0,
      onResize: Dn
    }, /* @__PURE__ */ b.createElement(U1, {
      getTriggerDOMNode: Ee
    }, jn)), mt.current && /* @__PURE__ */ b.createElement(Xi.Provider, {
      value: le
    }, /* @__PURE__ */ b.createElement(W1, {
      portal: e,
      ref: Ne,
      prefixCls: a,
      popup: O,
      className: De(F, On),
      style: k,
      target: be,
      onMouseEnter: Vt,
      onMouseLeave: ur,
      onPointerEnter: Vt,
      zIndex: V,
      open: n0,
      keepDom: rt,
      fresh: U,
      onClick: ee,
      onPointerDownCapture: lr,
      mask: w,
      motion: v0,
      maskMotion: b0,
      onVisibleChanged: Ln,
      onPrepare: $n,
      forceRender: M,
      autoDestroy: fe,
      getPopupContainer: E,
      align: T0,
      arrow: Hn,
      arrowPos: Vn,
      ready: k0,
      offsetX: Ae,
      offsetY: ue,
      offsetR: je,
      offsetB: e0,
      onAlign: Et,
      stretch: B,
      targetWidth: Vr / I0,
      targetHeight: An / O0
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const w6 = S6(Pa), bn = (e) => e ? typeof e == "function" ? e() : e : null;
function _a(e) {
  var t = e.children, r = e.prefixCls, n = e.id, o = e.overlayInnerStyle, a = e.bodyClassName, i = e.className, s = e.style;
  return /* @__PURE__ */ b.createElement("div", {
    className: De("".concat(r, "-content"), i),
    style: s
  }, /* @__PURE__ */ b.createElement("div", {
    className: De("".concat(r, "-inner"), a),
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
}, Z0 = [0, 0], E6 = {
  left: {
    points: ["cr", "cl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Z0
  },
  right: {
    points: ["cl", "cr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Z0
  },
  top: {
    points: ["bc", "tc"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Z0
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Z0
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Z0
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Z0
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Z0
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Z0
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Z0
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Z0
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Z0
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Z0
  }
}, x6 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], P6 = function(t, r) {
  var n = t.overlayClassName, o = t.trigger, a = o === void 0 ? ["hover"] : o, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, c = t.mouseLeaveDelay, l = c === void 0 ? 0.1 : c, u = t.overlayStyle, d = t.prefixCls, v = d === void 0 ? "rc-tooltip" : d, h = t.children, g = t.onVisibleChange, m = t.afterVisibleChange, f = t.transitionName, y = t.animation, p = t.motion, C = t.placement, w = C === void 0 ? "right" : C, S = t.align, x = S === void 0 ? {} : S, E = t.destroyTooltipOnHide, M = E === void 0 ? !1 : E, R = t.defaultVisible, _ = t.getTooltipContainer, O = t.overlayInnerStyle;
  t.arrowContent;
  var F = t.overlay, k = t.id, A = t.showArrow, $ = A === void 0 ? !0 : A, I = t.classNames, j = t.styles, V = ct(t, x6), B = D1(k), G = Y(null);
  na(r, function() {
    return G.current;
  });
  var U = D({}, V);
  "visible" in t && (U.popupVisible = t.visible);
  var H = function() {
    return /* @__PURE__ */ b.createElement(_a, {
      key: "content",
      prefixCls: v,
      id: B,
      bodyClassName: I == null ? void 0 : I.body,
      overlayInnerStyle: D(D({}, O), j == null ? void 0 : j.body)
    }, F);
  }, ee = function() {
    var X = b.Children.only(h), z = (X == null ? void 0 : X.props) || {}, te = D(D({}, z), {}, {
      "aria-describedby": F ? B : null
    });
    return /* @__PURE__ */ b.cloneElement(h, te);
  };
  return /* @__PURE__ */ b.createElement(w6, D0({
    popupClassName: De(n, I == null ? void 0 : I.root),
    prefixCls: v,
    popup: H,
    action: a,
    builtinPlacements: E6,
    popupPlacement: w,
    ref: G,
    popupAlign: x,
    getPopupContainer: _,
    onPopupVisibleChange: g,
    afterPopupVisibleChange: m,
    popupTransitionName: f,
    popupAnimation: y,
    popupMotion: p,
    defaultPopupVisible: R,
    autoDestroy: M,
    mouseLeaveDelay: l,
    popupStyle: D(D({}, u), j == null ? void 0 : j.root),
    mouseEnterDelay: s,
    arrow: $
  }, U), ee());
};
const R6 = /* @__PURE__ */ Ar(P6);
function G1(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, o = t / 2, a = 0, i = o, s = n * 1 / Math.sqrt(2), c = o - n * (1 - 1 / Math.sqrt(2)), l = o - r * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), d = 2 * o - l, v = u, h = 2 * o - s, g = c, m = 2 * o - a, f = i, y = o * Math.sqrt(2) + n * (Math.sqrt(2) - 2), p = n * (Math.sqrt(2) - 1), C = `polygon(${p}px 100%, 50% ${p}px, ${2 * o - p}px 100%, ${p}px 100%)`, w = `path('M ${a} ${i} A ${n} ${n} 0 0 0 ${s} ${c} L ${l} ${u} A ${r} ${r} 0 0 1 ${d} ${v} L ${h} ${g} A ${n} ${n} 0 0 0 ${m} ${f} Z')`;
  return {
    arrowShadowWidth: y,
    arrowPath: w,
    arrowPolygon: C
  };
}
const _6 = (e, t, r) => {
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
}, q1 = 8;
function Ma(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? q1 : n
  };
}
function on(e, t) {
  return e ? t : {};
}
function X1(e, t, r) {
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
      }, _6(e, t, o)), {
        "&:before": {
          background: t
        }
      })]
    }, on(!!c.top, {
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
    })), on(!!c.bottom, {
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
    })), on(!!c.left, {
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
    })), on(!!c.right, {
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
function M6(e, t, r, n) {
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
const ts = {
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
}, F6 = {
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
}, O6 = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function T6(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: o,
    borderRadius: a,
    visibleFirst: i
  } = e, s = t / 2, c = {}, l = Ma({
    contentRadius: a,
    limitVerticalRadius: !0
  });
  return Object.keys(ts).forEach((u) => {
    const d = n && F6[u] || ts[u], v = Object.assign(Object.assign({}, d), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[u] = v, O6.has(u) && (v.autoArrow = !1), u) {
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
    v.overflow = M6(u, l, t, r), i && (v.htmlRegion = "visibleFirst");
  }), c;
}
const k6 = (e) => {
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
  } = e, g = t(i).add(h).add(v).equal(), m = t(i).mul(2).add(h).equal();
  return [
    {
      [r]: Object.assign(Object.assign(Object.assign(Object.assign({}, Ca(e)), {
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
          minWidth: m,
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
          minWidth: g
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${r}-inner`]: {
            borderRadius: e.min(i, q1)
          }
        },
        [`${r}-content`]: {
          position: "relative"
        }
      }), X2(e, (f, {
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
    X1(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${r}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, A6 = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Ma({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), G1(sr(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Y1 = (e, t = !0) => Sa("Tooltip", (n) => {
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
  return [k6(s), A1(n, "zoom-big-fast")];
}, A6, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(e), N6 = Tr.map((e) => `${e}-inverse`);
function D6(e, t = !0) {
  return t ? [].concat(ve(N6), ve(Tr)).includes(e) : Tr.includes(e);
}
function K1(e, t) {
  const r = D6(t), n = De({
    [`${e}-${t}`]: t && r
  }), o = {}, a = {}, i = a5(t).toRgb(), c = (0.299 * i.r + 0.587 * i.g + 0.114 * i.b) / 255 < 0.5 ? "#FFF" : "#000";
  return t && !r && (o.background = t, o["--ant-tooltip-color"] = c, a["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: o,
    arrowStyle: a
  };
}
const L6 = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: o,
    color: a,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = b.useContext(Fr), c = s("tooltip", t), [l, u, d] = Y1(c), v = K1(c, a), h = v.arrowStyle, g = Object.assign(Object.assign({}, i), v.overlayStyle), m = De(u, d, c, `${c}-pure`, `${c}-placement-${n}`, r, v.className);
  return l(/* @__PURE__ */ b.createElement("div", {
    className: m,
    style: h
  }, /* @__PURE__ */ b.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ b.createElement(_a, Object.assign({}, e, {
    className: u,
    prefixCls: c,
    overlayInnerStyle: g
  }), o)));
}, $6 = L6;
var I6 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const j6 = /* @__PURE__ */ b.forwardRef((e, t) => {
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
    arrow: g = !0,
    title: m,
    overlay: f,
    builtinPlacements: y,
    arrowPointAtCenter: p = !1,
    autoAdjustOverflow: C = !0,
    motion: w,
    getPopupContainer: S,
    placement: x = "top",
    mouseEnterDelay: E = 0.1,
    mouseLeaveDelay: M = 0.1,
    overlayStyle: R,
    rootClassName: _,
    overlayClassName: O,
    styles: F,
    classNames: k
  } = e, A = I6(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), $ = !!g, [, I] = ba(), {
    getPopupContainer: j,
    getPrefixCls: V,
    direction: B,
    className: G,
    style: U,
    classNames: H,
    styles: ee
  } = ya("tooltip"), K = pa("Tooltip"), X = b.useRef(null), z = () => {
    var _e;
    (_e = X.current) === null || _e === void 0 || _e.forceAlign();
  };
  b.useImperativeHandle(t, () => {
    var _e, be;
    return {
      forceAlign: z,
      forcePopupAlign: () => {
        K.deprecated(!1, "forcePopupAlign", "forceAlign"), z();
      },
      nativeElement: (_e = X.current) === null || _e === void 0 ? void 0 : _e.nativeElement,
      popupElement: (be = X.current) === null || be === void 0 ? void 0 : be.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([_e, be]) => {
    K.deprecated(!(_e in e), _e, be);
  }), process.env.NODE_ENV !== "production" && K(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && K(!g || typeof g == "boolean" || !("arrowPointAtCenter" in g), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [te, re] = Fn(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), ce = !m && !f && m !== 0, ne = (_e) => {
    var be, Be;
    re(ce ? !1 : _e), ce || ((be = e.onOpenChange) === null || be === void 0 || be.call(e, _e), (Be = e.onVisibleChange) === null || Be === void 0 || Be.call(e, _e));
  }, oe = b.useMemo(() => {
    var _e, be;
    let Be = p;
    return typeof g == "object" && (Be = (be = (_e = g.pointAtCenter) !== null && _e !== void 0 ? _e : g.arrowPointAtCenter) !== null && be !== void 0 ? be : p), y || T6({
      arrowPointAtCenter: Be,
      autoAdjustOverflow: C,
      arrowWidth: $ ? I.sizePopupArrow : 0,
      borderRadius: I.borderRadius,
      offset: I.marginXXS,
      visibleFirst: !0
    });
  }, [p, g, y, I]), me = b.useMemo(() => m === 0 ? m : f || m || "", [f, m]), Ee = /* @__PURE__ */ b.createElement(u6, {
    space: !0
  }, typeof me == "function" ? me() : me), L = V("tooltip", o), fe = V(), de = e["data-popover-inject"];
  let ie = te;
  !("open" in e) && !("visible" in e) && ce && (ie = !1);
  const Ce = /* @__PURE__ */ b.isValidElement(l) && !g3(l) ? l : /* @__PURE__ */ b.createElement("span", null, l), he = Ce.props, Ye = !he.className || typeof he.className == "string" ? De(he.className, a || `${L}-open`) : he.className, [Z, le, ge] = Y1(L, !de), J = K1(L, s), Re = J.arrowStyle, Me = De(O, {
    [`${L}-rtl`]: B === "rtl"
  }, J.className, _, le, ge, G, H.root, k == null ? void 0 : k.root), We = De(H.body, k == null ? void 0 : k.body), [$e, Ne] = E3("Tooltip", A.zIndex), r0 = /* @__PURE__ */ b.createElement(R6, Object.assign({}, A, {
    zIndex: $e,
    showArrow: $,
    placement: x,
    mouseEnterDelay: E,
    mouseLeaveDelay: M,
    prefixCls: L,
    classNames: {
      root: Me,
      body: We
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Re), ee.root), U), R), F == null ? void 0 : F.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, ee.body), c), F == null ? void 0 : F.body), J.overlayStyle)
    },
    getTooltipContainer: S || i || j,
    ref: X,
    builtinPlacements: oe,
    overlay: Ee,
    visible: ie,
    onVisibleChange: ne,
    afterVisibleChange: u ?? d,
    arrowContent: /* @__PURE__ */ b.createElement("span", {
      className: `${L}-arrow-content`
    }),
    motion: {
      motionName: R1(fe, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: h ?? !!v
  }), ie ? C1(Ce, {
    className: Ye
  }) : Ce);
  return Z(/* @__PURE__ */ b.createElement(w1.Provider, {
    value: Ne
  }, r0));
}), Fa = j6;
process.env.NODE_ENV !== "production" && (Fa.displayName = "Tooltip");
Fa._InternalPanelDoNotUseOrYouWillBeFired = $6;
const Z1 = Fa, V6 = (e) => {
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
    innerContentPadding: g,
    titlePadding: m
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, Ca(e)), {
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
          padding: m
        },
        [`${t}-inner-content`]: {
          color: r,
          padding: g
        }
      })
    },
    // Arrow Style
    X1(e, "var(--antd-arrow-background-color)"),
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
}, H6 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Tr.map((r) => {
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
}, B6 = (e) => {
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
  } = e, v = r - n, h = v / 2, g = v / 2 - t, m = o;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: i + 30
  }, G1(e)), Ma({
    contentRadius: s,
    limitVerticalRadius: !0
  })), {
    // internal
    innerPadding: a ? 0 : 12,
    titleMarginBottom: a ? 0 : c,
    titlePadding: a ? `${h}px ${m}px ${g}px` : 0,
    titleBorderBottom: a ? `${t}px ${l} ${u}` : "none",
    innerContentPadding: a ? `${d}px ${m}px` : 0
  });
}, Q1 = Sa("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: r
  } = e, n = sr(e, {
    popoverBg: t,
    popoverColor: r
  });
  return [V6(n), H6(n), A1(n, "zoom-big")];
}, B6, {
  resetStyle: !1,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var z6 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const J1 = ({
  title: e,
  content: t,
  prefixCls: r
}) => !e && !t ? null : /* @__PURE__ */ b.createElement(b.Fragment, null, e && /* @__PURE__ */ b.createElement("div", {
  className: `${r}-title`
}, e), t && /* @__PURE__ */ b.createElement("div", {
  className: `${r}-inner-content`
}, t)), W6 = (e) => {
  const {
    hashId: t,
    prefixCls: r,
    className: n,
    style: o,
    placement: a = "top",
    title: i,
    content: s,
    children: c
  } = e, l = bn(i), u = bn(s), d = De(t, r, `${r}-pure`, `${r}-placement-${a}`, n);
  return /* @__PURE__ */ b.createElement("div", {
    className: d,
    style: o
  }, /* @__PURE__ */ b.createElement("div", {
    className: `${r}-arrow`
  }), /* @__PURE__ */ b.createElement(_a, Object.assign({}, e, {
    className: t,
    prefixCls: r
  }), c || /* @__PURE__ */ b.createElement(J1, {
    prefixCls: r,
    title: l,
    content: u
  })));
}, U6 = (e) => {
  const {
    prefixCls: t,
    className: r
  } = e, n = z6(e, ["prefixCls", "className"]), {
    getPrefixCls: o
  } = b.useContext(Fr), a = o("popover", t), [i, s, c] = Q1(a);
  return i(/* @__PURE__ */ b.createElement(W6, Object.assign({}, n, {
    prefixCls: a,
    hashId: s,
    className: De(r, c)
  })));
}, G6 = U6;
var q6 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const X6 = /* @__PURE__ */ b.forwardRef((e, t) => {
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
    overlayStyle: g = {},
    styles: m,
    classNames: f
  } = e, y = q6(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle", "styles", "classNames"]), {
    getPrefixCls: p,
    className: C,
    style: w,
    classNames: S,
    styles: x
  } = ya("popover"), E = p("popover", o), [M, R, _] = Q1(E), O = p(), F = De(s, R, _, C, S.root, f == null ? void 0 : f.root), k = De(S.body, f == null ? void 0 : f.body), [A, $] = Fn(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), I = (U, H) => {
    $(U, !0), h == null || h(U, H);
  }, j = (U) => {
    U.keyCode === ae.ESC && I(!1, U);
  }, V = (U) => {
    I(U);
  }, B = bn(a), G = bn(i);
  return M(/* @__PURE__ */ b.createElement(Z1, Object.assign({
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
      root: Object.assign(Object.assign(Object.assign(Object.assign({}, x.root), w), g), m == null ? void 0 : m.root),
      body: Object.assign(Object.assign({}, x.body), m == null ? void 0 : m.body)
    },
    ref: t,
    open: A,
    onOpenChange: V,
    overlay: B || G ? /* @__PURE__ */ b.createElement(J1, {
      prefixCls: E,
      title: B,
      content: G
    }) : null,
    transitionName: R1(O, "zoom-big", y.transitionName),
    "data-popover-inject": !0
  }), C1(u, {
    onKeyDown: (U) => {
      var H, ee;
      /* @__PURE__ */ ss(u) && ((ee = u == null ? void 0 : (H = u.props).onKeyDown) === null || ee === void 0 || ee.call(H, U)), j(U);
    }
  })));
}), Oa = X6;
Oa._InternalPanelDoNotUseOrYouWillBeFired = G6;
process.env.NODE_ENV !== "production" && (Oa.displayName = "Popover");
const Y6 = Oa;
function ta(e, t, r) {
  return (e - t) / (r - t);
}
function Ta(e, t, r, n) {
  var o = ta(t, r, n), a = {};
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
}), K6 = /* @__PURE__ */ b.createContext({}), Z6 = ["prefixCls", "value", "valueIndex", "onStartMove", "onDelete", "style", "render", "dragging", "draggingDelete", "onOffsetChange", "onChangeComplete", "onFocus", "onMouseEnter"], ra = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.value, o = e.valueIndex, a = e.onStartMove, i = e.onDelete, s = e.style, c = e.render, l = e.dragging, u = e.draggingDelete, d = e.onOffsetChange, v = e.onChangeComplete, h = e.onFocus, g = e.onMouseEnter, m = ct(e, Z6), f = b.useContext(jt), y = f.min, p = f.max, C = f.direction, w = f.disabled, S = f.keyboard, x = f.range, E = f.tabIndex, M = f.ariaLabelForHandle, R = f.ariaLabelledByForHandle, _ = f.ariaRequired, O = f.ariaValueTextFormatterForHandle, F = f.styles, k = f.classNames, A = "".concat(r, "-handle"), $ = function(X) {
    w || a(X, o);
  }, I = function(X) {
    h == null || h(X, o);
  }, j = function(X) {
    g(X, o);
  }, V = function(X) {
    if (!w && S) {
      var z = null;
      switch (X.which || X.keyCode) {
        case ae.LEFT:
          z = C === "ltr" || C === "btt" ? -1 : 1;
          break;
        case ae.RIGHT:
          z = C === "ltr" || C === "btt" ? 1 : -1;
          break;
        case ae.UP:
          z = C !== "ttb" ? 1 : -1;
          break;
        case ae.DOWN:
          z = C !== "ttb" ? -1 : 1;
          break;
        case ae.HOME:
          z = "min";
          break;
        case ae.END:
          z = "max";
          break;
        case ae.PAGE_UP:
          z = 2;
          break;
        case ae.PAGE_DOWN:
          z = -2;
          break;
        case ae.BACKSPACE:
        case ae.DELETE:
          i == null || i(o);
          break;
      }
      z !== null && (X.preventDefault(), d(z, o));
    }
  }, B = function(X) {
    switch (X.which || X.keyCode) {
      case ae.LEFT:
      case ae.RIGHT:
      case ae.UP:
      case ae.DOWN:
      case ae.HOME:
      case ae.END:
      case ae.PAGE_UP:
      case ae.PAGE_DOWN:
        v == null || v();
        break;
    }
  }, G = Ta(C, n, y, p), U = {};
  if (o !== null) {
    var H;
    U = {
      tabIndex: w ? null : At(E, o),
      role: "slider",
      "aria-valuemin": y,
      "aria-valuemax": p,
      "aria-valuenow": n,
      "aria-disabled": w,
      "aria-label": At(M, o),
      "aria-labelledby": At(R, o),
      "aria-required": At(_, o),
      "aria-valuetext": (H = At(O, o)) === null || H === void 0 ? void 0 : H(n),
      "aria-orientation": C === "ltr" || C === "rtl" ? "horizontal" : "vertical",
      onMouseDown: $,
      onTouchStart: $,
      onFocus: I,
      onMouseEnter: j,
      onKeyDown: V,
      onKeyUp: B
    };
  }
  var ee = /* @__PURE__ */ b.createElement("div", D0({
    ref: t,
    className: De(A, T(T(T({}, "".concat(A, "-").concat(o + 1), o !== null && x), "".concat(A, "-dragging"), l), "".concat(A, "-dragging-delete"), u), k.handle),
    style: D(D(D({}, G), s), F.handle)
  }, U, m));
  return c && (ee = c(ee, {
    index: o,
    prefixCls: r,
    value: n,
    dragging: l,
    draggingDelete: u
  })), ee;
});
process.env.NODE_ENV !== "production" && (ra.displayName = "Handle");
var Q6 = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "activeHandleRender", "draggingIndex", "draggingDelete", "onFocus"], ec = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.onStartMove, a = e.onOffsetChange, i = e.values, s = e.handleRender, c = e.activeHandleRender, l = e.draggingIndex, u = e.draggingDelete, d = e.onFocus, v = ct(e, Q6), h = b.useRef({}), g = b.useState(!1), m = q(g, 2), f = m[0], y = m[1], p = b.useState(-1), C = q(p, 2), w = C[0], S = C[1], x = function(O) {
    S(O), y(!0);
  }, E = function(O, F) {
    x(F), d == null || d(O);
  }, M = function(O, F) {
    x(F);
  };
  b.useImperativeHandle(t, function() {
    return {
      focus: function(O) {
        var F;
        (F = h.current[O]) === null || F === void 0 || F.focus();
      },
      hideHelp: function() {
        fc(function() {
          y(!1);
        });
      }
    };
  });
  var R = D({
    prefixCls: r,
    onStartMove: o,
    onOffsetChange: a,
    render: s,
    onFocus: E,
    onMouseEnter: M
  }, v);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, i.map(function(_, O) {
    var F = l === O;
    return /* @__PURE__ */ b.createElement(ra, D0({
      ref: function(A) {
        A ? h.current[O] = A : delete h.current[O];
      },
      dragging: F,
      draggingDelete: F && u,
      style: At(n, O),
      key: O,
      value: _,
      valueIndex: O
    }, R));
  }), c && f && /* @__PURE__ */ b.createElement(ra, D0({
    key: "a11y"
  }, R, {
    value: i[w],
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
process.env.NODE_ENV !== "production" && (ec.displayName = "Handles");
var J6 = function(t) {
  var r = t.prefixCls, n = t.style, o = t.children, a = t.value, i = t.onClick, s = b.useContext(jt), c = s.min, l = s.max, u = s.direction, d = s.includedStart, v = s.includedEnd, h = s.included, g = "".concat(r, "-text"), m = Ta(u, a, c, l);
  return /* @__PURE__ */ b.createElement("span", {
    className: De(g, T({}, "".concat(g, "-active"), h && d <= a && a <= v)),
    style: D(D({}, m), n),
    onMouseDown: function(y) {
      y.stopPropagation();
    },
    onClick: function() {
      i(a);
    }
  }, o);
}, e4 = function(t) {
  var r = t.prefixCls, n = t.marks, o = t.onClick, a = "".concat(r, "-mark");
  return n.length ? /* @__PURE__ */ b.createElement("div", {
    className: a
  }, n.map(function(i) {
    var s = i.value, c = i.style, l = i.label;
    return /* @__PURE__ */ b.createElement(J6, {
      key: s,
      prefixCls: a,
      style: c,
      value: s,
      onClick: o
    }, l);
  })) : null;
}, t4 = function(t) {
  var r = t.prefixCls, n = t.value, o = t.style, a = t.activeStyle, i = b.useContext(jt), s = i.min, c = i.max, l = i.direction, u = i.included, d = i.includedStart, v = i.includedEnd, h = "".concat(r, "-dot"), g = u && d <= n && n <= v, m = D(D({}, Ta(l, n, s, c)), typeof o == "function" ? o(n) : o);
  return g && (m = D(D({}, m), typeof a == "function" ? a(n) : a)), /* @__PURE__ */ b.createElement("span", {
    className: De(h, T({}, "".concat(h, "-active"), g)),
    style: m
  });
}, r4 = function(t) {
  var r = t.prefixCls, n = t.marks, o = t.dots, a = t.style, i = t.activeStyle, s = b.useContext(jt), c = s.min, l = s.max, u = s.step, d = b.useMemo(function() {
    var v = /* @__PURE__ */ new Set();
    if (n.forEach(function(g) {
      v.add(g.value);
    }), o && u !== null)
      for (var h = c; h <= l; )
        v.add(h), h += u;
    return Array.from(v);
  }, [c, l, u, o, n]);
  return /* @__PURE__ */ b.createElement("div", {
    className: "".concat(r, "-step")
  }, d.map(function(v) {
    return /* @__PURE__ */ b.createElement(t4, {
      prefixCls: r,
      key: v,
      value: v,
      style: a,
      activeStyle: i
    });
  }));
}, rs = function(t) {
  var r = t.prefixCls, n = t.style, o = t.start, a = t.end, i = t.index, s = t.onStartMove, c = t.replaceCls, l = b.useContext(jt), u = l.direction, d = l.min, v = l.max, h = l.disabled, g = l.range, m = l.classNames, f = "".concat(r, "-track"), y = ta(o, d, v), p = ta(a, d, v), C = function(E) {
    !h && s && s(E, -1);
  }, w = {};
  switch (u) {
    case "rtl":
      w.right = "".concat(y * 100, "%"), w.width = "".concat(p * 100 - y * 100, "%");
      break;
    case "btt":
      w.bottom = "".concat(y * 100, "%"), w.height = "".concat(p * 100 - y * 100, "%");
      break;
    case "ttb":
      w.top = "".concat(y * 100, "%"), w.height = "".concat(p * 100 - y * 100, "%");
      break;
    default:
      w.left = "".concat(y * 100, "%"), w.width = "".concat(p * 100 - y * 100, "%");
  }
  var S = c || De(f, T(T({}, "".concat(f, "-").concat(i + 1), i !== null && g), "".concat(r, "-track-draggable"), s), m.track);
  return /* @__PURE__ */ b.createElement("div", {
    className: S,
    style: D(D({}, w), n),
    onMouseDown: C,
    onTouchStart: C
  });
}, n4 = function(t) {
  var r = t.prefixCls, n = t.style, o = t.values, a = t.startPoint, i = t.onStartMove, s = b.useContext(jt), c = s.included, l = s.range, u = s.min, d = s.styles, v = s.classNames, h = b.useMemo(function() {
    if (!l) {
      if (o.length === 0)
        return [];
      var m = a ?? u, f = o[0];
      return [{
        start: Math.min(m, f),
        end: Math.max(m, f)
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
  var g = h != null && h.length && (v.tracks || d.tracks) ? /* @__PURE__ */ b.createElement(rs, {
    index: null,
    prefixCls: r,
    start: h[0].start,
    end: h[h.length - 1].end,
    replaceCls: De(v.tracks, "".concat(r, "-tracks")),
    style: d.tracks
  }) : null;
  return /* @__PURE__ */ b.createElement(b.Fragment, null, g, h.map(function(m, f) {
    var y = m.start, p = m.end;
    return /* @__PURE__ */ b.createElement(rs, {
      index: f,
      prefixCls: r,
      style: D(D({}, At(n, f)), d.track),
      start: y,
      end: p,
      key: f,
      onStartMove: i
    });
  }));
}, o4 = 130;
function ns(e) {
  var t = "targetTouches" in e ? e.targetTouches[0] : e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function a4(e, t, r, n, o, a, i, s, c, l, u) {
  var d = b.useState(null), v = q(d, 2), h = v[0], g = v[1], m = b.useState(-1), f = q(m, 2), y = f[0], p = f[1], C = b.useState(!1), w = q(C, 2), S = w[0], x = w[1], E = b.useState(r), M = q(E, 2), R = M[0], _ = M[1], O = b.useState(r), F = q(O, 2), k = F[0], A = F[1], $ = b.useRef(null), I = b.useRef(null), j = b.useRef(null), V = b.useContext(K6), B = V.onDragStart, G = V.onDragChange;
  N0(function() {
    y === -1 && _(r);
  }, [r, y]), b.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", $.current), document.removeEventListener("mouseup", I.current), j.current && (j.current.removeEventListener("touchmove", $.current), j.current.removeEventListener("touchend", I.current));
    };
  }, []);
  var U = function(z, te, re) {
    te !== void 0 && g(te), _(z);
    var ce = z;
    re && (ce = z.filter(function(ne, oe) {
      return oe !== y;
    })), i(ce), G && G({
      rawValues: z,
      deleteIndex: re ? y : -1,
      draggingIndex: y,
      draggingValue: te
    });
  }, H = R0(function(X, z, te) {
    if (X === -1) {
      var re = k[0], ce = k[k.length - 1], ne = n - re, oe = o - ce, me = z * (o - n);
      me = Math.max(me, ne), me = Math.min(me, oe);
      var Ee = a(re + me);
      me = Ee - re;
      var L = k.map(function(Ce) {
        return Ce + me;
      });
      U(L);
    } else {
      var fe = (o - n) * z, de = ve(R);
      de[X] = k[X];
      var ie = c(de, fe, X, "dist");
      U(ie.values, ie.value, te);
    }
  }), ee = function(z, te, re) {
    z.stopPropagation();
    var ce = re || r, ne = ce[te];
    p(te), g(ne), A(ce), _(ce), x(!1);
    var oe = ns(z), me = oe.pageX, Ee = oe.pageY, L = !1;
    B && B({
      rawValues: ce,
      draggingIndex: te,
      draggingValue: ne
    });
    var fe = function(Ce) {
      Ce.preventDefault();
      var he = ns(Ce), Ye = he.pageX, Z = he.pageY, le = Ye - me, ge = Z - Ee, J = e.current.getBoundingClientRect(), Re = J.width, Me = J.height, We, $e;
      switch (t) {
        case "btt":
          We = -ge / Me, $e = le;
          break;
        case "ttb":
          We = ge / Me, $e = le;
          break;
        case "rtl":
          We = -le / Re, $e = ge;
          break;
        default:
          We = le / Re, $e = ge;
      }
      L = l ? Math.abs($e) > o4 && u < R.length : !1, x(L), H(te, We, L);
    }, de = function ie(Ce) {
      Ce.preventDefault(), document.removeEventListener("mouseup", ie), document.removeEventListener("mousemove", fe), j.current && (j.current.removeEventListener("touchmove", $.current), j.current.removeEventListener("touchend", I.current)), $.current = null, I.current = null, j.current = null, s(L), p(-1), x(!1);
    };
    document.addEventListener("mouseup", de), document.addEventListener("mousemove", fe), z.currentTarget.addEventListener("touchend", de), z.currentTarget.addEventListener("touchmove", fe), $.current = fe, I.current = de, j.current = z.currentTarget;
  }, K = b.useMemo(function() {
    var X = ve(r).sort(function(ne, oe) {
      return ne - oe;
    }), z = ve(R).sort(function(ne, oe) {
      return ne - oe;
    }), te = {};
    z.forEach(function(ne) {
      te[ne] = (te[ne] || 0) + 1;
    }), X.forEach(function(ne) {
      te[ne] = (te[ne] || 0) - 1;
    });
    var re = l ? 1 : 0, ce = Object.values(te).reduce(function(ne, oe) {
      return ne + Math.abs(oe);
    }, 0);
    return ce <= re ? R : r;
  }, [r, R, l]);
  return [y, h, S, K, ee];
}
function i4(e, t, r, n, o, a) {
  var i = b.useCallback(function(h) {
    return Math.max(e, Math.min(t, h));
  }, [e, t]), s = b.useCallback(function(h) {
    if (r !== null) {
      var g = e + Math.round((i(h) - e) / r) * r, m = function(C) {
        return (String(C).split(".")[1] || "").length;
      }, f = Math.max(m(r), m(t), m(e)), y = Number(g.toFixed(f));
      return e <= y && y <= t ? y : null;
    }
    return null;
  }, [r, e, t, i]), c = b.useCallback(function(h) {
    var g = i(h), m = n.map(function(p) {
      return p.value;
    });
    r !== null && m.push(s(h)), m.push(e, t);
    var f = m[0], y = t - e;
    return m.forEach(function(p) {
      var C = Math.abs(g - p);
      C <= y && (f = p, y = C);
    }), f;
  }, [e, t, n, r, i, s]), l = function h(g, m, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof m == "number") {
      var p, C = g[f], w = C + m, S = [];
      n.forEach(function(_) {
        S.push(_.value);
      }), S.push(e, t), S.push(s(C));
      var x = m > 0 ? 1 : -1;
      y === "unit" ? S.push(s(C + x * r)) : S.push(s(w)), S = S.filter(function(_) {
        return _ !== null;
      }).filter(function(_) {
        return m < 0 ? _ <= C : _ >= C;
      }), y === "unit" && (S = S.filter(function(_) {
        return _ !== C;
      }));
      var E = y === "unit" ? C : w;
      p = S[0];
      var M = Math.abs(p - E);
      if (S.forEach(function(_) {
        var O = Math.abs(_ - E);
        O < M && (p = _, M = O);
      }), p === void 0)
        return m < 0 ? e : t;
      if (y === "dist")
        return p;
      if (Math.abs(m) > 1) {
        var R = ve(g);
        return R[f] = p, h(R, m - x, f, y);
      }
      return p;
    } else {
      if (m === "min")
        return e;
      if (m === "max")
        return t;
    }
  }, u = function(g, m, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = g[f], C = l(g, m, f, y);
    return {
      value: C,
      changed: C !== p
    };
  }, d = function(g) {
    return a === null && g === 0 || typeof a == "number" && g < a;
  }, v = function(g, m, f) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = g.map(c), C = p[f], w = l(p, m, f, y);
    if (p[f] = w, o === !1) {
      var S = a || 0;
      f > 0 && p[f - 1] !== C && (p[f] = Math.max(p[f], p[f - 1] + S)), f < p.length - 1 && p[f + 1] !== C && (p[f] = Math.min(p[f], p[f + 1] - S));
    } else if (typeof a == "number" || a === null) {
      for (var x = f + 1; x < p.length; x += 1)
        for (var E = !0; d(p[x] - p[x - 1]) && E; ) {
          var M = u(p, 1, x);
          p[x] = M.value, E = M.changed;
        }
      for (var R = f; R > 0; R -= 1)
        for (var _ = !0; d(p[R] - p[R - 1]) && _; ) {
          var O = u(p, -1, R - 1);
          p[R - 1] = O.value, _ = O.changed;
        }
      for (var F = p.length - 1; F > 0; F -= 1)
        for (var k = !0; d(p[F] - p[F - 1]) && k; ) {
          var A = u(p, -1, F - 1);
          p[F - 1] = A.value, k = A.changed;
        }
      for (var $ = 0; $ < p.length - 1; $ += 1)
        for (var I = !0; d(p[$ + 1] - p[$]) && I; ) {
          var j = u(p, 1, $ + 1);
          p[$ + 1] = j.value, I = j.changed;
        }
    }
    return {
      value: p[f],
      values: p
    };
  };
  return [c, v];
}
function s4(e) {
  return Q0(function() {
    if (e === !0 || !e)
      return [!!e, !1, !1, 0];
    var t = e.editable, r = e.draggableTrack, n = e.minCount, o = e.maxCount;
    return process.env.NODE_ENV !== "production" && $t(!t || !r, "`editable` can not work with `draggableTrack`."), [!0, t, !t && r, n || 0, o];
  }, [e]);
}
var tc = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-slider" : r, o = e.className, a = e.style, i = e.classNames, s = e.styles, c = e.id, l = e.disabled, u = l === void 0 ? !1 : l, d = e.keyboard, v = d === void 0 ? !0 : d, h = e.autoFocus, g = e.onFocus, m = e.onBlur, f = e.min, y = f === void 0 ? 0 : f, p = e.max, C = p === void 0 ? 100 : p, w = e.step, S = w === void 0 ? 1 : w, x = e.value, E = e.defaultValue, M = e.range, R = e.count, _ = e.onChange, O = e.onBeforeChange, F = e.onAfterChange, k = e.onChangeComplete, A = e.allowCross, $ = A === void 0 ? !0 : A, I = e.pushable, j = I === void 0 ? !1 : I, V = e.reverse, B = e.vertical, G = e.included, U = G === void 0 ? !0 : G, H = e.startPoint, ee = e.trackStyle, K = e.handleStyle, X = e.railStyle, z = e.dotStyle, te = e.activeDotStyle, re = e.marks, ce = e.dots, ne = e.handleRender, oe = e.activeHandleRender, me = e.track, Ee = e.tabIndex, L = Ee === void 0 ? 0 : Ee, fe = e.ariaLabelForHandle, de = e.ariaLabelledByForHandle, ie = e.ariaRequired, Ce = e.ariaValueTextFormatterForHandle, he = b.useRef(null), Ye = b.useRef(null), Z = b.useMemo(function() {
    return B ? V ? "ttb" : "btt" : V ? "rtl" : "ltr";
  }, [V, B]), le = s4(M), ge = q(le, 5), J = ge[0], Re = ge[1], Me = ge[2], We = ge[3], $e = ge[4], Ne = b.useMemo(function() {
    return isFinite(y) ? y : 0;
  }, [y]), r0 = b.useMemo(function() {
    return isFinite(C) ? C : 100;
  }, [C]), _e = b.useMemo(function() {
    return S !== null && S <= 0 ? 1 : S;
  }, [S]), be = b.useMemo(function() {
    return typeof j == "boolean" ? j ? _e : !1 : j >= 0 ? j : !1;
  }, [j, _e]), Be = b.useMemo(function() {
    return Object.keys(re || {}).map(function(Ae) {
      var ue = re[Ae], je = {
        value: Number(Ae)
      };
      return ue && Pe(ue) === "object" && !/* @__PURE__ */ b.isValidElement(ue) && ("label" in ue || "style" in ue) ? (je.style = ue.style, je.label = ue.label) : je.label = ue, je;
    }).filter(function(Ae) {
      var ue = Ae.label;
      return ue || typeof ue == "number";
    }).sort(function(Ae, ue) {
      return Ae.value - ue.value;
    });
  }, [re]), Ke = i4(Ne, r0, _e, Be, $, be), l0 = q(Ke, 2), u0 = l0[0], o0 = l0[1], f0 = Fn(E, {
    value: x
  }), w0 = q(f0, 2), v0 = w0[0], b0 = w0[1], Ze = b.useMemo(function() {
    var Ae = v0 == null ? [] : Array.isArray(v0) ? v0 : [v0], ue = q(Ae, 1), je = ue[0], e0 = je === void 0 ? Ne : je, m0 = v0 === null ? [] : [e0];
    if (J) {
      if (m0 = ve(Ae), R || v0 === void 0) {
        var B0 = R >= 0 ? R + 1 : 2;
        for (m0 = m0.slice(0, B0); m0.length < B0; ) {
          var I0;
          m0.push((I0 = m0[m0.length - 1]) !== null && I0 !== void 0 ? I0 : Ne);
        }
      }
      m0.sort(function(O0, T0) {
        return O0 - T0;
      });
    }
    return m0.forEach(function(O0, T0) {
      m0[T0] = u0(O0);
    }), m0;
  }, [v0, J, Ne, R, u0]), Qe = function(ue) {
    return J ? ue : ue[0];
  }, i0 = R0(function(Ae) {
    var ue = ve(Ae).sort(function(je, e0) {
      return je - e0;
    });
    _ && !yo(ue, Ze, !0) && _(Qe(ue)), b0(ue);
  }), h0 = R0(function(Ae) {
    Ae && he.current.hideHelp();
    var ue = Qe(Ze);
    F == null || F(ue), a0(!F, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), k == null || k(ue);
  }), n0 = function(ue) {
    if (!(u || !Re || Ze.length <= We)) {
      var je = ve(Ze);
      je.splice(ue, 1), O == null || O(Qe(je)), i0(je);
      var e0 = Math.max(0, ue - 1);
      he.current.hideHelp(), he.current.focus(e0);
    }
  }, q0 = a4(Ye, Z, Ze, Ne, r0, u0, i0, h0, o0, Re, We), s0 = q(q0, 5), ze = s0[0], Ue = s0[1], L0 = s0[2], $0 = s0[3], F0 = s0[4], vt = function(ue, je) {
    if (!u) {
      var e0 = ve(Ze), m0 = 0, B0 = 0, I0 = r0 - Ne;
      Ze.forEach(function(V0, nt) {
        var H0 = Math.abs(ue - V0);
        H0 <= I0 && (I0 = H0, m0 = nt), V0 < ue && (B0 = nt);
      });
      var O0 = m0;
      Re && I0 !== 0 && (!$e || Ze.length < $e) ? (e0.splice(B0 + 1, 0, ue), O0 = B0 + 1) : e0[m0] = ue, J && !Ze.length && R === void 0 && e0.push(ue);
      var T0 = Qe(e0);
      if (O == null || O(T0), i0(e0), je) {
        var z0, j0;
        (z0 = document.activeElement) === null || z0 === void 0 || (j0 = z0.blur) === null || j0 === void 0 || j0.call(z0), he.current.focus(O0), F0(je, O0, e0);
      } else
        F == null || F(T0), a0(!F, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), k == null || k(T0);
    }
  }, ht = function(ue) {
    ue.preventDefault();
    var je = Ye.current.getBoundingClientRect(), e0 = je.width, m0 = je.height, B0 = je.left, I0 = je.top, O0 = je.bottom, T0 = je.right, z0 = ue.clientX, j0 = ue.clientY, V0;
    switch (Z) {
      case "btt":
        V0 = (O0 - j0) / m0;
        break;
      case "ttb":
        V0 = (j0 - I0) / m0;
        break;
      case "rtl":
        V0 = (T0 - z0) / e0;
        break;
      default:
        V0 = (z0 - B0) / e0;
    }
    var nt = Ne + V0 * (r0 - Ne);
    vt(u0(nt), ue);
  }, rt = b.useState(null), P = q(rt, 2), W = P[0], Q = P[1], pe = function(ue, je) {
    if (!u) {
      var e0 = o0(Ze, ue, je);
      O == null || O(Qe(Ze)), i0(e0.values), Q(e0.value);
    }
  };
  b.useEffect(function() {
    if (W !== null) {
      var Ae = Ze.indexOf(W);
      Ae >= 0 && he.current.focus(Ae);
    }
    Q(null);
  }, [W]);
  var Fe = b.useMemo(function() {
    return Me && _e === null ? (process.env.NODE_ENV !== "production" && a0(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : Me;
  }, [Me, _e]), Ie = R0(function(Ae, ue) {
    F0(Ae, ue), O == null || O(Qe(Ze));
  }), xe = ze !== -1;
  b.useEffect(function() {
    if (!xe) {
      var Ae = Ze.lastIndexOf(Ue);
      he.current.focus(Ae);
    }
  }, [xe]);
  var Se = b.useMemo(function() {
    return ve($0).sort(function(Ae, ue) {
      return Ae - ue;
    });
  }, [$0]), c0 = b.useMemo(function() {
    return J ? [Se[0], Se[Se.length - 1]] : [Ne, Se[0]];
  }, [Se, J, Ne]), He = q(c0, 2), Je = He[0], Ge = He[1];
  b.useImperativeHandle(t, function() {
    return {
      focus: function() {
        he.current.focus(0);
      },
      blur: function() {
        var ue, je = document, e0 = je.activeElement;
        (ue = Ye.current) !== null && ue !== void 0 && ue.contains(e0) && (e0 == null || e0.blur());
      }
    };
  }), b.useEffect(function() {
    h && he.current.focus(0);
  }, []);
  var k0 = b.useMemo(function() {
    return {
      min: Ne,
      max: r0,
      direction: Z,
      disabled: u,
      keyboard: v,
      step: _e,
      included: U,
      includedStart: Je,
      includedEnd: Ge,
      range: J,
      tabIndex: L,
      ariaLabelForHandle: fe,
      ariaLabelledByForHandle: de,
      ariaRequired: ie,
      ariaValueTextFormatterForHandle: Ce,
      styles: s || {},
      classNames: i || {}
    };
  }, [Ne, r0, Z, u, v, _e, U, Je, Ge, J, L, fe, de, ie, Ce, s, i]);
  return /* @__PURE__ */ b.createElement(jt.Provider, {
    value: k0
  }, /* @__PURE__ */ b.createElement("div", {
    ref: Ye,
    className: De(n, o, T(T(T(T({}, "".concat(n, "-disabled"), u), "".concat(n, "-vertical"), B), "".concat(n, "-horizontal"), !B), "".concat(n, "-with-marks"), Be.length)),
    style: a,
    onMouseDown: ht,
    id: c
  }, /* @__PURE__ */ b.createElement("div", {
    className: De("".concat(n, "-rail"), i == null ? void 0 : i.rail),
    style: D(D({}, X), s == null ? void 0 : s.rail)
  }), me !== !1 && /* @__PURE__ */ b.createElement(n4, {
    prefixCls: n,
    style: ee,
    values: Ze,
    startPoint: H,
    onStartMove: Fe ? Ie : void 0
  }), /* @__PURE__ */ b.createElement(r4, {
    prefixCls: n,
    marks: Be,
    dots: ce,
    style: z,
    activeStyle: te
  }), /* @__PURE__ */ b.createElement(ec, {
    ref: he,
    prefixCls: n,
    style: K,
    values: $0,
    draggingIndex: ze,
    draggingDelete: L0,
    onStartMove: Ie,
    onOffsetChange: pe,
    onFocus: g,
    onBlur: m,
    handleRender: ne,
    activeHandleRender: oe,
    onChangeComplete: h0,
    onDelete: Re ? n0 : void 0
  }), /* @__PURE__ */ b.createElement(e4, {
    prefixCls: n,
    marks: Be,
    onClick: vt
  })));
});
process.env.NODE_ENV !== "production" && (tc.displayName = "Slider");
const c4 = /* @__PURE__ */ cc({}), l4 = c4, rc = /* @__PURE__ */ b.forwardRef((e, t) => {
  const {
    open: r,
    draggingDelete: n,
    value: o
  } = e, a = Y(null), i = r && !n, s = Y(null);
  function c() {
    Ct.cancel(s.current), s.current = null;
  }
  function l() {
    s.current = Ct(() => {
      var u;
      (u = a.current) === null || u === void 0 || u.forceAlign(), s.current = null;
    });
  }
  return b.useEffect(() => (i ? l() : c(), c), [i, e.title, o]), /* @__PURE__ */ b.createElement(Z1, Object.assign({
    ref: sa(a, t)
  }, e, {
    open: i
  }));
});
process.env.NODE_ENV !== "production" && (rc.displayName = "SliderTooltip");
const os = rc, u4 = (e) => {
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
    handleLineWidth: g,
    handleLineWidthHover: m,
    motionDurationMid: f
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Ca(e)), {
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
          boxShadow: `0 0 0 ${C0(g)} ${e.colorPrimaryBorderHover}`
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
          insetInlineStart: l(g).mul(-1).equal(),
          insetBlockStart: l(g).mul(-1).equal(),
          width: l(u).add(l(g).mul(2)).equal(),
          height: l(u).add(l(g).mul(2)).equal(),
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
          boxShadow: `0 0 0 ${C0(g)} ${e.handleColor}`,
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
            insetInlineStart: l(d).sub(u).div(2).add(m).mul(-1).equal(),
            insetBlockStart: l(d).sub(u).div(2).add(m).mul(-1).equal(),
            width: l(d).add(l(m).mul(2)).equal(),
            height: l(d).add(l(m).mul(2)).equal()
          },
          "&::after": {
            boxShadow: `0 0 0 ${C0(m)} ${v}`,
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
        border: `${C0(g)} solid ${e.dotBorderColor}`,
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
          boxShadow: `0 0 0 ${C0(g)} ${c}`,
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
}, nc = (e, t) => {
  const {
    componentCls: r,
    railSize: n,
    handleSize: o,
    dotSize: a,
    marginFull: i,
    calc: s
  } = e, c = t ? "paddingBlock" : "paddingInline", l = t ? "width" : "height", u = t ? "height" : "width", d = t ? "insetBlockStart" : "insetInlineStart", v = t ? "top" : "insetInlineStart", h = s(n).mul(3).sub(o).div(2).equal(), g = s(o).sub(n).div(2).equal(), m = t ? {
    borderWidth: `${C0(g)} 0`,
    transform: `translateY(${C0(s(g).mul(-1).equal())})`
  } : {
    borderWidth: `0 ${C0(g)}`,
    transform: `translateX(${C0(e.calc(g).mul(-1).equal())})`
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
    [`${r}-track-draggable`]: Object.assign({}, m),
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
}, f4 = (e) => {
  const {
    componentCls: t,
    marginPartWithMark: r
  } = e;
  return {
    [`${t}-horizontal`]: Object.assign(Object.assign({}, nc(e, !0)), {
      [`&${t}-with-marks`]: {
        marginBottom: r
      }
    })
  };
}, d4 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-vertical`]: Object.assign(Object.assign({}, nc(e, !1)), {
      height: "100%"
    })
  };
}, v4 = (e) => {
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
}, h4 = Sa("Slider", (e) => {
  const t = sr(e, {
    marginPart: e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),
    marginFull: e.calc(e.controlSize).div(2).equal(),
    marginPartWithMark: e.calc(e.controlHeightLG).sub(e.controlSize).equal()
  });
  return [u4(t), f4(t), d4(t)];
}, v4);
function so() {
  const [e, t] = b.useState(!1), r = b.useRef(null), n = () => {
    Ct.cancel(r.current);
  }, o = (a) => {
    n(), a ? t(a) : r.current = Ct(() => {
      t(a);
    });
  };
  return b.useEffect(() => n, []), [e, o];
}
var m4 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function g4(e, t) {
  return e || e === null ? e : t || t === null ? t : (r) => typeof r == "number" ? r.toString() : "";
}
const oc = /* @__PURE__ */ ye.forwardRef((e, t) => {
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
    onChangeComplete: g,
    classNames: m,
    styles: f
  } = e, y = m4(e, ["prefixCls", "range", "className", "rootClassName", "style", "disabled", "tooltipPrefixCls", "tipFormatter", "tooltipVisible", "getTooltipPopupContainer", "tooltipPlacement", "tooltip", "onChangeComplete", "classNames", "styles"]), {
    vertical: p
  } = e, {
    getPrefixCls: C,
    direction: w,
    className: S,
    style: x,
    classNames: E,
    styles: M,
    getPopupContainer: R
  } = ya("slider"), _ = ye.useContext(_2), O = s ?? _, {
    handleRender: F,
    direction: k
  } = ye.useContext(l4), $ = (k || w) === "rtl", [I, j] = so(), [V, B] = so(), G = Object.assign({}, h), {
    open: U,
    placement: H,
    getPopupContainer: ee,
    prefixCls: K,
    formatter: X
  } = G, z = U ?? u, te = (I || V) && z !== !1, re = g4(X, l), [ce, ne] = so(), oe = (J) => {
    g == null || g(J), ne(!1);
  }, me = (J, Re) => J || (Re ? $ ? "left" : "right" : "top"), Ee = C("slider", r), [L, fe, de] = h4(Ee), ie = De(o, S, E.root, m == null ? void 0 : m.root, a, {
    [`${Ee}-rtl`]: $,
    [`${Ee}-lock`]: ce
  }, fe, de);
  if ($ && !y.vertical && (y.reverse = !y.reverse), process.env.NODE_ENV !== "production") {
    const J = pa("Slider");
    [["tooltipPrefixCls", "prefixCls"], ["getTooltipPopupContainer", "getPopupContainer"], ["tipFormatter", "formatter"], ["tooltipPlacement", "placement"], ["tooltipVisible", "open"]].forEach(([Re, Me]) => {
      J.deprecated(!(Re in e), Re, `tooltip.${Me}`);
    });
  }
  ye.useEffect(() => {
    const J = () => {
      Ct(() => {
        B(!1);
      }, 1);
    };
    return document.addEventListener("mouseup", J), () => {
      document.removeEventListener("mouseup", J);
    };
  }, []);
  const Ce = n && !z, he = F || ((J, Re) => {
    const {
      index: Me
    } = Re, We = J.props;
    function $e(be, Be, Ke) {
      var l0, u0, o0, f0;
      Ke && ((u0 = (l0 = y)[be]) === null || u0 === void 0 || u0.call(l0, Be)), (f0 = (o0 = We)[be]) === null || f0 === void 0 || f0.call(o0, Be);
    }
    const Ne = Object.assign(Object.assign({}, We), {
      onMouseEnter: (be) => {
        j(!0), $e("onMouseEnter", be);
      },
      onMouseLeave: (be) => {
        j(!1), $e("onMouseLeave", be);
      },
      onMouseDown: (be) => {
        B(!0), ne(!0), $e("onMouseDown", be);
      },
      onFocus: (be) => {
        var Be;
        B(!0), (Be = y.onFocus) === null || Be === void 0 || Be.call(y, be), $e("onFocus", be, !0);
      },
      onBlur: (be) => {
        var Be;
        B(!1), (Be = y.onBlur) === null || Be === void 0 || Be.call(y, be), $e("onBlur", be, !0);
      }
    }), r0 = /* @__PURE__ */ ye.cloneElement(J, Ne), _e = (!!z || te) && re !== null;
    return Ce ? r0 : /* @__PURE__ */ ye.createElement(os, Object.assign({}, G, {
      prefixCls: C("tooltip", K ?? c),
      title: re ? re(Re.value) : "",
      value: Re.value,
      open: _e,
      placement: me(H ?? v, p),
      key: Me,
      classNames: {
        root: `${Ee}-tooltip`
      },
      getPopupContainer: ee || d || R
    }), r0);
  }), Ye = Ce ? (J, Re) => {
    const Me = /* @__PURE__ */ ye.cloneElement(J, {
      style: Object.assign(Object.assign({}, J.props.style), {
        visibility: "hidden"
      })
    });
    return /* @__PURE__ */ ye.createElement(os, Object.assign({}, G, {
      prefixCls: C("tooltip", K ?? c),
      title: re ? re(Re.value) : "",
      open: re !== null && te,
      placement: me(H ?? v, p),
      key: "tooltip",
      classNames: {
        root: `${Ee}-tooltip`
      },
      getPopupContainer: ee || d || R,
      draggingDelete: Re.draggingDelete
    }), Me);
  } : void 0, Z = Object.assign(Object.assign(Object.assign(Object.assign({}, M.root), x), f == null ? void 0 : f.root), i), le = Object.assign(Object.assign({}, M.tracks), f == null ? void 0 : f.tracks), ge = De(E.tracks, m == null ? void 0 : m.tracks);
  return L(
    // @ts-ignore
    /* @__PURE__ */ ye.createElement(tc, Object.assign({}, y, {
      classNames: Object.assign({
        handle: De(E.handle, m == null ? void 0 : m.handle),
        rail: De(E.rail, m == null ? void 0 : m.rail),
        track: De(E.track, m == null ? void 0 : m.track)
      }, ge ? {
        tracks: ge
      } : {}),
      styles: Object.assign({
        handle: Object.assign(Object.assign({}, M.handle), f == null ? void 0 : f.handle),
        rail: Object.assign(Object.assign({}, M.rail), f == null ? void 0 : f.rail),
        track: Object.assign(Object.assign({}, M.track), f == null ? void 0 : f.track)
      }, Object.keys(le).length ? {
        tracks: le
      } : {}),
      step: y.step,
      range: n,
      className: ie,
      style: Z,
      disabled: O,
      ref: t,
      prefixCls: Ee,
      handleRender: he,
      activeHandleRender: Ye,
      onChangeComplete: oe
    }))
  );
});
process.env.NODE_ENV !== "production" && (oc.displayName = "Slider");
const p4 = oc, y4 = ["0.5", "1.0", "2.0", "4.0", "8.0"];
function b4({ value: e, onChange: t, speeds: r = y4 }) {
  return /* @__PURE__ */ Te.jsx("div", { children: r.map((n) => /* @__PURE__ */ Te.jsxs(
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
function C4({ isPaused: e, onPlay: t, onStop: r }) {
  return /* @__PURE__ */ Te.jsx("div", { className: "playOrStop", children: e ? /* @__PURE__ */ Te.jsx("i", { className: "iconfont cursor", onClick: t, children: "" }) : /* @__PURE__ */ Te.jsx("i", { className: "iconfont cursor", onClick: r, children: "" }) });
}
function W4(e) {
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
    onIndexChange: g,
    onPlay: m,
    onStop: f,
    onSpeedChange: y,
    timestamp: p,
    formatTimestamp: C,
    speeds: w
  } = e, S = Math.max(0, (Number(r) || 0) - 1), x = Number.isFinite(Number(n)) ? Number(n) : 0, E = h ?? "1.0", M = !!v, R = Q0(() => p == null ? "" : typeof C == "function" ? C(p) : String(p), [p, C]), [_, O] = Cn(M);
  return ke(() => O(M), [M]), /* @__PURE__ */ Te.jsxs("div", { style: l, children: [
    /* @__PURE__ */ Te.jsx("div", { className: "colDate", children: t }),
    /* @__PURE__ */ Te.jsxs("div", { className: "playContent", style: u, children: [
      /* @__PURE__ */ Te.jsx(p4, { defaultValue: 0, value: x, onChange: g, max: S }),
      /* @__PURE__ */ Te.jsxs("div", { className: "playControl", children: [
        /* @__PURE__ */ Te.jsxs("div", { className: "playLeftContent", children: [
          o ? /* @__PURE__ */ Te.jsx(
            C4,
            {
              isPaused: _,
              onPlay: () => {
                O(!1), m == null || m();
              },
              onStop: () => {
                O(!0), f == null || f();
              }
            }
          ) : null,
          /* @__PURE__ */ Te.jsx("div", { className: "playStamp", children: R })
        ] }),
        a || i ? /* @__PURE__ */ Te.jsxs("div", { className: "playRightContent", children: [
          a ? /* @__PURE__ */ Te.jsx("div", { className: "playSpeed cursor", children: /* @__PURE__ */ Te.jsx(
            Y6,
            {
              color: "#202327",
              className: "set-popover",
              placement: "top",
              content: /* @__PURE__ */ Te.jsx(b4, { value: E, onChange: y, speeds: w }),
              children: /* @__PURE__ */ Te.jsx(Te.Fragment, { children: E === "1.0" ? s : `${E}X` })
            }
          ) }) : null,
          i ? /* @__PURE__ */ Te.jsx("div", { className: "playHistoryData cursor", onClick: d, children: c }) : null
        ] }) : null
      ] })
    ] })
  ] });
}
const S4 = 64, w4 = 64, E4 = 13.005589453473025, x4 = [
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
  width: S4,
  height: w4,
  max_val: E4,
  data: x4
};
function pr(e, t) {
  return e[1] + 0.5 * t * (e[2] - e[0] + t * (2 * e[0] - 5 * e[1] + 4 * e[2] - e[3] + t * (3 * (e[1] - e[2]) + e[3] - e[0])));
}
function P4(e, t, r) {
  const n = new Array(4);
  return n[0] = pr(e[0], r), n[1] = pr(e[1], r), n[2] = pr(e[2], r), n[3] = pr(e[3], r), pr(n, t);
}
function as(e, t = 4) {
  const r = e.length, n = e[0].length, o = r * t, a = n * t, i = new Float32Array(a * o), s = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  for (let c = 0; c < o; c++)
    for (let l = 0; l < a; l++) {
      const u = l / t, d = c / t, v = Math.floor(u), h = Math.floor(d), g = u - v, m = d - h;
      for (let y = -1; y <= 2; y++)
        for (let p = -1; p <= 2; p++) {
          let C = h + y, w = v + p;
          C < 0 && (C = 0), C >= r && (C = r - 1), w < 0 && (w = 0), w >= n && (w = n - 1), s[y + 1][p + 1] = e[C][w];
        }
      let f = P4(s, g, m);
      f = Math.max(0, Math.min(f, 255)), i[c * a + l] = f;
    }
  return i;
}
const R4 = `
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
`, _4 = `
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
`, ac = (e = 64) => {
  const t = new Array(e);
  for (let r = 0; r < e; r++) {
    t[r] = new Array(e);
    for (let n = 0; n < e; n++) {
      const o = (n - e / 2) / (e / 2), a = (r - e / 2) / (e / 2), i = Math.sqrt(o * o + a * a);
      t[r][n] = Math.max(0, 255 * (1 - i));
    }
  }
  return t;
}, is = (e, t, r) => {
  if (!Array.isArray(e))
    return ac(t);
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
function U4({
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
  const l = Y(null), u = Y(null), d = Y(null), v = Y(null), h = Y(null), g = Y(null), m = Y(null), f = Y(null), [y, p] = Cn(!1), C = Y(i), w = Y(s), S = Y({ width: 128, height: 128, scale: c, max: 1 });
  ke(() => {
    C.current = i, w.current = s;
  }, [i, s]);
  const x = Y(!1), E = Y({ x: 0, y: 0 }), M = Y({ radius: 6, phi: Math.PI / 4, theta: 0 }), R = Y(new N.Vector3(0, 0, 0));
  return ke(() => {
    var fe, de;
    if (!l.current)
      return;
    const _ = new N.Scene();
    _.background = new N.Color(16119285), d.current = _;
    const O = new N.PerspectiveCamera(50, l.current.clientWidth / l.current.clientHeight, 0.1, 1e3);
    O.position.set(0, 4, 4), O.lookAt(0, 0, 0), v.current = O;
    const F = new N.WebGLRenderer({ antialias: !0 });
    F.setSize(l.current.clientWidth, l.current.clientHeight), F.setPixelRatio(Math.min(window.devicePixelRatio, 2)), l.current.appendChild(F.domElement), u.current = F;
    const k = new N.AmbientLight(16777215, 0.4);
    _.add(k);
    const A = new N.SpotLight(16777215, 0.8);
    A.position.set(10, 10, 10), _.add(A);
    const $ = new N.PointLight(16777215, 0.5);
    $.position.set(-10, 5, -10), _.add($);
    const I = C.current || (Xt == null ? void 0 : Xt.data) || ac(64), j = is(I, ((fe = I[0]) == null ? void 0 : fe.length) || 64, I.length || 64), V = typeof w.current == "number" ? w.current : Xt == null ? void 0 : Xt.max_val, B = Math.max(1, Math.round(c)), G = (de = j[0]) != null && de.length ? j[0].length * B : 128, U = j.length ? j.length * B : 128, H = G * U, ee = new Float32Array(H), K = as(j, B);
    for (let ie = 0; ie < H; ie++)
      ee[ie] = (K[ie] ?? 0) / V;
    S.current = { width: G, height: U, scale: B, max: V };
    const X = new N.DataTexture(ee, G, U, N.RedFormat, N.FloatType);
    X.magFilter = N.LinearFilter, X.minFilter = N.LinearFilter, X.needsUpdate = !0, m.current = X;
    const z = new N.ShaderMaterial({
      vertexShader: R4,
      fragmentShader: _4,
      uniforms: {
        uPressureMap: { value: X },
        uDisplacementScale: { value: n },
        uThickness: { value: 0.15 },
        uShowHeatmap: { value: e },
        uBaseColor: { value: new N.Color("#eeeeee") },
        uEnableClipping: { value: t },
        uClipLevel: { value: r },
        uSmoothness: { value: o }
      },
      side: N.DoubleSide
    });
    g.current = z;
    const te = new N.BoxGeometry(2, 2, 0.15, 256, 256, 1), re = new N.Mesh(te, z);
    re.rotation.x = -Math.PI / 2, _.add(re), h.current = re;
    const ce = (ie) => {
      x.current = !0, E.current = { x: ie.clientX, y: ie.clientY };
    }, ne = () => {
      x.current = !1;
    }, oe = (ie) => {
      if (!x.current)
        return;
      const Ce = ie.clientX - E.current.x, he = ie.clientY - E.current.y;
      M.current.theta -= Ce * 0.01, M.current.phi -= he * 0.01, M.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, M.current.phi)), E.current = { x: ie.clientX, y: ie.clientY };
    }, me = (ie) => {
      M.current.radius += ie.deltaY * 0.01, M.current.radius = Math.max(2, Math.min(15, M.current.radius));
    };
    F.domElement.addEventListener("mousedown", ce), F.domElement.addEventListener("mouseup", ne), F.domElement.addEventListener("mousemove", oe), F.domElement.addEventListener("wheel", me);
    const Ee = () => {
      f.current = requestAnimationFrame(Ee);
      const { radius: ie, phi: Ce, theta: he } = M.current;
      O.position.x = ie * Math.sin(Ce) * Math.sin(he), O.position.y = ie * Math.cos(Ce), O.position.z = ie * Math.sin(Ce) * Math.cos(he), O.lookAt(R.current), F.render(_, O);
    };
    Ee();
    const L = () => {
      if (!l.current)
        return;
      const ie = l.current.clientWidth, Ce = l.current.clientHeight;
      O.aspect = ie / Ce, O.updateProjectionMatrix(), F.setSize(ie, Ce);
    };
    return window.addEventListener("resize", L), p(!0), () => {
      window.removeEventListener("resize", L), F.domElement.removeEventListener("mousedown", ce), F.domElement.removeEventListener("mouseup", ne), F.domElement.removeEventListener("mousemove", oe), F.domElement.removeEventListener("wheel", me), f.current && cancelAnimationFrame(f.current), te.dispose(), z.dispose(), X.dispose(), F.dispose(), l.current && F.domElement && l.current.removeChild(F.domElement);
    };
  }, []), ke(() => {
    g.current && (g.current.uniforms.uShowHeatmap.value = e, g.current.uniforms.uEnableClipping.value = t, g.current.uniforms.uClipLevel.value = r, g.current.uniforms.uDisplacementScale.value = n, g.current.uniforms.uSmoothness.value = o);
  }, [e, t, r, n, o]), ke(() => {
    const _ = m.current;
    if (!_ || !a)
      return;
    const { width: O, height: F, scale: k, max: A } = S.current, $ = is(a, O / k, F / k), I = as($, k), j = _.image.data;
    for (let V = 0; V < F; V++)
      for (let B = 0; B < O; B++) {
        const G = (F - 1 - V) * O + B, U = I[G];
        j[V * O + B] = Math.min((U ?? 0) / (A || 1), 1);
      }
    _.needsUpdate = !0;
  }, [a]), /* @__PURE__ */ Te.jsxs(
    "div",
    {
      className: "w-full h-full relative bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800",
      style: { width: "100%", height: "100%", position: "relative" },
      children: [
        /* @__PURE__ */ Te.jsx("div", { ref: l, className: "w-full h-full", style: { width: "100%", height: "100%" } }),
        /* @__PURE__ */ Te.jsxs("div", { className: "absolute bottom-4 left-4 text-xs text-gray-400 pointer-events-none", children: [
          /* @__PURE__ */ Te.jsx("p", { children: "Left Click + Drag: Rotate" }),
          /* @__PURE__ */ Te.jsx("p", { children: "Scroll: Zoom" })
        ] })
      ]
    }
  );
}
export {
  $4 as CanvasHeatmap,
  H4 as FootLenScene,
  L4 as NumThreeColor,
  W4 as PlaybackBar,
  C4 as PlaybackPlayToggle,
  b4 as PlaybackSpeedMenu,
  D4 as ReplayWindowLineChart,
  N4 as SimpleLineChart,
  V4 as SitAndFootScene,
  I4 as ThreeAndCarPoint,
  U4 as ThreeSinkScene,
  j4 as WebglHeatmap
};
