// Initialize Parse app
Parse.initialize('wAVO1AjkzLk3e1uEsQ9jnebMHNvAbqmwX4KBE8Yw', 'rnCGOczWQzYyMwQ0FzZYIBq5qhbdFiz2F3TbxxUA');

var SpotifyDB = Parse.Object.extend('SpotifyDB');

// Click event when form is submitted
$('form').submit(function() {

    // Create a new instance of your Multiverse class 
    var spotifyinfo = new SpotifyDB();

    // For each input element, set a property of your new spotifyinfo equal to the input's value
    spotifyinfo.set('name', $('name').val());
    spotifyinfo.set('song', $('song').val());

    $(this).find('input').each(function(){
        $(this).val('');
    })

    // After setting each property, save your new instance back to your database
    spotifyinfo.save(null, {
        success:getData
    });
    return false;
})

// Function to get data
/*var getData = function() {

    // Set up a new query for SpotifyDB class
    var query = new Parse.Query(SpotifyDB)

    // Set a parameter for the query -- where the Song property isn't missing
    query.notEqualTo('plane', '')

     Execute the query using ".find".  When successful:
        - Pass the returned data into your buildList function
    
    query.find({
        success:function(results) {
            initalizeController(results)
        } 
    })
}*/

// Function to utilize results
//var initalizeController = function(results) {
    var data;
    var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
    var myApp = angular.module('myApp', [])

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
//}