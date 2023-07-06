<template>
  <div class="resume">
    <div class="is-flex justify-between w-100 mb-10">
      <span class="font-lg white">Toluwanimi Osuolale</span>
      <span>
        <i class="fa fa"></i>
        <a
          href="https://drive.google.com/file/d/1Khcz7Mj1MLkmRH8c_6NPNSMp3bspKkUW/view"
          target="_blank"
        >Download</a>
      </span>
    </div>
    <div>
      <p>My passion lies in utilizing technology to address real-world challenges. With a solid understanding of Computer Science and Engineering principles and proficiency in programming languages such as JavaScript/TypeScript, React, Vue, and Angular, I am constantly seeking new and innovative opportunities to learn and apply my skills.</p>
      <br>
      <p>In addition to my academic pursuits, I have gained valuable experience working with startups, where I have made significant contributions to the development of products. From conceptualizing ideas to bringing them to life as functional products, I have been involved in the entire product lifecycle. Collaboration and knowledge sharing are integral to my work style, and I thoroughly enjoy working with a team.</p>
      <br>
      <p>I am thrilled to continue my journey of learning and growth as a front end developer. I eagerly look forward to applying my skills and knowledge to tackle challenging problems and make a positive impact on the world.</p>
    </div>
    <div>
      <p>Skills</p>
      <p>Languages: JavaScript, HTML/CSS</p>
      <p>Technologies: React, Angular, Vue.js, Bootstrap</p>
      <p>Version Control: GitHub</p>
    </div>
    <div>
      <p>Experience</p>
      <div>
        <p>Edenlife Lagos, Nigeria</p>
        <p>Front End Developer March 2022 - April 2023</p>
        <ul>
          <li>Developed and maintained a Customer Relationship Management (CRM) application to handle day-to-day operations with the goal of achieving 95% month-on-month product retention and 25% growth.</li>
          <li>Led optimization efforts to improve speed across multiple products.</li>
          <li>Coached and mentored Frontend Engineers, helping them understand certain contexts particular to each product.</li>
          <li>Worked with five departments to deliver software solutions for improved productivity and day-to-day operations management.</li>
          <li>Developed a product-led growth web dashboard, with the goal of achieving 95% month-on-month adoption rate, 95% month-on-month retention and acquiring 150 corporates with 7000 users as the sole front-end developer.</li>
        </ul>
      </div>
      <div>
        <p>Crop2Cash Ibadan, Nigeria</p>
        <p>Front End Developer January 2022 - March 2023</p>
        <ul>
          <li>Developed additional functionality for the internal web-based product utilized across departments using Vue, HTML, and CSS.</li>
          <li>Collaborated with other team members to come up with useful UI interfaces to implement.</li>
        </ul>
      </div>
      <div>
        <p>The Gaxut Hub Ibadan, Nigeria</p>
        <p>Front End Developer September 2021 - January 2022</p>
        <ul>
          <li>Assessed UI and UX designs for technical feasibility.</li>
          <li>Collaborated with product team members to meet project requirements, goals and desired functionality.</li>
          <li>Enhanced user experience and accomplished webpage objectives by creating site structure, page optimization, and graphics integration.</li>
          <li>Migrated a multi-page user experience into a single page app thus increasing levels of interactivity and user satisfaction.</li>
          <li>Implemented enhancements that improved web functionality and responsiveness by 40%.</li>
        </ul>
      </div>
    </div>
    <div>
      <p>Projects</p>
      <p>
        Some selected projects can be found
        <RouterLink to="/projects">here</RouterLink>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Vue from 'vue'
import { RouterLink } from 'vue-router'
</script>

<style>
@media (min-width: 994px) {
  .resume {
    margin-top: 50px;
    background-color: #252527b7;
    padding: 20px;

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
  .resume::-webkit-scrollbar {
    display: none;
  }
}
</style>
