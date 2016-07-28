angular.module('chatApp')
.component('mainChat', {
  templateUrl: 'main.template.html',
  controller: function MainController ($scope, socket) {
    var ctrl = this
    this.msgs = []
    this.sendMsg = function () {
      console.log(this)
      event.preventDefault()
      socket.emit('send msg', this)
      this.text = ''
    }
    socket.on('get msg', function (data) {
      ctrl.msgs.push(data)
      $scope.$digest()
    })
  }
})
