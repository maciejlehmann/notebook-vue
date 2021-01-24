<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="title">Tytuł</label>
      <input type="text" id="title" v-model.trim="title" />
    </div>
    <div class="form-control">
      <label for="author">Autor</label>
      <input type="text" id="author" v-model.trim="author" />
    </div>
    <div class="form-control">
      <label for="date">Data</label>
      <input type="date" id="date" v-model.trim="date" />
    </div>
    <div class="form-control">
      <label for="content">Treść</label>
      <textarea id="content" rows="5" v-model.trim="content"></textarea>
    </div>
    <button class="button">Dodaj notatkę</button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      title: '',
      author: '',
      content: '',
      date: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        title: this.title,
        author: this.author,
        content: this.content,
        date: this.date
      };

      this.$emit('save-data', formData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.button {
  width: 25%;
  background-color: #1d1e20;
  color: #b7bbc0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  padding: 14px 20px;
  margin: 8px 0;
  border: 1px solid #5f6368;
  border-radius: 7px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
