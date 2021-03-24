import { computed, createApp, reactive } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// 앱 컴포넌트 불러오기
import App from './App.vue'

// 전역 CSS 불러오기
import './index.css'

// 전역 컴포넌트 불러오기ddd
import TitleBar from './components/TitleBar.vue'
import FormRow from './components/FormRow.vue'
import * as Util from './utils/';

// 페이지 불러오기
import OpenPage from './pages/OpenPage.vue'
import JoinSelectPage from './pages/JoinSelectPage.vue'
import LoginPage from './pages/LoginPage.vue'
import ApJoinPage from './pages/ApJoinPage.vue'
import PdJoinPage from './pages/PdJoinPage.vue'
import JoinTosPage from './pages/JoinTosPage.vue'

// 폰트어썸 불러오기
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft)

// 전역상태 만들기
const authKey = localStorage.getItem("authKey")
const loginedMemberId = Util.toIntOrNull(localStorage.getItem("loginedMemberId"))
const regDate = localStorage.getItem("regDate")
const updateDate = localStorage.getItem("updateDate")
const loginedMemberName = localStorage.getItem("loginedMemberName")
const loginedMemberNickName = localStorage.getItem("loginedMemberNickName")
const loginedMemberLoginId = localStorage.getItem("loginedMemberLoginId")
const loginedMemberCellphoneNo = localStorage.getItem("loginedMemberCellphoneNo")
const loginedMemberEngName = localStorage.getItem("loginedMemberEngName")
const loginedMemberGender = localStorage.getItem("loginedMemberGender")
const loginedMemberRegNumber = localStorage.getItem("loginedMemberRegNumber")
const loginedMemberAddress = localStorage.getItem("loginedMemberAddress")
const loginedMemberFeet = Util.toIntOrNull(localStorage.getItem("loginedMemberFeet"))
const loginedMemberWeight = Util.toIntOrNull(localStorage.getItem("loginedMemberWeight"))
const loginedMemberSkinTone = localStorage.getItem("loginedMemberSkinTone")
const loginedMemberEyelid = localStorage.getItem("loginedMemberEyelid")
const loginedMemberFeature = localStorage.getItem("loginedMemberFeature")
const loginedMemberFilmgraphy = localStorage.getItem("loginedMemberFilmgraphy")
const loginedMemberJobArea = localStorage.getItem("loginedMemberJobArea")
const loginedMemberCorp = localStorage.getItem("loginedMemberCorp")
const loginedMemberAuthLevel = localStorage.getItem("loginedMemberAuthLevel")

const globalShare:any = reactive ({
  fullPath:"",
  loginedMember:{
    authKey,
    id:loginedMemberId,
    loginId:loginedMemberLoginId,
    regDate:regDate,
    updateDate:updateDate,
    name:loginedMemberName,
    nickName:loginedMemberNickName,
    cellphoneNo:loginedMemberCellphoneNo,
    engName:loginedMemberEngName,
    gender:loginedMemberGender,
    regNumber:loginedMemberRegNumber,
    address:loginedMemberAddress,
    feet:loginedMemberFeet,
    weight:loginedMemberWeight,
    skinTone:loginedMemberSkinTone,
    eyelid:loginedMemberEyelid,
    feature:loginedMemberFeature,
    Filmgraphy:loginedMemberFilmgraphy,
    jobArea:loginedMemberJobArea,
    corp:loginedMemberCorp,
    authLevel:loginedMemberAuthLevel
  },
  isLogined: computed(() => globalShare.loginedMember.id !== null ),
  isMainLayoutVisible: computed(() => 
    globalShare.fullPath !== "/" && 
    globalShare.fullPath !== "" &&
    globalShare.fullPath !== "/usr/member/login" &&
    globalShare.fullPath !== "/usr/member/join" &&
    globalShare.fullPath !== "/usr/ap/join" &&
    globalShare.fullPath !== "/usr/pd/join" &&
    globalShare.fullPath !== "/usr/member/joinTos" 
  ),
  logout: () => {
    localStorage.removeItem("authKey");
    localStorage.removeItem("loginedMemberId");
    localStorage.removeItem("regDate");
    localStorage.removeItem("updateDate");
    localStorage.removeItem("loginedMemberLoginId");
    localStorage.removeItem("loginedMemberName");
    localStorage.removeItem("loginedMemberNickName");
    localStorage.removeItem("loginedMemberCellphoneNo");
    localStorage.removeItem("loginedMemberEngName")
    localStorage.removeItem("loginedMemberGender")
    localStorage.removeItem("loginedMemberRegNumber")
    localStorage.removeItem("loginedMemberAddress")
    localStorage.removeItem("loginedMemberFeet")
    localStorage.removeItem("loginedMemberWeight")
    localStorage.removeItem("loginedMemberSkinTone")
    localStorage.removeItem("loginedMemberEyelid")
    localStorage.removeItem("loginedMemberFeature")
    localStorage.removeItem("loginedMemberFilmgraphy")
    localStorage.removeItem("loginedMemberJobArea")
    localStorage.removeItem("loginedMemberCorp")
    localStorage.removeItem("loginedMemberAuthLevel")

    location.replace('/member/login');
  }
})

// MainApi 불러오기
import { MainApi } from './apis/'

// MainApi 객체 생성
const mainApi = new MainApi();

// 라우팅 정보 구성
const routes = [
  { 
    path: '/', 
    component: OpenPage,
    props: () => ({ globalShare }) 
  },
  { 
    path: '/usr/member/join', 
    component: JoinSelectPage
  },
  { 
    path: '/usr/member/login', 
    component: LoginPage,
    props: () => ({ globalShare }) 
  },
  { 
    path: '/usr/ap/join', 
    component: ApJoinPage,
    props: () => ({ globalShare }) 
  },
  { 
    path: '/usr/pd/join', 
    component: PdJoinPage,
    props: () => ({ globalShare }) 
  },
  { 
    path: '/usr/member/joinTos', 
    component: JoinTosPage,
    props: () => ({ globalShare }) 
  }
];


// 라우터 생성
const router = createRouter ({
  history: createWebHistory(),
  routes //:routes 같을 경우 생략가능
})

router.beforeEach((to, from, next) => {
  globalShare.fullPath = to.fullPath;
  next();
});

// 앱 생성
const app = createApp(App, {
  globalShare
})

// 전역 라이브러리 등록
app.config.globalProperties.$mainApi = mainApi;
app.config.globalProperties.$router = router;

// 전역 컴포넌트 등록
app.component ('TitleBar', TitleBar)
app.component ('FormRow', FormRow)
app.component ('font-awesome-icon', FontAwesomeIcon);

// 앱에 라우터 적용
app.use(router)

// 앱 표시
app.mount('#app')