
/*
new Vue({
    el: '#vue',
    data: {
        responders: []
    },
});
*/

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



let convertApi = ConvertApi.auth({secret: 'HUfDiMJrKNmGBnRv'})
let elResult = document.getElementById('result')
let elResultLink = document.getElementById('resultLink')
elResult.style.display = 'none'

// On file input change, start conversion
document.getElementById('fileInput').addEventListener('change', async e => {
    elResult.style.display = 'none'
    document.documentElement.style.cursor = 'wait'
    try {

        // Converting DOCX to PDF file
        let params = convertApi.createParams()
        params.add('file', e.currentTarget.files[0])
        let result = await convertApi.convert('docx', 'pdf', params)

        // Showing link with the result file
        elResultLink.setAttribute('href', result.files[0].Url)
        elResultLink.innerText = result.files[0].Url
        elResult.style.display = 'block'

    } finally {
        document.documentElement.style.cursor = 'default'
    }
})