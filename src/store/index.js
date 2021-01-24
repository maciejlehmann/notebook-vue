import { createStore } from 'vuex';

import notesModule from './notes/index.js';

const store = createStore({
  modules: {
    notes: notesModule
  }
});

export default store;
