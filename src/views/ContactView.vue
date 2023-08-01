<template>
  <div class="contact">
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
import { ElMessage, FormInstance, FormRules } from "element-plus";
import axios from "axios";
const formRef = ref<FormInstance>();

const rules = ref<FormRules>({
  name: [
    {
      required: true,
      message: "Name is required",
      trigger: "change",
    },
  ],
   message: [
    {
      required: true,
      message: "Message is required",
      trigger: "change",
    },
  ],
  email: [
    {
      required: true,
      message: "Email address is required",
      trigger: "change",
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
    axios.post("http://localhost:5000/send", payload)
    .then((response) => {
      console.log(response);
      loading.value = false
      ElMessage.success(response.data)
    })
    .catch((error) => {
            console.log(error);
      loading.value = false
       ElMessage.error(error.data)
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
    color: black;
    font-size: 15px;
}
.sendBtn:hover,
.sendBtn:focus {
    background-color: #181818;
    border: solid 2px #81d4a7;
    color: white;
}
</style>
