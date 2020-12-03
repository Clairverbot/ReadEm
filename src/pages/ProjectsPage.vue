<template>
  <div>
    <div class="columns">
      <div class="column is-2">
        <div class="columns is-vcentered">
          <div class="column is-3">
            <b-image
              src="https://avatars1.githubusercontent.com/u/31789023?v=4"
              alt="A random image"
              class="image is-48x48"
              rounded
            ></b-image>
          </div>
          <div class="column is-9">
            <h1 class="title is-5">{{ username }}</h1>
            <p class="subtitle is-6">lunch is good</p>
          </div>
        </div>
        <b-input placeholder="Search..." type="search" icon="magnify" expanded>
        </b-input>
      </div>
      <div class="column is-10">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <div class="box">
              <h4 class="title is-5">Title 4</h4>
              <div class="content"></div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="box"></div>
          </div>
          <div class="column is-one-third">
            <div class="box"></div>
          </div>
          <div class="column is-one-third">
            <div class="box"></div>
          </div>
          <div class="column is-one-third">
            <div class="box"></div>
          </div>
          <div class="column is-one-third">
            <div class="box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  props: {
    username: String,
  },
};

// fetch("https://api.github.com/users/Clairverbot")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
</script>

