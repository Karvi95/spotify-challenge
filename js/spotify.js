var data;
var baseUrl = 'https://api.spotify.com/';
var artistsAlbum = 'v1/artists/{id}/albums';
var myApp = angular.module('myApp', [])

var getInfoCtrl = myApp.controller('getInfoCtrl', function($scope, $http) {
    $scope.currentForm = 0;
    $scope.responses = [];
    $scope.forms = [
        'Who was the Artist?',
        'How many songs are in the album?',
        'What is last letter of the album?',
        'The song is: 1 - less than 5 mins, 2 - 5 to 10 mins; 3 - greater than 10 mins',
        'On a scale of 1(...less popular) to 5(On Fire!), how popular is this track?'
    ];
    $scope.submit = function() {
      $scope.currentForm++;
        console.log('Answer Elements: ' + $scope.responses)
        $scope.responses = '';
    }

    $scope.processAnswers = function() {


        $http.get(baseUrl + artistsAlbum).success(function(response) {

        });
        //get artist's albums
        //loop through them to see if has letter ending in character
        //push name to an array if do

        //for each album in array, Get full album object
        // check tracks to see if equals number of tracks (check how to get several albums might be easier)
        // if match, push album to new array
        // optional: clear old array

        //for each album in new array, get album's tracks
        //check if duration converted matches duration
        // if match, push track to new array
        // optional: clear old array

        //for each track, check if popularity matches.
        //if found, play and get image from simplified album object,
        //Optional: if not, call function to save stuff to parse. 






        var artist = $scope.responses[0];
        var character = $scope.responses[2];
        var numberOfTracks = parseInt($scope.responses[1], 0);
        var duration;
        if (parseInt($scope.responses[2], 0) === 1) {

        } else if (parseInt($scope.responses[2], 0) === 2) {

        } else {

        };
        var popularity;
        if (parseInt($scope.responses[4], 0) === 1) {

        } else if (parseInt($scope.responses[4], 0) === 2) {

        } else if (parseInt($scope.responses[4], 0) === 3) {

        } else if (parseInt($scope.responses[4], 0) === 4) {

        } else {

        }
    }

})











var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.getSongs = function() {
    $http.get(baseUrl + $scope.track).success(function(response){
      data = $scope.tracks = response.tracks.items
      
    })
  }
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});