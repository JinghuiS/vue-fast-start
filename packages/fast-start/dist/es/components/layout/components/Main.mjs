import { defineComponent as e, openBlock as o, createBlock as r, unref as t, normalizeStyle as a, withCtx as n, createVNode as c } from "vue";
import { ElMain as i } from "element-plus";
import { RouterView as l } from "vue-router";
const s = 60, d = /* @__PURE__ */ e({
  __name: "Main",
  setup(m) {
    return (p, _) => (o(), r(t(i), {
      class: "fast-start-layout-main",
      style: a({
        height: `calc(100vh - ${t(s)}px) `
      })
    }, {
      default: n(() => [
        c(t(l))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
});
export {
  d as default
};
//# sourceMappingURL=Main.mjs.map
