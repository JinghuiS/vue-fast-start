import { effectScope as u, ref as a, readonly as l } from "vue";
function c(e) {
  let t = !1, o;
  const n = u(!0);
  return (...r) => (t || (o = n.run(() => e(...r)), t = !0), o);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const f = c(() => {
  const e = a({
    menu: []
  });
  function t(o) {
    e.value.menu = o;
  }
  return {
    state: l(e),
    setMenu: t
  };
});
export {
  f as useMenuStore
};
//# sourceMappingURL=menu.mjs.map
