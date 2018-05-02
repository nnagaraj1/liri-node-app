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
        var params = {
            username: "waveravingdave3",
            count: 20,
        }
        var fs = require("fs");

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
            client.get("myTweets", params, function(error, response, body) {
                //console.log(response, body);
                if(error && response.statusCode == 200) {
                    fs.appendFile("terminal.log", ("======= log entry begin =======\r\n " + Date() + "\r\n \r\nterminal commands:\r\n$ " 
                        + nodeArgs + "\r\n \r\ndata output:\r\n "), function(err) {
                            if (err) { 
                                return console.log(err);
                            }
                        })
                }
                console.log("");
                console.log('Last 20 Tweets');
                console.log(body);
                for (var i = 0; i < myTweets.length; i++) {
                    var number = i + 1;
                    console.log(number + "." + myTweets[i].text);
                    console.log("Created on: " + myTweets[i].created_on);
                    console.log("");
                    fs.appendFile(number + ". Tweet " + myTweets[i].text + "Created on: " + myTweets[i].created_on), function(err) {
                        if (err) {
                            return console.log(err);
                        }
                  }    
            }
            fs.appendFile("terminal.log", ("======= log entry end =======\r\n \r\n")), function(err) {
                if (err) throw err;
            }
            })    
        };

    // Spotify
        function spotifyThisSong(value) {
            if (value === null) {
                value = "I Want it That Way";
            }
            request("https://beta.developer.spotify.com/console/ " + value + "&type=track", function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    jsonBody = JSON.parse(body);
                    console.log("");
                    console.log("Artist: " + jsonBody.Artist);
                    console.log("Song: " + jsonBody.songName);
                    console.log("Preview: " + jsonBody.previewLink);
                    console.log("Album: " + jsonBody.Album);

                }
            }
        
        );
    }

    // OMDB
        // Variables
            var nodeArgs = process.argv;
            var movieName = "";
            function movieThis(value) {
                for (var i = 2; i < nodeArgs.length;  i++) {
                    if (i > 2 && i < nodeArgs.length) {
                        movieName = movieName + "+" + nodeArgs[i];
                    }
                    else{
                        movieName += nodeArgs[i];
                    } 
                }       
        // Then run a request to the OMDB API with the movie specified
            var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
               // console.log(queryUrl);
            request(queryUrl, function (error, response, body) {
                //console.log(body);
        // If the request is successful
            if (!error && response.statusCode === 200) {
                jsonBody = JSON.parse(body);
        // To get the movie results:
            var movieResults = 
            ("======= log entry begin =======" + "\r\n")
                console.log("");
                console.log("Title: " + jsonBody.Title);
                console.log("Release Year: " + jsonBody.Year);
                console.log("IMDB rating: " + jsonBody.imdbRating);
                console.log("Country: " + jsonBody.countryProduced);
                console.log("Language: " + jsonBody.Language);
                console.log("Plot: " + jsonBody.Plot);
                console.log("Actors: " + jsonBody.Actors);
            ("======= log entry end =======" + "\r\n")
                console.log(movieResults) 
            } else {
                return 'hello'
            }
        });
          
        
};

// Do What It Says
function doWhatItSays () {
    
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        //console.log(data);
        var dataArr = data.split(",");
        //console.log(dataArr);
      });
};      