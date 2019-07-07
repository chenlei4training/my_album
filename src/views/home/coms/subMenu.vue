<template>
  <div :class="{'m-subnav':hasItems, 'only-one-line':!hasItems}">
    
    <ul>
      <li v-for="item in subMenuTitleArray">
        <a href="#"> <em> {{ item.title }} </em></a>
     </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: { subMenuTitleArray: Array },
  data() {
    //如果这个组件的data由vueX管理，则不需要这个方法data()
    return {hasItems:false};
  },
  created() {
    //hook 钩子函数
  },
  updated(){
      if(this.subMenuTitleArray.length>0){
          this.hasItems = true
      }else{
          this.hasItems = false
      }
  },

  components: {},

  methods: {}
};
</script>


<style lang="scss" scope>
.m-subnav {
  position: relative;
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}
.m-subnav ul{
    padding-left: 180px;

}

.only-one-line{
    height: 5px;
    background-color: #c20c0c;
}

.m-subnav li{
    float: left;
    height: 34px;
    text-align: center;

}

.m-subnav a em {
    float: left;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    color: white;
}

.m-subnav a em:hover {
    background: #9B0909;
}



</style>


