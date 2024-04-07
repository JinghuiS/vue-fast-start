import { shallowRef as xo, watch as De, unref as Ie, onUnmounted as Oo, defineComponent as $o, ref as Co, onMounted as Eo, renderSlot as Ao } from "vue";
/*!
 * OverlayScrollbars
 * Version: 2.7.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const yt = (t, e) => {
  const { o: n, u: o, _: c } = t;
  let s = n, r;
  const i = (a, p) => {
    const b = s, h = a, T = p || (o ? !o(b, h) : b !== h);
    return (T || c) && (s = h, r = b), [s, T, r];
  };
  return [e ? (a) => i(e(s, r), a) : i, (a) => [s, !!a, r]];
}, _n = typeof window < "u" && typeof document < "u", mt = _n ? window : {}, fe = Math.max, To = Math.min, Fe = Math.round, Dn = mt.cancelAnimationFrame, In = mt.requestAnimationFrame, Be = mt.setTimeout, Ue = mt.clearTimeout, Se = (t) => typeof mt[t] < "u" ? mt[t] : void 0, Ho = Se("MutationObserver"), pn = Se("IntersectionObserver"), ve = Se("ResizeObserver"), je = Se("ScrollTimeline"), Rn = _n && Node.ELEMENT_NODE, { toString: Lo, hasOwnProperty: Re } = Object.prototype, ko = /^\[object (.+)\]$/, ce = (t) => t === void 0, xe = (t) => t === null, Po = (t) => ce(t) || xe(t) ? `${t}` : Lo.call(t).replace(ko, "$1").toLowerCase(), Ct = (t) => typeof t == "number", Oe = (t) => typeof t == "string", Mn = (t) => typeof t == "boolean", Et = (t) => typeof t == "function", St = (t) => Array.isArray(t), oe = (t) => typeof t == "object" && !St(t) && !xe(t), $e = (t) => {
  const e = !!t && t.length, n = Ct(e) && e > -1 && e % 1 == 0;
  return St(t) || !Et(t) && n ? e > 0 && oe(t) ? e - 1 in t : !0 : !1;
}, me = (t) => {
  if (!t || !oe(t) || Po(t) !== "object")
    return !1;
  let e;
  const n = "constructor", o = t[n], c = o && o.prototype, s = Re.call(t, n), r = c && Re.call(c, "isPrototypeOf");
  if (o && !s && !r)
    return !1;
  for (e in t)
    ;
  return ce(e) || Re.call(t, e);
}, be = (t) => {
  const e = HTMLElement;
  return t ? e ? t instanceof e : t.nodeType === Rn : !1;
}, Ce = (t) => {
  const e = Element;
  return t ? e ? t instanceof e : t.nodeType === Rn : !1;
};
function G(t, e) {
  if ($e(t))
    for (let n = 0; n < t.length && e(t[n], n, t) !== !1; n++)
      ;
  else
    t && G(Object.keys(t), (n) => e(t[n], n, t));
  return t;
}
const Ee = (t, e) => t.indexOf(e) >= 0, At = (t, e) => t.concat(e), Q = (t, e, n) => (!n && !Oe(e) && $e(e) ? Array.prototype.push.apply(t, e) : t.push(e), t), Vt = (t) => Array.from(t || []), zn = (t) => St(t) ? t : [t], qe = (t) => !!t && !t.length, vn = (t) => Vt(new Set(t)), bt = (t, e, n) => {
  G(t, (c) => c && c.apply(void 0, e || [])), !n && (t.length = 0);
}, Vn = "paddingTop", Nn = "paddingRight", Fn = "paddingLeft", Bn = "paddingBottom", Un = "marginLeft", jn = "marginRight", qn = "marginBottom", Ae = "overflowX", Te = "overflowY", Xt = "width", Kt = "height", Yt = "hidden", Gn = "visible", en = (t, e, n, o) => {
  if (t && e) {
    let c = !0;
    return G(n, (s) => {
      const r = o ? o(t[s]) : t[s], i = o ? o(e[s]) : e[s];
      r !== i && (c = !1);
    }), c;
  }
  return !1;
}, Wn = (t, e) => en(t, e, ["w", "h"]), Xn = (t, e) => en(t, e, ["x", "y"]), _o = (t, e) => en(t, e, ["t", "r", "b", "l"]), wt = () => {
}, I = (t, ...e) => t.bind(0, ...e), Ut = (t) => {
  let e;
  const n = t ? Be : In, o = t ? Ue : Dn;
  return [(c) => {
    o(e), e = n(c, Et(t) ? t() : t);
  }, () => o(e)];
}, Kn = (t, e) => {
  let n, o, c, s = wt;
  const { v: r, p: i, S: l } = e || {}, u = function(T) {
    s(), Ue(n), n = o = void 0, s = wt, t.apply(this, T);
  }, a = (h) => l && o ? l(o, h) : h, p = () => {
    s !== wt && u(a(c) || c);
  }, b = function() {
    const T = Vt(arguments), H = Et(r) ? r() : r;
    if (Ct(H) && H >= 0) {
      const A = Et(i) ? i() : i, $ = Ct(A) && A >= 0, g = H > 0 ? Be : In, E = H > 0 ? Ue : Dn, L = a(T) || T, N = u.bind(0, L);
      s();
      const z = g(N, H);
      s = () => E(z), $ && !n && (n = Be(p, A)), o = c = L;
    } else
      u(T);
  };
  return b.m = p, b;
}, Yn = (t, e) => Object.prototype.hasOwnProperty.call(t, e), Pt = (t) => t ? Object.keys(t) : [], q = (t, e, n, o, c, s, r) => {
  const i = [e, n, o, c, s, r];
  return (typeof t != "object" || xe(t)) && !Et(t) && (t = {}), G(i, (l) => {
    G(l, (u, a) => {
      const p = l[a];
      if (t === p)
        return !0;
      const b = St(p);
      if (p && me(p)) {
        const h = t[a];
        let T = h;
        b && !St(h) ? T = [] : !b && !me(h) && (T = {}), t[a] = q(T, p);
      } else
        t[a] = b ? p.slice() : p;
    });
  }), t;
}, Jn = (t, e) => G(q({}, t), (n, o, c) => {
  n === void 0 ? delete c[o] : e && n && me(n) && (c[o] = Jn(n, e));
}), nn = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, Ge = (t, e, n) => fe(t, To(e, n)), Mt = (t) => Vt(new Set((St(t) ? t : (t || "").split(" ")).filter((e) => e))), He = (t, e) => t && t.getAttribute(e), ht = (t, e, n) => {
  G(Mt(e), (o) => {
    t && t.setAttribute(o, n || "");
  });
}, $t = (t, e) => {
  G(Mt(e), (n) => t && t.removeAttribute(n));
}, Le = (t, e) => {
  const n = Mt(He(t, e)), o = I(ht, t, e), c = (s, r) => {
    const i = new Set(n);
    return G(Mt(s), (l) => i[r](l)), Vt(i).join(" ");
  };
  return {
    O: (s) => o(c(s, "delete")),
    $: (s) => o(c(s, "add")),
    C: (s) => {
      const r = Mt(s);
      return r.reduce((i, l) => i && n.includes(l), r.length > 0);
    }
  };
}, Zn = (t, e, n) => {
  Le(t, e).O(n);
}, se = (t, e, n) => (Le(t, e).$(n), I(Zn, t, e, n)), pe = (t, e, n, o) => {
  (o ? se : Zn)(t, e, n);
}, Do = (t, e, n) => Le(t, e).C(n), Qn = (t) => Le(t, "class"), on = (t, e) => {
  Qn(t).O(e);
}, ge = (t, e) => (Qn(t).$(e), I(on, t, e)), to = (t, e) => {
  const n = [], o = e ? Ce(e) && e : document;
  return o ? Q(n, o.querySelectorAll(t)) : n;
}, Io = (t, e) => {
  const n = e ? Ce(e) && e : document;
  return n ? n.querySelector(t) : null;
}, he = (t, e) => Ce(t) ? t.matches(e) : !1, eo = (t) => he(t, "body"), We = (t) => t ? Vt(t.childNodes) : [], Jt = (t) => t && t.parentElement, jt = (t, e) => Ce(t) && t.closest(e), Ro = (t, e, n) => {
  const o = jt(t, e), c = t && Io(n, o), s = jt(c, e) === o;
  return o && c ? o === t || c === t || s && jt(jt(t, n), e) !== o : !1;
}, _t = (t) => {
  if ($e(t))
    G(Vt(t), (e) => _t(e));
  else if (t) {
    const e = Jt(t);
    e && e.removeChild(t);
  }
}, no = (t, e, n) => {
  if (n && t) {
    let o = e, c;
    return $e(n) ? (c = document.createDocumentFragment(), G(n, (s) => {
      s === o && (o = s.previousSibling), c.appendChild(s);
    })) : c = n, e && (o ? o !== e && (o = o.nextSibling) : o = t.firstChild), t.insertBefore(c, o || null), () => _t(n);
  }
  return wt;
}, vt = (t, e) => no(t, null, e), mn = (t, e) => no(Jt(t), t && t.nextSibling, e), qt = (t) => {
  const e = document.createElement("div");
  return ht(e, "class", t), e;
}, oo = (t) => {
  const e = qt();
  return e.innerHTML = t.trim(), G(We(e), (n) => _t(n));
}, Mo = /^--/, bn = (t, e) => t.getPropertyValue(e) || t[e] || "", sn = (t) => {
  const e = t || 0;
  return isFinite(e) ? e : 0;
}, de = (t) => sn(parseFloat(t || "")), gn = (t) => `${(sn(t) * 100).toFixed(3)}%`, Xe = (t) => `${sn(t)}px`;
function Zt(t, e) {
  t && G(e, (n, o) => {
    try {
      const c = t.style, s = Ct(n) ? Xe(n) : (n || "") + "";
      Mo.test(o) ? c.setProperty(o, s) : c[o] = s;
    } catch {
    }
  });
}
function zt(t, e, n) {
  const o = Oe(e);
  let c = o ? "" : {};
  if (t) {
    const s = mt.getComputedStyle(t, n) || t.style;
    c = o ? bn(s, e) : e.reduce((r, i) => (r[i] = bn(s, i), r), c);
  }
  return c;
}
const kt = (t) => zt(t, "direction") === "rtl", hn = (t, e, n) => {
  const o = e ? `${e}-` : "", c = n ? `-${n}` : "", s = `${o}top${c}`, r = `${o}right${c}`, i = `${o}bottom${c}`, l = `${o}left${c}`, u = zt(t, [s, r, i, l]);
  return {
    t: de(u[s]),
    r: de(u[r]),
    b: de(u[i]),
    l: de(u[l])
  };
}, Me = (t, e) => `translate${oe(t) ? `(${t.x},${t.y})` : `${e ? "X" : "Y"}(${t})`}`, zo = {
  w: 0,
  h: 0
}, ke = (t, e) => e ? {
  w: e[`${t}Width`],
  h: e[`${t}Height`]
} : zo, Vo = (t) => ke("inner", t || mt), ne = I(ke, "offset"), so = I(ke, "client"), Ke = I(ke, "scroll"), cn = (t) => {
  const e = parseFloat(zt(t, Xt)) || 0, n = parseFloat(zt(t, Kt)) || 0;
  return {
    w: e - Fe(e),
    h: n - Fe(n)
  };
}, Gt = (t) => t.getBoundingClientRect(), Ye = (t) => !!(t && (t[Kt] || t[Xt])), co = (t, e) => {
  const n = Ye(t);
  return !Ye(e) && n;
}, yn = (t, e, n, o) => {
  G(Mt(e), (c) => {
    t.removeEventListener(c, n, o);
  });
}, et = (t, e, n, o) => {
  var c;
  const s = (c = o && o.H) != null ? c : !0, r = o && o.I || !1, i = o && o.A || !1, l = {
    passive: s,
    capture: r
  };
  return I(bt, Mt(e).map((u) => {
    const a = i ? (p) => {
      yn(t, u, a, r), n(p);
    } : n;
    return t.addEventListener(u, a, l), I(yn, t, u, a, r);
  }));
}, rn = (t) => t.stopPropagation(), wn = (t) => t.preventDefault(), No = {
  x: 0,
  y: 0
}, ze = (t) => {
  const e = t && Gt(t);
  return e ? {
    x: e.left + mt.scrollX,
    y: e.top + mt.scrollY
  } : No;
}, ye = (t, e, n) => n ? n.n ? -t + 0 : n.i ? e - t : t : t, Sn = (t, e) => [ye(0, t, e), ye(t, t, e)], xn = (t, e, n) => Ge(0, 1, ye(t, e, n) / e || 0), Dt = (t, e) => {
  const { x: n, y: o } = Ct(e) ? {
    x: e,
    y: e
  } : e || {};
  Ct(n) && (t.scrollLeft = n), Ct(o) && (t.scrollTop = o);
}, Qt = (t) => ({
  x: t.scrollLeft,
  y: t.scrollTop
}), On = (t, e) => {
  G(zn(e), t);
}, Je = (t) => {
  const e = /* @__PURE__ */ new Map(), n = (s, r) => {
    if (s) {
      const i = e.get(s);
      On((l) => {
        i && i[l ? "delete" : "clear"](l);
      }, r);
    } else
      e.forEach((i) => {
        i.clear();
      }), e.clear();
  }, o = (s, r) => {
    if (Oe(s)) {
      const u = e.get(s) || /* @__PURE__ */ new Set();
      return e.set(s, u), On((a) => {
        Et(a) && u.add(a);
      }, r), I(n, s, r);
    }
    Mn(r) && r && n();
    const i = Pt(s), l = [];
    return G(i, (u) => {
      const a = s[u];
      a && Q(l, o(u, a));
    }), I(bt, l);
  }, c = (s, r) => {
    G(Vt(e.get(s)), (i) => {
      r && !qe(r) ? i.apply(0, r) : i();
    });
  };
  return o(t || {}), [o, n, c];
}, $n = (t) => JSON.stringify(t, (e, n) => {
  if (Et(n))
    throw 0;
  return n;
}), Cn = (t, e) => t ? `${e}`.split(".").reduce((n, o) => n && Yn(n, o) ? n[o] : void 0, t) : void 0, Fo = {
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
}, ro = (t, e) => {
  const n = {}, o = At(Pt(e), Pt(t));
  return G(o, (c) => {
    const s = t[c], r = e[c];
    if (oe(s) && oe(r))
      q(n[c] = {}, ro(s, r)), nn(n[c]) && delete n[c];
    else if (Yn(e, c) && r !== s) {
      let i = !0;
      if (St(s) || St(r))
        try {
          $n(s) === $n(r) && (i = !1);
        } catch {
        }
      i && (n[c] = r);
    }
  }), n;
}, En = (t, e, n) => (o) => [Cn(t, o), n || Cn(e, o) !== void 0], re = "data-overlayscrollbars", lo = "os-environment", Bo = `${lo}-scrollbar-hidden`, Ve = `${re}-initialize`, pt = re, io = `${pt}-overflow-x`, ao = `${pt}-overflow-y`, uo = "overflowVisible", Uo = "scrollbarPressed", Ze = "updating", jo = "body", Lt = `${re}-viewport`, qo = "arrange", fo = "scrollbarHidden", Wt = uo, Qe = `${re}-padding`, Go = Wt, An = `${re}-content`, ln = "os-size-observer", Wo = `${ln}-appear`, Xo = `${ln}-listener`, Ko = "os-trinsic-observer", Yo = "os-theme-none", dt = "os-scrollbar", Jo = `${dt}-rtl`, Zo = `${dt}-horizontal`, Qo = `${dt}-vertical`, po = `${dt}-track`, an = `${dt}-handle`, ts = `${dt}-visible`, es = `${dt}-cornerless`, Tn = `${dt}-interaction`, Hn = `${dt}-unusable`, tn = `${dt}-auto-hide`, Ln = `${tn}-hidden`, kn = `${dt}-wheel`, ns = `${po}-interactive`, os = `${an}-interactive`, vo = {}, mo = {}, ss = (t) => {
  G(t, (e) => G(e, (n, o) => {
    vo[o] = e[o];
  }));
}, bo = (t, e, n) => Pt(t).map((o) => {
  const { static: c, instance: s } = t[o], [r, i, l] = n || [], u = n ? s : c;
  if (u) {
    const a = n ? u(r, i, e) : u(e);
    return (l || mo)[o] = a;
  }
}), te = (t) => mo[t], cs = "__osOptionsValidationPlugin", rs = "__osSizeObserverPlugin", ls = (t, e) => {
  const { T: n } = e, [o, c] = t("showNativeOverlaidScrollbars");
  return [o && n.x && n.y, c];
}, we = (t) => t.indexOf(Gn) === 0, go = (t, e) => {
  const { D: n } = t, o = (l) => {
    const u = zt(n, l), p = (e ? e[l] : u) === "scroll";
    return [u, p];
  }, [c, s] = o(Ae), [r, i] = o(Te);
  return {
    k: {
      x: c,
      y: r
    },
    R: {
      x: s,
      y: i
    }
  };
}, is = (t, e, n, o) => {
  const c = e.x || e.y, s = (a, p) => {
    const b = we(a), h = b && c ? "hidden" : "", T = p && b && a.replace(`${Gn}-`, "") || h;
    return [p && !b ? a : "", we(T) ? "hidden" : T];
  }, [r, i] = s(n.x, e.x), [l, u] = s(n.y, e.y);
  return o[Ae] = i && l ? i : r, o[Te] = u && r ? u : l, go(t, o);
}, un = "__osScrollbarsHidingPlugin", as = "__osClickScrollPlugin";
let Ne;
const us = () => {
  const t = (g, E, P, L) => {
    vt(g, E);
    const N = so(E), z = ne(E), R = cn(P);
    return L && _t(E), {
      x: z.h - N.h + R.h,
      y: z.w - N.w + R.w
    };
  }, e = (g) => {
    let E = !1;
    const P = ge(g, Bo);
    try {
      E = zt(g, "scrollbar-width") === "none" || zt(g, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return P(), E;
  }, n = (g, E) => {
    Zt(g, {
      [Ae]: Yt,
      [Te]: Yt,
      direction: "rtl"
    }), Dt(g, {
      x: 0
    });
    const P = ze(g), L = ze(E);
    Dt(g, {
      x: -999
    });
    const N = ze(E);
    return {
      i: P.x === L.x,
      n: L.x !== N.x
    };
  }, { body: o } = document, s = oo(`<div class="${lo}"><div></div></div>`)[0], r = s.firstChild, [i, , l] = Je(), [u, a] = yt({
    o: t(o, s, r),
    u: Xn
  }, I(t, o, s, r, !0)), [p] = a(), b = e(s), h = {
    x: p.x === 0,
    y: p.y === 0
  }, T = {
    elements: {
      host: null,
      padding: !b,
      viewport: (g) => b && eo(g) && g,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, H = q({}, Fo), D = I(q, {}, H), A = I(q, {}, T), $ = {
    P: p,
    T: h,
    L: b,
    J: !!je,
    K: n(s, r),
    Z: I(i, "r"),
    G: A,
    tt: (g) => q(T, g) && A(),
    nt: D,
    ot: (g) => q(H, g) && D(),
    st: q({}, T),
    et: q({}, H)
  };
  return $t(s, "style"), _t(s), mt.addEventListener("resize", () => {
    let g;
    if (!b && (!h.x || !h.y)) {
      const E = te(un);
      g = !!(E ? E.Y() : wt)($, u);
    }
    l("r", [g]);
  }), $;
}, gt = () => (Ne || (Ne = us()), Ne), ho = (t, e) => Et(e) ? e.apply(0, t) : e, ds = (t, e, n, o) => {
  const c = ce(o) ? n : o;
  return ho(t, c) || e.apply(0, t);
}, yo = (t, e, n, o) => {
  const c = ce(o) ? n : o, s = ho(t, c);
  return !!s && (be(s) ? s : e.apply(0, t));
}, fs = (t, e) => {
  const { nativeScrollbarsOverlaid: n, body: o } = e || {}, { T: c, L: s, G: r } = gt(), { nativeScrollbarsOverlaid: i, body: l } = r().cancel, u = n ?? i, a = ce(o) ? l : o, p = (c.x || c.y) && u, b = t && (xe(a) ? !s : a);
  return !!p || !!b;
}, dn = /* @__PURE__ */ new WeakMap(), ps = (t, e) => {
  dn.set(t, e);
}, vs = (t) => {
  dn.delete(t);
}, wo = (t) => dn.get(t), ms = (t, e, n) => {
  let o = !1;
  const c = n ? /* @__PURE__ */ new WeakMap() : !1, s = () => {
    o = !0;
  }, r = (i) => {
    if (c && n) {
      const l = n.map((u) => {
        const [a, p] = u || [];
        return [p && a ? (i || to)(a, t) : [], p];
      });
      G(l, (u) => G(u[0], (a) => {
        const p = u[1], b = c.get(a) || [];
        if (t.contains(a) && p) {
          const T = et(a, p, (H) => {
            o ? (T(), c.delete(a)) : e(H);
          });
          c.set(a, Q(b, T));
        } else
          bt(b), c.delete(a);
      }));
    }
  };
  return r(), [s, r];
}, Pn = (t, e, n, o) => {
  let c = !1;
  const { ct: s, rt: r, lt: i, it: l, ut: u, ft: a } = o || {}, p = Kn(() => c && n(!0), {
    v: 33,
    p: 99
  }), [b, h] = ms(t, p, i), T = s || [], H = r || [], D = At(T, H), A = (g, E) => {
    if (!qe(E)) {
      const P = u || wt, L = a || wt, N = [], z = [];
      let R = !1, S = !1;
      if (G(E, (y) => {
        const { attributeName: O, target: x, type: _, oldValue: M, addedNodes: X, removedNodes: B } = y, V = _ === "attributes", st = _ === "childList", k = t === x, Y = V && O, J = Y && He(x, O || "") || null, nt = Y && M !== J, K = Ee(H, O) && nt;
        if (e && (st || !k)) {
          const ct = V && nt, rt = ct && l && he(x, l), d = (rt ? !P(x, O, M, J) : !V || ct) && !L(y, !!rt, t, o);
          G(X, (v) => Q(N, v)), G(B, (v) => Q(N, v)), S = S || d;
        }
        !e && k && nt && !P(x, O, M, J) && (Q(z, O), R = R || K);
      }), h((y) => vn(N).reduce((O, x) => (Q(O, to(y, x)), he(x, y) ? Q(O, x) : O), [])), e)
        return !g && S && n(!1), [!1];
      if (!qe(z) || R) {
        const y = [vn(z), R];
        return !g && n.apply(0, y), y;
      }
    }
  }, $ = new Ho(I(A, !1));
  return [() => ($.observe(t, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: D,
    subtree: e,
    childList: e,
    characterData: e
  }), c = !0, () => {
    c && (b(), $.disconnect(), c = !1);
  }), () => {
    if (c)
      return p.m(), A(!0, $.takeRecords());
  }];
}, So = (t, e, n) => {
  const { dt: c, _t: s } = n || {}, r = te(rs), { K: i } = gt(), l = I(kt, t), [u] = yt({
    o: !1,
    _: !0
  });
  return () => {
    const a = [], b = oo(`<div class="${ln}"><div class="${Xo}"></div></div>`)[0], h = b.firstChild, T = (H) => {
      const D = H instanceof ResizeObserverEntry, A = !D && St(H);
      let $ = !1, g = !1, E = !0;
      if (D) {
        const [P, , L] = u(H.contentRect), N = Ye(P), z = co(P, L);
        g = !L || z, $ = !g && !N, E = !$;
      } else
        A ? [, E] = H : g = H === !0;
      if (c && E) {
        const P = A ? H[0] : kt(b);
        Dt(b, {
          x: ye(3333333, 3333333, P && i),
          y: 3333333
        });
      }
      $ || e({
        vt: A ? H : void 0,
        ht: !A,
        _t: g
      });
    };
    if (ve) {
      const H = new ve((D) => T(D.pop()));
      H.observe(h), Q(a, () => {
        H.disconnect();
      });
    } else if (r) {
      const [H, D] = r(h, T, s);
      Q(a, At([ge(b, Wo), et(b, "animationstart", H)], D));
    } else
      return wt;
    if (c) {
      const [H] = yt({
        o: void 0
      }, l);
      Q(a, et(b, "scroll", (D) => {
        const A = H(), [$, g, E] = A;
        g && (on(h, "ltr rtl"), ge(h, $ ? "rtl" : "ltr"), T([!!$, g, E])), rn(D);
      }));
    }
    return I(bt, Q(a, vt(t, b)));
  };
}, bs = (t, e) => {
  let n;
  const o = (l) => l.h === 0 || l.isIntersecting || l.intersectionRatio > 0, c = qt(Ko), [s] = yt({
    o: !1
  }), r = (l, u) => {
    if (l) {
      const a = s(o(l)), [, p] = a;
      return p && !u && e(a) && [a];
    }
  }, i = (l, u) => r(u.pop(), l);
  return [() => {
    const l = [];
    if (pn)
      n = new pn(I(i, !1), {
        root: t
      }), n.observe(c), Q(l, () => {
        n.disconnect();
      });
    else {
      const u = () => {
        const a = ne(c);
        r(a);
      };
      Q(l, So(c, u)()), u();
    }
    return I(bt, Q(l, vt(t, c)));
  }, () => n && i(!0, n.takeRecords())];
}, gs = (t, e, n, o) => {
  let c, s, r, i, l, u;
  const { L: a } = gt(), p = `[${pt}]`, b = `[${Lt}]`, h = ["tabindex"], T = ["wrap", "cols", "rows"], H = ["id", "class", "style", "open"], { gt: D, bt: A, D: $, wt: g, St: E, V: P, yt: L, Ot: N } = t, z = {
    $t: !1,
    N: kt(D)
  }, R = gt(), S = te(un), [y] = yt({
    u: Wn,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const f = S && S.M(t, e, z, R, n).W, d = L(Wt), v = !P && L(qo), m = v && Qt($);
    N(Wt), P && N(Ze, !0);
    const w = v && f && f()[0], C = Ke(g), j = Ke($), U = cn($);
    return N(Wt, d), P && N(Ze), w && w(), Dt($, m), {
      w: j.w + C.w + U.w,
      h: j.h + C.h + U.h
    };
  }), O = E ? T : At(H, T), x = Kn(o, {
    v: () => c,
    p: () => s,
    S(f, d) {
      const [v] = f, [m] = d;
      return [At(Pt(v), Pt(m)).reduce((w, C) => (w[C] = v[C] || m[C], w), {})];
    }
  }), _ = (f) => {
    if (P) {
      const d = kt(D);
      q(f, {
        Ct: u !== d
      }), q(z, {
        N: d
      }), u = d;
    }
  }, M = (f) => {
    G(f || h, (d) => {
      if (Ee(h, d)) {
        const v = He(A, d);
        Oe(v) ? ht($, d, v) : $t($, d);
      }
    });
  }, X = (f, d) => {
    const [v, m] = f, w = {
      xt: m
    };
    return q(z, {
      $t: v
    }), !d && o(w), w;
  }, B = ({ ht: f, vt: d, _t: v }) => {
    const w = !(f && !v && !d) && a ? x : o, [C, j] = d || [], U = {
      ht: f || v,
      _t: v,
      Ct: j
    };
    _(U), d && q(z, {
      N: C
    }), w(U);
  }, V = (f, d) => {
    const [, v] = y(), m = {
      Ht: v
    };
    return _(m), v && !d && (f ? o : x)(m), m;
  }, st = (f, d, v) => {
    const m = {
      zt: d
    };
    return _(m), d && !v ? x(m) : P || M(f), m;
  }, { Z: k } = R, [Y, J] = g ? bs(A, X) : [], nt = !P && So(A, B, {
    _t: !0,
    dt: !0
  }), [K, ct] = Pn(A, !1, st, {
    rt: H,
    ct: At(H, h)
  }), rt = P && ve && new ve((f) => {
    const d = f[f.length - 1].contentRect;
    B({
      ht: !0,
      _t: co(d, l)
    }), l = d;
  });
  return [() => {
    M(), rt && rt.observe(A);
    const f = nt && nt(), d = Y && Y(), v = K(), m = k((w) => {
      const [, C] = y();
      x({
        It: w,
        Ht: C
      });
    });
    return () => {
      rt && rt.disconnect(), f && f(), d && d(), i && i(), v(), m();
    };
  }, ({ Et: f, At: d, Tt: v }) => {
    const m = {}, [w] = f("update.ignoreMutation"), [C, j] = f("update.attributes"), [U, tt] = f("update.elementEvents"), [ot, ut] = f("update.debounce"), F = tt || j, W = d || v, ft = (lt) => Et(w) && w(lt);
    if (F) {
      r && r(), i && i();
      const [lt, Z] = Pn(g || $, !0, V, {
        ct: At(O, C || []),
        lt: U,
        it: p,
        ft: (it, at) => {
          const { target: xt, attributeName: le } = it;
          return (!at && le && !P ? Ro(xt, p, b) : !1) || !!jt(xt, `.${dt}`) || !!ft(it);
        }
      });
      i = lt(), r = Z;
    }
    if (ut)
      if (x.m(), St(ot)) {
        const lt = ot[0], Z = ot[1];
        c = Ct(lt) && lt, s = Ct(Z) && Z;
      } else
        Ct(ot) ? (c = ot, s = !1) : (c = !1, s = !1);
    if (W) {
      const lt = ct(), Z = J && J(), it = r && r();
      lt && q(m, st(lt[0], lt[1], W)), Z && q(m, X(Z[0], W)), it && q(m, V(it[0], W));
    }
    return _(m), m;
  }, z];
}, hs = (t, e, n, o) => {
  const { G: c, K: s } = gt(), { scrollbars: r } = c(), { slot: i } = r, { gt: l, bt: u, D: a, Dt: p, kt: b, Rt: h, V: T } = e, { scrollbars: H } = p ? {} : t, { slot: D } = H || {}, A = /* @__PURE__ */ new Map(), $ = (f) => je && new je({
    source: b,
    axis: f
  }), g = $("x"), E = $("y"), P = yo([l, u, a], () => T && h ? l : u, i, D), L = (f, d) => {
    if (d) {
      const U = f ? Xt : Kt, { Mt: tt, Vt: ot } = d, ut = Gt(ot)[U], F = Gt(tt)[U];
      return Ge(0, 1, ut / F || 0);
    }
    const v = f ? "x" : "y", { Lt: m, Pt: w } = n, C = w[v], j = m[v];
    return Ge(0, 1, C / (C + j) || 0);
  }, N = (f, d, v, m) => {
    const w = L(v, f);
    return 1 / w * (1 - w) * (m ? 1 - d : d) || 0;
  }, z = (f, d) => q(f, d ? {
    clear: ["left"]
  } : {}), R = (f) => {
    A.forEach((d, v) => {
      (f ? Ee(zn(f), v) : !0) && (G(d || [], (w) => {
        w && w.cancel();
      }), A.delete(v));
    });
  }, S = (f, d, v, m) => {
    const w = A.get(f) || [], C = w.find((j) => j && j.timeline === d);
    C ? C.effect = new KeyframeEffect(f, v, {
      composite: m
    }) : A.set(f, At(w, [f.animate(v, {
      timeline: d,
      composite: m
    })]));
  }, y = (f, d, v) => {
    const m = v ? ge : on;
    G(f, (w) => {
      m(w.Ut, d);
    });
  }, O = (f, d) => {
    G(f, (v) => {
      const [m, w] = d(v);
      Zt(m, w);
    });
  }, x = (f, d) => {
    O(f, (v) => {
      const { Vt: m } = v;
      return [m, {
        [d ? Xt : Kt]: gn(L(d))
      }];
    });
  }, _ = (f, d) => {
    const { Lt: v } = n, m = d ? v.x : v.y, w = (C, j, U) => Me(gn(N(C, xn(j, m, U), d, U)), d);
    if (g && E)
      G(f, (C) => {
        const { Ut: j, Vt: U } = C, tt = d && kt(j) && s;
        S(U, d ? g : E, z({
          transform: Sn(m, tt).map((ot) => w(C, ot, tt))
        }, tt));
      });
    else {
      const C = Qt(b);
      O(f, (j) => {
        const { Vt: U, Ut: tt } = j;
        return [U, {
          transform: w(j, d ? C.x : C.y, d && kt(tt) && s)
        }];
      });
    }
  }, M = (f) => T && !h && Jt(f) === a, X = [], B = [], V = [], st = (f, d, v) => {
    const m = Mn(v), w = m ? v : !0, C = m ? !v : !0;
    w && y(B, f, d), C && y(V, f, d);
  }, k = () => {
    x(B, !0), x(V);
  }, Y = () => {
    _(B, !0), _(V);
  }, J = () => {
    if (T) {
      const { Lt: f } = n, d = 0.5;
      if (g && E)
        G(At(V, B), ({ Ut: v }) => {
          if (M(v)) {
            const m = (w, C, j) => {
              const U = j && kt(v) && s;
              S(v, w, z({
                transform: Sn(C - d, U).map((tt) => Me(Xe(tt), j))
              }, U), "add");
            };
            m(g, f.x, !0), m(E, f.y);
          } else
            R(v);
        });
      else {
        const v = Qt(b), m = (w) => {
          const { Ut: C } = w, j = M(C) && C, U = (tt, ot, ut) => {
            const F = xn(tt, ot, ut), W = ot * F;
            return Xe(ut ? -W : W);
          };
          return [j, {
            transform: j ? Me({
              x: U(v.x, f.x, kt(C) && s),
              y: U(v.y, f.y)
            }) : ""
          }];
        };
        O(B, m), O(V, m);
      }
    }
  }, nt = (f) => {
    const v = qt(`${dt} ${f ? Zo : Qo}`), m = qt(po), w = qt(an), C = {
      Ut: v,
      Mt: m,
      Vt: w
    };
    return Q(f ? B : V, C), Q(X, [vt(v, m), vt(m, w), I(_t, v), R, o(C, st, _, f)]), C;
  }, K = I(nt, !0), ct = I(nt, !1), rt = () => (vt(P, B[0].Ut), vt(P, V[0].Ut), I(bt, X));
  return K(), ct(), [{
    Bt: k,
    Nt: Y,
    jt: J,
    Ft: st,
    qt: {
      J: g,
      Wt: B,
      Xt: K,
      Yt: I(O, B)
    },
    Jt: {
      J: E,
      Wt: V,
      Xt: ct,
      Yt: I(O, V)
    }
  }, rt];
}, ys = (t, e, n, o) => {
  const { bt: c, kt: s, Kt: r } = e;
  return (i, l, u, a) => {
    const { Ut: p, Mt: b, Vt: h } = i, [T, H] = Ut(333), [D, A] = Ut(), $ = I(u, [i], a), g = !!s.scrollBy, E = `client${a ? "X" : "Y"}`, P = a ? Xt : Kt, L = a ? "left" : "top", N = a ? "w" : "h", z = a ? "x" : "y", R = (O) => O.propertyName.indexOf(P) > -1, S = () => {
      const O = "pointerup pointerleave pointercancel lostpointercapture", x = (_, M) => (X) => {
        const { Lt: B } = n, V = ne(b)[N] - ne(h)[N], k = M * X / V * B[z];
        Dt(s, {
          [z]: _ + k
        });
      };
      return et(b, "pointerdown", (_) => {
        const M = jt(_.target, `.${an}`) === h, X = M ? h : b, B = t.scrollbars, { button: V, isPrimary: st, pointerType: k } = _, { pointers: Y } = B;
        if (V === 0 && st && B[M ? "dragScroll" : "clickScroll"] && (Y || []).includes(k)) {
          const nt = !M && _.shiftKey, K = I(Gt, h), ct = I(Gt, b), rt = (W, ft) => (W || K())[L] - (ft || ct())[L], f = Fe(Gt(s)[P]) / ne(s)[N] || 1, d = x(Qt(s)[z] || 0, 1 / f), v = _[E], m = K(), w = ct(), C = m[P], j = rt(m, w) + C / 2, U = v - w[L], tt = M ? 0 : U - j, ot = (W) => {
            bt(F), X.releasePointerCapture(W.pointerId);
          }, F = [se(c, pt, Uo), et(r, O, ot), et(r, "selectstart", (W) => wn(W), {
            H: !1
          }), et(b, O, ot), et(b, "pointermove", (W) => {
            const ft = W[E] - v;
            (M || nt) && d(tt + ft);
          })];
          if (X.setPointerCapture(_.pointerId), nt)
            d(tt);
          else if (!M) {
            const W = te(as);
            W && Q(F, W(d, rt, tt, C, U));
          }
        }
      });
    };
    let y = !0;
    return I(bt, [et(p, "pointerenter", () => {
      l(Tn, !0);
    }), et(p, "pointerleave pointercancel", () => {
      l(Tn, !1);
    }), et(p, "wheel", (O) => {
      const { deltaX: x, deltaY: _, deltaMode: M } = O;
      g && y && M === 0 && Jt(p) === c && s.scrollBy({
        left: x,
        top: _,
        behavior: "smooth"
      }), y = !1, l(kn, !0), T(() => {
        y = !0, l(kn);
      }), wn(O);
    }, {
      H: !1,
      I: !0
    }), et(h, "pointermove pointerleave", o), et(h, "transitionstart", (O) => {
      if (R(O)) {
        const x = () => {
          $(), D(x);
        };
        x();
      }
    }), et(h, "transitionend transitioncancel", (O) => {
      R(O) && (A(), $());
    }), et(p, "mousedown", I(et, r, "click", rn, {
      A: !0,
      I: !0
    }), {
      I: !0
    }), S(), H, A]);
  };
}, ws = (t, e, n, o, c, s) => {
  let r, i, l, u, a = wt, p = 0;
  const b = () => !l && !i, h = (k) => k.pointerType === "mouse", [T, H] = Ut(), [D, A] = Ut(100), [$, g] = Ut(100), [E, P] = Ut(() => p), [L, N] = hs(t, c, o, ys(e, c, o, (k) => h(k) && b() && X())), { bt: z, Zt: R, Rt: S } = c, { Ft: y, Bt: O, Nt: x, jt: _ } = L, M = (k, Y) => {
    if (P(), k)
      y(Ln);
    else {
      const J = I(y, Ln, !0);
      p > 0 && !Y ? E(J) : J();
    }
  }, X = () => {
    M(!0), D(() => {
      M(!1);
    });
  }, B = (k) => {
    y(tn, k, !0), y(tn, k, !1);
  }, V = (k) => {
    h(k) && i && M(!0);
  }, st = [P, A, g, H, () => a(), et(z, "pointerover", V, {
    A: !0
  }), et(z, "pointerenter", V), et(z, "pointerleave", (k) => {
    h(k) && i && M(!1);
  }), et(z, "pointermove", (k) => {
    h(k) && r && X();
  }), et(R, "scroll", (k) => {
    T(() => {
      x(), b() && X();
    }), s(k), _();
  })];
  return [() => I(bt, Q(st, N())), ({ Et: k, Tt: Y, Gt: J, Qt: nt }) => {
    const { tn: K, nn: ct, sn: rt } = nt || {}, { Ct: f, _t: d } = J || {}, { N: v } = n, { T: m } = gt(), { k: w, en: C } = o, [j, U] = k("showNativeOverlaidScrollbars"), [tt, ot] = k("scrollbars.theme"), [ut, F] = k("scrollbars.visibility"), [W, ft] = k("scrollbars.autoHide"), [lt, Z] = k("scrollbars.autoHideSuspend"), [it] = k("scrollbars.autoHideDelay"), [at, xt] = k("scrollbars.dragScroll"), [le, ie] = k("scrollbars.clickScroll"), [ae, Ot] = k("overflow"), It = d && !Y, Rt = C.x || C.y, Pe = K || ct || f || Y, Ht = rt || F || Ot, _e = j && m.x && m.y, Nt = (Ft, Bt, ee) => {
      const ue = Ft.includes("scroll") && (ut === "visible" || ut === "auto" && Bt === "scroll");
      return y(ts, ue, ee), ue;
    };
    if (p = it, It && (lt && Rt ? (B(!1), a(), $(() => {
      a = et(R, "scroll", I(B, !0), {
        A: !0
      });
    })) : B(!0)), U && y(Yo, _e), ot && (y(u), y(tt, !0), u = tt), Z && !lt && B(!0), ft && (r = W === "move", i = W === "leave", l = W === "never", M(l, !0)), xt && y(os, at), ie && y(ns, le), Ht) {
      const Ft = Nt(ae.x, w.x, !0), Bt = Nt(ae.y, w.y, !1);
      y(es, !(Ft && Bt));
    }
    Pe && (O(), x(), _(), y(Hn, !C.x, !0), y(Hn, !C.y, !1), y(Jo, v && !S));
  }, {}, L];
}, Ss = (t) => {
  const e = gt(), { G: n, L: o } = e, { elements: c } = n(), { host: s, padding: r, viewport: i, content: l } = c, u = be(t), a = u ? {} : t, { elements: p } = a, { host: b, padding: h, viewport: T, content: H } = p || {}, D = u ? t : a.target, A = eo(D), $ = he(D, "textarea"), g = D.ownerDocument, E = g.documentElement, P = g.defaultView, L = () => g.activeElement, N = (F) => {
    F && F.focus && F.focus();
  }, z = I(ds, [D]), R = I(yo, [D]), S = I(qt, ""), y = I(z, S, i), O = I(R, S, l), x = y(T), _ = x === D, M = _ && A, X = !_ && O(H), B = !_ && x === X, V = M ? E : x, st = $ ? z(S, s, b) : D, k = M ? V : st, Y = !_ && R(S, r, h), J = !B && X, nt = [J, V, Y, k].map((F) => be(F) && !Jt(F) && F), K = (F) => F && Ee(nt, F), ct = K(V) ? D : V, rt = {
    gt: D,
    bt: k,
    D: V,
    cn: Y,
    wt: J,
    kt: M ? E : V,
    Zt: M ? g : V,
    rn: A ? E : ct,
    ln: P,
    Kt: g,
    St: $,
    Rt: A,
    Dt: u,
    V: _,
    yt: (F) => Do(V, _ ? pt : Lt, F),
    Ot: (F, W) => pe(V, _ ? pt : Lt, F, W)
  }, { gt: f, bt: d, cn: v, D: m, wt: w } = rt, C = [() => {
    $t(d, [pt, Ve]), $t(f, Ve), A && $t(E, [Ve, pt]);
  }], j = $ && K(d);
  let U = $ ? f : We([w, m, v, d, f].find((F) => F && !K(F)));
  const tt = M ? f : w || m, ot = I(bt, C);
  return [rt, () => {
    const F = L(), W = (Z) => {
      vt(Jt(Z), We(Z)), _t(Z);
    }, ft = (Z) => Z ? et(Z, "focusin focusout focus blur", (it) => {
      rn(it), it.stopImmediatePropagation();
    }, {
      I: !0,
      H: !1
    }) : wt, lt = ft(F);
    if (ht(d, pt, _ ? "viewport" : "host"), ht(v, Qe, ""), ht(w, An, ""), _ || (ht(m, Lt, ""), A && se(E, pt, jo)), j && (mn(f, d), Q(C, () => {
      mn(d, f), _t(d);
    })), vt(tt, U), vt(d, v), vt(v || d, !_ && m), vt(m, w), Q(C, [lt, () => {
      const Z = L(), it = ft(Z);
      $t(v, Qe), $t(w, An), $t(m, [io, ao, Lt]), K(w) && W(w), K(m) && W(m), K(v) && W(v), N(Z), it();
    }]), o && !_ && (se(m, Lt, fo), Q(C, I($t, m, Lt))), !_ && P.top === P && F === D) {
      const Z = "tabindex", it = He(m, Z);
      ht(m, Z, "-1"), N(m);
      const at = () => it ? ht(m, Z, it) : $t(m, Z), xt = et(g, "pointerdown keydown", () => {
        at(), xt();
      });
      Q(C, [at, xt]);
    } else
      N(F);
    return lt(), U = 0, ot;
  }, ot];
}, xs = ({ wt: t }) => ({ Gt: e, an: n, Tt: o }) => {
  const { xt: c } = e || {}, { $t: s } = n;
  t && (c || o) && Zt(t, {
    [Kt]: s && "100%"
  });
}, Os = ({ bt: t, cn: e, D: n, V: o }, c) => {
  const [s, r] = yt({
    u: _o,
    o: hn()
  }, I(hn, t, "padding", ""));
  return ({ Et: i, Gt: l, an: u, Tt: a }) => {
    let [p, b] = r(a);
    const { L: h } = gt(), { ht: T, Ht: H, Ct: D } = l || {}, { N: A } = u, [$, g] = i("paddingAbsolute");
    (T || b || (a || H)) && ([p, b] = s(a));
    const P = !o && (g || D || b);
    if (P) {
      const L = !$ || !e && !h, N = p.r + p.l, z = p.t + p.b, R = {
        [jn]: L && !A ? -N : 0,
        [qn]: L ? -z : 0,
        [Un]: L && A ? -N : 0,
        top: L ? -p.t : 0,
        right: L ? A ? -p.r : "auto" : 0,
        left: L ? A ? "auto" : -p.l : 0,
        [Xt]: L && `calc(100% + ${N}px)`
      }, S = {
        [Vn]: L ? p.t : 0,
        [Nn]: L ? p.r : 0,
        [Bn]: L ? p.b : 0,
        [Fn]: L ? p.l : 0
      };
      Zt(e || n, R), Zt(n, S), q(c, {
        cn: p,
        un: !L,
        j: e ? S : q({}, R, S)
      });
    }
    return {
      fn: P
    };
  };
}, $s = (t, e) => {
  const n = gt(), { bt: o, cn: c, D: s, V: r, Ot: i, Rt: l, ln: u } = t, { L: a } = n, p = l && r, b = I(fe, 0), h = {
    u: Wn,
    o: {
      w: 0,
      h: 0
    }
  }, T = {
    u: Xn,
    o: {
      x: Yt,
      y: Yt
    }
  }, H = (S, y) => {
    const O = mt.devicePixelRatio % 1 !== 0 ? 1 : 0, x = {
      w: b(S.w - y.w),
      h: b(S.h - y.h)
    };
    return {
      w: x.w > O ? x.w : 0,
      h: x.h > O ? x.h : 0
    };
  }, [D, A] = yt(h, I(cn, s)), [$, g] = yt(h, I(Ke, s)), [E, P] = yt(h), [L, N] = yt(h), [z] = yt(T), R = te(un);
  return ({ Et: S, Gt: y, an: O, Tt: x }, { fn: _ }) => {
    const { ht: M, Ht: X, Ct: B, It: V } = y || {}, st = R && R.M(t, e, O, n, S), { q: k, W: Y, X: J } = st || {}, [nt, K] = ls(S, n), [ct, rt] = S("overflow"), f = M || _ || X || B || V || K, d = we(ct.x), v = we(ct.y), m = d || v;
    let w = A(x), C = g(x), j = P(x), U = N(x), tt;
    if (K && a && i(fo, !nt), f) {
      m && i(Wt, !1);
      const [Ot, It] = Y ? Y(tt) : [], [Rt, Pe] = w = D(x), [Ht, _e] = C = $(x), Nt = so(s), Ft = Ht, Bt = Nt;
      Ot && Ot(), (_e || Pe || K) && It && !nt && k && k(It, Ht, Rt);
      const ee = Vo(u), ue = {
        w: b(fe(Ht.w, Ft.w) + Rt.w),
        h: b(fe(Ht.h, Ft.h) + Rt.h)
      }, fn = {
        w: b((p ? ee.w : Bt.w + b(Nt.w - Ht.w)) + Rt.w),
        h: b((p ? ee.h : Bt.h + b(Nt.h - Ht.h)) + Rt.h)
      };
      U = L(fn), j = E(H(ue, fn), x);
    }
    const [ot, ut] = U, [F, W] = j, [ft, lt] = C, [Z, it] = w, at = {
      x: F.w > 0,
      y: F.h > 0
    }, xt = d && v && (at.x || at.y) || d && at.x && !at.y || v && at.y && !at.x;
    if (_ || B || V || it || lt || ut || W || rt || K || f) {
      const Ot = {}, It = is(t, at, ct, Ot);
      J && J(It, O, !!k && k(It, ft, Z), Ot), r ? (ht(o, io, Ot[Ae]), ht(o, ao, Ot[Te])) : Zt(s, Ot);
    }
    pe(o, pt, uo, xt), pe(c, Qe, Go, xt), r || pe(s, Lt, Wt, m);
    const [ie, ae] = z(go(t).k);
    return q(e, {
      k: ie,
      Pt: {
        x: ot.w,
        y: ot.h
      },
      Lt: {
        x: F.w,
        y: F.h
      },
      en: at
    }), {
      sn: ae,
      tn: ut,
      nn: W
    };
  };
}, Cs = (t) => {
  const [e, n, o] = Ss(t), c = {
    cn: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    un: !1,
    j: {
      [jn]: 0,
      [qn]: 0,
      [Un]: 0,
      [Vn]: 0,
      [Nn]: 0,
      [Bn]: 0,
      [Fn]: 0
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
      x: Yt,
      y: Yt
    },
    en: {
      x: !1,
      y: !1
    }
  }, { gt: s, D: r, V: i } = e, { L: l, T: u } = gt(), a = !l && (u.x || u.y), p = [xs(e), Os(e, c), $s(e, c)];
  return [n, (b) => {
    const h = {}, H = a && Qt(r), D = i ? se(r, pt, Ze) : wt;
    return G(p, (A) => {
      q(h, A(b, h) || {});
    }), D(), Dt(r, H), !i && Dt(s, 0), h;
  }, c, e, o];
}, Es = (t, e, n, o) => {
  const c = En(e, {}), [s, r, i, l, u] = Cs(t), [a, p, b] = gs(l, i, c, ($) => {
    A({}, $);
  }), [h, T, , H] = ws(t, e, b, i, l, o), D = ($) => Pt($).some((g) => !!$[g]), A = ($, g) => {
    const { dn: E, Tt: P, At: L, _n: N } = $, z = E || {}, R = !!P, S = {
      Et: En(e, z, R),
      dn: z,
      Tt: R
    };
    if (N)
      return T(S), !1;
    const y = g || p(q({}, S, {
      At: L
    })), O = r(q({}, S, {
      an: b,
      Gt: y
    }));
    T(q({}, S, {
      Gt: y,
      Qt: O
    }));
    const x = D(y), _ = D(O), M = x || _ || !nn(z) || R;
    return M && n($, {
      Gt: y,
      Qt: O
    }), M;
  };
  return [() => {
    const { rn: $, D: g } = l, E = Qt($), P = [a(), s(), h()];
    return Dt(g, E), I(bt, P);
  }, A, () => ({
    vn: b,
    hn: i
  }), {
    pn: l,
    gn: H
  }, u];
}, Tt = (t, e, n) => {
  const { nt: o } = gt(), c = be(t), s = c ? t : t.target, r = wo(s);
  if (e && !r) {
    let i = !1;
    const l = [], u = {}, a = (S) => {
      const y = Jn(S, !0), O = te(cs);
      return O ? O(y, !0) : y;
    }, p = q({}, o(), a(e)), [b, h, T] = Je(), [H, D, A] = Je(n), $ = (S, y) => {
      A(S, y), T(S, y);
    }, [g, E, P, L, N] = Es(t, p, ({ dn: S, Tt: y }, { Gt: O, Qt: x }) => {
      const { ht: _, Ct: M, xt: X, Ht: B, zt: V, _t: st } = O, { tn: k, nn: Y, sn: J } = x;
      $("updated", [R, {
        updateHints: {
          sizeChanged: !!_,
          directionChanged: !!M,
          heightIntrinsicChanged: !!X,
          overflowEdgeChanged: !!k,
          overflowAmountChanged: !!Y,
          overflowStyleChanged: !!J,
          contentMutation: !!B,
          hostMutation: !!V,
          appear: !!st
        },
        changedOptions: S || {},
        force: !!y
      }]);
    }, (S) => $("scroll", [R, S])), z = (S) => {
      vs(s), bt(l), i = !0, $("destroyed", [R, S]), h(), D();
    }, R = {
      options(S, y) {
        if (S) {
          const O = y ? o() : {}, x = ro(p, q(O, a(S)));
          nn(x) || (q(p, x), E({
            dn: x
          }));
        }
        return q({}, p);
      },
      on: H,
      off: (S, y) => {
        S && y && D(S, y);
      },
      state() {
        const { vn: S, hn: y } = P(), { N: O } = S, { Pt: x, Lt: _, k: M, en: X, cn: B, un: V } = y;
        return q({}, {
          overflowEdge: x,
          overflowAmount: _,
          overflowStyle: M,
          hasOverflow: X,
          padding: B,
          paddingAbsolute: V,
          directionRTL: O,
          destroyed: i
        });
      },
      elements() {
        const { gt: S, bt: y, cn: O, D: x, wt: _, kt: M, Zt: X } = L.pn, { qt: B, Jt: V } = L.gn, st = (Y) => {
          const { Vt: J, Mt: nt, Ut: K } = Y;
          return {
            scrollbar: K,
            track: nt,
            handle: J
          };
        }, k = (Y) => {
          const { Wt: J, Xt: nt } = Y, K = st(J[0]);
          return q({}, K, {
            clone: () => {
              const ct = st(nt());
              return E({
                _n: !0
              }), ct;
            }
          });
        };
        return q({}, {
          target: S,
          host: y,
          padding: O || x,
          viewport: x,
          content: _ || x,
          scrollOffsetElement: M,
          scrollEventElement: X,
          scrollbarHorizontal: k(B),
          scrollbarVertical: k(V)
        });
      },
      update: (S) => E({
        Tt: S,
        At: !0
      }),
      destroy: I(z, !1),
      plugin: (S) => u[Pt(S)[0]]
    };
    return Q(l, [N]), ps(s, R), bo(vo, Tt, [R, b, u]), fs(L.pn.Rt, !c && t.cancel) ? (z(!0), R) : (Q(l, g()), $("initialized", [R]), R.update(!0), R);
  }
  return r;
};
Tt.plugin = (t) => {
  const e = St(t), n = e ? t : [t], o = n.map((c) => bo(c, Tt)[0]);
  return ss(n), e ? o : o[0];
};
Tt.valid = (t) => {
  const e = t && t.elements, n = Et(e) && e();
  return me(n) && !!wo(n.target);
};
Tt.env = () => {
  const { P: t, T: e, L: n, K: o, J: c, st: s, et: r, G: i, tt: l, nt: u, ot: a } = gt();
  return q({}, {
    scrollbarsSize: t,
    scrollbarsOverlaid: e,
    scrollbarsHiding: n,
    rtlScrollBehavior: o,
    scrollTimeline: c,
    staticDefaultInitialization: s,
    staticDefaultOptions: r,
    getDefaultInitialization: i,
    setDefaultInitialization: l,
    getDefaultOptions: u,
    setDefaultOptions: a
  });
};
const As = () => {
  if (typeof window > "u") {
    const u = () => {
    };
    return [u, u];
  }
  let t, e;
  const n = window, o = typeof n.requestIdleCallback == "function", c = n.requestAnimationFrame, s = n.cancelAnimationFrame, r = o ? n.requestIdleCallback : c, i = o ? n.cancelIdleCallback : s, l = () => {
    i(t), s(e);
  };
  return [
    (u, a) => {
      l(), t = r(
        o ? () => {
          l(), e = c(u);
        } : u,
        typeof a == "object" ? a : { timeout: 2233 }
      );
    },
    l
  ];
}, Ts = (t) => {
  let e = null, n, o, c;
  const s = xo(t || {}), [r, i] = As();
  return De(
    () => {
      var l;
      return Ie((l = s.value) == null ? void 0 : l.defer);
    },
    (l) => {
      c = l;
    },
    { deep: !0, immediate: !0 }
  ), De(
    () => {
      var l;
      return Ie((l = s.value) == null ? void 0 : l.options);
    },
    (l) => {
      n = l, Tt.valid(e) && e.options(n || {}, !0);
    },
    { deep: !0, immediate: !0 }
  ), De(
    () => {
      var l;
      return Ie((l = s.value) == null ? void 0 : l.events);
    },
    (l) => {
      o = l, Tt.valid(e) && e.on(
        /* c8 ignore next */
        o || {},
        !0
      );
    },
    { deep: !0, immediate: !0 }
  ), Oo(() => {
    i(), e == null || e.destroy();
  }), [
    (l) => {
      if (Tt.valid(e))
        return e;
      const u = () => e = Tt(l, n || {}, o || {});
      c ? r(u, c) : u();
    },
    () => e
  ];
}, Ls = /* @__PURE__ */ $o({
  name: "BodyOverlayScrollbars",
  __name: "BodyOverlayScrollbars",
  setup(t) {
    const e = Co(null), [n] = Ts({
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
    return Eo(() => n(document.body)), (o, c) => Ao(o.$slots, "default");
  }
});
export {
  Ls as default
};
//# sourceMappingURL=BodyOverlayScrollbars.mjs.map
