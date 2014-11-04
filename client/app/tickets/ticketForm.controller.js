'use strict';

angular.module('cittaApp')
  .controller('TicketFormCtrl', function ($scope, TicketFactory, $location, $modalInstance, $rootScope) {
  	$scope.ticket = {time: new Date()};
	$scope.hstep = 1;
	$scope.mstep = 1;

	$scope.addTicket = function() {
	  TicketFactory.addTicket($scope.ticket).success(function(ticket) {
	  	console.log(ticket);
	  	$modalInstance.close();
	  	$rootScope.$emit('addedTicket', ticket);
	  });
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
  });