// get all objects using querySelector
var input_leet_speak = document.querySelector("#input-leet-speak")
var button_translate_leet_speak  = document.querySelector("#button-translate-leet-speak")
var ouptut_leet_speak = document.querySelector("#output-leet-speak")

// api query source
var apiURLSource = "https://api.funtranslations.com/translate/leetspeak.json"

// get encoded url
function getEncodedURL(text)
{
    console.log("url,",apiURLSource + "?" + "text=" + text);
    console.log("encoded url",`${apiURLSource}?text=${encodeURI(text)}`);
    
    return `${apiURLSource}?text=${encodeURI(text)}`;
};

// errorHandler
function erroHandler(error)
{
    console.log("inside error handler");
    ouptut_leet_speak.innerHTML = "API RATE LIMIT REACHED: TRY AFTER 1 HOUR .";
};

//button translate
function translateTOLeetspeakClickHandler()
{
    console.log("button clicked");

    var englishText = input_leet_speak.value;

    fetch(getEncodedURL(englishText))
    .then(response => response.json())
    .then(json => ouptut_leet_speak.innerHTML = json.contens.translated)
    .catch(erroHandler)

};

button_translate_leet_speak.addEventListener("click",translateTOLeetspeakClickHandler)