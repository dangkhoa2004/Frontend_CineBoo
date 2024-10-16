<template>
  <div class="scroll-to-top" id="scrollToTop">
    <span class="fas fa-arrow-up"></span>
  </div>
  <div id='stars'></div>
  <!-- Header -->
  <onlyPageHeader_component />
  <!-- MOVIE DATA LIST -->
  <router-view />
  <!-- Footer -->
  <onlyPageFooter_component />

</template>

<script>
import onlyPageHeader_component from '../components/onlyPageHeader_component.vue';
import onlyPageFooter_component from '../components/onlyPageFooter_component.vue';
import effects from '../assets/script.js';

export default {
  components: {
    onlyPageHeader_component,
    onlyPageFooter_component,
  },
  mounted() {
    effects();
  }
};
</script>