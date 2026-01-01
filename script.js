document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobile = document.getElementById("mobile");

function setMobile(open) {
  hamburger.setAttribute("aria-expanded", String(open));
  mobile.style.display = open ? "block" : "none";
  mobile.setAttribute("aria-hidden", String(!open));
}

setMobile(false);

hamburger.addEventListener("click", () => {
  const open = hamburger.getAttribute("aria-expanded") === "true";
  setMobile(!open);
});

// Close on click
mobile.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (a && a.getAttribute("href")?.startsWith("#")) setMobile(false);
});

// Tabs
const tabs = document.querySelectorAll(".tab");
const panes = {
  popular: document.getElementById("pane-popular"),
  manicure: document.getElementById("pane-manicure"),
  acrylic: document.getElementById("pane-acrylic"),
  decor: document.getElementById("pane-decor"),
  pedicure: document.getElementById("pane-pedicure"),
};

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(t => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    Object.values(panes).forEach(p => p?.classList.remove("is-active"));
    panes[btn.dataset.tab]?.classList.add("is-active");
  });
});
