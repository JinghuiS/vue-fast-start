<script setup lang="ts">
import { FsForm, FsFormItem, useFsForm, useModal } from "@fast-start/core"
import { If } from "@fast-start/control-flow"

import { ElTableColumn, ElButton, ElInput } from "element-plus"

import { object, string, minLength, forward, custom, type Input, nullish } from "valibot"
import { toTypedSchema } from "@vee-validate/valibot"
import Modal from "./Modal.vue"

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
const show = () => {
    modal.show({ text: "1111" }).then((msg) => {
        console.log(msg)
    })
}
</script>

<template>
    <ElButton @click="show">测试</ElButton>
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
</template>
