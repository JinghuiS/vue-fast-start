const textColorVar = [
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
].map((item) => {
    return {
        name: "color-" + item.name,
        value: item.value
    }
})
export const textVar = [...textColorVar]
