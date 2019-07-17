<template>
    <div class="alert-box" v-show="status">
        <div class="alert-info">
            <div class="alert-title">{{title}}</div>
            <div class="alert-text">{{text}}</div>
            <div class="alert-button">
                <button class="alert-cancel" v-show="cancel" @click="cancelBack()">{{cancel}}</button>
                <button class="alert-confirm" v-show="confirm" @click="confirmBack()">{{confirm}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseAlert",
        data () {
            return {
                status: false,
                title: '提示',
                text: '内容',
                confirm: '确定',
                cancel: '取消',
            }
        },
        methods: {
            // 初始化配置数据
            alertInit (data){
                var that = this
                that.$data.title = data.title ||  '温馨提示'
                that.$data.text = data.text || ''
                that.$data.confirm = data.confirm || '确定'
                that.$data.cancel = data.cancel || ''
            },
            cancelBack () {

            },
            confirmBack () {

            }
        }

    }
</script>

<style lang="scss" scoped>

</style>