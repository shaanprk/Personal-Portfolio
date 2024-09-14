<template>
    <header class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <router-link to="/" class="navbar-logo"><img src="../assets/Cropped_Image.png"/></router-link>
            <nav class="navbar">
                <ul class="flex space-x-4 text-white">
                    <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "NavbarComponent"
    };
</script>

<style scoped>
    .navbar-logo {
        width: 100px;
        border-radius: 100%;
    }
    li {
        outline: solid black;
    }
</style>