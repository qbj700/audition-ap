<template>

  <TitleBar>회원가입 페이지</TitleBar>

  <div class="container px-2 mx-auto grid grid-rows-5 h-screen place-items-center">
    <div class="row-start-1 h-28 w-full">
      <div class="w-full h-full ">
        <router-link class="cbg-gray h-full flex flex-col justify-center items-center" to="/usr/ap/join">
          <span>지원자 회원가입</span>
          <div class="h-1 w-80 bg-white mt-6"></div>
        </router-link>
      </div>
    </div>

    <div class="row-start-2 h-28 w-full">
      <div class="w-full h-full ">
        <router-link class="cbg-gray h-full flex flex-col justify-center items-center" to="/usr/pd/join">
          <span>제작자 회원가입</span>
          <div class="h-1 w-80 bg-white mt-6"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JoinSelectPage'
})
</script>

<style scoped>
.cbg-gray {
  background-color: #dadada;
}
</style>

<style>
</style>