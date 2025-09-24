<script setup lang="ts">
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <img alt="Vue logo" class="about-me" src="@/assets/toluwanimi.jpg" width="125" height="125" /> -->
    <div class="home">
<div class="bg22">      <img alt="Vue logo" class="smallview-image" src="@/assets/toluwanimi.png">
  <div class="transparentDiv"></div>
  <div class="dots"></div>
  <div class="square"></div>
</div>

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
.bg22{
  background-color: #ddcb7b;
  display: inline-block;
  border-radius: 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.square{
  width: 30px;
  height: 35px;
  position: absolute;
  /* background-color: white; */
  border: 2px solid rgb(240, 217, 217);
  left: -15px;
}
.dots{
  position: absolute;
  width: 100px;
  height: 50px;
  top: -30px;
  right: -0px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 25' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23ada2a1' stroke-width='1' stroke-linecap='round' stroke-linejoin='miter'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cline x1='1.99' y1='6' x2='2' y2='6' stroke-linecap='round' stroke-width='2'%3E%3C/line%3E%3Cline x1='1.99' y1='12' x2='2' y2='12' stroke-linecap='round' stroke-width='2'%3E%3C/line%3E%3Cline x1='1.99' y1='18' x2='2' y2='18' stroke-linecap='round' stroke-width='2'%3E%3C/line%3E%3Cline x1='1.99' y1='24' x2='2' y2='24' stroke-linecap='round' stroke-width='2'%3E%3C/line%3E%3C/g%3E%3C/svg%3E" );}
.transparentDiv{
  /* top: -x; */
  /* background-color: #708DC7;
   */
   background-color: rgba(255, 255, 255, 0.2);
  height: 107%;
  width: 85%;
  position: absolute;
  border-radius: 5%;
  z-index: -100;
  margin: auto auto;
}
.home {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
     display: flex;
  align-items: center;
  justify-content: center;
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
    /* .home {
        background: linear-gradient(to right, #181818 0%, #181818 20%, white 20%, white 100%);
        margin: -4rem;
        display: flex;
    } */
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