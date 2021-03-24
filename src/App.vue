<template>
  <header v-if="globalShare.isMainLayoutVisible" class="h-15 bg-gray-100">
    <div class="container px-2 mx-auto flex h-full">
      <router-link to="/" class="h-full w-full flex items-center justify-center">
        <span>Audictionary</span>
      </router-link>

      <nav class="hidden md:block justify-end">
        <ul class="flex h-full w-full">
          <li>
            <router-link to="/usr/member/login" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              로그인
            </router-link>
          </li>
          <li>
            <router-link to="/usr/member/join" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              회원가입
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <router-view></router-view>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App',
  props: {
    globalShare: {
      type: Object,
      required: true
    }
  }
})
</script>

<style>
html, body {
  margin:0;
}
</style>