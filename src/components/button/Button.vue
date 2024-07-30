<!-- <script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "VButton"
})
</script> -->
<script setup lang="ts">
defineOptions({
  name: "VButton"
})
import { ref } from 'vue';
import type { ButtonProps } from './types';
  withDefaults(defineProps<ButtonProps>(), {
    nativeType: "button"
  })
  const _ref = ref<HTMLButtonElement>()
  defineExpose({
    ref: _ref
  })
</script>

<template>
  <button
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    ref="_ref"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>


<style>
</style>