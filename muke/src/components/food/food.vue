<template>
    <div class="food" v-show="state">
        <div class="content-wrap">
            <div class="img">
                <img :src="foodDatial.image" alt="">
            </div>
            <div class="text">
                <h4 class="text-title">{{foodDatial.name}}</h4>
                <span class="sellCount">
                月销量{{foodDatial.sellCount}}份&nbsp&nbsp好评率{{foodDatial.rating}}%</span>
                <h4 class="pric">${{foodDatial.price}}</h4>
            </div>
            <div class="add_button" @click="AddCar">
                加入购物车
            </div>
        </div>
        <div class="introduce">
            <div class="title">
                商品介绍
            </div>
            <p class="content">
                {{foodDatial.info}}
            </p>
        </div>
        <div class="back">
            <a class="icon-arrow_lift" href="/"></a>
        </div>
    </div>

</template>
<style lang="stylus" rel="typesheet/stylus">
    .food
        position:fixed
        left:0
        top:0
        bottom:46px
        width:100%
        background-color:#fff
        z-index:20
        .content-wrap
            border-bottom:1px solid rgba(7,17,27,0.1)
            position:relative
            .img
                width:100%
                height:375px
                &>img
                    width:100%
                    height:100%
            .text
                padding:18px 18px 0 18px
                display:inline-block
                font-size:10px
                line-height:10px
                color:rgb(147,153,159)
                .text-title
                    font-size:14px
                    color:rgb(7,17,27)
                    line-height:14px
                .sellCount
                    display:inline-block
                    margin:8px 0
                .pric
                    font-size:14px
                    font-weight:bold
                    line-height:14px
                    color:red
            .add_button
                padding:6px 12px
                width:60px
                height:12px
                border-radius:12px
                font-size:12px
                line-height:12px
                background:rgb(0,160,220)
                color:#fff
                position:relative
                bottom:22px
                right:-270px
        .introduce
            padding:18px
            border-bottom:1px solid rgba(7,17,27,0.1)
            .title
                font-size:14px
            .content
                font-size:12px
                line-height:24px
                color:rgb(77,85,95)
        .back
            position:fixed
            top:15px
            left:15px
            border-radius:15px
            padding:6px
            background-color: rgba(0,0,0,0.2)
            .icon-arrow_lift
                width:30px
                height:30px
                color:#fff

</style>
<script>
import Vue from "vue"
export default{
    props:{
        state:{
            default:{

            }
        },
        foodDatial:{
            type:Object
        }
    },
    methods:{
        AddCar(){
            if(!this.foodDatial.count){
                Vue.set(this.foodDatial,'count',1)
            }else{
                this.foodDatial.count+=1;
                Vue.set(this.foodDatial,'count',this.foodDatial.count)
            }
        }
    }
}
</script>