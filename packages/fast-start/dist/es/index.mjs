import { defineComponent as Pt, openBlock as At, createBlock as te, unref as ot, normalizeStyle as Jn, withCtx as mt, createTextVNode as Rn, renderSlot as Zt, computed as Te, createElementBlock as je, Fragment as hs, renderList as hr, normalizeProps as mr, mergeProps as Gs, createVNode as yt, resolveComponent as yr, toDisplayString as ms, effectScope as br, watch as ae, isRef as gr, ref as Xt, readonly as wr, provide as Xs, inject as Wn, shallowRef as ze, onUnmounted as Sr, onMounted as Ys, resolveDirective as vr, withDirectives as Er } from "vue";
import { ElHeader as Or, ElMenuItem as Tr, ElSubMenu as xr, ElAside as Rr, ElMenu as _r, ElMain as Ar, ElContainer as Cr, ElTable as Pr, ElPagination as Nr } from "element-plus";
import { RouterView as Zs } from "vue-router";
const Gn = 60, Fr = /* @__PURE__ */ Pt({
  __name: "Header",
  setup(t) {
    return (e, n) => (At(), te(ot(Or), {
      class: "fast-start-layout-header",
      style: Jn({ height: ot(Gn) })
    }, {
      default: mt(() => [
        Rn(" header ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
}), Qs = /* @__PURE__ */ Pt({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(t) {
    const e = (n) => n;
    return (n, s) => n.when ? Zt(n.$slots, "default", {
      key: 0,
      value: e(n.when)
    }) : Zt(n.$slots, "fallback", { key: 1 });
  }
}), $r = /* @__PURE__ */ Pt({
  name: "For",
  __name: "For",
  props: {
    echo: {},
    rowKey: {}
  },
  setup(t) {
    const e = t, n = Te(() => e.echo);
    return (s, o) => (At(), je(
      hs,
      null,
      [
        (At(!0), je(
          hs,
          null,
          hr(s.echo, (r) => Zt(s.$slots, "default", mr(Gs({ key: s.rowKey }, r)))),
          128
          /* KEYED_FRAGMENT */
        )),
        yt(Qs, {
          when: !n.value || !n.value.length || n.value.length === 0
        }, {
          default: mt(() => [
            Zt(s.$slots, "fallback")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["when"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Dr = /* @__PURE__ */ Pt({
  name: "FsSideBarItem",
  __name: "Item",
  props: {
    items: {}
  },
  setup(t) {
    return (e, n) => {
      const s = yr("FsSideBarItem");
      return At(), te(ot($r), {
        echo: e.items,
        "row-key": "path"
      }, {
        default: mt(({ path: o, children: r, name: c }) => [
          yt(ot(Qs), {
            when: r && r.length > 0
          }, {
            fallback: mt(() => [
              yt(ot(Tr), {
                class: "fast-start-menu-item",
                index: o
              }, {
                default: mt(() => [
                  Rn(
                    ms(c),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["index"])
            ]),
            default: mt(() => [
              yt(ot(xr), {
                class: "fast-start-menu-item-title",
                index: o
              }, {
                title: mt(() => [
                  Rn(
                    ms(c),
                    1
                    /* TEXT */
                  )
                ]),
                default: mt(() => [
                  yt(s, { items: r }, null, 8, ["items"])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["index"])
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["when"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["echo"]);
    };
  }
});
function kr(t) {
  let e = !1, n;
  const s = br(!0);
  return (...o) => (e || (n = s.run(() => t(...o)), e = !0), n);
}
function ve(t) {
  return typeof t == "function" ? t() : ot(t);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ys = () => {
};
function bs(t, e = !1, n = "Timeout") {
  return new Promise((s, o) => {
    setTimeout(e ? () => o(n) : s, t);
  });
}
function _n(t, e = !1) {
  function n(a, { flush: m = "sync", deep: y = !1, timeout: p, throwOnTimeout: h } = {}) {
    let O = null;
    const T = [new Promise((w) => {
      O = ae(
        t,
        (x) => {
          a(x) !== e && (O == null || O(), w(x));
        },
        {
          flush: m,
          deep: y,
          immediate: !0
        }
      );
    })];
    return p != null && T.push(
      bs(p, h).then(() => ve(t)).finally(() => O == null ? void 0 : O())
    ), Promise.race(T);
  }
  function s(a, m) {
    if (!gr(a))
      return n((x) => x === a, m);
    const { flush: y = "sync", deep: p = !1, timeout: h, throwOnTimeout: O } = m ?? {};
    let g = null;
    const w = [new Promise((x) => {
      g = ae(
        [t, a],
        ([R, _]) => {
          e !== (R === _) && (g == null || g(), x(R));
        },
        {
          flush: y,
          deep: p,
          immediate: !0
        }
      );
    })];
    return h != null && w.push(
      bs(h, O).then(() => ve(t)).finally(() => (g == null || g(), ve(t)))
    ), Promise.race(w);
  }
  function o(a) {
    return n((m) => !!m, a);
  }
  function r(a) {
    return s(null, a);
  }
  function c(a) {
    return s(void 0, a);
  }
  function i(a) {
    return n(Number.isNaN, a);
  }
  function u(a, m) {
    return n((y) => {
      const p = Array.from(y);
      return p.includes(a) || p.includes(ve(a));
    }, m);
  }
  function f(a) {
    return l(1, a);
  }
  function l(a = 1, m) {
    let y = -1;
    return n(() => (y += 1, y >= a), m);
  }
  return Array.isArray(ve(t)) ? {
    toMatch: n,
    toContains: u,
    changed: f,
    changedTimes: l,
    get not() {
      return _n(t, !e);
    }
  } : {
    toMatch: n,
    toBe: s,
    toBeTruthy: o,
    toBeNull: r,
    toBeNaN: i,
    toBeUndefined: c,
    changed: f,
    changedTimes: l,
    get not() {
      return _n(t, !e);
    }
  };
}
function Lr(t) {
  return _n(t);
}
const to = kr(() => {
  const t = Xt({
    menu: []
  });
  function e(n) {
    t.value.menu = n;
  }
  return {
    state: wr(t),
    setMenu: e
  };
}), Br = /* @__PURE__ */ Pt({
  __name: "SideBar",
  setup(t) {
    const { state: e } = to();
    return (n, s) => (At(), te(ot(Rr), {
      class: "fast-start-aside",
      width: "230px",
      style: Jn({ height: `calc(100vh - ${ot(Gn)}px)` })
    }, {
      default: mt(() => [
        yt(ot(_r), { class: "fast-start-menu" }, {
          default: mt(() => [
            yt(Dr, {
              items: ot(e).menu
            }, null, 8, ["items"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
}), Hr = /* @__PURE__ */ Pt({
  __name: "Main",
  setup(t) {
    return (e, n) => (At(), te(ot(Ar), {
      class: "fast-start-layout-main",
      style: Jn({
        height: `calc(100vh - ${ot(Gn)}px) `
      })
    }, {
      default: mt(() => [
        yt(ot(Zs))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
}), Ur = /* @__PURE__ */ Pt({
  __name: "DefaultLayout",
  setup(t) {
    return (e, n) => (At(), je("div", null, [
      yt(Fr),
      yt(ot(Cr), null, {
        default: mt(() => [
          yt(Br),
          yt(Hr)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), Ir = [
  {
    name: "primary",
    value: "rgb(0,100,250)"
  },
  {
    name: "primary-light-3",
    value: "rgb(50,149,251)"
  },
  {
    name: "primary-light-5",
    value: "rgb(101,178,252)"
  },
  {
    name: "primary-light-7",
    value: "rgb(152,205,253)"
  },
  {
    name: "primary-light-8",
    value: "rgb(203,231,254)"
  },
  {
    name: "primary-light-9",
    value: "rgb(234,245,255)"
  }
], Mr = [
  {
    name: "success",
    value: "rgb(59,179,70)"
  },
  {
    name: "success-light-3",
    value: "rgb(90,194,98)"
  },
  {
    name: "success-light-5",
    value: "rgb(125,209,130)"
  },
  {
    name: "success-light-7",
    value: "rgb(164,224,167)"
  },
  {
    name: "success-light-8",
    value: "rgb(208,240,209)"
  },
  {
    name: "success-light-9",
    value: "rgb(236,247,236)"
  }
], jr = [
  {
    name: "warning",
    value: "rgb(250,200,0)"
  },
  {
    name: "warning-light-3",
    value: "rgb(251,218,50)"
  },
  {
    name: "warning-light-5",
    value: "rgb(252,232,101)"
  },
  {
    name: "warning-light-7",
    value: "rgb(253,243,152)"
  },
  {
    name: "warning-light-8",
    value: "rgb(254,251,203)"
  },
  {
    name: "warning-light-9",
    value: "rgb(255,253,234)"
  }
], zr = [
  {
    name: "danger",
    value: "rgb(249,57,32)"
  },
  {
    name: "danger-light-3",
    value: "rgb(250,102,76)"
  },
  {
    name: "danger-light-5",
    value: "rgb(250,144,120)"
  },
  {
    name: "danger-light-7",
    value: "rgb(251,183,165)"
  },
  {
    name: "danger-light-8",
    value: "rgb(252,221,210)"
  },
  {
    name: "danger-light-9",
    value: "rgb(254,242,237)"
  }
], Vr = [
  {
    name: "error",
    value: "rgb(249,57,32)"
  },
  {
    name: "error-light-3",
    value: "rgb(250,102,76)"
  },
  {
    name: "error-light-5",
    value: "rgb(250,144,120)"
  },
  {
    name: "error-light-7",
    value: "rgb(251,183,165)"
  },
  {
    name: "error-light-8",
    value: "rgb(252,221,210)"
  },
  {
    name: "error-light-9",
    value: "rgb(254,242,237)"
  }
], qr = [
  {
    name: "info",
    value: "rgb(107,112,117)"
  },
  {
    name: "info-light-3",
    value: "rgb(136,141,146)"
  },
  {
    name: "info-light-5",
    value: "rgb(167,171,176)"
  },
  {
    name: "info-light-7",
    value: "rgb(198,202,205)"
  },
  {
    name: "info-light-8",
    value: "rgb(230,232,234)"
  },
  {
    name: "info-light-9",
    value: "rgb(249,249,249)"
  }
], Kr = [
  ...Ir,
  ...Mr,
  ...jr,
  ...zr,
  ...Vr,
  ...qr
], Jr = [
  {
    name: "primary",
    value: "rgb(28,31,35)"
  },
  {
    name: "regular",
    value: "rgba(28,31,35,.8)"
  },
  {
    name: "secondary",
    value: "rgba(28,31,35,.62)"
  },
  {
    name: "placeholder",
    value: "rgba(28,31,35,.38)"
  }
].map((t) => ({
  name: "color-" + t.name,
  value: t.value
})), Wr = [...Jr], Gr = [
  {
    name: "color",
    value: Kr
  },
  {
    name: "text",
    value: Wr
  }
], Xr = () => {
  const t = document.documentElement;
  for (const e of Gr)
    for (const n of e.value)
      t.style.setProperty(`--el-${e.name}-${n.name}`, n.value);
}, Yr = {
  rowKey: "id"
}, eo = Symbol("FAST_START_CONTEXT"), Zr = (t) => Xs(eo, t), no = () => Wn(eo, Yr);
/*!
 * OverlayScrollbars
 * Version: 2.7.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const Rt = (t, e) => {
  const { o: n, u: s, _: o } = t;
  let r = n, c;
  const i = (l, a) => {
    const m = r, y = l, p = a || (s ? !s(m, y) : m !== y);
    return (p || o) && (r = y, c = m), [r, p, c];
  };
  return [e ? (l) => i(e(r, c), l) : i, (l) => [r, !!l, c]];
}, so = typeof window < "u" && typeof document < "u", Et = so ? window : {}, Be = Math.max, Qr = Math.min, An = Math.round, oo = Et.cancelAnimationFrame, ro = Et.requestAnimationFrame, Cn = Et.setTimeout, Pn = Et.clearTimeout, Ze = (t) => typeof Et[t] < "u" ? Et[t] : void 0, tc = Ze("MutationObserver"), gs = Ze("IntersectionObserver"), Ve = Ze("ResizeObserver"), Nn = Ze("ScrollTimeline"), co = so && Node.ELEMENT_NODE, { toString: ec, hasOwnProperty: bn } = Object.prototype, nc = /^\[object (.+)\]$/, Ae = (t) => t === void 0, Qe = (t) => t === null, sc = (t) => Ae(t) || Qe(t) ? `${t}` : ec.call(t).replace(nc, "$1").toLowerCase(), kt = (t) => typeof t == "number", tn = (t) => typeof t == "string", ao = (t) => typeof t == "boolean", Lt = (t) => typeof t == "function", Ct = (t) => Array.isArray(t), xe = (t) => typeof t == "object" && !Ct(t) && !Qe(t), en = (t) => {
  const e = !!t && t.length, n = kt(e) && e > -1 && e % 1 == 0;
  return Ct(t) || !Lt(t) && n ? e > 0 && xe(t) ? e - 1 in t : !0 : !1;
}, qe = (t) => {
  if (!t || !xe(t) || sc(t) !== "object")
    return !1;
  let e;
  const n = "constructor", s = t[n], o = s && s.prototype, r = bn.call(t, n), c = o && bn.call(o, "isPrototypeOf");
  if (s && !r && !c)
    return !1;
  for (e in t)
    ;
  return Ae(e) || bn.call(t, e);
}, Ke = (t) => {
  const e = HTMLElement;
  return t ? e ? t instanceof e : t.nodeType === co : !1;
}, nn = (t) => {
  const e = Element;
  return t ? e ? t instanceof e : t.nodeType === co : !1;
};
function W(t, e) {
  if (en(t))
    for (let n = 0; n < t.length && e(t[n], n, t) !== !1; n++)
      ;
  else
    t && W(Object.keys(t), (n) => e(t[n], n, t));
  return t;
}
const sn = (t, e) => t.indexOf(e) >= 0, Ht = (t, e) => t.concat(e), et = (t, e, n) => (!n && !tn(e) && en(e) ? Array.prototype.push.apply(t, e) : t.push(e), t), ee = (t) => Array.from(t || []), io = (t) => Ct(t) ? t : [t], Fn = (t) => !!t && !t.length, ws = (t) => ee(new Set(t)), Ot = (t, e, n) => {
  W(t, (o) => o && o.apply(void 0, e || [])), !n && (t.length = 0);
}, lo = "paddingTop", uo = "paddingRight", fo = "paddingLeft", po = "paddingBottom", ho = "marginLeft", mo = "marginRight", yo = "marginBottom", on = "overflowX", rn = "overflowY", fe = "width", de = "height", pe = "hidden", bo = "visible", Xn = (t, e, n, s) => {
  if (t && e) {
    let o = !0;
    return W(n, (r) => {
      const c = s ? s(t[r]) : t[r], i = s ? s(e[r]) : e[r];
      c !== i && (o = !1);
    }), o;
  }
  return !1;
}, go = (t, e) => Xn(t, e, ["w", "h"]), wo = (t, e) => Xn(t, e, ["x", "y"]), oc = (t, e) => Xn(t, e, ["t", "r", "b", "l"]), _t = () => {
}, L = (t, ...e) => t.bind(0, ...e), re = (t) => {
  let e;
  const n = t ? Cn : ro, s = t ? Pn : oo;
  return [(o) => {
    s(e), e = n(o, Lt(t) ? t() : t);
  }, () => s(e)];
}, So = (t, e) => {
  let n, s, o, r = _t;
  const { v: c, p: i, S: u } = e || {}, f = function(p) {
    r(), Pn(n), n = s = void 0, r = _t, t.apply(this, p);
  }, l = (y) => u && s ? u(s, y) : y, a = () => {
    r !== _t && f(l(o) || o);
  }, m = function() {
    const p = ee(arguments), h = Lt(c) ? c() : c;
    if (kt(h) && h >= 0) {
      const g = Lt(i) ? i() : i, T = kt(g) && g >= 0, w = h > 0 ? Cn : ro, x = h > 0 ? Pn : oo, _ = l(p) || p, U = f.bind(0, _);
      r();
      const I = w(U, h);
      r = () => x(I), T && !n && (n = Cn(a, g)), s = o = _;
    } else
      f(p);
  };
  return m.m = a, m;
}, vo = (t, e) => Object.prototype.hasOwnProperty.call(t, e), qt = (t) => t ? Object.keys(t) : [], J = (t, e, n, s, o, r, c) => {
  const i = [e, n, s, o, r, c];
  return (typeof t != "object" || Qe(t)) && !Lt(t) && (t = {}), W(i, (u) => {
    W(u, (f, l) => {
      const a = u[l];
      if (t === a)
        return !0;
      const m = Ct(a);
      if (a && qe(a)) {
        const y = t[l];
        let p = y;
        m && !Ct(y) ? p = [] : !m && !qe(y) && (p = {}), t[l] = J(p, a);
      } else
        t[l] = m ? a.slice() : a;
    });
  }), t;
}, Eo = (t, e) => W(J({}, t), (n, s, o) => {
  n === void 0 ? delete o[s] : e && n && qe(n) && (o[s] = Eo(n, e));
}), Yn = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, $n = (t, e, n) => Be(t, Qr(e, n)), Yt = (t) => ee(new Set((Ct(t) ? t : (t || "").split(" ")).filter((e) => e))), cn = (t, e) => t && t.getAttribute(e), xt = (t, e, n) => {
  W(Yt(e), (s) => {
    t && t.setAttribute(s, n || "");
  });
}, $t = (t, e) => {
  W(Yt(e), (n) => t && t.removeAttribute(n));
}, an = (t, e) => {
  const n = Yt(cn(t, e)), s = L(xt, t, e), o = (r, c) => {
    const i = new Set(n);
    return W(Yt(r), (u) => i[c](u)), ee(i).join(" ");
  };
  return {
    O: (r) => s(o(r, "delete")),
    $: (r) => s(o(r, "add")),
    C: (r) => {
      const c = Yt(r);
      return c.reduce((i, u) => i && n.includes(u), c.length > 0);
    }
  };
}, Oo = (t, e, n) => {
  an(t, e).O(n);
}, Re = (t, e, n) => (an(t, e).$(n), L(Oo, t, e, n)), He = (t, e, n, s) => {
  (s ? Re : Oo)(t, e, n);
}, rc = (t, e, n) => an(t, e).C(n), To = (t) => an(t, "class"), Zn = (t, e) => {
  To(t).O(e);
}, Je = (t, e) => (To(t).$(e), L(Zn, t, e)), xo = (t, e) => {
  const n = [], s = e ? nn(e) && e : document;
  return s ? et(n, s.querySelectorAll(t)) : n;
}, cc = (t, e) => {
  const n = e ? nn(e) && e : document;
  return n ? n.querySelector(t) : null;
}, We = (t, e) => nn(t) ? t.matches(e) : !1, Ro = (t) => We(t, "body"), Dn = (t) => t ? ee(t.childNodes) : [], he = (t) => t && t.parentElement, ce = (t, e) => nn(t) && t.closest(e), ac = (t, e, n) => {
  const s = ce(t, e), o = t && cc(n, s), r = ce(o, e) === s;
  return s && o ? s === t || o === t || r && ce(ce(t, n), e) !== s : !1;
}, Kt = (t) => {
  if (en(t))
    W(ee(t), (e) => Kt(e));
  else if (t) {
    const e = he(t);
    e && e.removeChild(t);
  }
}, _o = (t, e, n) => {
  if (n && t) {
    let s = e, o;
    return en(n) ? (o = document.createDocumentFragment(), W(n, (r) => {
      r === s && (s = r.previousSibling), o.appendChild(r);
    })) : o = n, e && (s ? s !== e && (s = s.nextSibling) : s = t.firstChild), t.insertBefore(o, s || null), () => Kt(n);
  }
  return _t;
}, St = (t, e) => _o(t, null, e), Ss = (t, e) => _o(he(t), t && t.nextSibling, e), ie = (t) => {
  const e = document.createElement("div");
  return xt(e, "class", t), e;
}, Ao = (t) => {
  const e = ie();
  return e.innerHTML = t.trim(), W(Dn(e), (n) => Kt(n));
}, ic = /^--/, vs = (t, e) => t.getPropertyValue(e) || t[e] || "", Qn = (t) => {
  const e = t || 0;
  return isFinite(e) ? e : 0;
}, Le = (t) => Qn(parseFloat(t || "")), Es = (t) => `${(Qn(t) * 100).toFixed(3)}%`, kn = (t) => `${Qn(t)}px`;
function me(t, e) {
  t && W(e, (n, s) => {
    try {
      const o = t.style, r = kt(n) ? kn(n) : (n || "") + "";
      ic.test(s) ? o.setProperty(s, r) : o[s] = r;
    } catch {
    }
  });
}
function Qt(t, e, n) {
  const s = tn(e);
  let o = s ? "" : {};
  if (t) {
    const r = Et.getComputedStyle(t, n) || t.style;
    o = s ? vs(r, e) : e.reduce((c, i) => (c[i] = vs(r, i), c), o);
  }
  return o;
}
const Vt = (t) => Qt(t, "direction") === "rtl", Os = (t, e, n) => {
  const s = e ? `${e}-` : "", o = n ? `-${n}` : "", r = `${s}top${o}`, c = `${s}right${o}`, i = `${s}bottom${o}`, u = `${s}left${o}`, f = Qt(t, [r, c, i, u]);
  return {
    t: Le(f[r]),
    r: Le(f[c]),
    b: Le(f[i]),
    l: Le(f[u])
  };
}, gn = (t, e) => `translate${xe(t) ? `(${t.x},${t.y})` : `${e ? "X" : "Y"}(${t})`}`, lc = {
  w: 0,
  h: 0
}, ln = (t, e) => e ? {
  w: e[`${t}Width`],
  h: e[`${t}Height`]
} : lc, uc = (t) => ln("inner", t || Et), Oe = L(ln, "offset"), Co = L(ln, "client"), Ln = L(ln, "scroll"), ts = (t) => {
  const e = parseFloat(Qt(t, fe)) || 0, n = parseFloat(Qt(t, de)) || 0;
  return {
    w: e - An(e),
    h: n - An(n)
  };
}, le = (t) => t.getBoundingClientRect(), Bn = (t) => !!(t && (t[de] || t[fe])), Po = (t, e) => {
  const n = Bn(t);
  return !Bn(e) && n;
}, Ts = (t, e, n, s) => {
  W(Yt(e), (o) => {
    t.removeEventListener(o, n, s);
  });
}, st = (t, e, n, s) => {
  var o;
  const r = (o = s && s.H) != null ? o : !0, c = s && s.I || !1, i = s && s.A || !1, u = {
    passive: r,
    capture: c
  };
  return L(Ot, Yt(e).map((f) => {
    const l = i ? (a) => {
      Ts(t, f, l, c), n(a);
    } : n;
    return t.addEventListener(f, l, u), L(Ts, t, f, l, c);
  }));
}, es = (t) => t.stopPropagation(), xs = (t) => t.preventDefault(), fc = {
  x: 0,
  y: 0
}, wn = (t) => {
  const e = t && le(t);
  return e ? {
    x: e.left + Et.scrollX,
    y: e.top + Et.scrollY
  } : fc;
}, Ge = (t, e, n) => n ? n.n ? -t + 0 : n.i ? e - t : t : t, Rs = (t, e) => [Ge(0, t, e), Ge(t, t, e)], _s = (t, e, n) => $n(0, 1, Ge(t, e, n) / e || 0), Jt = (t, e) => {
  const { x: n, y: s } = kt(e) ? {
    x: e,
    y: e
  } : e || {};
  kt(n) && (t.scrollLeft = n), kt(s) && (t.scrollTop = s);
}, ye = (t) => ({
  x: t.scrollLeft,
  y: t.scrollTop
}), As = (t, e) => {
  W(io(e), t);
}, Hn = (t) => {
  const e = /* @__PURE__ */ new Map(), n = (r, c) => {
    if (r) {
      const i = e.get(r);
      As((u) => {
        i && i[u ? "delete" : "clear"](u);
      }, c);
    } else
      e.forEach((i) => {
        i.clear();
      }), e.clear();
  }, s = (r, c) => {
    if (tn(r)) {
      const f = e.get(r) || /* @__PURE__ */ new Set();
      return e.set(r, f), As((l) => {
        Lt(l) && f.add(l);
      }, c), L(n, r, c);
    }
    ao(c) && c && n();
    const i = qt(r), u = [];
    return W(i, (f) => {
      const l = r[f];
      l && et(u, s(f, l));
    }), L(Ot, u);
  }, o = (r, c) => {
    W(ee(e.get(r)), (i) => {
      c && !Fn(c) ? i.apply(0, c) : i();
    });
  };
  return s(t || {}), [s, n, o];
}, Cs = (t) => JSON.stringify(t, (e, n) => {
  if (Lt(n))
    throw 0;
  return n;
}), Ps = (t, e) => t ? `${e}`.split(".").reduce((n, s) => n && vo(n, s) ? n[s] : void 0, t) : void 0, dc = {
  paddingAbsolute: !1,
  showNativeOverlaidScrollbars: !1,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: !1,
    dragScroll: !0,
    clickScroll: !1,
    pointers: ["mouse", "touch", "pen"]
  }
}, No = (t, e) => {
  const n = {}, s = Ht(qt(e), qt(t));
  return W(s, (o) => {
    const r = t[o], c = e[o];
    if (xe(r) && xe(c))
      J(n[o] = {}, No(r, c)), Yn(n[o]) && delete n[o];
    else if (vo(e, o) && c !== r) {
      let i = !0;
      if (Ct(r) || Ct(c))
        try {
          Cs(r) === Cs(c) && (i = !1);
        } catch {
        }
      i && (n[o] = c);
    }
  }), n;
}, Ns = (t, e, n) => (s) => [Ps(t, s), n || Ps(e, s) !== void 0], Ce = "data-overlayscrollbars", Fo = "os-environment", pc = `${Fo}-scrollbar-hidden`, Sn = `${Ce}-initialize`, wt = Ce, $o = `${wt}-overflow-x`, Do = `${wt}-overflow-y`, ko = "overflowVisible", hc = "scrollbarPressed", Un = "updating", mc = "body", zt = `${Ce}-viewport`, yc = "arrange", Lo = "scrollbarHidden", ue = ko, In = `${Ce}-padding`, bc = ue, Fs = `${Ce}-content`, ns = "os-size-observer", gc = `${ns}-appear`, wc = `${ns}-listener`, Sc = "os-trinsic-observer", vc = "os-theme-none", bt = "os-scrollbar", Ec = `${bt}-rtl`, Oc = `${bt}-horizontal`, Tc = `${bt}-vertical`, Bo = `${bt}-track`, ss = `${bt}-handle`, xc = `${bt}-visible`, Rc = `${bt}-cornerless`, $s = `${bt}-interaction`, Ds = `${bt}-unusable`, Mn = `${bt}-auto-hide`, ks = `${Mn}-hidden`, Ls = `${bt}-wheel`, _c = `${Bo}-interactive`, Ac = `${ss}-interactive`, Ho = {}, Uo = {}, Cc = (t) => {
  W(t, (e) => W(e, (n, s) => {
    Ho[s] = e[s];
  }));
}, Io = (t, e, n) => qt(t).map((s) => {
  const { static: o, instance: r } = t[s], [c, i, u] = n || [], f = n ? r : o;
  if (f) {
    const l = n ? f(c, i, e) : f(e);
    return (u || Uo)[s] = l;
  }
}), ge = (t) => Uo[t], Pc = "__osOptionsValidationPlugin", Nc = "__osSizeObserverPlugin", Fc = (t, e) => {
  const { T: n } = e, [s, o] = t("showNativeOverlaidScrollbars");
  return [s && n.x && n.y, o];
}, Xe = (t) => t.indexOf(bo) === 0, Mo = (t, e) => {
  const { D: n } = t, s = (u) => {
    const f = Qt(n, u), a = (e ? e[u] : f) === "scroll";
    return [f, a];
  }, [o, r] = s(on), [c, i] = s(rn);
  return {
    k: {
      x: o,
      y: c
    },
    R: {
      x: r,
      y: i
    }
  };
}, $c = (t, e, n, s) => {
  const o = e.x || e.y, r = (l, a) => {
    const m = Xe(l), y = m && o ? "hidden" : "", p = a && m && l.replace(`${bo}-`, "") || y;
    return [a && !m ? l : "", Xe(p) ? "hidden" : p];
  }, [c, i] = r(n.x, e.x), [u, f] = r(n.y, e.y);
  return s[on] = i && u ? i : c, s[rn] = f && c ? f : u, Mo(t, s);
}, os = "__osScrollbarsHidingPlugin", Dc = "__osClickScrollPlugin";
let vn;
const kc = () => {
  const t = (w, x, R, _) => {
    St(w, x);
    const U = Co(x), I = Oe(x), B = ts(R);
    return _ && Kt(x), {
      x: I.h - U.h + B.h,
      y: I.w - U.w + B.w
    };
  }, e = (w) => {
    let x = !1;
    const R = Je(w, pc);
    try {
      x = Qt(w, "scrollbar-width") === "none" || Qt(w, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return R(), x;
  }, n = (w, x) => {
    me(w, {
      [on]: pe,
      [rn]: pe,
      direction: "rtl"
    }), Jt(w, {
      x: 0
    });
    const R = wn(w), _ = wn(x);
    Jt(w, {
      x: -999
    });
    const U = wn(x);
    return {
      i: R.x === _.x,
      n: _.x !== U.x
    };
  }, { body: s } = document, r = Ao(`<div class="${Fo}"><div></div></div>`)[0], c = r.firstChild, [i, , u] = Hn(), [f, l] = Rt({
    o: t(s, r, c),
    u: wo
  }, L(t, s, r, c, !0)), [a] = l(), m = e(r), y = {
    x: a.x === 0,
    y: a.y === 0
  }, p = {
    elements: {
      host: null,
      padding: !m,
      viewport: (w) => m && Ro(w) && w,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, h = J({}, dc), O = L(J, {}, h), g = L(J, {}, p), T = {
    P: a,
    T: y,
    L: m,
    J: !!Nn,
    K: n(r, c),
    Z: L(i, "r"),
    G: g,
    tt: (w) => J(p, w) && g(),
    nt: O,
    ot: (w) => J(h, w) && O(),
    st: J({}, p),
    et: J({}, h)
  };
  return $t(r, "style"), Kt(r), Et.addEventListener("resize", () => {
    let w;
    if (!m && (!y.x || !y.y)) {
      const x = ge(os);
      w = !!(x ? x.Y() : _t)(T, f);
    }
    u("r", [w]);
  }), T;
}, Tt = () => (vn || (vn = kc()), vn), jo = (t, e) => Lt(e) ? e.apply(0, t) : e, Lc = (t, e, n, s) => {
  const o = Ae(s) ? n : s;
  return jo(t, o) || e.apply(0, t);
}, zo = (t, e, n, s) => {
  const o = Ae(s) ? n : s, r = jo(t, o);
  return !!r && (Ke(r) ? r : e.apply(0, t));
}, Bc = (t, e) => {
  const { nativeScrollbarsOverlaid: n, body: s } = e || {}, { T: o, L: r, G: c } = Tt(), { nativeScrollbarsOverlaid: i, body: u } = c().cancel, f = n ?? i, l = Ae(s) ? u : s, a = (o.x || o.y) && f, m = t && (Qe(l) ? !r : l);
  return !!a || !!m;
}, rs = /* @__PURE__ */ new WeakMap(), Hc = (t, e) => {
  rs.set(t, e);
}, Uc = (t) => {
  rs.delete(t);
}, Vo = (t) => rs.get(t), Ic = (t, e, n) => {
  let s = !1;
  const o = n ? /* @__PURE__ */ new WeakMap() : !1, r = () => {
    s = !0;
  }, c = (i) => {
    if (o && n) {
      const u = n.map((f) => {
        const [l, a] = f || [];
        return [a && l ? (i || xo)(l, t) : [], a];
      });
      W(u, (f) => W(f[0], (l) => {
        const a = f[1], m = o.get(l) || [];
        if (t.contains(l) && a) {
          const p = st(l, a, (h) => {
            s ? (p(), o.delete(l)) : e(h);
          });
          o.set(l, et(m, p));
        } else
          Ot(m), o.delete(l);
      }));
    }
  };
  return c(), [r, c];
}, Bs = (t, e, n, s) => {
  let o = !1;
  const { ct: r, rt: c, lt: i, it: u, ut: f, ft: l } = s || {}, a = So(() => o && n(!0), {
    v: 33,
    p: 99
  }), [m, y] = Ic(t, a, i), p = r || [], h = c || [], O = Ht(p, h), g = (w, x) => {
    if (!Fn(x)) {
      const R = f || _t, _ = l || _t, U = [], I = [];
      let B = !1, P = !1;
      if (W(x, (A) => {
        const { attributeName: F, target: N, type: k, oldValue: H, addedNodes: X, removedNodes: z } = A, M = k === "attributes", at = k === "childList", D = t === N, Z = M && F, Q = Z && cn(N, F || "") || null, rt = Z && H !== Q, Y = sn(h, F) && rt;
        if (e && (at || !D)) {
          const it = M && rt, ut = it && u && We(N, u), b = (ut ? !R(N, F, H, Q) : !M || it) && !_(A, !!ut, t, s);
          W(X, (v) => et(U, v)), W(z, (v) => et(U, v)), P = P || b;
        }
        !e && D && rt && !R(N, F, H, Q) && (et(I, F), B = B || Y);
      }), y((A) => ws(U).reduce((F, N) => (et(F, xo(A, N)), We(N, A) ? et(F, N) : F), [])), e)
        return !w && P && n(!1), [!1];
      if (!Fn(I) || B) {
        const A = [ws(I), B];
        return !w && n.apply(0, A), A;
      }
    }
  }, T = new tc(L(g, !1));
  return [() => (T.observe(t, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: O,
    subtree: e,
    childList: e,
    characterData: e
  }), o = !0, () => {
    o && (m(), T.disconnect(), o = !1);
  }), () => {
    if (o)
      return a.m(), g(!0, T.takeRecords());
  }];
}, qo = (t, e, n) => {
  const { dt: o, _t: r } = n || {}, c = ge(Nc), { K: i } = Tt(), u = L(Vt, t), [f] = Rt({
    o: !1,
    _: !0
  });
  return () => {
    const l = [], m = Ao(`<div class="${ns}"><div class="${wc}"></div></div>`)[0], y = m.firstChild, p = (h) => {
      const O = h instanceof ResizeObserverEntry, g = !O && Ct(h);
      let T = !1, w = !1, x = !0;
      if (O) {
        const [R, , _] = f(h.contentRect), U = Bn(R), I = Po(R, _);
        w = !_ || I, T = !w && !U, x = !T;
      } else
        g ? [, x] = h : w = h === !0;
      if (o && x) {
        const R = g ? h[0] : Vt(m);
        Jt(m, {
          x: Ge(3333333, 3333333, R && i),
          y: 3333333
        });
      }
      T || e({
        vt: g ? h : void 0,
        ht: !g,
        _t: w
      });
    };
    if (Ve) {
      const h = new Ve((O) => p(O.pop()));
      h.observe(y), et(l, () => {
        h.disconnect();
      });
    } else if (c) {
      const [h, O] = c(y, p, r);
      et(l, Ht([Je(m, gc), st(m, "animationstart", h)], O));
    } else
      return _t;
    if (o) {
      const [h] = Rt({
        o: void 0
      }, u);
      et(l, st(m, "scroll", (O) => {
        const g = h(), [T, w, x] = g;
        w && (Zn(y, "ltr rtl"), Je(y, T ? "rtl" : "ltr"), p([!!T, w, x])), es(O);
      }));
    }
    return L(Ot, et(l, St(t, m)));
  };
}, Mc = (t, e) => {
  let n;
  const s = (u) => u.h === 0 || u.isIntersecting || u.intersectionRatio > 0, o = ie(Sc), [r] = Rt({
    o: !1
  }), c = (u, f) => {
    if (u) {
      const l = r(s(u)), [, a] = l;
      return a && !f && e(l) && [l];
    }
  }, i = (u, f) => c(f.pop(), u);
  return [() => {
    const u = [];
    if (gs)
      n = new gs(L(i, !1), {
        root: t
      }), n.observe(o), et(u, () => {
        n.disconnect();
      });
    else {
      const f = () => {
        const l = Oe(o);
        c(l);
      };
      et(u, qo(o, f)()), f();
    }
    return L(Ot, et(u, St(t, o)));
  }, () => n && i(!0, n.takeRecords())];
}, jc = (t, e, n, s) => {
  let o, r, c, i, u, f;
  const { L: l } = Tt(), a = `[${wt}]`, m = `[${zt}]`, y = ["tabindex"], p = ["wrap", "cols", "rows"], h = ["id", "class", "style", "open"], { gt: O, bt: g, D: T, wt: w, St: x, V: R, yt: _, Ot: U } = t, I = {
    $t: !1,
    N: Vt(O)
  }, B = Tt(), P = ge(os), [A] = Rt({
    u: go,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const S = P && P.M(t, e, I, B, n).W, b = _(ue), v = !R && _(yc), E = v && ye(T);
    U(ue), R && U(Un, !0);
    const C = v && S && S()[0], $ = Ln(w), K = Ln(T), V = ts(T);
    return U(ue, b), R && U(Un), C && C(), Jt(T, E), {
      w: K.w + $.w + V.w,
      h: K.h + $.h + V.h
    };
  }), F = x ? p : Ht(h, p), N = So(s, {
    v: () => o,
    p: () => r,
    S(S, b) {
      const [v] = S, [E] = b;
      return [Ht(qt(v), qt(E)).reduce((C, $) => (C[$] = v[$] || E[$], C), {})];
    }
  }), k = (S) => {
    if (R) {
      const b = Vt(O);
      J(S, {
        Ct: f !== b
      }), J(I, {
        N: b
      }), f = b;
    }
  }, H = (S) => {
    W(S || y, (b) => {
      if (sn(y, b)) {
        const v = cn(g, b);
        tn(v) ? xt(T, b, v) : $t(T, b);
      }
    });
  }, X = (S, b) => {
    const [v, E] = S, C = {
      xt: E
    };
    return J(I, {
      $t: v
    }), !b && s(C), C;
  }, z = ({ ht: S, vt: b, _t: v }) => {
    const C = !(S && !v && !b) && l ? N : s, [$, K] = b || [], V = {
      ht: S || v,
      _t: v,
      Ct: K
    };
    k(V), b && J(I, {
      N: $
    }), C(V);
  }, M = (S, b) => {
    const [, v] = A(), E = {
      Ht: v
    };
    return k(E), v && !b && (S ? s : N)(E), E;
  }, at = (S, b, v) => {
    const E = {
      zt: b
    };
    return k(E), b && !v ? N(E) : R || H(S), E;
  }, { Z: D } = B, [Z, Q] = w ? Mc(g, X) : [], rt = !R && qo(g, z, {
    _t: !0,
    dt: !0
  }), [Y, it] = Bs(g, !1, at, {
    rt: h,
    ct: Ht(h, y)
  }), ut = R && Ve && new Ve((S) => {
    const b = S[S.length - 1].contentRect;
    z({
      ht: !0,
      _t: Po(b, u)
    }), u = b;
  });
  return [() => {
    H(), ut && ut.observe(g);
    const S = rt && rt(), b = Z && Z(), v = Y(), E = D((C) => {
      const [, $] = A();
      N({
        It: C,
        Ht: $
      });
    });
    return () => {
      ut && ut.disconnect(), S && S(), b && b(), i && i(), v(), E();
    };
  }, ({ Et: S, At: b, Tt: v }) => {
    const E = {}, [C] = S("update.ignoreMutation"), [$, K] = S("update.attributes"), [V, nt] = S("update.elementEvents"), [ct, ht] = S("update.debounce"), j = nt || K, G = b || v, gt = (ft) => Lt(C) && C(ft);
    if (j) {
      c && c(), i && i();
      const [ft, tt] = Bs(w || T, !0, M, {
        ct: Ht(F, $ || []),
        lt: V,
        it: a,
        ft: (dt, pt) => {
          const { target: Nt, attributeName: Fe } = dt;
          return (!pt && Fe && !R ? ac(Nt, a, m) : !1) || !!ce(Nt, `.${bt}`) || !!gt(dt);
        }
      });
      i = ft(), c = tt;
    }
    if (ht)
      if (N.m(), Ct(ct)) {
        const ft = ct[0], tt = ct[1];
        o = kt(ft) && ft, r = kt(tt) && tt;
      } else
        kt(ct) ? (o = ct, r = !1) : (o = !1, r = !1);
    if (G) {
      const ft = it(), tt = Q && Q(), dt = c && c();
      ft && J(E, at(ft[0], ft[1], G)), tt && J(E, X(tt[0], G)), dt && J(E, M(dt[0], G));
    }
    return k(E), E;
  }, I];
}, zc = (t, e, n, s) => {
  const { G: o, K: r } = Tt(), { scrollbars: c } = o(), { slot: i } = c, { gt: u, bt: f, D: l, Dt: a, kt: m, Rt: y, V: p } = e, { scrollbars: h } = a ? {} : t, { slot: O } = h || {}, g = /* @__PURE__ */ new Map(), T = (S) => Nn && new Nn({
    source: m,
    axis: S
  }), w = T("x"), x = T("y"), R = zo([u, f, l], () => p && y ? u : f, i, O), _ = (S, b) => {
    if (b) {
      const V = S ? fe : de, { Mt: nt, Vt: ct } = b, ht = le(ct)[V], j = le(nt)[V];
      return $n(0, 1, ht / j || 0);
    }
    const v = S ? "x" : "y", { Lt: E, Pt: C } = n, $ = C[v], K = E[v];
    return $n(0, 1, $ / ($ + K) || 0);
  }, U = (S, b, v, E) => {
    const C = _(v, S);
    return 1 / C * (1 - C) * (E ? 1 - b : b) || 0;
  }, I = (S, b) => J(S, b ? {
    clear: ["left"]
  } : {}), B = (S) => {
    g.forEach((b, v) => {
      (S ? sn(io(S), v) : !0) && (W(b || [], (C) => {
        C && C.cancel();
      }), g.delete(v));
    });
  }, P = (S, b, v, E) => {
    const C = g.get(S) || [], $ = C.find((K) => K && K.timeline === b);
    $ ? $.effect = new KeyframeEffect(S, v, {
      composite: E
    }) : g.set(S, Ht(C, [S.animate(v, {
      timeline: b,
      composite: E
    })]));
  }, A = (S, b, v) => {
    const E = v ? Je : Zn;
    W(S, (C) => {
      E(C.Ut, b);
    });
  }, F = (S, b) => {
    W(S, (v) => {
      const [E, C] = b(v);
      me(E, C);
    });
  }, N = (S, b) => {
    F(S, (v) => {
      const { Vt: E } = v;
      return [E, {
        [b ? fe : de]: Es(_(b))
      }];
    });
  }, k = (S, b) => {
    const { Lt: v } = n, E = b ? v.x : v.y, C = ($, K, V) => gn(Es(U($, _s(K, E, V), b, V)), b);
    if (w && x)
      W(S, ($) => {
        const { Ut: K, Vt: V } = $, nt = b && Vt(K) && r;
        P(V, b ? w : x, I({
          transform: Rs(E, nt).map((ct) => C($, ct, nt))
        }, nt));
      });
    else {
      const $ = ye(m);
      F(S, (K) => {
        const { Vt: V, Ut: nt } = K;
        return [V, {
          transform: C(K, b ? $.x : $.y, b && Vt(nt) && r)
        }];
      });
    }
  }, H = (S) => p && !y && he(S) === l, X = [], z = [], M = [], at = (S, b, v) => {
    const E = ao(v), C = E ? v : !0, $ = E ? !v : !0;
    C && A(z, S, b), $ && A(M, S, b);
  }, D = () => {
    N(z, !0), N(M);
  }, Z = () => {
    k(z, !0), k(M);
  }, Q = () => {
    if (p) {
      const { Lt: S } = n, b = 0.5;
      if (w && x)
        W(Ht(M, z), ({ Ut: v }) => {
          if (H(v)) {
            const E = (C, $, K) => {
              const V = K && Vt(v) && r;
              P(v, C, I({
                transform: Rs($ - b, V).map((nt) => gn(kn(nt), K))
              }, V), "add");
            };
            E(w, S.x, !0), E(x, S.y);
          } else
            B(v);
        });
      else {
        const v = ye(m), E = (C) => {
          const { Ut: $ } = C, K = H($) && $, V = (nt, ct, ht) => {
            const j = _s(nt, ct, ht), G = ct * j;
            return kn(ht ? -G : G);
          };
          return [K, {
            transform: K ? gn({
              x: V(v.x, S.x, Vt($) && r),
              y: V(v.y, S.y)
            }) : ""
          }];
        };
        F(z, E), F(M, E);
      }
    }
  }, rt = (S) => {
    const v = ie(`${bt} ${S ? Oc : Tc}`), E = ie(Bo), C = ie(ss), $ = {
      Ut: v,
      Mt: E,
      Vt: C
    };
    return et(S ? z : M, $), et(X, [St(v, E), St(E, C), L(Kt, v), B, s($, at, k, S)]), $;
  }, Y = L(rt, !0), it = L(rt, !1), ut = () => (St(R, z[0].Ut), St(R, M[0].Ut), L(Ot, X));
  return Y(), it(), [{
    Bt: D,
    Nt: Z,
    jt: Q,
    Ft: at,
    qt: {
      J: w,
      Wt: z,
      Xt: Y,
      Yt: L(F, z)
    },
    Jt: {
      J: x,
      Wt: M,
      Xt: it,
      Yt: L(F, M)
    }
  }, ut];
}, Vc = (t, e, n, s) => {
  const { bt: o, kt: r, Kt: c } = e;
  return (i, u, f, l) => {
    const { Ut: a, Mt: m, Vt: y } = i, [p, h] = re(333), [O, g] = re(), T = L(f, [i], l), w = !!r.scrollBy, x = `client${l ? "X" : "Y"}`, R = l ? fe : de, _ = l ? "left" : "top", U = l ? "w" : "h", I = l ? "x" : "y", B = (F) => F.propertyName.indexOf(R) > -1, P = () => {
      const F = "pointerup pointerleave pointercancel lostpointercapture", N = (k, H) => (X) => {
        const { Lt: z } = n, M = Oe(m)[U] - Oe(y)[U], D = H * X / M * z[I];
        Jt(r, {
          [I]: k + D
        });
      };
      return st(m, "pointerdown", (k) => {
        const H = ce(k.target, `.${ss}`) === y, X = H ? y : m, z = t.scrollbars, { button: M, isPrimary: at, pointerType: D } = k, { pointers: Z } = z;
        if (M === 0 && at && z[H ? "dragScroll" : "clickScroll"] && (Z || []).includes(D)) {
          const rt = !H && k.shiftKey, Y = L(le, y), it = L(le, m), ut = (G, gt) => (G || Y())[_] - (gt || it())[_], S = An(le(r)[R]) / Oe(r)[U] || 1, b = N(ye(r)[I] || 0, 1 / S), v = k[x], E = Y(), C = it(), $ = E[R], K = ut(E, C) + $ / 2, V = v - C[_], nt = H ? 0 : V - K, ct = (G) => {
            Ot(j), X.releasePointerCapture(G.pointerId);
          }, j = [Re(o, wt, hc), st(c, F, ct), st(c, "selectstart", (G) => xs(G), {
            H: !1
          }), st(m, F, ct), st(m, "pointermove", (G) => {
            const gt = G[x] - v;
            (H || rt) && b(nt + gt);
          })];
          if (X.setPointerCapture(k.pointerId), rt)
            b(nt);
          else if (!H) {
            const G = ge(Dc);
            G && et(j, G(b, ut, nt, $, V));
          }
        }
      });
    };
    let A = !0;
    return L(Ot, [st(a, "pointerenter", () => {
      u($s, !0);
    }), st(a, "pointerleave pointercancel", () => {
      u($s, !1);
    }), st(a, "wheel", (F) => {
      const { deltaX: N, deltaY: k, deltaMode: H } = F;
      w && A && H === 0 && he(a) === o && r.scrollBy({
        left: N,
        top: k,
        behavior: "smooth"
      }), A = !1, u(Ls, !0), p(() => {
        A = !0, u(Ls);
      }), xs(F);
    }, {
      H: !1,
      I: !0
    }), st(y, "pointermove pointerleave", s), st(y, "transitionstart", (F) => {
      if (B(F)) {
        const N = () => {
          T(), O(N);
        };
        N();
      }
    }), st(y, "transitionend transitioncancel", (F) => {
      B(F) && (g(), T());
    }), st(a, "mousedown", L(st, c, "click", es, {
      A: !0,
      I: !0
    }), {
      I: !0
    }), P(), h, g]);
  };
}, qc = (t, e, n, s, o, r) => {
  let c, i, u, f, l = _t, a = 0;
  const m = () => !u && !i, y = (D) => D.pointerType === "mouse", [p, h] = re(), [O, g] = re(100), [T, w] = re(100), [x, R] = re(() => a), [_, U] = zc(t, o, s, Vc(e, o, s, (D) => y(D) && m() && X())), { bt: I, Zt: B, Rt: P } = o, { Ft: A, Bt: F, Nt: N, jt: k } = _, H = (D, Z) => {
    if (R(), D)
      A(ks);
    else {
      const Q = L(A, ks, !0);
      a > 0 && !Z ? x(Q) : Q();
    }
  }, X = () => {
    H(!0), O(() => {
      H(!1);
    });
  }, z = (D) => {
    A(Mn, D, !0), A(Mn, D, !1);
  }, M = (D) => {
    y(D) && i && H(!0);
  }, at = [R, g, w, h, () => l(), st(I, "pointerover", M, {
    A: !0
  }), st(I, "pointerenter", M), st(I, "pointerleave", (D) => {
    y(D) && i && H(!1);
  }), st(I, "pointermove", (D) => {
    y(D) && c && X();
  }), st(B, "scroll", (D) => {
    p(() => {
      N(), m() && X();
    }), r(D), k();
  })];
  return [() => L(Ot, et(at, U())), ({ Et: D, Tt: Z, Gt: Q, Qt: rt }) => {
    const { tn: Y, nn: it, sn: ut } = rt || {}, { Ct: S, _t: b } = Q || {}, { N: v } = n, { T: E } = Tt(), { k: C, en: $ } = s, [K, V] = D("showNativeOverlaidScrollbars"), [nt, ct] = D("scrollbars.theme"), [ht, j] = D("scrollbars.visibility"), [G, gt] = D("scrollbars.autoHide"), [ft, tt] = D("scrollbars.autoHideSuspend"), [dt] = D("scrollbars.autoHideDelay"), [pt, Nt] = D("scrollbars.dragScroll"), [Fe, $e] = D("scrollbars.clickScroll"), [De, Ft] = D("overflow"), Wt = b && !Z, Gt = $.x || $.y, mn = Y || it || S || Z, Mt = ut || j || Ft, yn = K && E.x && E.y, ne = (se, oe, Se) => {
      const ke = se.includes("scroll") && (ht === "visible" || ht === "auto" && oe === "scroll");
      return A(xc, ke, Se), ke;
    };
    if (a = dt, Wt && (ft && Gt ? (z(!1), l(), T(() => {
      l = st(B, "scroll", L(z, !0), {
        A: !0
      });
    })) : z(!0)), V && A(vc, yn), ct && (A(f), A(nt, !0), f = nt), tt && !ft && z(!0), gt && (c = G === "move", i = G === "leave", u = G === "never", H(u, !0)), Nt && A(Ac, pt), $e && A(_c, Fe), Mt) {
      const se = ne(De.x, C.x, !0), oe = ne(De.y, C.y, !1);
      A(Rc, !(se && oe));
    }
    mn && (F(), N(), k(), A(Ds, !$.x, !0), A(Ds, !$.y, !1), A(Ec, v && !P));
  }, {}, _];
}, Kc = (t) => {
  const e = Tt(), { G: n, L: s } = e, { elements: o } = n(), { host: r, padding: c, viewport: i, content: u } = o, f = Ke(t), l = f ? {} : t, { elements: a } = l, { host: m, padding: y, viewport: p, content: h } = a || {}, O = f ? t : l.target, g = Ro(O), T = We(O, "textarea"), w = O.ownerDocument, x = w.documentElement, R = w.defaultView, _ = () => w.activeElement, U = (j) => {
    j && j.focus && j.focus();
  }, I = L(Lc, [O]), B = L(zo, [O]), P = L(ie, ""), A = L(I, P, i), F = L(B, P, u), N = A(p), k = N === O, H = k && g, X = !k && F(h), z = !k && N === X, M = H ? x : N, at = T ? I(P, r, m) : O, D = H ? M : at, Z = !k && B(P, c, y), Q = !z && X, rt = [Q, M, Z, D].map((j) => Ke(j) && !he(j) && j), Y = (j) => j && sn(rt, j), it = Y(M) ? O : M, ut = {
    gt: O,
    bt: D,
    D: M,
    cn: Z,
    wt: Q,
    kt: H ? x : M,
    Zt: H ? w : M,
    rn: g ? x : it,
    ln: R,
    Kt: w,
    St: T,
    Rt: g,
    Dt: f,
    V: k,
    yt: (j) => rc(M, k ? wt : zt, j),
    Ot: (j, G) => He(M, k ? wt : zt, j, G)
  }, { gt: S, bt: b, cn: v, D: E, wt: C } = ut, $ = [() => {
    $t(b, [wt, Sn]), $t(S, Sn), g && $t(x, [Sn, wt]);
  }], K = T && Y(b);
  let V = T ? S : Dn([C, E, v, b, S].find((j) => j && !Y(j)));
  const nt = H ? S : C || E, ct = L(Ot, $);
  return [ut, () => {
    const j = _(), G = (tt) => {
      St(he(tt), Dn(tt)), Kt(tt);
    }, gt = (tt) => tt ? st(tt, "focusin focusout focus blur", (dt) => {
      es(dt), dt.stopImmediatePropagation();
    }, {
      I: !0,
      H: !1
    }) : _t, ft = gt(j);
    if (xt(b, wt, k ? "viewport" : "host"), xt(v, In, ""), xt(C, Fs, ""), k || (xt(E, zt, ""), g && Re(x, wt, mc)), K && (Ss(S, b), et($, () => {
      Ss(b, S), Kt(b);
    })), St(nt, V), St(b, v), St(v || b, !k && E), St(E, C), et($, [ft, () => {
      const tt = _(), dt = gt(tt);
      $t(v, In), $t(C, Fs), $t(E, [$o, Do, zt]), Y(C) && G(C), Y(E) && G(E), Y(v) && G(v), U(tt), dt();
    }]), s && !k && (Re(E, zt, Lo), et($, L($t, E, zt))), !k && R.top === R && j === O) {
      const tt = "tabindex", dt = cn(E, tt);
      xt(E, tt, "-1"), U(E);
      const pt = () => dt ? xt(E, tt, dt) : $t(E, tt), Nt = st(w, "pointerdown keydown", () => {
        pt(), Nt();
      });
      et($, [pt, Nt]);
    } else
      U(j);
    return ft(), V = 0, ct;
  }, ct];
}, Jc = ({ wt: t }) => ({ Gt: e, an: n, Tt: s }) => {
  const { xt: o } = e || {}, { $t: r } = n;
  t && (o || s) && me(t, {
    [de]: r && "100%"
  });
}, Wc = ({ bt: t, cn: e, D: n, V: s }, o) => {
  const [r, c] = Rt({
    u: oc,
    o: Os()
  }, L(Os, t, "padding", ""));
  return ({ Et: i, Gt: u, an: f, Tt: l }) => {
    let [a, m] = c(l);
    const { L: y } = Tt(), { ht: p, Ht: h, Ct: O } = u || {}, { N: g } = f, [T, w] = i("paddingAbsolute");
    (p || m || (l || h)) && ([a, m] = r(l));
    const R = !s && (w || O || m);
    if (R) {
      const _ = !T || !e && !y, U = a.r + a.l, I = a.t + a.b, B = {
        [mo]: _ && !g ? -U : 0,
        [yo]: _ ? -I : 0,
        [ho]: _ && g ? -U : 0,
        top: _ ? -a.t : 0,
        right: _ ? g ? -a.r : "auto" : 0,
        left: _ ? g ? "auto" : -a.l : 0,
        [fe]: _ && `calc(100% + ${U}px)`
      }, P = {
        [lo]: _ ? a.t : 0,
        [uo]: _ ? a.r : 0,
        [po]: _ ? a.b : 0,
        [fo]: _ ? a.l : 0
      };
      me(e || n, B), me(n, P), J(o, {
        cn: a,
        un: !_,
        j: e ? P : J({}, B, P)
      });
    }
    return {
      fn: R
    };
  };
}, Gc = (t, e) => {
  const n = Tt(), { bt: s, cn: o, D: r, V: c, Ot: i, Rt: u, ln: f } = t, { L: l } = n, a = u && c, m = L(Be, 0), y = {
    u: go,
    o: {
      w: 0,
      h: 0
    }
  }, p = {
    u: wo,
    o: {
      x: pe,
      y: pe
    }
  }, h = (P, A) => {
    const F = Et.devicePixelRatio % 1 !== 0 ? 1 : 0, N = {
      w: m(P.w - A.w),
      h: m(P.h - A.h)
    };
    return {
      w: N.w > F ? N.w : 0,
      h: N.h > F ? N.h : 0
    };
  }, [O, g] = Rt(y, L(ts, r)), [T, w] = Rt(y, L(Ln, r)), [x, R] = Rt(y), [_, U] = Rt(y), [I] = Rt(p), B = ge(os);
  return ({ Et: P, Gt: A, an: F, Tt: N }, { fn: k }) => {
    const { ht: H, Ht: X, Ct: z, It: M } = A || {}, at = B && B.M(t, e, F, n, P), { q: D, W: Z, X: Q } = at || {}, [rt, Y] = Fc(P, n), [it, ut] = P("overflow"), S = H || k || X || z || M || Y, b = Xe(it.x), v = Xe(it.y), E = b || v;
    let C = g(N), $ = w(N), K = R(N), V = U(N), nt;
    if (Y && l && i(Lo, !rt), S) {
      E && i(ue, !1);
      const [Ft, Wt] = Z ? Z(nt) : [], [Gt, mn] = C = O(N), [Mt, yn] = $ = T(N), ne = Co(r), se = Mt, oe = ne;
      Ft && Ft(), (yn || mn || Y) && Wt && !rt && D && D(Wt, Mt, Gt);
      const Se = uc(f), ke = {
        w: m(Be(Mt.w, se.w) + Gt.w),
        h: m(Be(Mt.h, se.h) + Gt.h)
      }, ps = {
        w: m((a ? Se.w : oe.w + m(ne.w - Mt.w)) + Gt.w),
        h: m((a ? Se.h : oe.h + m(ne.h - Mt.h)) + Gt.h)
      };
      V = _(ps), K = x(h(ke, ps), N);
    }
    const [ct, ht] = V, [j, G] = K, [gt, ft] = $, [tt, dt] = C, pt = {
      x: j.w > 0,
      y: j.h > 0
    }, Nt = b && v && (pt.x || pt.y) || b && pt.x && !pt.y || v && pt.y && !pt.x;
    if (k || z || M || dt || ft || ht || G || ut || Y || S) {
      const Ft = {}, Wt = $c(t, pt, it, Ft);
      Q && Q(Wt, F, !!D && D(Wt, gt, tt), Ft), c ? (xt(s, $o, Ft[on]), xt(s, Do, Ft[rn])) : me(r, Ft);
    }
    He(s, wt, ko, Nt), He(o, In, bc, Nt), c || He(r, zt, ue, E);
    const [$e, De] = I(Mo(t).k);
    return J(e, {
      k: $e,
      Pt: {
        x: ct.w,
        y: ct.h
      },
      Lt: {
        x: j.w,
        y: j.h
      },
      en: pt
    }), {
      sn: De,
      tn: ht,
      nn: G
    };
  };
}, Xc = (t) => {
  const [e, n, s] = Kc(t), o = {
    cn: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    un: !1,
    j: {
      [mo]: 0,
      [yo]: 0,
      [ho]: 0,
      [lo]: 0,
      [uo]: 0,
      [po]: 0,
      [fo]: 0
    },
    Pt: {
      x: 0,
      y: 0
    },
    Lt: {
      x: 0,
      y: 0
    },
    k: {
      x: pe,
      y: pe
    },
    en: {
      x: !1,
      y: !1
    }
  }, { gt: r, D: c, V: i } = e, { L: u, T: f } = Tt(), l = !u && (f.x || f.y), a = [Jc(e), Wc(e, o), Gc(e, o)];
  return [n, (m) => {
    const y = {}, h = l && ye(c), O = i ? Re(c, wt, Un) : _t;
    return W(a, (g) => {
      J(y, g(m, y) || {});
    }), O(), Jt(c, h), !i && Jt(r, 0), y;
  }, o, e, s];
}, Yc = (t, e, n, s) => {
  const o = Ns(e, {}), [r, c, i, u, f] = Xc(t), [l, a, m] = jc(u, i, o, (T) => {
    g({}, T);
  }), [y, p, , h] = qc(t, e, m, i, u, s), O = (T) => qt(T).some((w) => !!T[w]), g = (T, w) => {
    const { dn: x, Tt: R, At: _, _n: U } = T, I = x || {}, B = !!R, P = {
      Et: Ns(e, I, B),
      dn: I,
      Tt: B
    };
    if (U)
      return p(P), !1;
    const A = w || a(J({}, P, {
      At: _
    })), F = c(J({}, P, {
      an: m,
      Gt: A
    }));
    p(J({}, P, {
      Gt: A,
      Qt: F
    }));
    const N = O(A), k = O(F), H = N || k || !Yn(I) || B;
    return H && n(T, {
      Gt: A,
      Qt: F
    }), H;
  };
  return [() => {
    const { rn: T, D: w } = u, x = ye(T), R = [l(), r(), y()];
    return Jt(w, x), L(Ot, R);
  }, g, () => ({
    vn: m,
    hn: i
  }), {
    pn: u,
    gn: h
  }, f];
}, Ut = (t, e, n) => {
  const { nt: s } = Tt(), o = Ke(t), r = o ? t : t.target, c = Vo(r);
  if (e && !c) {
    let i = !1;
    const u = [], f = {}, l = (P) => {
      const A = Eo(P, !0), F = ge(Pc);
      return F ? F(A, !0) : A;
    }, a = J({}, s(), l(e)), [m, y, p] = Hn(), [h, O, g] = Hn(n), T = (P, A) => {
      g(P, A), p(P, A);
    }, [w, x, R, _, U] = Yc(t, a, ({ dn: P, Tt: A }, { Gt: F, Qt: N }) => {
      const { ht: k, Ct: H, xt: X, Ht: z, zt: M, _t: at } = F, { tn: D, nn: Z, sn: Q } = N;
      T("updated", [B, {
        updateHints: {
          sizeChanged: !!k,
          directionChanged: !!H,
          heightIntrinsicChanged: !!X,
          overflowEdgeChanged: !!D,
          overflowAmountChanged: !!Z,
          overflowStyleChanged: !!Q,
          contentMutation: !!z,
          hostMutation: !!M,
          appear: !!at
        },
        changedOptions: P || {},
        force: !!A
      }]);
    }, (P) => T("scroll", [B, P])), I = (P) => {
      Uc(r), Ot(u), i = !0, T("destroyed", [B, P]), y(), O();
    }, B = {
      options(P, A) {
        if (P) {
          const F = A ? s() : {}, N = No(a, J(F, l(P)));
          Yn(N) || (J(a, N), x({
            dn: N
          }));
        }
        return J({}, a);
      },
      on: h,
      off: (P, A) => {
        P && A && O(P, A);
      },
      state() {
        const { vn: P, hn: A } = R(), { N: F } = P, { Pt: N, Lt: k, k: H, en: X, cn: z, un: M } = A;
        return J({}, {
          overflowEdge: N,
          overflowAmount: k,
          overflowStyle: H,
          hasOverflow: X,
          padding: z,
          paddingAbsolute: M,
          directionRTL: F,
          destroyed: i
        });
      },
      elements() {
        const { gt: P, bt: A, cn: F, D: N, wt: k, kt: H, Zt: X } = _.pn, { qt: z, Jt: M } = _.gn, at = (Z) => {
          const { Vt: Q, Mt: rt, Ut: Y } = Z;
          return {
            scrollbar: Y,
            track: rt,
            handle: Q
          };
        }, D = (Z) => {
          const { Wt: Q, Xt: rt } = Z, Y = at(Q[0]);
          return J({}, Y, {
            clone: () => {
              const it = at(rt());
              return x({
                _n: !0
              }), it;
            }
          });
        };
        return J({}, {
          target: P,
          host: A,
          padding: F || N,
          viewport: N,
          content: k || N,
          scrollOffsetElement: H,
          scrollEventElement: X,
          scrollbarHorizontal: D(z),
          scrollbarVertical: D(M)
        });
      },
      update: (P) => x({
        Tt: P,
        At: !0
      }),
      destroy: L(I, !1),
      plugin: (P) => f[qt(P)[0]]
    };
    return et(u, [U]), Hc(r, B), Io(Ho, Ut, [B, m, f]), Bc(_.pn.Rt, !o && t.cancel) ? (I(!0), B) : (et(u, w()), T("initialized", [B]), B.update(!0), B);
  }
  return c;
};
Ut.plugin = (t) => {
  const e = Ct(t), n = e ? t : [t], s = n.map((o) => Io(o, Ut)[0]);
  return Cc(n), e ? s : s[0];
};
Ut.valid = (t) => {
  const e = t && t.elements, n = Lt(e) && e();
  return qe(n) && !!Vo(n.target);
};
Ut.env = () => {
  const { P: t, T: e, L: n, K: s, J: o, st: r, et: c, G: i, tt: u, nt: f, ot: l } = Tt();
  return J({}, {
    scrollbarsSize: t,
    scrollbarsOverlaid: e,
    scrollbarsHiding: n,
    rtlScrollBehavior: s,
    scrollTimeline: o,
    staticDefaultInitialization: r,
    staticDefaultOptions: c,
    getDefaultInitialization: i,
    setDefaultInitialization: u,
    getDefaultOptions: f,
    setDefaultOptions: l
  });
};
const Zc = () => {
  if (typeof window > "u") {
    const f = () => {
    };
    return [f, f];
  }
  let t, e;
  const n = window, s = typeof n.requestIdleCallback == "function", o = n.requestAnimationFrame, r = n.cancelAnimationFrame, c = s ? n.requestIdleCallback : o, i = s ? n.cancelIdleCallback : r, u = () => {
    i(t), r(e);
  };
  return [
    (f, l) => {
      u(), t = c(
        s ? () => {
          u(), e = o(f);
        } : f,
        typeof l == "object" ? l : { timeout: 2233 }
      );
    },
    u
  ];
}, Qc = (t) => {
  let e = null, n, s, o;
  const r = ze(t || {}), [c, i] = Zc();
  return ae(
    () => {
      var u;
      return ot((u = r.value) == null ? void 0 : u.defer);
    },
    (u) => {
      o = u;
    },
    { deep: !0, immediate: !0 }
  ), ae(
    () => {
      var u;
      return ot((u = r.value) == null ? void 0 : u.options);
    },
    (u) => {
      n = u, Ut.valid(e) && e.options(n || {}, !0);
    },
    { deep: !0, immediate: !0 }
  ), ae(
    () => {
      var u;
      return ot((u = r.value) == null ? void 0 : u.events);
    },
    (u) => {
      s = u, Ut.valid(e) && e.on(
        /* c8 ignore next */
        s || {},
        !0
      );
    },
    { deep: !0, immediate: !0 }
  ), Sr(() => {
    i(), e == null || e.destroy();
  }), [
    (u) => {
      if (Ut.valid(e))
        return e;
      const f = () => e = Ut(u, n || {}, s || {});
      o ? c(f, o) : f();
    },
    () => e
  ];
}, ta = /* @__PURE__ */ Pt({
  name: "BodyOverlayScrollbars",
  __name: "BodyOverlayScrollbars",
  setup(t) {
    const e = Xt(null), [n] = Qc({
      defer: !0,
      events: {
        initialized: () => {
          e.value = !0;
        },
        destroyed: () => {
          e.value = !1;
        }
      },
      options: {
        scrollbars: {
          autoHide: "scroll"
          // theme: "os-theme-light"
        }
      }
    });
    return Ys(() => n(document.body)), (s, o) => Zt(s.$slots, "default");
  }
}), ki = /* @__PURE__ */ Pt({
  name: "FastStars",
  __name: "FastStars",
  props: {
    rowKey: { default: "id" },
    basename: {},
    dataProvider: {},
    layout: {},
    useTheme: { type: Boolean, default: !0 },
    menu: {}
  },
  setup(t) {
    const e = t;
    e.useTheme && Xr();
    const { setMenu: n } = to();
    return Zr(e), Ys(() => {
      e.menu && n(e.menu);
    }), ae(
      () => e.menu,
      () => {
        n(e.menu);
      }
    ), (s, o) => (At(), te(ta, null, {
      default: mt(() => [
        Zt(s.$slots, "layout", {}, () => [
          yt(Ur)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}), Ko = Symbol("RESOURCE_CONTEXT"), ea = (t) => Xs(Ko, t), na = () => Wn(Ko, { name: "" }), sa = /* @__PURE__ */ Pt({
  name: "FsResource",
  __name: "Resource",
  props: {
    name: {}
  },
  setup(t) {
    return ea({ name: t.name }), (n, s) => (At(), te(ot(Zs)));
  }
}), oa = (t) => [
  {
    path: `/${t.name}`,
    name: t.name,
    component: sa,
    props: {
      name: t.name
    },
    children: [
      {
        path: "",
        name: `${t.name}-list`,
        component: t.listView
      }
    ]
  }
], Li = (t) => ({
  routes: oa(t)
});
function Jo(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ra } = Object.prototype, { getPrototypeOf: cs } = Object, un = /* @__PURE__ */ ((t) => (e) => {
  const n = ra.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Bt = (t) => (t = t.toLowerCase(), (e) => un(e) === t), fn = (t) => (e) => typeof e === t, { isArray: we } = Array, _e = fn("undefined");
function ca(t) {
  return t !== null && !_e(t) && t.constructor !== null && !_e(t.constructor) && vt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Wo = Bt("ArrayBuffer");
function aa(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Wo(t.buffer), e;
}
const ia = fn("string"), vt = fn("function"), Go = fn("number"), dn = (t) => t !== null && typeof t == "object", la = (t) => t === !0 || t === !1, Ue = (t) => {
  if (un(t) !== "object")
    return !1;
  const e = cs(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ua = Bt("Date"), fa = Bt("File"), da = Bt("Blob"), pa = Bt("FileList"), ha = (t) => dn(t) && vt(t.pipe), ma = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || vt(t.append) && ((e = un(t)) === "formdata" || // detect form-data instance
  e === "object" && vt(t.toString) && t.toString() === "[object FormData]"));
}, ya = Bt("URLSearchParams"), ba = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pe(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let s, o;
  if (typeof t != "object" && (t = [t]), we(t))
    for (s = 0, o = t.length; s < o; s++)
      e.call(null, t[s], s, t);
  else {
    const r = n ? Object.getOwnPropertyNames(t) : Object.keys(t), c = r.length;
    let i;
    for (s = 0; s < c; s++)
      i = r[s], e.call(null, t[i], i, t);
  }
}
function Xo(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], e === o.toLowerCase())
      return o;
  return null;
}
const Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zo = (t) => !_e(t) && t !== Yo;
function jn() {
  const { caseless: t } = Zo(this) && this || {}, e = {}, n = (s, o) => {
    const r = t && Xo(e, o) || o;
    Ue(e[r]) && Ue(s) ? e[r] = jn(e[r], s) : Ue(s) ? e[r] = jn({}, s) : we(s) ? e[r] = s.slice() : e[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Pe(arguments[s], n);
  return e;
}
const ga = (t, e, n, { allOwnKeys: s } = {}) => (Pe(e, (o, r) => {
  n && vt(o) ? t[r] = Jo(o, n) : t[r] = o;
}, { allOwnKeys: s }), t), wa = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Sa = (t, e, n, s) => {
  t.prototype = Object.create(e.prototype, s), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, va = (t, e, n, s) => {
  let o, r, c;
  const i = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), r = o.length; r-- > 0; )
      c = o[r], (!s || s(c, t, e)) && !i[c] && (e[c] = t[c], i[c] = !0);
    t = n !== !1 && cs(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Ea = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const s = t.indexOf(e, n);
  return s !== -1 && s === n;
}, Oa = (t) => {
  if (!t)
    return null;
  if (we(t))
    return t;
  let e = t.length;
  if (!Go(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Ta = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && cs(Uint8Array)), xa = (t, e) => {
  const s = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const r = o.value;
    e.call(t, r[0], r[1]);
  }
}, Ra = (t, e) => {
  let n;
  const s = [];
  for (; (n = t.exec(e)) !== null; )
    s.push(n);
  return s;
}, _a = Bt("HTMLFormElement"), Aa = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), Hs = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Ca = Bt("RegExp"), Qo = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), s = {};
  Pe(n, (o, r) => {
    let c;
    (c = e(o, r, t)) !== !1 && (s[r] = c || o);
  }), Object.defineProperties(t, s);
}, Pa = (t) => {
  Qo(t, (e, n) => {
    if (vt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = t[n];
    if (vt(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Na = (t, e) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return we(t) ? s(t) : s(String(t).split(e)), n;
}, Fa = () => {
}, $a = (t, e) => (t = +t, Number.isFinite(t) ? t : e), En = "abcdefghijklmnopqrstuvwxyz", Us = "0123456789", tr = {
  DIGIT: Us,
  ALPHA: En,
  ALPHA_DIGIT: En + En.toUpperCase() + Us
}, Da = (t = 16, e = tr.ALPHA_DIGIT) => {
  let n = "";
  const { length: s } = e;
  for (; t--; )
    n += e[Math.random() * s | 0];
  return n;
};
function ka(t) {
  return !!(t && vt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const La = (t) => {
  const e = new Array(10), n = (s, o) => {
    if (dn(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        e[o] = s;
        const r = we(s) ? [] : {};
        return Pe(s, (c, i) => {
          const u = n(c, o + 1);
          !_e(u) && (r[i] = u);
        }), e[o] = void 0, r;
      }
    }
    return s;
  };
  return n(t, 0);
}, Ba = Bt("AsyncFunction"), Ha = (t) => t && (dn(t) || vt(t)) && vt(t.then) && vt(t.catch), d = {
  isArray: we,
  isArrayBuffer: Wo,
  isBuffer: ca,
  isFormData: ma,
  isArrayBufferView: aa,
  isString: ia,
  isNumber: Go,
  isBoolean: la,
  isObject: dn,
  isPlainObject: Ue,
  isUndefined: _e,
  isDate: ua,
  isFile: fa,
  isBlob: da,
  isRegExp: Ca,
  isFunction: vt,
  isStream: ha,
  isURLSearchParams: ya,
  isTypedArray: Ta,
  isFileList: pa,
  forEach: Pe,
  merge: jn,
  extend: ga,
  trim: ba,
  stripBOM: wa,
  inherits: Sa,
  toFlatObject: va,
  kindOf: un,
  kindOfTest: Bt,
  endsWith: Ea,
  toArray: Oa,
  forEachEntry: xa,
  matchAll: Ra,
  isHTMLForm: _a,
  hasOwnProperty: Hs,
  hasOwnProp: Hs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qo,
  freezeMethods: Pa,
  toObjectSet: Na,
  toCamelCase: Aa,
  noop: Fa,
  toFiniteNumber: $a,
  findKey: Xo,
  global: Yo,
  isContextDefined: Zo,
  ALPHABET: tr,
  generateString: Da,
  isSpecCompliantForm: ka,
  toJSONObject: La,
  isAsyncFn: Ba,
  isThenable: Ha
};
function q(t, e, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), s && (this.request = s), o && (this.response = o);
}
d.inherits(q, Error, {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const er = q.prototype, nr = {};
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
].forEach((t) => {
  nr[t] = { value: t };
});
Object.defineProperties(q, nr);
Object.defineProperty(er, "isAxiosError", { value: !0 });
q.from = (t, e, n, s, o, r) => {
  const c = Object.create(er);
  return d.toFlatObject(t, c, function(u) {
    return u !== Error.prototype;
  }, (i) => i !== "isAxiosError"), q.call(c, t.message, e, n, s, o), c.cause = t, c.name = t.name, r && Object.assign(c, r), c;
};
const Ua = null;
function zn(t) {
  return d.isPlainObject(t) || d.isArray(t);
}
function sr(t) {
  return d.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Is(t, e, n) {
  return t ? t.concat(e).map(function(o, r) {
    return o = sr(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function Ia(t) {
  return d.isArray(t) && !t.some(zn);
}
const Ma = d.toFlatObject(d, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function pn(t, e, n) {
  if (!d.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = d.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, O) {
    return !d.isUndefined(O[h]);
  });
  const s = n.metaTokens, o = n.visitor || l, r = n.dots, c = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(e);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null)
      return "";
    if (d.isDate(p))
      return p.toISOString();
    if (!u && d.isBlob(p))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, h, O) {
    let g = p;
    if (p && !O && typeof p == "object") {
      if (d.endsWith(h, "{}"))
        h = s ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (d.isArray(p) && Ia(p) || (d.isFileList(p) || d.endsWith(h, "[]")) && (g = d.toArray(p)))
        return h = sr(h), g.forEach(function(w, x) {
          !(d.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Is([h], x, r) : c === null ? h : h + "[]",
            f(w)
          );
        }), !1;
    }
    return zn(p) ? !0 : (e.append(Is(O, h, r), f(p)), !1);
  }
  const a = [], m = Object.assign(Ma, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: zn
  });
  function y(p, h) {
    if (!d.isUndefined(p)) {
      if (a.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      a.push(p), d.forEach(p, function(g, T) {
        (!(d.isUndefined(g) || g === null) && o.call(
          e,
          g,
          d.isString(T) ? T.trim() : T,
          h,
          m
        )) === !0 && y(g, h ? h.concat(T) : [T]);
      }), a.pop();
    }
  }
  if (!d.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), e;
}
function Ms(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(s) {
    return e[s];
  });
}
function as(t, e) {
  this._pairs = [], t && pn(t, this, e);
}
const or = as.prototype;
or.append = function(e, n) {
  this._pairs.push([e, n]);
};
or.toString = function(e) {
  const n = e ? function(s) {
    return e.call(this, s, Ms);
  } : Ms;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function ja(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function rr(t, e, n) {
  if (!e)
    return t;
  const s = n && n.encode || ja, o = n && n.serialize;
  let r;
  if (o ? r = o(e, n) : r = d.isURLSearchParams(e) ? e.toString() : new as(e, n).toString(s), r) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return t;
}
class js {
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
  use(e, n, s) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    d.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const cr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, za = typeof URLSearchParams < "u" ? URLSearchParams : as, Va = typeof FormData < "u" ? FormData : null, qa = typeof Blob < "u" ? Blob : null, Ka = {
  isBrowser: !0,
  classes: {
    URLSearchParams: za,
    FormData: Va,
    Blob: qa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ar = typeof window < "u" && typeof document < "u", Ja = ((t) => ar && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), Wa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ar,
  hasStandardBrowserEnv: Ja,
  hasStandardBrowserWebWorkerEnv: Wa
}, Symbol.toStringTag, { value: "Module" })), Dt = {
  ...Ga,
  ...Ka
};
function Xa(t, e) {
  return pn(t, new Dt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return Dt.isNode && d.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Ya(t) {
  return d.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Za(t) {
  const e = {}, n = Object.keys(t);
  let s;
  const o = n.length;
  let r;
  for (s = 0; s < o; s++)
    r = n[s], e[r] = t[r];
  return e;
}
function ir(t) {
  function e(n, s, o, r) {
    let c = n[r++];
    if (c === "__proto__")
      return !0;
    const i = Number.isFinite(+c), u = r >= n.length;
    return c = !c && d.isArray(o) ? o.length : c, u ? (d.hasOwnProp(o, c) ? o[c] = [o[c], s] : o[c] = s, !i) : ((!o[c] || !d.isObject(o[c])) && (o[c] = []), e(n, s, o[c], r) && d.isArray(o[c]) && (o[c] = Za(o[c])), !i);
  }
  if (d.isFormData(t) && d.isFunction(t.entries)) {
    const n = {};
    return d.forEachEntry(t, (s, o) => {
      e(Ya(s), o, n, 0);
    }), n;
  }
  return null;
}
function Qa(t, e, n) {
  if (d.isString(t))
    try {
      return (e || JSON.parse)(t), d.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(t);
}
const is = {
  transitional: cr,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = d.isObject(e);
    if (r && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e))
      return o ? JSON.stringify(ir(e)) : e;
    if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e))
      return e;
    if (d.isArrayBufferView(e))
      return e.buffer;
    if (d.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Xa(e, this.formSerializer).toString();
      if ((i = d.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return pn(
          i ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), Qa(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || is.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (e && d.isString(e) && (s && !this.responseType || o)) {
      const c = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (i) {
        if (c)
          throw i.name === "SyntaxError" ? q.from(i, q.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return e;
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
    FormData: Dt.classes.FormData,
    Blob: Dt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  is.headers[t] = {};
});
const ls = is, ti = d.toObjectSet([
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
]), ei = (t) => {
  const e = {};
  let n, s, o;
  return t && t.split(`
`).forEach(function(c) {
    o = c.indexOf(":"), n = c.substring(0, o).trim().toLowerCase(), s = c.substring(o + 1).trim(), !(!n || e[n] && ti[n]) && (n === "set-cookie" ? e[n] ? e[n].push(s) : e[n] = [s] : e[n] = e[n] ? e[n] + ", " + s : s);
  }), e;
}, zs = Symbol("internals");
function Ee(t) {
  return t && String(t).trim().toLowerCase();
}
function Ie(t) {
  return t === !1 || t == null ? t : d.isArray(t) ? t.map(Ie) : String(t);
}
function ni(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(t); )
    e[s[1]] = s[2];
  return e;
}
const si = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function On(t, e, n, s, o) {
  if (d.isFunction(s))
    return s.call(this, e, n);
  if (o && (e = n), !!d.isString(e)) {
    if (d.isString(s))
      return e.indexOf(s) !== -1;
    if (d.isRegExp(s))
      return s.test(e);
  }
}
function oi(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, s) => n.toUpperCase() + s);
}
function ri(t, e) {
  const n = d.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + n, {
      value: function(o, r, c) {
        return this[s].call(this, e, o, r, c);
      },
      configurable: !0
    });
  });
}
class hn {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, s) {
    const o = this;
    function r(i, u, f) {
      const l = Ee(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const a = d.findKey(o, l);
      (!a || o[a] === void 0 || f === !0 || f === void 0 && o[a] !== !1) && (o[a || u] = Ie(i));
    }
    const c = (i, u) => d.forEach(i, (f, l) => r(f, l, u));
    return d.isPlainObject(e) || e instanceof this.constructor ? c(e, n) : d.isString(e) && (e = e.trim()) && !si(e) ? c(ei(e), n) : e != null && r(n, e, s), this;
  }
  get(e, n) {
    if (e = Ee(e), e) {
      const s = d.findKey(this, e);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return ni(o);
        if (d.isFunction(n))
          return n.call(this, o, s);
        if (d.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Ee(e), e) {
      const s = d.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!n || On(this, this[s], s, n)));
    }
    return !1;
  }
  delete(e, n) {
    const s = this;
    let o = !1;
    function r(c) {
      if (c = Ee(c), c) {
        const i = d.findKey(s, c);
        i && (!n || On(s, s[i], i, n)) && (delete s[i], o = !0);
      }
    }
    return d.isArray(e) ? e.forEach(r) : r(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const r = n[s];
      (!e || On(this, this[r], r, e, !0)) && (delete this[r], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, s = {};
    return d.forEach(this, (o, r) => {
      const c = d.findKey(s, r);
      if (c) {
        n[c] = Ie(o), delete n[r];
        return;
      }
      const i = e ? oi(r) : String(r).trim();
      i !== r && delete n[r], n[i] = Ie(o), s[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = e && d.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const s = new this(e);
    return n.forEach((o) => s.set(o)), s;
  }
  static accessor(e) {
    const s = (this[zs] = this[zs] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function r(c) {
      const i = Ee(c);
      s[i] || (ri(o, c), s[i] = !0);
    }
    return d.isArray(e) ? e.forEach(r) : r(e), this;
  }
}
hn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(hn.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(s) {
      this[n] = s;
    }
  };
});
d.freezeMethods(hn);
const It = hn;
function Tn(t, e) {
  const n = this || ls, s = e || n, o = It.from(s.headers);
  let r = s.data;
  return d.forEach(t, function(i) {
    r = i.call(n, r, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), r;
}
function lr(t) {
  return !!(t && t.__CANCEL__);
}
function Ne(t, e, n) {
  q.call(this, t ?? "canceled", q.ERR_CANCELED, e, n), this.name = "CanceledError";
}
d.inherits(Ne, q, {
  __CANCEL__: !0
});
function ci(t, e, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? t(n) : e(new q(
    "Request failed with status code " + n.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const ai = Dt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, s, o, r) {
      const c = [t + "=" + encodeURIComponent(e)];
      d.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), d.isString(s) && c.push("path=" + s), d.isString(o) && c.push("domain=" + o), r === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
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
function ii(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function li(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ur(t, e) {
  return t && !ii(e) ? li(t, e) : e;
}
const ui = Dt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let s;
    function o(r) {
      let c = r;
      return e && (n.setAttribute("href", c), c = n.href), n.setAttribute("href", c), {
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
    return s = o(window.location.href), function(c) {
      const i = d.isString(c) ? o(c) : c;
      return i.protocol === s.protocol && i.host === s.host;
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
function fi(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function di(t, e) {
  t = t || 10;
  const n = new Array(t), s = new Array(t);
  let o = 0, r = 0, c;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const f = Date.now(), l = s[r];
    c || (c = f), n[o] = u, s[o] = f;
    let a = r, m = 0;
    for (; a !== o; )
      m += n[a++], a = a % t;
    if (o = (o + 1) % t, o === r && (r = (r + 1) % t), f - c < e)
      return;
    const y = l && f - l;
    return y ? Math.round(m * 1e3 / y) : void 0;
  };
}
function Vs(t, e) {
  let n = 0;
  const s = di(50, 250);
  return (o) => {
    const r = o.loaded, c = o.lengthComputable ? o.total : void 0, i = r - n, u = s(i), f = r <= c;
    n = r;
    const l = {
      loaded: r,
      total: c,
      progress: c ? r / c : void 0,
      bytes: i,
      rate: u || void 0,
      estimated: u && c && f ? (c - r) / u : void 0,
      event: o
    };
    l[e ? "download" : "upload"] = !0, t(l);
  };
}
const pi = typeof XMLHttpRequest < "u", hi = pi && function(t) {
  return new Promise(function(n, s) {
    let o = t.data;
    const r = It.from(t.headers).normalize();
    let { responseType: c, withXSRFToken: i } = t, u;
    function f() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let l;
    if (d.isFormData(o)) {
      if (Dt.hasStandardBrowserEnv || Dt.hasStandardBrowserWebWorkerEnv)
        r.setContentType(!1);
      else if ((l = r.getContentType()) !== !1) {
        const [h, ...O] = l ? l.split(";").map((g) => g.trim()).filter(Boolean) : [];
        r.setContentType([h || "multipart/form-data", ...O].join("; "));
      }
    }
    let a = new XMLHttpRequest();
    if (t.auth) {
      const h = t.auth.username || "", O = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      r.set("Authorization", "Basic " + btoa(h + ":" + O));
    }
    const m = ur(t.baseURL, t.url);
    a.open(t.method.toUpperCase(), rr(m, t.params, t.paramsSerializer), !0), a.timeout = t.timeout;
    function y() {
      if (!a)
        return;
      const h = It.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), g = {
        data: !c || c === "text" || c === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: h,
        config: t,
        request: a
      };
      ci(function(w) {
        n(w), f();
      }, function(w) {
        s(w), f();
      }, g), a = null;
    }
    if ("onloadend" in a ? a.onloadend = y : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, a.onabort = function() {
      a && (s(new q("Request aborted", q.ECONNABORTED, t, a)), a = null);
    }, a.onerror = function() {
      s(new q("Network Error", q.ERR_NETWORK, t, a)), a = null;
    }, a.ontimeout = function() {
      let O = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const g = t.transitional || cr;
      t.timeoutErrorMessage && (O = t.timeoutErrorMessage), s(new q(
        O,
        g.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        t,
        a
      )), a = null;
    }, Dt.hasStandardBrowserEnv && (i && d.isFunction(i) && (i = i(t)), i || i !== !1 && ui(m))) {
      const h = t.xsrfHeaderName && t.xsrfCookieName && ai.read(t.xsrfCookieName);
      h && r.set(t.xsrfHeaderName, h);
    }
    o === void 0 && r.setContentType(null), "setRequestHeader" in a && d.forEach(r.toJSON(), function(O, g) {
      a.setRequestHeader(g, O);
    }), d.isUndefined(t.withCredentials) || (a.withCredentials = !!t.withCredentials), c && c !== "json" && (a.responseType = t.responseType), typeof t.onDownloadProgress == "function" && a.addEventListener("progress", Vs(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", Vs(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (h) => {
      a && (s(!h || h.type ? new Ne(null, t, a) : h), a.abort(), a = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const p = fi(m);
    if (p && Dt.protocols.indexOf(p) === -1) {
      s(new q("Unsupported protocol " + p + ":", q.ERR_BAD_REQUEST, t));
      return;
    }
    a.send(o || null);
  });
}, Vn = {
  http: Ua,
  xhr: hi
};
d.forEach(Vn, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const qs = (t) => `- ${t}`, mi = (t) => d.isFunction(t) || t === null || t === !1, fr = {
  getAdapter: (t) => {
    t = d.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, s;
    const o = {};
    for (let r = 0; r < e; r++) {
      n = t[r];
      let c;
      if (s = n, !mi(n) && (s = Vn[(c = String(n)).toLowerCase()], s === void 0))
        throw new q(`Unknown adapter '${c}'`);
      if (s)
        break;
      o[c || "#" + r] = s;
    }
    if (!s) {
      const r = Object.entries(o).map(
        ([i, u]) => `adapter ${i} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = e ? r.length > 1 ? `since :
` + r.map(qs).join(`
`) : " " + qs(r[0]) : "as no adapter specified";
      throw new q(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Vn
};
function xn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ne(null, t);
}
function Ks(t) {
  return xn(t), t.headers = It.from(t.headers), t.data = Tn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), fr.getAdapter(t.adapter || ls.adapter)(t).then(function(s) {
    return xn(t), s.data = Tn.call(
      t,
      t.transformResponse,
      s
    ), s.headers = It.from(s.headers), s;
  }, function(s) {
    return lr(s) || (xn(t), s && s.response && (s.response.data = Tn.call(
      t,
      t.transformResponse,
      s.response
    ), s.response.headers = It.from(s.response.headers))), Promise.reject(s);
  });
}
const Js = (t) => t instanceof It ? { ...t } : t;
function be(t, e) {
  e = e || {};
  const n = {};
  function s(f, l, a) {
    return d.isPlainObject(f) && d.isPlainObject(l) ? d.merge.call({ caseless: a }, f, l) : d.isPlainObject(l) ? d.merge({}, l) : d.isArray(l) ? l.slice() : l;
  }
  function o(f, l, a) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(f))
        return s(void 0, f, a);
    } else
      return s(f, l, a);
  }
  function r(f, l) {
    if (!d.isUndefined(l))
      return s(void 0, l);
  }
  function c(f, l) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(f))
        return s(void 0, f);
    } else
      return s(void 0, l);
  }
  function i(f, l, a) {
    if (a in e)
      return s(f, l);
    if (a in t)
      return s(void 0, f);
  }
  const u = {
    url: r,
    method: r,
    data: r,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: i,
    headers: (f, l) => o(Js(f), Js(l), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, t, e)), function(l) {
    const a = u[l] || o, m = a(t[l], e[l], l);
    d.isUndefined(m) && a !== i || (n[l] = m);
  }), n;
}
const dr = "1.6.8", us = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  us[t] = function(s) {
    return typeof s === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ws = {};
us.transitional = function(e, n, s) {
  function o(r, c) {
    return "[Axios v" + dr + "] Transitional option '" + r + "'" + c + (s ? ". " + s : "");
  }
  return (r, c, i) => {
    if (e === !1)
      throw new q(
        o(c, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return n && !Ws[c] && (Ws[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(r, c, i) : !0;
  };
};
function yi(t, e, n) {
  if (typeof t != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let o = s.length;
  for (; o-- > 0; ) {
    const r = s[o], c = e[r];
    if (c) {
      const i = t[r], u = i === void 0 || c(i, r, t);
      if (u !== !0)
        throw new q("option " + r + " must be " + u, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new q("Unknown option " + r, q.ERR_BAD_OPTION);
  }
}
const qn = {
  assertOptions: yi,
  validators: us
}, jt = qn.validators;
class Ye {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new js(),
      response: new js()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (s) {
      if (s instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const r = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        s.stack ? r && !String(s.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + r) : s.stack = r;
      }
      throw s;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = be(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && qn.assertOptions(s, {
      silentJSONParsing: jt.transitional(jt.boolean),
      forcedJSONParsing: jt.transitional(jt.boolean),
      clarifyTimeoutError: jt.transitional(jt.boolean)
    }, !1), o != null && (d.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : qn.assertOptions(o, {
      encode: jt.function,
      serialize: jt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let c = r && d.merge(
      r.common,
      r[n.method]
    );
    r && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete r[p];
      }
    ), n.headers = It.concat(c, r);
    const i = [];
    let u = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (u = u && h.synchronous, i.unshift(h.fulfilled, h.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(h) {
      f.push(h.fulfilled, h.rejected);
    });
    let l, a = 0, m;
    if (!u) {
      const p = [Ks.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, f), m = p.length, l = Promise.resolve(n); a < m; )
        l = l.then(p[a++], p[a++]);
      return l;
    }
    m = i.length;
    let y = n;
    for (a = 0; a < m; ) {
      const p = i[a++], h = i[a++];
      try {
        y = p(y);
      } catch (O) {
        h.call(this, O);
        break;
      }
    }
    try {
      l = Ks.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (a = 0, m = f.length; a < m; )
      l = l.then(f[a++], f[a++]);
    return l;
  }
  getUri(e) {
    e = be(this.defaults, e);
    const n = ur(e.baseURL, e.url);
    return rr(n, e.params, e.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(e) {
  Ye.prototype[e] = function(n, s) {
    return this.request(be(s || {}, {
      method: e,
      url: n,
      data: (s || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(e) {
  function n(s) {
    return function(r, c, i) {
      return this.request(be(i || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: c
      }));
    };
  }
  Ye.prototype[e] = n(), Ye.prototype[e + "Form"] = n(!0);
});
const Me = Ye;
class fs {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(r) {
      n = r;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners)
        return;
      let r = s._listeners.length;
      for (; r-- > 0; )
        s._listeners[r](o);
      s._listeners = null;
    }), this.promise.then = (o) => {
      let r;
      const c = new Promise((i) => {
        s.subscribe(i), r = i;
      }).then(o);
      return c.cancel = function() {
        s.unsubscribe(r);
      }, c;
    }, e(function(r, c, i) {
      s.reason || (s.reason = new Ne(r, c, i), n(s.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new fs(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const bi = fs;
function gi(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function wi(t) {
  return d.isObject(t) && t.isAxiosError === !0;
}
const Kn = {
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
Object.entries(Kn).forEach(([t, e]) => {
  Kn[e] = t;
});
const Si = Kn;
function pr(t) {
  const e = new Me(t), n = Jo(Me.prototype.request, e);
  return d.extend(n, Me.prototype, e, { allOwnKeys: !0 }), d.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return pr(be(t, o));
  }, n;
}
const lt = pr(ls);
lt.Axios = Me;
lt.CanceledError = Ne;
lt.CancelToken = bi;
lt.isCancel = lr;
lt.VERSION = dr;
lt.toFormData = pn;
lt.AxiosError = q;
lt.Cancel = lt.CanceledError;
lt.all = function(e) {
  return Promise.all(e);
};
lt.spread = gi;
lt.isAxiosError = wi;
lt.mergeConfig = be;
lt.AxiosHeaders = It;
lt.formToJSON = (t) => ir(d.isHTMLForm(t) ? new FormData(t) : t);
lt.getAdapter = fr.getAdapter;
lt.HttpStatusCode = Si;
lt.default = lt;
const vi = lt;
class ds extends Error {
  constructor(e, n, s = null) {
    super(e), this.message = e, this.status = n, this.body = s, Object.setPrototypeOf(this, ds.prototype), this.name = this.constructor.name, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack, this.stack = new Error().stack;
  }
}
async function Ei(t, e = {}) {
  const s = await vi.create({
    baseURL: e.baseUrl || ""
  })({ ...e, url: t }), { status: o, statusText: r, headers: c, body: i } = {
    status: s.status,
    statusText: s.statusText,
    headers: s.headers,
    body: s.data
  };
  let u = i;
  return o < 200 || o >= 300 ? Promise.reject(new ds(r, o)) : await Promise.resolve({ status: o, headers: c, body: i, json: u });
}
const Oi = {
  create: () => Promise.resolve({ data: null }),
  // avoids adding a context in tests
  delete: () => Promise.resolve({ data: null }),
  // avoids adding a context in tests
  getList: () => Promise.resolve({
    data: Array.from({ length: 30 }).map((t, e) => ({
      name: e,
      id: e
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
  httpClient: Ei
}, Ti = Symbol("DATA_PROVIDER_CONTEXT"), xi = () => Wn(Ti, Oi), Ri = {};
function _i(t) {
  const {
    initialData: e,
    shallow: n,
    onSuccess: s = ys,
    onError: o = ys,
    immediate: r,
    resetOnExecute: c = !1,
    queryFn: i,
    queryKey: u
  } = t, f = (n ? ze : Xt)(e), l = Xt(!1), a = Xt(!1), m = Xt(!1), y = ze(), p = (R) => {
    a.value = R, l.value = !R;
  }, h = () => {
    c && (f.value = e);
  }, O = () => new Promise((R, _) => {
    Lr(l).toBe(!0).then(() => y.value ? _(y.value) : R(x));
  }), g = {
    then: (...R) => O().then(...R),
    catch: (...R) => O().catch(...R)
  };
  let T = 0;
  const w = () => {
    if (y.value = void 0, a.value)
      return g;
    if (i === void 0)
      return l.value = !0, g;
    h(), p(!0), T += 1;
    const R = T;
    return i().then((_) => {
      const U = _;
      f.value = U, s(U);
    }).catch((_) => {
      y.value = _, o(_);
    }).finally(() => {
      var _;
      (_ = t.onFinish) == null || _.call(t), R === T && p(!1);
    }), g;
  };
  r && w();
  const x = {
    data: f,
    error: y,
    isFinished: l,
    isLoading: a,
    isAborted: m,
    isCanceled: m,
    execute: w
  };
  return {
    ...x,
    ...g
  };
}
const Ai = (t, e = {}) => {
  const { pagination: n = { page: 1, perPage: 20 }, filter: s = Ri } = e, o = xi();
  no();
  const r = _i({
    immediate: !0,
    // queryKey: [filter, resource, pagination],
    queryFn: () => new Promise((u, f) => {
      setTimeout(() => {
        o.getList(t, {
          pagination: n,
          filter: s
        }).then(({ data: l, total: a }) => ({
          data: l,
          total: a
        })).then(u).catch(f);
      }, 2e3);
    }),
    initialData: {
      data: [],
      total: 0
    }
  }), c = Te(() => r.data.value.data), i = Te(() => r.data.value.total);
  return {
    ...r,
    data: c,
    total: i
  };
}, Ci = { class: "fast-start-table" }, Pi = /* @__PURE__ */ Pt({
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
  setup(t, { expose: e }) {
    const n = na(), s = no(), o = ze(null), r = Xt({
      pagination: {
        page: 1,
        perPage: 10
      },
      filter: {}
    }), { data: c, total: i, isLoading: u, execute: f } = Ai(n.name, r.value), l = t, a = Te(() => l.rowKey || s.rowKey), m = Te(() => l.tableData || c.value), y = () => {
      f();
    };
    return e({
      tableInstance: o
    }), (p, h) => {
      const O = vr("loading");
      return At(), je("div", Ci, [
        Er((At(), te(ot(Pr), Gs({
          ref_key: "tableInstance",
          ref: o,
          "row-key": a.value,
          data: m.value
        }, p.$attrs, {
          "highlight-current-row": "",
          "scrollbar-always-on": ""
        }), {
          default: mt(() => [
            Zt(p.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["row-key", "data"])), [
          [O, ot(u)]
        ]),
        yt(ot(Nr), {
          disabled: ot(u),
          class: "fast-start-pagination",
          "page-sizes": [10, 20, 30, 100],
          layout: "prev, pager, next,sizes",
          total: ot(i),
          onChange: y,
          "current-page": r.value.pagination.page,
          "onUpdate:currentPage": h[0] || (h[0] = (g) => r.value.pagination.page = g),
          "page-size": r.value.pagination.perPage,
          "onUpdate:pageSize": h[1] || (h[1] = (g) => r.value.pagination.perPage = g)
        }, null, 8, ["disabled", "total", "current-page", "page-size"])
      ]);
    };
  }
}), Ni = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, o] of e)
    n[s] = o;
  return n;
}, Bi = /* @__PURE__ */ Ni(Pi, [["__scopeId", "data-v-1d76dcb7"]]), Hi = () => ({
  install: () => {
  }
});
export {
  ki as FastStars,
  Hi as FastStartCore,
  Bi as FsDataTable,
  sa as FsResource,
  Ko as RESOURCE_CONTEXT,
  Li as createResourceFactory,
  ea as createResourceProvider,
  to as useMenuStore,
  na as useResourceContext
};
//# sourceMappingURL=index.mjs.map
