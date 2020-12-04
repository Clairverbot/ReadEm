<template>
  <div class="column is-full header-bar">
    <div class="columns is-v-centered">
      <div class="column is-one-quater">
        <b-button
          size="is-small"
          icon-left="chevron-left"
          tag="router-link"
          to="/"
        >
          Back
        </b-button>
      </div>
      <div class="column is-half">
        <h1 class="title is-5 has-text-centered">{{ username }}'s Projects</h1>
        <p class="subtitle is-6 has-text-centered" v-if="bio !== undefined">
          {{ bio }}
        </p>
      </div>
      <div class="column is-one-quater">
        <!-- TODO: Search Bar -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  props: {
    username: String,
    bio: String,
  },
};
</script>

<style scoped>
.header-bar {
  margin-top: 2%;
}
</style>
