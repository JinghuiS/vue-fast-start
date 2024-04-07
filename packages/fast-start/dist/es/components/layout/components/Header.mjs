import { defineComponent as t, openBlock as r, createBlock as a, unref as e, normalizeStyle as o, withCtx as n, createTextVNode as s } from "vue";
import { ElHeader as c } from "element-plus";
const l = 60, i = /* @__PURE__ */ t({
  __name: "Header",
  setup(_) {
    return (d, f) => (r(), a(e(c), {
      class: "fast-start-layout-header",
      style: o({ height: e(l) })
    }, {
      default: n(() => [
        s(" header ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
});
export {
  i as default
};
//# sourceMappingURL=Header.mjs.map
