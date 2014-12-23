Nexmo = Npm.require('easynexmo');

Nexmo.logger = function(err, msg){
    if (err){
        console.error(err);
    } else {
        console.log(msg);
    }
}

if (Meteor.settings.nexmo){
    Nexmo.initialize(Meteor.settings.nexmo.key, Meteor.settings.nexmo.secret, Meteor.settings.nexmo.protocol, Meteor.settings.nexmo.debug);
} else {
    throw new Meteor.Error(404, 'Nexmo API key, secret, protocol and debug settings are required in settings');
}