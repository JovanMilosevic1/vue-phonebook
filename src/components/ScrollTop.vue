<template>
    <div>
        <a href="#" v-scroll-to="'#app'">
            <i class="material-icons scroll-up"> airplanemode_active </i> 
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
    .scroll-up{
        position:fixed;
        color: #000;
        right:5px;
        top:80%;
    }
</style>
