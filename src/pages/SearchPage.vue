<template>
  <div class="columns is-vcentered is-centered">
    <div class="column is-full has-text-centered ">
      <b-icon icon="github" size="is-large"/>
      <h1 class="title">Read'Em</h1>
      <p class="subtitle">Read all READMEs - at one go</p>
      <b-field position="is-centered">
        <b-input placeholder="Enter Username..." icon="account">
        </b-input>
        <b-button type="is-primary">Search</b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.columns {
  min-height: 90vh;
}
</style>
