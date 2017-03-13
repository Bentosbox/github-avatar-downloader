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

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = 'Bentosbox'
var GITHUB_TOKEN = 'def816b468e50d45a946dd4e5fc0a59453f9ce05'
// var requestURL = 'https://' + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
// console.log(requestURL);

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
var requestURL = 'https://' + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});