import { defineComponent as p, renderSlot as r, computed as k, openBlock as c, createElementBlock as f, Fragment as d, renderList as y, normalizeProps as x, mergeProps as B, createVNode as s, withCtx as n, resolveComponent as I, createBlock as S, unref as a, createTextVNode as _, toDisplayString as h } from "vue";
import { ElMenuItem as g, ElSubMenu as F } from "element-plus";
const w = /* @__PURE__ */ p({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(m) {
    const o = (e) => e;
    return (e, t) => e.when ? r(e.$slots, "default", {
      key: 0,
      value: o(e.when)
    }) : r(e.$slots, "fallback", { key: 1 });
  }
}), v = /* @__PURE__ */ p({
  name: "For",
  __name: "For",
  props: {
    echo: {},
    rowKey: {}
  },
  setup(m) {
    const o = m, e = k(() => o.echo);
    return (t, u) => (c(), f(
      d,
      null,
      [
        (c(!0), f(
          d,
          null,
          y(t.echo, (l) => r(t.$slots, "default", x(B({ key: t.rowKey }, l)))),
          128
          /* KEYED_FRAGMENT */
        )),
        s(w, {
          when: !e.value || !e.value.length || e.value.length === 0
        }, {
          default: n(() => [
            r(t.$slots, "fallback")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["when"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), C = /* @__PURE__ */ p({
  name: "FsSideBarItem",
  __name: "Item",
  props: {
    items: {}
  },
  setup(m) {
    return (o, e) => {
      const t = I("FsSideBarItem");
      return c(), S(a(v), {
        echo: o.items,
        "row-key": "path"
      }, {
        default: n(({ path: u, children: l, name: i }) => [
          s(a(w), {
            when: l && l.length > 0
          }, {
            fallback: n(() => [
              s(a(g), {
                class: "fast-start-menu-item",
                index: u
              }, {
                default: n(() => [
                  _(
                    h(i),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["index"])
            ]),
            default: n(() => [
              s(a(F), {
                class: "fast-start-menu-item-title",
                index: u
              }, {
                title: n(() => [
                  _(
                    h(i),
                    1
                    /* TEXT */
                  )
                ]),
                default: n(() => [
                  s(t, { items: l }, null, 8, ["items"])
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
});
export {
  C as default
};
//# sourceMappingURL=Item.mjs.map
