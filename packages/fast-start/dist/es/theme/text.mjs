const e = [
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
].map((a) => ({
  name: "color-" + a.name,
  value: a.value
})), r = [...e];
export {
  r as textVar
};
//# sourceMappingURL=text.mjs.map
