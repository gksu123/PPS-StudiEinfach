function appendData (data) {
    console.log (data);
    document.querySelector ("div").innerHTML = JSON.stringify(data);
 }
 
 fetch ("http://www.gm.fh-koeln.de/~dobrynin/lwm/kplacken.json").then (function (response) {
    return response.json();
 }).then (function (data) {
    appendData (data);
 }).catch (function (error) {
    console.log ("error: " + error);
 });

 /*JSON*/
 /*
 [
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "MA1-MI",
      "description": "Praktikumsinhalte: http://bit.ly/2yIWMIl (ILIAS-Link)",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "b08b3cb2-d4ba-445e-bff4-aac8fd7d183b",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "1b963766-27f5-4858-8f02-4ea8e942dd5e"
    },
    "label": "Maple 1",
    "date": "2018-11-08",
    "start": "08:30:00",
    "end": "11:00:00",
    "room": {
      "label": "R 3.113",
      "description": "Mathe-PC-Pool",
      "capacity": -1,
      "id": "58895205-1fa5-4051-ad80-083000065025"
    },
    "entryTypes": [
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 2,
        "id": "194b9444-789e-4251-aa08-30f3d7898841"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "49f3b153-5c58-46ae-8ede-878ab1fcc0d9"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "f2aee115-c4c9-4811-adbf-f95c1cb92e88"
      }
    ],
    "assignmentIndex": 1,
    "id": "4c786083-bf54-4500-907c-1b9215166762"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "MA1-MI",
      "description": "Praktikumsinhalte: http://bit.ly/2yIWMIl (ILIAS-Link)",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "b08b3cb2-d4ba-445e-bff4-aac8fd7d183b",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "1b963766-27f5-4858-8f02-4ea8e942dd5e"
    },
    "label": "MathWeb (Homework)",
    "date": "2019-01-14",
    "start": "22:00:00",
    "end": "23:00:00",
    "room": {
      "label": "tbd",
      "description": "tbd",
      "capacity": -1,
      "id": "e53e6b50-f7c1-40a1-9e4b-1221e21b02aa"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "606328c8-d356-4ef1-9413-1782ccfbc244"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": false,
        "int": 0,
        "id": "7be87d8a-6a02-4f71-859c-e6eb4d12fdc3"
      }
    ],
    "assignmentIndex": 3,
    "id": "1b84a09d-8569-489d-9bf4-ec1ef3dc089a"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "Beratungstermin",
    "date": "2018-12-06",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "701434a2-7c90-4727-ba7b-61e3df6e4f1e"
      }
    ],
    "assignmentIndex": 4,
    "id": "ba6c2238-a633-4ec3-a0d4-d3c943b31855"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "MA1-MI",
      "description": "Praktikumsinhalte: http://bit.ly/2yIWMIl (ILIAS-Link)",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "b08b3cb2-d4ba-445e-bff4-aac8fd7d183b",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "1b963766-27f5-4858-8f02-4ea8e942dd5e"
    },
    "label": "Maple 2",
    "date": "2018-12-06",
    "start": "11:00:00",
    "end": "14:00:00",
    "room": {
      "label": "R 3.113",
      "description": "Mathe-PC-Pool",
      "capacity": -1,
      "id": "58895205-1fa5-4051-ad80-083000065025"
    },
    "entryTypes": [
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 1,
        "id": "495b6f20-666c-412b-917e-a239ff4a7e2a"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "59966e4d-bb18-49d4-a172-f4cdcf642b5b"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "fbbdaefb-36a6-4dbc-8497-d36596f7437b"
      }
    ],
    "assignmentIndex": 2,
    "id": "c234d8f3-66f0-4c29-8f0e-dd837741fba2"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "3. Liveaufgabe",
    "date": "2019-01-24",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "c8569788-21b1-4e69-b239-28e0b642b2f6"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "c40d1e9c-76b1-4e61-b170-239ab05f7e1d"
      }
    ],
    "assignmentIndex": 8,
    "id": "4fd531ad-ce7a-420d-90c4-a65877142fef"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "Beratungstermin",
    "date": "2018-11-29",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "3d4fe9b3-3641-446d-81d3-653f3d42cca8"
      }
    ],
    "assignmentIndex": 3,
    "id": "44afe1c5-6908-4faf-a4f2-7b9a8196badc"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP2 - MI",
      "description": "Praktikum zum Modul AP2",
      "semester": "f2e8329e-1435-4069-be27-128c09aea445",
      "course": "01a4dd0f-742c-416b-9458-dba2d1d34a79",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "a3d5024f-7dac-46d8-a510-a51dd53d752c"
    },
    "label": "Praktikumsaufgabe 2",
    "date": "2019-05-28",
    "start": "11:00:00",
    "end": "13:00:00",
    "room": {
      "label": "R 2.109",
      "description": "ADV-Terminalraum 2",
      "capacity": -1,
      "id": "5550ffeb-cd69-49cd-b89c-dac7974f3188"
    },
    "entryTypes": [
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 3,
        "id": "bf6432ee-a2c7-4a86-bfee-57a10bc5da07"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "6975f81c-ef31-480a-bf18-1b75f0f6a4ee"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "2281cea9-3525-4e8e-b3dd-df22f7b70c49"
      }
    ],
    "assignmentIndex": 1,
    "id": "f0b2bb03-f1d8-4e15-a142-5830238e7e72"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "KTN-MI",
      "description": "Praktikum zur Veranstaltung \"Kommunikationstechnik und Netze\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0c23b50c-e486-4cdb-b36b-b14031c3df9e",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "e915e087-82b5-43f0-b3ee-57e4fc2e34a8"
    },
    "label": "Einführungsworkshop",
    "date": "2019-10-30",
    "start": "11:00:00",
    "end": "13:15:00",
    "room": {
      "label": "R 3.221",
      "description": "KTDS-Labor 1",
      "capacity": -1,
      "id": "96489b04-b66c-41e6-a765-56702858be7b"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "6bea833e-4e79-4d00-8819-54eb61295857"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "6747909f-ae09-4b06-b2c1-f37908588793"
      },
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 0,
        "id": "4b289a51-fc79-4a62-8c45-4bf4553e2a4c"
      }
    ],
    "assignmentIndex": 0,
    "id": "48143a26-3c61-4d62-abb0-abd0169a0a9a"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "DBS1-MI",
      "description": "Praktikum zur Veranstaltung \"Datenbanksysteme 1\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0f219d9d-d016-4b54-8dbf-8072c84ee016",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "0e3806af-c827-4d08-abbf-f80793d8fa33"
    },
    "label": "3. AT: Anmeldeschluss",
    "date": "2019-12-09",
    "start": "10:00:00",
    "end": "11:00:00",
    "room": {
      "label": "R 2.107",
      "description": "WI-PC-Pool 2",
      "capacity": -1,
      "id": "cf55d08c-aab1-4d79-ad48-0c8cf5a9ddf9"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "91842486-8d1c-45b6-872c-5f98ed3447bf"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "3e9046f1-ceae-4033-8a40-dd18e735a96f"
      }
    ],
    "assignmentIndex": 2,
    "id": "e30fd9af-4669-49e4-9570-9e77226ca9a6"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "PP-MI",
      "description": "Paradigmen der Programmierung für MI im WS 19/20",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "6593a769-f8bc-417a-ade5-a69cdb884693",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "a1f69404-00c4-4095-b047-150e23588162"
    },
    "label": "Aufgabe 3",
    "date": "2020-01-15",
    "start": "17:00:00",
    "end": "19:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "f357ad0e-a846-4fb5-abef-e28fc0572b81"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "9fd4cd2b-663d-4481-bd33-7b7f47c96679"
      }
    ],
    "assignmentIndex": 2,
    "id": "b22bfcef-a2a6-4746-ac57-226a41e0109a"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP2 - MI",
      "description": "Praktikum zum Modul AP2",
      "semester": "f2e8329e-1435-4069-be27-128c09aea445",
      "course": "01a4dd0f-742c-416b-9458-dba2d1d34a79",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "a3d5024f-7dac-46d8-a510-a51dd53d752c"
    },
    "label": "Praktikumsaufgabe 1",
    "date": "2019-05-07",
    "start": "11:00:00",
    "end": "13:00:00",
    "room": {
      "label": "R 2.109",
      "description": "ADV-Terminalraum 2",
      "capacity": -1,
      "id": "5550ffeb-cd69-49cd-b89c-dac7974f3188"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "da79214b-c3b4-4434-b862-a959d145f6fe"
      },
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 0,
        "id": "84974c98-8c93-444d-84a9-776855c8d611"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "4ce8b64c-ec86-47d0-9794-7dc95aa01ee2"
      }
    ],
    "assignmentIndex": 0,
    "id": "e7ead9f2-a026-4228-8da8-17453d921e30"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "MA1-MI",
      "description": "Praktikumsinhalte: http://bit.ly/2yIWMIl (ILIAS-Link)",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "b08b3cb2-d4ba-445e-bff4-aac8fd7d183b",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "1b963766-27f5-4858-8f02-4ea8e942dd5e"
    },
    "label": "Probeklausur",
    "date": "2019-01-17",
    "start": "11:00:00",
    "end": "14:00:00",
    "room": {
      "label": "R 3.113",
      "description": "Mathe-PC-Pool",
      "capacity": -1,
      "id": "58895205-1fa5-4051-ad80-083000065025"
    },
    "entryTypes": [
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 2,
        "id": "e657b944-b260-4037-8f03-010727bf6ef4"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "7e0331e6-6027-4eaf-a755-2a6b8deed833"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "c03d93a7-f919-4e52-95b3-01fea22d6f13"
      }
    ],
    "assignmentIndex": 4,
    "id": "ec6845ee-f23e-4525-95d0-2bb9cd5b938b"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "DBS1-MI",
      "description": "Praktikum zur Veranstaltung \"Datenbanksysteme 1\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0f219d9d-d016-4b54-8dbf-8072c84ee016",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "0e3806af-c827-4d08-abbf-f80793d8fa33"
    },
    "label": "1. AT: Anmeldeschluss",
    "date": "2019-10-28",
    "start": "10:00:00",
    "end": "11:00:00",
    "room": {
      "label": "R 2.107",
      "description": "WI-PC-Pool 2",
      "capacity": -1,
      "id": "cf55d08c-aab1-4d79-ad48-0c8cf5a9ddf9"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "52624723-3411-4af6-84c4-67cbfbd802e3"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "20cb15c0-8013-46f0-83ce-f91621135505"
      }
    ],
    "assignmentIndex": 0,
    "id": "7e71d40f-74e4-44ec-81de-629d79b36913"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "Einführung & Beratungstermin",
    "date": "2018-10-25",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "01a0dd81-cf82-4333-aca2-d66a7c4473dd"
      }
    ],
    "assignmentIndex": 0,
    "id": "669e93ef-9dd5-44bd-8eea-b25d8076ec44"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "Beratungstermin",
    "date": "2019-01-10",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "9d036570-b61c-47f7-b94b-56b1784a5248"
      }
    ],
    "assignmentIndex": 6,
    "id": "83f4893b-2ab4-4e2f-86ba-9536d41418d6"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP2 - MI",
      "description": "Praktikum zum Modul AP2",
      "semester": "f2e8329e-1435-4069-be27-128c09aea445",
      "course": "01a4dd0f-742c-416b-9458-dba2d1d34a79",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "a3d5024f-7dac-46d8-a510-a51dd53d752c"
    },
    "label": "Praktikumsaufgabe 4",
    "date": "2019-07-09",
    "start": "11:00:00",
    "end": "13:00:00",
    "room": {
      "label": "R 2.109",
      "description": "ADV-Terminalraum 2",
      "capacity": -1,
      "id": "5550ffeb-cd69-49cd-b89c-dac7974f3188"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "b35bfd5b-e54b-4295-93a8-9b03d4ed86c5"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "65b9732f-0348-4805-98a9-8d49f852c056"
      },
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 0,
        "id": "22cf3df0-ec57-4ece-8297-edc5ad3cd8ec"
      }
    ],
    "assignmentIndex": 3,
    "id": "566a7b08-b6ec-4508-908f-28553e785a17"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "KTN-MI",
      "description": "Praktikum zur Veranstaltung \"Kommunikationstechnik und Netze\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0c23b50c-e486-4cdb-b36b-b14031c3df9e",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "e915e087-82b5-43f0-b3ee-57e4fc2e34a8"
    },
    "label": "Deadline Aufgabe 2",
    "date": "2020-01-22",
    "start": "11:00:00",
    "end": "13:15:00",
    "room": {
      "label": "R 3.221",
      "description": "KTDS-Labor 1",
      "capacity": -1,
      "id": "96489b04-b66c-41e6-a765-56702858be7b"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "c8c7e508-1a7f-4508-bc69-60cbd851c8cb"
      },
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 0,
        "id": "724d68ef-db0b-4f53-a0a4-8c22ada769e0"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "6d300787-85b8-4f19-a37e-b0aa6200b2f3"
      }
    ],
    "assignmentIndex": 2,
    "id": "8346b042-834d-49ad-9ece-1ca0537360ba"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "DBS1-MI",
      "description": "Praktikum zur Veranstaltung \"Datenbanksysteme 1\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0f219d9d-d016-4b54-8dbf-8072c84ee016",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "0e3806af-c827-4d08-abbf-f80793d8fa33"
    },
    "label": "4. AT: Anmeldeschluss",
    "date": "2020-01-13",
    "start": "10:00:00",
    "end": "11:00:00",
    "room": {
      "label": "R 2.107",
      "description": "WI-PC-Pool 2",
      "capacity": -1,
      "id": "cf55d08c-aab1-4d79-ad48-0c8cf5a9ddf9"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "601a08a2-1130-40c3-acb1-2dbe7fe11ebb"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "622c22cd-a733-4191-b649-2703f5b66f7e"
      }
    ],
    "assignmentIndex": 3,
    "id": "9fe4bf11-97f0-48d1-ade5-f505267fbd26"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "PP-MI",
      "description": "Paradigmen der Programmierung für MI im WS 19/20",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "6593a769-f8bc-417a-ade5-a69cdb884693",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "a1f69404-00c4-4095-b047-150e23588162"
    },
    "label": "Aufgabe 2",
    "date": "2019-12-11",
    "start": "17:00:00",
    "end": "19:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "013e8bde-cfdc-4d2f-9251-7e8b107f1d3a"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "7e74fbee-ae58-4261-acaa-85d79bcd3d60"
      }
    ],
    "assignmentIndex": 1,
    "id": "74ad765c-3b13-437c-bcc2-987c3fbea0b2"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "DBS1-MI",
      "description": "Praktikum zur Veranstaltung \"Datenbanksysteme 1\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0f219d9d-d016-4b54-8dbf-8072c84ee016",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "0e3806af-c827-4d08-abbf-f80793d8fa33"
    },
    "label": "5. ZT: Anmeldeschluss",
    "date": "2020-01-20",
    "start": "10:00:00",
    "end": "11:00:00",
    "room": {
      "label": "R 2.107",
      "description": "WI-PC-Pool 2",
      "capacity": -1,
      "id": "cf55d08c-aab1-4d79-ad48-0c8cf5a9ddf9"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": false,
        "int": 0,
        "id": "40df35b2-35bf-473b-b0c4-c37c22079050"
      },
      {
        "entryType": "Testat",
        "bool": false,
        "int": 0,
        "id": "c8cc8635-aee8-421c-a021-ed2aac71530b"
      }
    ],
    "assignmentIndex": 4,
    "id": "b95db20b-1d06-4a52-81c6-38a8e74731cb"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "PP-MI",
      "description": "Paradigmen der Programmierung für MI im WS 19/20",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "6593a769-f8bc-417a-ade5-a69cdb884693",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "a1f69404-00c4-4095-b047-150e23588162"
    },
    "label": "Aufgabe 1",
    "date": "2019-11-06",
    "start": "17:00:00",
    "end": "19:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "3d3d5095-04b3-4eda-a77a-bef8b6b2b14f"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "4bcbcf93-e279-42f4-921d-bf4c75b3241a"
      }
    ],
    "assignmentIndex": 0,
    "id": "7b7e6ae4-ca28-419c-9f39-dd0c235d855d"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "MA1-MI",
      "description": "Praktikumsinhalte: http://bit.ly/2yIWMIl (ILIAS-Link)",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "b08b3cb2-d4ba-445e-bff4-aac8fd7d183b",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "1b963766-27f5-4858-8f02-4ea8e942dd5e"
    },
    "label": "Einführung",
    "date": "2018-10-18",
    "start": "17:00:00",
    "end": "20:00:00",
    "room": {
      "label": "R. 0.401",
      "description": "Ferchau-Hörsaal 1",
      "capacity": -1,
      "id": "565df6b1-1f06-4bc0-9ee0-e50044db5623"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "4c15c810-96d2-4b93-9673-0830ec402209"
      }
    ],
    "assignmentIndex": 0,
    "id": "1e7ea1c4-5277-48a6-9fd7-8a43999ed85e"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "1. Liveaufgabe",
    "date": "2018-11-15",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "b9ebdb0f-13c2-4756-8dfc-caa60b1e4dfc"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "7f5adf17-7290-42c3-ae8a-e29bc846a322"
      }
    ],
    "assignmentIndex": 2,
    "id": "bf716bf6-dbb9-4d18-be93-a51341b5b103"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP2 - MI",
      "description": "Praktikum zum Modul AP2",
      "semester": "f2e8329e-1435-4069-be27-128c09aea445",
      "course": "01a4dd0f-742c-416b-9458-dba2d1d34a79",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "a3d5024f-7dac-46d8-a510-a51dd53d752c"
    },
    "label": "Praktikumsaufgabe 3",
    "date": "2019-06-25",
    "start": "11:00:00",
    "end": "13:00:00",
    "room": {
      "label": "R 2.109",
      "description": "ADV-Terminalraum 2",
      "capacity": -1,
      "id": "5550ffeb-cd69-49cd-b89c-dac7974f3188"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "543ec413-9446-45f2-92b1-832417b61627"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "c4555d01-74dd-4555-a1bb-d53b06f0b830"
      },
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 0,
        "id": "1a32195d-8863-46de-9287-9ced76cfc0f1"
      }
    ],
    "assignmentIndex": 2,
    "id": "49195e3b-15e7-4d13-934d-8e1cc53f911f"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "2. Liveaufgabe",
    "date": "2018-12-13",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "a0708cd0-d49c-4a17-9a09-6849fe79c198"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "bcc469cc-fff5-48fb-923e-e0041314ef6f"
      }
    ],
    "assignmentIndex": 5,
    "id": "a44c04f6-d8b2-4966-8e59-028a58d05416"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "DBS1-MI",
      "description": "Praktikum zur Veranstaltung \"Datenbanksysteme 1\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0f219d9d-d016-4b54-8dbf-8072c84ee016",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "0e3806af-c827-4d08-abbf-f80793d8fa33"
    },
    "label": "2. AT: Anmeldeschluss",
    "date": "2019-11-11",
    "start": "10:00:00",
    "end": "11:00:00",
    "room": {
      "label": "R 2.107",
      "description": "WI-PC-Pool 2",
      "capacity": -1,
      "id": "cf55d08c-aab1-4d79-ad48-0c8cf5a9ddf9"
    },
    "entryTypes": [
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "565e1bef-d0be-4494-92f4-1b310f772557"
      },
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "bd84db29-6a34-4782-96ef-6cc2fa8769c6"
      }
    ],
    "assignmentIndex": 1,
    "id": "1e13d537-f320-48bd-a021-afcc4e635959"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "KTN-MI",
      "description": "Praktikum zur Veranstaltung \"Kommunikationstechnik und Netze\"",
      "semester": "cdf1ac22-47cc-4c91-8810-17ee9f351610",
      "course": "0c23b50c-e486-4cdb-b36b-b14031c3df9e",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "e915e087-82b5-43f0-b3ee-57e4fc2e34a8"
    },
    "label": "Deadline Aufgabe 1",
    "date": "2019-12-04",
    "start": "11:00:00",
    "end": "13:15:00",
    "room": {
      "label": "R 3.221",
      "description": "KTDS-Labor 1",
      "capacity": -1,
      "id": "96489b04-b66c-41e6-a765-56702858be7b"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "b5b61886-8037-4296-af26-bb037b659929"
      },
      {
        "entryType": "Testat",
        "bool": true,
        "int": 0,
        "id": "ed80fb9a-17db-4201-920d-80b000e580d7"
      },
      {
        "entryType": "Bonus",
        "bool": false,
        "int": 0,
        "id": "973f4aca-5e46-4f56-85aa-4263a7630391"
      }
    ],
    "assignmentIndex": 1,
    "id": "c68cbc85-c72f-4aad-964d-5cd973e0781b"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "Beratungstermin",
    "date": "2019-01-17",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": false,
        "int": 0,
        "id": "d53715a4-f6a3-4a4e-af36-5a4beb34ac85"
      }
    ],
    "assignmentIndex": 7,
    "id": "35f4c4f7-1e45-4cc0-8528-a9d965be54d4"
  },
  {
    "student": {
      "systemId": "inf1359",
      "campusId": "kplacken",
      "lastname": "Plackenhohn",
      "firstname": "Kimberly Maria",
      "email": "kimberly_maria.plackenhohn@smail.th-koeln.de",
      "registrationId": "1113335016",
      "enrollment": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "id": "e300f467-9be1-4a39-846b-543f3ec2b0fb"
    },
    "labwork": {
      "label": "AP1-MI",
      "description": "Praktikum zum Modul AP1",
      "semester": "0496eec7-ad06-4d82-86e1-ad7782dcd92b",
      "course": "a3a0b357-39ff-4f9d-9090-ef84bf778eb2",
      "degree": "c2aa93b4-9c49-4d0b-b550-a3d7a31fb3cd",
      "subscribable": false,
      "published": true,
      "id": "8287bbe7-fa32-4c52-9ef2-da1d4a148358"
    },
    "label": "Beratungstermin",
    "date": "2018-11-08",
    "start": "14:00:00",
    "end": "15:00:00",
    "room": {
      "label": "R 2.110",
      "description": "ADV-Terminalraum 1",
      "capacity": -1,
      "id": "ee910ae8-9940-49a1-b22f-f1e3a9c64076"
    },
    "entryTypes": [
      {
        "entryType": "Anwesenheitspflichtig",
        "bool": true,
        "int": 0,
        "id": "cb3304a0-39f7-44dc-9c9e-9433b96a0d90"
      }
    ],
    "assignmentIndex": 1,
    "id": "3c4b181b-c653-46a3-b2ce-86f7098ffbe0"
  }
]
 */