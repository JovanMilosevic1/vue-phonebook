<template>
    <div>
        <input type="text" @keyup="searchByName" v-model="search" placeholder="search by name">
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchByName() {
            this.$emit('search' , this.search)
        }
    }
}
</script>

<style>

</style>
