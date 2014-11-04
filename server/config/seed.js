/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Ticket = require('../api/ticket/ticket.model');

Ticket.find({}).remove(function() {
  Ticket.create({
      time: "2014-11-02T21:00:14.250Z",
      userName: "Andrew Lin",
      seatNumber: "1",
      movieName : "Fury"
    },
    {
      
      time: "2014-11-02T16:30:14.250Z",
      userName: "Keenan Cornelius",
      seatNumber: "21",
      movieName : "Choke"
    },
    {
      
      time: "2014-11-02T12:15:14.250Z",
      userName: "Rener Gracie",
      seatNumber: "309",
      movieName : "John Wick"
    },
    {
      
      time: "2014-11-02T23:00:14.250Z",
      userName: "David Yang",
      seatNumber: "134",
      movieName : "Gone Girl"
    },
    {
      
      time: "2014-11-02T15:45:14.250Z",
      userName: "Kyra Gracie",
      seatNumber: "9",
      movieName : "The Lion King"
    },
    {
      
      time: "2014-11-02T21:55:14.250Z",
      userName: "Katie Chung",
      seatNumber: "47",
      movieName : "Frozen"
    }, function() {
      console.log('finished populating tickets');
    }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});