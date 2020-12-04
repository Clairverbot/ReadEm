<template>
  <div class="box">
    <div class="content" v-html="readme"></div>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: {
    readme: String,
  },
};
</script>

<style scoped>
.box {
  height: 400px;
  overflow-y: scroll;
}
.content {
  font-size: 0.8em;
}
</style>