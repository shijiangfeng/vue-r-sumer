<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
      <div class="container" v-for="(work, index) in items" v-bind:key="index">
        <el-form-item v-for="key in keys" v-bind:label="labels[key] || key" v-bind:key="key">
          <el-input v-model="work[key]"></el-input>
        </el-form-item>
        <hr>
      </div>
      <el-button type="primary" v-on:click="additems()">添加内容</el-button>
      <el-button type="danger" v-on:click="romoveitems(index)">删除内容</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["items", "labels", "title"],
  computed: {
    keys() {
      return Object.keys(this.items[0]);
    }
  },
  methods: {
    additems() {
      const empty = {};
      this.keys.map(key => {
        empty[key] = "";
      });
      this.items.push(empty);
    },
    romoveitems(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>
