<template>
  <div class="blog">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'blog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
    height:20px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
</style>
