const BOT_API = "YOUT_BOT_API";
const CHAT_ID = "CHAT_ID";

function onSubmit(e) {
    var form = FormApp.getActiveForm();
    var allResponses = form.getResponses();
    var latestResponse = allResponses[allResponses.length - 1];
    var response = latestResponse.getItemResponses();
    var result = "";

    for (var i = 0; i < response.length; i++) 
      result += response[i].getItem().getTitle() + " : " + response[i].getResponse() + "\n";

    var options = {
        "method": "post",
        "payload": {
          'chat_id': CHAT_ID,
          'text': result
        }
    };

    UrlFetchApp.fetch("https://api.telegram.org/bot" + BOT_API + "/sendMessage", options);
};