import { FunctionDirective, ObjectDirective, watch, type DirectiveBinding } from "vue"
import { useAclStore } from "../store/acl"
type VNodeTreeCache = {
    parentEl: HTMLElement | null
    parentNode: ParentNode | null
    comment?: Comment
}

function isCommentElement(el: any) {
    if (el && el.nodeType === 8) {
        return true
    }
    return false
}

export const vAcl = () => {
    const { checkPermission } = useAclStore()

    const name: string = "acl"
    const completeDirectiveName = `v-${name}`

    const elMaps = new WeakMap<any, VNodeTreeCache>()

    let cacheEl: any
    let cacheBinding: any

    const switchStatusOfIf = (el: any, value: string) => {
        const cache = elMaps.get(el) as VNodeTreeCache

        // eslint-disable-next-line prefer-const
        let { parentEl, comment } = cache
        if (checkPermission(value)) {
            // 显示
            if (comment && comment.nodeType === 8 && comment.nodeValue === completeDirectiveName) {
                parentEl?.replaceChild(el, comment)
                elMaps.set(el, {
                    parentEl: el.parentElement,
                    parentNode: el.parentNode
                })
            }
        } else {
            if (comment) {
                return
            }
            // 隐藏
            comment = document.createComment(completeDirectiveName)
            parentEl?.replaceChild(comment, el)
            elMaps.set(el, { ...cache, comment })
        }
    }

    const directiveLifeCycle: ObjectDirective = {
        mounted(el: any, binding: DirectiveBinding<any>) {
            elMaps.set(el, {
                parentEl: el.parentElement,
                parentNode: el.parentNode
            })
            cacheEl = el
            cacheBinding = binding
            switchStatusOfIf(el, binding.value)
        },
        updated(el: any, binding: DirectiveBinding<any>) {
            cacheEl = el
            cacheBinding = binding
            switchStatusOfIf(el, binding.value)
        },
        unmounted(el: any) {
            cacheEl = el
            const { parentEl, comment } = elMaps.get(el) as VNodeTreeCache
            if (
                comment &&
                isCommentElement(comment) &&
                comment.nodeValue === completeDirectiveName
            ) {
                parentEl?.removeChild(comment)
            }
            elMaps.delete(el)
        }
    }

    return {
        name,
        directiveLifeCycle
    }
}
