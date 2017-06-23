import seller from './components/seller/seller.vue'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'

export default [{
    path: '/goods',
    component: goods
}, {
    path: '/ratings',
    component: ratings
}, {
    path: '/seller',
    component: seller
}, {
    path: '/',
    redirect: '/goods'
}, {
    path: '*',
    redirect: '/goods'
}]