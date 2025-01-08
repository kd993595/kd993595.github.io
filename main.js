

document.addEventListener("DOMContentLoaded", function () {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    coll[0].classList.toggle("active");
    let content = coll[0].nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

function toggleMode() {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    document.querySelector("html").setAttribute("data-theme", newTheme);

    // update in local storage
    localStorage.setItem("theme", newTheme);

    // update the currentThemeSetting in memory
    currentThemeSetting = newTheme;
}

