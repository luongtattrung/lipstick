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
    var index = Math.floor((Math.random() * subQuestions.length));
    $scope.secondQuestion = subQuestions[index];
    console.log(index)
    index++;
    if (index == subQuestions.length) {index = 0};
    $scope.thirdQuestion = subQuestions[index];
    console.log(index)
  };

  $scope.optionSelected = function($event){
    var elem = angular.element($event.srcElement);
    elem.addClass("selecting");
    nextSnd.play();
    window.setTimeout(function(){slitslider.next(); $(".option-selectable").removeClass("selecting");}, 500);
  };

  $scope.start();

});
