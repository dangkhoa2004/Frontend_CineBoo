<template>
  <div class="scroll-to-top" id="scrollToTop">
    <span class="fas fa-arrow-up"></span>
  </div>
  <div id="stars"></div>
  <div id="stars"></div>
  <!-- Header -->
  <onlyPageHeader_component />
  <!-- MOVIE DATA LIST -->
  <router-view />
  <!-- Footer -->
  <onlyPageFooter_component />
</template>

<script setup>
import onlyPageHeader_component from "../components/onlyPageHeader_component.vue";
import onlyPageFooter_component from "../components/onlyPageFooter_component.vue";
import {  onMounted } from "vue"; 
// import effects from "../assets/script.js";
import { setMainContentVisibilityOnScroll } from "../services/commonWindowListener.js";
import { setHamburgerMenu } from "../services/hamburgerMenuListener.js";
import {setScrollToTopButtonAction,
  setScrollToTopVisibility,
} from "../services/scrollToTopButtonListener.js";

onMounted(() => {
  // effects();
    setMainContentVisibilityOnScroll();
    setScrollToTopButtonAction();
    setScrollToTopVisibility();
    setHamburgerMenu();
});
</script>