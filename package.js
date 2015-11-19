Package.describe({
    name: 'risul:nexmo',
    summary: 'Nexmo NodeJS client (pvela/easynexmo) packaged for Meteor',
    version: '1.0.1',
    git: 'https://github.com/risul/meteor-nexmo'
});

Npm.depends({
    easynexmo: '0.6.6'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.export('Nexmo');
    api.addFiles('lib/nexmo.js', 'server');
});