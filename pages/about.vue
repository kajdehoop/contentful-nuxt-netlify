<template>
  <section class="container">
    <p class="back">
      <nuxt-link exact to="/">⟵ Back to Home</nuxt-link>
    </p>
    <h1>'bout me</h1>

    <div style="display: flex">
      <img class ="image" src="../assets/profile.jpg">
    </div>

    <article>

<p>Curiosity brought me many things, from traveling to different countries and cultures all over the world, to learning how to program.</p>

<p>I studied Art & Technology; a very broad study including programming, game design, graphic design, electronics, 3D animation, storytelling, and much more. Starting from my second year, I followed the extracurricular program Creative Entrepreneurship. During this program I was able to combine my love for development with my love for travel. Together with two friends I built the mobile app BucketBoost. This app connects travelers with each other, based on their bucket list. By building BucketBoost, we gained a lot of experience with web and mobile development, especially in ReactJS. Using the skills we acquired, we started Developmunt to help others with creating their own applications.</p>

<p>One of my best (quite spontaneous) decisions was moving to Indonesia for half a year, to do a minor in Visual Communication Design at Telkom University in Bandung. The culture shock was immense, but I learned so much about dealing with people from different cultures and handling unexpected situations. Something that I definitely took away from this experience is that it doesn’t matter where you are, you can always feel at home.</p>

<p>I want to design experiences. If you know something about designing and creating experiences, in any way, just add me on <a href="https://www.linkedin.com/in/kaj-de-hoop/">LinkedIn</a> and I would love to talk about this.</p>

    </article>
  </section>
</template>

<script>
export default {
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
  height: 250px;
  margin: 30px auto;
}
</style>
