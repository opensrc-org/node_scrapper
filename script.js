const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

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




