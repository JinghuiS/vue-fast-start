<script setup lang="ts">
import { FastStars, useMenuStore, type FSMenuType } from "@fast-start/core"
import { If } from "@fast-start/control-flow"
import { ref } from "vue"
type AType = "a" | "b" | "c"
const show = ref(true)
const { setMenu } = useMenuStore()

const testA = ref<AType>("a")

const list = ref<{ a: AType }[]>([
    {
        a: "a"
    },
    {
        a: "b"
    },
    {
        a: "c"
    }
])

const menu = ref<FSMenuType[]>([
    {
        path: "/",
        name: "Home",
        icon: "HomeOutlined",
        children: [
            {
                path: "/test",
                name: "Test"
            },
            {
                path: "/test2",
                name: "Test2"
            },
            {
                path: "/test3",
                name: "Test3",
                children: [
                    {
                        path: "/test3-1",
                        name: "Test3-1"
                    }
                ]
            },
            {
                path: "/test4",
                name: "Test4",
                children: [
                    {
                        path: "/test5",
                        name: "Test5"
                    }
                ]
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        icon: "HomeOutlined",
        children: [
            {
                path: "/about/test",
                name: "Test"
            }
        ]
    },
    {
        path: "/404",
        name: "404",
        icon: "HomeOutlined",
        children: []
    }
])

const add = (item: AType) => {
    testA.value = item
}
</script>

<template>
    <FastStars :menu="menu" />
</template>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
