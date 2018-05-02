# liri-node-app
LIRI Bot


Overview:

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


Before You Begin:


LIRI will display your latest tweets. As we do not want to display your personal account, or its keys, please make an alias account and add a few tweets to it!
To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs. You'll find these Node packages crucial for LIRI.



Request:


You'll use Request to grab data from the OMDB API.


DotEnv

node_modules
.DS_Store
.env



liri.js can take in the following commands:


* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`

What Each Command Should Do


node liri.js my-tweets

* will show your last 20 tweets and when they were created at in your terminal/bash window.



node liri.js spotify-this-song '<song name here>'

* will show the following information about the song in your terminal/bash window


Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from


If no song is provided then your program will default to "I Want it That Way" by the Backstreet Boys.



node liri.js movie-this '<movie name here>'

* will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
