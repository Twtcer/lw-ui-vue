<template>
  <lw-foo :msg="msg"></lw-foo>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello custom component')
</script>
