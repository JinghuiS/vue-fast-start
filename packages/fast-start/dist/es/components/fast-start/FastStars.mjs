import { defineComponent as It, openBlock as Mt, createBlock as de, unref as it, normalizeStyle as un, withCtx as ft, createTextVNode as qe, renderSlot as Qt, computed as Do, createElementBlock as Ke, Fragment as xn, renderList as zo, normalizeProps as Fo, mergeProps as No, createVNode as pt, resolveComponent as Bo, toDisplayString as $n, effectScope as Uo, ref as jn, readonly as Go, provide as jo, shallowRef as Wo, watch as ye, onUnmounted as qo, onMounted as Wn } from "vue";
import { ElHeader as Ko, ElMenuItem as Xo, ElSubMenu as Yo, ElAside as Jo, ElMenu as Zo, ElMain as Qo, ElContainer as ts } from "element-plus";
import { RouterView as es } from "vue-router";
const dn = 60, ns = /* @__PURE__ */ It({
  __name: "Header",
  setup(t) {
    return (e, n) => (Mt(), de(it(Ko), {
      class: "fast-start-layout-header",
      style: un({ height: it(dn) })
    }, {
      default: ft(() => [
        qe(" header ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
}), qn = /* @__PURE__ */ It({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(t) {
    const e = (n) => n;
    return (n, o) => n.when ? Qt(n.$slots, "default", {
      key: 0,
      value: e(n.when)
    }) : Qt(n.$slots, "fallback", { key: 1 });
  }
}), os = /* @__PURE__ */ It({
  name: "For",
  __name: "For",
  props: {
    echo: {},
    rowKey: {}
  },
  setup(t) {
    const e = t, n = Do(() => e.echo);
    return (o, s) => (Mt(), Ke(
      xn,
      null,
      [
        (Mt(!0), Ke(
          xn,
          null,
          zo(o.echo, (c) => Qt(o.$slots, "default", Fo(No({ key: o.rowKey }, c)))),
          128
          /* KEYED_FRAGMENT */
        )),
        pt(qn, {
          when: !n.value || !n.value.length || n.value.length === 0
        }, {
          default: ft(() => [
            Qt(o.$slots, "fallback")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["when"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), ss = /* @__PURE__ */ It({
  name: "FsSideBarItem",
  __name: "Item",
  props: {
    items: {}
  },
  setup(t) {
    return (e, n) => {
      const o = Bo("FsSideBarItem");
      return Mt(), de(it(os), {
        echo: e.items,
        "row-key": "path"
      }, {
        default: ft(({ path: s, children: c, name: r }) => [
          pt(it(qn), {
            when: c && c.length > 0
          }, {
            fallback: ft(() => [
              pt(it(Xo), {
                class: "fast-start-menu-item",
                index: s
              }, {
                default: ft(() => [
                  qe(
                    $n(r),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["index"])
            ]),
            default: ft(() => [
              pt(it(Yo), {
                class: "fast-start-menu-item-title",
                index: s
              }, {
                title: ft(() => [
                  qe(
                    $n(r),
                    1
                    /* TEXT */
                  )
                ]),
                default: ft(() => [
                  pt(o, { items: c }, null, 8, ["items"])
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
function cs(t) {
  let e = !1, n;
  const o = Uo(!0);
  return (...s) => (e || (n = o.run(() => t(...s)), e = !0), n);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Kn = cs(() => {
  const t = jn({
    menu: []
  });
  function e(n) {
    t.value.menu = n;
  }
  return {
    state: Go(t),
    setMenu: e
  };
}), rs = /* @__PURE__ */ It({
  __name: "SideBar",
  setup(t) {
    const { state: e } = Kn();
    return (n, o) => (Mt(), de(it(Jo), {
      class: "fast-start-aside",
      width: "230px",
      style: un({ height: `calc(100vh - ${it(dn)}px)` })
    }, {
      default: ft(() => [
        pt(it(Zo), { class: "fast-start-menu" }, {
          default: ft(() => [
            pt(ss, {
              items: it(e).menu
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
}), ls = /* @__PURE__ */ It({
  __name: "Main",
  setup(t) {
    return (e, n) => (Mt(), de(it(Qo), {
      class: "fast-start-layout-main",
      style: un({
        height: `calc(100vh - ${it(dn)}px) `
      })
    }, {
      default: ft(() => [
        pt(it(es))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
}), as = /* @__PURE__ */ It({
  __name: "DefaultLayout",
  setup(t) {
    return (e, n) => (Mt(), Ke("div", null, [
      pt(ns),
      pt(it(ts), null, {
        default: ft(() => [
          pt(rs),
          pt(ls)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), is = [
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
], us = [
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
], ds = [
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
], fs = [
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
], ps = [
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
], ms = [
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
], gs = [
  ...is,
  ...us,
  ...ds,
  ...fs,
  ...ps,
  ...ms
], vs = [
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
})), hs = [...vs], bs = [
  {
    name: "color",
    value: gs
  },
  {
    name: "text",
    value: hs
  }
], ys = () => {
  const t = document.documentElement;
  for (const e of bs)
    for (const n of e.value)
      t.style.setProperty(`--el-${e.name}-${n.name}`, n.value);
}, ws = Symbol("FAST_START_CONTEXT"), Ss = (t) => jo(ws, t);
/*!
 * OverlayScrollbars
 * Version: 2.7.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const _t = (t, e) => {
  const { o: n, u: o, _: s } = t;
  let c = n, r;
  const a = (i, p) => {
    const v = c, b = i, T = p || (o ? !o(v, b) : v !== b);
    return (T || s) && (c = b, r = v), [c, T, r];
  };
  return [e ? (i) => a(e(c, r), i) : a, (i) => [c, !!i, r]];
}, Xn = typeof window < "u" && typeof document < "u", bt = Xn ? window : {}, we = Math.max, _s = Math.min, Xe = Math.round, Yn = bt.cancelAnimationFrame, Jn = bt.requestAnimationFrame, Ye = bt.setTimeout, Je = bt.clearTimeout, Ae = (t) => typeof bt[t] < "u" ? bt[t] : void 0, xs = Ae("MutationObserver"), On = Ae("IntersectionObserver"), _e = Ae("ResizeObserver"), Ze = Ae("ScrollTimeline"), Zn = Xn && Node.ELEMENT_NODE, { toString: $s, hasOwnProperty: Be } = Object.prototype, Os = /^\[object (.+)\]$/, fe = (t) => t === void 0, He = (t) => t === null, Es = (t) => fe(t) || He(t) ? `${t}` : $s.call(t).replace(Os, "$1").toLowerCase(), Tt = (t) => typeof t == "number", ke = (t) => typeof t == "string", Qn = (t) => typeof t == "boolean", At = (t) => typeof t == "function", $t = (t) => Array.isArray(t), ie = (t) => typeof t == "object" && !$t(t) && !He(t), Ie = (t) => {
  const e = !!t && t.length, n = Tt(e) && e > -1 && e % 1 == 0;
  return $t(t) || !At(t) && n ? e > 0 && ie(t) ? e - 1 in t : !0 : !1;
}, xe = (t) => {
  if (!t || !ie(t) || Es(t) !== "object")
    return !1;
  let e;
  const n = "constructor", o = t[n], s = o && o.prototype, c = Be.call(t, n), r = s && Be.call(s, "isPrototypeOf");
  if (o && !c && !r)
    return !1;
  for (e in t)
    ;
  return fe(e) || Be.call(t, e);
}, $e = (t) => {
  const e = HTMLElement;
  return t ? e ? t instanceof e : t.nodeType === Zn : !1;
}, Le = (t) => {
  const e = Element;
  return t ? e ? t instanceof e : t.nodeType === Zn : !1;
};
function W(t, e) {
  if (Ie(t))
    for (let n = 0; n < t.length && e(t[n], n, t) !== !1; n++)
      ;
  else
    t && W(Object.keys(t), (n) => e(t[n], n, t));
  return t;
}
const Pe = (t, e) => t.indexOf(e) >= 0, Ht = (t, e) => t.concat(e), Q = (t, e, n) => (!n && !ke(e) && Ie(e) ? Array.prototype.push.apply(t, e) : t.push(e), t), Gt = (t) => Array.from(t || []), to = (t) => $t(t) ? t : [t], Qe = (t) => !!t && !t.length, En = (t) => Gt(new Set(t)), yt = (t, e, n) => {
  W(t, (s) => s && s.apply(void 0, e || [])), !n && (t.length = 0);
}, eo = "paddingTop", no = "paddingRight", oo = "paddingLeft", so = "paddingBottom", co = "marginLeft", ro = "marginRight", lo = "marginBottom", Ve = "overflowX", Me = "overflowY", te = "width", ee = "height", ne = "hidden", ao = "visible", fn = (t, e, n, o) => {
  if (t && e) {
    let s = !0;
    return W(n, (c) => {
      const r = o ? o(t[c]) : t[c], a = o ? o(e[c]) : e[c];
      r !== a && (s = !1);
    }), s;
  }
  return !1;
}, io = (t, e) => fn(t, e, ["w", "h"]), uo = (t, e) => fn(t, e, ["x", "y"]), Cs = (t, e) => fn(t, e, ["t", "r", "b", "l"]), xt = () => {
}, V = (t, ...e) => t.bind(0, ...e), Kt = (t) => {
  let e;
  const n = t ? Ye : Jn, o = t ? Je : Yn;
  return [(s) => {
    o(e), e = n(s, At(t) ? t() : t);
  }, () => o(e)];
}, fo = (t, e) => {
  let n, o, s, c = xt;
  const { v: r, p: a, S: l } = e || {}, u = function(T) {
    c(), Je(n), n = o = void 0, c = xt, t.apply(this, T);
  }, i = (b) => l && o ? l(o, b) : b, p = () => {
    c !== xt && u(i(s) || s);
  }, v = function() {
    const T = Gt(arguments), A = At(r) ? r() : r;
    if (Tt(A) && A >= 0) {
      const C = At(a) ? a() : a, $ = Tt(C) && C >= 0, h = A > 0 ? Ye : Jn, E = A > 0 ? Je : Yn, H = i(T) || T, F = u.bind(0, H);
      c();
      const D = h(F, A);
      c = () => E(D), $ && !n && (n = Ye(p, C)), o = s = H;
    } else
      u(T);
  };
  return v.m = p, v;
}, po = (t, e) => Object.prototype.hasOwnProperty.call(t, e), Rt = (t) => t ? Object.keys(t) : [], j = (t, e, n, o, s, c, r) => {
  const a = [e, n, o, s, c, r];
  return (typeof t != "object" || He(t)) && !At(t) && (t = {}), W(a, (l) => {
    W(l, (u, i) => {
      const p = l[i];
      if (t === p)
        return !0;
      const v = $t(p);
      if (p && xe(p)) {
        const b = t[i];
        let T = b;
        v && !$t(b) ? T = [] : !v && !xe(b) && (T = {}), t[i] = j(T, p);
      } else
        t[i] = v ? p.slice() : p;
    });
  }), t;
}, mo = (t, e) => W(j({}, t), (n, o, s) => {
  n === void 0 ? delete s[o] : e && n && xe(n) && (s[o] = mo(n, e));
}), pn = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, tn = (t, e, n) => we(t, _s(e, n)), Bt = (t) => Gt(new Set(($t(t) ? t : (t || "").split(" ")).filter((e) => e))), Re = (t, e) => t && t.getAttribute(e), St = (t, e, n) => {
  W(Bt(e), (o) => {
    t && t.setAttribute(o, n || "");
  });
}, Ct = (t, e) => {
  W(Bt(e), (n) => t && t.removeAttribute(n));
}, De = (t, e) => {
  const n = Bt(Re(t, e)), o = V(St, t, e), s = (c, r) => {
    const a = new Set(n);
    return W(Bt(c), (l) => a[r](l)), Gt(a).join(" ");
  };
  return {
    O: (c) => o(s(c, "delete")),
    $: (c) => o(s(c, "add")),
    C: (c) => {
      const r = Bt(c);
      return r.reduce((a, l) => a && n.includes(l), r.length > 0);
    }
  };
}, go = (t, e, n) => {
  De(t, e).O(n);
}, ue = (t, e, n) => (De(t, e).$(n), V(go, t, e, n)), Se = (t, e, n, o) => {
  (o ? ue : go)(t, e, n);
}, Ts = (t, e, n) => De(t, e).C(n), vo = (t) => De(t, "class"), mn = (t, e) => {
  vo(t).O(e);
}, Oe = (t, e) => (vo(t).$(e), V(mn, t, e)), ho = (t, e) => {
  const n = [], o = e ? Le(e) && e : document;
  return o ? Q(n, o.querySelectorAll(t)) : n;
}, As = (t, e) => {
  const n = e ? Le(e) && e : document;
  return n ? n.querySelector(t) : null;
}, Ee = (t, e) => Le(t) ? t.matches(e) : !1, bo = (t) => Ee(t, "body"), en = (t) => t ? Gt(t.childNodes) : [], oe = (t) => t && t.parentElement, Xt = (t, e) => Le(t) && t.closest(e), Hs = (t, e, n) => {
  const o = Xt(t, e), s = t && As(n, o), c = Xt(s, e) === o;
  return o && s ? o === t || s === t || c && Xt(Xt(t, n), e) !== o : !1;
}, Dt = (t) => {
  if (Ie(t))
    W(Gt(t), (e) => Dt(e));
  else if (t) {
    const e = oe(t);
    e && e.removeChild(t);
  }
}, yo = (t, e, n) => {
  if (n && t) {
    let o = e, s;
    return Ie(n) ? (s = document.createDocumentFragment(), W(n, (c) => {
      c === o && (o = c.previousSibling), s.appendChild(c);
    })) : s = n, e && (o ? o !== e && (o = o.nextSibling) : o = t.firstChild), t.insertBefore(s, o || null), () => Dt(n);
  }
  return xt;
}, ht = (t, e) => yo(t, null, e), Cn = (t, e) => yo(oe(t), t && t.nextSibling, e), Yt = (t) => {
  const e = document.createElement("div");
  return St(e, "class", t), e;
}, wo = (t) => {
  const e = Yt();
  return e.innerHTML = t.trim(), W(en(e), (n) => Dt(n));
}, ks = /^--/, Tn = (t, e) => t.getPropertyValue(e) || t[e] || "", gn = (t) => {
  const e = t || 0;
  return isFinite(e) ? e : 0;
}, be = (t) => gn(parseFloat(t || "")), An = (t) => `${(gn(t) * 100).toFixed(3)}%`, nn = (t) => `${gn(t)}px`;
function se(t, e) {
  t && W(e, (n, o) => {
    try {
      const s = t.style, c = Tt(n) ? nn(n) : (n || "") + "";
      ks.test(o) ? s.setProperty(o, c) : s[o] = c;
    } catch {
    }
  });
}
function Ut(t, e, n) {
  const o = ke(e);
  let s = o ? "" : {};
  if (t) {
    const c = bt.getComputedStyle(t, n) || t.style;
    s = o ? Tn(c, e) : e.reduce((r, a) => (r[a] = Tn(c, a), r), s);
  }
  return s;
}
const Vt = (t) => Ut(t, "direction") === "rtl", Hn = (t, e, n) => {
  const o = e ? `${e}-` : "", s = n ? `-${n}` : "", c = `${o}top${s}`, r = `${o}right${s}`, a = `${o}bottom${s}`, l = `${o}left${s}`, u = Ut(t, [c, r, a, l]);
  return {
    t: be(u[c]),
    r: be(u[r]),
    b: be(u[a]),
    l: be(u[l])
  };
}, Ue = (t, e) => `translate${ie(t) ? `(${t.x},${t.y})` : `${e ? "X" : "Y"}(${t})`}`, Is = {
  w: 0,
  h: 0
}, ze = (t, e) => e ? {
  w: e[`${t}Width`],
  h: e[`${t}Height`]
} : Is, Ls = (t) => ze("inner", t || bt), ae = V(ze, "offset"), So = V(ze, "client"), on = V(ze, "scroll"), vn = (t) => {
  const e = parseFloat(Ut(t, te)) || 0, n = parseFloat(Ut(t, ee)) || 0;
  return {
    w: e - Xe(e),
    h: n - Xe(n)
  };
}, Jt = (t) => t.getBoundingClientRect(), sn = (t) => !!(t && (t[ee] || t[te])), _o = (t, e) => {
  const n = sn(t);
  return !sn(e) && n;
}, kn = (t, e, n, o) => {
  W(Bt(e), (s) => {
    t.removeEventListener(s, n, o);
  });
}, et = (t, e, n, o) => {
  var s;
  const c = (s = o && o.H) != null ? s : !0, r = o && o.I || !1, a = o && o.A || !1, l = {
    passive: c,
    capture: r
  };
  return V(yt, Bt(e).map((u) => {
    const i = a ? (p) => {
      kn(t, u, i, r), n(p);
    } : n;
    return t.addEventListener(u, i, l), V(kn, t, u, i, r);
  }));
}, hn = (t) => t.stopPropagation(), In = (t) => t.preventDefault(), Ps = {
  x: 0,
  y: 0
}, Ge = (t) => {
  const e = t && Jt(t);
  return e ? {
    x: e.left + bt.scrollX,
    y: e.top + bt.scrollY
  } : Ps;
}, Ce = (t, e, n) => n ? n.n ? -t + 0 : n.i ? e - t : t : t, Ln = (t, e) => [Ce(0, t, e), Ce(t, t, e)], Pn = (t, e, n) => tn(0, 1, Ce(t, e, n) / e || 0), zt = (t, e) => {
  const { x: n, y: o } = Tt(e) ? {
    x: e,
    y: e
  } : e || {};
  Tt(n) && (t.scrollLeft = n), Tt(o) && (t.scrollTop = o);
}, ce = (t) => ({
  x: t.scrollLeft,
  y: t.scrollTop
}), Vn = (t, e) => {
  W(to(e), t);
}, cn = (t) => {
  const e = /* @__PURE__ */ new Map(), n = (c, r) => {
    if (c) {
      const a = e.get(c);
      Vn((l) => {
        a && a[l ? "delete" : "clear"](l);
      }, r);
    } else
      e.forEach((a) => {
        a.clear();
      }), e.clear();
  }, o = (c, r) => {
    if (ke(c)) {
      const u = e.get(c) || /* @__PURE__ */ new Set();
      return e.set(c, u), Vn((i) => {
        At(i) && u.add(i);
      }, r), V(n, c, r);
    }
    Qn(r) && r && n();
    const a = Rt(c), l = [];
    return W(a, (u) => {
      const i = c[u];
      i && Q(l, o(u, i));
    }), V(yt, l);
  }, s = (c, r) => {
    W(Gt(e.get(c)), (a) => {
      r && !Qe(r) ? a.apply(0, r) : a();
    });
  };
  return o(t || {}), [o, n, s];
}, Mn = (t) => JSON.stringify(t, (e, n) => {
  if (At(n))
    throw 0;
  return n;
}), Rn = (t, e) => t ? `${e}`.split(".").reduce((n, o) => n && po(n, o) ? n[o] : void 0, t) : void 0, Vs = {
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
}, xo = (t, e) => {
  const n = {}, o = Ht(Rt(e), Rt(t));
  return W(o, (s) => {
    const c = t[s], r = e[s];
    if (ie(c) && ie(r))
      j(n[s] = {}, xo(c, r)), pn(n[s]) && delete n[s];
    else if (po(e, s) && r !== c) {
      let a = !0;
      if ($t(c) || $t(r))
        try {
          Mn(c) === Mn(r) && (a = !1);
        } catch {
        }
      a && (n[s] = r);
    }
  }), n;
}, Dn = (t, e, n) => (o) => [Rn(t, o), n || Rn(e, o) !== void 0], pe = "data-overlayscrollbars", $o = "os-environment", Ms = `${$o}-scrollbar-hidden`, je = `${pe}-initialize`, vt = pe, Oo = `${vt}-overflow-x`, Eo = `${vt}-overflow-y`, Co = "overflowVisible", Rs = "scrollbarPressed", rn = "updating", Ds = "body", Pt = `${pe}-viewport`, zs = "arrange", To = "scrollbarHidden", Zt = Co, ln = `${pe}-padding`, Fs = Zt, zn = `${pe}-content`, bn = "os-size-observer", Ns = `${bn}-appear`, Bs = `${bn}-listener`, Us = "os-trinsic-observer", Gs = "os-theme-none", mt = "os-scrollbar", js = `${mt}-rtl`, Ws = `${mt}-horizontal`, qs = `${mt}-vertical`, Ao = `${mt}-track`, yn = `${mt}-handle`, Ks = `${mt}-visible`, Xs = `${mt}-cornerless`, Fn = `${mt}-interaction`, Nn = `${mt}-unusable`, an = `${mt}-auto-hide`, Bn = `${an}-hidden`, Un = `${mt}-wheel`, Ys = `${Ao}-interactive`, Js = `${yn}-interactive`, Ho = {}, ko = {}, Zs = (t) => {
  W(t, (e) => W(e, (n, o) => {
    Ho[o] = e[o];
  }));
}, Io = (t, e, n) => Rt(t).map((o) => {
  const { static: s, instance: c } = t[o], [r, a, l] = n || [], u = n ? c : s;
  if (u) {
    const i = n ? u(r, a, e) : u(e);
    return (l || ko)[o] = i;
  }
}), re = (t) => ko[t], Qs = "__osOptionsValidationPlugin", tc = "__osSizeObserverPlugin", ec = (t, e) => {
  const { T: n } = e, [o, s] = t("showNativeOverlaidScrollbars");
  return [o && n.x && n.y, s];
}, Te = (t) => t.indexOf(ao) === 0, Lo = (t, e) => {
  const { D: n } = t, o = (l) => {
    const u = Ut(n, l), p = (e ? e[l] : u) === "scroll";
    return [u, p];
  }, [s, c] = o(Ve), [r, a] = o(Me);
  return {
    k: {
      x: s,
      y: r
    },
    R: {
      x: c,
      y: a
    }
  };
}, nc = (t, e, n, o) => {
  const s = e.x || e.y, c = (i, p) => {
    const v = Te(i), b = v && s ? "hidden" : "", T = p && v && i.replace(`${ao}-`, "") || b;
    return [p && !v ? i : "", Te(T) ? "hidden" : T];
  }, [r, a] = c(n.x, e.x), [l, u] = c(n.y, e.y);
  return o[Ve] = a && l ? a : r, o[Me] = u && r ? u : l, Lo(t, o);
}, wn = "__osScrollbarsHidingPlugin", oc = "__osClickScrollPlugin";
let We;
const sc = () => {
  const t = (h, E, I, H) => {
    ht(h, E);
    const F = So(E), D = ae(E), M = vn(I);
    return H && Dt(E), {
      x: D.h - F.h + M.h,
      y: D.w - F.w + M.w
    };
  }, e = (h) => {
    let E = !1;
    const I = Oe(h, Ms);
    try {
      E = Ut(h, "scrollbar-width") === "none" || Ut(h, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return I(), E;
  }, n = (h, E) => {
    se(h, {
      [Ve]: ne,
      [Me]: ne,
      direction: "rtl"
    }), zt(h, {
      x: 0
    });
    const I = Ge(h), H = Ge(E);
    zt(h, {
      x: -999
    });
    const F = Ge(E);
    return {
      i: I.x === H.x,
      n: H.x !== F.x
    };
  }, { body: o } = document, c = wo(`<div class="${$o}"><div></div></div>`)[0], r = c.firstChild, [a, , l] = cn(), [u, i] = _t({
    o: t(o, c, r),
    u: uo
  }, V(t, o, c, r, !0)), [p] = i(), v = e(c), b = {
    x: p.x === 0,
    y: p.y === 0
  }, T = {
    elements: {
      host: null,
      padding: !v,
      viewport: (h) => v && bo(h) && h,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, A = j({}, Vs), P = V(j, {}, A), C = V(j, {}, T), $ = {
    P: p,
    T: b,
    L: v,
    J: !!Ze,
    K: n(c, r),
    Z: V(a, "r"),
    G: C,
    tt: (h) => j(T, h) && C(),
    nt: P,
    ot: (h) => j(A, h) && P(),
    st: j({}, T),
    et: j({}, A)
  };
  return Ct(c, "style"), Dt(c), bt.addEventListener("resize", () => {
    let h;
    if (!v && (!b.x || !b.y)) {
      const E = re(wn);
      h = !!(E ? E.Y() : xt)($, u);
    }
    l("r", [h]);
  }), $;
}, wt = () => (We || (We = sc()), We), Po = (t, e) => At(e) ? e.apply(0, t) : e, cc = (t, e, n, o) => {
  const s = fe(o) ? n : o;
  return Po(t, s) || e.apply(0, t);
}, Vo = (t, e, n, o) => {
  const s = fe(o) ? n : o, c = Po(t, s);
  return !!c && ($e(c) ? c : e.apply(0, t));
}, rc = (t, e) => {
  const { nativeScrollbarsOverlaid: n, body: o } = e || {}, { T: s, L: c, G: r } = wt(), { nativeScrollbarsOverlaid: a, body: l } = r().cancel, u = n ?? a, i = fe(o) ? l : o, p = (s.x || s.y) && u, v = t && (He(i) ? !c : i);
  return !!p || !!v;
}, Sn = /* @__PURE__ */ new WeakMap(), lc = (t, e) => {
  Sn.set(t, e);
}, ac = (t) => {
  Sn.delete(t);
}, Mo = (t) => Sn.get(t), ic = (t, e, n) => {
  let o = !1;
  const s = n ? /* @__PURE__ */ new WeakMap() : !1, c = () => {
    o = !0;
  }, r = (a) => {
    if (s && n) {
      const l = n.map((u) => {
        const [i, p] = u || [];
        return [p && i ? (a || ho)(i, t) : [], p];
      });
      W(l, (u) => W(u[0], (i) => {
        const p = u[1], v = s.get(i) || [];
        if (t.contains(i) && p) {
          const T = et(i, p, (A) => {
            o ? (T(), s.delete(i)) : e(A);
          });
          s.set(i, Q(v, T));
        } else
          yt(v), s.delete(i);
      }));
    }
  };
  return r(), [c, r];
}, Gn = (t, e, n, o) => {
  let s = !1;
  const { ct: c, rt: r, lt: a, it: l, ut: u, ft: i } = o || {}, p = fo(() => s && n(!0), {
    v: 33,
    p: 99
  }), [v, b] = ic(t, p, a), T = c || [], A = r || [], P = Ht(T, A), C = (h, E) => {
    if (!Qe(E)) {
      const I = u || xt, H = i || xt, F = [], D = [];
      let M = !1, S = !1;
      if (W(E, (y) => {
        const { attributeName: x, target: _, type: L, oldValue: R, addedNodes: K, removedNodes: B } = y, z = L === "attributes", st = L === "childList", k = t === _, Y = z && x, J = Y && Re(_, x || "") || null, nt = Y && R !== J, X = Pe(A, x) && nt;
        if (e && (st || !k)) {
          const ct = z && nt, rt = ct && l && Ee(_, l), d = (rt ? !I(_, x, R, J) : !z || ct) && !H(y, !!rt, t, o);
          W(K, (m) => Q(F, m)), W(B, (m) => Q(F, m)), S = S || d;
        }
        !e && k && nt && !I(_, x, R, J) && (Q(D, x), M = M || X);
      }), b((y) => En(F).reduce((x, _) => (Q(x, ho(y, _)), Ee(_, y) ? Q(x, _) : x), [])), e)
        return !h && S && n(!1), [!1];
      if (!Qe(D) || M) {
        const y = [En(D), M];
        return !h && n.apply(0, y), y;
      }
    }
  }, $ = new xs(V(C, !1));
  return [() => ($.observe(t, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: P,
    subtree: e,
    childList: e,
    characterData: e
  }), s = !0, () => {
    s && (v(), $.disconnect(), s = !1);
  }), () => {
    if (s)
      return p.m(), C(!0, $.takeRecords());
  }];
}, Ro = (t, e, n) => {
  const { dt: s, _t: c } = n || {}, r = re(tc), { K: a } = wt(), l = V(Vt, t), [u] = _t({
    o: !1,
    _: !0
  });
  return () => {
    const i = [], v = wo(`<div class="${bn}"><div class="${Bs}"></div></div>`)[0], b = v.firstChild, T = (A) => {
      const P = A instanceof ResizeObserverEntry, C = !P && $t(A);
      let $ = !1, h = !1, E = !0;
      if (P) {
        const [I, , H] = u(A.contentRect), F = sn(I), D = _o(I, H);
        h = !H || D, $ = !h && !F, E = !$;
      } else
        C ? [, E] = A : h = A === !0;
      if (s && E) {
        const I = C ? A[0] : Vt(v);
        zt(v, {
          x: Ce(3333333, 3333333, I && a),
          y: 3333333
        });
      }
      $ || e({
        vt: C ? A : void 0,
        ht: !C,
        _t: h
      });
    };
    if (_e) {
      const A = new _e((P) => T(P.pop()));
      A.observe(b), Q(i, () => {
        A.disconnect();
      });
    } else if (r) {
      const [A, P] = r(b, T, c);
      Q(i, Ht([Oe(v, Ns), et(v, "animationstart", A)], P));
    } else
      return xt;
    if (s) {
      const [A] = _t({
        o: void 0
      }, l);
      Q(i, et(v, "scroll", (P) => {
        const C = A(), [$, h, E] = C;
        h && (mn(b, "ltr rtl"), Oe(b, $ ? "rtl" : "ltr"), T([!!$, h, E])), hn(P);
      }));
    }
    return V(yt, Q(i, ht(t, v)));
  };
}, uc = (t, e) => {
  let n;
  const o = (l) => l.h === 0 || l.isIntersecting || l.intersectionRatio > 0, s = Yt(Us), [c] = _t({
    o: !1
  }), r = (l, u) => {
    if (l) {
      const i = c(o(l)), [, p] = i;
      return p && !u && e(i) && [i];
    }
  }, a = (l, u) => r(u.pop(), l);
  return [() => {
    const l = [];
    if (On)
      n = new On(V(a, !1), {
        root: t
      }), n.observe(s), Q(l, () => {
        n.disconnect();
      });
    else {
      const u = () => {
        const i = ae(s);
        r(i);
      };
      Q(l, Ro(s, u)()), u();
    }
    return V(yt, Q(l, ht(t, s)));
  }, () => n && a(!0, n.takeRecords())];
}, dc = (t, e, n, o) => {
  let s, c, r, a, l, u;
  const { L: i } = wt(), p = `[${vt}]`, v = `[${Pt}]`, b = ["tabindex"], T = ["wrap", "cols", "rows"], A = ["id", "class", "style", "open"], { gt: P, bt: C, D: $, wt: h, St: E, V: I, yt: H, Ot: F } = t, D = {
    $t: !1,
    N: Vt(P)
  }, M = wt(), S = re(wn), [y] = _t({
    u: io,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const f = S && S.M(t, e, D, M, n).W, d = H(Zt), m = !I && H(zs), g = m && ce($);
    F(Zt), I && F(rn, !0);
    const w = m && f && f()[0], O = on(h), G = on($), U = vn($);
    return F(Zt, d), I && F(rn), w && w(), zt($, g), {
      w: G.w + O.w + U.w,
      h: G.h + O.h + U.h
    };
  }), x = E ? T : Ht(A, T), _ = fo(o, {
    v: () => s,
    p: () => c,
    S(f, d) {
      const [m] = f, [g] = d;
      return [Ht(Rt(m), Rt(g)).reduce((w, O) => (w[O] = m[O] || g[O], w), {})];
    }
  }), L = (f) => {
    if (I) {
      const d = Vt(P);
      j(f, {
        Ct: u !== d
      }), j(D, {
        N: d
      }), u = d;
    }
  }, R = (f) => {
    W(f || b, (d) => {
      if (Pe(b, d)) {
        const m = Re(C, d);
        ke(m) ? St($, d, m) : Ct($, d);
      }
    });
  }, K = (f, d) => {
    const [m, g] = f, w = {
      xt: g
    };
    return j(D, {
      $t: m
    }), !d && o(w), w;
  }, B = ({ ht: f, vt: d, _t: m }) => {
    const w = !(f && !m && !d) && i ? _ : o, [O, G] = d || [], U = {
      ht: f || m,
      _t: m,
      Ct: G
    };
    L(U), d && j(D, {
      N: O
    }), w(U);
  }, z = (f, d) => {
    const [, m] = y(), g = {
      Ht: m
    };
    return L(g), m && !d && (f ? o : _)(g), g;
  }, st = (f, d, m) => {
    const g = {
      zt: d
    };
    return L(g), d && !m ? _(g) : I || R(f), g;
  }, { Z: k } = M, [Y, J] = h ? uc(C, K) : [], nt = !I && Ro(C, B, {
    _t: !0,
    dt: !0
  }), [X, ct] = Gn(C, !1, st, {
    rt: A,
    ct: Ht(A, b)
  }), rt = I && _e && new _e((f) => {
    const d = f[f.length - 1].contentRect;
    B({
      ht: !0,
      _t: _o(d, l)
    }), l = d;
  });
  return [() => {
    R(), rt && rt.observe(C);
    const f = nt && nt(), d = Y && Y(), m = X(), g = k((w) => {
      const [, O] = y();
      _({
        It: w,
        Ht: O
      });
    });
    return () => {
      rt && rt.disconnect(), f && f(), d && d(), a && a(), m(), g();
    };
  }, ({ Et: f, At: d, Tt: m }) => {
    const g = {}, [w] = f("update.ignoreMutation"), [O, G] = f("update.attributes"), [U, tt] = f("update.elementEvents"), [ot, dt] = f("update.debounce"), N = tt || G, q = d || m, gt = (lt) => At(w) && w(lt);
    if (N) {
      r && r(), a && a();
      const [lt, Z] = Gn(h || $, !0, z, {
        ct: Ht(x, O || []),
        lt: U,
        it: p,
        ft: (at, ut) => {
          const { target: Ot, attributeName: me } = at;
          return (!ut && me && !I ? Hs(Ot, p, v) : !1) || !!Xt(Ot, `.${mt}`) || !!gt(at);
        }
      });
      a = lt(), r = Z;
    }
    if (dt)
      if (_.m(), $t(ot)) {
        const lt = ot[0], Z = ot[1];
        s = Tt(lt) && lt, c = Tt(Z) && Z;
      } else
        Tt(ot) ? (s = ot, c = !1) : (s = !1, c = !1);
    if (q) {
      const lt = ct(), Z = J && J(), at = r && r();
      lt && j(g, st(lt[0], lt[1], q)), Z && j(g, K(Z[0], q)), at && j(g, z(at[0], q));
    }
    return L(g), g;
  }, D];
}, fc = (t, e, n, o) => {
  const { G: s, K: c } = wt(), { scrollbars: r } = s(), { slot: a } = r, { gt: l, bt: u, D: i, Dt: p, kt: v, Rt: b, V: T } = e, { scrollbars: A } = p ? {} : t, { slot: P } = A || {}, C = /* @__PURE__ */ new Map(), $ = (f) => Ze && new Ze({
    source: v,
    axis: f
  }), h = $("x"), E = $("y"), I = Vo([l, u, i], () => T && b ? l : u, a, P), H = (f, d) => {
    if (d) {
      const U = f ? te : ee, { Mt: tt, Vt: ot } = d, dt = Jt(ot)[U], N = Jt(tt)[U];
      return tn(0, 1, dt / N || 0);
    }
    const m = f ? "x" : "y", { Lt: g, Pt: w } = n, O = w[m], G = g[m];
    return tn(0, 1, O / (O + G) || 0);
  }, F = (f, d, m, g) => {
    const w = H(m, f);
    return 1 / w * (1 - w) * (g ? 1 - d : d) || 0;
  }, D = (f, d) => j(f, d ? {
    clear: ["left"]
  } : {}), M = (f) => {
    C.forEach((d, m) => {
      (f ? Pe(to(f), m) : !0) && (W(d || [], (w) => {
        w && w.cancel();
      }), C.delete(m));
    });
  }, S = (f, d, m, g) => {
    const w = C.get(f) || [], O = w.find((G) => G && G.timeline === d);
    O ? O.effect = new KeyframeEffect(f, m, {
      composite: g
    }) : C.set(f, Ht(w, [f.animate(m, {
      timeline: d,
      composite: g
    })]));
  }, y = (f, d, m) => {
    const g = m ? Oe : mn;
    W(f, (w) => {
      g(w.Ut, d);
    });
  }, x = (f, d) => {
    W(f, (m) => {
      const [g, w] = d(m);
      se(g, w);
    });
  }, _ = (f, d) => {
    x(f, (m) => {
      const { Vt: g } = m;
      return [g, {
        [d ? te : ee]: An(H(d))
      }];
    });
  }, L = (f, d) => {
    const { Lt: m } = n, g = d ? m.x : m.y, w = (O, G, U) => Ue(An(F(O, Pn(G, g, U), d, U)), d);
    if (h && E)
      W(f, (O) => {
        const { Ut: G, Vt: U } = O, tt = d && Vt(G) && c;
        S(U, d ? h : E, D({
          transform: Ln(g, tt).map((ot) => w(O, ot, tt))
        }, tt));
      });
    else {
      const O = ce(v);
      x(f, (G) => {
        const { Vt: U, Ut: tt } = G;
        return [U, {
          transform: w(G, d ? O.x : O.y, d && Vt(tt) && c)
        }];
      });
    }
  }, R = (f) => T && !b && oe(f) === i, K = [], B = [], z = [], st = (f, d, m) => {
    const g = Qn(m), w = g ? m : !0, O = g ? !m : !0;
    w && y(B, f, d), O && y(z, f, d);
  }, k = () => {
    _(B, !0), _(z);
  }, Y = () => {
    L(B, !0), L(z);
  }, J = () => {
    if (T) {
      const { Lt: f } = n, d = 0.5;
      if (h && E)
        W(Ht(z, B), ({ Ut: m }) => {
          if (R(m)) {
            const g = (w, O, G) => {
              const U = G && Vt(m) && c;
              S(m, w, D({
                transform: Ln(O - d, U).map((tt) => Ue(nn(tt), G))
              }, U), "add");
            };
            g(h, f.x, !0), g(E, f.y);
          } else
            M(m);
        });
      else {
        const m = ce(v), g = (w) => {
          const { Ut: O } = w, G = R(O) && O, U = (tt, ot, dt) => {
            const N = Pn(tt, ot, dt), q = ot * N;
            return nn(dt ? -q : q);
          };
          return [G, {
            transform: G ? Ue({
              x: U(m.x, f.x, Vt(O) && c),
              y: U(m.y, f.y)
            }) : ""
          }];
        };
        x(B, g), x(z, g);
      }
    }
  }, nt = (f) => {
    const m = Yt(`${mt} ${f ? Ws : qs}`), g = Yt(Ao), w = Yt(yn), O = {
      Ut: m,
      Mt: g,
      Vt: w
    };
    return Q(f ? B : z, O), Q(K, [ht(m, g), ht(g, w), V(Dt, m), M, o(O, st, L, f)]), O;
  }, X = V(nt, !0), ct = V(nt, !1), rt = () => (ht(I, B[0].Ut), ht(I, z[0].Ut), V(yt, K));
  return X(), ct(), [{
    Bt: k,
    Nt: Y,
    jt: J,
    Ft: st,
    qt: {
      J: h,
      Wt: B,
      Xt: X,
      Yt: V(x, B)
    },
    Jt: {
      J: E,
      Wt: z,
      Xt: ct,
      Yt: V(x, z)
    }
  }, rt];
}, pc = (t, e, n, o) => {
  const { bt: s, kt: c, Kt: r } = e;
  return (a, l, u, i) => {
    const { Ut: p, Mt: v, Vt: b } = a, [T, A] = Kt(333), [P, C] = Kt(), $ = V(u, [a], i), h = !!c.scrollBy, E = `client${i ? "X" : "Y"}`, I = i ? te : ee, H = i ? "left" : "top", F = i ? "w" : "h", D = i ? "x" : "y", M = (x) => x.propertyName.indexOf(I) > -1, S = () => {
      const x = "pointerup pointerleave pointercancel lostpointercapture", _ = (L, R) => (K) => {
        const { Lt: B } = n, z = ae(v)[F] - ae(b)[F], k = R * K / z * B[D];
        zt(c, {
          [D]: L + k
        });
      };
      return et(v, "pointerdown", (L) => {
        const R = Xt(L.target, `.${yn}`) === b, K = R ? b : v, B = t.scrollbars, { button: z, isPrimary: st, pointerType: k } = L, { pointers: Y } = B;
        if (z === 0 && st && B[R ? "dragScroll" : "clickScroll"] && (Y || []).includes(k)) {
          const nt = !R && L.shiftKey, X = V(Jt, b), ct = V(Jt, v), rt = (q, gt) => (q || X())[H] - (gt || ct())[H], f = Xe(Jt(c)[I]) / ae(c)[F] || 1, d = _(ce(c)[D] || 0, 1 / f), m = L[E], g = X(), w = ct(), O = g[I], G = rt(g, w) + O / 2, U = m - w[H], tt = R ? 0 : U - G, ot = (q) => {
            yt(N), K.releasePointerCapture(q.pointerId);
          }, N = [ue(s, vt, Rs), et(r, x, ot), et(r, "selectstart", (q) => In(q), {
            H: !1
          }), et(v, x, ot), et(v, "pointermove", (q) => {
            const gt = q[E] - m;
            (R || nt) && d(tt + gt);
          })];
          if (K.setPointerCapture(L.pointerId), nt)
            d(tt);
          else if (!R) {
            const q = re(oc);
            q && Q(N, q(d, rt, tt, O, U));
          }
        }
      });
    };
    let y = !0;
    return V(yt, [et(p, "pointerenter", () => {
      l(Fn, !0);
    }), et(p, "pointerleave pointercancel", () => {
      l(Fn, !1);
    }), et(p, "wheel", (x) => {
      const { deltaX: _, deltaY: L, deltaMode: R } = x;
      h && y && R === 0 && oe(p) === s && c.scrollBy({
        left: _,
        top: L,
        behavior: "smooth"
      }), y = !1, l(Un, !0), T(() => {
        y = !0, l(Un);
      }), In(x);
    }, {
      H: !1,
      I: !0
    }), et(b, "pointermove pointerleave", o), et(b, "transitionstart", (x) => {
      if (M(x)) {
        const _ = () => {
          $(), P(_);
        };
        _();
      }
    }), et(b, "transitionend transitioncancel", (x) => {
      M(x) && (C(), $());
    }), et(p, "mousedown", V(et, r, "click", hn, {
      A: !0,
      I: !0
    }), {
      I: !0
    }), S(), A, C]);
  };
}, mc = (t, e, n, o, s, c) => {
  let r, a, l, u, i = xt, p = 0;
  const v = () => !l && !a, b = (k) => k.pointerType === "mouse", [T, A] = Kt(), [P, C] = Kt(100), [$, h] = Kt(100), [E, I] = Kt(() => p), [H, F] = fc(t, s, o, pc(e, s, o, (k) => b(k) && v() && K())), { bt: D, Zt: M, Rt: S } = s, { Ft: y, Bt: x, Nt: _, jt: L } = H, R = (k, Y) => {
    if (I(), k)
      y(Bn);
    else {
      const J = V(y, Bn, !0);
      p > 0 && !Y ? E(J) : J();
    }
  }, K = () => {
    R(!0), P(() => {
      R(!1);
    });
  }, B = (k) => {
    y(an, k, !0), y(an, k, !1);
  }, z = (k) => {
    b(k) && a && R(!0);
  }, st = [I, C, h, A, () => i(), et(D, "pointerover", z, {
    A: !0
  }), et(D, "pointerenter", z), et(D, "pointerleave", (k) => {
    b(k) && a && R(!1);
  }), et(D, "pointermove", (k) => {
    b(k) && r && K();
  }), et(M, "scroll", (k) => {
    T(() => {
      _(), v() && K();
    }), c(k), L();
  })];
  return [() => V(yt, Q(st, F())), ({ Et: k, Tt: Y, Gt: J, Qt: nt }) => {
    const { tn: X, nn: ct, sn: rt } = nt || {}, { Ct: f, _t: d } = J || {}, { N: m } = n, { T: g } = wt(), { k: w, en: O } = o, [G, U] = k("showNativeOverlaidScrollbars"), [tt, ot] = k("scrollbars.theme"), [dt, N] = k("scrollbars.visibility"), [q, gt] = k("scrollbars.autoHide"), [lt, Z] = k("scrollbars.autoHideSuspend"), [at] = k("scrollbars.autoHideDelay"), [ut, Ot] = k("scrollbars.dragScroll"), [me, ge] = k("scrollbars.clickScroll"), [ve, Et] = k("overflow"), Ft = d && !Y, Nt = O.x || O.y, Fe = X || ct || f || Y, Lt = rt || N || Et, Ne = G && g.x && g.y, jt = (Wt, qt, le) => {
      const he = Wt.includes("scroll") && (dt === "visible" || dt === "auto" && qt === "scroll");
      return y(Ks, he, le), he;
    };
    if (p = at, Ft && (lt && Nt ? (B(!1), i(), $(() => {
      i = et(M, "scroll", V(B, !0), {
        A: !0
      });
    })) : B(!0)), U && y(Gs, Ne), ot && (y(u), y(tt, !0), u = tt), Z && !lt && B(!0), gt && (r = q === "move", a = q === "leave", l = q === "never", R(l, !0)), Ot && y(Js, ut), ge && y(Ys, me), Lt) {
      const Wt = jt(ve.x, w.x, !0), qt = jt(ve.y, w.y, !1);
      y(Xs, !(Wt && qt));
    }
    Fe && (x(), _(), L(), y(Nn, !O.x, !0), y(Nn, !O.y, !1), y(js, m && !S));
  }, {}, H];
}, gc = (t) => {
  const e = wt(), { G: n, L: o } = e, { elements: s } = n(), { host: c, padding: r, viewport: a, content: l } = s, u = $e(t), i = u ? {} : t, { elements: p } = i, { host: v, padding: b, viewport: T, content: A } = p || {}, P = u ? t : i.target, C = bo(P), $ = Ee(P, "textarea"), h = P.ownerDocument, E = h.documentElement, I = h.defaultView, H = () => h.activeElement, F = (N) => {
    N && N.focus && N.focus();
  }, D = V(cc, [P]), M = V(Vo, [P]), S = V(Yt, ""), y = V(D, S, a), x = V(M, S, l), _ = y(T), L = _ === P, R = L && C, K = !L && x(A), B = !L && _ === K, z = R ? E : _, st = $ ? D(S, c, v) : P, k = R ? z : st, Y = !L && M(S, r, b), J = !B && K, nt = [J, z, Y, k].map((N) => $e(N) && !oe(N) && N), X = (N) => N && Pe(nt, N), ct = X(z) ? P : z, rt = {
    gt: P,
    bt: k,
    D: z,
    cn: Y,
    wt: J,
    kt: R ? E : z,
    Zt: R ? h : z,
    rn: C ? E : ct,
    ln: I,
    Kt: h,
    St: $,
    Rt: C,
    Dt: u,
    V: L,
    yt: (N) => Ts(z, L ? vt : Pt, N),
    Ot: (N, q) => Se(z, L ? vt : Pt, N, q)
  }, { gt: f, bt: d, cn: m, D: g, wt: w } = rt, O = [() => {
    Ct(d, [vt, je]), Ct(f, je), C && Ct(E, [je, vt]);
  }], G = $ && X(d);
  let U = $ ? f : en([w, g, m, d, f].find((N) => N && !X(N)));
  const tt = R ? f : w || g, ot = V(yt, O);
  return [rt, () => {
    const N = H(), q = (Z) => {
      ht(oe(Z), en(Z)), Dt(Z);
    }, gt = (Z) => Z ? et(Z, "focusin focusout focus blur", (at) => {
      hn(at), at.stopImmediatePropagation();
    }, {
      I: !0,
      H: !1
    }) : xt, lt = gt(N);
    if (St(d, vt, L ? "viewport" : "host"), St(m, ln, ""), St(w, zn, ""), L || (St(g, Pt, ""), C && ue(E, vt, Ds)), G && (Cn(f, d), Q(O, () => {
      Cn(d, f), Dt(d);
    })), ht(tt, U), ht(d, m), ht(m || d, !L && g), ht(g, w), Q(O, [lt, () => {
      const Z = H(), at = gt(Z);
      Ct(m, ln), Ct(w, zn), Ct(g, [Oo, Eo, Pt]), X(w) && q(w), X(g) && q(g), X(m) && q(m), F(Z), at();
    }]), o && !L && (ue(g, Pt, To), Q(O, V(Ct, g, Pt))), !L && I.top === I && N === P) {
      const Z = "tabindex", at = Re(g, Z);
      St(g, Z, "-1"), F(g);
      const ut = () => at ? St(g, Z, at) : Ct(g, Z), Ot = et(h, "pointerdown keydown", () => {
        ut(), Ot();
      });
      Q(O, [ut, Ot]);
    } else
      F(N);
    return lt(), U = 0, ot;
  }, ot];
}, vc = ({ wt: t }) => ({ Gt: e, an: n, Tt: o }) => {
  const { xt: s } = e || {}, { $t: c } = n;
  t && (s || o) && se(t, {
    [ee]: c && "100%"
  });
}, hc = ({ bt: t, cn: e, D: n, V: o }, s) => {
  const [c, r] = _t({
    u: Cs,
    o: Hn()
  }, V(Hn, t, "padding", ""));
  return ({ Et: a, Gt: l, an: u, Tt: i }) => {
    let [p, v] = r(i);
    const { L: b } = wt(), { ht: T, Ht: A, Ct: P } = l || {}, { N: C } = u, [$, h] = a("paddingAbsolute");
    (T || v || (i || A)) && ([p, v] = c(i));
    const I = !o && (h || P || v);
    if (I) {
      const H = !$ || !e && !b, F = p.r + p.l, D = p.t + p.b, M = {
        [ro]: H && !C ? -F : 0,
        [lo]: H ? -D : 0,
        [co]: H && C ? -F : 0,
        top: H ? -p.t : 0,
        right: H ? C ? -p.r : "auto" : 0,
        left: H ? C ? "auto" : -p.l : 0,
        [te]: H && `calc(100% + ${F}px)`
      }, S = {
        [eo]: H ? p.t : 0,
        [no]: H ? p.r : 0,
        [so]: H ? p.b : 0,
        [oo]: H ? p.l : 0
      };
      se(e || n, M), se(n, S), j(s, {
        cn: p,
        un: !H,
        j: e ? S : j({}, M, S)
      });
    }
    return {
      fn: I
    };
  };
}, bc = (t, e) => {
  const n = wt(), { bt: o, cn: s, D: c, V: r, Ot: a, Rt: l, ln: u } = t, { L: i } = n, p = l && r, v = V(we, 0), b = {
    u: io,
    o: {
      w: 0,
      h: 0
    }
  }, T = {
    u: uo,
    o: {
      x: ne,
      y: ne
    }
  }, A = (S, y) => {
    const x = bt.devicePixelRatio % 1 !== 0 ? 1 : 0, _ = {
      w: v(S.w - y.w),
      h: v(S.h - y.h)
    };
    return {
      w: _.w > x ? _.w : 0,
      h: _.h > x ? _.h : 0
    };
  }, [P, C] = _t(b, V(vn, c)), [$, h] = _t(b, V(on, c)), [E, I] = _t(b), [H, F] = _t(b), [D] = _t(T), M = re(wn);
  return ({ Et: S, Gt: y, an: x, Tt: _ }, { fn: L }) => {
    const { ht: R, Ht: K, Ct: B, It: z } = y || {}, st = M && M.M(t, e, x, n, S), { q: k, W: Y, X: J } = st || {}, [nt, X] = ec(S, n), [ct, rt] = S("overflow"), f = R || L || K || B || z || X, d = Te(ct.x), m = Te(ct.y), g = d || m;
    let w = C(_), O = h(_), G = I(_), U = F(_), tt;
    if (X && i && a(To, !nt), f) {
      g && a(Zt, !1);
      const [Et, Ft] = Y ? Y(tt) : [], [Nt, Fe] = w = P(_), [Lt, Ne] = O = $(_), jt = So(c), Wt = Lt, qt = jt;
      Et && Et(), (Ne || Fe || X) && Ft && !nt && k && k(Ft, Lt, Nt);
      const le = Ls(u), he = {
        w: v(we(Lt.w, Wt.w) + Nt.w),
        h: v(we(Lt.h, Wt.h) + Nt.h)
      }, _n = {
        w: v((p ? le.w : qt.w + v(jt.w - Lt.w)) + Nt.w),
        h: v((p ? le.h : qt.h + v(jt.h - Lt.h)) + Nt.h)
      };
      U = H(_n), G = E(A(he, _n), _);
    }
    const [ot, dt] = U, [N, q] = G, [gt, lt] = O, [Z, at] = w, ut = {
      x: N.w > 0,
      y: N.h > 0
    }, Ot = d && m && (ut.x || ut.y) || d && ut.x && !ut.y || m && ut.y && !ut.x;
    if (L || B || z || at || lt || dt || q || rt || X || f) {
      const Et = {}, Ft = nc(t, ut, ct, Et);
      J && J(Ft, x, !!k && k(Ft, gt, Z), Et), r ? (St(o, Oo, Et[Ve]), St(o, Eo, Et[Me])) : se(c, Et);
    }
    Se(o, vt, Co, Ot), Se(s, ln, Fs, Ot), r || Se(c, Pt, Zt, g);
    const [ge, ve] = D(Lo(t).k);
    return j(e, {
      k: ge,
      Pt: {
        x: ot.w,
        y: ot.h
      },
      Lt: {
        x: N.w,
        y: N.h
      },
      en: ut
    }), {
      sn: ve,
      tn: dt,
      nn: q
    };
  };
}, yc = (t) => {
  const [e, n, o] = gc(t), s = {
    cn: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    un: !1,
    j: {
      [ro]: 0,
      [lo]: 0,
      [co]: 0,
      [eo]: 0,
      [no]: 0,
      [so]: 0,
      [oo]: 0
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
      x: ne,
      y: ne
    },
    en: {
      x: !1,
      y: !1
    }
  }, { gt: c, D: r, V: a } = e, { L: l, T: u } = wt(), i = !l && (u.x || u.y), p = [vc(e), hc(e, s), bc(e, s)];
  return [n, (v) => {
    const b = {}, A = i && ce(r), P = a ? ue(r, vt, rn) : xt;
    return W(p, (C) => {
      j(b, C(v, b) || {});
    }), P(), zt(r, A), !a && zt(c, 0), b;
  }, s, e, o];
}, wc = (t, e, n, o) => {
  const s = Dn(e, {}), [c, r, a, l, u] = yc(t), [i, p, v] = dc(l, a, s, ($) => {
    C({}, $);
  }), [b, T, , A] = mc(t, e, v, a, l, o), P = ($) => Rt($).some((h) => !!$[h]), C = ($, h) => {
    const { dn: E, Tt: I, At: H, _n: F } = $, D = E || {}, M = !!I, S = {
      Et: Dn(e, D, M),
      dn: D,
      Tt: M
    };
    if (F)
      return T(S), !1;
    const y = h || p(j({}, S, {
      At: H
    })), x = r(j({}, S, {
      an: v,
      Gt: y
    }));
    T(j({}, S, {
      Gt: y,
      Qt: x
    }));
    const _ = P(y), L = P(x), R = _ || L || !pn(D) || M;
    return R && n($, {
      Gt: y,
      Qt: x
    }), R;
  };
  return [() => {
    const { rn: $, D: h } = l, E = ce($), I = [i(), c(), b()];
    return zt(h, E), V(yt, I);
  }, C, () => ({
    vn: v,
    hn: a
  }), {
    pn: l,
    gn: A
  }, u];
}, kt = (t, e, n) => {
  const { nt: o } = wt(), s = $e(t), c = s ? t : t.target, r = Mo(c);
  if (e && !r) {
    let a = !1;
    const l = [], u = {}, i = (S) => {
      const y = mo(S, !0), x = re(Qs);
      return x ? x(y, !0) : y;
    }, p = j({}, o(), i(e)), [v, b, T] = cn(), [A, P, C] = cn(n), $ = (S, y) => {
      C(S, y), T(S, y);
    }, [h, E, I, H, F] = wc(t, p, ({ dn: S, Tt: y }, { Gt: x, Qt: _ }) => {
      const { ht: L, Ct: R, xt: K, Ht: B, zt: z, _t: st } = x, { tn: k, nn: Y, sn: J } = _;
      $("updated", [M, {
        updateHints: {
          sizeChanged: !!L,
          directionChanged: !!R,
          heightIntrinsicChanged: !!K,
          overflowEdgeChanged: !!k,
          overflowAmountChanged: !!Y,
          overflowStyleChanged: !!J,
          contentMutation: !!B,
          hostMutation: !!z,
          appear: !!st
        },
        changedOptions: S || {},
        force: !!y
      }]);
    }, (S) => $("scroll", [M, S])), D = (S) => {
      ac(c), yt(l), a = !0, $("destroyed", [M, S]), b(), P();
    }, M = {
      options(S, y) {
        if (S) {
          const x = y ? o() : {}, _ = xo(p, j(x, i(S)));
          pn(_) || (j(p, _), E({
            dn: _
          }));
        }
        return j({}, p);
      },
      on: A,
      off: (S, y) => {
        S && y && P(S, y);
      },
      state() {
        const { vn: S, hn: y } = I(), { N: x } = S, { Pt: _, Lt: L, k: R, en: K, cn: B, un: z } = y;
        return j({}, {
          overflowEdge: _,
          overflowAmount: L,
          overflowStyle: R,
          hasOverflow: K,
          padding: B,
          paddingAbsolute: z,
          directionRTL: x,
          destroyed: a
        });
      },
      elements() {
        const { gt: S, bt: y, cn: x, D: _, wt: L, kt: R, Zt: K } = H.pn, { qt: B, Jt: z } = H.gn, st = (Y) => {
          const { Vt: J, Mt: nt, Ut: X } = Y;
          return {
            scrollbar: X,
            track: nt,
            handle: J
          };
        }, k = (Y) => {
          const { Wt: J, Xt: nt } = Y, X = st(J[0]);
          return j({}, X, {
            clone: () => {
              const ct = st(nt());
              return E({
                _n: !0
              }), ct;
            }
          });
        };
        return j({}, {
          target: S,
          host: y,
          padding: x || _,
          viewport: _,
          content: L || _,
          scrollOffsetElement: R,
          scrollEventElement: K,
          scrollbarHorizontal: k(B),
          scrollbarVertical: k(z)
        });
      },
      update: (S) => E({
        Tt: S,
        At: !0
      }),
      destroy: V(D, !1),
      plugin: (S) => u[Rt(S)[0]]
    };
    return Q(l, [F]), lc(c, M), Io(Ho, kt, [M, v, u]), rc(H.pn.Rt, !s && t.cancel) ? (D(!0), M) : (Q(l, h()), $("initialized", [M]), M.update(!0), M);
  }
  return r;
};
kt.plugin = (t) => {
  const e = $t(t), n = e ? t : [t], o = n.map((s) => Io(s, kt)[0]);
  return Zs(n), e ? o : o[0];
};
kt.valid = (t) => {
  const e = t && t.elements, n = At(e) && e();
  return xe(n) && !!Mo(n.target);
};
kt.env = () => {
  const { P: t, T: e, L: n, K: o, J: s, st: c, et: r, G: a, tt: l, nt: u, ot: i } = wt();
  return j({}, {
    scrollbarsSize: t,
    scrollbarsOverlaid: e,
    scrollbarsHiding: n,
    rtlScrollBehavior: o,
    scrollTimeline: s,
    staticDefaultInitialization: c,
    staticDefaultOptions: r,
    getDefaultInitialization: a,
    setDefaultInitialization: l,
    getDefaultOptions: u,
    setDefaultOptions: i
  });
};
const Sc = () => {
  if (typeof window > "u") {
    const u = () => {
    };
    return [u, u];
  }
  let t, e;
  const n = window, o = typeof n.requestIdleCallback == "function", s = n.requestAnimationFrame, c = n.cancelAnimationFrame, r = o ? n.requestIdleCallback : s, a = o ? n.cancelIdleCallback : c, l = () => {
    a(t), c(e);
  };
  return [
    (u, i) => {
      l(), t = r(
        o ? () => {
          l(), e = s(u);
        } : u,
        typeof i == "object" ? i : { timeout: 2233 }
      );
    },
    l
  ];
}, _c = (t) => {
  let e = null, n, o, s;
  const c = Wo(t || {}), [r, a] = Sc();
  return ye(
    () => {
      var l;
      return it((l = c.value) == null ? void 0 : l.defer);
    },
    (l) => {
      s = l;
    },
    { deep: !0, immediate: !0 }
  ), ye(
    () => {
      var l;
      return it((l = c.value) == null ? void 0 : l.options);
    },
    (l) => {
      n = l, kt.valid(e) && e.options(n || {}, !0);
    },
    { deep: !0, immediate: !0 }
  ), ye(
    () => {
      var l;
      return it((l = c.value) == null ? void 0 : l.events);
    },
    (l) => {
      o = l, kt.valid(e) && e.on(
        /* c8 ignore next */
        o || {},
        !0
      );
    },
    { deep: !0, immediate: !0 }
  ), qo(() => {
    a(), e == null || e.destroy();
  }), [
    (l) => {
      if (kt.valid(e))
        return e;
      const u = () => e = kt(l, n || {}, o || {});
      s ? r(u, s) : u();
    },
    () => e
  ];
}, xc = /* @__PURE__ */ It({
  name: "BodyOverlayScrollbars",
  __name: "BodyOverlayScrollbars",
  setup(t) {
    const e = jn(null), [n] = _c({
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
    return Wn(() => n(document.body)), (o, s) => Qt(o.$slots, "default");
  }
}), Cc = /* @__PURE__ */ It({
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
    e.useTheme && ys();
    const { setMenu: n } = Kn();
    return Ss(e), Wn(() => {
      e.menu && n(e.menu);
    }), ye(
      () => e.menu,
      () => {
        n(e.menu);
      }
    ), (o, s) => (Mt(), de(xc, null, {
      default: ft(() => [
        Qt(o.$slots, "layout", {}, () => [
          pt(as)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  Cc as default
};
//# sourceMappingURL=FastStars.mjs.map
