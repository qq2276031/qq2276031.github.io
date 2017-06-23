<template>
    <div class="shopCar">
        <div class="box-wrap"  @click="state=!state">
            <div class="cost">
                <div class="car">
                    <div class="car-bg" :class="{light:carCount>0}">
                        <span class="icon-shopping_cart"></span>
                        <div v-show="carCount>0" class="cost_car">
                            {{carCount}}
                        </div>
                    </div>

                </div>
                <div class="money">
                    ¥{{totalPrice}}&nbsp;&nbsp;
                    <span class="fee">
                        &nbsp;&nbsp;另需配送费¥{{deliveryPrice}}元
                    </span>
                </div>
            </div>
            <div class="settlement" :class="{active:totalPrice>=20}">
                {{tocon}}
            </div>
        </div>
        <div class="car-warp" v-show="state&&carCount>0">
            <div class="title">
                <h1 class="text">购物车</h1>
                <span class="empty"  @click="empty">清空</span>
            </div>
            <div class="car-detail">
                <ul class="item-box">
                    <li v-for="food in sellerFoods" class="item">
                        <div class="food-name">
                            {{food.name}}
                        </div>
                        <div class="car-count">
                            <div class="price">
                                ¥{{food.price}}
                            </div>
                            <div class="car-count-box">
                                <v-button :food="food"></v-button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .shopCar
        position:absolute
        bottom:0
        left:0
        height:46px
        width:100%
        background:#141d27
        .box-wrap
            position:relative
            color:rgba(255,255,255,0.4)
            height:46px
            width:100%
            display:flex
            z-index:100
            .cost
                flex:1
                .car
                    background:#141d27
                    position:absolute
                    width:50px
                    height:50px
                    padding:6px
                    line-height:50px
                    border-radius:58px
                    bottom:0
                    left:18px
                    .car-bg
                        position:relative
                        text-align:center
                        width:50px
                        height:50px
                        border-radius:50px
                        color:rgba(255,255,255,0.4)
                        background:rgba(255,255,255,0.2)
                        &.light
                            color:#fff
                            background:rgb(5,168,328)
                        .icon-shopping_cart
                            vertical-align:middle
                            font-size:24px
                            line-height:24px
                        .cost_car
                            position:absolute
                            top:-8px
                            left:30px
                            padding:0 6px
                            width:16px
                            height:20px
                            line-height:20px
                            color:#fff
                            background:red
                            border-radius:12px
                            font-size:12px
                .money
                    margin-left:94px
                    line-height:46px
                    font-size:16px
                    font-weight:bold
                    .fee
                        display:inline-block
                        height:22px
                        font-size:12px
                        font-weight:normal
            .settlement
                background:rgba(255,255,255,0.2)
                flex:0 0 105px
                font-size:14px
                font-weight:bold
                padding:0 8px
                line-height:46px
                text-align:center
                &.active
                    background:#00b43c
                    color:#fff
        .car-warp
            position:fixed
            bottom:0
            left:0
            max-height:248px
            width:100%
            background:#f3f5f7
            margin-bottom:46px
            z-index:10
            .title
                height:40px
                padding:0 18px
                border-bottom:1px solid rgba(7,17,27,0.1)
                .text
                    float:left
                    font-size:14px
                    color:rgb(7,17,27)
                    line-height:40px
                .empty
                    font-size:12px
                    color:rgb(0,160,220)
                    float:right
                    line-height:40px
            .car-detail
                .item-box
                    padding:0 18px 20px 18px
                    .item
                        height:48px
                        line-height:48px
                        border-bottom:1px solid rgba(7,17,27,0.1)
                        .food-name
                            float:left
                            font-size:14px
                            color:rgb(7,17,27)
                        .car-count
                            float:right
                            color:red
                            .price
                                display:inline-block
                            .car-count-box
                                display:inline-block
                                height:20px
                                line-height:20px
                                display:inline-block
</style>
<script >
import Boutton from "../button/button.vue"
    export default{
        props:{
            deliveryPrice:{
                type:Number,
                default:0
            },
            minPrice:{
                type:Number,
                default: 0
            },
            sellerFoods:{
                type:Array,
                default(){
                    return [{
                        price: 0,
                        count: 0
                    }]
                }
            }
        },
        computed: {
          totalPrice() {
            let total = 0;
            this.sellerFoods.forEach(function(food){
              total += food.price * food.count;
            });
            return total;
          },
          tocon(){
            if(this.totalPrice===0){
                return "¥"+this.minPrice+"元起送";
            }else if(this.minPrice>this.totalPrice){
                let num = this.minPrice - this.totalPrice;
                return "还差"+num+"元起送"
            }else{
                return "去结算";
            }
          },
          carCount(){
            let counts = 0;
            this.sellerFoods.forEach(function(food){
              counts +=food.count;
            });
            return counts
          }
        },
        mounted(){
        },
        components:{
            "v-button":Boutton
        },
        methods:{
            empty(){
                this.sellerFoods.forEach((food)=>{
                    food.count=0;
                    this.state=false;
                })
            }
        },
        data(){
            return {
                state:false
            }
        }
    }
</script>