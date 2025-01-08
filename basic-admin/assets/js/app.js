// document ready
document.addEventListener('DOMContentLoaded', function () {
    // includeHTML();

    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');

    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(sidebarItem => {
        sidebarItem.addEventListener('click', function () {
            sidebarItems.forEach(sidebarItem => {
                sidebarItem.classList.remove('active');
            });
            sidebarItem.classList.add('active');
        });
    });

    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarToggleSide = document.querySelector('.sidebar-toggle-side');
    sidebarToggle.addEventListener('click', function () {
        if (sidebar.classList.contains('sidebar-hide')) {
            sidebar.classList.remove('sidebar-hide');
            main.classList.remove('sidebar-hide');
            sidebarToggle.classList.remove('active');
            sidebarToggleSide.classList.remove('active');
        } else {
            sidebar.classList.add('sidebar-hide');
            main.classList.add('sidebar-hide');
            sidebarToggle.classList.add('active');
            sidebarToggleSide.classList.add('active');
        }
    });

    sidebarToggleSide.addEventListener('click', function () {
        if (sidebar.classList.contains('sidebar-hide')) {
            sidebar.classList.remove('sidebar-hide');
            main.classList.remove('sidebar-hide');
            sidebarToggle.classList.remove('active');
            sidebarToggleSide.classList.remove('active');
        } else {
            sidebar.classList.add('sidebar-hide');
            main.classList.add('sidebar-hide');
            sidebarToggle.classList.add('active');
            sidebarToggleSide.classList.add('active');
        }
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // data-toggle="content-tabs" .content-tab click
    const contentTabs = document.querySelectorAll('.content-tab');
    contentTabs.forEach(contentTab => {
        contentTab.addEventListener('click', function () {
            contentTabs.forEach(contentTab => {
                contentTab.classList.remove('active');
            });
            contentTab.classList.add('active');
        });
    });

    // if media query change
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
        sidebar.classList.add('sidebar-hide');
        sidebarToggle.classList.add('active');
    }
});

const init = () => {
}

function includeHTML() {
    // get element nclude-html
    let z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        self = z[i];
        let file = self.getAttribute('include-html');
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        /* remove attr include-html */
                        self.removeAttribute('include-html');
                        /* change html element with data */
                        var content = document.createElement("div");
                        content.innerHTML = this.responseText;
                        // children of content
                        let children = content.children;

                        // append children before element
                        self.after(children[0]);

                        // remove element
                        self.remove();
                    }
                    if (this.status == 404) { $(self).html("Page not found."); }
                    /* Remove the attribute, and call this function once more: */
                }
            }

            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}