import Vue from 'vue'
import Base from '__ASS__/js/base.js'
import BaseAlert from '__VIEW__/base/alert'

const alertBox = Vue.extend(BaseAlert);
var instance = new alertBox().$mount();
var alertStatus = true

const alert = function (options) {
    return new Promise ((confirmBack, cancelBack ) => {
        if (alertStatus){
            document.body.appendChild(instance.$el);
            alertStatus = false
        }

        if (typeof options != "object"){
            options = {'text': options}
        }

        instance.alertInit(options);
        instance.status = true

        instance.confirmBack = function () {
            confirmBack()
            instance.status = false

        }

        instance.cancelBack = function () {
            cancelBack()
            instance.status = false
        }
    })
}

export default function (options, confirmBack, cancelBack) {
    alert(options).then(() => {
        if (Base.isType(confirmBack)  == "function"){
            confirmBack()
        }
        return true
    }).catch(()=>{
        if (Base.isType(confirmBack) == "function"){
            return cancelBack()
        }
        return false
    })
}