// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    
    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();

    makeGrid(height, width);
});

function makeGrid(h, w) {
    // Your code goes here!
    $('tr').remove();

    for (let i = 0; i < h; i++) {
        $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
        for (let j = 0; j < w; j++) {
            $('#row' + i).append('<td></td>');
        }
    }

    $('td').click(function () {
        let pickedColor = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color : ' + pickedColor);
        }
    });
}