import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "@/views/error/NotFound.vue"
import RecordIndexView from "@/views/record/RecordIndexView.vue"
import PkIndexView from "@/views/pk/PkIndexView.vue"
import RecordContentView from "@/views/record/RecordContentView"
import UserBotIndexView from "@/views/user/bot/UserBotIndexView.vue"
import RanklistIndexView from "@/views/ranklist/RanklistIndexView.vue"
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView.vue'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView.vue'
import store from '../store/index'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/pk/",
    component: PkIndexView,
    name: "pk_index",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/record/",
    component: RecordIndexView,
    name: "record_index",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/ranklist/",
    component: RanklistIndexView,
    name: "ranklist_index",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/user/account/login/",
    component: UserAccountLoginView,
    name: "user_account_login",
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/record/:recordId/",
    name: "record_content",
    component: RecordContentView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/user/account/register/",
    component: UserAccountRegisterView,
    name: "user_account_register",
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/user/bot/",
    component: UserBotIndexView,
    name: "user_bot_index",
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/404/",
    component: NotFound,
    name: "404",
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requestAuth && !store.state.user.is_login) {
    next({name: "user_account_login"});
  } else {
    next();
  }
})

export default router
