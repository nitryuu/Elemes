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

.navbar__login {
    font-weight: 500;
}

.navbar__sign-up {
    padding: 10px 20px;
    background: #8bac3e;
    border-radius: 50px;
}

.navbar__sign-up a {
    color: white;
}

@media only screen and (max-width: 1023px) {
    .navbar__menu {
        display: none;
    }
}

@media only screen and (max-width: 767px) {
    .navbar__wrapper {
        padding: 1rem 0.2rem;
        background: white;
    }
    .navbar {
        padding: 0.5rem;
    }
    .navbar__logo img {
        width: 130px;
    }
    .navbar__login {
        display: none;
    }
    .navbar__sign-up {
        font-size: 12px;
        padding: 8px 13px;
    }
}
</style>