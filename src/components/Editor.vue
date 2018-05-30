<template>
  <div class="editor">
    <nav>
      <ol>
        <li v-bind:class="{active : currentTab === 0}" v-on:click="currentTab = 0">
          <svg class="icon">
            <use xlink:href="#icon-shenfenzheng"></use>
          </svg>
        </li>
        <li v-bind:class="{active : currentTab === 1}" v-on:click="currentTab = 1">
          <svg class="icon">
            <use xlink:href="#icon-work1"></use>
          </svg>
        </li>
        <li v-bind:class="{active : currentTab === 2}" v-on:click="currentTab = 2">
          <svg class="icon">
            <use xlink:href="#icon-xiangmuguanli"></use>
          </svg>
        </li>
        <li v-bind:class="{active : currentTab === 3}" v-on:click="currentTab = 3">
          <svg class="icon">
            <use xlink:href="#icon-book"></use>
          </svg>
        </li>
        <li v-bind:class="{active : currentTab === 4}" v-on:click="currentTab = 4">
          <svg class="icon">
            <use xlink:href="#icon-trophy"></use>
          </svg>
        </li>
        <li v-bind:class="{active : currentTab === 5}" v-on:click="currentTab = 5">
          <svg class="icon">
            <use xlink:href="#icon-heart"></use>
          </svg>
        </li>
      </ol>
    </nav>

    <ol class="panes">
      <li v-bind:class="{active: currentTab === 0}">
        <PersonalInformation v-bind:items="resume.PersonalInformation" />
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ArrayEditor v-bind:items="resume.workHistory" title="工作经历" v-bind:labels="{company:'公司',time:'时间'}" />
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ArrayEditor v-bind:items="resume.Project" title="项目经验" v-bind:labels="{name: '项目名称',introduce:'项目介绍',technology:'项目技能'}" />
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ArrayEditor v-bind:items="resume.studyHistory" title="教育背景" v-bind:labels="{school: '学校',degree:'学历',time:'时间'}" />
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ArrayEditor v-bind:items="resume.Award" title="至高荣誉" v-bind:labels="{name:'获得奖项',time:'获奖时间' }" />
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <Evaluate v-bind:items="resume.Evaluate" />
      </li>
    </ol>
  </div>
</template>

<script>
import PersonalInformation from "./PersonalInformation"; //个人信息
import ArrayEditor from "./ArrayEditor"; //所有经历的组建拼凑
import Evaluate from "./Evaluate"; //所有经历的组建拼凑
export default {
  components: {
    PersonalInformation,
    ArrayEditor,
    Evaluate
  }, //大小写他妈的很重要！
  props: ["resume"],
  data() {
    return {
      currentTab: 0,
      icons: ["shenfenzheng", "dianhua", "book", "heart", "trophy", "work1"] //iconfont 外引名称
    };
  },
  methods: {
    // addArrayEditor() {
    //   this.ArrayEditor.push({
    //     company: "",
    //     content: ""
    //   });
    // },
    // romoveArrayEditor(index) {
    //   this.ArrayEditor.splice(index, 1);
    // }
  }
};
</script>


<style lang="scss">
.editor {
  min-height: 200px;
  display: flex;
  overflow: hidden;
  > nav {
    background: #000;
    width: 100px;
    > ol > li {
      text-align: center;
      padding: 30px 0;
      > .icon {
        width: 40px;
        height: 40px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: #fff;
      }
      &.active {
        background: #fff;
        > .icon {
          fill: black; /*常规的HTML-CSS中，是没有fill属性的。
                          fill属性只在XML-SVG格式中存在，可以作为XML-CSS属性存在，也可以作为XML-ATTR属性存在。
                          XML-CSS下有四种语法方式：
                          1、fill:rgb(0,0,255);：把rgb颜色填充到当前元素内
                          2、fill:#ffffff;：把十六进制颜色填充到当前元素内
                          3、fill:blue;： 把文字型颜色填充到当前元素内
                          4、fill:url(../sdf.gif);： 把图片填充到当前元素内*/
        }
      }
    }
  }
  > .panes {
    flex: 1;
    .container {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    > li {
      display: none;
      padding: 30px;
      height: 100%;
      overflow: auto;
      &.active {
        display: block;
      }
    }
  }
}
</style>