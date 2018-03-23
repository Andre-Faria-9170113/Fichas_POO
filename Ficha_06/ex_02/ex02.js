window.onload = function(){
    document.getElementById("TODAS").addEventListener("click", funcTODAS)
    document.getElementById("CAMPUS I").addEventListener("click", funcC1)
    document.getElementById("CAMPUS II").addEventListener("click", funcC2)
    document.getElementById("CAMPUS III").addEventListener("click", funcC3)

    function funcTODAS() {
        document.getElementById("ESMAD").style.color = "green"
        document.getElementById("ESHT").style.color = "green"
        document.getElementById("ESMAE").style.color = "green"
        document.getElementById("ISEP").style.color = "green"
        document.getElementById("ISCAP").style.color = "green"
        document.getElementById("ESTG").style.color = "green"
        document.getElementById("ESEP").style.color = "green"
        document.getElementById("ESS").style.color = "green"

         document.getElementById("ESMAD").style.visibility = "visible"
        document.getElementById("ESHT").style.visibility = "visible"
        document.getElementById("ESMAE").style.visibility = "visible"
        document.getElementById("ISEP").style.visibility = "visible"
        document.getElementById("ISCAP").style.visibility ="visible"
        document.getElementById("ESTG").style.visibility = "visible"
        document.getElementById("ESEP").style.visibility = "visible"
        document.getElementById("ESS").style.visibility = "visible"
    }

    function funcC1() {
        document.getElementById("ESMAD").style.color = "black"
        document.getElementById("ESHT").style.color = "black"
        document.getElementById("ESMAE").style.color = "green"
        document.getElementById("ISEP").style.color = "green"
        document.getElementById("ISCAP").style.color = "green"
        document.getElementById("ESTG").style.color = "black"
        document.getElementById("ESEP").style.color = "green"
        document.getElementById("ESS").style.color = "green"

        document.getElementById("ESMAD").style.visibility = "hidden"
        document.getElementById("ESHT").style.visibility = "hidden"
        document.getElementById("ESMAE").style.visibility = "visible"
        document.getElementById("ISEP").style.visibility = "visible"
        document.getElementById("ISCAP").style.visibility = "visible"
        document.getElementById("ESTG").style.visibility = "hidden"
        document.getElementById("ESEP").style.visibility = "visible"
        document.getElementById("ESS").style.visibility = "visible"
    }

    function funcC2() {
        document.getElementById("ESMAD").style.color = "green"
        document.getElementById("ESHT").style.color = "green"
        document.getElementById("ESMAE").style.color = "black"
        document.getElementById("ISEP").style.color = "black"
        document.getElementById("ISCAP").style.color = "black"
        document.getElementById("ESTG").style.color = "black"
        document.getElementById("ESEP").style.color = "black"
        document.getElementById("ESS").style.color = "black"

        document.getElementById("ESMAD").style.visibility = "visible"
        document.getElementById("ESHT").style.visibility = "visible"
        document.getElementById("ESMAE").style.visibility = "hidden"
        document.getElementById("ISEP").style.visibility = "hidden"
        document.getElementById("ISCAP").style.visibility = "hidden"
        document.getElementById("ESTG").style.visibility = "hidden"
        document.getElementById("ESEP").style.visibility = "hidden"
        document.getElementById("ESS").style.visibility = "hidden"
    }

    function funcC3() {
        document.getElementById("ESMAD").style.color = "black"
        document.getElementById("ESHT").style.color = "black"
        document.getElementById("ESMAE").style.color = "black"
        document.getElementById("ISEP").style.color = "black"
        document.getElementById("ISCAP").style.color = "black"
        document.getElementById("ESTG").style.color = "green"
        document.getElementById("ESEP").style.color = "black"
        document.getElementById("ESS").style.color = "black"

        document.getElementById("ESMAD").style.visibility = "hidden"
        document.getElementById("ESHT").style.visibility = "hidden"
        document.getElementById("ESMAE").style.visibility = "hidden"
        document.getElementById("ISEP").style.visibility = "hidden"
        document.getElementById("ISCAP").style.visibility = "hidden"
        document.getElementById("ESTG").style.visibility = "visible"
        document.getElementById("ESEP").style.visibility = "hidden"
        document.getElementById("ESS").style.visibility = "hidden"
    }

}