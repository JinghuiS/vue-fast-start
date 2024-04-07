import { provide as o, defineComponent as r, openBlock as n, createBlock as t, unref as c } from "vue";
import { RouterView as s } from "vue-router";
const p = Symbol("RESOURCE_CONTEXT"), m = (e) => o(p, e), f = /* @__PURE__ */ r({
  name: "FsResource",
  __name: "Resource",
  props: {
    name: {}
  },
  setup(e) {
    return m({ name: e.name }), (u, R) => (n(), t(c(s)));
  }
});
export {
  f as default
};
//# sourceMappingURL=Resource.mjs.map
