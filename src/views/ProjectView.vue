<template>
  <div class="project">
    <!-- do projects in such a way that I can update the items in the project without redploying my code and edit or delete previous codes -->
   <el-row>
     <el-col v-for="(project,index) in projects" :key="index" :span="24" :md="12">
       <Project />
     </el-col>
   </el-row>
   
  </div>
</template>
<script lang="ts" setup>
import Vue,{ref} from 'vue'
import Project from "../components/Project.vue"
const projects = [
  {
    name:'ProjectName',
    description:'Description',
    languages:['React','Vue'],
    liveUrl:'url-live',
    codeUrl:'code-url'
  },
  {
    name:'ProjectName',
    description:'Description',
    languages:['React','Vue'],
    liveUrl:'url-live',
    codeUrl:'code-url'
  },
  {
    name:'ProjectName',
    description:'Description',
    languages:['React','Vue'],
    liveUrl:'url-live',
    codeUrl:'code-url'
  },
  {
    name:'ProjectName',
    description:'Description',
    languages:['React','Vue'],
    liveUrl:'url-live',
    codeUrl:'code-url'
  },
   {
    name:'ProjectName',
    description:'Description',
    languages:['React','Vue'],
    liveUrl:'url-live',
    codeUrl:'code-url'
  },
  {
    name:'ProjectName',
    description:'Description',
    languages:['React','Vue'],
    liveUrl:'url-live',
    codeUrl:'code-url'
  },
   {
    name:'ProjectName',
    description:'Description',
    languages:['React','Vue'],
    liveUrl:'url-live',
    codeUrl:'code-url'
  },
]
</script>

<style>
@media (min-width: 994px) {
  .project {
    height: 100vh;
    /* display: flex; */
    /* align-items: center; */
    overflow-y: auto;
    /* Invisible scrollbar for In IE (Internet Explorer) and Edge */
    -ms-overflow-style: none;
    /* Invisible scrollbar for In Firefox */
    scrollbar-width: none;
  }
  /* Invisible scrollbar for In Chrome, Safari, Opera, and other WebKit-based browsers */
  .project::-webkit-scrollbar {
    display: none;
  }
}
</style>
