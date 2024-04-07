import { provide as o, defineComponent as t, openBlock as n, createBlock as s, unref as c } from "vue";
import { RouterView as a } from "vue-router";
const m = Symbol("RESOURCE_CONTEXT"), p = (e) => o(m, e), u = /* @__PURE__ */ t({
  name: "FsResource",
  __name: "Resource",
  props: {
    name: {}
  },
  setup(e) {
    return p({ name: e.name }), (_, i) => (n(), s(c(a)));
  }
}), R = (e) => [
  {
    path: `/${e.name}`,
    name: e.name,
    component: u,
    props: {
      name: e.name
    },
    children: [
      {
        path: "",
        name: `${e.name}-list`,
        component: e.listView
      }
    ]
  }
], C = (e) => ({
  routes: R(e)
});
export {
  C as createResourceFactory
};
//# sourceMappingURL=factory.mjs.map
