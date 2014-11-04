'use strict'

angular.module('cittaApp')
	.factory('TicketFactory', function($http) {
		var vm = this;

		vm.addTicket = function(ticket) {
			return $http.post('/api/tickets', ticket);
		};

		vm.getTickets = function() {
			return $http.get('/api/tickets');
		};

		vm.deleteTicket = function(ticket) {
			return $http.delete('/api/tickets/'+ticket._id);
		};

		vm.getTicketStats = function() {
			return $http.get('/api/tickets/getStats');
		};

		return vm;
	});