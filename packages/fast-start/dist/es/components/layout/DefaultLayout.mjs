import { defineComponent as u, openBlock as r, createBlock as m, unref as n, normalizeStyle as d, withCtx as s, createTextVNode as f, renderSlot as i, computed as k, createElementBlock as p, Fragment as x, renderList as g, normalizeProps as E, mergeProps as $, createVNode as l, resolveComponent as v, toDisplayString as S, effectScope as b, ref as B, readonly as I } from "vue";
import { ElHeader as M, ElMenuItem as F, ElSubMenu as H, ElAside as C, ElMenu as G, ElMain as z, ElContainer as D } from "element-plus";
import { RouterView as T } from "vue-router";
const h = 60, V = /* @__PURE__ */ u({
  __name: "Header",
  setup(a) {
    return (t, e) => (r(), m(n(M), {
      class: "fast-start-layout-header",
      style: d({ height: n(h) })
    }, {
      default: s(() => [
        f(" header ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
}), w = /* @__PURE__ */ u({
  name: "If",
  __name: "If",
  props: {
    when: { type: [null, Boolean] }
  },
  setup(a) {
    const t = (e) => e;
    return (e, o) => e.when ? i(e.$slots, "default", {
      key: 0,
      value: t(e.when)
    }) : i(e.$slots, "fallback", { key: 1 });
  }
}), A = /* @__PURE__ */ u({
  name: "For",
  __name: "For",
  props: {
    echo: {},
    rowKey: {}
  },
  setup(a) {
    const t = a, e = k(() => t.echo);
    return (o, c) => (r(), p(
      x,
      null,
      [
        (r(!0), p(
          x,
          null,
          g(o.echo, (_) => i(o.$slots, "default", E($({ key: o.rowKey }, _)))),
          128
          /* KEYED_FRAGMENT */
        )),
        l(w, {
          when: !e.value || !e.value.length || e.value.length === 0
        }, {
          default: s(() => [
            i(o.$slots, "fallback")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["when"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), K = /* @__PURE__ */ u({
  name: "FsSideBarItem",
  __name: "Item",
  props: {
    items: {}
  },
  setup(a) {
    return (t, e) => {
      const o = v("FsSideBarItem");
      return r(), m(n(A), {
        echo: t.items,
        "row-key": "path"
      }, {
        default: s(({ path: c, children: _, name: y }) => [
          l(n(w), {
            when: _ && _.length > 0
          }, {
            fallback: s(() => [
              l(n(F), {
                class: "fast-start-menu-item",
                index: c
              }, {
                default: s(() => [
                  f(
                    S(y),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["index"])
            ]),
            default: s(() => [
              l(n(H), {
                class: "fast-start-menu-item-title",
                index: c
              }, {
                title: s(() => [
                  f(
                    S(y),
                    1
                    /* TEXT */
                  )
                ]),
                default: s(() => [
                  l(o, { items: _ }, null, 8, ["items"])
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
function L(a) {
  let t = !1, e;
  const o = b(!0);
  return (...c) => (t || (e = o.run(() => a(...c)), t = !0), e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const N = L(() => {
  const a = B({
    menu: []
  });
  function t(e) {
    a.value.menu = e;
  }
  return {
    state: I(a),
    setMenu: t
  };
}), P = /* @__PURE__ */ u({
  __name: "SideBar",
  setup(a) {
    const { state: t } = N();
    return (e, o) => (r(), m(n(C), {
      class: "fast-start-aside",
      width: "230px",
      style: d({ height: `calc(100vh - ${n(h)}px)` })
    }, {
      default: s(() => [
        l(n(G), { class: "fast-start-menu" }, {
          default: s(() => [
            l(K, {
              items: n(t).menu
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
}), R = /* @__PURE__ */ u({
  __name: "Main",
  setup(a) {
    return (t, e) => (r(), m(n(z), {
      class: "fast-start-layout-main",
      style: d({
        height: `calc(100vh - ${n(h)}px) `
      })
    }, {
      default: s(() => [
        l(n(T))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["style"]));
  }
}), J = /* @__PURE__ */ u({
  __name: "DefaultLayout",
  setup(a) {
    return (t, e) => (r(), p("div", null, [
      l(V),
      l(n(D), null, {
        default: s(() => [
          l(P),
          l(R)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
});
export {
  J as default
};
//# sourceMappingURL=DefaultLayout.mjs.map
