new Vue({
    el: '#vue1',
    data: {
        json: null
    },
    created: function () {
      fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?atomic=true")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    }
});


new Vue({
    el: '#vue2',
    data: {
        json: null
    },
    created: function () {
      fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?atomic=true")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    }
});


new Vue({
    el: '#vue3',
    data: {
        json: null
    },
    created: function () {
      fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?atomic=true")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    }
});


