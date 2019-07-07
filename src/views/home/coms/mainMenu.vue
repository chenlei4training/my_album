<template>
  <div>
    <div class="menu_top">
      <h1 class="logo pic-background"></h1>
      <!-- float left -->
      <ul class="m-nav">
        <li>
          <a href="#" @click="faxian()">发现音乐</a>
          <!-- 向上的小三角形 -->
          <sub v-if="curMainMenu=='faxian'" class="cor pic-background">&nbsp;</sub>
        </li>

        <li>
          <a href="#" @click="wode()">我的音乐</a>
          <!-- 向上的小三角形 -->
          <sub v-if="curMainMenu=='wode'" class="cor pic-background">&nbsp;</sub>
        </li>

        <li>
          <a href="#"  @click="pengyou()">朋友</a>
          <sub v-if="curMainMenu=='pengyou'" class="cor pic-background">&nbsp;</sub>
        </li>

        <li>
          <a href="#">商城</a>
        </li>

        <li>
          <a href="#">音乐人</a>
        </li>

        <li>
          <a href="#">下载客户端</a>
        </li>

        <li>
          <sup class="hot pic-background">&nbsp;</sup>
        </li>

        <li>
          <a href="#" @click="test()">测试(debug)</a>
        </li>
      </ul>

      <!-- float right -->
      <div class="m-tophead pic-background">
        <a hidefocus="true" href="#" class="link" @click="login()">登录</a>
        <div class style="display: none;">
          <i class="arr"></i>
        </div>
      </div>

      <a target="_blank" class="m-topvd f-pr m-creator-center">创作者中心</a>

      <div class="srchbg">
        <i class="icon pic-background">&nbsp;</i>
        <input type="text" placeholder="歌曲名称" />
      </div>
    </div>

    <sub-menu :sub-menu-title-array="subMenuTitleArray" />
  </div>
</template>


<script>
import subMenu from "./subMenu.vue";
export default {
  data() {
    //如果这个组件的data由vueX管理，不需要这个方法data()
    return {
      curMainMenu:'faxian',
      subMenuTitleArray: []
    };
  },
  created() {
    //hook 钩子函数
    this.faxian();
  },

  components: { subMenu },
  methods: {
    test() {
      alert("test debug 生产环境中不能出现这个功能");

      this.$http.get("/posts?id=1").then(res => {
        console.log("axiso get posts", res);
      });
    },
    login() {
      alert("login 开发中。。。");
    },
    faxian() {
      let id = 'faxian'
      this.curMainMenu = id,

      this.$http.get("/subMenu?id="+id).then(res => {
        console.log("axiso get faxian", res);
        this.subMenuTitleArray = res.data.subMenuItems;
      });
    },
    wode() {
      let id = 'wode'
      this.curMainMenu = id,
      this.$http.get("/subMenu?id="+id).then(res => {
        console.log("axiso get wode", res);
        this.subMenuTitleArray = res.data.subMenuItems;
      });
    },
    pengyou(){
      let id = 'pengyou'
      this.curMainMenu = id,
      this.$http.get("/subMenu?id="+id).then(res => {
        console.log("axiso get pengyou", res);
        this.subMenuTitleArray = res.data.subMenuItems;
      });
    }
  }
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
  width: 100%;
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
  float: left;
  position: relative;
  height: 70px;
  list-style: none;
}

.m-nav a {
  float: left;
  color: #ccc;
  outline: none;
  font-size: 14px;
  padding: 0 19px;
  line-height: 70px;
  text-decoration: none;
}
.m-nav a:hover,
.m-nav a:focus {
  background: #000;
  color: #fff;
  text-decoration: none;
}

.m-nav .hot {
  display: block;
  position: absolute;
  top: 21px;
  left: -10px;
  width: 28px;
  height: 19px;
  background-position: -190px 0;
}

.m-tophead {
  float: right;
  height: 45px;
  margin: 19px 0 0 20px;
  padding: 0 22px 0 0;
  background-position: right -47px;
}

.m-tophead .link,
.m-tophead .link:hover {
  display: block;
  width: 28px;
  margin-top: 7px;
  color: #787878;
}

.m-topvd {
  float: right;
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #4f4f4f;
  background-position: 0 -140px;
  line-height: 33px;
  color: #ccc;
  border-radius: 20px;
}

.m-topvd:hover {
  color: #fff;
  border: 1px solid #ccc;
}

.srchbg {
  float: right;
  margin-top: 19px;
  background-color: #fff;
  border-radius: 32px;
  width: 158px;
  height: 32px;
}

.srchbg .icon {
  background-position: 0 -99px;
  float: left;
  width: 32px;
  height: 32px;
}
.srchbg input {
  float: left;
  color: #333;
  line-height: 16px;
  width: 100px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: 0;
  margin: 10px auto;
}
input:focus {
  outline: none;
}
.m-nav  .cor{
    top: 64px;
    background-position: -105px -70px;
    background-size: 120px auto;
    display: block;
    position: absolute;
     
    left: 50%;
    top: 64px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    overflow: hidden;
}
</style>

