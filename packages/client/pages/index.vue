<script lang="ts" setup>
import { ref } from 'vue'
import {remark} from 'remark'
import remarkHtml from 'remark-html'

const formData = ref({
    javascript: '',
})
const responseData = ref()
const responseDataHtml = ref()
const responseDisplay = ref()
const isMarkdown = ref(true)

const mdToHtml = async (data: any) => {
    const result = await remark() 
            .use(remarkHtml, {sanitize: false}) 
            .process(data)
    return result.toString()
}

const toggleFormat = async () => {
    if (isMarkdown.value === true) {
        responseDisplay.value = responseDataHtml.value
        isMarkdown.value = false
    } else {
        responseDisplay.value = responseData.value
        isMarkdown.value = true
    }
}

const submitForm = async () => {
    responseData.value = await $fetch('http://localhost:8000/', {
        method: 'POST',
        body: formData.value.javascript,
    })
    responseDataHtml.value = await mdToHtml(responseData.value)
    responseDisplay.value = responseData.value
}
</script>
<template>
    <div class="container">
        <h1>JsDoc-Magnifier</h1>

        <div class="form">
            <div class="form-group">
                <h2>Write your comment code :</h2>
                <textarea v-model="formData.javascript" placeholder="write your own js code..." rows="10"></textarea>
                <div class="form-group">
                    <button @click="submitForm" class="submit-btn">Submit</button>
                </div>
            </div>

            <div class="form-group">
                <div class="flex-result">
                    <h2>Result :</h2>
                    <button @click="toggleFormat" class="switch-btn">
                        Switch to {{ isMarkdown ? 'HTML' : 'Markdown' }}
                    </button>
                </div>
                <textarea v-if="isMarkdown === true" readonly :value="responseDisplay" rows="10"></textarea>
                <div v-else v-html="responseDataHtml" />
            </div>
        </div>

    </div>
</template>

<style>
/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fa;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}


.form {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
}

.form-group {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.flex-result {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

textarea {
    width: 100%;
    padding: 12px;
    font-family: monospace;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fafafa;
    transition: border-color 0.3s;
}

textarea:focus {
    border-color: #007bff;
    outline: none;
}

button {
    padding: 6px 12px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

button:hover {
    opacity: 0.8;
}

.submit-btn {
    background-color: #28a745;
    color: white;
}

.submit-btn:hover {
    background-color: #218838;}

.switch-btn {
    background-color: #007bff;
    color: white;
}

.switch-btn:hover {
    background-color: #0056b3;
}
</style>