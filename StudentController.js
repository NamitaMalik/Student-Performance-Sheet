/**
 * Created by Namita Malik on 26/5/15.
 */
(function (ng) {
    var eduStat = ng.module('eduStat', []);
    eduStat.controller('StudentController', [function () {
        var studentController = this;
        studentController.students = [
            {roll_no: '1', name: 'Amit Kumar', score: 100},
            {roll_no: '2', name: 'Anoop Singh', score: 60},
            {roll_no: '3', name: 'Bhanu Pratap', score: 95},
            {roll_no: '4', name: 'Chandra Shekhar Awasthi', score: 82},
            {roll_no: '5', name: 'Manoj Kumar Sharma', score: 65}
        ];
        function clearErrorMessage() {
            studentController.mandatoryErrorMessage = "";
            studentController.rollErrorMessage = "";
            studentController.scoreErrorMessage = "";
        }

        studentController.showStudentModal = function () {
            studentController.rollNumbr = "";
            studentController.name = "";
            studentController.score = "";
            clearErrorMessage();
            ng.element('#studentModal').modal('show');
        };
        studentController.addStudent = function () {
            var tempObject = {
                roll_no: studentController.rollNumbr,
                name: studentController.name,
                score: parseInt(studentController.score)
            };
            clearErrorMessage();
            if ((studentController.rollNumbr && studentController.name && studentController.score)) {
                if (isNaN(studentController.rollNumbr) || studentController.rollNumbr<1) {
                    studentController.rollErrorMessage = "Please enter a valid roll number."
                } else if (isNaN(studentController.score)||studentController.score<0) {
                    studentController.scoreErrorMessage = "Please enter a valid score."
                } else {
                    studentController.students.push(tempObject);
                    ng.element('#studentModal').modal('hide');
                }
            }
            else {
                studentController.mandatoryErrorMessage = "All the fields are mandatory";
            }
        };
        studentController.deleteStudent = function (toBeDeletedStudent) {
            angular.forEach(studentController.students, function (value, index) {
                if (value.roll_no == toBeDeletedStudent.roll_no && value.name == toBeDeletedStudent.name) {
                    studentController.students.splice(index, 1);
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
            if(students.length==0){
                return 0;
            }
            else {
                return parseInt((temp / students.length));
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
            return parseInt(max);
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
            return parseInt(min);
        }
    });
})(angular);