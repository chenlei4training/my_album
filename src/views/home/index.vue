<template>
    <div class="global_top_bar">
        <main-menu/>
    </div>
</template>


<script>
import mainMenu from "./coms/mainMenu"
export default {
    data(){
        //如果这个组件的data由vueX管理，不需要这个方法data()
        return {}
    },
    created(){ //hook 钩子函数

    },

    components:{
        mainMenu,
    }
}
</script>

// 需要scss 的依赖包
<style lang="scss" scope>
.global_top_bar{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
}
</style>
