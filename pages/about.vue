<template>
  <section class="container">
    <p class="back">
      <nuxt-link exact to="/">⟵ Back to Home</nuxt-link>
    </p>
    <h1>'bout me</h1>
     <particles-bg type="lines" :bg="true" />
    <!-- <div
      class="image"
      :style="
        `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
      "
    ></div> -->
    <article>Hoi ik ben Kaj, het zal je niet verrassen. Als ik een geintje trap nou dan is het grote klasse</article>
  </section>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  components: {
    ParticlesBg
  },
  head: {
    title: "About me"
  }
};
</script>

<style lang="scss" scoped>
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
