<script setup>
defineProps({
    categories: Array
})
</script>

<template>
    <div class="footer__wrapper">
        <div class="footer">
            <div class="footer__company">
                <div class="footer__logo">
                    <img src="/logo.png" alt="Elemes.id" />
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
</template>

<style scoped>
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

@media only screen and (max-width: 1023px) {
    .footer__wrapper {
        margin-top: 5rem;
    }

    .footer {
        display: block;
        grid-template-columns: unset;
    }
}

@media only screen and (max-width: 767px) {
    .footer__wrapper {
        margin-top: 0;
        padding: 2.5rem 0.5rem;
    }
}
</style>