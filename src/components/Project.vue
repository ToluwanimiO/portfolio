<template>
   <div class="project-div">
     <p class="text-bold white font-lg">Project Name</p>
     <span class="d-block mb-50">Description</span>
     <span class="d-block">Languages</span>
     <span>Live Code </span>
   </div>
</template>

<style>
    .project-div{
        padding: 10%;
        justify-content: space-between;
        cursor: default;
        background-color: #252527b7;
        margin: 2.9%;
        transition: transform 0.5s;
    }
    .project-div:hover {
        transform: scale(1.06); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        border: 0.4px solid white
    }
</style>
