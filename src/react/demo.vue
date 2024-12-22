<template>
  <Modal age="100000" />
  <div class="demo" @click="add">
    react demo
    <p>123</p>
  </div>
  <ol>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ol>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Modal from "../components/Modal.vue";
const list = ref([
  {
    name: "react demo",
    id: 1,
  },
]);
function add() {
  list.value.push({
    name: "react demo",
    id: list.value.length,
  });
}
</script>
<style scoped lang="scss">
.demo {
  color: red;
  p {
    color: green;
  }
}
</style>
