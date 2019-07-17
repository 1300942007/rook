import axios from 'axios'
import Router from '@/router/index'
import Base from '__ASS__/js/base.js'
// 请求状态
let requestStatus = true
/**
 * 请求前时 拦截器
 */
axios.interceptors.request.use(config => {
    config.async = true
    config.crossDomain = true
    config.withCredentials = true

    if (requestStatus){
        requestStatus = false
    }else{
        return false;
    }

    return config
}, err => {
    return Promise.reject(err)
})
/**
 * 请求后时 拦截器
 */
axios.interceptors.response.use(response => {
    // 请求成功
    requestStatus = true
    let res = response.data

    return response
}, error => {
    // 请求错误 处理
    requestStatus = true
    if (error.response) {
        switch (error.response.status) {
            case 404:
                alert('资源不存在！')
        }
    }

    return Promise.reject(error.response.data)
})


class request {
    /**
     * 生成请求 URL
     * @param string url
     * @param object param get的参数
     * @returns {string}
     */
    url (url, param) {
        var host = process.env.API_HOST, route = Router.app.$route, default_param = new String()
        for (var i in param){
            var key = i, val = Base.isNull(param[i]) ? route.query[i] : param[i]
            if (!(Base.isNull(val))){
                default_param +=  '&' + key + '=' + val
            }
        }
        return (host + url + (default_param ? default_param.replace(/^\&*/,"?") : ''))
    }

    /**
     * get 请求
     * @param url
     * @param successBack
     * @param errorBack
     */
    get (url, successBack, errorBack) {
        axios.get(url).then(res => {
            var item = res.data
            if (Base.isType(successBack) == 'function') {
                return successBack(item['code'], item['data'], item['info'])
            }else {
                return true
            }
        }).catch(res=> {
            if (Base.isType(errorBack) == 'function') {
                return errorBack(res)
            }else{
                return false
            }
        })
    }

    /**
     * post 请求
     * @param url
     * @param params
     * @param successBack
     * @param errorBack
     */
    post (url, params, successBack, errorBack) {
        axios.post(url, params).then(res => {
            var item = res.data
            if (Base.isType(successBack) == 'function') {
                return successBack(item['code'], item['data'], item['info'])
            }else {
                return true
            }
        }).catch(res=> {
            if (Base.isType(errorBack) == 'function') {
                return errorBack(res)
            }else{
                return false
            }
        })
    }
}
export default new request()