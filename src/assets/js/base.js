/**
 * 公共类
 */
class base {
    /**
     * 初始化
     */
    constructor () {
        this.setRem()
    }
    /**
     * 计算rem
     */
    setRem () {
        let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
        let htmlDom = document.getElementsByTagName('html')[0]
        htmlDom.style.fontSize = (htmlWidth / 10) + 'px'
    }

    /**
     * 获取类型
     * @param data
     * @returns {string}
     */
    isType (data) {
        var type = Object.prototype.toString
        if (type.call(data) == '[object String]') {
            return 'string'
        }else if (type.call(data) == '[object Array]') {
            return 'array'
        }else if (type.call(data) == '[object Object]') {
            return 'object'
        }else if (type.call(data) == '[object Boolean]') {
            return 'boolean'
        }else if (type.call(data) == '[object Null]') {
            return 'null'
        }else if (type.call(data) == '[object Undefined]') {
            return 'undefined'
        }else if (type.call(data) == '[object Function]') {
            return 'function'
        }else if (type.call(data) == '[object Number]') {
            return 'number'
        }
    }
    /**
     * 获取长度
     * @param data
     * @returns {*}
     */
    length (data) {
        var type = this.isType(data)
        if (type == 'array'){
            return data.length
        }else if (type == 'object') {
            return Object.keys(data).length
        }else if (type == 'string') {
            return data.length
        }else {
            return 0
        }
    }
    /**
     * 是否为空
     * @param data
     * @returns {boolean}
     */
    isNull (data) {
        var type = this.isType(data)
        if (type == 'array'){
            return JSON.stringify(data) == '[]' ? true : false
        }else if (type == 'object') {
            return JSON.stringify(data) == '{}' ? true : false
        }else {
            if (data == null || data == undefined || data === ''){
                return true
            } else{
                return false
            }
        }
    }
    /**
     * 和PHP一样的时间戳格式化函数
     * @param {string} format 格式
     * @param {int} timestamp 要格式化的时间 默认为当前时间
     * @return {string}   格式化的时间字符串
     */
    timeDate(format, timestamp){
        var date = new Date(timestamp ? timestamp * 1000 : null);
        var f = {
            Y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            H: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds()
        }
        if (f['m'] >= 1 && f['m'] <= 9) {
            f['m'] = "0" + f['m'];
        }
        if (f['d'] >= 0 && f['d'] <= 9) {
            f['d'] = "0" + f['d'];
        }

        format = format.replace(/Y/g, f['Y'])
        format = format.replace(/m/g, f['m'])
        format = format.replace(/d/g, f['d'])
        format = format.replace(/H/g, f['H'])
        format = format.replace(/i/g, f['i'])
        format = format.replace(/s/g, f['s'])

        return format
    }

    /**
     * 所以兄弟节点
     * @param elm
     * @returns {Array}
     */
    siblings (elm) {
        var a = [], p = elm.parentNode.children;
        for(var i = 0, pl = p.length; i < pl; i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
    }
}

export default new base()