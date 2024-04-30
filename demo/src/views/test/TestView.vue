<script setup lang="ts">
import {
    FsForm,
    FsFormItem,
    useFsForm,
    useModal,
    useFsDataTable,
    FsTableActionColumn,
    FsData
} from "@fast-start/core"
import { If } from "@fast-start/control-flow"

import { ElTableColumn, ElButton, ElInput } from "element-plus"

import { object, string, minLength, forward, custom, type Input, nullish } from "valibot"
import { toTypedSchema } from "@vee-validate/valibot"
import Modal from "./Modal.vue"
import { ref } from "vue"
import { onMounted } from "vue"
import { useFsData } from "@fast-start/core"

const modal = useModal(Modal)
const validationSchema = object(
    {
        test: string("请填写", [minLength(1, "必须填写")]),
        name: nullish(string())
    },
    [
        forward(
            custom((val) => val.test === val.name, "名字和测试名字不相同"),
            ["name"]
        )
    ]
)

const veeValidationSchema = toTypedSchema(validationSchema)

const [fsForm] = useFsForm<Input<typeof validationSchema>>()

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

const [fsData] = useFsData()

const change = () => {
    fsData.value.reload()
}
</script>

<template>
    <ElButton @click="aclList.acl1 = aclList.acl1 === 'test' ? 'test1' : 'test'"
        >展示 acl1
    </ElButton>

    <ElButton v-acl="aclList.acl" @click="show">测试</ElButton>
    <ElButton v-acl="aclList.acl1" @click="change">测试11</ElButton>
    <FsForm
        ref="fsForm"
        label-position="top"
        :validation-schema="veeValidationSchema"
        v-slot="{ values }"
    >
        <FsFormItem required label="测试" prop="test">
            <ElInput />
        </FsFormItem>
        <If :when="values.test">
            <FsFormItem label="名字" prop="name">
                <ElInput />
            </FsFormItem>
        </If>
    </FsForm>

    <FsData ref="fsData" :request="request" v-slot="{ data, loading }">
        <el-table border :data="data" row-key="id" v-loading="loading">
            <ElTableColumn reserve-selection type="selection" width="55" />
            <ElTableColumn prop="name" label="1Date" />
        </el-table>
    </FsData>
</template>
