<template>
    <div class="preview">
        <section>
            <h2>个人信息</h2>
            <ul class="ct fon">
                <li>姓名：{{resume.PersonalInformation.name}}</li>
                <li>城市：{{resume.PersonalInformation.city}} </li>
                <li>手机：{{resume.PersonalInformation.phone}}</li>
                <li>Date of Birth：{{resume.PersonalInformation.bitrh}}</li>
                <li>E-mail：{{resume.PersonalInformation.email}}</li>
                <li>Wechat：{{resume.PersonalInformation.wechat}}</li>
            </ul>
        </section>
        <section v-if="filter(resume.workHistory).length">
            <h2>工作经历</h2>
            <ul class="fon">
                <li v-for="work in filter(resume.workHistory)">
                    <p>公司：{{work.company}}</p>
                    <p>时间：{{work.time}}</p>
                </li>
            </ul>
        </section>
        <section v-if="filter(resume.studyHistory).length">
            <h2>项目经验</h2>
            <ul class="fon">
                <li v-for="projects in filter(resume.Project)">
                    <p>项目名称：{{projects.name}}</p>
                    <p>项目介绍：{{projects.introduce}}</p>
                    <p>项目技能：{{projects.technology}}</p>

                </li>
            </ul>
        </section>
        <section v-if="filter(resume.studyHistory).length">
            <h2>教育背景</h2>
            <ul class="fon">
                <li v-for="school in filter(resume.studyHistory)">
                    <p>学校：{{school.school}}</p>
                    <p>学历：{{school.degree}}</p>
                    <p>时间：{{school.time}}</p>
                </li>
            </ul>
        </section>

        <section v-if="filter(resume.studyHistory).length">
            <h2>至高荣誉</h2>
            <ul class="fon">
                <li v-for="awards in filter(resume.Award)">
                    <p>荣誉奖项：{{awards.name}}</p>
                    <p>荣誉时间：{{awards.time}}</p>
                </li>
            </ul>
        </section>
        <section v-if="filter(resume.Evaluate).length">
            <h2>自我评价</h2>
            <div class="container">{{resume.Evaluate.evaluate}}</div>
        </section>
    </div>
</template>



<style lang="scss">
.preview {
  padding: 0 20px;
  min-height: 200px;
  font-family: cursive;
  overflow: auto;

  > section {
    padding: 10px 0;
    margin: 10px;
    >.container{
        font-size: 20px;
        margin-top: 20px;
    }
    > h2 {
      font-size: 25px;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 83%;
        height: 1px;
        background: #ccc;
        color: #ccc;
        position: absolute;
        right: 0;
        top: 15px;
      }
    }
    > .fon {
      height: auto;
      overflow: hidden;
      > li {
        float: left;
        width: 50%;
        font-size: 20px;
        > p {
          padding: 20px 0 10px 0;
        }
      }
    }
    > .ct {
      > li {
        font-size: 20px;
        padding: 20px 0;
      }
    }
  }
}
</style>



<script>
export default {
  props: ["resume"],
  methods: {
    filter(array) {
      //找出非空对象
      return array.filter(item => !this.isEmpty(item));
    },
    isEmpty(object) {
      //只要有一个value 不是 falsy 就返回 flase
      let empty = true;
      for (let key in object) {
        empty = false;
        break;
      }
      return empty;
    }
  }
};
</script>




