require("dotenv").config();
var request = require("request");
var nodeArgs = process.argv;
var action = process.argv[2];
var value = process.argv[3];
var inquirer = require("inquirer");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var fs = require("fs");
// appendtext();

switch (action) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifyThisSong(value);
        break;
    case "movieThis":
        movieThis(value);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
}
// Twitter
function myTweets() {
    var params = {
        screen_name: value,

    }
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        console.log(params);
        
        // console.log(myTweets);
        var myTweets = tweets;
        if (!error) {
            for (var i = 0; i < myTweets.length; i++) {
                var number = i + 1;
               console.log(number + ". Tweet " + myTweets[i].text + "Created on: " + myTweets[i].created_at);
                 fs.appendFile("tweetspage.txt"+ "/n"+number + ". Tweet " + myTweets[i].text + "Created on: " + myTweets[i].created_at, (err) => {  
                    if (err) throw err;
                    console.log(' updated!');
                  })
            } 
            // fs.appendFile("tweetspage.txt"+ "/n"+number + ". Tweet " + myTweets[i].text + "Created on: " + myTweets[i].created_at, (err) => {  
            //         if (err) throw err;
            //         console.log(' updated!');
            //       })
            }
        })

    
};

// Spotify
function spotifyThisSong() {
    var listofsongs=[];
    if (value == undefined) {
        value = "I Want it That Way";
    }else{
        value=process.argv[3];
    }
    console.log(value);
    spotify
    .search({ type: 'track', query: value})
    .then(function(err,data) {
        var songs=data.tracks.items;
        //console.log(songs)
         for(var i in songs){
             console.log(songs[i].name);
            
        //      listofsongs.push(songs[item].name);
          }
     
    })
    .catch(function(err) {
      //console.log(err);
    });
   

}

// OMDB
// Variables
 var nodeArgs = process.argv;
 var movies = "";
 function movieThis(value) {
     for (var i = 2; i < nodeArgs.length; i++) {
         if (i > 2 && i < nodeArgs.length) {
             movies = movies + "+" + nodeArgs[i];
         }
         else {
             movies += nodeArgs[i];
         }
     }
    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movies + "&y=&plot=short&apikey=trilogy";
    var omdb = require('omdb');
 
    omdb.search('Mr. Nobody', function(err, movies) {
        if(err) {
            return console.error(err);
        }
     
        if(movies.length < 3) {
            return console.log('No movies were found!');
        }
     
        movies.forEach(function(movie) {
            console.log('%s (%d)', movie.title, movie.year);
        });
    });
    omdb.get({ title: 'Mr. Nobody', year: 2009 }, true, function(err, movie) {
        if(err) {
            return console.error(err);
        }
     
        if(!movie) {
            return console.log('Movie not found!');
        }
     
        console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
        console.log(movie.plot);
    });
    // console.log(queryUrl);
    //  request(queryUrl, function (error, response, body) {
    //      //console.log(body);
    //      // If the request is successful
    //      if (!error && response.statusCode === 200) {
    //         jsonBody = JSON.parse(body);
    //          // To get the movie results:
    //          var movieResults =
    //              ("======= log entry begin =======" + "\r\n")
    //          console.log("");
    //          console.log("Title: " + jsonBody.Title);
    //          console.log("Release Year: " + jsonBody.Year);
    //          console.log("IMDB rating: " + jsonBody.imdbRating);
    //          console.log("Country: " + jsonBody.countryProduced);
    //          console.log("Language: " + jsonBody.Language);
    //          console.log("Plot: " + jsonBody.Plot);
    //          console.log("Actors: " + jsonBody.Actors);
    //          ("======= log entry end =======" + "\r\n")
    //          console.log(movieResults)
    //      } else {
    //         return 'hello'
    //      }
    //  });


// };

// Do What It Says
function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        //console.log(data);
        var dataArr = data.split(",");
        //console.log(dataArr);
    });
}          