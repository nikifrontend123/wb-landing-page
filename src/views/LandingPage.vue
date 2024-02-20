<template>
    <div>
        <FrontBanner></FrontBanner>
        <AboutPage></AboutPage>
        <SectionThird></SectionThird>
        <AllBrand></AllBrand> 
        <div class="">
            <div class="heading d-flex justify-content-center text-center">
        <p class="fs-1" style="font-weight: 600;">Success Stories of Our Retailers</p>
    </div>
    <div class="w-100 d-block ">
        <UserBanner></UserBanner>
    </div>
    <BottomPage></BottomPage>
</div>
</div>
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import AboutPage from '@/components/AboutPage.vue';
import SectionThird from '@/components/SectionThird.vue';
import AllBrand from '@/components/AllBrand.vue'; 
import UserBanner from '@/components/UserBanner.vue';
import BottomPage from '@/components/BottomPage.vue';

export default {
    components: { FrontBanner, AboutPage, SectionThird, AllBrand, UserBanner, BottomPage }
}
</script>

<style lang="scss" scoped></style>