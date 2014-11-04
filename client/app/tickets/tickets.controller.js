'use strict';

angular.module('cittaApp')
  .controller('TicketsCtrl', function ($scope, TicketFactory, $location, $http, $modal, $rootScope) {

  	TicketFactory.getTickets().success(function(tickets) {
  		$scope.tickets = tickets;
  	});

	$scope.deleteTicket = function(ticket) {
	  TicketFactory.deleteTicket(ticket).success(function() {
	  	TicketFactory.getTickets().success(function(tickets) {
	  		$scope.tickets = tickets;
	  	})
	  });
	};

	$scope.getStats = function() {
		TicketFactory.getTicketStats().success(function(data) {
			console.log("Number of tickets currently stored in the database:",data);
			var modalInstance = $modal.open({
				templateUrl: 'app/tickets/statsModal.html',
				controller: 'StatsModalCtrl',
				resolve: {
					stats: function() {
						return data;
					}	
				}
			});
		});
	};

	$rootScope.$on('addedTicket', function(event, ticket) {
		console.log(ticket);
		$scope.tickets.push(ticket)
	});

	$scope.openTicketModal = function () {
		var modalInstance = $modal.open({
		  templateUrl: 'app/tickets/ticketModal.html',
		  controller: 'TicketFormCtrl',
		});
	};

	$scope.openStatsModal = function() {
		var modalInstance = $modal.open({
			templateUrl: 'app/tickets/statsModal.html',
			controller: 'StatsModalCtrl'
		});
	}

  })
	.controller('StatsModalCtrl', function($scope, $modalInstance, stats) {
		$scope.ok = function() {
			$modalInstance.close();
		};
		$scope.stats = stats;
  });
