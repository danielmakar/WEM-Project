<template>
    <div class="container">
        <h1>Vertical:</h1>
        <div class="horizontal-container">
            <Menu orientation="vertical" :items="menu1"></Menu>
        </div>
        <h1>Horizontal:</h1>
        <div class="vertical-container">
            <Menu orientation="horizontal" :items="menu2"></Menu>
        </div>
    </div>
    
</template>

<script>
import Menu from "./Menu.vue";

export default {
    components: {
        Menu
    },
    data: function() {
        return {
            menu1: ['Promise', 'async', 'fetch', 'callback', 'class'],
            menu2: ['HTML', 'CSS', 'JavaScript', 'Other']
        }
    }
}
</script>

<style>
    .horizontal-container {
        width: 200px; 
        height: 300px;
    }
    .vertical-container {
        width: 600px; 
        height: 100px;
    }

</style>