<template>
  <div class="container mx-auto px-2 h-16 grid grid-cols-3 place-items-center w-full">
    <div class="w-full col-start-1 place-items-left">
      <a @click="$router.go(-1)" class="block w-10 text-center">
        <font-awesome-icon icon="chevron-left" />
      </a>
    </div>
    
    <div class="col-start-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'TitleBar'
})
</script>

<style>
</style>