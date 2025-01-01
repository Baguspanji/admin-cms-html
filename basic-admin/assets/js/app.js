// document ready
document.addEventListener('DOMContentLoaded', function () {
    // includeHTML();

    // hover #sidebar remove class .sidebar-mini
    const sidebar = document.getElementById('sidebar');
    sidebar.addEventListener("mouseover", function () {
        if (sidebar.getAttribute('sidebar-mode-mini') == 'true') {
            sidebar.classList.remove('sidebar-mini');
        }
    });
    sidebar.addEventListener("mouseout", function () {
        if (sidebar.getAttribute('sidebar-mode-mini') == 'true') {
            sidebar.classList.add('sidebar-mini');
            // find data-bs-toggle="collapse"
            const subItems = document.querySelectorAll('.sub-item');
            subItems.forEach(subItem => {
                // find data-bs-target="#menu-collapse"
                let target = subItem.getAttribute('data-bs-target');
                document.querySelector(target).classList.remove('show');

                // check .sub-item not has class .collapsed
                if (!subItem.classList.contains('collapsed')) {
                    subItem.classList.add('collapsed');
                }
            });
        }
    });

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
    sidebarToggle.addEventListener('click', function () {
        if (sidebar.getAttribute('sidebar-mode-mini') == 'true') {
            sidebar.setAttribute('sidebar-mode-mini', 'false');
        } else {
            sidebar.setAttribute('sidebar-mode-mini', 'true');
        }

        if (sidebar.classList.contains('sidebar-mini')) {
            sidebar.classList.remove('sidebar-mini');
        } else if (sidebar.classList.contains('sidebar-mini') && sidebar.getAttribute('sidebar-mode-mini') == 'false') {
            sidebar.classList.add('sidebar-mini');
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