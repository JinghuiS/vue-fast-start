import { provide as o, inject as t } from "vue";
const e = Symbol("RESOURCE_CONTEXT"), c = (r) => o(e, r), s = () => t(e, { name: "" });
export {
  e as RESOURCE_CONTEXT,
  c as createResourceProvider,
  s as useResourceContext
};
//# sourceMappingURL=resource.mjs.map
