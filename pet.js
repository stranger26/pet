if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('level', 0);

  Template.checkIn.helpers({
    counter: function () {
      return Session.get('counter');
    },
    level: function () {
      return Session.get('level');
    }
  });

  Template.checkIn.events({
    'click .add': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'click .reset': function () {
      Session.set('counter', 0);
      Session.set('level',0);
    }
  });
  
  Tracker.autorun( function () {
      Session.set('level', parseInt((Session.get('counter'))/2));
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
