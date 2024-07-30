<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Button from './components/button/Button.vue';
  import type { buttonInstance } from './components/button/types';
  const buttonRef = ref<buttonInstance | null>(null)
  onMounted(() => {
    if(buttonRef.value) {
      console.log(buttonRef.value.ref)
    }
  })
  const btnclick = () => {
    alert("ppp")
  }
</script>

<template>
  <!-- <Button type="primary" disabled plain ref="buttonRef">test</Button> -->
  <Button plain @click="btnclick">plain button</Button>
  <Button round>round button</Button>
  <Button circle>circle</Button>
  <Button disabled>disabled</Button>
  <hr>
  <h1>111111</h1>
  <h2>111111</h2>
  <h3>111111</h3>
  <a href="">11111</a>
  <hr>
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button><br/><br/>
  <Button type="primary" plain>Primary</Button>
  <Button type="success" plain>Success</Button>
  <Button type="info" plain>Info</Button>
  <Button type="warning" plain>Warning</Button>
  <Button type="danger" plain>Danger</Button>
  <hr>
  <Button size="large">Large</Button>
  <Button size="small">Small</Button><br/><br/>
  <hr>
</template>


<style scoped>

</style>