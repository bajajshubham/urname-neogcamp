// get all objects using querySelector
var input_leet_speak = document.querySelector("#input-text-area")
var button_translate_leet_speak  = document.querySelector("#button-translate")
var ouptut_leet_speak = document.querySelector("#output-div-area")

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
    ouptut_binary_speak.innerHTML = "                                                 ";
    ouptut_leet_speak.innerHTML = "API RATE LIMIT REACHED: TRY AFTER 1 HOUR . "+error;
};

//button translate
function translateTOLeetspeakClickHandler()
{
    console.log("button clicked");

    var englishText = input_leet_speak.value;

    fetch(getEncodedURL(englishText))
    .then(response => response.json())
    .then(json => ouptut_leet_speak.innerHTML = json.contents.translated)
    .catch(erroHandler)

};

button_translate_leet_speak.addEventListener("click",translateTOLeetspeakClickHandler)