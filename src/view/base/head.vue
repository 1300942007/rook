<template>
    <div class="head-box">
        <base-link class="head-left" @click="headLeftBack">
            <slot name="head-left">
                {{headLeft}}
            </slot>
        </base-link>
        <div class="head-text" v-if="headType" @click="headTitleBack">
            <slot name="head-text">
                {{headTitle}}
            </slot>
        </div>
        <div class="head-text" v-else>
            <input class="head-input icon" type="text" v-model="headTitle" :placeholder="headInput">
        </div>
        <base-link class="head-right" @click="headRightBack">
            <slot name="head-right">
                {{headLeft}}
            </slot>
        </base-link>
    </div>
</template>

<script>
    export default {
        name: "BaseHead",
        props: {
            headType: {
                type: Boolean,
                default: false
            },
            headLeft: {
                type: String,
                default: ''
            },
            headLeftUrl: {
                type: String,
                default: ''
            },
            headTitle: {
                type: String,
                default: ''
            },
            headInput: {
                type: String,
                default: '\ue611 请输入搜索内容'
            },
            headRight: {
                type: String,
                default: ''
            },
            headRightUrl: {
                type: String,
                default: null
            },
        },
        watch: {
            headTitle (data) {
                this.$emit('headInputBack', data)
            }
        },
        methods: {
            headLeftBack () {
                var that = this
                if (!(that.$props.headLeftUrl == undefined || that.$props.headLeftUrl == null)) {
                    if (that.$base.isNull(that.$props.headLeftUrl)){
                        that.$router.go(-1)
                    } else{
                        that.$router.push(that.$props.headLeftUrl)
                    }
                    return true
                } else {
                    return false
                }
            },
            headTitleBack () {
                var that = this
                that.$emit('headTitleBack', that.$props.headTitle)
            },
            headRightBack () {
                var that = this
                if (that.$base.isNull(that.$props.headRightUrl)){
                    that.$emit('headRightBack', that.$props.headTitle)
                } else {
                    that.$router.push(that.$props.headRightUrl)
                }
            }
        }
    }
</script>

<style scoped>

</style>