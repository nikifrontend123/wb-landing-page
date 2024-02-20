<template>
    <div>
        <div class="txt" style="background-color: #00c4c4;">
            <div class=" text-center">
                <p class="fs-2 mb-0">Create Your
                    <span class="typed-text">{{ typeValue }}</span>
                    <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
                </p>
                <div class="text-center">
                    <p class="fs-4 px-1"> At No Cost Now you can Buildand Scale with
                        confidence</p>
                </div>
            </div>
        </div>
        <div class="w-100" style="margin-top: -16px;">
            <img class="w-100" src="img/icons/images/mobile-banner.jpg" alt="">
        </div>

        <div class="w-100 d-flex justify-content-center align-items-center " style="background-color: #fcefcd;">
            <button data-bs-toggle="modal" href="#exampleModalToggle" class="btn btn-danger m-2">Get Started</button>
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
            newTextDelay: 1000,
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

<style lang="scss" scoped>
p {
    font-weight: 500;

    span.typed-text {
        color: #d25b4b;
    }

    span.cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #d25b4b;
        animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
        animation: none;
    }
}

@keyframes cursorBlink {
    49% {
        background-color: #fff;
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }
}
</style>