const fs = require('fs');
const yargs = require('yargs');
const request = require('request');
const cheerio = require('cheerio');


const username = process.argv[2];
//let URL = "https://github.com/AshishkrGoyal/?tab=followers";

//let URL = "https://github.com/"+username+"/?page="+i+"&tab=followers";

//console.log(URL);
ashish:
for(let i=1;i<20;i++)
{
    var repository_name;
    request("https://github.com/"+username+"/?page="+i+"&tab=followers",function (error, response, body) {
    if(error)
    {
        console.log(error);
    }
    //console.log("Status code of response is :"+response.statusCode);

    const $ =  cheerio.load(body);

    //console.log($);


    var full_name;
    //$('div#js-pjax-container').each(function (index) {
        //console.log(this);
        //console.log(full_name); //undefined
        full_name = $('div#js-pjax-container').find('div.container-lg >  div.h-card > div.vcard-names-container > h1.vcard-names > span.vcard-fullname').text();
        //console.log(full_name);  //Ashish Kumar Goyal
    //})
    //console.log("full name of developer is :"+full_name+'\n');
    //console.log("Ashish");

    var count_repository,stars,followers,following;
    count_repository = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Repositories\') > span.Counter').text();
    stars = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Stars\') > span.Counter').text();
    followers = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Followers\') > span.Counter').text();
    following = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Following\') > span.Counter').text();
    //console.log('total count of repositories is:'+count_repository);
    //console.log(stars,followers,following);


    //script for finding list of followers



    $('div#js-pjax-container').each(function (index) {

        repository_name = $(this).find('div.container-lg>div.col-9>div.js-repo-filter>.d-table>.col-9>a').text();
        //console.log(repository_name);
        //console.log("Aashish");

        fs.appendFileSync('output/'+username+'.doc',repository_name);

    })

});

}


/*request(URL,function (error, response, body) {
    if(error)
    {
        console.log(error);
    }
    //console.log("Status code of response is :"+response.statusCode);

    const $ =  cheerio.load(body);

    //console.log($);


    var full_name;
    //$('div#js-pjax-container').each(function (index) {
        //console.log(this);
        //console.log(full_name); //undefined
        full_name = $('div#js-pjax-container').find('div.container-lg >  div.h-card > div.vcard-names-container > h1.vcard-names > span.vcard-fullname').text();
        //console.log(full_name);  //Ashish Kumar Goyal
    //})
    console.log("full name of developer is :"+full_name+'\n');
    //console.log("Ashish");

    var count_repository,stars,followers,following;
    count_repository = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Repositories\') > span.Counter').text();
    stars = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Stars\') > span.Counter').text();
    followers = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Followers\') > span.Counter').text();
    following = $('div.user-profile-nav').find('nav.underline-nav> a:contains(\'Following\') > span.Counter').text();
    console.log('total count of repositories is:'+count_repository);
    //console.log(stars,followers,following);


    //script for finding list of followers


    var repository_name;
    $('div#js-pjax-container').each(function (index) {

        repository_name = $(this).find('div.container-lg>div.col-9>div.js-repo-filter>.d-table>.col-9>a').text();
        console.log(repository_name);

        fs.appendFileSync('followers.txt',repository_name);
    })

});*/
