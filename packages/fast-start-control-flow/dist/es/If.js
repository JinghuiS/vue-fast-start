import { defineComponent as r, renderSlot as n } from "vue";
const s = /* @__PURE__ */ r({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(a) {
    const o = (e) => e;
    return (e, l) => e.when ? n(e.$slots, "default", {
      key: 0,
      value: o(e.when)
    }) : n(e.$slots, "fallback", { key: 1 });
  }
});
export {
  s as default
};
//# sourceMappingURL=If.js.map
