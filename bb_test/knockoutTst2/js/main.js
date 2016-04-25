var myViewModel = {
    name: ko.observable("Olga"),
    lotsOfNames: ko.observableArray(),
    buttonText: "press",
    updateName: function(){
        return this.name;
    },
    thisName: function(){
        return this.lotsOfNames;
    }
}
myViewModel.lotsOfNames.push(
    {firstName: "Olga", lastName: "Tsitron"},
    {firstName: "Joe", lastName: "Schmo"}
    );
ko.applyBindings(myViewModel);