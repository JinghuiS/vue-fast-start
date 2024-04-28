import { useRouter } from "vue-router"
import { useAclStore } from "../store/acl"

export type CheckAclType = {
    ability: string
    fallback: string
}

export const useCheckAcl = (checkAcl: CheckAclType) => {
    const router = useRouter()
    const { ability, fallback } = checkAcl

    const aclStore = useAclStore()

    const haveAbility = aclStore.checkPermission(ability)

    if (!haveAbility) {
        router.push({ path: fallback })
    }

    return haveAbility
}
