/**
 * Created by Namita Malik on 26/5/15.
 */
(function (ng) {
    var eduStat = ng.module('eduStat', []);
    eduStat.controller('StudentController', [function () {
        var studentController = this;
        studentController.students = [
            {roll_no: '1', name: 'Amit', score: 100},
            {roll_no: '2', name: 'Anoop', score: 60},
            {roll_no: '3', name: 'Bhanu', score: 95},
            {roll_no: '4', name: 'Chandra', score: 82}
        ];
    }]);
    eduStat.filter('average', function () {
        return function (students) {
            var temp = 0;
            ng.forEach(students, function (value) {
                temp = temp + value.score;
            });
            return temp / students.length;
        }
    });
    eduStat.filter('max', function () {
        return function (students) {
            var max = 0;
            ng.forEach(students, function (value) {
                if (max < value.score) {
                    max = value.score;
                }
            });
            return max;
        }
    });
    eduStat.filter('min', function () {
        return function (students) {
            var min = 0;
            ng.forEach(students, function (value, index) {
                if (index === 0) {
                    min = value.score;
                }
                if (min > value.score) {
                    min = value.score;
                }
            });
            return min;
        }
    });
})(angular);