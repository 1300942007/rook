<template>
    <div class="foot-box">
        <base-link  v-for="(val, key) in footData" :key="key" :class="'foot-list ' + val.class" >
            <div class="foot-icon">
                <i :class="'icon '+ val.icon"></i>
            </div>
            <div class="foot-title">{{val.title}}</div>
        </base-link>
    </div>
</template>

<script>
    export default {
        name: "BaseFoot",
        props: {
            footData: {
                type: Array,
                default: () => ([])
            }
        }
    }
</script>

<style scoped>

</style>