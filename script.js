const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');
const notifier = require('node-notifier');
const path = require('path');

//var URL = "http://www.jiit.ac.in";

//var URL = "http://www.jiit.ac.in/academicsfacultycs?page=2";


for(let i=0; i<5; i++)
{

request("http://www.jiit.ac.in/academicsfacultycs?page="+i,function (err,response,body) {
    if(err)
    {
        console.log(err);
        console.log('Status Code Of Response Is :'+response.statusCode);
    }
    //console.log('Status Code Of Response Is :'+response.statusCode);
    if(response.statusCode===200)
    {
        //console.log('Everything is working properly!!');
    }

    var $ = cheerio.load(body);

    $('div.view-faculty > div.view-content > ul > li.faculty-list > div.faculty-desc').each(function (index) {

        var faculty_name = $(this).find('div.faculty-name').text();
        var faculty_email = $(this).find('div.faculty-email').text();
        /*console.log(faculty_name);
        console.log(faculty_email);
        console.log(' ');*/
        fs.appendFile('cs_it_dept.txt',faculty_name+'\n'+faculty_email+'\n\n');
    })
});
}




fs.stat('cs_it_dept.txt', function(err, stat) {
    if(err == null) {
        //console.log('File exists');
        notifier.notify({
            title: 'Message Triggered',
            message: 'Ashish Your Script Has Been Loaded Completely!!',
            icon: path.join(__dirname,'Ashish_PP.jpg')
        })
    } else if(err.code == 'ENOENT') {
        // file does not exist
        //console.log("ashish your file does not exist here:( :(");
        //fs.writeFile('log.txt', 'Some log\n');
    } else {
        console.log('Some other error: ', err.code);
    }
});
for(let i=0; i<4; i++)
{

    request("http://www.jiit.ac.in/academicsfacultyele?page="+i,function (err,response,body) {
        if(err)
        {
            console.log(err);
            console.log('Status Code Of Response Is :'+response.statusCode);
        }
        //console.log('Status Code Of Response Is :'+response.statusCode);
        if(response.statusCode===200)
        {
            //console.log('Everything is working properly!!');
        }

        var $ = cheerio.load(body);

        $('div.view-faculty > div.view-content > ul > li.faculty-list > div.faculty-desc').each(function (index) {

            var faculty_name = $(this).find('div.faculty-name').text();
            var faculty_email = $(this).find('div.faculty-email').text();
            /*console.log(faculty_name);
            console.log(faculty_email);
            console.log(' ');*/
            fs.appendFile('ECE_dept.txt',faculty_name+'\n'+faculty_email+'\n\n');
        })
    });
}




