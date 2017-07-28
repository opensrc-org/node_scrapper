const notifier = require('node-notifier');
const path = require('path');

/*notifier.notify('Message');*/

//notifier.notify('Ashish Your Script Has Been Loaded SuccessFully!!');

/*
notifier.on({

})*/
notifier.notify({
    'title': 'Message Triggered',
    'message': 'Ashish!! Your Script Has Been Loaded Successfully',
    'icon': path.join(__dirname, 'Ashish_PP.jpg')
});

