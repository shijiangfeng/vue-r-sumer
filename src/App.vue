<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <Editor v-bind:resume="resume" class="editor" />
      <Preview v-bind:resume="resume" class="preview" />
    </main>
    <el-button  v-on:click="editpPreview" class="editp">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default {
  data() {
    return {
      previewMode: false,
      resume: {
        PersonalInformation: [
          {
            name: "",
            city: "",
            bitrh: "",
            phone: "",
            email: "",
            wechat: ""
          }
        ],
        workHistory: [
          {
            company: "",
            time: ""
          }
        ],
        Project: [
          {
            name: "",
            introduce: "",
            technology: ""
          }
        ],
        studyHistory: [
          {
            school: "",
            degree: "",
            time: ""
          }
        ],

        Award: [
          {
            name: "",
            time: ""
          }
        ],
        Evaluate: [
          {
            evaluate: ""
          }
        ]
      }
    };
  },
  name: "App",
  methods: {
    editpPreview() {
      this.previewMode = false;
    },
    preview() {
      this.previewMode = true;
    }
  },
  components: {
    Topbar,
    Preview,
    Editor
  }
};
</script>

<style lang= "scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbar {
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  z-index: 5;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
main {
  background: #ddd;
  display: flex;
  flex: 1;
  .editor {
    width: 40em;
    margin: 15px 10px 15px 15px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: auto;
  }
  .preview {
    flex: 1;
    margin: 15px 15px 15px 10px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 5px;
  }
}
.previewMode > .topbar {
  display: none;
}
.previewMode > main > .editor {
  display: none;
}
.previewMode > main > .preview {
  max-width: 1000px;
  margin: 40px auto;
}
.editp{
  display: none;
}
.previewMode > .editp {
  display: inline-block;
  position: fixed;
  right: 50px;
  top: 40px;
}
</style>
