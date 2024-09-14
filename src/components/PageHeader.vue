<template>
    <header class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a href="/">
                <img id="logo" src="@/assets/Cropped_Image.png" alt="logo" class="h-10">
            </a>
            <nav class="navbar">
                <ul class="flex space-x-4 text-white">
                    <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li>adfa</li>
                </ul>
            </nav>
        </div>
    </header>
</template>