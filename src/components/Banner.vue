<template>
    <div class="banner__wrapper">
        <div class="banner__content">
            <div class="banner__title">
                <span>Good Food Us Good Mood</span>
            </div>
            <div class="banner__image-mobile">
                <img src="banner-mobile.png" alt="Banner mobile" />
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
</template>

<style scoped>
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

.banner__image-mobile {
    display: none;
}

.banner__image-mobile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    box-shadow: 0 0 13px 3px lightgrey;
}
.banner__sign-up a {
    color: white;
    text-decoration: none;
    font-weight: 500;
}

.banner__about-us {
    background: #f2f2f2;
    padding: 10px 20px;
    border-radius: 25px;
}

.banner__about-us a {
    color: black;
    text-decoration: none;
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

@media only screen and (max-width: 1365px) {
    .banner__image img {
        width: 400px;
    }
}

@media only screen and (max-width: 1023px) {
    .banner__wrapper {
        padding: 4rem 1rem 1rem;
    }

    .banner__image-mobile {
        display: block;
    }

    .banner__image {
        display: none;
    }
}

@media only screen and (max-width: 767px) {
    .banner__wrapper {
        padding: 3rem 0.5rem 1rem;
    }
    .banner__title {
        font-size: 48px;
        margin-bottom: 20px;
    }
}
</style>