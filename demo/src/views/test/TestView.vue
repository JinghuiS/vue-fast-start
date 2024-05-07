<script setup lang="ts">
import { FsForm, FsFormItem, useModal, FsData, FsSearchForm, useFsForm } from "@fast-start/core"
import { If } from "@fast-start/control-flow"

import { ElTableColumn, ElButton, ElInput } from "element-plus"

import { object, string, minLength, forward, custom, type Input, nullish } from "valibot"
import { toTypedSchema } from "@vee-validate/valibot"
import Modal from "./Modal.vue"
import { ref } from "vue"
import { onMounted } from "vue"
import { useFsData } from "@fast-start/core"

const modal = useModal(Modal)
const validationSchema = object({
    test: string("请填写", [minLength(1, "必须填写")]),
    name: nullish(string()),
    test1: string("请填写", [minLength(1, "必须填写")]),
    test2: nullish(string()),
    test3: nullish(string()),
    test4: nullish(string())
})
const [] = useFsForm()
const veeValidationSchema = toTypedSchema(validationSchema)

const check = ref([
    {
        id: 1
    },
    {
        id: 5
    }
])

const show = () => {
    modal
        .show({
            text: "1"
        })
        .then((msg) => {
            console.log(msg)
        })
}

const aclList = ref({
    acl: "test",
    acl1: "test"
})

const request = () => {
    return new Promise<{ data: any; total: number }>((rs) => {
        setTimeout(() => {
            rs({
                data: [{ id: 1, name: 1 }],
                total: 1
            })
        }, 1000)
    })
}
</script>

<template>
    <FsSearchForm label-position="left" :validation-schema="veeValidationSchema">
        <FsFormItem required label="测试" prop="test">
            <ElInput />
        </FsFormItem>
        <FsFormItem required label="测试1" prop="test1">
            <ElInput />
        </FsFormItem>
        <FsFormItem required label="测试2" prop="test2">
            <ElInput />
        </FsFormItem>
        <FsFormItem required label="测试3" prop="test3">
            <ElInput />
        </FsFormItem>
        <FsFormItem required label="测试4" prop="test4">
            <ElInput />
        </FsFormItem>
    </FsSearchForm>

    <FsData ref="fsData" :request="request" v-slot="{ data, loading }">
        <el-table border :data="data" row-key="id" v-loading="loading">
            <ElTableColumn reserve-selection type="selection" width="55" />
            <ElTableColumn prop="name" label="1Date" />
        </el-table>
    </FsData>
</template>
