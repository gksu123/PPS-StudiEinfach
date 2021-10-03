var data, template, html;
    
    $.getJSON('http://www.gm.fh-koeln.de/~dobrynin/lwm/kplacken.json', function(data) {
        var template = $('#itemGen').html();
        
          $('body').append(Mustache.render(template, data));
   });