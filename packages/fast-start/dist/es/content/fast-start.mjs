import { provide as r, inject as o } from "vue";
const e = {
  rowKey: "id"
}, t = Symbol("FAST_START_CONTEXT"), n = (T) => r(t, T), s = () => o(t, e);
export {
  e as DEFAULT_FAST_START_CONTEXT,
  t as FAST_START_CONTEXT,
  n as createFastStartProvider,
  s as useFastStartContext
};
//# sourceMappingURL=fast-start.mjs.map
