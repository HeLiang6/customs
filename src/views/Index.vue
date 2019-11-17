<template>
  <div>
    <router-link v-for="(item,index) in routes"
                 :key="index"
                 class="links"
                 :to="{path:item.path,query:{container:'TGHU9658290'}}">{{item.meta?item.meta.title:'./'}}</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routes: this.$router.options.routes
    }
  },
  created () {
    console.log(this.$router.options.routes)
  }
}
</script>

<style scoped>
.links {
  display: block;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
  text-decoration: underline;
  color: #ffffff;
}
</style>
