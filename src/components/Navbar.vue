<template>
    <div class="navbar navbar-fixed" >
        <nav class="nav-extended grey darken-4">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">Phonebook</span>
                </router-link>
                <a  href="" 
                    class="btn-floating btn-large halfway-fab" 
                    @mouseover="isHovering = true" 
                    @mouseout="isHovering = false" 
                    :class="{pulse: isHovering}">
                    <router-link :to="{ name: 'AddContact' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    // name of comp..
    name: 'Navbar',
    data() {
        return {
            isHovering: false
        }
    }
}
</script>
<style>
    .nav-content {
        text-align: center;
    }

</style>
