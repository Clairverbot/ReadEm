<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-3">
        <div class="columns is-centered is-multiline">
          <div class="column is-half is-flex is-justify-content-center">
            <b-image
              v-bind:src="this.user.img_url"
              alt="A random image"
              class="image is-64x64"
              rounded
            ></b-image>
          </div>
          <div class="column is-full">
            <h1 class="title is-5 has-text-centered">
              {{ this.user.username }}
            </h1>
            <p class="subtitle is-6 has-text-centered">{{ this.user.bio }}</p>
          </div>
          <div class="column is-full">
            <b-input
              placeholder="Search..."
              type="search"
              icon="magnify"
              expanded
            >
            </b-input>
          </div>
        </div>
      </div>
      <div class="column is-9">
        <div class="columns is-multiline">
          <div
            class="column is-half"
            v-for="p in projects"
            :key="p.projectName"
          >
          <ProjectPreview v-bind:readme="p.readme"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPreview from '../components/Projects/ProjectsPanel/ProjectPreview'
export default {
  name: "ProjectsPage",
  //   props: {
  //     username: String,
  //   },
  components:{
      ProjectPreview
  },
  data() {
    return {
      loading: false,
      user: null,
      projects: null,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      const marked = require("marked");
      this.error = this.post = null;
      this.loading = true;
      Promise.all([
        fetch("https://api.github.com/users" + this.$route.path).then((res) =>
          res.json()
        ),
        fetch(
          "https://api.github.com/users" + this.$route.path + "/repos"
        ).then((res) => res.json()),
      ])
        .then((data) => {
          console.log(data);
          let user_data = data[0];
          this.user = {
            username: user_data.login,
            user_id: user_data.id,
            bio: user_data.bio,
            img_url: user_data.avatar_url,
            github_url: user_data.html_url,
          };
          return data[1];
        })
        .then((data) => {
          console.log(data);
          Promise.all(
            data.map((d) =>
              fetch(
                d.contents_url.replace("contents/{+path}", "readme")
              ).then((res) => res.json())
            )
          ).then((projectsData) => {
            console.log(projectsData);
            this.projects = projectsData.map((p) => ({
              readme: marked(atob(p.content.slice(0, -1)), { sanitized: true }),
            }));
            console.log(this.projects);
          });
        });
    },
  },
};
</script>

