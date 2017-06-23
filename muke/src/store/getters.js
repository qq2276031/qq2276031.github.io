export default { 
    sellerFoods:(state)=> {
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
}
