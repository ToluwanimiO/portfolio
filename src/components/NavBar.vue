<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const state = ref(false)
const toggle = () => {
    state.value = !state.value
}
</script>

<template>
  <nav class="d-lg-none d-md-show bg-dark">
    <span class="is-flex justify-between pad">
      Toluwanimi
      <button @click="toggle" class="hamburger__toggle" :class="{'open':state}">
        <span class="hamburger__icon"></span>
      </button>
    </span>
  </nav>
</template>

<style scoped>
.pad {
    padding: 5px 20px;
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
