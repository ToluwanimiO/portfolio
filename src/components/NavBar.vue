<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const state = ref(false)
const toggleNav = () => {
    state.value = !state.value
    document.getElementById('myNav').style.height = !state.value ? '0%' : '100%'
}
const closeNav = () => {
    state.value = false
    document.getElementById('myNav').style.height = '0%'
}
const navRoutes = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/projects',
        text: 'Projects'
    },
    {
        path: '/resume',
        text: 'Resume'
    },
    {
        path: '/contact',
        text: 'Contact'
    }
]
// const closeNav = () => {
//     state.value = !state.value
//     document.getElementById('myNav').style.height = '0%'
// }
</script>

<template>
  <main class="mb-30 d-lg-none d-md-show">
    <nav class="bg-dark mb-20">
      <span class="is-flex justify-between pad">
        <img src="../assets/toluwanimi_text_logo.png" class="img-style">
        <button @click="toggleNav" class="hamburger__toggle" :class="{'open':state}">
          <span class="hamburger__icon"></span>
        </button>
      </span>
    </nav>
    <div id="myNav" class="overlay">
      <!-- <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a> -->
      <div class="overlay-content">
        <RouterLink
          @click="closeNav"
          v-for="(route, index) in navRoutes"
          :key="index"
          :to="route.path"
        >{{route.text}}</RouterLink>
        <span class="white mt-50">Connect With Me</span>
        <span>hello@toluwanimi.dev</span>
        <div class="mt-10">
          <i class="fa fa-github fa-2x"></i>&nbsp;&nbsp;&nbsp;
          <i class="fa fa-linkedin-square fa-2x">&nbsp;</i>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </main>
</template>

<style>
/* body {
    overflow-y: hidden;
    height: 100vh;
} */
.line {
    border-top: 1px solid #818181;
}
.overlay {
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 1;
    /* top: 0; */
    left: 0;
    background-color: #181818;
    overflow-y: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 5%;
    width: 100%;
    text-align: center;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    margin-bottom: 10px;
}
.overlay span {
    padding: 1px;
    font-size: 20px;
    display: block;
}

.overlay a:hover,
.overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}
.pad {
    padding: 0px 20px;
}
.img-style {
    width: 50%;
}
.hamburger__toggle {
    position: relative;
    background-color: transparent;
    /* width: 60px;
    height: 60px;
    margin: 50px auto; */
    border: none;
}

/* give the span element and related pseudo-elements the appearance of white lines */
.hamburger__icon,
.hamburger__icon::before,
.hamburger__icon::after {
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: white;
}

/* center the span element in the middle of its containing button */
.hamburger__icon {
    top: calc(50% - 4px);
    left: calc(50% - 15px);
}

/* position the two pseudo-elements to the very left */
.hamburger__icon::before,
.hamburger__icon::after {
    content: '';
    left: 0;
}

/* this is the top dash of the hamburger */
.hamburger__icon::before {
    /* bottom: 8px; */
}

/* this is the bottom dash of the hamburger */
.hamburger__icon::after {
    top: 12px;
    width: 20px;
    right: 0px;
}

/* HOVER STYLES ON THE BUTTON */

/* rotate middle dash of hamburger */
.open .hamburger__icon {
    height: 2px;
    width: 30px;
    left: -10px;
    top: calc(50% - 2px);
    transform: rotate(-45deg);
}

/* rotate bottom dash of hamburger counter clockwise */
.open .hamburger__icon::after {
    width: 30px;
    height: 2px;
    top: -1px;
    transform: rotate(-270deg);
}

/* hide the top dash by scaling it to 0 */
/* .hamburger__toggle:hover .hamburger__icon::before {
    transform: scale(0);
} */

/* TRANSITION */
/* adjust duration to see it happen slower */
.hamburger__icon,
.hamburger__icon::after {
    transition: all 0.3s linear;
}
</style>
