<template>
  <section>
    <base-card>
      <router-link to="/add" class="add">Dodaj notatkę</router-link>
    </base-card>
  </section>
  <section>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div class="card" v-else-if="hasNotes">
      <note-item
        v-for="note in notes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :author="note.author"
        :date="note.date"
        :content="note.content"
      ></note-item>
    </div>
    <h3 v-else>Nie znaleziono żadnych notatek.</h3>
  </section>
</template>

<script>
import NoteItem from '../components/notes/NoteItem.vue';

export default {
  components: { NoteItem },
  computed: {
    notes() {
      return this.$store.getters['notes/notes'];
    },
    hasNotes() {
      return !this.isLoading && this.$store.getters['notes/hasNotes'];
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    this.loadNotes();
  },
  methods: {
    async loadNotes() {
      this.isLoading = true;
      await this.$store.dispatch('notes/loadNotes');
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.card {
  color: #b7bbc0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 70%;
}

.add {
  background-color: #202124;
  border: 2px solid #5f6368;
  border-radius: 5px;
  color: #b7bbc0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  width: 25%;
  padding: 5px 12px;
}
</style>
