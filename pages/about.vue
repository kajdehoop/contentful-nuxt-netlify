<template>
  <section class="container">
    <particles id="particles-canvas"/>
    <p class="back">
      <nuxt-link exact to="/">⟵ Back to Home</nuxt-link>
    </p>
    <h1>'bout me</h1>
    <article>My name is Kaj. I believe in making the world a more awesome place by creating special experiences</article>
  </section>
</template>

<script>
import particles from '../components/particles'

export default {
  components: {
    particles
  },
  data () {
    return {
      direction: 'top-bottom',
      direction2: 'radial',
      opacity: [1, 1],
      classes: ['class-1', 'class-2'],
      states: {
        'default-state': {
          gradients: [
            ['#084c52', '#112545'],
            ['#112545', '#084c52']
          ],
          transitionSpeed: 5000,
          loop: true
        }
      }
    }
  },
  head: {
    title: "About me"
  }
};
</script>

<style lang="scss" scoped>
#particles-canvas {
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
  z-index: -10;
}

.back {
  margin-top: 20px;
}

.image {
  width: 100%;
  height: 300px;
  margin: 30px 0;
  background-size: 100% auto !important;
}
</style>
