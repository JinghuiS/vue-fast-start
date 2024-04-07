import { inject as ae, unref as F, watch as ye, isRef as Ye, shallowRef as ee, ref as L, computed as z, defineComponent as et, resolveDirective as tt, openBlock as we, createElementBlock as nt, withDirectives as rt, createBlock as st, mergeProps as ot, withCtx as it, renderSlot as at, createVNode as ct } from "vue";
import { ElTable as lt, ElPagination as ut } from "element-plus";
function Fe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ft } = Object.prototype, { getPrototypeOf: ce } = Object, $ = /* @__PURE__ */ ((e) => (t) => {
  const n = ft.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => $(t) === e), V = (e) => (t) => typeof t === e, { isArray: D } = Array, j = V("undefined");
function dt(e) {
  return e !== null && !j(e) && e.constructor !== null && !j(e.constructor) && g(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Be = C("ArrayBuffer");
function pt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Be(e.buffer), t;
}
const ht = V("string"), g = V("function"), De = V("number"), K = (e) => e !== null && typeof e == "object", mt = (e) => e === !0 || e === !1, v = (e) => {
  if ($(e) !== "object")
    return !1;
  const t = ce(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, yt = C("Date"), wt = C("File"), Et = C("Blob"), bt = C("FileList"), St = (e) => K(e) && g(e.pipe), Rt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || g(e.append) && ((t = $(e)) === "formdata" || // detect form-data instance
  t === "object" && g(e.toString) && e.toString() === "[object FormData]"));
}, Tt = C("URLSearchParams"), Ot = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function H(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), D(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function ke(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Le = (e) => !j(e) && e !== Ue;
function te() {
  const { caseless: e } = Le(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && ke(t, s) || s;
    v(t[o]) && v(r) ? t[o] = te(t[o], r) : v(r) ? t[o] = te({}, r) : D(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && H(arguments[r], n);
  return t;
}
const gt = (e, t, n, { allOwnKeys: r } = {}) => (H(t, (s, o) => {
  n && g(s) ? e[o] = Fe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), At = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Pt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, xt = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && ce(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ct = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Nt = (e) => {
  if (!e)
    return null;
  if (D(e))
    return e;
  let t = e.length;
  if (!De(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, _t = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ce(Uint8Array)), Ft = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Bt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Dt = C("HTMLFormElement"), kt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ee = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ut = C("RegExp"), je = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  H(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Lt = (e) => {
  je(e, (t, n) => {
    if (g(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (g(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, jt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return D(e) ? r(e) : r(String(e).split(t)), n;
}, Ht = () => {
}, It = (e, t) => (e = +e, Number.isFinite(e) ? e : t), G = "abcdefghijklmnopqrstuvwxyz", be = "0123456789", He = {
  DIGIT: be,
  ALPHA: G,
  ALPHA_DIGIT: G + G.toUpperCase() + be
}, vt = (e = 16, t = He.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function qt(e) {
  return !!(e && g(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Mt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = D(r) ? [] : {};
        return H(r, (i, l) => {
          const h = n(i, s + 1);
          !j(h) && (o[l] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, zt = C("AsyncFunction"), Jt = (e) => e && (K(e) || g(e)) && g(e.then) && g(e.catch), a = {
  isArray: D,
  isArrayBuffer: Be,
  isBuffer: dt,
  isFormData: Rt,
  isArrayBufferView: pt,
  isString: ht,
  isNumber: De,
  isBoolean: mt,
  isObject: K,
  isPlainObject: v,
  isUndefined: j,
  isDate: yt,
  isFile: wt,
  isBlob: Et,
  isRegExp: Ut,
  isFunction: g,
  isStream: St,
  isURLSearchParams: Tt,
  isTypedArray: _t,
  isFileList: bt,
  forEach: H,
  merge: te,
  extend: gt,
  trim: Ot,
  stripBOM: At,
  inherits: Pt,
  toFlatObject: xt,
  kindOf: $,
  kindOfTest: C,
  endsWith: Ct,
  toArray: Nt,
  forEachEntry: Ft,
  matchAll: Bt,
  isHTMLForm: Dt,
  hasOwnProperty: Ee,
  hasOwnProp: Ee,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: je,
  freezeMethods: Lt,
  toObjectSet: jt,
  toCamelCase: kt,
  noop: Ht,
  toFiniteNumber: It,
  findKey: ke,
  global: Ue,
  isContextDefined: Le,
  ALPHABET: He,
  generateString: vt,
  isSpecCompliantForm: qt,
  toJSONObject: Mt,
  isAsyncFn: zt,
  isThenable: Jt
};
function y(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ie = y.prototype, ve = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ve[e] = { value: e };
});
Object.defineProperties(y, ve);
Object.defineProperty(Ie, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ie);
  return a.toFlatObject(e, i, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), y.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const $t = null;
function ne(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function qe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Se(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = qe(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Vt(e) {
  return a.isArray(e) && !e.some(ne);
}
const Kt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function W(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, E) {
    return !a.isUndefined(E[d]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function p(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!h && a.isBlob(f))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? h && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, d, E) {
    let w = f;
    if (f && !E && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        d = r ? d : d.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && Vt(f) || (a.isFileList(f) || a.endsWith(d, "[]")) && (w = a.toArray(f)))
        return d = qe(d), w.forEach(function(T, A) {
          !(a.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Se([d], A, o) : i === null ? d : d + "[]",
            p(T)
          );
        }), !1;
    }
    return ne(f) ? !0 : (t.append(Se(E, d, o), p(f)), !1);
  }
  const c = [], m = Object.assign(Kt, {
    defaultVisitor: u,
    convertValue: p,
    isVisitable: ne
  });
  function b(f, d) {
    if (!a.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      c.push(f), a.forEach(f, function(w, R) {
        (!(a.isUndefined(w) || w === null) && s.call(
          t,
          w,
          a.isString(R) ? R.trim() : R,
          d,
          m
        )) === !0 && b(w, d ? d.concat(R) : [R]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Re(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function le(e, t) {
  this._pairs = [], e && W(e, this, t);
}
const Me = le.prototype;
Me.append = function(t, n) {
  this._pairs.push([t, n]);
};
Me.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Re);
  } : Re;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Wt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ze(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Wt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new le(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Te {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Xt = typeof URLSearchParams < "u" ? URLSearchParams : le, Gt = typeof FormData < "u" ? FormData : null, Qt = typeof Blob < "u" ? Blob : null, Zt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xt,
    FormData: Gt,
    Blob: Qt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $e = typeof window < "u" && typeof document < "u", Yt = ((e) => $e && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), en = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $e,
  hasStandardBrowserEnv: Yt,
  hasStandardBrowserWebWorkerEnv: en
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...tn,
  ...Zt
};
function nn(e, t) {
  return W(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function rn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function sn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ve(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), h = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, h ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = sn(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(rn(r), s, n, 0);
    }), n;
  }
  return null;
}
function on(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ue = {
  transitional: Je,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Ve(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return nn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return W(
          l ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), on(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ue.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: x.classes.FormData,
    Blob: x.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ue.headers[e] = {};
});
const fe = ue, an = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), cn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && an[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Oe = Symbol("internals");
function k(e) {
  return e && String(e).trim().toLowerCase();
}
function q(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(q) : String(e);
}
function ln(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const un = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Q(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function fn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function dn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class X {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, h, p) {
      const u = k(h);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, u);
      (!c || s[c] === void 0 || p === !0 || p === void 0 && s[c] !== !1) && (s[c || h] = q(l));
    }
    const i = (l, h) => a.forEach(l, (p, u) => o(p, u, h));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !un(t) ? i(cn(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = k(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ln(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = k(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Q(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = k(i), i) {
        const l = a.findKey(r, i);
        l && (!n || Q(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Q(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = q(s), delete n[o];
        return;
      }
      const l = t ? fn(o) : String(o).trim();
      l !== o && delete n[o], n[l] = q(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Oe] = this[Oe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = k(i);
      r[l] || (dn(s, i), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
X.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(X.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(X);
const N = X;
function Z(e, t) {
  const n = this || fe, r = t || n, s = N.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ke(e) {
  return !!(e && e.__CANCEL__);
}
function I(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(I, y, {
  __CANCEL__: !0
});
function pn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const hn = x.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function mn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function We(e, t) {
  return e && !mn(t) ? yn(e, t) : t;
}
const wn = x.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const l = a.isString(i) ? s(i) : i;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function En(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function bn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const p = Date.now(), u = r[o];
    i || (i = p), n[s] = h, r[s] = p;
    let c = o, m = 0;
    for (; c !== s; )
      m += n[c++], c = c % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - i < t)
      return;
    const b = u && p - u;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function ge(e, t) {
  let n = 0;
  const r = bn(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, l = o - n, h = r(l), p = o <= i;
    n = o;
    const u = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: h || void 0,
      estimated: h && i && p ? (i - o) / h : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Sn = typeof XMLHttpRequest < "u", Rn = Sn && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = N.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: l } = e, h;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(h), e.signal && e.signal.removeEventListener("abort", h);
    }
    let u;
    if (a.isFormData(s)) {
      if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((u = o.getContentType()) !== !1) {
        const [d, ...E] = u ? u.split(";").map((w) => w.trim()).filter(Boolean) : [];
        o.setContentType([d || "multipart/form-data", ...E].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const d = e.auth.username || "", E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(d + ":" + E));
    }
    const m = We(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), ze(m, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function b() {
      if (!c)
        return;
      const d = N.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), w = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: d,
        config: e,
        request: c
      };
      pn(function(T) {
        n(T), p();
      }, function(T) {
        r(T), p();
      }, w), c = null;
    }
    if ("onloadend" in c ? c.onloadend = b : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, c.onabort = function() {
      c && (r(new y("Request aborted", y.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new y("Network Error", y.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let E = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || Je;
      e.timeoutErrorMessage && (E = e.timeoutErrorMessage), r(new y(
        E,
        w.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        c
      )), c = null;
    }, x.hasStandardBrowserEnv && (l && a.isFunction(l) && (l = l(e)), l || l !== !1 && wn(m))) {
      const d = e.xsrfHeaderName && e.xsrfCookieName && hn.read(e.xsrfCookieName);
      d && o.set(e.xsrfHeaderName, d);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function(E, w) {
      c.setRequestHeader(w, E);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ge(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ge(e.onUploadProgress)), (e.cancelToken || e.signal) && (h = (d) => {
      c && (r(!d || d.type ? new I(null, e, c) : d), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(h), e.signal && (e.signal.aborted ? h() : e.signal.addEventListener("abort", h)));
    const f = En(m);
    if (f && x.protocols.indexOf(f) === -1) {
      r(new y("Unsupported protocol " + f + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, re = {
  http: $t,
  xhr: Rn
};
a.forEach(re, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ae = (e) => `- ${e}`, Tn = (e) => a.isFunction(e) || e === null || e === !1, Xe = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Tn(n) && (r = re[(i = String(n)).toLowerCase()], r === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ae).join(`
`) : " " + Ae(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: re
};
function Y(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new I(null, e);
}
function Pe(e) {
  return Y(e), e.headers = N.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xe.getAdapter(e.adapter || fe.adapter)(e).then(function(r) {
    return Y(e), r.data = Z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = N.from(r.headers), r;
  }, function(r) {
    return Ke(r) || (Y(e), r && r.response && (r.response.data = Z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = N.from(r.response.headers))), Promise.reject(r);
  });
}
const xe = (e) => e instanceof N ? { ...e } : e;
function B(e, t) {
  t = t || {};
  const n = {};
  function r(p, u, c) {
    return a.isPlainObject(p) && a.isPlainObject(u) ? a.merge.call({ caseless: c }, p, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(p, u, c) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(p))
        return r(void 0, p, c);
    } else
      return r(p, u, c);
  }
  function o(p, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(p, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(p))
        return r(void 0, p);
    } else
      return r(void 0, u);
  }
  function l(p, u, c) {
    if (c in t)
      return r(p, u);
    if (c in e)
      return r(void 0, p);
  }
  const h = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (p, u) => s(xe(p), xe(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const c = h[u] || s, m = c(e[u], t[u], u);
    a.isUndefined(m) && c !== l || (n[u] = m);
  }), n;
}
const Ge = "1.6.8", de = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  de[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ce = {};
de.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ge + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Ce[i] && (Ce[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function On(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], h = l === void 0 || i(l, o, e);
      if (h !== !0)
        throw new y("option " + o + " must be " + h, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: On,
  validators: de
}, _ = se.validators;
class J {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Te(),
      response: new Te()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = B(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: _.transitional(_.boolean),
      forcedJSONParsing: _.transitional(_.boolean),
      clarifyTimeoutError: _.transitional(_.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : se.assertOptions(s, {
      encode: _.function,
      serialize: _.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = N.concat(i, o);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(n) === !1 || (h = h && d.synchronous, l.unshift(d.fulfilled, d.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(d) {
      p.push(d.fulfilled, d.rejected);
    });
    let u, c = 0, m;
    if (!h) {
      const f = [Pe.bind(this), void 0];
      for (f.unshift.apply(f, l), f.push.apply(f, p), m = f.length, u = Promise.resolve(n); c < m; )
        u = u.then(f[c++], f[c++]);
      return u;
    }
    m = l.length;
    let b = n;
    for (c = 0; c < m; ) {
      const f = l[c++], d = l[c++];
      try {
        b = f(b);
      } catch (E) {
        d.call(this, E);
        break;
      }
    }
    try {
      u = Pe.call(this, b);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, m = p.length; c < m; )
      u = u.then(p[c++], p[c++]);
    return u;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = We(t.baseURL, t.url);
    return ze(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(n, r) {
    return this.request(B(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(B(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  J.prototype[t] = n(), J.prototype[t + "Form"] = n(!0);
});
const M = J;
class pe {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new I(o, i, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new pe(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const gn = pe;
function An(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Pn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const oe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(oe).forEach(([e, t]) => {
  oe[t] = e;
});
const xn = oe;
function Qe(e) {
  const t = new M(e), n = Fe(M.prototype.request, t);
  return a.extend(n, M.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Qe(B(e, s));
  }, n;
}
const S = Qe(fe);
S.Axios = M;
S.CanceledError = I;
S.CancelToken = gn;
S.isCancel = Ke;
S.VERSION = Ge;
S.toFormData = W;
S.AxiosError = y;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = An;
S.isAxiosError = Pn;
S.mergeConfig = B;
S.AxiosHeaders = N;
S.formToJSON = (e) => Ve(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Xe.getAdapter;
S.HttpStatusCode = xn;
S.default = S;
const Cn = S;
class he extends Error {
  constructor(t, n, r = null) {
    super(t), this.message = t, this.status = n, this.body = r, Object.setPrototypeOf(this, he.prototype), this.name = this.constructor.name, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack, this.stack = new Error().stack;
  }
}
async function Nn(e, t = {}) {
  const r = await Cn.create({
    baseURL: t.baseUrl || ""
  })({ ...t, url: e }), { status: s, statusText: o, headers: i, body: l } = {
    status: r.status,
    statusText: r.statusText,
    headers: r.headers,
    body: r.data
  };
  let h = l;
  return s < 200 || s >= 300 ? Promise.reject(new he(o, s)) : await Promise.resolve({ status: s, headers: i, body: l, json: h });
}
const _n = {
  create: () => Promise.resolve({ data: null }),
  // avoids adding a context in tests
  delete: () => Promise.resolve({ data: null }),
  // avoids adding a context in tests
  getList: () => Promise.resolve({
    data: Array.from({ length: 30 }).map((e, t) => ({
      name: t,
      id: t
    })),
    total: 20
  }),
  // avoids adding a context in tests
  getMany: () => Promise.resolve({ data: [] }),
  // avoids adding a context in tests
  getManyReference: () => Promise.resolve({ data: [], total: 0 }),
  // avoids adding a context in tests
  getOne: () => Promise.resolve({ data: null }),
  // avoids adding a context in tests
  update: () => Promise.resolve({ data: null }),
  // avoids adding a context in tests
  httpClient: Nn
}, Fn = Symbol("DATA_PROVIDER_CONTEXT"), Bn = () => ae(Fn, _n), Dn = {
  rowKey: "id"
}, kn = Symbol("FAST_START_CONTEXT"), Ze = () => ae(kn, Dn), Un = {};
function U(e) {
  return typeof e == "function" ? e() : F(e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ne = () => {
};
function _e(e, t = !1, n = "Timeout") {
  return new Promise((r, s) => {
    setTimeout(t ? () => s(n) : r, e);
  });
}
function ie(e, t = !1) {
  function n(c, { flush: m = "sync", deep: b = !1, timeout: f, throwOnTimeout: d } = {}) {
    let E = null;
    const R = [new Promise((T) => {
      E = ye(
        e,
        (A) => {
          c(A) !== t && (E == null || E(), T(A));
        },
        {
          flush: m,
          deep: b,
          immediate: !0
        }
      );
    })];
    return f != null && R.push(
      _e(f, d).then(() => U(e)).finally(() => E == null ? void 0 : E())
    ), Promise.race(R);
  }
  function r(c, m) {
    if (!Ye(c))
      return n((A) => A === c, m);
    const { flush: b = "sync", deep: f = !1, timeout: d, throwOnTimeout: E } = m ?? {};
    let w = null;
    const T = [new Promise((A) => {
      w = ye(
        [e, c],
        ([O, P]) => {
          t !== (O === P) && (w == null || w(), A(O));
        },
        {
          flush: b,
          deep: f,
          immediate: !0
        }
      );
    })];
    return d != null && T.push(
      _e(d, E).then(() => U(e)).finally(() => (w == null || w(), U(e)))
    ), Promise.race(T);
  }
  function s(c) {
    return n((m) => !!m, c);
  }
  function o(c) {
    return r(null, c);
  }
  function i(c) {
    return r(void 0, c);
  }
  function l(c) {
    return n(Number.isNaN, c);
  }
  function h(c, m) {
    return n((b) => {
      const f = Array.from(b);
      return f.includes(c) || f.includes(U(c));
    }, m);
  }
  function p(c) {
    return u(1, c);
  }
  function u(c = 1, m) {
    let b = -1;
    return n(() => (b += 1, b >= c), m);
  }
  return Array.isArray(U(e)) ? {
    toMatch: n,
    toContains: h,
    changed: p,
    changedTimes: u,
    get not() {
      return ie(e, !t);
    }
  } : {
    toMatch: n,
    toBe: r,
    toBeTruthy: s,
    toBeNull: o,
    toBeNaN: l,
    toBeUndefined: i,
    changed: p,
    changedTimes: u,
    get not() {
      return ie(e, !t);
    }
  };
}
function Ln(e) {
  return ie(e);
}
function jn(e) {
  const {
    initialData: t,
    shallow: n,
    onSuccess: r = Ne,
    onError: s = Ne,
    immediate: o,
    resetOnExecute: i = !1,
    queryFn: l,
    queryKey: h
  } = e, p = (n ? ee : L)(t), u = L(!1), c = L(!1), m = L(!1), b = ee(), f = (O) => {
    c.value = O, u.value = !O;
  }, d = () => {
    i && (p.value = t);
  }, E = () => new Promise((O, P) => {
    Ln(u).toBe(!0).then(() => b.value ? P(b.value) : O(A));
  }), w = {
    then: (...O) => E().then(...O),
    catch: (...O) => E().catch(...O)
  };
  let R = 0;
  const T = () => {
    if (b.value = void 0, c.value)
      return w;
    if (l === void 0)
      return u.value = !0, w;
    d(), f(!0), R += 1;
    const O = R;
    return l().then((P) => {
      const me = P;
      p.value = me, r(me);
    }).catch((P) => {
      b.value = P, s(P);
    }).finally(() => {
      var P;
      (P = e.onFinish) == null || P.call(e), O === R && f(!1);
    }), w;
  };
  o && T();
  const A = {
    data: p,
    error: b,
    isFinished: u,
    isLoading: c,
    isAborted: m,
    isCanceled: m,
    execute: T
  };
  return {
    ...A,
    ...w
  };
}
const Hn = (e, t = {}) => {
  const { pagination: n = { page: 1, perPage: 20 }, filter: r = Un } = t, s = Bn();
  Ze();
  const o = jn({
    immediate: !0,
    // queryKey: [filter, resource, pagination],
    queryFn: () => new Promise((h, p) => {
      setTimeout(() => {
        s.getList(e, {
          pagination: n,
          filter: r
        }).then(({ data: u, total: c }) => ({
          data: u,
          total: c
        })).then(h).catch(p);
      }, 2e3);
    }),
    initialData: {
      data: [],
      total: 0
    }
  }), i = z(() => o.data.value.data), l = z(() => o.data.value.total);
  return {
    ...o,
    data: i,
    total: l
  };
}, In = Symbol("RESOURCE_CONTEXT"), vn = () => ae(In, { name: "" }), qn = { class: "fast-start-table" }, Mn = /* @__PURE__ */ et({
  name: "FsDataTable",
  inheritAttrs: !1,
  __name: "FsDataTable",
  props: {
    tableData: {},
    data: {},
    size: {},
    width: {},
    height: {},
    maxHeight: {},
    fit: { type: Boolean },
    stripe: { type: Boolean },
    border: { type: Boolean },
    rowKey: { type: [String, Function] },
    context: {},
    showHeader: { type: Boolean },
    showSummary: { type: Boolean },
    sumText: {},
    summaryMethod: {},
    rowClassName: {},
    rowStyle: {},
    cellClassName: {},
    cellStyle: {},
    headerRowClassName: {},
    headerRowStyle: {},
    headerCellClassName: {},
    headerCellStyle: {},
    highlightCurrentRow: { type: Boolean },
    currentRowKey: {},
    emptyText: {},
    expandRowKeys: {},
    defaultExpandAll: { type: Boolean },
    defaultSort: {},
    tooltipEffect: {},
    tooltipOptions: {},
    spanMethod: { type: Function },
    selectOnIndeterminate: { type: Boolean },
    indent: {},
    treeProps: {},
    lazy: { type: Boolean },
    load: { type: Function },
    className: {},
    style: {},
    tableLayout: {},
    scrollbarAlwaysOn: { type: Boolean },
    flexible: { type: Boolean },
    showOverflowTooltip: { type: [Boolean, Object] }
  },
  setup(e, { expose: t }) {
    const n = vn(), r = Ze(), s = ee(null), o = L({
      pagination: {
        page: 1,
        perPage: 10
      },
      filter: {}
    }), { data: i, total: l, isLoading: h, execute: p } = Hn(n.name, o.value), u = e, c = z(() => u.rowKey || r.rowKey), m = z(() => u.tableData || i.value), b = () => {
      p();
    };
    return t({
      tableInstance: s
    }), (f, d) => {
      const E = tt("loading");
      return we(), nt("div", qn, [
        rt((we(), st(F(lt), ot({
          ref_key: "tableInstance",
          ref: s,
          "row-key": c.value,
          data: m.value
        }, f.$attrs, {
          "highlight-current-row": "",
          "scrollbar-always-on": ""
        }), {
          default: it(() => [
            at(f.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["row-key", "data"])), [
          [E, F(h)]
        ]),
        ct(F(ut), {
          disabled: F(h),
          class: "fast-start-pagination",
          "page-sizes": [10, 20, 30, 100],
          layout: "prev, pager, next,sizes",
          total: F(l),
          onChange: b,
          "current-page": o.value.pagination.page,
          "onUpdate:currentPage": d[0] || (d[0] = (w) => o.value.pagination.page = w),
          "page-size": o.value.pagination.perPage,
          "onUpdate:pageSize": d[1] || (d[1] = (w) => o.value.pagination.perPage = w)
        }, null, 8, ["disabled", "total", "current-page", "page-size"])
      ]);
    };
  }
}), zn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Vn = /* @__PURE__ */ zn(Mn, [["__scopeId", "data-v-1d76dcb7"]]);
export {
  Vn as default
};
//# sourceMappingURL=FsDataTable.mjs.map
