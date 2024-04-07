import { inject as Ne, unref as Ge, watch as de, isRef as Qe, shallowRef as he, ref as H, computed as pe } from "vue";
function Ce(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ze } = Object.prototype, { getPrototypeOf: se } = Object, v = /* @__PURE__ */ ((e) => (t) => {
  const n = Ze.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), N = (e) => (e = e.toLowerCase(), (t) => v(t) === e), J = (e) => (t) => typeof t === e, { isArray: D } = Array, U = J("undefined");
function Ye(e) {
  return e !== null && !U(e) && e.constructor !== null && !U(e.constructor) && A(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Fe = N("ArrayBuffer");
function et(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Fe(e.buffer), t;
}
const tt = J("string"), A = J("function"), _e = J("number"), V = (e) => e !== null && typeof e == "object", nt = (e) => e === !0 || e === !1, q = (e) => {
  if (v(e) !== "object")
    return !1;
  const t = se(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rt = N("Date"), st = N("File"), ot = N("Blob"), it = N("FileList"), at = (e) => V(e) && A(e.pipe), ct = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || A(e.append) && ((t = v(e)) === "formdata" || // detect form-data instance
  t === "object" && A(e.toString) && e.toString() === "[object FormData]"));
}, ut = N("URLSearchParams"), lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), D(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let u;
    for (r = 0; r < i; r++)
      u = o[r], t.call(null, e[u], u, e);
  }
}
function De(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Le = (e) => !U(e) && e !== Be;
function Z() {
  const { caseless: e } = Le(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && De(t, s) || s;
    q(t[o]) && q(r) ? t[o] = Z(t[o], r) : q(r) ? t[o] = Z({}, r) : D(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const ft = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (s, o) => {
  n && A(s) ? e[o] = Ce(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), dt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ht = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, pt = (e, t, n, r) => {
  let s, o, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = n !== !1 && se(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, mt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, yt = (e) => {
  if (!e)
    return null;
  if (D(e))
    return e;
  let t = e.length;
  if (!_e(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Et = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && se(Uint8Array)), wt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, bt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, St = N("HTMLFormElement"), Rt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), me = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ot = N("RegExp"), Ue = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Tt = (e) => {
  Ue(e, (t, n) => {
    if (A(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (A(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, At = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return D(e) ? r(e) : r(String(e).split(t)), n;
}, Pt = () => {
}, gt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), K = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", ke = {
  DIGIT: ye,
  ALPHA: K,
  ALPHA_DIGIT: K + K.toUpperCase() + ye
}, xt = (e = 16, t = ke.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Nt(e) {
  return !!(e && A(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ct = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (V(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = D(r) ? [] : {};
        return k(r, (i, u) => {
          const p = n(i, s + 1);
          !U(p) && (o[u] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ft = N("AsyncFunction"), _t = (e) => e && (V(e) || A(e)) && A(e.then) && A(e.catch), a = {
  isArray: D,
  isArrayBuffer: Fe,
  isBuffer: Ye,
  isFormData: ct,
  isArrayBufferView: et,
  isString: tt,
  isNumber: _e,
  isBoolean: nt,
  isObject: V,
  isPlainObject: q,
  isUndefined: U,
  isDate: rt,
  isFile: st,
  isBlob: ot,
  isRegExp: Ot,
  isFunction: A,
  isStream: at,
  isURLSearchParams: ut,
  isTypedArray: Et,
  isFileList: it,
  forEach: k,
  merge: Z,
  extend: ft,
  trim: lt,
  stripBOM: dt,
  inherits: ht,
  toFlatObject: pt,
  kindOf: v,
  kindOfTest: N,
  endsWith: mt,
  toArray: yt,
  forEachEntry: wt,
  matchAll: bt,
  isHTMLForm: St,
  hasOwnProperty: me,
  hasOwnProp: me,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ue,
  freezeMethods: Tt,
  toObjectSet: At,
  toCamelCase: Rt,
  noop: Pt,
  toFiniteNumber: gt,
  findKey: De,
  global: Be,
  isContextDefined: Le,
  ALPHABET: ke,
  generateString: xt,
  isSpecCompliantForm: Nt,
  toJSONObject: Ct,
  isAsyncFn: Ft,
  isThenable: _t
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
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
const je = m.prototype, He = {};
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
  He[e] = { value: e };
});
Object.defineProperties(m, He);
Object.defineProperty(je, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(je);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (u) => u !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Dt = null;
function Y(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function qe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ee(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = qe(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Bt(e) {
  return a.isArray(e) && !e.some(Y);
}
const Lt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, E) {
    return !a.isUndefined(E[d]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, d, E) {
    let b = f;
    if (f && !E && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        d = r ? d : d.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && Bt(f) || (a.isFileList(f) || a.endsWith(d, "[]")) && (b = a.toArray(f)))
        return d = qe(d), b.forEach(function(O, P) {
          !(a.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ee([d], P, o) : i === null ? d : d + "[]",
            h(O)
          );
        }), !1;
    }
    return Y(f) ? !0 : (t.append(Ee(E, d, o), h(f)), !1);
  }
  const c = [], y = Object.assign(Lt, {
    defaultVisitor: l,
    convertValue: h,
    isVisitable: Y
  });
  function w(f, d) {
    if (!a.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      c.push(f), a.forEach(f, function(b, R) {
        (!(a.isUndefined(b) || b === null) && s.call(
          t,
          b,
          a.isString(R) ? R.trim() : R,
          d,
          y
        )) === !0 && w(b, d ? d.concat(R) : [R]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function we(e) {
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
function oe(e, t) {
  this._pairs = [], e && $(e, this, t);
}
const Ie = oe.prototype;
Ie.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ie.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, we);
  } : we;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ut(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ut, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new oe(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class be {
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
const ze = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kt = typeof URLSearchParams < "u" ? URLSearchParams : oe, jt = typeof FormData < "u" ? FormData : null, Ht = typeof Blob < "u" ? Blob : null, qt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kt,
    FormData: jt,
    Blob: Ht
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ve = typeof window < "u" && typeof document < "u", It = ((e) => ve && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Mt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ve,
  hasStandardBrowserEnv: It,
  hasStandardBrowserWebWorkerEnv: Mt
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...zt,
  ...qt
};
function vt(e, t) {
  return $(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Jt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Vt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Je(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const u = Number.isFinite(+i), p = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, p ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !u) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Vt(s[i])), !u);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Jt(r), s, n, 0);
    }), n;
  }
  return null;
}
function $t(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ie = {
  transitional: ze,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Je(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return vt(t, this.formSerializer).toString();
      if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return $(
          u ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), $t(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ie.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (i)
          throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
  ie.headers[e] = {};
});
const ae = ie, Wt = a.toObjectSet([
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
]), Kt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Wt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Se = Symbol("internals");
function B(e) {
  return e && String(e).trim().toLowerCase();
}
function I(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(I) : String(e);
}
function Xt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Gt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function X(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Qt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Zt(e, t) {
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
class W {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(u, p, h) {
      const l = B(p);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, l);
      (!c || s[c] === void 0 || h === !0 || h === void 0 && s[c] !== !1) && (s[c || p] = I(u));
    }
    const i = (u, p) => a.forEach(u, (h, l) => o(h, l, p));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Gt(t) ? i(Kt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = B(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Xt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = B(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || X(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = B(i), i) {
        const u = a.findKey(r, i);
        u && (!n || X(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || X(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = I(s), delete n[o];
        return;
      }
      const u = t ? Qt(o) : String(o).trim();
      u !== o && delete n[o], n[u] = I(s), r[u] = !0;
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
    const r = (this[Se] = this[Se] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const u = B(i);
      r[u] || (Zt(s, i), r[u] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
W.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(W.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(W);
const C = W;
function G(e, t) {
  const n = this || ae, r = t || n, s = C.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(u) {
    o = u.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ve(e) {
  return !!(e && e.__CANCEL__);
}
function j(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(j, m, {
  __CANCEL__: !0
});
function Yt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const en = x.hasStandardBrowserEnv ? (
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
function tn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $e(e, t) {
  return e && !tn(t) ? nn(e, t) : t;
}
const rn = x.hasStandardBrowserEnv ? (
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
      const u = a.isString(i) ? s(i) : i;
      return u.protocol === r.protocol && u.host === r.host;
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
function sn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function on(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const h = Date.now(), l = r[o];
    i || (i = h), n[s] = p, r[s] = h;
    let c = o, y = 0;
    for (; c !== s; )
      y += n[c++], c = c % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), h - i < t)
      return;
    const w = l && h - l;
    return w ? Math.round(y * 1e3 / w) : void 0;
  };
}
function Re(e, t) {
  let n = 0;
  const r = on(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, u = o - n, p = r(u), h = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: p || void 0,
      estimated: p && i && h ? (i - o) / p : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const an = typeof XMLHttpRequest < "u", cn = an && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = C.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: u } = e, p;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p);
    }
    let l;
    if (a.isFormData(s)) {
      if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [d, ...E] = l ? l.split(";").map((b) => b.trim()).filter(Boolean) : [];
        o.setContentType([d || "multipart/form-data", ...E].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const d = e.auth.username || "", E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(d + ":" + E));
    }
    const y = $e(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Me(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function w() {
      if (!c)
        return;
      const d = C.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), b = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: d,
        config: e,
        request: c
      };
      Yt(function(O) {
        n(O), h();
      }, function(O) {
        r(O), h();
      }, b), c = null;
    }
    if ("onloadend" in c ? c.onloadend = w : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, c.onabort = function() {
      c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let E = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || ze;
      e.timeoutErrorMessage && (E = e.timeoutErrorMessage), r(new m(
        E,
        b.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, x.hasStandardBrowserEnv && (u && a.isFunction(u) && (u = u(e)), u || u !== !1 && rn(y))) {
      const d = e.xsrfHeaderName && e.xsrfCookieName && en.read(e.xsrfCookieName);
      d && o.set(e.xsrfHeaderName, d);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function(E, b) {
      c.setRequestHeader(b, E);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Re(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Re(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (d) => {
      c && (r(!d || d.type ? new j(null, e, c) : d), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const f = sn(y);
    if (f && x.protocols.indexOf(f) === -1) {
      r(new m("Unsupported protocol " + f + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, ee = {
  http: Dt,
  xhr: cn
};
a.forEach(ee, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Oe = (e) => `- ${e}`, un = (e) => a.isFunction(e) || e === null || e === !1, We = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !un(n) && (r = ee[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([u, p]) => `adapter ${u} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Oe).join(`
`) : " " + Oe(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ee
};
function Q(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new j(null, e);
}
function Te(e) {
  return Q(e), e.headers = C.from(e.headers), e.data = G.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), We.getAdapter(e.adapter || ae.adapter)(e).then(function(r) {
    return Q(e), r.data = G.call(
      e,
      e.transformResponse,
      r
    ), r.headers = C.from(r.headers), r;
  }, function(r) {
    return Ve(r) || (Q(e), r && r.response && (r.response.data = G.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = C.from(r.response.headers))), Promise.reject(r);
  });
}
const Ae = (e) => e instanceof C ? { ...e } : e;
function _(e, t) {
  t = t || {};
  const n = {};
  function r(h, l, c) {
    return a.isPlainObject(h) && a.isPlainObject(l) ? a.merge.call({ caseless: c }, h, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(h, l, c) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h, c);
    } else
      return r(h, l, c);
  }
  function o(h, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(h, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h);
    } else
      return r(void 0, l);
  }
  function u(h, l, c) {
    if (c in t)
      return r(h, l);
    if (c in e)
      return r(void 0, h);
  }
  const p = {
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
    validateStatus: u,
    headers: (h, l) => s(Ae(h), Ae(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const c = p[l] || s, y = c(e[l], t[l], l);
    a.isUndefined(y) && c !== u || (n[l] = y);
  }), n;
}
const Ke = "1.6.8", ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ce[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Pe = {};
ce.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ke + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, u) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Pe[i] && (Pe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, u) : !0;
  };
};
function ln(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const u = e[o], p = u === void 0 || i(u, o, e);
      if (p !== !0)
        throw new m("option " + o + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const te = {
  assertOptions: ln,
  validators: ce
}, F = te.validators;
class z {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new be(),
      response: new be()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = _(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && te.assertOptions(r, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : te.assertOptions(s, {
      encode: F.function,
      serialize: F.function
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
    ), n.headers = C.concat(i, o);
    const u = [];
    let p = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(n) === !1 || (p = p && d.synchronous, u.unshift(d.fulfilled, d.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(d) {
      h.push(d.fulfilled, d.rejected);
    });
    let l, c = 0, y;
    if (!p) {
      const f = [Te.bind(this), void 0];
      for (f.unshift.apply(f, u), f.push.apply(f, h), y = f.length, l = Promise.resolve(n); c < y; )
        l = l.then(f[c++], f[c++]);
      return l;
    }
    y = u.length;
    let w = n;
    for (c = 0; c < y; ) {
      const f = u[c++], d = u[c++];
      try {
        w = f(w);
      } catch (E) {
        d.call(this, E);
        break;
      }
    }
    try {
      l = Te.call(this, w);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, y = h.length; c < y; )
      l = l.then(h[c++], h[c++]);
    return l;
  }
  getUri(t) {
    t = _(this.defaults, t);
    const n = $e(t.baseURL, t.url);
    return Me(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(n, r) {
    return this.request(_(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, u) {
      return this.request(_(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  z.prototype[t] = n(), z.prototype[t + "Form"] = n(!0);
});
const M = z;
class ue {
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
      const i = new Promise((u) => {
        r.subscribe(u), o = u;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, u) {
      r.reason || (r.reason = new j(o, i, u), n(r.reason));
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
      token: new ue(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const fn = ue;
function dn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function hn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ne = {
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
Object.entries(ne).forEach(([e, t]) => {
  ne[t] = e;
});
const pn = ne;
function Xe(e) {
  const t = new M(e), n = Ce(M.prototype.request, t);
  return a.extend(n, M.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Xe(_(e, s));
  }, n;
}
const S = Xe(ae);
S.Axios = M;
S.CanceledError = j;
S.CancelToken = fn;
S.isCancel = Ve;
S.VERSION = Ke;
S.toFormData = $;
S.AxiosError = m;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = dn;
S.isAxiosError = hn;
S.mergeConfig = _;
S.AxiosHeaders = C;
S.formToJSON = (e) => Je(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = We.getAdapter;
S.HttpStatusCode = pn;
S.default = S;
const mn = S;
class le extends Error {
  constructor(t, n, r = null) {
    super(t), this.message = t, this.status = n, this.body = r, Object.setPrototypeOf(this, le.prototype), this.name = this.constructor.name, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack, this.stack = new Error().stack;
  }
}
async function yn(e, t = {}) {
  const r = await mn.create({
    baseURL: t.baseUrl || ""
  })({ ...t, url: e }), { status: s, statusText: o, headers: i, body: u } = {
    status: r.status,
    statusText: r.statusText,
    headers: r.headers,
    body: r.data
  };
  let p = u;
  return s < 200 || s >= 300 ? Promise.reject(new le(o, s)) : await Promise.resolve({ status: s, headers: i, body: u, json: p });
}
const En = {
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
  httpClient: yn
}, wn = Symbol("DATA_PROVIDER_CONTEXT"), bn = () => Ne(wn, En), Sn = {
  rowKey: "id"
}, Rn = Symbol("FAST_START_CONTEXT"), On = () => Ne(Rn, Sn), Tn = {};
function L(e) {
  return typeof e == "function" ? e() : Ge(e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ge = () => {
};
function xe(e, t = !1, n = "Timeout") {
  return new Promise((r, s) => {
    setTimeout(t ? () => s(n) : r, e);
  });
}
function re(e, t = !1) {
  function n(c, { flush: y = "sync", deep: w = !1, timeout: f, throwOnTimeout: d } = {}) {
    let E = null;
    const R = [new Promise((O) => {
      E = de(
        e,
        (P) => {
          c(P) !== t && (E == null || E(), O(P));
        },
        {
          flush: y,
          deep: w,
          immediate: !0
        }
      );
    })];
    return f != null && R.push(
      xe(f, d).then(() => L(e)).finally(() => E == null ? void 0 : E())
    ), Promise.race(R);
  }
  function r(c, y) {
    if (!Qe(c))
      return n((P) => P === c, y);
    const { flush: w = "sync", deep: f = !1, timeout: d, throwOnTimeout: E } = y ?? {};
    let b = null;
    const O = [new Promise((P) => {
      b = de(
        [e, c],
        ([T, g]) => {
          t !== (T === g) && (b == null || b(), P(T));
        },
        {
          flush: w,
          deep: f,
          immediate: !0
        }
      );
    })];
    return d != null && O.push(
      xe(d, E).then(() => L(e)).finally(() => (b == null || b(), L(e)))
    ), Promise.race(O);
  }
  function s(c) {
    return n((y) => !!y, c);
  }
  function o(c) {
    return r(null, c);
  }
  function i(c) {
    return r(void 0, c);
  }
  function u(c) {
    return n(Number.isNaN, c);
  }
  function p(c, y) {
    return n((w) => {
      const f = Array.from(w);
      return f.includes(c) || f.includes(L(c));
    }, y);
  }
  function h(c) {
    return l(1, c);
  }
  function l(c = 1, y) {
    let w = -1;
    return n(() => (w += 1, w >= c), y);
  }
  return Array.isArray(L(e)) ? {
    toMatch: n,
    toContains: p,
    changed: h,
    changedTimes: l,
    get not() {
      return re(e, !t);
    }
  } : {
    toMatch: n,
    toBe: r,
    toBeTruthy: s,
    toBeNull: o,
    toBeNaN: u,
    toBeUndefined: i,
    changed: h,
    changedTimes: l,
    get not() {
      return re(e, !t);
    }
  };
}
function An(e) {
  return re(e);
}
function Pn(e) {
  const {
    initialData: t,
    shallow: n,
    onSuccess: r = ge,
    onError: s = ge,
    immediate: o,
    resetOnExecute: i = !1,
    queryFn: u,
    queryKey: p
  } = e, h = (n ? he : H)(t), l = H(!1), c = H(!1), y = H(!1), w = he(), f = (T) => {
    c.value = T, l.value = !T;
  }, d = () => {
    i && (h.value = t);
  }, E = () => new Promise((T, g) => {
    An(l).toBe(!0).then(() => w.value ? g(w.value) : T(P));
  }), b = {
    then: (...T) => E().then(...T),
    catch: (...T) => E().catch(...T)
  };
  let R = 0;
  const O = () => {
    if (w.value = void 0, c.value)
      return b;
    if (u === void 0)
      return l.value = !0, b;
    d(), f(!0), R += 1;
    const T = R;
    return u().then((g) => {
      const fe = g;
      h.value = fe, r(fe);
    }).catch((g) => {
      w.value = g, s(g);
    }).finally(() => {
      var g;
      (g = e.onFinish) == null || g.call(e), T === R && f(!1);
    }), b;
  };
  o && O();
  const P = {
    data: h,
    error: w,
    isFinished: l,
    isLoading: c,
    isAborted: y,
    isCanceled: y,
    execute: O
  };
  return {
    ...P,
    ...b
  };
}
const xn = (e, t = {}) => {
  const { pagination: n = { page: 1, perPage: 20 }, filter: r = Tn } = t, s = bn();
  On();
  const o = Pn({
    immediate: !0,
    // queryKey: [filter, resource, pagination],
    queryFn: () => new Promise((p, h) => {
      setTimeout(() => {
        s.getList(e, {
          pagination: n,
          filter: r
        }).then(({ data: l, total: c }) => ({
          data: l,
          total: c
        })).then(p).catch(h);
      }, 2e3);
    }),
    initialData: {
      data: [],
      total: 0
    }
  }), i = pe(() => o.data.value.data), u = pe(() => o.data.value.total);
  return {
    ...o,
    data: i,
    total: u
  };
};
export {
  xn as useGetList
};
//# sourceMappingURL=useGetList.mjs.map
