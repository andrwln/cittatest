'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TicketSchema = new Schema({
  movieName: String,
  userName: String,
  seatNumber: String,
  userId: { type: Schema.Types.ObjectId, ref: "User"},
  time: Date
});

module.exports = mongoose.model('Ticket', TicketSchema);