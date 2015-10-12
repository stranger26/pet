if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('level', 1);

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
      Session.set('level',1);
    }
  });
  
  Tracker.autorun( function () {
    if (Session.get('level')>=5) {
      Session.set('level',5);
    } else {
      Session.set('level', parseInt((Session.get('counter'))/2)+1);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
