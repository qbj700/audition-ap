<template>
  <div class="h-screen grid grid-rows-4 place-items-center text-center">
    
    <div class="row-start-2">
      <div class="text-4xl font-bold">Audictionary</div>
      <div>(로고)</div>
    </div>
    
    <div class="row-start-4 w-64">
      <div class="gray-color text-right text-xs mb-1">
        <router-link to="/usr/member/login">
        제작자로 로그인하기
        </router-link>
      </div>
      <div class="button mb-4 flex justify-center items-center h-8">
        <router-link to="/usr/member/login" class="w-full">
        로그인
        </router-link>
      </div>
      <div class="button flex justify-center items-center h-8">
        <router-link to="/usr/member/joinTos" class="w-full">
        회원가입
        </router-link>
      </div>
    </div>
    
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OpenPage'
})
</script>

<style scoped>
  .button{
  background-color:#dadada;
  }
  .gray-color{
    color: #50555C;
  }

</style>

<style>
</style>