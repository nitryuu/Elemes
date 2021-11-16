<script setup>
import { ref } from 'vue'

const options =
{
    type: 'loop',
    perPage: 5,
    perMove: 1,
    gap: '1rem',
    pagination: false,
}

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

const trending = [
    {
        name: 'Pizza Paperoni',
        category: 'Pizza',
        rating: 4,
        image: 'pizza-paperoni.png'
    },
    {
        name: 'Pizza Meat',
        category: 'Pizza',
        rating: 3,
        image: 'pizza-meat.png'
    },
    {
        name: 'Doner Kebab',
        category: 'Kebab',
        rating: 5,
        image: 'doner-kebab.png'
    },
    {
        name: 'Salmon Roll',
        category: 'Salmon',
        rating: 4,
        image: 'salmon-roll.png'
    },
    {
        name: 'Cupcake Choco',
        category: 'Cupcake',
        rating: 4,
        image: 'cupcake-choco.png'
    },
    {
        name: 'Doughnut Milk',
        category: 'Doughnut',
        rating: 5,
        image: 'doughnut-milk.png'
    },
    {
        name: 'Doughnut Unicorn',
        category: 'Doughnut',
        rating: 4,
        image: 'doughnut-unicorn.png'
    },
    {
        name: 'Kathi Kebab',
        category: 'Kebab',
        rating: 4,
        image: 'kathi-kebab.png'
    },
]

const splide = ref('')

const prevCategory = () => {
    splide.value.splide.go('<')
}

const nextCategory = () => {
    splide.value.splide.go('>')
}

</script>
<template>
    <div class="navbar__wrapper">
        <div class="container">
            <div class="navbar">
                <div class="navbar__logo">
                    <img src="/logo.png" alt="Elemes ID" />
                </div>
                <div class="navbar__menu">
                    <div class="navbar__menu-list">
                        <router-link to="/">Home</router-link>
                    </div>
                    <div class="navbar__menu-list">
                        <router-link to="/">About</router-link>
                    </div>
                    <div class="navbar__menu-list">
                        <router-link to="/">
                            Promotions
                            <div class="navbar__menu-sup">HOT</div>
                        </router-link>
                    </div>
                    <div class="navbar__menu-list">
                        <router-link to="/">Blogs</router-link>
                    </div>
                    <div class="navbar__menu-list">
                        <router-link to="/">Contact Us</router-link>
                    </div>
                </div>
                <div class="navbar__auth">
                    <div class="navbar__login">
                        <router-link to="/">Masuk</router-link>
                    </div>
                    <div class="navbar__sign-up">
                        <router-link to="/">Daftar Sekarang</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="banner__background">
        <img src="/background.png" alt="Background" />
    </div>

    <div class="content__wrapper">
        <div class="container">
            <div class="banner__wrapper">
                <div class="banner__content">
                    <div class="banner__title">
                        <span>Good Food Us Good Mood</span>
                    </div>
                    <div class="banner__description">
                        <span>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</span>
                    </div>
                    <div class="banner__button">
                        <div class="banner__sign-up">
                            <router-link to="/">Daftar Sekarang</router-link>
                        </div>
                        <div class="banner__about-us">
                            <router-link to="/">About Us</router-link>
                        </div>
                    </div>
                </div>
                <div class="banner__image">
                    <img src="banner.png" alt="Banner" />
                </div>
            </div>

            <div class="category__wrapper">
                <div class="category__header">
                    <div class="category__title">
                        <span>Browse Our Category</span>
                    </div>
                    <div class="category__title-receipt">
                        <span>Receipt</span>
                    </div>
                </div>
                <div class="category__carousel">
                    <Splide :options="options" ref="splide">
                        <template #after-track>
                            <div class="splide__custom-arrows">
                                <button class="btn splide__custom-arrow" @click="prevCategory">
                                    <img src="prev-arrow.svg" alt="Previous Arrow" />
                                    Prev
                                </button>
                                <button class="btn splide__custom-arrow" @click="nextCategory">
                                    Next
                                    <img src="next-arrow.svg" alt="Next Arrow" />
                                </button>
                            </div>
                        </template>
                        <SplideSlide v-for="(category, index) in categories" :key="index">
                            <div
                                class="category__receipt-list"
                                :class="category.name.toLowerCase()"
                            >
                                <div class="category__background">
                                    <img src="background.png" alt="Background" />
                                </div>
                                <div class="category__image">
                                    <img :src="category.image" :alt="category.name" />
                                </div>
                                <div class="category__description">
                                    <div class="category__name">
                                        <span>{{ category.name }}</span>
                                    </div>
                                    <div class="category__total-items">
                                        <span>{{ category.total }}items</span>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            <div class="trending__wrapper">
                <div class="trending__header">
                    <div class="trending__title">
                        <span>Browse Our Trending</span>
                        <div class="trending__title-receipt">
                            <span>Receipt</span>
                        </div>
                    </div>
                </div>
                <div class="trending__receipt">
                    <div class="trending__list"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar__wrapper {
    padding: 1rem 2rem;
    position: relative;
    z-index: 9;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar a {
    color: black;
    text-decoration: none;
}
.navbar__logo img {
    width: 100%;
    object-fit: cover;
}

.navbar__menu {
    font-size: 14px;
    display: flex;
    gap: 32px;
    align-items: center;
}

.navbar__menu a {
    position: relative;
}

.navbar__menu-sup {
    position: absolute;
    top: -1.3rem;
    right: -1rem;
    font-size: 8px;
    color: white;
    padding: 4px 12px;
    font-weight: bold;
    background: #e7462d;
    border-radius: 9px;
}
.navbar__auth {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.navbar__sign-up {
    padding: 10px 20px;
    background: #8bac3e;
    border-radius: 50px;
}

.navbar__sign-up a {
    color: white;
}

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
.banner__wrapper {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    align-items: center;
}

.banner__title {
    font-size: 64px;
    color: #8bac3e;
    font-weight: 500;
    line-height: 64px;
    margin-bottom: 32px;
}

.banner__description {
    font-size: 18px;
    line-height: 29px;
    margin-bottom: 1.5rem;
}

.banner__button {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.banner__sign-up {
    background: #8bac3e;
    padding: 10px 20px;
    border-radius: 25px;
}
.banner__sign-up a {
    color: white;
    font-weight: 500;
}

.banner__about-us {
    background: #f2f2f2;
    padding: 10px 20px;
    border-radius: 25px;
}

.banner__about-us a {
    color: black;
    font-weight: 500;
}

.banner__image {
    flex: none;
}

.banner__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.category__header,
.trending__header {
    font-size: 38px;
    font-weight: 500;
    color: black;
}

.category__title-receipt,
.trending__title-receipt {
    color: #8bac3e;
}

.category__carousel {
    padding: 2rem 0;
}

.category__carousel:deep() .splide__track {
    overflow: unset;
}

.category__carousel:deep() .splide__arrows {
    display: none;
}

.category__carousel:deep() .splide__custom-arrows {
    padding: 2rem 10px;
    display: flex;
    gap: 1rem;
    justify-content: right;
}

.category__carousel:deep() .splide__custom-arrow {
    background: #8bac3e;
    color: white;
    padding: 5px 11px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    gap: 0.6rem;
    align-items: center;
}

.category__carousel .splide li {
    text-align: center;
}

.category__receipt-list {
    position: relative;
    padding: 2rem;
    border-radius: 8px;
}

.category__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
}

.category__background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

.category__receipt-list:hover {
    transform: scale(1.1);
}

.category__receipt-list:hover .category__background {
    opacity: 0.09;
}

.category__image {
    position: relative;
    z-index: 9;
    margin-bottom: 1rem;
}

.category__description {
    position: relative;
    z-index: 9;
}

.category__receipt-list {
    transition: 0.5s;
}
.category__image img {
    width: 42px;
    object-fit: cover;
}

.category__name {
    font-size: 16px;
    font-weight: 500;
}

.category__total-items {
    font-size: 14px;
}
</style>