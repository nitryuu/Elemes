<script setup>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Category from '../components/Category.vue'
import Trending from '../components/Trending.vue'
import Footer from '../components/Footer.vue'
import Copyright from '../components/Copyright.vue'

const categories = [
    {
        name: 'Cupcake',
        total: '22',
        image: 'cupcake.png'
    },
    {
        name: 'Pizza',
        total: '25',
        image: 'pizza.png'
    },
    {
        name: 'Kebab',
        total: '12',
        image: 'kebab.png'
    },
    {
        name: 'Salmon',
        total: '22',
        image: 'salmon.png'
    },
    {
        name: 'Doughnut',
        total: '11',
        image: 'doughnut.png'
    },
]

</script>
<template>
    <Navbar />

    <div class="banner__background">
        <img src="/background.png" alt="Background" />
    </div>

    <div class="content__wrapper">
        <div class="container">
            <Banner />

            <Category :categories="categories"></Category>

            <Trending />

            <Footer :categories="categories" />

            <Copyright />
        </div>
    </div>
</template>

<style>
.banner__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0.02;
}

.banner__background img {
    width: 100%;
    height: 700px;
    object-fit: cover;
}

.content__wrapper {
    position: relative;
    z-index: 9;
}

.content__wrapper .container {
    overflow: hidden;
}

.cupcake {
    background: #f0feeb;
}

.pizza {
    background: #e4f2f4;
}

.kebab {
    background: #eaeefa;
}

.salmon {
    background: #f9eef3;
}

.doughnut {
    background: #f3f7d9;
}
</style>