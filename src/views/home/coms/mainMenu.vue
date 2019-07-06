<template>
  <div class="menu_top">
    <h1 class="logo pic-back"></h1>
    <ul class="m-nav">
      <li>
        <a href="#">发现音乐</a>
      </li>

      <li>
       <a href="#">我的音乐</a>
      </li>

      <li>
        <a>朋友</a>
      </li>

      <li>
        <a>商城</a>
      </li>

      <li>
        <a>音乐人</a>
      </li>

      <li>
        <a>下载客户端</a>
      </li>

    </ul>
  </div>
</template>


<script>
export default {
  data() {
    //如果这个组件的data由vueX管理，不需要这个方法data()
    return {};
  },
  created() {
    //hook 钩子函数
  },

  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scope>
.menu_top {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;

  border-bottom: 1px solid #000;
}
.menu_top .logo {
  float: left;

  width: 176px;
  height: 69px;
  background-position: 0 0;
}
.m-nav {
  float: left;
  color: white;
}
.m-nav li {
  position: relative;
  float: left;
  height: 70px;
  font-size: 14px;
  list-style: none;
}

.m-nav a {
  float: left;
  color: #ccc;
  outline: none;
  font-size: 14px;
  padding: 0 19px;
  text-align: center;
  line-height: 70px;
  text-decoration:none;
}
.m-nav a:hover, .m-nav a:focus{
    background: #000;
    color:#fff;
    text-decoration:none;
}

</style>

