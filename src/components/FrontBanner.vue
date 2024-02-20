<template>
    <div id="TextAnimation" style="background-color: #FBF0D0;">
        <div class="row m-0 w-100 align-items-center">
            <div class="order-2 order-lg-1 col-lg-6 p-0 d-flex flex-column justify-content-center h-100">
                <img class="w-100" src="img/icons/images/mobile-banner.jpg" alt="">
                <button class="d-inline-block d-lg-none btn btn-danger opacity-75 fw-bold w-50 mx-auto">Get Started</button>
            </div>
            <div class="order-1 order-lg-2 col-lg-6 d-flex flex-column align-items-center">
                <img class="d-inline-block d-lg-none" src="/img/icons/images/logo.png" width="130" alt="">
                <img class="d-lg-inline-block d-none" src="/img/icons/images/logo.png" width="300" alt="">
                <h2 class="text-center mb-4">Create Your <br>
                    <span class="typed-text ">{{ typeValue }}</span>
                    <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
                </h2>
                <div class="d-lg-inline-block d-none text-center fs-4 mb-4">
                    At No Cost Now you can Build and Scale with confidence
                </div>
                <button class="d-lg-inline-block d-none btn btn-danger opacity-75 fw-bold">Get Started</button>
            </div>
            <div class="col-12 order-3">
                <div class="d-inline-block d-lg-none text-center fs-5 my-4">
                    At No Cost Now you can Build and Scale with confidence
                </div>
            </div>
        </div>



    </div>
</template>

<script>

export default {
    data: () => {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['Online Retail Shop'],
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 2000,
            typeArrayIndex: 0,
            charIndex: 0
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            }
            else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            }
            else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if (this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }

}
</script>

<style lang="scss" scoped></style>







