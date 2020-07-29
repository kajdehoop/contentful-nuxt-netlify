<template>
  <div>
    
    <nuxt />
    <app-footer />
    <particles id="particles-canvas"/>
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import particles from '../components/particles'

export default {
  components: {
    particles,
    AppFooter
  }
};
</script>

<style scoped>
#particles-canvas {
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
  z-index: -10;
}
</style>
