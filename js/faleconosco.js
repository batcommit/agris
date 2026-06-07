// =========================================================
// ANIMAÇÕES AO SCROLL
// =========================================================

// document.addEventListener("DOMContentLoaded", () => {
//     const elementos = document.querySelectorAll(
//         ".fade-in, .slide-left, .slide-right, .zoom-in"
//     );

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 entry.target.classList.add("visible");
//             } else {
//                 entry.target.classList.remove("visible");
//             }
//         });
//     }, {
//         threshold: 0.15
//     });

//     elementos.forEach(el => observer.observe(el));
// });