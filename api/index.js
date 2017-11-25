function fetchDataUrl(params) {


    const url = `https://ywc15.ywc.in.th/api/interview/`;
    return fetch(url).then(res => res.json()).then(repo => {

        $('ul').empty();
        arrayData = [];
        repo.forEach(element => {

            if (element.major == params) {
                arrayData.push(`${element.interviewRef} ${element.firstName} ${element.lastName} ${element.major}`)
            } else {}
        })
        arrayData.sort()
        arrayData.forEach((data) => {
            $('ul').append(`<li><a>${data}</a></li>`)
        })
    })
}