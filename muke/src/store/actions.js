import * as types from './types'
export default {
     increment: ({commit}) => {commit(types.INCREMENT);},
     clickOdd: ({commit,state}) => {
    if (state.mutations.变量名 % 2 == 0) {   //--拿到数据做判断
        commit(types.INCREMENT);    //输出到app.vue的mapActions
    }
     }
}