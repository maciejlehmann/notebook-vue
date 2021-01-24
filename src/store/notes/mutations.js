export default {
  setNotes(state, payload) {
    state.notes = payload;
  },
  addNote(state, payload) {
    state.notes.push(payload);
  }
};
