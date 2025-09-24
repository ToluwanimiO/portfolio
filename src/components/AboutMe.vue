<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="greetings">
    <RouterLink to="/">
      <h1 class="white bigger d-md-none d-lg-show">
        Hello! I'm <br/>
        Toluwanimi Osuolale
      </h1>
      <h1 class="white bigger d-md-show d-lg-none">
        Hello! I'm
        Toluwanimi Osuolale
      </h1>
    </RouterLink>

    <div class="mt-20 mb-30 info">
      I'm a
      <span class="white">Full Stack Developer</span> and
      <span class="white">Computer Science Graduate </span> with passion for problem-solving, strong foundation in computer science principles and proven track record of delivering high-quality and scalable code.
    </div>
  </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: left;
}
.info {
    font-size: 15px;
}
@media (min-width: 994px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
    .info {
        padding-right: 60px;
    }
}
</style>
