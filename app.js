var userInput = document.getElementById("usr-input");
var btnTranslate = document.querySelector("#translate");
var outputDiv = document.querySelector("#output");
var baseUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function urlString(burl){

    return burl+"?"+"text="+userInput.value;

}

function errorException(error){
    alert(error)
}

btnTranslate.addEventListener("click",translateFunc);
function translateFunc(){

    fetch(urlString(baseUrl)).then(response=>response.json())
    .then(result=>outputDiv.innerText=result.contents.translated)
    .catch(errorException);
    
}