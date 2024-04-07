import { defineComponent as m, renderSlot as c, computed as k, openBlock as i, createElementBlock as p, Fragment as d, renderList as w, normalizeProps as x, mergeProps as b, createVNode as l, withCtx as o, resolveComponent as g, createBlock as y, unref as a, createTextVNode as _, toDisplayString as h, effectScope as B, ref as I, readonly as v, normalizeStyle as E } from "vue";
import { ElMenuItem as F, ElSubMenu as $, ElAside as M, ElMenu as G } from "element-plus";
const S = /* @__PURE__ */ m({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(s) {
    const t = (e) => e;
    return (e, n) => e.when ? c(e.$slots, "default", {
      key: 0,
      value: t(e.when)
    }) : c(e.$slots, "fallback", { key: 1 });
  }
}), z = /* @__PURE__ */ m({
  name: "For",
  __name: "For",
  props: {
    echo: {},
    rowKey: {}
  },
  setup(s) {
    const t = s, e = k(() => t.echo);
    return (n, r) => (i(), p(
      d,
      null,
      [
        (i(!0), p(
          d,
          null,
          w(n.echo, (u) => c(n.$slots, "default", x(b({ key: n.rowKey }, u)))),
          128
          /* KEYED_FRAGMENT */
        )),
        l(S, {
          when: !e.value || !e.value.length || e.value.length === 0
        }, {
          default: o(() => [
            c(n.$slots, "fallback")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["when"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), C = /* @__PURE__ */ m({
  name: "FsSideBarItem",
  __name: "Item",
  props: {
    items: {}
  },
  setup(s) {
    return (t, e) => {
      const n = g("FsSideBarItem");
      return i(), y(a(z), {
        echo: t.items,
        "row-key": "path"
      }, {
        default: o(({ path: r, children: u, name: f }) => [
          l(a(S), {
            when: u && u.length > 0
          }, {
            fallback: o(() => [
              l(a(F), {
                class: "fast-start-menu-item",
                index: r
              }, {
                default: o(() => [
                  _(
                    h(f),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["index"])
            ]),
            default: o(() => [
              l(a($), {
                class: "fast-start-menu-item-title",
                index: r
              }, {
                title: o(() => [
                  _(
                    h(f),
                    1
                    /* TEXT */
                  )
                ]),
                default: o(() => [
                  l(n, { items: u }, null, 8, ["items"])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["index"])
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["when"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["echo"]);
    };
  }
}), H = 60;
function T(s) {
  let t = !1, e;
  const n = B(!0);
  return (...r) => (t || (e = n.run(() => s(...r)), t = !0), e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const A = T(() => {
  const s = I({
    menu: []
  });
  function t(e) {
    s.value.menu = e;
  }
  return {
    state: v(s),
    setMenu: t
  };
}), N = /* @__PURE__ */ m({
  __name: "SideBar",
  setup(s) {
    const { state: t } = A();
    return (e, n) => (i(), y(a(M), {
      class: "fast-start-aside",
      width: "230px",
      style: E({ height: `calc(100vh - ${a(H)}px)` })
    }, {
      default: o(() => [
        l(a(G), { class: "fast-start-menu" }, {
          default: o(() => [
            l(C, {
              items: a(t).menu
            }, null, 8, ["items"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
});
export {
  N as default
};
//# sourceMappingURL=SideBar.mjs.map
