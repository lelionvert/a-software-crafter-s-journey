<template>
    <div class="main">
        <Navbar/>
        <nuxt/>
        <Footer/>
        <script defer src="https://friconix.com/cdn/friconix.js"> </script>
    </div>
</template>

<script>
    import Navbar from '~/components/navbar.vue'
    import Footer from '~/components/footer.vue'

    export default {
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style>
    body {
        background-color: #f5f5f5 !important;
        min-height: 100vh;
    }
</style>
