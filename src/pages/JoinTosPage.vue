<template>

  <TitleBar>회원가입 페이지</TitleBar>

  <div class="container px-2 mx-auto">

    <div class="text-center gray-color text-sm">이용 약관 동의</div>
    <div class="h-1 w-full cbg-gray my-3"></div>

    <div>
      <div class="grid custom-grid my-3 gray-color text-xs">
        <input :checked="state.isCheck" ref="agreeCheckElRef" type="checkbox" class="ml-4">
        <div class="text-left">(필수) Audictionary 이용약관</div>
        <div class="detail text-center">자세히보기</div>
      </div>
      <div class="grid custom-grid my-3 gray-color text-xs">
        <input :checked="state.isCheck" ref="agreeCheckElRef" type="checkbox" class="ml-4">
        <div class="text-left">(필수) 개인정보 수집 및 이용에 대한 동의</div>
        <div class="detail text-center">자세히보기</div>
      </div>
      <div class="grid custom-grid my-3 gray-color text-xs">
        <input :checked="state.isCheck" ref="agreeCheckElRef" type="checkbox" class="ml-4">
        <div class="text-left">(필수) 개인정보의 제3자 제공에 대한 동의</div>
        <div class="detail text-center">자세히보기</div>
      </div>
    </div>

    <div class="h-1 w-full cbg-gray my-3"></div>

    <div class="grid custom-grid2 my-3 gray-color text-xs">
      <input @click="check" ref="agreeCheckElRef" type="checkbox" class="ml-4">
      <div class="text-left">(필수) 약관 내용을 숙지하였으며, 위 모든 약관에 동의합니다.</div>
    </div>

    <div class="grid grid-cols-2 place-items-center gap-6 text-center font-thin mt-8">
      <div class="w-full cbg-gray text-white">
        <router-link class="block w-full" to="/">동의하지않습니다.</router-link>
      </div>
      <div class="w-full bg-agree">
        <button class="w-full" type="button" @click="checkAndAgree">동의합니다.</button>
      </div>
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted, reactive } from 'vue'
import { Router } from 'vue-router'

export default defineComponent({
  name: 'JoinTosPage',
  props: {
    globalShare: {
      type: Object,
      required: true
    }
  },
  setup(props){
    const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;
    const agreeCheckElRef = ref<HTMLInputElement>();

    const state = reactive({
      isCheck: false
    });

    function check(){
      state.isCheck = !state.isCheck;
    }

    function checkAndAgree() {
      if ( agreeCheckElRef.value?.checked == false ) {
        alert('모든 필수 동의 약관에 체크해주시기 바랍니다.');
        return;
      }

      router.push('/usr/member/join')
    }
    return {
      checkAndAgree,
      agreeCheckElRef,
      state,
      check
    }
    
  }
})
</script>

<style scoped>
.cbg-gray{
  background-color: #dadada;
}

.gray-color{
  color: #50555C;
}

.custom-grid{
  grid-template-columns: 40px auto 80px;
}

.custom-grid2{
  grid-template-columns: 40px auto;
}

.detail {
  border:1px solid #dadada;
}

.bg-agree {
  background-color: #C85E5E;
  color: white;
}
</style>

<style>
</style>