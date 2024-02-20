import { createStore } from "vuex";

export default createStore({
  state: {
    reviews: [
      {
        id: 1,
        show: true,
        imgr: '/img/icons/images/1.png',
        // style: 'bottom: -20px; width: 150px; height: 150px; ',
        text: ' "Using Retailpur.com has given me the opportunity to sell more products, and my customers have increased greatly over the period I joined as a Retailer."'
      },
      {
        id: 2,
        show: false,
        imgr: '/img/icons/images/2.png',
        // style: 'bottom: -70px; width: 100px; height: 100px; ',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 3,
        show: false,
        imgr: '/img/icons/images/3.png',
        // style: 'bottom: -40px;width: 180px; height: 180px; ',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 4,
        show: false,
        imgr: '/img/icons/images/4.png',
        // style: 'bottom: -0px;width: 150px; height: 150px; ',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 5,
        show: false,
        imgr: '/img/icons/images/5.png',
        // style: 'bottom: -50px; width: 110px; height: 110px; ',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 6,
        show: false,
        imgr: '/img/icons/images/6.png',
        // style: 'bottom: -70px; width: 100px; height: 100px; ',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 7,
        show: false,
        imgr: '/img/icons/images/7.png',
        // style: 'bottom: -120px; width: 150px; height: 150px; ',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 8,
        show: false,
        imgr: '/img/icons/images/8.png',
        // style: 'bottom: -100px; width: 150px; height: 150px; ',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 9,
        show: false,
        imgr: '/img/icons/images/9.png',
        // style: 'bottom: -50px; width: 200px; height: 200px;',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 10,
        show: false,
        imgr: '/img/icons/images/4.png',
        // style: 'bottom: -70px; width: 200px; height: 200px;',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 11,
        show: false,
        imgr: '/img/icons/images/1.png',
        // style: 'bottom: -120px; width: 140px; height: 140px;',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 12,
        show: false,
        imgr: '/img/icons/images/10.png',
        // style: 'bottom: -100px; width: 140px; height: 140px;',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 13,
        show: false,
        imgr: '/img/icons/images/8.png',
        // style: 'bottom: -100px; width: 150px; height: 150px; ',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 14,
        show: false,
        imgr: '/img/icons/images/6.png',
        // style: 'bottom: -70px; width: 100px; height: 100px; ',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
    ],
  },
  getters: {
    getReviews(state) {
      return state.reviews;
    },
  },
  mutations: {
    toggleReview(state, review) {
      let index = state.reviews.indexOf(review);
      state.reviews.forEach(user_review => {
        user_review.show = false
      });
      state.reviews[index].show = true
    },
  },
  actions: {},
  modules: {},
});
