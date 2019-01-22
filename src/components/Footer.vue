<template>
    <div>
        <footer class="center fixed">
            <a class="grey-text text-lighten-4 " href="https://github.com/JovanMilosevic1" target="_blank">
                &copy; {{ new Date().getFullYear() }} Jovan Milosevic
            </a>  
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    }
}
</script>

<style>
    footer{
        background-color: rgb(230, 93, 93);
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 10px
    }
</style>
