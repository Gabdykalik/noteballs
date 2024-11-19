import { createRouter, createWebHashHistory } from 'vue-router'
import { useStoreAuth } from '@/stores/storeAuth'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes,
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats,
    },
    {
      path: '/editNote/:id',
      name: 'edit-note',
      component: ViewEditNote,
    },
    {
      path: '/auth',
      name: 'auth',
      component: ViewAuth,
    },
  ],
})

router.beforeEach(async (to) => {
  const storeAuth = useStoreAuth()
  if (!storeAuth.user.id && to.name !== 'auth') {
    return { name: 'auth' }
  }

  if (storeAuth.user.id && to.name === 'auth') {
    return false
  }
})

export default router
