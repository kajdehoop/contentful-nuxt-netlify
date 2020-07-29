<template>
  <main>
    <div class="html5vid" style="position: relative; top: 0px; left: 0px; width: 100%; overflow: hidden; transition: none 0s ease 0s; line-height: 22px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 13px;">
      <video 
        style="object-fit: cover; background-size: cover; width: 100%; height: 100%; transition: none 0s ease 0s; line-height: 19px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 11px; display: block; visibility: inherit; opacity: 1;" 
        class="" 
        loop="loop" 
        preload="auto"
        autoplay
        muted>
        <source 
          src="../assets/banner-klein.mp4" 
          type="video/mp4" 
          style="transition: none 0s ease 0s; line-height: 0px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 14px;">
      </video>
    </div>
    <div class="container">
      <h1 class="title">Kaj de Hoop</h1>
      <p>Welcome people of the good life! Read more <nuxt-link to="about">about me</nuxt-link> or check my stuff below</p>
      <div>
        <a @click="updateTag(null)" class="tagBtn hvr-skew">All</a>
        <a @click="updateTag('UI')" class="tagBtn hvr-skew">UI</a>
        <a @click="updateTag('interactive-installation')" class="tagBtn hvr-skew">Interactive Installations</a>
        <a @click="updateTag('photo-video')" class="tagBtn hvr-skew">Photography/Video</a>
        <a @click="updateTag('3D')" class="tagBtn hvr-skew">3D</a>
        <a @click="updateTag('concept')" class="tagBtn hvr-skew">Concepts</a>
        <a @click="updateTag('backend')" class="tagBtn hvr-skew">Backend</a>
      </div>
      <nuxt-link v-for="post in posts" :key="post.fields.slug" :to="post.fields.slug">
      <section>
        <div
          class="image thumbnail"
          :style="
            `background: url(https:${post.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive&w=400&h=400) center center no-repeat; background-size: cover;`
          "
        ></div>
        <h2 class="title">{{ post.fields.title }}</h2>
        <p class="description">
          {{ post.fields.description }}
          <br />
        </p>
      </section>
      </nuxt-link>
      
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  head: {
    title: "Kaj de Hoop",
    htmlAttrs: {
      lang: 'en'
    },
  },
  methods: {
    updateTag (tag) {
      // this.setBgColor(tag)
      this.$store.dispatch('updateTag', { tag })
    },
    setBgColor(tag) {
      switch(tag) {
        case 'UI':
          this.gradient1 = '#350852'
          break
        case 'interactive-installation':
          this.gradient1 = '#520808'
          break
        case 'photo-video':
          this.gradient1 = '#0b5208'
          break
        case 'concept':
          this.gradient1 = '#3a5208'
          break
        case 'backend':
          this.gradient1 = '#522c08'
          break
        default:
          this.gradient1 = '#084c52'
      }
      this.granimKey++
    }
  }
};
</script>

<style lang="scss" scoped>

section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 20px 20px 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 30px 0;
  min-height: 200px;
  h2,
  p {
    margin-top: 0;
  }
}

.html5vid {
  display: none;
  height: 200px;
  transition: 0.4s cubic-bezier(1, -1, 0, 2);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 97% 85%, 96% 100%, 93% 79%, 91% 100%, 87% 63%, 85% 100%, 82% 76%, 79% 99%, 72% 70%, 70% 100%, 65% 41%, 62% 100%, 58% 78%, 57% 100%, 54% 27%, 52% 100%, 47% 76%, 46% 98%, 42% 87%, 40% 99%, 35% 62%, 34% 99%, 30% 87%, 27% 99%, 19% 60%, 17% 99%, 13% 88%, 11% 97%, 6% 89%, 4% 100%, 1% 96%, 0% 100%);
}

// .html5vid:hover {
//   clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 96% 100%, 92% 77%, 91% 100%, 84% 69%, 82% 100%, 74% 64%, 72% 100%, 65% 24%, 64% 100%, 60% 54%, 57% 99%, 49% 36%, 42% 99%, 41% 84%, 38% 100%, 30% 70%, 26% 100%, 27% 32%, 18% 97%, 14% 57%, 10% 99%, 5% 65%, 0% 98%);
// }

@media only screen and (max-width: 600px) {
  section {
    grid-template-rows: 40px 20px 1fr;
  }
}

@media only screen and (min-width: 600px) {
  .html5vid {
    display: block;
  }
}

.tagBtn {
    cursor: pointer;
    padding-right: 25px;
    line-height: 40px;
    padding-bottom: 10px;
  }

.image {
  grid-area: 1 / 1 / 4 / 3;
  // opacity: 0.8;
}
.title {
  grid-area: 1 / 3 / 2 / 6;
}
.description {
  grid-area: 2 / 3 / 4 / 6;
}
// .description {
//   grid-area: 3 / 3 / 4 / 6;
// }

/* Skew */
.hvr-skew {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active {
  -webkit-transform: skew(-10deg);
  transform: skew(-10deg);
}

</style>
