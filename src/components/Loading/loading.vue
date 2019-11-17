<template>
  <div class="s_loading"
       v-show="visible">
    <svg-icon icon-class="loading"></svg-icon>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}

</script>
<style lang="scss" scoped>
.s_loading {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.2);
  img {
    position: absolute;
    width: rem(100);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
