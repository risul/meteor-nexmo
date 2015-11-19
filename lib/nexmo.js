Nexmo = Npm.require('easynexmo');

Nexmo.logger = function(err, msg){
    if (err) (log ? log.error(err) : console.error(err));
    else (log ? log.info(msg) : console.log(msg));
}

var options = {
    key: process.env.NEXMO_KEY || Meteor.settings.nexmo.key,
    secret: process.env.NEXMO_SECRET || Meteor.settings.nexmo.secret,
    protocol: process.env.NEXMO_API_PROTOCOL || Meteor.settings.nexmo.protocol || "https",
    debug: process.env.NEXMO_DEBUG || Meteor.settings.nexmo.debug || true
};

if (options.key && options.secret) Nexmo.initialize(options.key, options.secret, options.protocol, options.debug);
else throw new Meteor.Error('Nexmo API KEY & SECRET not found!');