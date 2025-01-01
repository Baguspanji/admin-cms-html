$(document).ready(function () {
    // hover #sidebar remove class .sidebar-mini
    $('#sidebar').hover(function () {
        if ($(this).attr('sidebar-mode-mini') == 'true') {
            $(this).removeClass('sidebar-mini');
        }
    }, function () {
        if ($(this).attr('sidebar-mode-mini') == 'true') {
            $(this).addClass('sidebar-mini');
            // find data-bs-toggle="collapse"
            $('.sub-item').attr('data-bs-toggle', 'collapse').each(function () {
                // find data-bs-target="#menu-collapse"
                let target = $(this).attr('data-bs-target');
                $(target).removeClass('show');

                // check .sub-item not has class .collapsed
                if (!$(this).hasClass('collapsed')) {
                    $(this).addClass('collapsed');
                }
            });
        }
    });

    $('.sidebar-item').click(function () {
        $('.sidebar-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.sidebar-toggler').click(function () {
        $('#sidebar').toggleClass('sidebar-mini');
        if ($('#sidebar').hasClass('sidebar-mini')) {
            $('#sidebar').attr('sidebar-mode-mini', 'true');
        } else {
            $('#sidebar').attr('sidebar-mode-mini', 'false');
        }
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});