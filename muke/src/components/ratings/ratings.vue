<template>
    <div class="ratings">
        <div class="ratings-wrap">
            <div class="star-wrap">
                <div class="score">
                    <div class="num">
                        {{seller.score}}
                    </div>
                    <div class="rankRate-wrap">
                        综合评分
                    </div>
                    <div class="rankRate">
                        高于周边商家{{seller.rankRate}}%
                    </div>
                </div>
                <div class="star-box">
                    <div class="star_box">
                        服务态度
                        <v-star></v-star>
                        <span class="num">{{seller.score}}</span>
                    </div>
                   <div class="star_box">
                        服务态度
                        <v-star></v-star>
                        <span class="num">{{seller.serviceScore}}</span>
                    </div>
                    <div class="text">
                        送达时间
                        <span>44分钟</span>
                    </div>

                </div>
            </div>
            <div class="content-wrap">
                <div class="button">
                    <div class="all">
                        全部
                    </div>
                    <div class="satisfy">
                        满意
                    </div>
                    <div class="unsatisfy">
                        不满意
                    </div>
                </div>
                <div class="con">
                    <span class="icon-check_circle"></span>只看有内容的评价
                </div>
                <div class="user-rating">

                </div>
            </div>
            <div class="user">
                <ul class="user-wrap">
                    <li v-for="v in goods" class="user-item">
                        <div class="avatar">
                            <img :src="v.avatar" alt="">
                        </div>
                        <div class="user-name">
                            {{v.username}}
                            <div class="star1">
                                <v-star></v-star>&nbsp;&nbsp;80分钟送达
                            </div>
                        </div>
                        <div class="time">
                            {{v.rateTime | discount}}
                        </div>
                        <div class="content">
                            {{v.text}}
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        <v-shopcar></v-shopcar>
    </div>
</template>
<style lang="stylus" rel="typesheet/stylus">
.ratings
    .ratings-wrap
        .star-wrap
            padding:18px 0
            display:flex
            width:100%
            border-bottom:1px solid rgba(7,17,27.0.1)
            margin-bottom:10px
            .score
                flex:0 0 99px
                padding:0 18px
                text-align:center
                .num
                    font-size:24px
                    color:rgb(255,153,0)
                    line-height:28px
                .rankRate-wrap
                    margin:6px 0 8px 0
                    font-size:12px
                    color:rgb(7,17,27)
                    line-height:12px
                .rankRate
                    font-size:10px
                    color:rgb(147,153,159)
                    line-height:12px
            .star-box
                border-left:1px solid rgba(7,17,27.0.1)
                flex:1
                padding:0 24px
                line-height:18px
                font-size:12px
                .num
                    color:rgb(255,153,0)
                    line-height:18px
            .text
                &>span
                    color:rgb(147,153,159)
        .content-wrap
            border-top:1px solid rgba(7,17,27.0.1)
            .button
                margin: 0 18px
                padding:18px 0
                border-bottom:1px solid rgba(7,17,27.0.1)
                font-size:12px
                color:#fff
                .all
                    display:inline-block
                    padding:8px 12px
                    border-radius:2px
                    background:rgb(0,160,220)
                .satisfy
                    display:inline-block
                    padding:8px 12px
                    background:rgba(0,160,220.0.2)
                    color:rgb(77,89,93)
                .unsatisfy
                    display:inline-block
                    padding:8px 12px
                    background:rgba(77,89,93.0.2)
                    color:rgb(77,89,93)
            .con
                padding:18px 18px
                color:rgb(147,153,159)
                font-size:14px
                border-bottom:1px solid rgba(7,17,27.0.1)

        .user
            .user-wrap
                padding:0 18px
                .user-item
                    margin:18px 0
                    border-bottom:1px solid rgba(7,17,27,0.1)
                    .avatar
                        display:inline-block
                        width:28px
                        height:28px
                        &>img
                            border-radius:28px
                            width:28px
                            height:28px
                    .user-name
                        vertical-align:top
                        display:inline-block
                        font-size:12px
                        color:rgb(7,17,27)
                        padding-left:6px
                        .star1
                            margin:4px 6px 6px 0
                            color:rgb(147,153,159)
                            .star-rate
                                width:12px
                                height:12px
                                background-size:12px
                    .time
                        color:rgb(147,153,159)
                        margin-top:4px
                        float:right
                        vertical-align:top
                        display:inline-block
                        font-size:12px
                    .content
                        font-size:12px
                        color:rgb(7,17,27)
                        line-height:18px
                        margin-left:40px
                        padding:8px 0


</style>
<script>
import star from "../star/star.vue"
import shopCar from "../shopCar/shopCar.vue"
export default{
    props:{
        seller:{
            type:Object
        }
    },
    data(){
        return{
            goods:{}
        }
    },
    components:{
        "v-star":star,
        "v-shopcar":shopCar
    },
    mounted(){
        var _this=this;
        this.$http.get("../../data.json").then(function(res){
            _this.goods=res.data.goods[0].foods[2].ratings;
        })
    }

}
</script>