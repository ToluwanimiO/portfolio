<template>
  <div class="contact">
    <div class="loader-container" v-if="loading">
      <el-progress
        :text-inside="true"
        :stroke-width="4"
        :percentage="100"
        status="success"
        :indeterminate="true"
        :duration="1"
      />
    </div>
    <el-form
      :model="form"
      label-position="top"
      ref="formRef"
      :rules="rules"
      require-asterisk-position="right"
    >
      <el-row>
        <el-col :span="24">
          <el-form-item label="Your Name" prop="name">
            <el-input v-model="form.name" placeholder="Enter your name"/>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Your Email" prop="email">
            <el-input v-model="form.email" placeholder="Enter your email"/>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Your Message" prop="message">
            <el-input v-model="form.message" type="textarea"/>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item>
            <el-button class="w-100 mt-10 sendBtn" plain @click="sendMessage">Send Message</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import Vue from 'vue'
import { ref } from 'vue'
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import axios from "axios";
const formRef = ref<FormInstance>();

const rules = ref<FormRules>({
  name: [
    {
      required: true,
      message: "Name is required",
      trigger: "blur",
    },
  ],
   message: [
    {
      required: true,
      message: "Message is required",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "Email address is required",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Email address is not valid",
      trigger: "blur",
    },
  ],
});

const form = ref({
    name: '',
    email: '',
    message: ''
});
const loading = ref(false)
const sendMessage = async () => {
  await formRef.value?.validate((valid:boolean) => {
    if (!valid) {
      return;
    }
    loading.value = true
    console.log(form.value);
    const payload = form.value
    axios.post("https://contact-form-portfolio-b1fb77d18153.herokuapp.com/send", payload)
    .then((response) => {
      console.log(response);
      loading.value = false
      form.value= {
          name: '',
          email: '',
          message: ''
      }
      ElMessage({
        message: response.data,
        type: 'success',
        duration:3000
      })
    })
    .catch((error) => {
      console.log(error);
      loading.value = false
      ElMessage.error(error.message)
    });
  });
};
</script>

<style>
.el-form-item.is-required:not(.is-no-asterisk).asterisk-right > .el-form-item__label:after {
    color: #808080 !important;
}
@media (min-width: 994px) {
    .contact {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
.sendBtn {
    padding: 20px 5px;
    color: black !important;
    font-size: 15px;
}
.sendBtn:hover {
    background-color: #181818;
    border: solid 2px #81d4a7;
    color: white !important;
}
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f0f0f0;
}
.el-progress.is-success .el-progress-bar__inner {
    background-color: #81d4a7;
}
.el-message--success .el-message__content {
    color: #81d4a7;
}
.el-message .el-message-icon--success {
    color: #81d4a7;
}
</style>
