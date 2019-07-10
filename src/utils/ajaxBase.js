//统一的ajax的请求

import axios from 'axios';
import router from '../router/'
const ajax = axios.create({
    baseURL:'http://any-host:3000'  //任意服务器地址
});


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    router.push('/login');
    return config;
  }, function (einterrror) {
    // Do something with request error
    return Promise.reject(error);
  });



export default {
    get:(url,data)=>{
        return ajax.get(url,{
            params:data
        });
    },
    post:function(url,data){
        return ajax.post(url,data);
    },
    /**
     * 
     * get1:function(arg1){
     * } 
     */
    get1(arg1){

    }
}