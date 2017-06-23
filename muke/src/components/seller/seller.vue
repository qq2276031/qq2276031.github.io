<template>
    <div>
        <div class="business">
            <div class="business-bg">
                <div class="title">
                    商家背景
                </div>
                <ul class="img-box">
                    <li v-for="value in seller.pics" class="item">
                        <img :src="value" alt="">
                    </li>
                </ul>
            </div>
            <div class="infos">
                <div class="title">
                    商家信息
                </div>
                <ul class="main">
                    <li v-for="v in seller.infos">{{v}}</li>
                </ul>
            </div>
        </div>
        <v-shopcar></v-shopcar>
    </div>
</template>
<script>
import shopCar from "../shopCar/shopCar.vue"
export default{
    props:{
        seller:{
            type:Object
        }
    },
    components:{
        "v-shopcar":shopCar
    }
}
</script>
<style lang="stylus" rel="typesheet/stylus" scoped>
.business
    .business-bg
        padding:18px
        margin-bottom:20px
        border-bottom:1px solid rgba(7,17,27.0.1)
        .title
            font-size:14px
            margin-bottom:20px
        .img-box
            width:1000px
            height:90px
            .item
                float:left
                width:110px
                height:90px
                margin-right:10px
                &>img
                    width:110px
                    height:90px
    .infos
        padding:18px
        border-top:1px solid rgba(7,17,27.0.1)
        .title
            font-size:14px
        .main
            font-size:12px
            color: #4d555d;
            &>li
                padding:16px 12px
</style>