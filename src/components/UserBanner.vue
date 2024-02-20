<template>
    <div class="w-100 overflow-auto d-flex" id="style-4" style=" overflow-x: scroll;">
        <div v-for="(review, index) in reviews" :key="index" v-on:click="showUser(review)"
            class="btn rounded-circle m-2  mx-3 d-flex" :class="{ selected: isSelected(review.id) }">
            <img :src="review.imgr" style="width: 100px; height: 100px;">
        </div>
    </div>
    <div class="data" style="overflow-x: auto;">
        <div v-for="(review, index) in reviews" :key="index">
            <div v-if="review.show" class="text text-center mt-5 w-100">
                <div class="text d-flex justify-content-center text-center">
                    <p class="w-75 fs-4">{{ review.text }}</p>
                </div>
                <div class="img d-flex justify-content-center align-items-center mt-5 pb-5">
                    <div class="men">
                        <img :src="review.imgr" alt="men2" style="width: 100px; height: 100px;">
                    </div>
                    <div class="btns ms-3">
                        <button class="btn btn-danger">Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedReview: '',
        }
    },
    computed: {
        reviews() {
            return this.$store.getters.getReviews
        }
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.selectedReview
        },
        showUser(review) {
            this.selectedReview = review.id;
            this.$store.dispatch('toggleReview', review)
        }

    },
}

</script>

<style lang="scss" scoped>
.btn.selected {
    border: 2px solid red;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}

#style-4::-webkit-scrollbar {
    background-color: #F5F5F5;
}

#style-4::-webkit-scrollbar {
    width: 4px;
}

#style-4::-webkit-scrollbar-thumb {
    background-color: #f1f1f1;
    // border: 1px solid #555555;
    border-radius: 20px;
    width: 20px;
}
</style>