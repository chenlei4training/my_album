<template>
  <div class="wrap">
    <section class="login">
      <p>
        <input type="text" placeholder="用户名" v-model="userName" />
      </p>
      <p>
        <input type="password" placeholder="密码" v-model="password" />
      </p>
      <button class="loginbtn" @click="login({userName,password})">登录</button>
      <button class="loginbtn" @click="changeLoginState({isLogin:false})">直接更改store</button>
    </section>

    <p>登录了吗？ {{isLogin + ''}}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      userName: "chenlei",
      password: "123321"
    };
  },
  //hook 钩子函数
  created() {},

  components: {},
  computed: {
    ...mapGetters("user", ["isLogin"])
  },

  methods: {
    /***
     * 以载荷形式分发
    store.dispatch('user/singIn', {
        useName: 'foo'
        password:'bar'
    })

    这里payload =  {
        useName: 'foo'
        password:'bar'
    }

    使用 login 是 login({useName: 'foo',password:'bar'})
     */
    ...mapActions({
      login: "user/singIn"
    }),
    ...mapMutations("user", {
      changeLoginState: "updateIsSigniIn"
    })
  }
};
</script>


<style lang="scss" scope>
//代码模板，仅用于代码 copy & paste
</style>

