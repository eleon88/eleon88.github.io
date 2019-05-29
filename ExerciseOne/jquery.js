

// on click of the move button
$('#move-right').click(function() {
    // get the items to move
    var $items =  $('.erics-list li.selected');
    // remove their active state
    $items.removeClass('selected');
    // append them to the right side list
    $('.lauras-list').append($items);
});

$('#move-left').click(function() {
    // get the items to move
    var $items =  $('.lauras-list li.selected');
    // remove their active state
    $items.removeClass('selected');
    // append them to the right side list
    $('.erics-list').append($items);
});
