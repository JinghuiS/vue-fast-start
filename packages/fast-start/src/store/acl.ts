import { createGlobalState } from "@vueuse/core"
import { readonly, ref } from "vue"

export const useAclStore = createGlobalState(() => {
    const aclList = ref<string[]>([])

    const checkPermission = (permission: string) => {
        return aclList.value.includes(permission)
    }
    const setPermission = (permissionList: string[]) => {
        aclList.value = permissionList
    }

    return {
        aclList: readonly(aclList),
        checkPermission,
        setPermission
    }
})
