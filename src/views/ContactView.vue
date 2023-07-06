<template>
  <div class="contact">
    <el-form :model="form" label-position="top">
      <el-row>
        <el-col :span="24">
          <el-form-item label="Your Name*" prop="name">
            <el-input v-model="form.name" placeholder="Enter your name"/>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Your Email*" prop="email">
            <el-input v-model="form.email" placeholder="Enter your email"/>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Your Message*" prop="message">
            <el-input v-model="form.message" type="textarea"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import Vue from 'vue'
import { ref } from 'vue'
// const form = ref(<
//   {
//     name: string,
//     email: string,
//     message: string,
//   }
// >{
//   name: "",
//   email: "",
//   message: "",
// });
const form = ref({
  name: '',
  email: '',
  message: ''
})
</script>

<style>
@media (min-width: 994px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
