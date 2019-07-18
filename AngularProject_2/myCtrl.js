app.controller("myCtrl", function ($scope, $http, $timeout) {
  $http.get("languages.json")
  .then(function (response) {$scope.names = response.data.records;});

  // $timeout(function () {
  //   $scope.myWelcome = "How are you today?";
  // }, 4000);
  $scope.theTime = new Date().toLocaleDateString();
  $scope.myWelcome = "Bharghav's Portfolio"
  $scope.name = "Bharghav Ram Reddy Baddam";
  $scope.email = "ramreddy.bhargav@gmail.com";
  $scope.contact = "(518)-912-9799";
  $scope.address = "Yet to be updated";
  $scope.myTech = true;
  $scope.myEduc = true;
  $scope.myExpe = true;
  $scope.myImage="Images/bharghav.jpg"
  $scope.logo="Images/logo.jfif"

  
});