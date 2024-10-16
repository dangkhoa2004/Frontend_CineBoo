<template>
  <div id='stars'></div>
  <!-- Header -->
  <onlyPageHeader_component />
  <!-- MOVIE DATA LIST -->
  <router-view />
  <!-- Footer -->
  <homePageFooter_component />
  <div class="scroll-to-top" id="scrollToTop">
    <span class="fas fa-arrow-up"></span>
  </div>
</template>

<script>
import onlyPageHeader_component from '../components/onlyPageHeader_component.vue';
import homePageFooter_component from '../components/homePageFooter_component.vue';
import effects from '../assets/script.js';

export default {
  components: {
    onlyPageHeader_component,
    homePageFooter_component,
  },
  mounted() {
    effects();
  }
};
</script>