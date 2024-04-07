import { defineComponent as f, renderSlot as a, computed as w, openBlock as p, createElementBlock as m, Fragment as i, renderList as d, normalizeProps as v, mergeProps as k, createVNode as $, withCtx as h, useSlots as g, createBlock as _, resolveDynamicComponent as B } from "vue";
const y = /* @__PURE__ */ f({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(c) {
    const o = (e) => e;
    return (e, s) => e.when ? a(e.$slots, "default", {
      key: 0,
      value: o(e.when)
    }) : a(e.$slots, "fallback", { key: 1 });
  }
}), S = /* @__PURE__ */ f({
  name: "For",
  __name: "For",
  props: {
    echo: {},
    rowKey: {}
  },
  setup(c) {
    const o = c;
    function e(r) {
      return r;
    }
    const s = w(() => o.echo);
    return (r, n) => (p(), m(
      i,
      null,
      [
        (p(!0), m(
          i,
          null,
          d(r.echo, (u) => a(r.$slots, "default", v(k({ key: r.rowKey }, u)))),
          128
          /* KEYED_FRAGMENT */
        )),
        $(y, {
          when: !s.value || !s.value.length || s.value.length === 0
        }, {
          default: h(() => [
            a(r.$slots, "fallback")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["when"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), b = /* @__PURE__ */ f({
  name: "Switch",
  __name: "Switch",
  setup(c) {
    const o = g();
    function e() {
      return o.default ? o.default() : null;
    }
    function s(n, u) {
      Array.isArray(n) || (n = [n]);
      for (let t = 0; t < n.length; t++) {
        const l = n[t].props.when;
        if (l)
          return [t, l, n[t]];
      }
      return [-1];
    }
    const r = w(() => {
      let n = e();
      if (!n)
        return;
      const [u, t, l] = s(n);
      return {
        index: u,
        when: t,
        slot: l
      };
    });
    return (n, u) => {
      var t;
      return p(), _(y, {
        when: ((t = r.value) == null ? void 0 : t.index) !== -1
      }, {
        fallback: h(() => [
          a(n.$slots, "fallback")
        ]),
        default: h(() => {
          var l;
          return [
            (p(), _(B((l = r.value) == null ? void 0 : l.slot)))
          ];
        }),
        _: 3
        /* FORWARDED */
      }, 8, ["when"]);
    };
  }
}), F = /* @__PURE__ */ f({
  name: "Match",
  __name: "Match",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(c) {
    const o = (e) => e;
    return (e, s) => a(e.$slots, "default", {
      value: o(e.when)
    });
  }
});
export {
  S as For,
  y as If,
  F as Match,
  b as Switch
};
//# sourceMappingURL=index.js.map
