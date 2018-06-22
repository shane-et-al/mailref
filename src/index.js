import mailparser from 'mailparser';


window.genRef = function() {
    var inpObj = document.getElementById("input");
    mailparser.simpleParser(inpObj.value, (err, mail) => { })
    if (mail.headers.has('subject')) {
        alert(mail.headers.get('subject'));
    }
}