var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {

    var highest = 0;
    var check = 0;

    $scope.audioObject = {}
    $scope.getSongs = function() {
        $http.get(baseUrl + $scope.track).success(function(response){
            data = $scope.tracks = response.tracks.items;
        }).then(function(){
            for (var i = 0; i < data.length; i++) {
                check = data[i]["popularity"];
                if (check > highest) {
                    highest = check;
                }
            } 
            console.log('popularity: ' + highest);
        });
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
      
    $scope.popCheck = function(song, popularity) {
        console.log(popularity);
        if(popularity == highest) {
            alert('YOU WIN!');
        } else {
            alert('Keep trying.');
        }  
    }
})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});