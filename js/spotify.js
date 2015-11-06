var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
var myApp = angular.module('myApp', [])
var answers = [];

var getInfoCtrl = myApp.controller('getInfoCtrl', function($scope, $http) {
    $scope.currentForm = 0;
    $scope.forms = [
        'Who was the Artist?',
        'Album?',
        'Duration?',
        'Genre?',
        'Popularity?'
    ];
    $scope.submit = function() {
        if ($scope.user) {
            answers.push(this.user);
            $scope.currentForm++;
        } 
        console.log('Answer Elements: ' + answers)
        $scope.user = '';
    }
})

var processAnswers = function() {

}

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