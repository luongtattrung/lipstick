var richeApp = angular.module('richeApp', []);

richeApp.controller('RicheAppCtrl', function ($scope) {

  initIndex = 0;
  // Function
  $scope.start = function(){
    if (!$scope.firstQuestion) {
      initIndex = Math.floor((Math.random() * mainQuestions.length));
    }else{
      initIndex++;
      if (initIndex==mainQuestions.length) {
        initIndex = 0;
      }
    }
    $scope.firstQuestion = mainQuestions[initIndex];

  };
  $scope.mainOptionSelected = function(groupIndex){

    $scope.selectedGroup = groups[groupIndex];

    var subQuestions = $scope.selectedGroup.subQuetsions;
    var tempArray = subQuestions.slice(0)
    var index = Math.floor((Math.random() * tempArray.length));
    $scope.secondQuestion = tempArray[index];

    tempArray.splice(index,1);
    console.log(tempArray);
    index = Math.floor((Math.random() * tempArray.length));
    $scope.thirdQuestion = tempArray[index];
  };

  $scope.optionSelected = function($event){
    var elem = angular.element($event.srcElement);
    elem.addClass("option-selecting");
    nextSnd.play();
    window.setTimeout(function(){
      slitslider.next();
      $(".option-selectable").removeClass("option-selecting");
      initCheckboxes();
      console.log("here");
    }, 800);
  };

  $scope.start();

});
