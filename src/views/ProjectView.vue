<template>
  <div class="project">
    <!-- do projects in such a way that I can update the items in the project without redploying my code and edit or delete previous codes -->
    <el-row>
      <el-col
        class="display-grid"
        v-for="(project,index) in projects"
        :key="index"
        :span="24"
        :md="12"
      >
        <Project :project="project"/>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import Vue, { ref } from 'vue'
import Project from '../components/Project.vue'
const projects = [
    {
        name: 'toluwanimi-portfolio',
        description: 'My Porfolio Website',
        languages: ['Vue.js', 'TypeScript', 'NodeJS'],
        liveUrl: 'https://toluwanimi-portfolio.netlify.app/',
        codeUrl: 'https://github.com/ToluwanimiO/portfolio'
    },
    {
        name: 'The Gaxut Hub',
        description: 'E-learning and Freelancing Platform',
        languages: ['Vue.js', 'Django'],
        liveUrl: 'https://gaxut.netlify.app/',
        codeUrl: 'https://github.com/ToluwanimiO/Gaxut'
    },
    {
        name: 'GIPP',
        description: 'Lagos State Graduate Internship Placement Programme',
        languages: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
        liveUrl: 'https://gipplasg.lagosstate.gov.ng/',
        codeUrl: '',
        codeUrlHidden: 'https://github.com/walexanderos/gipp-alumni-fe'
    },
    {
        name: 'Market List',
        description: 'Market list app for easy item management and status tracking',
        languages: ['React.js', 'CSS'],
        liveUrl: 'https://marketlist-organizer.netlify.app/',
        codeUrl: 'https://github.com/ToluwanimiO/marketList'
    },
    {
        name: 'To Do List',
        description: 'To-do list app',
        languages: ['BootStrap', 'Vue.js'],
        liveUrl: 'https://planned-todo.netlify.app/',
        codeUrl: 'https://github.com/ToluwanimiO/todoList'
    },

    {
        name: 'Choice Coin',
        description: 'Voting System using Choice Coin',
        languages: ['JavaScript', 'React.js'],
        liveUrl: 'https://choice-coin-voting.netlify.app/',
        codeUrl: 'https://github.com/ToluwanimiO/choice-coin-voting'
    }
]
</script>

<style>
.display-grid {
    display: grid;
}
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
