<template>
    <div>
        <span v-show="food.count>0" class="icon-remove_circle_outline" @click.stop.prevent="reduce"></span>
        <span v-show="food.count>0" class="num">{{food.count}}</span>
        <span class="icon-add_circle" @click.stop.prevent="add"></span>
    </div>
</template>
<style lang="stylus" rel="typesheet/stylus" scoped>
    .icon-remove_circle_outline,.icon-add_circle
        color:rgb(0,160,220)
        font-size:20px
    .num
        display:inline-block
        width:16px
        line-height:20px
        text-align:center
        vertical-align:super
        color:rgb(147,153,159)
        font-size:10px
</style>
<script>
import Vue from "vue"
export default{
    props:{
        food:{
            type:Object
        }
    },
    methods:{
        add(){
            if(!this.food.count){
                Vue.set(this.food,'count',1)
            }else{
                this.food.count+=1;
                Vue.set(this.food,'count',this.food.count)
            }
        },
        reduce(){
            if(this.food.count<0){
                Vue.set(this.food,'count',0)
            }else{
                this.food.count-=1;
                Vue.set(this.food,'count',this.food.count)
            }
        }
    }
}
</script>