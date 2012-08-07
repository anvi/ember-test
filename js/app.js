var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});

App.Person = Ember.Object.extend({
    firstName: null,
    lastName: null,
    fullName: function() {
        var firstName = this.get("firstName"),
            lastName = this.get("lastName");
        return firstName + " " + lastName;
    }.property("firstName", "lastName"),
    say: function(thing) {
        alert(thing);
    },
});

App.anvi = anvi = App.Person.create({
    firstName: "André",
    lastName: "Vignaud"
});
/*
anvi.addObserver('fullName', function() {
    alert(this.get('fullName'));
});
*/

var view = Ember.View.create({
  templateName: 'say-hello',
  nameBinding: "App.anvi.fullName",
  click: function(evt) {
      alert("clicked");
  }
});

view.append();