var magazines = null;

$.get('allmagazines', function(data) {
    if (data !== '') {
        magazines = data;
    }
}).done(function() {
    var cardsContent = '';

    jQuery.each(magazines, function(i, value) {
        console.log(value)
        var publishDateFormatted = ('0' + value.date.day).slice(-2) + "." + ('0' + value.date.month).slice(-2) + "." + value.date.year;

        cardsContent += "<div class='col-3'>"
            + "<div class='card'>"
            + "<div class='card-body'>"
            + "<h5 class='card-title'>"	+ value.title + "</h5>"
            + "<h6 class='card-subtitle mb-2 text-muted'>" + value.priceofSubscribe / 100 + " грн." + "</h6>"
            + "<p class='card-text'>" + value.description + "</p>"
            + "<p class='card-text'>" + "Дата публікації: <br>" + publishDateFormatted + " г." + "</p>"
            + "<a href='magazine?id=" + value.id + "' class='card-link'>Відкрити</a>"
            + "</div>"
            + "</div>"
            + "</div>"
    });

    $('.magazineCards').html(cardsContent);
});