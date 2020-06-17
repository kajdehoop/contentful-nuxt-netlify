<template>
  <section class="container">
    <!-- <particles-bg type="lines" :bg="true" /> -->
    <p class="back">
      <nuxt-link exact to="/">⟵ Back to Home</nuxt-link>
    </p>
    <h1>{{ post.fields.title }}</h1>
    <p>{{ post.fields.publishDate.substring(0,4) }}</p>
    <div
      class="image"
      :style="
        `background: url(https:${post.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive&w=1000&h=500) center center no-repeat`
      "
    ></div>
    <article v-html="$md.render(post.fields.body)"></article>
    <br/>
    <a 
      v-for="pdf in post.fields.pdf"
      :key="pdf.sys.id"
      :href="pdf.fields.file.url"
    >
      Click here to view {{ pdf.fields.title }}
    </a>
    <a 
      v-for="attachment in post.fields.attachment"
      :key="attachment.sys.id"
      :href="attachment.fields.file.url"
    >
      Click here to download {{ attachment.fields.title }}
    </a>
    <br/><br/>
    <hr>
    <br/>
    <iframe v-for="url in post.fields.youtubeIds"
      :key="url"
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0"
      width="788.54" 
      height="443" 
      type="text/html" 
      :src="'https://www.youtube.com/embed/' + url + '?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0'"/>
    <div
      v-for="image in post.fields.images"
      :key="image.sys.id"
      class="image"
      :style="
        `background: url(https:${image.fields.file.url}?fm=jpg&fl=progressive&w=1000&h=500) center center no-repeat`
      "
    />
  </section>
</template>

<script>
// import { ParticlesBg } from "particles-bg-vue";

export default {
  // components: {
  //   ParticlesBg
  // },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    post() {
      let post = this.$store.state.posts.filter(
        el => el.fields.slug === this.slug
      );
      console.log(post[0]);
      return post[0];
    },
    youtubeSrc() {
      return "https://www.youtube.com/embed/" + this.post.fields.youTubeUrl + "?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    }
  },
  head() {
    return {
      title: this.post.fields.title
    };
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
