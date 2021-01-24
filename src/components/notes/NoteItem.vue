<template>
  <div class="one">
    <div class="title">{{ title }}</div>
    <div class="ad">
      <p>{{ author }}</p>
      <p>{{ date }}</p>
    </div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'author', 'date', 'content']
};
</script>
<style scoped>
.one {
  background-color: #202124;
  border: 1px solid #5f6368;
  border-radius: 8px;
  width: 15rem;
  margin-top: 10px;
}

.title {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 10px 0px 10px;
}

.ad {
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  padding: 0px 10px 0px 10px;
}

.content {
  display: flex;
  justify-content: left;
  padding: 0px 10px 5px 10px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  padding: 5px 10px 10px 10px;
}

.button {
  background-color: #202124;
  border: 1px solid #5f6368;
  border-radius: 5px;
  color: #b7bbc0;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 5px 12px;
}
</style>
