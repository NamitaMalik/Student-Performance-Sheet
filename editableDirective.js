/**
 * Created by Namita Malik on 30/5/15.
 */

(function (ng) {
    var eduStat = ng.module('eduStat');

    eduStat.directive("editable", [function () {
        return {
            scope: {
                value: "=editable",
                index: "@",
                updateStudent: "&"
            },
            restrict: "A",
            templateUrl: "./editableTemplate.html",
            link: function (scope, element) {
                var oldValue = scope.value;
                var changeEditStat = function (stat) {
                    scope.$apply(function () {
                        scope.edit = stat;
                    });
                    if (!stat && scope.value !== oldValue) {
                        scope.updateStudent({index: scope.index});
                    }
                };
                var inputElement = element.find("input")[0];
                element.on("click", function () {
                    changeEditStat(true);
                    inputElement.focus();
                });
                angular.element(inputElement).on("blur", function () {
                    changeEditStat(false);
                });
                element.on("keydown", function (event) {
                    if (event.keyCode === 13) {
                        changeEditStat(false);
                    }
                });
            }
        };
    }]);

})(angular);