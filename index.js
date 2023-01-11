let captcha;
const alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const errMsg = document.getElementById("err-msg");

const generate = () => {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("entered-captcha").value = '';
}

const onLoginClick = () => {
    errMsg.innerText = "";
    const emailId = document.getElementById("emailId").value;
    const password = document.getElementById("password").value;
    const userValue = document.getElementById("entered-captcha").value;
    if(!emailId) errMsg.innerText += "Please enter email id to login!!";
    if(!password) errMsg.innerText += "Please enter password to login!!";
    if(userValue !== captcha) {
        errMsg.innerText += "Please enter correct captcha to login!!"
    } else {
        errMsg.innerText = "Correct Captcha!!";
    }
}