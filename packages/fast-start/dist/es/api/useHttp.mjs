import { unref as U, watch as F, isRef as k, shallowRef as E, ref as g } from "vue";
function T(n) {
  return typeof n == "function" ? n() : U(n);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const N = () => {
};
function S(n, a = !1, o = "Timeout") {
  return new Promise((d, p) => {
    setTimeout(a ? () => p(o) : d, n);
  });
}
function x(n, a = !1) {
  function o(e, { flush: t = "sync", deep: r = !1, timeout: s, throwOnTimeout: v } = {}) {
    let l = null;
    const m = [new Promise((y) => {
      l = F(
        n,
        (f) => {
          e(f) !== a && (l == null || l(), y(f));
        },
        {
          flush: t,
          deep: r,
          immediate: !0
        }
      );
    })];
    return s != null && m.push(
      S(s, v).then(() => T(n)).finally(() => l == null ? void 0 : l())
    ), Promise.race(m);
  }
  function d(e, t) {
    if (!k(e))
      return o((f) => f === e, t);
    const { flush: r = "sync", deep: s = !1, timeout: v, throwOnTimeout: l } = t ?? {};
    let i = null;
    const y = [new Promise((f) => {
      i = F(
        [n, e],
        ([u, c]) => {
          a !== (u === c) && (i == null || i(), f(u));
        },
        {
          flush: r,
          deep: s,
          immediate: !0
        }
      );
    })];
    return v != null && y.push(
      S(v, l).then(() => T(n)).finally(() => (i == null || i(), T(n)))
    ), Promise.race(y);
  }
  function p(e) {
    return o((t) => !!t, e);
  }
  function P(e) {
    return d(null, e);
  }
  function b(e) {
    return d(void 0, e);
  }
  function B(e) {
    return o(Number.isNaN, e);
  }
  function A(e, t) {
    return o((r) => {
      const s = Array.from(r);
      return s.includes(e) || s.includes(T(e));
    }, t);
  }
  function w(e) {
    return h(1, e);
  }
  function h(e = 1, t) {
    let r = -1;
    return o(() => (r += 1, r >= e), t);
  }
  return Array.isArray(T(n)) ? {
    toMatch: o,
    toContains: A,
    changed: w,
    changedTimes: h,
    get not() {
      return x(n, !a);
    }
  } : {
    toMatch: o,
    toBe: d,
    toBeTruthy: p,
    toBeNull: P,
    toBeNaN: B,
    toBeUndefined: b,
    changed: w,
    changedTimes: h,
    get not() {
      return x(n, !a);
    }
  };
}
function q(n) {
  return x(n);
}
function G(n) {
  const {
    initialData: a,
    shallow: o,
    onSuccess: d = N,
    onError: p = N,
    immediate: P,
    resetOnExecute: b = !1,
    queryFn: B,
    queryKey: A
  } = n, w = (o ? E : g)(a), h = g(!1), e = g(!1), t = g(!1), r = E(), s = (u) => {
    e.value = u, h.value = !u;
  }, v = () => {
    b && (w.value = a);
  }, l = () => new Promise((u, c) => {
    q(h).toBe(!0).then(() => r.value ? c(r.value) : u(f));
  }), i = {
    then: (...u) => l().then(...u),
    catch: (...u) => l().catch(...u)
  };
  let m = 0;
  const y = () => {
    if (r.value = void 0, e.value)
      return i;
    if (B === void 0)
      return h.value = !0, i;
    v(), s(!0), m += 1;
    const u = m;
    return B().then((c) => {
      const C = c;
      w.value = C, d(C);
    }).catch((c) => {
      r.value = c, p(c);
    }).finally(() => {
      var c;
      (c = n.onFinish) == null || c.call(n), u === m && s(!1);
    }), i;
  };
  P && y();
  const f = {
    data: w,
    error: r,
    isFinished: h,
    isLoading: e,
    isAborted: t,
    isCanceled: t,
    execute: y
  };
  return {
    ...f,
    ...i
  };
}
export {
  G as useHttp
};
//# sourceMappingURL=useHttp.mjs.map
