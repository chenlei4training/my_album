<template>
    <div class="linkContainer">
        <a class="link" href="#" @click="renderToNewPage()"> xx链接1</a>
        <a class="link"   href="#" @click="renderToNewPage()"> xx链接2</a>
        <a class="link"   href="#" @click="renderToNewPage()"> xx链接3</a>
     </div>   
</template>

<script>
import apiInt from "../../../api/api4interpector"

export default {

    
  data() {
    //如果这个组件的state由vueX管理，则不需要这个方法data()
    return {};
  },
  //hook钩子函数
  //TODO 删除你不需要的函数 
  created() {},
  mounted() {},
  updated() {},
  activated() {},
  destroyed() {},

  components: {},

  methods: {
      renderToNewPage(){
        apiInt.tryGetAnyDataApi();
      }
  },

  computed: {}
};
</script>


<style lang="scss" scope>
.linkContainer{
    margin: 100 auto;

}
.link {
   padding-left: 20px;
}

</style>

