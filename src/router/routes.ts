/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:25:03
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-24 20:31:25
 * @FilePath: /vue-ts-vite-template-main/src/router/routes.ts
 */
import { RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import Work from '@/views/Work/index.vue';
import Profile from '@/views/Profile/index.vue';
import Message from '@/views/Message/index.vue';
import Task from '@/views/Task/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/work'
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: {
      level: 0
    }
  },
  {
    name: 'Home',
    path: '/home',
    component: Home,
    meta: {
      level: 1
    },
    children: [
      {
        name: 'Work',
        path: 'work',
        component: Work
      },
      {
        name: 'Task',
        path: 'task',
        component: Task
      },
      {
        name: 'Message',
        path: 'message',
        component: Message
      },
      {
        name: 'Profile',
        path: 'profile',
        component: Profile
      }
    ]
  }
];

export default routes;
