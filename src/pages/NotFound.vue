<template>
    <div class="container">
        <div class="not-found">
            <p class="title">Page not found</p>
            <router-link class="link" to="/">Back to calculator</router-link>
        </div>
    </div>
</template>

<style lang="scss">
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
}
.title {
    height: auto;
}
.link {
    height: auto;
    font-size: 25px;
}
</style>