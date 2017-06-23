<template>
    <div class="star">
        <span class="star-rate" :class="starState[0]"></span>
        <span class="star-rate" :class="starState[0]"></span>
        <span class="star-rate" :class="starState[0]"></span>
        <span class="star-rate" :class="starState[0]"></span>
        <span class="star-rate" :class="starState[2]"></span>
    </div>
</template>
<style lang="stylus" rel="typesheet/stylus" >
@import "../../assets/css/common.styl"
   .star
    font-size:0
    text-align:center
    display:inline-block
    vertical-align:top
    .star-rate
        display:inline-block
        width:18px
        height:18px
        background-size:18px
        &.on
            bg-img("star24_on")
        &.off
            bg-img("star24_off")
        &.half
            bg-img("star36_half")
</style>
<script>
export default{
    data(){
        return {
            starState:['on','off','half']
        }
    }
}
</script>