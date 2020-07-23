// JQuery Calculator

$(document).ready(function(){
    
    $('.btn').click(function() {
        let num = $(this).text();
        // Замінює хрестик на знак множення
        if (num === 'x') num = '*';

        let display = $('.calc__display').text();
        
        // Перевіряє, щоб не було нажато більше 12 цифр
        if (display.length < 12) {
            // Перевіряє, щоб не дублювались оператори при натисканні
            // і щоб оператор замінювався на новий при дублюванні
            let count = 0;
            if (num === '+' || num === '-' || num === '*' || num === '/' || num === '.') {
                let last = display.toString().slice(-1);

                if (last === '+' || last === '-' || last === '*' || last === '/' || last === '.') {
                    $('.calc__display').text(display.slice(0, -1) + num);
                } else {
                    $('.calc__display').text(display + num);
                }
            } else {
                $('.calc__display').text(display + num);
            }
        }

        // Очищає результат (AC)
        $('.clear').click(function(){
            $('.calc__display').text('');
        });
        
        // Рахує
        $('.equal').click(function(){
            const result = eval($('.calc__display').text());
            // Виводить і округляє до 5 знаків,
            // parseFloat залишає результат цифрою, а не string
            $('.calc__display').text(parseFloat(result.toFixed(5)));
        });
    });

});