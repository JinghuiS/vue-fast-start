<script setup lang="ts">
import { useResourceContext, FsDataTable, FsForm, FsFormItem, useFsForm } from "@fast-start/core"
import { If } from "@fast-start/control-flow"
import { Switch, Match } from "@fast-start/control-flow"
import { ElTableColumn, ElButton, ElInput } from "element-plus"
import { computed, onMounted, ref } from "vue"
import { object, string, minLength, forward, custom, type Input } from "valibot"
import { toTypedSchema } from "@vee-validate/valibot"

const validationSchema = object(
    {
        test: string([minLength(1, "必须填写")]),
        name: string([minLength(1, "必须填写")])
    },
    [
        forward(
            custom((input) => input.test === input.name, "测试和名字不匹配"),
            ["name"]
        )
    ]
)

const veeValidationSchema = toTypedSchema(validationSchema)

const [fsForm] = useFsForm<Input<typeof validationSchema>>()
</script>

<template>
    <FsForm
        ref="fsForm"
        label-position="top"
        :validation-schema="veeValidationSchema"
        v-slot="{ values }"
    >
        <FsFormItem label="测试" prop="test">
            <ElInput />
        </FsFormItem>
        <If :when="values.test === '1'">
            <FsFormItem label="名字" prop="name">
                <ElInput />
            </FsFormItem>
        </If>
    </FsForm>
</template>
