const n = [
  {
    name: "primary",
    value: "rgb(0,100,250)"
  },
  {
    name: "primary-light-3",
    value: "rgb(50,149,251)"
  },
  {
    name: "primary-light-5",
    value: "rgb(101,178,252)"
  },
  {
    name: "primary-light-7",
    value: "rgb(152,205,253)"
  },
  {
    name: "primary-light-8",
    value: "rgb(203,231,254)"
  },
  {
    name: "primary-light-9",
    value: "rgb(234,245,255)"
  }
], l = [
  {
    name: "success",
    value: "rgb(59,179,70)"
  },
  {
    name: "success-light-3",
    value: "rgb(90,194,98)"
  },
  {
    name: "success-light-5",
    value: "rgb(125,209,130)"
  },
  {
    name: "success-light-7",
    value: "rgb(164,224,167)"
  },
  {
    name: "success-light-8",
    value: "rgb(208,240,209)"
  },
  {
    name: "success-light-9",
    value: "rgb(236,247,236)"
  }
], g = [
  {
    name: "warning",
    value: "rgb(250,200,0)"
  },
  {
    name: "warning-light-3",
    value: "rgb(251,218,50)"
  },
  {
    name: "warning-light-5",
    value: "rgb(252,232,101)"
  },
  {
    name: "warning-light-7",
    value: "rgb(253,243,152)"
  },
  {
    name: "warning-light-8",
    value: "rgb(254,251,203)"
  },
  {
    name: "warning-light-9",
    value: "rgb(255,253,234)"
  }
], m = [
  {
    name: "danger",
    value: "rgb(249,57,32)"
  },
  {
    name: "danger-light-3",
    value: "rgb(250,102,76)"
  },
  {
    name: "danger-light-5",
    value: "rgb(250,144,120)"
  },
  {
    name: "danger-light-7",
    value: "rgb(251,183,165)"
  },
  {
    name: "danger-light-8",
    value: "rgb(252,221,210)"
  },
  {
    name: "danger-light-9",
    value: "rgb(254,242,237)"
  }
], t = [
  {
    name: "error",
    value: "rgb(249,57,32)"
  },
  {
    name: "error-light-3",
    value: "rgb(250,102,76)"
  },
  {
    name: "error-light-5",
    value: "rgb(250,144,120)"
  },
  {
    name: "error-light-7",
    value: "rgb(251,183,165)"
  },
  {
    name: "error-light-8",
    value: "rgb(252,221,210)"
  },
  {
    name: "error-light-9",
    value: "rgb(254,242,237)"
  }
], u = [
  {
    name: "info",
    value: "rgb(107,112,117)"
  },
  {
    name: "info-light-3",
    value: "rgb(136,141,146)"
  },
  {
    name: "info-light-5",
    value: "rgb(167,171,176)"
  },
  {
    name: "info-light-7",
    value: "rgb(198,202,205)"
  },
  {
    name: "info-light-8",
    value: "rgb(230,232,234)"
  },
  {
    name: "info-light-9",
    value: "rgb(249,249,249)"
  }
], i = [
  ...n,
  ...l,
  ...g,
  ...m,
  ...t,
  ...u
], o = [
  {
    name: "primary",
    value: "rgb(28,31,35)"
  },
  {
    name: "regular",
    value: "rgba(28,31,35,.8)"
  },
  {
    name: "secondary",
    value: "rgba(28,31,35,.62)"
  },
  {
    name: "placeholder",
    value: "rgba(28,31,35,.38)"
  }
].map((e) => ({
  name: "color-" + e.name,
  value: e.value
})), v = [...o], b = [
  {
    name: "color",
    value: i
  },
  {
    name: "text",
    value: v
  }
], s = () => {
  const e = document.documentElement;
  for (const a of b)
    for (const r of a.value)
      e.style.setProperty(`--el-${a.name}-${r.name}`, r.value);
};
export {
  s as initTheme
};
//# sourceMappingURL=index.mjs.map
