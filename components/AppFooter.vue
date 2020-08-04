<template>
  <footer>
    <p style="text-align: center"> &copy; Kaj de Hoop ~  {{ year }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  // background: url(../assets/footer-bk.jpg) no-repeat center bottom, #112545;
  background-size: 100% auto;
  width: 100%;
  height: 50px;
}
</style>
