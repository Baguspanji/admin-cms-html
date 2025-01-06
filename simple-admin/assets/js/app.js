// document ready
document.addEventListener('DOMContentLoaded', function () {
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
        // toggle class
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