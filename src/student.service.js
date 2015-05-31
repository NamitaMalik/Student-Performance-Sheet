/**
 * Created by Namita Malik on 31/5/15.
 */
(function (ng) {
    var eduStat = ng.module('eduStat');
    eduStat.service('StudentService', [function () {
        var studentService = this;
        studentService.getStudentList = function () {
            if (localStorage.students) {
                return JSON.parse(localStorage.students);
            } else {
                return [];
            }
        };
        studentService.updateStudent = function (index,student) {
            var studentList = studentService.getStudentList();
            studentList[index] = student;
            localStorage.students = JSON.stringify(studentList);
        };
        studentService.deleteStudentList = function (index) {
            var studentList = studentService.getStudentList();
            studentList.splice(index,1);
            localStorage.students = JSON.stringify(studentList);
        };
        studentService.saveStudent = function (student) {
            var studentList = studentService.getStudentList();
            studentList.push(student);
            localStorage.students = JSON.stringify(studentList);
        };
    }]);
})(angular);