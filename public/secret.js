function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                }
        }
        return "";
};

function checkCookie() {
        let user = getCookie("CTF{Flag_XSS}");
        if (user != "") {
                console.log("Welcome again to " + user + " assignment ");
        } else {
                user = prompt("Please enter this course's code:", "");
                if (user != "" && user != null) {
                        setCookie("CTF{Flag_XSS}", user, 365);
                }
        }
}

function myFunction() {
        var div = document.getElementById("results2");
        if (document.getElementById("value").value == "COMP7170" ) {
                div.innerText = "Congratulation! You get the right cookie!";
        }
        else if (document.getElementById("value").value == "comp7170" ) {
                div.innerText = "Congratulation! You get the right cookie!";
        }
        else if (document.getElementById("value").value == "7170" ) {
                div.innerText = "Congratulation! You get the right cookie!";
        }
        else {
                div.innerText = "Please find the right cookie";
        }
}


