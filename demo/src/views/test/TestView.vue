<script setup lang="ts">
import { useResourceContext, FsDataTable } from "@fast-start/core"
import { Switch, Match } from "@fast-start/control-flow"
import { ElTableColumn, ElButton, ElInput } from "element-plus"
import { ref } from "vue"

const res = ref("1")
</script>

<template>
    <Switch>
        <!-- <template #fallback>1</template> -->

        <Match :when="res === '1'">
            <ElInput />
        </Match>
    </Switch>
</template>
