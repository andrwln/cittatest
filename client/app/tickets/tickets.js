'use strict';

angular.module('cittaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tickets', {
        url: '/',
        templateUrl: 'app/tickets/tickets.html',
        controller: 'TicketsCtrl'
      })
      .state('ticketForm', {
      	url:'/addTicket',
      	templateUrl: 'app/tickets/ticketForm.html',
      	controller: 'TicketFormCtrl'
      })
  });