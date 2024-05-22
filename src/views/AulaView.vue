<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h2>{{ api.nome }}</h2>
        <div class="video">
          <iframe :src="`https://www.youtube.com/embed/${api.youtube}`" frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchApi from "@/mixins/fetchApi.js";

export default {
  name: "aula",
  props: ["aula"],
  mixins: [fetchApi],
  created() {
    this.fetchApi(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchApi(`/aula/${to.params.aula}`);
    next();
  }
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
