if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('level', 1);
  Session.setDefault('count', 2);

  Template.checkIn.helpers({
    counter: function () {
      return Session.get('counter');
    },
    count: function () {
      if (Session.get('level')>=5){
        return "Max level.";
      } else if (Session.equals('count',0)){
        Session.set('count',2);
        return Session.get('count')+" check in(s) left to level up.";
      } else {
        return Session.get('count')+" check in(s) left to level up.";
      }
    },
    level: function () {
      return Session.get('level');
    }
  });

  Template.checkIn.events({
    'click .add': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      Session.set('count',Session.get('count') - 1);
    },
    'click .reset': function () {
      Session.set('counter', 0);
      Session.set('level',1);
      Session.set('count',2);
    }
  });
  
  Tracker.autorun( function () {
    if (Session.get('level')>=5) {
      Session.set('level',5);
    } else {
      //redefine level to escape loop
      Session.set('level', parseInt((Session.get('counter'))/2)+1);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
