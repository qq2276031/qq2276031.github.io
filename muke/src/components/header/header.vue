<template>
    <div class="header">
        <div class="content-warp">
            <div class="picture">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="store-information">
                <div class="store-name">
                    <span class="brand">
                    </span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="service">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="supports">
                    <span class="icon-img" :class="iconStata[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="supports-count">
                <span class="count" @click="popup">5个</span>
                <div class="triangle-facing-right"></div>
            </div>
        </div>
        <div class="bulletin-warp" @click="popup">
            <span class="bulletin-icon"></span>
            <span class="text">
                {{seller.bulletin}}
            </span>
            <span class="triangle-facing-right positions"></span>
        </div>
        <div class="background-img">
            <img :src="seller.avatar">
        </div>
        <transition
    enter-active-class="animated zoomInLeft"
    leave-active-class="animated zoomOutRight">
                <div class="popup" v-show="close">
            <div class="warp">
                <div class="goods-name">{{seller.name}}</div>
                <div class="star1">
                    <span class="star-rate" :class="starState[0]"></span>
                    <span class="star-rate" :class="starState[0]"></span>
                    <span class="star-rate" :class="starState[0]"></span>
                    <span class="star-rate" :class="starState[0]"></span>
                    <span class="star-rate" :class="starState[2]"></span>
                </div>
                <div class="box-warp">
                    <div class="title">
                        <span class="title-line"></span>
                        <span class="title-content">优惠信息</span>
                        <span class="title-line"></span>
                    </div>
                    <ul class="box">
                        <li v-for="(value,index) in seller.supports" class="supports-msg">
                            <span class="icon" :class="iconStata[seller.supports[index].type]"></span>
                            <span class="text">{{seller.supports[index].description}}</span>
                        </li>
                    </ul>
                </div>
                <div class="box-warp">
                    <div class="title">
                        <span class="title-line"></span>
                        <span class="title-content">商家公告</span>
                        <span class="title-line"></span>
                    </div>
                    <div class="bulletin-content">
                        {{seller.bulletin}}
                    </div>
                </div>
                <div class="close">
                    <span class="close-icon" @click="popup">+</span>
                </div>
            </div>
            <div class="bg-blur">
                <div class="bg">

                </div>
            </div>
        </div>
</transition>

    </div>
</template>

<script>
    export default{
        props: {
          seller: {
            type: Object
          }
        },
        data(){
            return{
                iconStata:["decrease","discount","guarantee","invoice","special"],
                starState:['on','off','half'],
                close:false
            }
        },
        methods:{
            popup(){
                this.close=!this.close;
            }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/css/common.styl"
    .header
        color:#fff
        background-color:rgba(7,17,27,0.5)
        position:relative
        .content-warp
            position:relative
            font-size:0
            padding:24px 0 18px 24px
            .picture
                display:inline-block
                margin-right:16px
                &>img
                    border-radius:4px
            .store-information
                font-size:14px
                display:inline-block
                vertical-align:top
                .store-name
                    margin-bottom:8px
                    .brand
                        display:inline-block
                        width:30px
                        height:18px
                        bg-img("brand")
                        background-size:30px 18px
                    .name
                        fontSize(16px)
                        vertical-align:top
                        font-weight:bold
                .service,.supports
                    fontSize(12px)
                .service
                    margin-bottom:10px
                .supports
                    .icon-img
                        display:inline-block
                        width:10px
                        height:10px
                        background-size:10px 10px
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
            .supports-count
                position:absolute
                padding:7px 8px
                right:12px
                bottom:18px
                font-size:10px
                line-height:12px
                background-color:rgba(0,0,0,0.1)
                border-radius:12px
        .bulletin-warp
            position:relative
            height:28px
            line-height:28px
            padding:0 12px
            text-overflow:ellipsis
            white-space:nowrap
            overflow:hidden
            background-color:rgba(0,0,0,0.1)
            .bulletin-icon
                display:inline-block
                width:22px
                height:12px
                vertical-align:top
                margin-top:8px
                bg-img("bulletin")
                background-size:22px 12px
            .text
                font-size:12px
                margin:0 1px
            .positions
                position:absolute
                right:10px
                top:10px
        .background-img
            position:absolute
            z-index:-10
            width:100%
            height:100%
            top:0
            left:0
            &>img
                width:100%
                height:100%
                filter:blur(10px)
        .popup
            position:fixed
            top:0
            left:0
            z-index:1000
            width:100%
            height:100%
            background-color:rgba(7,17,27,0.8)
            .warp
                position:relative
                padding:64px 36px 32px 32px
                height:100%
                .goods-name
                    font-size:18px
                    line-height:18px
                    font-weight:bold
                    text-align:center
                .star1
                    font-size:0
                    text-align:center
                    vertical-align:top
                    margin:8px 0 16px 0
                    .star-rate
                        display:inline-block
                        width:24px
                        height:24px
                        background-size:24px
                        &.on
                            bg-img("star24_on")
                        &.off
                            bg-img("star24_off")
                        &.half
                            bg-img("star36_half")
                .box-warp
                    .title
                        display:flex
                        text-align:center
                        font-size:0
                        .title-line
                            flex:1
                            vertical-align:top
                            width:108px
                            margin-top:7px
                            border-top:1px solid rgba(255,255,255,0.5)
                        .title-content
                            flex:1
                            vertical-align:top
                            font-size:14px
                            font-weight:bold
                            margin:0
                    .box
                        padding:0 12px
                        margin:22px 0 28px 0
                        .supports-msg
                            margin-bottom:12px
                            .icon
                                display:inline-block
                                width:16px
                                height:16px
                                background-size:16px 16px
                                vertical-align:top
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
                                vertical-align:top
                                font-size:12px
                                line-height:16px
                    .bulletin-content
                        padding:24px 12px 0 12px
                        font-size:12px
                        line-height:24px
                        text-align:justify
                .close
                    position:absolute
                    bottom:16%
                    left:49%
                    z-index:100
                    .close-icon
                        display: inline-block
                        font-size: 40px
                        font-weight: 400
                        line-height: 40px
                        text-shadow: 0 1px 2px rgba(0,0,0,.1)
                        -o-transform: rotate(45deg)
                        -moz-transform: rotate(45deg)
                        -webkit-transform: rotate(45deg)
                        -ms-transform: rotate(45deg)
            .bg-blur
                position: absolute
                z-index: -10
                width: 100%
                height: 100%
                top: 0
                left: 0
                .bg
                    background-color: rgba(7,17,27,0.8)
                    width:100%
                    height:100%
                    filter:blur(10px)








</style>
