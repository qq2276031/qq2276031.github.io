import {INCREMENT} from './types'
import getters from './getters'
const state = {price: 10, count: 1};
const mutations = { 
    [INCREMENT](state) {
        state.count++
    } ,
    totalPrice() {
        let total = 0;
        this.sellerFoods.forEach(function(food){

          total += food.price * food.count;
          console.log(total)
        });
        return total;
    }
}
export default {state,mutations,getters}