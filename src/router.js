import { createRouter, createWebHistory } from 'vue-router';

import NotesList from './pages/NotesList.vue';
import AddNote from './pages/AddNote.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/notes' },
    { path: '/notes', component: NotesList },
    { path: '/add', component: AddNote },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
