<script setup lang="ts">
import { useResourceContext, FsDataTable } from "@fast-start/core"
import { ElTableColumn, ElButton, ElInput } from "element-plus"
</script>

<template>
    <FsDataTable style="width: 100%">
        <ElTableColumn prop="name" label="Date" />
    </FsDataTable>
    <ElButton>default</ElButton>
    <ElButton type="danger">danger</ElButton>
    <ElButton type="success">danger</ElButton>
    <ElButton type="primary"> primary </ElButton>
    <ElButton type="warning">warning</ElButton>
</template>
