<template>
    <div id='stars'></div>
    <!-- Header -->
    <onlyPageHeader_component />
    <!-- MOVIE DATA LIST -->
    <loginPageInput_component />
    <!-- Footer -->
    <homePageFooter_component />
    <div class="scroll-to-top" id="scrollToTop">
        <span class="fas fa-arrow-up"></span>
    </div>
</template>

<script>
import onlyPageHeader_component from '../components/onlyPageHeader_component.vue';
import homePageFooter_component from '../components/homePageFooter_component.vue';
import loginPageInput_component from '../components/loginPageInput_component.vue';
import effects from '../assets/script.js';

export default {
    components: {
        onlyPageHeader_component,
        homePageFooter_component,
        loginPageInput_component
    },
    mounted() {
        effects();
    }
};
</script>