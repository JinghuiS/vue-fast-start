<script setup lang="ts">
import {
    FsForm,
    FsFormItem,
    useModal,
    FsData,
    FsSearchForm,
    useFsForm,
    FsFilter
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
const validationSchema = object({
    test: string("请填写", [minLength(1, "必须填写")])
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

const request = (name: string, config: any) => {
    console.log(name, config)
    return new Promise<{ data: any; total: number }>((rs) => {
        setTimeout(() => {
            rs({
                data: [{ id: 1, name: 1 }],
                total: 1
            })
        }, 1000)
    })
}

const filter = (v: any) => {
    console.log(v)
}
const dataFilter = [
    {
        id: 1,
        title: "小米商城",
        children: [
            {
                id: 11,
                title: "小米商城"
            },
            {
                id: 12,
                title: "米家优品",
                disabled: true
            }
        ]
    },
    {
        id: 2,
        title: "米家有品",
        children: [
            {
                id: 21,
                title: "五彩城店",
                children: [
                    {
                        id: "小米9",
                        title: "小米9"
                    },
                    {
                        id: "小米MIXS",
                        title: "小米MIXS"
                    },
                    {
                        id: "小米8",
                        title: "小米8"
                    }
                ]
            },
            {
                id: 22,
                title: "清河店"
            },
            {
                id: 23,
                title: "西三旗店"
            }
        ]
    },

    {
        id: 3,
        title: "京东商城",
        children: [
            {
                id: 31,
                title: "小米直营",
                children: [
                    {
                        id: "线下KA",
                        title: "线下KA"
                    }
                ]
            }
        ]
    }
]
</script>

<template>
    <ElButton @click="show">11</ElButton>
    <FsData
        ref="fsData"
        :request="request"
        v-slot="{ data, loading, setFilter, reload, defaultFilter }"
        :pagination="{}"
    >
        <FsSearchForm
            :initial-values="defaultFilter"
            @search="setFilter($event), reload()"
            label-position="left"
            :loading="loading"
            :validation-schema="veeValidationSchema"
        >
            <FsFormItem required label="测试" prop="test">
                <ElInput />
            </FsFormItem>
        </FsSearchForm>
        <el-table border :data="data" row-key="id" v-loading="loading">
            <ElTableColumn reserve-selection type="selection" width="55" />
            <ElTableColumn prop="name" label="1Date" />
        </el-table>
    </FsData>
    <FsFilter
        :label="['渠道', '分店', '机型']"
        @change="
            (v, item) => {
                console.log(v, item)
            }
        "
        :data="dataFilter"
    />
</template>
