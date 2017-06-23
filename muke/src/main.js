import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routesConfig.js'
import axios from 'axios'

Vue.use(VueRouter);
Vue.prototype.$http = axios;


Vue.filter('discount', function(time) {
    if (time) {
        var oDate = new Date();
        oDate.setTime(time);

        var y = oDate.getFullYear();
        var m = oDate.getMonth() + 1;
        var d = oDate.getDate();

        var h = oDate.getHours();
        var mm = oDate.getMinutes();
        var s = oDate.getSeconds();

        return (y + 1) + '-' + (m - 1) + '-' + d + ' ' + h + ':' + mm + ':' + s;
    }
});

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
})