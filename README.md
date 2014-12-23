meteor-nexmo
===============

Nexmo NodeJS client (pvela/nexmo) packaged for Meteor

##Install
```bach
meteor add risul:nexmo
```

##Use
Add this to your settings.json or METEOR_SETTINGS env variable containing all settings as JSON

```json
{
    "nexmo": {
        "key": "********",
        "secret": "********",
        "protocol": "http/https",
        "debug": true/false,
        "sender": "Your phone number or string"
    }
}
```


List of API's supported by the library.
=======================================
Refer here https://github.com/pvela/nexmo for list of supported API's by the library.
Refer here http://nexmo.com/documentation/ to get the schema for returned message response object.