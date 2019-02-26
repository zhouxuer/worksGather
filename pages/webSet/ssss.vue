<template>
  <div class="page">
    <div class="box">
      222
      <div @click="closeWeb">关闭详情</div>
      <p>介绍:vkahsdfvkasdhvbalfv</p>
      <button>打开网站</button>
    </div>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    closeWeb () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style scoped lang="scss">
.page {
  .box {
    position: fixed;
    top: 65px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
    background-color: rgb(0, 187, 56);
    width: 90%;
    height: 790px;
    margin: 0 5%;
  }
}
</style>