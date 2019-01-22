<template>
    <div>
        <!-- <h1> Page Not Found </h1> -->
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    created() {
        this.$router.push({ name: 'Index' })
    }
}
</script>

<style>

</style>
