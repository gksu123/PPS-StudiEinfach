/*----------------------------Irgendein Dokument in PDF--------------------------------*/

let elResult = document.getElementById('result')
let elResultLink = document.getElementById('resultLink')
elResult.style.display = 'none'

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    elResult.style.display = 'none'
    document.documentElement.style.cursor = 'wait'
    ConvertApi.worker(new URL('https://worker.convertapi.com/user/100000001/worker/any-to-pdf'), e.currentTarget)
        .then(r => r.json())
        .then(files => {
            elResultLink.innerText = files[0].FileName
            elResultLink.setAttribute('href', files[0].Url)
            elResult.style.display = 'block'
        })
        .finally(() => document.documentElement.style.cursor = 'default')
})


/*----------------Converter PDF in DOCX  https://www.convertapi.com/doc/js-library-------------------------------*/

let convertApi = ConvertApi.auth({secret: 'HUfDiMJrKNmGBnRv'})
let elResult1 = document.getElementById('result1')
let elResultLink1 = document.getElementById('resultLink1')
elResult1.style.display = 'none'

// On file input change, start conversion
document.getElementById('fileInput1').addEventListener('change', async e => {
    elResult1.style.display = 'none'
    document.documentElement.style.cursor = 'wait'
    try {

        // Converting DOCX to PDF file
        let params1 = convertApi.createParams()
        params1.add('file', e.currentTarget.files[0])
        let result = await convertApi.convert('pdf', 'docx', params1)

        // Showing link with the result file
        elResultLink1.setAttribute('href', result.files[0].Url)
        elResultLink1.innerText = result.files[0].Url
        elResult1.style.display = 'block'

    } finally {
        document.documentElement.style.cursor = 'default'
    }
})
