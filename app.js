async function request() {
    // делаешь запрос на сервер и помещаешь результат запроса в переменную requestResult
    const requestResult = await fetch('https://api.api-ninjas.com/v1/quotes?category=funny', {
         headers: {
            'X-Api-Key' : 'dQ5xZ1ZsRsnDHB3iq8dxNw==ROy76dCO6oHFWoyv',
        },
    })

    // переводишь полученные данные из говно формата в формат JSON и помещаешь это в переменную parsedResult
    const parsedResult = await requestResult.json()

    // создаешь переменную и помещаешь в нее ссылку на HTML-элемент с айди quote, чтобы управлять этим HTML-элементом
    let quoteBlock = document.getElementById('quote')

    // меняешь у HTML-элемента внутренний html (innerHTML) на то что мы получили с сервера
    quoteBlock.innerHTML = parsedResult[0].quote


    let authorBlock = document.getElementById('author')
    
    authorBlock.innerHTML = parsedResult[0].author
}

// чтобы при загрузке страницы сразу цитата была
request()