# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

<script setup>
import { ref } from 'vue'

const code = [{name:'ex-popup-show-dialog',type:'vue'},{name:'ex-popup-dialog',type:'vue'}]
</script>

<ex-code comp="ex-popup-show-dialog" :code-list="code" title="Basic" >
测试
</ex-code>


