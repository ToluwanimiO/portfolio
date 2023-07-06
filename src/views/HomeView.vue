<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <img alt="Vue logo" class="about-me" src="@/assets/toluwanimi.jpg" width="125" height="125" /> -->
    <div class="home">
      <img alt="Vue logo" src="@/assets/toluwanimi.jpg" width="300">

      <!-- <el-row>
        <el-col class="h-100" :span="4"></el-col>
        <el-col class="white-bg h-100" :span="20"></el-col>
      </el-row>-->
    </div>
  </main>
</template>
<style scoped>
.home {
    height: 100vh;
    height: 100vh;
    display: flex;
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