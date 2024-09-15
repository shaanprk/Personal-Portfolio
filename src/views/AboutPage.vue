<template>
    <div class="pagewrap">
        <h1 class="text-4xl font-bold my-4">About Me</h1>
        <img src="@/assets/image-jFAr-R161-transformed.png" width="150px" alt="About Me Image">
        <div class="social-links flex space-x-4 my-4">
            <a href="https://github.com/shaanprk"><img src="@/assets/github-mark.png" alt="GitHub Logo"
                    class="h-12"></a>
            <a href="https://www.linkedin.com/in/jeongbin-sean-park/"><img src="@/assets/circle-linkedin-512.webp"
                    alt="LinkedIn Logo" class="h-12"></a>
        </div>
        <h3 class="text-2xl my-4">Who am I?</h3>
        <p>I'm an aspiring Software Engineer.</p>
        <div class="resume my-8">
            <h3 class="text-2xl mb-2">Resume</h3>
            <button id="resume-button"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Here To See
                Resume</button>
            <div id="pdf-container" class="my-4">
                <!-- <object type="application/pdf" data="../assets/Resume.pdf" width="250" height="200">
                    alt : <a href="../assets/Resume.pdf">test.pdf</a>
                </object> -->
                <object data="/Resume.pdf" type="application/pdf" width="600" height="830">
                    alt : <a href="/Resume.pdf">Download Resume</a>
                </object>
            </div>
        </div>
        <div class="spotify-data my-8">
            <h3 class="text-2xl mb-2">What Am I Listening To?</h3>
            <p>Insert Spotify API Data Here</p>
            <p>Updated Every 30 Days</p>
        </div>
        <h3 class="text-2xl my-4">Let's Connect!</h3>
        <router-link to="/contact">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Contact</button>
        </router-link>
    </div>
</template>

<script>

</script>