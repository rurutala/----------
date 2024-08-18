const swiper = new Swiper(".swiper", {
    effect: "cards",
    watchSlidesProgress: true,
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination"
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 3000
      }
  });