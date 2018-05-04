window.onload = function () {
    document.getElementsByTagName("p")[0].innerHTML = "Bem-vindo!"
    document.getElementById("button01").addEventListener("click", WelcomeMessage)
    function WelcomeMessage() {

        if (document.getElementById("txtResults").value != "") {
            document.getElementsByTagName("p")[0].innerHTML = "Bem-vindo, " + document.getElementById("txtResults").value + "!"

        }
        else {
            document.getElementsByTagName("p")[0].innerHTML = "Bem-vindo!"
        }
    }
}