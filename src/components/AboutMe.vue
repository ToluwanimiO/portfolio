<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="white bigger">Hello! I'm <br/> Toluwanimi Osuolale</h1>
    <div class="mt-20 mb-30 info">
      I'm a <span class="white">Front End Developer</span> and <span class="white">Computer Science Student</span> with passion for problem-solving, strong foundation in computer science principles and proven track record of delivering high-quality and scalable code.
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
  text-align: center;
}
.info{
  font-size: 15px;
  padding-right: 60px

}
@media (min-width: 994px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
