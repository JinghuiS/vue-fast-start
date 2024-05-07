<script setup lang="ts">
import { ElContainer } from "element-plus"

import Header from "./components/Header.vue"
import SideBar from "./components/side-bar/SideBar.vue"
import Main from "./components/Main.vue"
import {} from "./consts"
</script>

<template>
    <Header>
        <slot name="header" />
    </Header>
    <ElContainer>
        <SideBar />
        <Main />
    </ElContainer>
</template>
