var app = app || {};

__url = window.location.protocol + "//54.246.126.124";
if (window.location.protocol == "https:") {
    __url += ":443";
} else {
    __url += ":8080";
}
console.log(">>>>" + __url);

app.config = {
    "apiURL": "http://54.246.126.124:8080/api"
};

app.makeJSONCallback = function (URL) {
    URL = URL.toString();
    var script = document.createElement('script');
    script.src = URL;
    document.body.appendChild(script);
};

app.apiRequest = function (Action, Callback, Params) {
    t = new Date();
    timestamp = t.getTime();
    param_string = "?";
    param_string += "&RAND=" + timestamp;
    param_string += "&action=" + Action;
    if (Callback == null && console) {
        Callback = "console.log";
    }
    param_string += "&callback=" + Callback
    for (x in Params) {
        param_string += "&" + encodeURIComponent(x) + "=" + encodeURIComponent(Params[x]);
    }
    api_req = app.config.apiURL + param_string;
    //if (console) { console.log("requesting: " + api_req); }
    app.makeJSONCallback(api_req);

};