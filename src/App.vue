<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const routeVar = useRoute()
const hoverStatus: any = ref({
    route1: true,
    route2: false,
    route3: false
})
const navRoutes = [
    {
        path: '/resume',
        text: 'RESUME'
    },
    {
        path: '/projects',
        text: 'PROJECTS'
    },
    {
        path: '/contact',
        text: 'CONTACT'
    }
]
onMounted(() => {
    console.log(routeVar)
})
</script>

<template>
  <header class="d-lg-show d-md-none bg-dark">
    <div class="wrapper">
      <AboutMe/>

      <nav>
        <RouterLink
          v-for="(route, index) in navRoutes"
          :key="index"
          :to="route.path"
          @mouseover="hoverStatus[`route${index+1}`] = true"
          @mouseleave="hoverStatus[`route${index+1}`] = false"
          :class="{ 'white': route.path == routeVar.path,'off-white': route.path != routeVar.path}"
        >
          0{{index}}&nbsp;&nbsp; &#8212;&#8212;<span v-if="hoverStatus[`route${index+1}`]">&#8212;</span>
          &nbsp;&nbsp; {{route.text}}
        </RouterLink>
      </nav>
      <Contact/>
    </div>
  </header>

  <RouterView/>
</template>
<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    /* color: var(--color-text); */
}

nav a.router-link-exact-active:hover {
    /* background-color: transparent; */
}

nav a {
    display: block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    margin-bottom: 20px;
    margin-left: 15px;
}

nav a:first-of-type {
    /* border: 0; */
}

@media (min-width: 994px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
