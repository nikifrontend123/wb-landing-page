<template>
    <div>
        <div class="mt-4 py-5" style="background-color: #F6F7F9;">
            <div class="text-center pt-4 fs-3 fw-bold">Join India's largest Online Eco-System for Fashion Industry</div>
            <div class="d-md-flex justify-content-evenly mt-4 ">
                <div class="text-center">
                    <p class="fs-1 mb-0 d-flex justify-content-center">
                        <CounterPage :data="10"> </CounterPage>K+
                    </p>
                    <p class="fs-5 mt-0">Authorised Resellers</p>
                </div>
                <div class="text-center">
                    <p class="fs-1 mb-0 d-flex justify-content-center">
                        <CounterPage :data="50"> </CounterPage>+
                    </p>
                    <p class="fs-5 mt-0">Fashion categories</p>
                </div>
                <div class="text-center">
                    <p class="fs-1 mb-0 d-flex justify-content-center">
                        <CounterPage :data="10"> </CounterPage>K+
                    </p>
                    <p class="fs-5 mt-0 d-flex justify-content-center">products Already Listed</p>
                </div>
                <div class="text-center">
                    <p class="fs-1 mb-0 d-flex justify-content-center">
                        <CounterPage :data="50"> </CounterPage>L+
                    </p>
                    <p class="fs-5 mt-0">Happy Customer</p>
                </div>
            </div>
            <div class="d-flex justify-content-center ">
                <button class="px-3 bg-danger button text-white fs-4 border border-1 border-dark rounded-3 my-3">Join
                    Us</button>
            </div>
        </div>
    </div>
</template>

<script>
import CounterPage from './CounterPage.vue';

export default {
    components: { CounterPage }
}
</script>

<style lang="scss" scoped></style>