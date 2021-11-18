<script setup>
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

</script>

<template>
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
                    <img src="/background.png" alt="Background" />
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
                            <img src="/stars-checked.png" alt="stars checked" />
                        </span>
                        <span v-for="rate in (fullRate - item.rating)" :key="rate">
                            <img src="/stars.png" alt="stars" />
                        </span>
                    </div>
                </div>
            </div>
            <div class="trending__button">
                <button class="btn trending__all-receipt">ALL Receipt</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.trending__header {
    font-size: 38px;
    font-weight: 500;
    color: black;
    line-height: 50px;
}

.trending__title-receipt {
    color: #8bac3e;
}

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

.trending__background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.trending__list:hover {
    transform: scale(1.1);
}

.trending__list:hover .trending__background {
    opacity: 0.09;
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
    .trending__receipt {
        grid-template-columns: repeat(2, 1fr);
    }

    .trending__button {
        grid-column-start: 1;
        grid-column-end: 3;
    }
}

@media only screen and (max-width: 767px) {
    .trending__wrapper {
        padding: 2rem 0.5rem;
    }

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
}
</style>