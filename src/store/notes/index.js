import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      notes: [
        {
          id: '1',
          title: 'Notatka 01',
          author: 'Maciej Lehmann',
          content: 'To jest treść pierwszej notatki.',
          date: '19-01-2021'
        },
        {
          id: '2',
          title: 'Notatka 02',
          author: 'Michał Ryński',
          content: 'To jest treść drugiej notatki.',
          date: '18-01-2021'
        },
        {
          id: '3',
          title: 'Notatka 03',
          author: 'Szymon Majcher',
          content: 'To jest treść trzeciej notatki.',
          date: '17-01-2021'
        },
        {
          id: '4',
          title: 'Notatka 04',
          author: 'Paweł Michciński',
          content: 'To jest treść czwartej notatki.',
          date: '16-01-2021'
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
