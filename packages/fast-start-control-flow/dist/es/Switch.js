import { defineComponent as i, renderSlot as s, useSlots as _, computed as h, openBlock as c, createBlock as f, withCtx as p, resolveDynamicComponent as w } from "vue";
const d = /* @__PURE__ */ i({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(m) {
    const r = (t) => t;
    return (t, u) => t.when ? s(t.$slots, "default", {
      key: 0,
      value: r(t.when)
    }) : s(t.$slots, "fallback", { key: 1 });
  }
}), y = /* @__PURE__ */ i({
  name: "Switch",
  __name: "Switch",
  setup(m) {
    const r = _();
    function t() {
      return r.default ? r.default() : null;
    }
    function u(e, l) {
      Array.isArray(e) || (e = [e]);
      for (let n = 0; n < e.length; n++) {
        const o = e[n].props.when;
        if (o)
          return [n, o, e[n]];
      }
      return [-1];
    }
    const a = h(() => {
      let e = t();
      if (!e)
        return;
      const [l, n, o] = u(e);
      return {
        index: l,
        when: n,
        slot: o
      };
    });
    return (e, l) => {
      var n;
      return c(), f(d, {
        when: ((n = a.value) == null ? void 0 : n.index) !== -1
      }, {
        fallback: p(() => [
          s(e.$slots, "fallback")
        ]),
        default: p(() => {
          var o;
          return [
            (c(), f(w((o = a.value) == null ? void 0 : o.slot)))
          ];
        }),
        _: 3
        /* FORWARDED */
      }, 8, ["when"]);
    };
  }
});
export {
  y as default
};
//# sourceMappingURL=Switch.js.map
