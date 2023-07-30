<script setup lang="ts">
</script>

<template>
  <div class="greetings">
    <!-- <div class="logo"> -->
    <!-- <img alt="Vue logo" class="bg-logo" src="@/assets/toluwanimi.jpg" width="125" height="125" /> -->
    <!-- </div> -->
    <a href="https://github.com/ToluwanimiO" target="_blank"><i class="fa fa-github"></i>&nbsp;Github&nbsp;&nbsp;</a>
    <a href="https://www.linkedin.com/in/toluwanimi-osuolale/"><i class="fa fa-linkedin-square">&nbsp;</i>LinkedIn</a>
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
.greetings {
    margin-top: 80px;
    text-align: center;
    align-self: center;
    align-items: center;
    align-content: center;
}
.greetings h1,
.greetings h3 {
    text-align: center;
}
.logo {
    display: inline-block;
    /* margin: 0 auto 2rem; */
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-image: url('@/assets/toluwanimi.jpg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #e9e3e3;
}
@media (min-width: 994px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
