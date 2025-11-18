<template>
  <div class="project-div">
    <p class="text-bold white font-lg">{{project.name}}</p>
    <span class="d-block mb-50">{{project.description}}</span>
    <span class="d-block">
      <span v-for="(language,index) in project.languages" :key="index">
        {{language}}
        <span v-if="!(project.languages.length-1 == index)">+{{' '}}</span>
      </span>
    </span>
    <a v-if="project.liveUrl" class="off-white-mid" target="_blank" :href="project.liveUrl">
      <span class="mr-10 ">
        <i class="fa fa-eye"></i> Live
      </span>
    </a>

    <a v-if="project.codeUrl" class="off-white-mid" target="_blank" :href="project.codeUrl">
      <span>
        <!-- <i class="fa fa-code-fork"></i> -->
         Code
      </span>
    </a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
    project: {
        type: Object,
        default: () => {}
    }
})
</script>
<style>
.project-div {
    padding: 10%;
    justify-content: space-between;
    cursor: default;
    background-color: #252527b7;
    margin: 2.9%;
    transition: transform 0.5s;
}
.project-div:hover {
    transform: scale(
        1.06
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    border: 0.4px solid white;
}
</style>
