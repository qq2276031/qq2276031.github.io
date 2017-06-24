<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
        <div class="tab-item">
            <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/seller">商家</router-link>
        </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue'
import data from '../data.json'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      seller:{}
    }
  },
  mounted(){
    var _this=this;
    this.$http.get('../data.json')
    .then(function(res){
      _this.seller=res.data.seller;
    })
    .catch(function(err){
      console.log(err)
    })
  },
    components:{
        'v-header':header,
    }

}
</script>


<style lang="stylus" rel="stylesheet/stylus">
@import "assets/css/common.styl"
#app
  .tab
    display:flex
    height:40px
    line-height:40px
    background:#fff
    .tab-item
      flex:1
      text-align:center
      border-bottom:1px solid rgba(7,17,27,0.1)
      &>a
        display:block
        font-size:14px
        color:rgb(77,85,93)
        &.router-link-active
          color:rgb(240,20,20)



</style>

