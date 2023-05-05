
const options = {
    method:"GET",
    mode: "no-cors",
    headers :{
         "User-Agent" : "https://olgadzubak.github.io/test/",
         "Content-Type" : "application/json", 
         "Accept" : "*/*",
    }
};

fetchQuotas()
    .then(response => response)
    .then(responseJson => responseJson)   
    .catch((error) => {
        if (error.message === '404') {Notiflix.Notify.failure("Oops, there is no country with that name");} 
        console.log(error.message);
    })



async function fetchQuotas() {
    return fetch(`https://minfin.com.ua/data/currency/auction/eur.1000.median.daily.json`, options)
        .then((response) => {
            if (!response.ok) { 
                throw new Error(response.status);
            }
            console.dir(response);
            return(response.json());
        })
}

function renderTable(quotas){
    console.log(quotas);
}
