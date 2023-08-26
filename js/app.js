(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    document.addEventListener("click", documentActions);
    function documentActions(event) {
        const targetElement = event.target;
        if (targetElement.closest(".nav-choose__item")) {
            const tabNavItem = targetElement.closest(".nav-choose__item");
            if (!tabNavItem.classList.contains("active")) {
                const activeTabNavItem = document.querySelector(".nav-choose__item.active");
                activeTabNavItem.classList.remove("active");
                tabNavItem.classList.add("active");
                const tabItems = document.querySelectorAll(".choose__tab");
                const activeTabItem = document.querySelector(".choose__tab.active");
                activeTabItem.classList.remove("active");
                tabItems[getIndex(tabNavItem)].classList.add("active");
            }
        }
        function getIndex(el) {
            return Array.from(el.parentNode.children).indexOf(el);
        }
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
})();