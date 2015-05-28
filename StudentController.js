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
            {roll_no: '4', name: 'Chandra', score: 82},
            {roll_no: '5', name: 'Dharmesh', score: 65}
        ];
        studentController.showStudentModal = function () {
            ng.element('#studentModal').modal('show');
        };
        studentController.addStudent = function(){
           var tempObject= {roll_no: studentController.rollNumbr, name: studentController.name, score: studentController.score};
            studentController.students.push(tempObject);
            studentController.rollNumbr = "";
            studentController.name = "";
            studentController.score = "";
            ng.element('#studentModal').modal('hide');
        };
        studentController.deleteStudent = function(toBeDeletedStudent){
           angular.forEach(studentController.students,function(value,index){
              if(value.roll_no == toBeDeletedStudent.roll_no && value.name==toBeDeletedStudent.name){
                  studentController.students.splice(index,1);
              }
           });

        };
    }]);
    eduStat.filter('average', function () {
        return function (students) {
            var temp = 0;
            ng.forEach(students, function (value) {
                temp = temp + value.score;
            });
            if(isNaN(temp / students.length)){
                return 0.00.toFixed(2);
            }
            else {
                return (temp / students.length).toFixed(2);
            }
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
            return max.toFixed(2);
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
            return min.toFixed(2);
        }
    });
})(angular);