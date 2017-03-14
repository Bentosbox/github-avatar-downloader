// node beer.js beer
// process.argv[2] - name of beer
//url request for info
// get request to search endpoint
//get response
//parse response
// output response

// request(buildsearchURL(), (err, response, body) => {
//   if (err) {
//     console.log("wtf",err);
//     return false;
//   }
// }



var request = require('request');
var fs = require('fs');
var repoOwner
var repoName



console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = 'Bentosbox'
var GITHUB_TOKEN = 'def816b468e50d45a946dd4e5fc0a59453f9ce05'
// var requestURL = 'https://' + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
// console.log(requestURL);

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
let requestURL = 'https://' + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
// console.log(requestURL);
var userAgent = {
  url: requestURL,
  headers: {
    'User-Agent': "GitHub Avatar Downloader - Student Project"
          }
           };


  request(userAgent, (err, response, body) => {
    if (err) {
      console.log("wtf",err);
      return false;
    }

    var data = JSON.parse(body);
    data.forEach((avatar) => {
      filePath = "avatars/" + avatar.login + ".jpg";
      urlPath = avatar.avatar_url;
      cb(urlPath, filePath);
      // cb(avatar.avatar_url);
    });
  });
    // downloadImageByURL(cb);
// console.log(cb);
// downloadImageByURL(cb);
}

  function downloadImageByURL(url, filePath) {
    // var image = url.toString();
    // console.log(url);
    request.get(url)            // Note 1
      .on('error', function (err) {  // Note 2
        throw err;
      })
      // .on('response', function (response) { // Note 3
      //   console.log('Response Status Code: ', response.statusCode);
      //   console.log('Content Type: ', response.headers['content-type']);
      //   console.log(url);
      // })
      // .on('end', function(end) {
      //   console.log('Download Completed');
      // })
      .pipe(fs.createWriteStream(filePath));
  }
  // }
  // });


// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");
getRepoContributors("jquery", "jquery", downloadImageByURL);