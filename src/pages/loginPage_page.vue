<template>
    <div style="overflow: hidden;">
        <div id='stars'></div>
        <!-- Header -->
        <onlyPageHeader_component />
        <!-- MOVIE DATA LIST -->
        <loginPageInput_component />
        <!-- Footer -->
        <onlyPageFooter_component />
    </div>
</template>

<script setup>
import onlyPageHeader_component from '../components/onlyPageHeader_component.vue';
import onlyPageFooter_component from '../components/onlyPageFooter_component.vue';
import loginPageInput_component from '../components/loginPageInput_component.vue';
import { onMounted } from 'vue';
import { hideInputPassword,toggleSignUpAndLoginForm } from '../services/loginFormListener.js';
onMounted(()=>{
    hideInputPassword();
    toggleSignUpAndLoginForm();
})
</script>