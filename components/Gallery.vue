<template>
  <div>
    <CoolLightBox 
      :items="imageArray" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in imageArray"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      ></div>
    </div>

  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  props: {
    images: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      index: null
    }
  },
  computed: {
    imageArray () {
      console.log('images', this.images)
      return this.images.map((image) => {
        return {
          title: '',
          description: image.fields.description,
          src: image.fields.file.url + '?fm=jpg&fl=progressive&w=2000&h=1000',
        }
      })
    }
  },
};
</script>

<style scoped>
.image {
  height: 360px;
  cursor: pointer;
}
</style>