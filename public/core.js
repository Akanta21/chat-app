var app = angular.module('chatApp', [])

app.factory('socket', function () {
  var socket = io.connect('https://angularchatapp.herokuapp.com/')
  return socket
})
