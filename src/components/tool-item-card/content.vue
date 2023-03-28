<template>
  <div class="link-content">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({});
</script>
<style scoped>
.link-content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}
</style>
