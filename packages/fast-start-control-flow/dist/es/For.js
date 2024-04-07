import { defineComponent as p, renderSlot as o, computed as m, openBlock as a, createElementBlock as s, Fragment as u, renderList as h, normalizeProps as f, mergeProps as d, createVNode as i, withCtx as y } from "vue";
const w = /* @__PURE__ */ p({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(l) {
    const t = (e) => e;
    return (e, r) => e.when ? o(e.$slots, "default", {
      key: 0,
      value: t(e.when)
    }) : o(e.$slots, "fallback", { key: 1 });
  }
}), v = /* @__PURE__ */ p({
  name: "For",
  __name: "For",
  props: {
    echo: {},
    rowKey: {}
  },
  setup(l) {
    const t = l;
    function e(n) {
      return n;
    }
    const r = m(() => t.echo);
    return (n, k) => (a(), s(
      u,
      null,
      [
        (a(!0), s(
          u,
          null,
          h(n.echo, (c) => o(n.$slots, "default", f(d({ key: n.rowKey }, c)))),
          128
          /* KEYED_FRAGMENT */
        )),
        i(w, {
          when: !r.value || !r.value.length || r.value.length === 0
        }, {
          default: y(() => [
            o(n.$slots, "fallback")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["when"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
export {
  v as default
};
//# sourceMappingURL=For.js.map
