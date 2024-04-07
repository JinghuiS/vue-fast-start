import { defineComponent as t, renderSlot as o } from "vue";
const l = /* @__PURE__ */ t({
  name: "Match",
  __name: "Match",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(r) {
    const n = (e) => e;
    return (e, a) => o(e.$slots, "default", {
      value: n(e.when)
    });
  }
});
export {
  l as default
};
//# sourceMappingURL=Match.js.map
