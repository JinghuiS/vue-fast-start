<script setup lang="ts">
import { useResourceContext, FsDataTable, FsForm, FsFormItem } from "@fast-start/core"
import { Switch, Match } from "@fast-start/control-flow"
import { ElTableColumn, ElButton, ElInput } from "element-plus"
import { ref } from "vue"
import { object, string, minLength, forward, custom } from "valibot"
import { toTypedSchema } from "@vee-validate/valibot"

const validationSchema = toTypedSchema(
    object(
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
)
</script>

<template>
    <FsForm label-position="top" :validation-schema="validationSchema">
        <FsFormItem label="测试" prop="test">
            <ElInput />
        </FsFormItem>
        <FsFormItem label="名字" prop="name">
            <ElInput />
        </FsFormItem>
    </FsForm>
</template>
