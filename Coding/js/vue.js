new Vue({
    el: '#vue1',
    data: {
        json: null
    },
    created: function () {
      fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?moduleExaminationRegulation=8c6b3aad-58e7-416e-bca5-14edac2d0429&atomic=true")
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
      fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?moduleExaminationRegulation=9f9b75e4-1993-4d2b-89ee-2f2fae0a9169&atomic=true")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    }
});


new Vue({
  el: '#vue4',
  data: {
      json: null
  },
  created: function () {
    fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?moduleExaminationRegulation=99d835c9-e8ae-4933-a91b-b0f12523dcdd&atomic=true")
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
      fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?moduleExaminationRegulation=b90e46d0-a5ee-416a-ae12-7dda4c904826&atomic=true")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    }
});


new Vue({
  el: '#vue5',
  data: {
      json: null
  },
  created: function () {
    fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?moduleExaminationRegulation=98079590-4a02-438f-8c09-74d51b2822bd&atomic=true")
      .then(r => r.json())
      .then(json => {
        this.json=json;
      });
  }
});

new Vue({
  el: '#vue6',
  data: {
      json: null
  },
  created: function () {
    fetch("http://lwivs49.gm.fh-koeln.de:9000/schedules?moduleExaminationRegulation=98079590-4a02-438f-8c09-74d51b2822bd&atomic=true")
      .then(r => r.json())
      .then(json => {
        this.json=json;
      });
  }
});


