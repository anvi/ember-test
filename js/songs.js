App = Ember.Application.create({
});

App.Person = Ember.Object.extend({
    firstName: null,
    lastName: null,
    birthDate: null,
    age: function() {
        var birthDate = this.get('birthDate')
            , now = new Date
        ;
        if (birthDate instanceof Date) {
            return now.getFullYear() - birthDate.getFullYear();
        }
    	return '';
    }.property('birthDate'),
    birthDateChanged: function() {
        var birthDate = this.get('birthDate');
        if (birthDate && ! (birthDate instanceof Date)) {
            this.set('birthDate', new Date(birthDate));
        }
    }.observes('birthDate'),
    init: function() {
        this._super();
        this.birthDateChanged();
    }
});

App.personsController = Ember.ArrayController.create({
    content: [],
    loadPersons: function() {
    	var self = this;
    	this.set('content', []);
    	$.getJSON('persons.php', function (data) {
    	    data.forEach(function(item) {
    	        var elem = App.Person.create(item)
    	    	self.get("content").pushObject(elem);
    	    });
    	}); 
    }
});

App.PersonView = Ember.View.extend({
    templateName: "person-list",
    loadPersons: function() {
        App.personsController.loadPersons();
    }
});

var view = App.PersonView.create({
	personBinding: "App.personsController.content"
}).appendTo('#content');