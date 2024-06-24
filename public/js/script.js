const openModal = document.getElementById("openModal");
const popup = document.getElementById("card");
const closeModal = document.getElementById("closeModal");
const svgIcon = document.querySelector(".size-7");

openModal.addEventListener("click", () => {
    //   popup.classList.remove("hidden");
    gsap.to(popup, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        onStart: () => popup.classList.remove("hidden"),
    });
    gsap.to(svgIcon, { rotation: 360, duration: 1, ease: "power2.inOut" });
});

closeModal.addEventListener("click", () => {
    gsap.to(popup, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        ease: "power2.in",
        onComplete: () => {
            popup.classList.add("hidden");
            gsap.set(popup, { clearProps: "opacity,y" });
            gsap.set(svgIcon, { clearProps: "rotation" });
        },
    });
});
