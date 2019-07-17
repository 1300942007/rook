<template>
    <router-link v-if="link != null" :to="link">
        <slot></slot>
    </router-link >
    <a v-else>
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "BaseLink",
        props: {
            link: {
                type: [String, Object],
                default: null
            }
        }
    }
</script>

<style scoped>

</style>
