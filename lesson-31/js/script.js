$(document).ready(function(){

    // Робить активним перший tab, ховає всі інші tab-body.
    $('.tab__item:first-child').addClass('active-tab');
    $('.tab-body').hide();
    $('.tab-body:first').show();


    // Виключає роботу якорів #, видаляє всі активні tab,
    // додає до натиснутого class active-tab
    $('.tab__item').click(function(event) {
        // event.preventDefault();
        $('.tab__item').removeClass('active-tab');
        $(this).addClass('active-tab');

        // Шукає тег <a> в активному tab, ховає всі активні tab-body.
        // activeTab містить id з href і робить видимим tab-body з таким id
        const activeTab = $(this).find('a').attr('href');
        $('.tab-body').hide();
        $(activeTab).fadeIn();
        // Зупиняє дію якорів
        return false;
    });
});