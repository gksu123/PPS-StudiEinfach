new Vue({
    el: '#vue',
    data: {
        json: null
    },
    created: function () {
      fetch("/json/praktikumsdaten.json")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    },
    mounted(){
        let hi = document.createElement('script')
        hi.setAttribute('src', '/js/test.js')
        document.head.appendChild(hi)
    }
});

new Vue({
    el: '#inf',
    data: {
        json: null
    },
    created: function () {
      fetch("/json/praktikumsdaten.json")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    },
    mounted(){
        let hi = document.createElement('script')
        hi.setAttribute('src', '/js/test.js')
        document.head.appendChild(hi)
    }
});


