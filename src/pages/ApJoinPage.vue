<template>
  
<form v-on:submit.prevent="checkAndJoin">
  <section v-show="state.step1" class="section-1">
    <TitleBar>회원가입 페이지</TitleBar>
    <div class="container mx-auto">
      <div class="px-6 py-6">
        
          <FormRow title="아이디 (이메일)">
            <input ref="loginIdElRef" class="form-row-input" type="email" placeholder="@gmail.com">
          </FormRow>
          <FormRow title="비밀번호">
            <input ref="loginPwElRef" class="form-row-input" type="password">
          </FormRow>
          <FormRow title="비밀번호 확인">
            <input ref="loginPwConfirmElRef" class="form-row-input" type="password">
          </FormRow>
          <FormRow title="이름">
            <input ref="nameElRef" class="form-row-input" type="text">
          </FormRow>
          <FormRow title="영문이름">
            <input ref="engNameElRef" class="form-row-input" type="text">
          </FormRow>
          <FormRow title="성별">
            <div class="flex">
              <label class="w-full h-12">
                <input ref="genderElRef" class="form-row-input" name="gender" type="radio" v-model="state.genderPicked" value="남자">
                <span>남자</span>
              </label>
              <label class="w-full h-12">
                <input ref="genderElRef" class="form-row-input" name="gender" type="radio" v-model="state.genderPicked" value="여자">
                <span>여자</span>
              </label>
            </div>
          </FormRow>
          
          <FormRow title="생년월일">
            <input ref="regNumberElRef" class="form-row-input bg-white" type="date">
          </FormRow>
          <FormRow title="주소">
            <div class="grid grid-cols-2 grid-rows-3 gap-1 place-items-center">
              <input class="form-row-input" type="text">
              <button @click="addrSearch" class="border border-1 w-20 h-full" type="button">주소검색</button>
              <div class="col-start-1 col-end-3 w-full">
                <input ref="addressElRef" class="form-row-input" type="text" placeholder="도로명주소">
              </div>
              <input class="form-row-input" type="text" placeholder="상세주소">
              <input class="form-row-input" type="text" placeholder="참고항목">
            </div>
          </FormRow>
          <FormRow title="전화번호">
            <input ref="cellPhoneNoElRef" class="form-row-input" type="tel">
          </FormRow>

          <div class="cbg-gray flex justify-center items-center h-12 mt-8 rounded">
            <button type="button" @click="inputCheck" class="w-full h-full text-lg font-bold">다음단계</button>
          </div>
          
        
      </div>
    </div>
  </section>

  <section v-show="state.step2" class="section-2">
    <div class="container mx-auto px-2 h-16 grid grid-cols-3 place-items-center w-full">
      <div class="w-full col-start-1 place-items-left">
        <a @click="nextStep" class="block w-10 text-center">
          <font-awesome-icon icon="chevron-left" />
        </a>
      </div>
      
      <div class="col-start-2">
        프로필 설정
      </div>
    </div>

    <div class="container mx-auto">
      <div class="px-6 py-6">
        
          <FormRow title="닉네임">
            <input ref="nickNameElRef" class="form-row-input" type="text">
          </FormRow>
          <FormRow title="키">
            <input ref="feetElRef" class="form-row-input" type="number" pattern="[0-9]">
          </FormRow>
          <FormRow title="몸무게">
            <input ref="weightElRef" class="form-row-input" type="number">
          </FormRow>
          <FormRow title="피부색">
            <input ref="skinToneElRef" class="form-row-input" type="text">
          </FormRow>
          <FormRow title="쌍커풀 유무">
            <div class="flex">
              <label class="w-full h-12">
                <input ref="eyelidElRef" class="form-row-input" name="eyelid" type="radio" v-model="state.eyelidPicked" value=1>
                <span>있음</span>
              </label>
              <label class="w-full h-12">
                <input ref="eyelidElRef" class="form-row-input" name="eyelid" type="radio" v-model="state.eyelidPicked" value=2>
                <span>없음</span>
              </label>
            </div>
          </FormRow>
          <FormRow title="특징">
            <input ref="featureElRef" class="form-row-input" type="text">
          </FormRow>
          <FormRow title="커리어">
            <input ref="filmgraphyElRef" class="form-row-input" type="text">
          </FormRow>
          <FormRow title="희망분야">
            <input ref="jobAreaElRef" class="form-row-input" type="text">
          </FormRow>
          <FormRow title="소속 회사">
            <input ref="corpElRef" class="form-row-input" type="text">
          </FormRow>

          <div class="cbg-gray flex justify-center items-center h-12 mt-8 rounded">
            <button type="submit" class="w-full h-full text-lg font-bold">회원가입</button>
          </div>
          
      </div>
    </div>
  </section>

</form>


</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive } from 'vue'
import { MainApi } from '../apis'
import { Router } from 'vue-router';

export default defineComponent({
  name: 'ApJoinPage',
  props: {
    globalShare: {
      type: Object,
      required: true
    }
  },
  setup(props){
    const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;
    const mainApi:MainApi = getCurrentInstance()?.appContext.config.globalProperties.$mainApi;
    const loginIdElRef = ref<HTMLInputElement>();
    const loginPwElRef = ref<HTMLInputElement>();
    const loginPwConfirmElRef = ref<HTMLInputElement>();
    const nameElRef = ref<HTMLInputElement>();
    const engNameElRef = ref<HTMLInputElement>();
    const genderElRef = ref<HTMLInputElement>();
    const regNumberElRef = ref<HTMLInputElement>();
    const addressElRef = ref<HTMLInputElement>();
    const cellPhoneNoElRef = ref<HTMLInputElement>();

    const nickNameElRef = ref<HTMLInputElement>();
    const feetElRef = ref<HTMLInputElement>();
    const weightElRef = ref<HTMLInputElement>();
    const skinToneElRef = ref<HTMLInputElement>();
    const eyelidElRef = ref<HTMLInputElement>();
    const featureElRef = ref<HTMLInputElement>();
    const filmgraphyElRef = ref<HTMLInputElement>();
    const jobAreaElRef = ref<HTMLInputElement>();
    const corpElRef = ref<HTMLInputElement>();

    const state = reactive({
      step1: true,
      step2: false,
      genderPicked: '남자',
      eyelidPicked: 1
    })

    const nextStep = () => {
      state.step1 = !state.step1,
      state.step2 = !state.step2,

      window.scroll(0,0)
    }

    const inputCheck = () => {
      // 로그인아이디 체크
      if ( loginIdElRef.value == null ) {
        return;
      }
      const loginIdEl = loginIdElRef.value;
      loginIdEl.value = loginIdEl.value.trim();
      if ( loginIdEl.value.length == 0 ) {
        alert('로그인 아이디를 입력해주세요.');
        loginIdEl.focus();
        return;
      }
      // 로그인비번 체크
      if ( loginPwElRef.value == null ) {
        return;
      }
      const loginPwEl = loginPwElRef.value;
      loginPwEl.value = loginPwEl.value.trim();
      if ( loginPwEl.value.length == 0 ) {
        alert('로그인 비번을 입력해주세요.');
        loginPwEl.focus();
        return;
      }
      // 로그인비번확인 체크
      if ( loginPwConfirmElRef.value == null ) {
        return;
      }
      const loginPwConfirmEl = loginPwConfirmElRef.value;
      loginPwConfirmEl.value = loginPwConfirmEl.value.trim();
      if ( loginPwEl.value != loginPwConfirmEl.value ) {
        alert('로그인 비번이 일치하지 않습니다.');
        loginPwConfirmEl.focus();
        return;
      }
      // 이름 체크
      if ( nameElRef.value == null ) {
        return;
      }
      const nameEl = nameElRef.value;
      nameEl.value = nameEl.value.trim();
      if ( nameEl.value.length == 0 ) {
        alert('이름을 입력해주세요.');
        nameEl.focus();
        return;
      }
      // 영문이름 체크
      if ( engNameElRef.value == null ) {
        return;
      }
      const engNameEl = engNameElRef.value;
      engNameEl.value = engNameEl.value.trim();
      if ( engNameEl.value.length == 0 ) {
        alert('영문이름을 입력해주세요.');
        engNameEl.focus();
        return;
      }

      // 생년월일 체크
      if ( regNumberElRef.value == null ) {
        return;
      }
      const regNumberEl = regNumberElRef.value;
      regNumberEl.value = regNumberEl.value.trim();
      if ( regNumberEl.value.length == 0 ) {
        alert('생년월일을 입력해주세요.');
        regNumberEl.focus();
        return;
      }

      // 주소 체크
      if ( addressElRef.value == null ) {
        return;
      }
      const addressEl = addressElRef.value;
      addressEl.value = addressEl.value.trim();
      if ( addressEl.value.length == 0 ) {
        alert('주소를 입력해주세요.');
        addressEl.focus();
        return;
      }

      // 휴대전화번호 체크
      if ( cellPhoneNoElRef.value == null ) {
        return;
      }
      const cellPhoneNoEl = cellPhoneNoElRef.value;
      cellPhoneNoEl.value = cellPhoneNoEl.value.trim();
      if ( cellPhoneNoEl.value.length == 0 ) {
        alert('휴대전화번호를 입력해주세요.');
        cellPhoneNoEl.focus();
        return;
      }

      nextStep()
    }

    function addrSearch() {
      window.open('https://www.juso.go.kr/addrlink/addrLinkUrl.do?confmKey=devU01TX0FVVEgyMDIxMDMyMDEzMDI1ODExMDk0MzU=&returnUrl=localhost:3000/usr/ap/join', 'addressSearch', 'width=500, height=300, scrollbars=no')
    }

    function checkAndJoin() {
      if ( loginIdElRef.value == null ) {
        return;
      }
      const loginIdEl = loginIdElRef.value;
      loginIdEl.value = loginIdEl.value.trim();

      if ( loginPwElRef.value == null ) {
        return;
      }
      const loginPwEl = loginPwElRef.value;
      loginPwEl.value = loginPwEl.value.trim();
      
      if ( loginPwConfirmElRef.value == null ) {
        return;
      }
      const loginPwConfirmEl = loginPwConfirmElRef.value;
      loginPwConfirmEl.value = loginPwConfirmEl.value.trim();
      
      if ( nameElRef.value == null ) {
        return;
      }
      const nameEl = nameElRef.value;
      nameEl.value = nameEl.value.trim();
    
      if ( engNameElRef.value == null ) {
        return;
      }
      const engNameEl = engNameElRef.value;
      engNameEl.value = engNameEl.value.trim();
      
      if ( genderElRef.value == null ) {
        return;
      }
      const genderEl = genderElRef.value;
      genderEl.value = genderEl.value.trim();
      
      if ( regNumberElRef.value == null ) {
        return;
      }
      const regNumberEl = regNumberElRef.value;
      regNumberEl.value = regNumberEl.value.trim();
      
      if ( addressElRef.value == null ) {
        return;
      }
      const addressEl = addressElRef.value;
      addressEl.value = addressEl.value.trim();
      
      if ( cellPhoneNoElRef.value == null ) {
        return;
      }
      const cellPhoneNoEl = cellPhoneNoElRef.value;
      cellPhoneNoEl.value = cellPhoneNoEl.value.trim();

      
      if ( nickNameElRef.value == null ) {
        return;
      }
      const nickNameEl = nickNameElRef.value;
      nickNameEl.value = nickNameEl.value.trim();

      if ( feetElRef.value == null ) {
        return;
      }
      const feetEl = feetElRef.value.valueAsNumber;
      
      if ( weightElRef.value == null ) {
        return;
      }
      const weightEl = weightElRef.value.valueAsNumber;
      
      if ( skinToneElRef.value == null ) {
        return;
      }
      const skinToneEl = skinToneElRef.value;
      skinToneEl.value = skinToneEl.value.trim();
    
      if ( featureElRef.value == null ) {
        return;
      }
      const featureEl = featureElRef.value;
      featureEl.value = featureEl.value.trim();
      
      if ( filmgraphyElRef.value == null ) {
        return;
      }
      const filmgraphyEl = filmgraphyElRef.value;
      filmgraphyEl.value = filmgraphyEl.value.trim();
      
      if ( jobAreaElRef.value == null ) {
        return;
      }
      const jobAreaEl = jobAreaElRef.value;
      jobAreaEl.value = jobAreaEl.value.trim();
      
      if ( corpElRef.value == null ) {
        return;
      }
      const corpEl = corpElRef.value;
      corpEl.value = corpEl.value.trim();


      
      join(loginIdEl.value, loginPwEl.value, nameEl.value, engNameEl.value, state.genderPicked, regNumberEl.value, addressEl.value, cellPhoneNoEl.value, nickNameEl.value, feetEl, weightEl, skinToneEl.value, state.eyelidPicked, featureEl.value, filmgraphyEl.value, jobAreaEl.value, corpEl.value);
    }
    function join(loginId:string, loginPw:string, name:string, engName:string, gender:string, regNumber:string, address:string, cellPhoneNo:string, nickName:string, feet:number, weight:number, skinTone:string, eyelid:number, feature:string, filmgraphy:string, jobArea:string, corp:string) {
      mainApi.ap_doJoin(loginId, loginPw, name, engName, gender, regNumber, address, cellPhoneNo, nickName, feet, weight, skinTone, eyelid, feature, filmgraphy, jobArea, corp)
        .then(axiosResponse => {
          alert(axiosResponse.data.msg);

          if ( axiosResponse.data.resultCode.includes('F-') ) {
            return;
          }

          router.replace('/usr/member/login?loginId=' + loginId)
        });
    }
    return {
      checkAndJoin,
      loginIdElRef,
      loginPwElRef,
      loginPwConfirmElRef,
      nameElRef,
      engNameElRef,
      genderElRef,
      regNumberElRef,
      addressElRef,
      cellPhoneNoElRef,
      addrSearch,
      nickNameElRef,
      feetElRef,
      weightElRef,
      skinToneElRef,
      eyelidElRef,
      featureElRef,
      filmgraphyElRef,
      jobAreaElRef,
      corpElRef,
      inputCheck,
      nextStep,
      state
    }

    
  }
})
</script>

<style scoped>
input{
  border: solid 2px #dadada;
  height: 48px;
  padding: 0 10px;
}

.cbg-gray {
  background-color: #dadada;
}

.red {
  background-color:red;
}

input[type="radio"] {
  width: 100%;
  height: 48px;
  -webkit-appearance: none; /*to disable the default appearance of radio button*/
  -moz-appearance: none;
  overflow-x: hidden;
}

input[type="radio"]:focus { /*no need, if you don't disable default appearance*/
  outline: none; /*to remove the square border on focus*/
}

input[type="radio"]:checked { /*no need, if you don't disable default appearance*/
  background-color: #dadada;
}

label input {
  position: relative;
}
label span {
  position: relative;
  left: 41%;
  top: -42px;
}

</style>

<style>

</style>