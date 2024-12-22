---
head:
  - - meta
    - name: description
      content: react Flame
  - - meta
    - name: keywords
      content: react Flame
outline: [1, 6]
---

# 简介

<script setup>
import { ref,Teleport } from 'vue'
import CustomComponent from './demo.vue' 
import Modal from '../components/Modal.vue' 
const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<div id="modal" :class="$style.box">
  你hi奥
  <button  @click="count++">Increment</button>
  <em>77777777777</em>
</div>
<em>999999</em>
        <Modal age="5555566666" />

<CustomComponent />
<ClientOnly>
  <Teleport to="#modal">
    <div>
        <h2>我说是就是</h2>
    </div>
  </Teleport>
</ClientOnly>

<style module lang='sass'>
.box
  font-size: 20px
  button
    color: red
  em
    font-size: 40px

</style>
