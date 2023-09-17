$(window).on('load', function () {
    if (document.getElementById("portfolio")) {
        var $grid = $(".grid").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        });

        $('.filters ul li').click(function () {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');
            var data = $(this).attr('data-filter');
            $grid.isotope({ filter: data });
        });

        // Обработчик события изменения размера окна
        $(window).on('resize', function () {
            // Здесь можно добавить код, который будет выполняться при изменении размера окна
            // Например, пересчитать расположение элементов Isotope
            $grid.isotope('layout');
        });
    }
});