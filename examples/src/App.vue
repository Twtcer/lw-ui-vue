<template>
    <div class="site">
      <h1>组件库测试站点 lw-ui-vue</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <lw-foo :msg="msg"></lw-foo>
    <el-button type="danger" @click="handleClick">测试</el-button>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import * as utils from '@lw8/utils'

const msg = ref('hello world')

const handleClick = () => {
  utils.testLog('emit click!')
}
</script>

<style scoped last="scss">
.site
{
  padding: 20px;
}
</style>
