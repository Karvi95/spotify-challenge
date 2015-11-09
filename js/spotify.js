var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='

//Initializes the app to utilize Angular
var myApp = angular.module('myApp', [])

//Initializes controller, takes in scope and http as parameters 
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {

    var highest = 0;
    var check = 0;

    $scope.audioObject = {}

    //Performs Ajax request to return an array of objects with name property containing the user-inputted track
    //then finds highest number; this quantifies the popularity of the most popular song. 
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
        });
    }

    //Samples the track.
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

    //Checks whether the selected song is the most popular. If the user won, warns of page reload,
    //else, prompts user to continue guessing.  
    $scope.popCheck = function(song, popularity) {
        if(popularity == highest) {
            alert("YOU WIN\nPlease stand-by for a page refresh");
            document.location.reload(true); 
        } else {
            alert('Keep trying.');
        }  
    }

})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});