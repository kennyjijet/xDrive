var api_version = 1;

function GetUnity() {
    if (typeof unityObject != "undefined") {
        return unityObject.getObjectById("unityPlayer");
    }
    return null;

};

var _c = "Network_Controllers";
var _f = "setFacebook";

function GetConfigURL(c, f) {
    _c = c;
    GetUnity().SendMessage(c, f, "https://gamepunks.com/clients/BMW/XDrive/site/config");
}

function GetData(a) {
    SetData(configdata);
}

function GetFacebookID(a) {
    var u = '{"Facebook_id":"' + facebook_id + '", "url":"' + window.location.protocol + '/' + window.location.host + '/' + window.location.pathname + '"}';
    u = '{"Facebook_id":"' + facebook_id;
    SetData(u);
    //console.log (u);
}

function SetData(a) {
    if (a == "") a = {post_id: ""};
    Log(_c.toString() + " " + _f.toString() + " " + json_encode(a));
    if (a != "") {
        GetUnity().SendMessage(_c.toString(), _f.toString(), json_encode(a));
    }
}

function SetCallback(c, f) {
    FB.Canvas.setSize({ width: 760, height: 850 });
    _c = c;
    _f = f;
}

function Log(message) {
    //if ( console != undefined ) console.log ( api_version + " "+ message.toString() );
}

function ShowK2(response) {
    GetUnity().style.width = '1px';
    GetUnity().style.height = '1px';
    document.getElementById('k2shop').style.width = "760px";
    document.getElementById('k2shop').style.height = "555px";
    document.getElementById('k2shop').style.visibility = 'visible';
    document.getElementById('link').style.visibility = 'hidden';

}

function HideK2(response) {
    document.getElementById('k2shop').style.width = "1px";
    document.getElementById('k2shop').style.height = "1px";
    document.getElementById('k2shop').style.visibility = 'hidden';
    document.getElementById('link').style.visibility = 'visible';
    ShowUnity("false");
}

function ShowForm(response) {
    GetUnity().style.width = '1px';
    GetUnity().style.height = '1px';
    document.getElementById('competition').style.width = "800px";
    document.getElementById('competition').style.height = "580px";
    document.getElementById('competition').style.visibility = 'visible';
    document.getElementById('competition_form').style.width = "800px";
    document.getElementById('competition_form').style.height = "580px";
    document.getElementById('competition_form').style.visibility = 'visible';
    document.getElementById('container').style.visibility = 'hidden';


}

function HideForm(response) {
    document.getElementById('competition').style.width = "1px";
    document.getElementById('competition').style.height = "1px";
    document.getElementById('competition').style.visibility = 'hidden';
    document.getElementById('competition_form').style.width = "1px";
    document.getElementById('competition_form').style.height = "1px";
    document.getElementById('competition_form').style.visibility = 'hidden';
    document.getElementById('container').style.visibility = 'visible';
    ShowUnity("false");
}


function ShowUnity(response) {
    document.getElementById('fb-root').style.width = "1px";
    document.getElementById('fb-root').style.height = "1px";
    GetUnity().style.width = '100%';
    GetUnity().style.height = '100%';
    if (response != "false") SetData(response);
}

function HideUnity() {

    document.getElementById('fb-root').style.width = "760px";
    document.getElementById('fb-root').style.height = "506px";
    GetUnity().style.width = '1px';
    GetUnity().style.height = '1px';
}

function InviteFriends(id, gname, fname) {

    if (id == "") {
        //FB.UIServer.Methods["apprequests"].size = {width:640, height:480};
        FB.ui(
            {
                method: 'apprequests',
                message: 'BMW XDRIVE CHALLENGE - COME AND RACE IN THIS AWESOME GAME',
                size: {width: 640, height: 480},
                width: 640,
                height: 480,
                filters: ['app_non_users'],
                attachment: {
                    media: [
                        {
                            type: 'image',
                            href: 'http://www.bmw.com/com/en/insights/technology/xdrive_2010/phase_2/index.html',
                            src: 'http://d1rc7jscq1apr.cloudfront.net/clients/BMW/XDrive/images/03_Posts_93x93px_X3.jpg'
                        }
                    ]
                }
            },
            function (response) {
                if (response == null) response = '';
                ShowUnity(response);
            }
        );
    } else {
        //FB.UIServer.Methods["apprequests"].size = {width:640, height:250};

        FB.ui(
            {
                method: 'apprequests',
                message: 'BMW XDRIVE CHALLENGE - COME AND RACE IN THIS AWESOME GAME',
                to: id,
                size: {width: 640, height: 250},
                width: 640,
                height: 250,
                attachment: {
                    media: [
                        {
                            type: 'image',
                            href: 'http://www.bmw.com/com/en/insights/technology/xdrive_2010/phase_2/index.html',
                            src: 'http://d1rc7jscq1apr.cloudfront.net/clients/BMW/XDrive/images/03_Posts_93x93px_X4.jpg'
                        }
                    ]
                }
            },
            function (response) {
                if (response == null) response = "";
                ShowUnity(response);
            }
        );
    }
    HideUnity();
}

function PostToManyFriendsWalls(facebook_id, laptime, friends) {

    var filters = [
        {name: 'DRIVERS ', user_ids: friends},
        'app_non_users'
    ];
    if (friends == "" || filters == null || friends == facebook_id) filters = ['app_users'];
    FB.ui(
        {
            method: 'apprequests',
            message: 'I Just raced with Laptime : ' + laptime + " Come and see if you can beat it!",
            data: 'BMW XDRIVE CHALLENGE',
            filters: filters,
            attachment: {
                media: [
                    {
                        type: 'image',
                        href: 'http://www.bmw.com/com/en/insights/technology/xdrive_2010/phase_2/index.html',
                        src: 'http://d1rc7jscq1apr.cloudfront.net/clients/BMW/XDrive/images/03_Posts_93x93px_X1.jpg'
                    }
                ]
            }

        },
        function (response) {
            if (response == null) response = "";
            ShowUnity(response);
        }
    );
    HideUnity();
}

function PostFeed(facebook_id, item_name, item_type) {
    var publish =
    {
        method: 'stream.publish',
        message: 'I just bought ' + item_name,
        uid: facebook_id,
        attachment: {
            name: 'BMW XDRIVE CHALLENGE',
            caption: 'New ' + item_type,
            description: ('I just bought ' + item_name),
            href: 'http://apps.facebook.com/bmwxdrivechallenge',
            media: [
                {
                    type: 'image',
                    href: 'http://www.bmw.com/com/en/insights/technology/xdrive_2010/phase_2/index.html',
                    src: 'http://d1rc7jscq1apr.cloudfront.net/clients/BMW/XDrive/images/03_Posts_93x93px_X6.jpg'
                }
            ]
        },
        action_links: [
            { text: 'Play Now', href: 'http://apps.facebook.com/bmwxdrivechallenge/' }
        ],
        user_prompt_message: 'Share your Joy'

    };

    FB.ui(publish,
        function (response) {
            if (response == null) response = "";
            ShowUnity(response);
        });

    HideUnity();
}

function onClick() {
    $('#ajaxContent').load($(this).attr('href'), onSuccess);
    return false;
}

function onSuccess(d) {
    configdata = d;
    SetData(d);
}

function OpenPopupWindow(d) {
    ShowK2("");
    //window.open('http://www.k2skis.com', 'open_window');
}

function deleteRequest(requestId) {
    FB.api(requestId, 'delete', function (response) {
    });
}

function json_decode(str_json) {
    var json = this.window.JSON;
    if (typeof json === 'object' && typeof json.parse === 'function') {
        try {
            return json.parse(str_json);
        } catch (err) {
            if (!(err instanceof SyntaxError)) {
                throw new Error('Unexpected error type in json_decode()');
            }
            this.php_js = this.php_js || {};
            this.php_js.last_error_json = 4; // usable by json_last_error()
            return null;
        }
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var j;
    var text = str_json;

    if (cx.test(text)) {
        text = text.replace(cx, function (a) {
            return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        });
    }
    if ((/^[\],:{}\s]*$/).
        test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        j = eval('(' + text + ')');

        return j;
    }

    this.php_js = this.php_js || {};
    this.php_js.last_error_json = 4; // usable by json_last_error()
    return null;
}

function json_encode(mixed_val) {
    var retVal, json = this.window.JSON;
    try {
        if (typeof json === 'object' && typeof json.stringify === 'function') {
            retVal = json.stringify(mixed_val); // Errors will not be caught here if our own equivalent to resource
            //  (an instance of PHPJS_Resource) is used
            if (retVal === undefined) {
                throw new SyntaxError('json_encode');
            }
            return retVal;
        }

        var value = base64_encode(mixed_val);

        var quote = function (string) {
            var escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var meta = { // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            };

            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        };

        var str = function (key, holder) {
            var gap = '';
            var indent = '    ';
            var i = 0; // The loop counter.
            var k = ''; // The member key.
            var v = ''; // The member value.
            var length = 0;
            var mind = gap;
            var partial = [];
            var value = holder[key];

            // If the value has a toJSON method, call it to obtain a replacement value.
            if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }

            // What happens next depends on the value's type.
            switch (typeof value) {
                case 'string':
                    return quote(value);

                case 'number':
                    // JSON numbers must be finite. Encode non-finite numbers as null.
                    return isFinite(value) ? String(value) : 'null';

                case 'boolean':
                case 'null':
                    // If the value is a boolean or null, convert it to a string. Note:
                    // typeof null does not produce 'null'. The case is included here in
                    // the remote chance that this gets fixed someday.
                    return String(value);

                case 'object':
                    // If the type is 'object', we might be dealing with an object or an array or
                    // null.
                    // Due to a specification blunder in ECMAScript, typeof null is 'object',
                    // so watch out for that case.
                    if (!value) {
                        return 'null';
                    }
                    if ((this.PHPJS_Resource && value instanceof this.PHPJS_Resource) || (window.PHPJS_Resource && value instanceof window.PHPJS_Resource)) {
                        throw new SyntaxError('json_encode');
                    }

                    // Make an array to hold the partial results of stringifying this object value.
                    gap += indent;
                    partial = [];

                    // Is the value an array?
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        // The value is an array. Stringify every element. Use null as a placeholder
                        // for non-JSON values.
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }

                        // Join all of the elements together, separated with commas, and wrap them in
                        // brackets.
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }

                    // Iterate through all of the keys in the object.
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }

                    // Join all of the member texts together, separated with commas,
                    // and wrap them in braces.
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
                case 'undefined':
                // Fall-through
                case 'function':
                // Fall-through
                default:
                    throw new SyntaxError('json_encode');
            }
        };

        // Make a fake root object containing our value under the key of ''.
        // Return the result of stringifying the value.
        return base64_decode(str('', {
            '': value
        }));

    } catch (err) { // Todo: ensure error handling above throws a SyntaxError in all cases where it could
        // (i.e., when the JSON global is not available and there is an error)
        if (!(err instanceof SyntaxError)) {
            throw new Error('Unexpected error type in json_encode()');
        }
        this.php_js = this.php_js || {};
        this.php_js.last_error_json = 4; // usable by json_last_error()
        return null;
    }
}

function base64_encode(data) {

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = "",
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data = this.utf8_encode(data + '');

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}

function base64_decode(data) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        dec = "",
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data += '';

    do { // unpack four hexets into three octets using index points in b64
        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));

        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;

        if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
        } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);
        } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
        }
    } while (i < data.length);

    dec = tmp_arr.join('');
    dec = this.utf8_decode(dec);

    return dec;
}

