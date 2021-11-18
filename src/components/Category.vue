<script setup>
import { ref } from 'vue'

defineProps({
    categories: Array
})

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

const splide = ref('')

const prevCategory = () => {
    splide.value.splide.go('<')
}

const nextCategory = () => {
    splide.value.splide.go('>')
}

</script>

<template>
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
                            <img src="/prev-arrow.svg" alt="Previous Arrow" />
                            Prev
                        </button>
                        <button class="btn splide__custom-arrow" @click="nextCategory">
                            Next
                            <img src="/next-arrow.svg" alt="Next Arrow" />
                        </button>
                    </div>
                </template>
                <SplideSlide v-for="(category, index) in categories" :key="index">
                    <div class="category__receipt-list" :class="category.name.toLowerCase()">
                        <div class="category__background">
                            <img src="/background.png" alt="Background" />
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
</template>

<style scoped>
.category__wrapper {
    padding: 2rem;
    margin-top: 2rem;
}
.category__header {
    font-size: 38px;
    font-weight: 500;
    color: black;
    line-height: 50px;
}

.category__title-receipt {
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

@media only screen and (max-width: 1023px) {
    .category__carousel:deep() .splide__custom-arrows {
        display: none;
    }
}

@media only screen and (max-width: 767px) {
    .category__wrapper {
        padding: 2rem 0.5rem;
    }

    .category__header {
        font-size: 24px;
        line-height: 30px;
    }
}
</style>