<template>
    <div class="goods">
        <div class="goods-warp clearfix">
            <div class="goods-title">
                <ul class="nav-bar">
                    <li class="nav-bar-item" v-for="(value ,index) in goods" @click="scorll(index)" :class="{active:itomLight==index}">
                        <span class="text">
                            <span class="icon" v-show="iconStata[value.type]" :class="iconStata[value.type]"></span>
                            {{value.name}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="goods-main" ref="foodWrapper">
                <ul class="box-warp">
                    <li v-for="(v, i) in goods" class="goods-item">
                        <div class="menu-title" >
                            {{v.name}}
                        </div>
                        <ul class="menu-wrap">
                            <li @click="clickDatail(value,$event)" v-for="(value , index) in v.foods" class="food-list-hook">
                                <div class="img">
                                    <img width="64" height="64" :src="value.icon" alt="">
                                </div>
                                <div class="text">
                                    <h4 class="text-title">{{value.name}}</h4>
                                    <h4 v-show="value.description" class="description">{{value.description}}</h4>
                                    <span class="sellCount">
                                    月销量{{value.sellCount}}份&nbsp&nbsp好评率{{value.rating}}%</span>
                                    <h4 class="pric">${{value.price}}</h4>
                                </div>
                                <div class="amount">
                                    <v-button :food="value"></v-button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <v-shopCar :sellerFoods="sellerFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></v-shopCar>
        <transition
    enter-active-class="animated zoomInLeft"
    leave-active-class="animated zoomOutRight">
            <v-food :state="foodstate" :foodDatial="foodDatial"></v-food>
        </transition>

    </div>
</template>
<script>
import shopCar from "../shopCar/shopCar.vue"
import Boutton from "../button/button.vue"
import Food from "../food/food.vue"

    export default{
        props:{
            seller:{
                type:Object
            }
        },
        data(){
            return {
                goods:[],
                iconStata:["decrease","discount","guarantee","invoice","special"],
                foodstate:false,
                foodDatial:{},
                itomLight:0
            }
        },
        mounted(){
            var _this=this;
            this.$http.get("../../data.json").then(function(res){
                _this.goods=res.data.goods;
            })
        },
        components:{
            "v-shopCar":shopCar,
            "v-button":Boutton,
            "v-food":Food
        },
        computed:{
            sellerFoods(){
                let arr=[];
                this.goods.forEach(function(good){
                    good.foods.forEach(function(food){
                        if(food.count){
                            arr.push(food)
                        }
                    })
                })
                return arr
            }
        },
        methods:{
            clickDatail(food,$event){
                this.foodDatial=food;
                this.foodstate=true;
            },
            scorll(index){
                let arr=[];
                arr = this.$el.getElementsByClassName("goods-item");
                let ul = this.$el.getElementsByClassName("box-warp")[0];
                let top=0;
                ;
                for (var i = 0; i < index; i++) {
                    let num = parseInt(getComputedStyle(arr[i]).height);
                    top +=num;
                };
                ul.style.top="-" + top +"px";
                this.itomLight=index
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../assets/css/common.styl"
    .goods
        height:100%
        .goods-warp
            display:flex
            position:absolute
            top:174px
            bottom:46px
            overflow:hidden
            width:100%
            .goods-title
                flex:0 0 80px
                width:80px
                background:#f3f5f7
                .nav-bar
                    width:80px
                    height:100%
                    .nav-bar-item
                        display:table
                        padding:0 12px
                        width:56px
                        height:54px
                        font-size:12px
                        line-height:12px
                        border-bottom:1px solid rgba(7,17,27,0.1)
                        &.active
                            color:#1D8CE0
                        .icon
                            vertical-align:top
                            display:inline-block
                            width:12px
                            height:12px
                            background-size:12px 12px
                            &.decrease
                                bg-img("decrease_2")
                            &.discount
                                bg-img('discount_2')
                            &.guarantee
                                bg-img('guarantee_2')
                            &.invoice
                                bg-img('invoice_2')
                            &.special
                                bg-img('special_2')
                        .text
                            display:table-cell
                            vertical-align:middle
                            font-size:12px
            .goods-main
                .box-warp
                    transition:all 0.2s linear
                flex:1
                &>ul
                    position:relative
                    top:0
                    right:0
                .goods-item
                    .menu-title
                        font-size:12px
                        color:rgb(147,153,159)
                        line-height:26px
                        border-left:1px solid #d9dde1
                        background:#f3f5f7
                        padding-left:14px
                    .menu-wrap
                        padding:18px 0 18px 14px
                        &>li
                            position:relative
                            padding-bottom:8px
                        .img
                            display:inline-block
                            vertical-align:sub
                            width:64
                            height:64
                            margin-right:6px
                        .text

                            display:inline-block
                            font-size:10px
                            line-height:10px
                            color:rgb(147,153,159)
                            margin:8px 0
                            .text-title
                                font-size:14px
                                color:rgb(7,17,27)
                                line-height:14px
                            .sellCount
                                display:inline-block
                                margin:8px 0
                            .description
                                margin-top:4px
                                line-height:12px
                            .pric
                                font-size:14px
                                font-weight:bold
                                line-height:14px
                                color:red
                        .amount
                            position:absolute
                            right:10px
                            bottom:10px

</style>

