<template>
  <div id='stars'></div>
  <!-- Header -->
  <extendPageHeader_component />
  <!-- MOVIE DATA LIST -->
  <moviePageData_component />
  <!-- Footer -->
  <homePageFooter_component />
  <div class="scroll-to-top" id="scrollToTop">
    <span class="fas fa-arrow-up"></span>
  </div>
</template>

<script>
import extendPageHeader_component from '../components/extendPageHeader_component.vue';
import homePageFooter_component from '../components/homePageFooter_component.vue';
import moviePageData_component from '../components/moviePageData_component.vue';
import effects from '../assets/script.js';

export default {
  components: {
    extendPageHeader_component,
    homePageFooter_component,
    moviePageData_component
  },
  mounted() {
    effects();
  }
};
</script>