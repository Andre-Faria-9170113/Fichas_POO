window.onload = function () {
    document.getElementById("TODAS").addEventListener("click", funcTODAS)
    document.getElementById("CAMPUS I").addEventListener("click", funcC1)
    document.getElementById("CAMPUS II").addEventListener("click", funcC2)
    document.getElementById("CAMPUS III").addEventListener("click", funcC3)

    function funcTODAS() {
        let myRef = document.getElementsByTagName("input")

        for (let i=0; i<myRef.length; i++) {
            myRef[i].style.backgroundColor = "green"
            myRef[i].style.visibility = "visible"
        }
    }

    function funcC1() {
        let myRef = document.getElementsByTagName("input")
        let myRef_new = document.getElementsByClassName("c1")

        for (let i=0; i<myRef.length; i++) {
             myRef[i].style.visibility = "hidden"
        }


        for (let i=0; i<myRef_new.length; i++) {
            myRef_new[i].style.visibility = "visible"
            myRef_new[i].style.backgroundColor = "green"

        }

    }

    function funcC2() {
        let myRef = document.getElementsByTagName("input")
        let myRef_new = document.getElementsByClassName("c2")

        for (let i=0; i<myRef.length; i++) {
             myRef[i].style.visibility = "hidden"
        }


        for (let i=0; i<myRef_new.length; i++) {
            myRef_new[i].style.visibility = "visible"
            myRef_new[i].style.backgroundColor = "green"

        }

    }

    function funcC3() {
        let myRef = document.getElementsByTagName("input")
        let myRef_new = document.getElementsByClassName("c3")

        for (let i=0; i<myRef.length; i++) {
             myRef[i].style.visibility = "hidden"
        }


        for (let i=0; i<myRef_new.length; i++) {
            myRef_new[i].style.visibility = "visible"
            myRef_new[i].style.backgroundColor = "green"

        }

}}
