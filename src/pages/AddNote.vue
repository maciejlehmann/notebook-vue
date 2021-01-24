<template>
  <section>
    <base-card>
      <h2>Dodaj notatkę</h2>
      <note-form @save-data="saveData"></note-form>
    </base-card>
  </section>
</template>

<script>
import NoteForm from '../components/notes/NoteForm.vue';
export default {
  components: { NoteForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('notes/addNote', data);
      this.$router.replace('/notes');
    }
  }
};
</script>
