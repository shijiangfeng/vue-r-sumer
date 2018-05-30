<template>
    <div class="topbar">
        <div class="logo">
            <img src="./../assets/vue.png" style="margin-left:45px;width:200px;">
        </div>
        <div class="actions">
            <el-button>注册</el-button>
            <el-button type="primary">登录</el-button>
            <el-button type="success" v-on:click="preview">预览</el-button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    preview() {
      this.$emit("preview");
    }
  }
};
</script>

<style lang="scss">
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 20px;
}
</style>
