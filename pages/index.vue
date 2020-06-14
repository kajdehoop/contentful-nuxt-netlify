<template>
  <main>
    <!-- <div class="html5vid" style="position: relative; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; transition: none 0s ease 0s; line-height: 22px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 13px;">
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
    </div> -->
    <div class="container">
      

      <!-- <div class="cog1" id="cog"></div>
      <div class="cog1" id="cog-anti"></div> -->


      <h1 class="title">Kaj's Razendsnelle Portfolio</h1>
      <p>Welcome people of the good life! Read more <nuxt-link to="about">about me</nuxt-link> or check my stuff below</p>
      <div>
        <a @click="updateTag(null)" class="tagBtn">All</a>
        <a @click="updateTag('UI')" class="tagBtn">UI</a>
        <a @click="updateTag('interactive-installation')" class="tagBtn">Interactive Installations</a>
        <a @click="updateTag('photo-video')" class="tagBtn">Photography/Video</a>
        <a @click="updateTag('concept')" class="tagBtn">Concepts</a>
        <a @click="updateTag('backend')" class="tagBtn">Backend</a>
      </div>
      <section v-for="post in posts" :key="post.fields.slug">
        <div
          class="image thumbnail"
          :style="
            `background: url(https:${post.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive&w=260&h=260) center center no-repeat; background-size: cover;`
          "
        ></div>
        <h2 class="title">
          <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
        </h2>
        <p class="description">
          {{ post.fields.description }}
          <br />
          <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
        </p>
      </section>
      
    </div>
  </main>
</template>

<script>


export default {
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  head: {
    title: "Kaj de Hoop",
    htmlAttrs: {
      lang: 'en'
    },
  },
  methods: {
    updateTag (tag) {
      this.$store.dispatch('updateTag', { tag })
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
  min-height: 250px;
  h2,
  p {
    margin-top: 0;
  }
}

@media only screen and (max-width: 600px) {
  section {
    grid-template-rows: 40px 20px 1fr;
  }
}

.tagBtn {
    cursor: pointer;
    margin: 15px;
  }

.image {
  grid-area: 1 / 1 / 4 / 3;
  opacity: 0.8;
}
.title {
  grid-area: 1 / 3 / 2 / 6;
}
.description {
  grid-area: 2 / 3 / 3 / 6;
}
// .description {
//   grid-area: 3 / 3 / 4 / 6;
// }

.more {
  color: #eee;
}

// .cog1{
//   width: 20px;
//   height: 20px;
//   background: red;
// }

// #cog {
// 	-webkit-animation: cog 5s infinite;			
// 	-moz-animation: cog 5s infinite;
// 	-ms-animation: cog 5s infinite; 			
// 	animation: cog 5s infinite;
// 	-webkit-animation-timing-function: linear;	
// 	-moz-animation-timing-function: linear;		
// 	-ms-animation-timing-function: linear;
// 	animation-timing-function: linear	
// }
// @-webkit-keyframes cog {
// 100%{ -webkit-transform: rotate(360deg)}
// }
// @-moz-keyframes cog {
// 100%{ -webkit-transform: rotate(360deg)}
// }
// @-ms-keyframes cog {
// 100%{ -webkit-transform: rotate(360deg)}
// }
// @keyframes cog {
// 100%{ 
// 	-webkit-transform: rotate(360deg);
// 	-moz-transform: rotate(360deg);
// 	-ms-transform: rotate(360deg);
// 	transform: rotate(360deg)
// }
// }
// #cog-anti {
// 	-webkit-transform: rotate(0deg);
// 	-ms-transform: rotate(0deg);
// 	-o-transform: rotate(0deg);
// 	transform: rotate(0deg);
// 	-webkit-animation: cog-anti 5s infinite;
// 	-moz-animation: cog-anti 5s infinite;
// 	-ms-animation: cog-anti 5s infinite;
// 	animation: cog-anti 5s infinite;
// 	-webkit-animation-timing-function: linear;
// 	-moz-animation-timing-function: linear;
// 	-ms-animation-timing-function: linear;
// 	animation-timing-function: linear
// }
// @-webkit-keyframes cog-anti {
// 100%{ -webkit-transform: rotate(-360deg)}
// }
// @-moz-keyframes cog-anti {
// 100%{ -webkit-transform: rotate(-360deg)}
// }
// @-ms-keyframes cog-anti {
// 100%{ -webkit-transform: rotate(-360deg)}
// }
// @keyframes cog-anti {
// 100%{ 
// 	-webkit-transform: rotate(-360deg);
// 	-moz-transform: rotate(-360deg);
// 	-ms-transform: rotate(-360deg);
// 	transform: rotate(-360deg)
// }
// }

</style>
