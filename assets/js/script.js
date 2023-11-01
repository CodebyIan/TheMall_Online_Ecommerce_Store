/*** SEARCH ***/
const buttonOpen = document.querySelectorAll("[data-trigger-btn]");
const buttonClose = document.querySelectorAll("[data-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearch = (targetEl, action) => {
  if (targetEl) {
    if (action === "open") {
      targetEl.classList.add("active");
      overlay.classList.add("active");
    } else if (action === "close") {
      targetEl.classList.remove("active");
      overlay.classList.remove("active");
    }
  }
};

document.querySelectorAll("[data-trigger-btn]").forEach((buttonOpenItem) => {
  const currentId = buttonOpenItem.dataset.target;
  const targetEl = document.querySelector(`#${currentId}`);

  if (targetEl) {
    buttonOpenItem.addEventListener("click", () =>
      toggleSearch(targetEl, "open")
    );

    const closeBtn = targetEl.querySelector("[data-close-btn]");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => toggleSearch(targetEl, "close"));
    }
  }
});

overlay.addEventListener("click", () => toggleSearch(targetEl, "close"));

/*** Mobile Menu ***/
const subMenu = document.querySelectorAll(".child__trigger");

subMenu.forEach((menu) =>
  menu.addEventListener("click", function (e) {
    e.preventDefault();

    subMenu.forEach((item) =>
      item != this
        ? item.closest(".has__child").classList.remove("active")
        : null
    );

    if (this.closest(".has__child").classList != "active") {
      this.closest(".has__child").classList.toggle("active");
    }
  })
);
