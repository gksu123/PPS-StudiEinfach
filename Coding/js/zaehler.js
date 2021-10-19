$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var truncated = Math.ceil((parseInt($input.val()) - 1) * 100)/100;
        const runden = truncated.toFixed(1)
        var count = runden;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var truncated1 = Math.ceil((parseInt($input.val()) + 1) * 100)/100;
        const runden1 = truncated1.toFixed(1)
        var count1 = runden1;
        $input.val(count1);
        $input.change();
        return false;
    });
});
