import ie from "react";
var D = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var te;
function fe() {
  if (te) return $;
  te = 1;
  var n = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function i(l, o, u) {
    var p = null;
    if (u !== void 0 && (p = "" + u), o.key !== void 0 && (p = "" + o.key), "key" in o) {
      u = {};
      for (var d in o)
        d !== "key" && (u[d] = o[d]);
    } else u = o;
    return o = u.ref, {
      $$typeof: n,
      type: l,
      key: p,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return $.Fragment = c, $.jsx = i, $.jsxs = i, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function me() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case M:
          return "Profiler";
        case W:
          return "StrictMode";
        case G:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function i(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(e);
      }
    }
    function l(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = v.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (w.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        x || (x = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function R() {
      var e = n(this.type);
      return P[e] || (P[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function z(e, r, t, a, m, f, k, E) {
      return t = f.ref, e = {
        $$typeof: S,
        type: e,
        key: r,
        props: f,
        _owner: m
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, t, a, m, f, k, E) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (Q(s)) {
            for (a = 0; a < s.length; a++)
              j(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(s);
      if (w.call(r, "key")) {
        s = n(e);
        var b = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        a = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", C[s + a] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          b,
          s
        ), C[s + a] = !0);
      }
      if (s = null, t !== void 0 && (i(t), s = "" + t), p(r) && (i(r.key), s = "" + r.key), "key" in r) {
        t = {};
        for (var h in r)
          h !== "key" && (t[h] = r[h]);
      } else t = r;
      return s && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), z(
        e,
        s,
        f,
        m,
        o(),
        t,
        k,
        E
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var y = ie, S = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), q = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), v = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, Q = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var x, P = {}, N = y["react-stack-bottom-frame"].bind(
      y,
      u
    )(), A = g(l(u)), C = {};
    Y.Fragment = _, Y.jsx = function(e, r, t, a, m) {
      var f = 1e4 > v.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !1,
        a,
        m,
        f ? Error("react-stack-top-frame") : N,
        f ? g(l(e)) : A
      );
    }, Y.jsxs = function(e, r, t, a, m) {
      var f = 1e4 > v.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !0,
        a,
        m,
        f ? Error("react-stack-top-frame") : N,
        f ? g(l(e)) : A
      );
    };
  }()), Y;
}
var oe;
function de() {
  return oe || (oe = 1, process.env.NODE_ENV === "production" ? D.exports = fe() : D.exports = me()), D.exports;
}
var pe = de();
const be = "1", ye = "0";
function _e(n, c) {
  const i = (c == null ? void 0 : c.off) ?? ye, l = (c == null ? void 0 : c.on) ?? be, o = n !== +i;
  return {
    isToggleOn: o,
    handleControlValueToggle: (d) => (R) => {
      d(R.target.checked ? l : i);
    },
    handleControlValueToggleButton: (d) => () => {
      d(o ? i : l);
    }
  };
}
var re = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function ve() {
  if (ae) return F;
  ae = 1;
  var n = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function i(l, o, u) {
    var p = null;
    if (u !== void 0 && (p = "" + u), o.key !== void 0 && (p = "" + o.key), "key" in o) {
      u = {};
      for (var d in o)
        d !== "key" && (u[d] = o[d]);
    } else u = o;
    return o = u.ref, {
      $$typeof: n,
      type: l,
      key: p,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return F.Fragment = c, F.jsx = i, F.jsxs = i, F;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se;
function ge() {
  return se || (se = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case M:
          return "Profiler";
        case W:
          return "StrictMode";
        case G:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function i(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(e);
      }
    }
    function l(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = v.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (w.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        x || (x = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function R() {
      var e = n(this.type);
      return P[e] || (P[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function z(e, r, t, a, m, f, k, E) {
      return t = f.ref, e = {
        $$typeof: S,
        type: e,
        key: r,
        props: f,
        _owner: m
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, t, a, m, f, k, E) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (Q(s)) {
            for (a = 0; a < s.length; a++)
              j(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(s);
      if (w.call(r, "key")) {
        s = n(e);
        var b = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        a = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", C[s + a] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          b,
          s
        ), C[s + a] = !0);
      }
      if (s = null, t !== void 0 && (i(t), s = "" + t), p(r) && (i(r.key), s = "" + r.key), "key" in r) {
        t = {};
        for (var h in r)
          h !== "key" && (t[h] = r[h]);
      } else t = r;
      return s && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), z(
        e,
        s,
        f,
        m,
        o(),
        t,
        k,
        E
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var y = ie, S = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), q = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), v = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, Q = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var x, P = {}, N = y["react-stack-bottom-frame"].bind(
      y,
      u
    )(), A = g(l(u)), C = {};
    U.Fragment = _, U.jsx = function(e, r, t, a, m) {
      var f = 1e4 > v.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !1,
        a,
        m,
        f ? Error("react-stack-top-frame") : N,
        f ? g(l(e)) : A
      );
    }, U.jsxs = function(e, r, t, a, m) {
      var f = 1e4 > v.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !0,
        a,
        m,
        f ? Error("react-stack-top-frame") : N,
        f ? g(l(e)) : A
      );
    };
  }()), U;
}
var le;
function ke() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? re.exports = ve() : re.exports = ge()), re.exports;
}
var V = ke();
function ue(n) {
  var c, i, l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var o = n.length;
    for (c = 0; c < o; c++) n[c] && (i = ue(n[c])) && (l && (l += " "), l += i);
  } else for (i in n) n[i] && (l && (l += " "), l += i);
  return l;
}
function ce() {
  for (var n, c, i = 0, l = "", o = arguments.length; i < o; i++) (n = arguments[i]) && (c = ue(n)) && (l && (l += " "), l += c);
  return l;
}
const Ee = "data-pressed-id", he = "_small_4jtme_56", Re = "_dark_4jtme_68", I = {
  "button-switch__group": "_button-switch__group_4jtme_1",
  "button-switch__item": "_button-switch__item_4jtme_5",
  "button-switch__icon": "_button-switch__icon_4jtme_17",
  small: he,
  dark: Re
};
function Te(n) {
  const { className: c, usePressed: i, size: l = "default", theme: o = "light", ...u } = n;
  return /* @__PURE__ */ V.jsxs(
    "div",
    {
      className: ce(
        I["button-switch__group"],
        l === "small" && I.small,
        o === "dark" && I.dark
      ),
      children: [
        /* @__PURE__ */ V.jsx(
          "input",
          {
            type: "checkbox",
            className: ce(I["button-switch__item"], c),
            ...i && { [Ee]: u.id },
            ...u
          }
        ),
        /* @__PURE__ */ V.jsx("label", { htmlFor: u.id, children: /* @__PURE__ */ V.jsx("span", { className: I["button-switch__icon"] }) })
      ]
    }
  );
}
function Se({ id: n, value: c, values: i, onControl: l, usePressed: o = !0 }) {
  const { isToggleOn: u, handleControlValueToggle: p } = _e(c, i);
  return /* @__PURE__ */ pe.jsx(
    Te,
    {
      id: n,
      checked: u,
      onChange: p(l),
      usePressed: o
    }
  );
}
export {
  Se as ToggleSwitch,
  _e as useToggle
};
