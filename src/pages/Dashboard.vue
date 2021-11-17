<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'

const options =
{
    type: 'loop',
    perPage: 5,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    breakpoints: {
        1023: {
            perPage: 3
        },
        767: {
            perPage: 2
        },
        374: {
            perPage: 1
        }
    }
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

const fullRate = 5

const splide = ref('')

const prevCategory = () => {
    splide.value.splide.go('<')
}

const nextCategory = () => {
    splide.value.splide.go('>')
}

</script>
<template>
    <Navbar />

    <div class="banner__background">
        <img src="/background.png" alt="Background" />
    </div>

    <div class="content__wrapper">
        <div class="container">
            <Banner />

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
                                        <span>{{ category.total }} items</span>
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
                    <div
                        class="trending__list"
                        :class="item.category.toLowerCase()"
                        v-for="(item, index) in trending"
                        :key="index"
                    >
                        <div class="trending__background">
                            <img src="background.png" alt="Background" />
                        </div>
                        <div class="trending__image">
                            <img :src="item.image" :alt="item.name" />
                        </div>
                        <div class="trending__details">
                            <div class="trending__name">
                                <span>{{ item.name }}</span>
                            </div>
                            <div class="trending__category-name">
                                <span>{{ item.category }}</span>
                            </div>
                            <div class="trending__rating">
                                <span v-for="rate in item.rating" :key="rate">
                                    <img src="stars-checked.png" alt="stars checked" />
                                </span>
                                <span v-for="rate in (fullRate - item.rating)" :key="rate">
                                    <img src="stars.png" alt="stars" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="trending__button">
                        <button class="btn trending__all-receipt">ALL Receipt</button>
                    </div>
                </div>
            </div>
            <div class="footer__wrapper">
                <div class="footer">
                    <div class="footer__company">
                        <div class="footer__logo">
                            <img src="logo.png" alt="Elemes.id" />
                        </div>
                        <div class="footer__address">
                            <span>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</span>
                        </div>
                        <div class="footer__social-media">
                            <div class="footer__social-media-list">
                                <FontAwesomeIcon :icon="['far', 'envelope']"></FontAwesomeIcon>
                            </div>
                            <div class="footer__social-media-list">
                                <FontAwesomeIcon :icon="['fas', 'phone-alt']"></FontAwesomeIcon>
                            </div>
                            <div class="footer__social-media-list">
                                <FontAwesomeIcon :icon="['fab', 'instagram']"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div class="footer__category">
                        <div class="footer__title">
                            <span>Categories</span>
                        </div>
                        <div class="footer__content">
                            <div
                                class="footer__menu-list"
                                v-for="(category, index) in categories"
                                :key="index"
                            >
                                <div class="footer__category-name">
                                    <router-link to="/">{{ category.name }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer__about-us">
                        <div class="footer__title">
                            <span>About Us</span>
                        </div>
                        <div class="footer__content">
                            <div class="footer__menu-list">
                                <router-link to="/">About Us</router-link>
                            </div>
                            <div class="footer__menu-list">
                                <router-link to="/">FAQ</router-link>
                            </div>
                            <div class="footer__menu-list">
                                <router-link to="/">Report Problem</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="footer__newsletter">
                        <div class="footer__title">
                            <span>Newsletter</span>
                        </div>
                        <div class="footer__content">
                            <div class="footer__newsletter-description">
                                <span>Get now free 50% discount for all products on your first order</span>
                            </div>
                            <div class="footer__newsletter-form">
                                <div class="input-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your email address"
                                    />
                                    <div class="input-group-append">
                                        <button
                                            class="btn footer__newsletter-submit-button"
                                            type="button"
                                        >SEND</button>
                                    </div>
                                </div>
                            </div>
                            <div class="footer__newsletter-email">
                                <FontAwesomeIcon :icon="['far', 'envelope']"></FontAwesomeIcon>
                                <span>elemesid@gmail.com</span>
                            </div>
                            <div class="footer__newsletter-phone-number">
                                <FontAwesomeIcon :icon="['fas', 'phone-alt']"></FontAwesomeIcon>
                                <span>0888 111 2222</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright__wrapper">
                <div class="copyright">
                    <span>© 2021 ELEMES ID. ALL RIGHTS RESERVED</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.category__wrapper {
    padding: 2rem;
    margin-top: 2rem;
}
.category__header,
.trending__header {
    font-size: 38px;
    font-weight: 500;
    color: black;
    line-height: 50px;
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

.category__background,
.trending__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
}

.category__background img,
.trending__background img {
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

.category__receipt-list:hover,
.trending__list:hover {
    transform: scale(1.1);
}

.category__receipt-list:hover .category__background,
.trending__list:hover .trending__background {
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

.trending__wrapper {
    padding: 1rem;
}

.trending__receipt {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.1rem;
}

.trending__list {
    position: relative;
    border-radius: 17px;
    padding: 2rem 0.8rem;
    transition: 0.5s;
}

.trending__image {
    position: relative;
    margin-bottom: 1.5rem;
    z-index: 9;
}

.trending__details {
    position: relative;
    z-index: 9;
}

.trending__name {
    font-size: 26px;
    font-weight: 500;
    color: black;
}

.trending__category-name {
    font-size: 18px;
    font-weight: 500;
    color: #8bac3e;
}

.trending__button {
    grid-column-start: 1;
    grid-column-end: 5;
    text-align: center;
    padding: 2rem;
}

.trending__button button {
    background: #8bac3e;
    border-radius: 100px;
    color: white;
    padding: 0.6rem 1.5rem;
    font-size: 16px;
    font-weight: 500;
}

.footer__wrapper {
    margin-top: 7rem;
    padding: 2.5rem 1rem;
    background: #f9fff6;
    border-radius: 20px;
}

.footer {
    display: grid;
    grid-template-columns: 2fr repeat(2, 1fr) 1.5fr;
    gap: 1rem;
}

.footer a {
    color: #757575;
    text-decoration: none;
}

.footer__logo {
    margin-bottom: 1.5rem;
}

.footer__address {
    line-height: 20px;
    margin-bottom: 1.5rem;
}

.footer__social-media {
    display: flex;
    gap: 0.5rem;
}

.footer__social-media-list {
    background: white;
    border-radius: 50%;
    padding: 0.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
}

.footer__social-media-list svg {
    width: 20px;
    height: 20px;
}

.footer__social-media-list:hover {
    background: #8bac3e;
    color: white;
}

.footer__company,
.footer__category,
.footer__about-us,
.footer__newsletter {
    padding: 1.5rem;
}

.footer__title {
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 2rem;
}

.footer__content {
    display: flex;
    flex-direction: column;
    gap: 19px;
}

.footer__newsletter-description {
    line-height: 24px;
}

.footer__newsletter-form input {
    border: 1px solid black;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    font-size: 14px;
    color: black;
    line-height: 24px;
}

.footer__newsletter-form input::placeholder {
    font-size: 14px;
    color: black;
}

.footer__newsletter-form .footer__newsletter-submit-button {
    font-size: 14px;
    background: #8bac3e;
    border: none;
    color: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.footer__newsletter-email,
.footer__newsletter-phone-number {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.footer__newsletter-email svg,
.footer__newsletter-phone-number svg {
    color: #8bac3e;
    height: 16px;
    width: 16px;
}
.footer__newsletter-email span,
.footer__newsletter-phone-number span {
    color: black;
}
.copyright__wrapper {
    padding: 4rem 2rem 2rem;
    text-align: center;
}
.copyright {
    font-size: 12px;
}

@media only screen and (max-width: 1365px) {
    .trending__receipt {
        grid-template-columns: repeat(3, 1fr);
    }

    .trending__button {
        grid-column-start: 1;
        grid-column-end: 4;
    }
}

@media only screen and (max-width: 1023px) {
    .category__carousel:deep() .splide__custom-arrows {
        display: none;
    }

    .trending__receipt {
        grid-template-columns: repeat(2, 1fr);
    }

    .trending__button {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .footer__wrapper {
        margin-top: 5rem;
    }

    .footer {
        display: block;
        grid-template-columns: unset;
    }
}

@media only screen and (max-width: 767px) {
    .category__wrapper,
    .trending__wrapper {
        padding: 2rem 0.5rem;
    }

    .category__header,
    .trending__header {
        font-size: 24px;
        line-height: 30px;
    }

    .trending__receipt {
        display: block;
        grid-template-columns: unset;
        gap: unset;
    }

    .trending__list {
        margin-bottom: 1.1rem;
        padding: 2rem 1.5rem;
    }

    .footer__wrapper {
        margin-top: 0;
        padding: 2.5rem 0.5rem;
    }
}
</style>