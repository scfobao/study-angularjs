/**
 * Created by Administrator on 2016/5/18.
 */

    function MyController($scope) {
        $scope.clock={
            now:new Date()
        };
        $scope.name={
            value:'liqinghua'
        };
        var updateClock = function () {
            $scope.clock.now = new Date();

        };

    setInterval(function(){
        $scope.$apply(updateClock);
    },1);
        updateClock();
    }



