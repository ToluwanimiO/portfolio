<script setup lang="ts">
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <img alt="Vue logo" class="about-me" src="@/assets/toluwanimi.jpg" width="125" height="125" /> -->
    <div class="home">
      <img alt="Vue logo" class="smallview-image" src="@/assets/toluwanimi.jpg">

      <!-- <el-row>
        <el-col class="h-100" :span="4"></el-col>
        <el-col class="white-bg h-100" :span="20"></el-col>
      </el-row>-->
    </div>
    <AboutMe class="d-md-show d-lg-none"/>
    <Contact class="d-md-show d-lg-none"/>
  </main>
</template>
<style scoped>
.home {
    height: 100vh;
    margin-top: 20px;
    align-items: center;

    /* background-image: url("@/assets/toluwanimi.jpg"); */
    /* background-position: top;
  background-repeat: no-repeat;  */
    /* background-size: cover; */
    /* background-size: contain; */
    /* background-color: #E9E3E3 */
}
@media (min-width: 994px) {
    .white-bg {
        background-color: #e9e3e3;
    }
    .home {
        background: linear-gradient(to right, #181818 0%, #181818 20%, white 20%, white 100%);
        margin: -4rem;
        display: flex;
    }
     .smallview-image {
        width:300px;
    }
}
@media (max-width: 993px) {
    .home {
        padding-top: 70px;
        height: 200px !important;
        width: 100%;
        text-align: center;
        justify-content: center;
        display: flex;
        overflow: hidden;
        /* border-radius: 50%; */
    }
    .smallview-image {
        width:200px;
    }
}
/* display: inline-block;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-image: url("@/assets/toluwanimi.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat; 
  background-color: #E9E3E3 */
</style>