<template>
  <div>
    <div class="columns is-centered is-multiline">
      <HeaderBar
        v-if="user !== null"
        v-bind:username="user.username"
        v-bind:bio="user.bio"
      />
      <HeaderBar v-else v-bind:username="$route.path.replace('/', '')" />
      <div class="column is-full">
        <div
          class="columns is-multiline"
          v-if="projects !== null && projects.length > 0"
        >
          <div
            class="column is-one-third"
            v-for="p in projects"
            :key="p.projectName"
          >
            <ProjectPreview v-bind:readme="p.readme" />
          </div>
        </div>
        <div class="has-text-centered" v-else>
          <p class="subtitle">Not Found :(</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPreview from "../components/Projects/ProjectPreview";
import HeaderBar from "../components/Projects/HeaderBar";
export default {
  name: "ProjectsPage",
  components: {
    ProjectPreview,
    HeaderBar,
  },
  data() {
    return {
      user: null,
      projects: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      const marked = require("marked");
      this.user = this.projects = null;
      //remove this to run the project without authorization. A stricter rate limit will be applied
      const options = {
        mode: "cors",
        headers: {
          Authorization:
            "Basic " +
            btoa(
              `${process.env.VUE_APP_GITHUB_API_USERNAME}:${process.env.VUE_APP_GITHUB_API_TOKEN}`
            ),
        },
      };
      Promise.all([
        fetch(
          "https://api.github.com/users" + this.$route.path,
          options
        ).then((res) => res.json()),
        fetch(
          "https://api.github.com/users" + this.$route.path + "/repos",
          options
        ).then((res) => res.json()),
      ])
        .then((data) => {
          let user_data = data[0];
          if (user_data.message !== "Not Found") {
            this.user = {
              username: user_data.login,
              bio: user_data.bio,
            };
          }
          return data[1];
        })
        .then((data) => {
          Promise.all(
            data.map((d) =>
              fetch(
                d.contents_url.replace("contents/{+path}", "readme"),
                options
              ).then((res) => res.json())
            )
          ).then((projectsData) => {
            let projects = [];
            projectsData.map((p) => {
              if (p.message !== "Not Found") {
                projects.push({
                  projectName: p.html_url.split("/")[4],
                  readme: marked(atob(p.content.slice(0, -1)), {
                    sanitized: true,
                  }),
                });
              }
            });
            this.projects = projects;
          });
        });
    },
  },
};
</script>

