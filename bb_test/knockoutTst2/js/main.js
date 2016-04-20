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
myViewModel.lotsOfNames.push("Olga", "Tanya", "Nik");
ko.applyBindings(myViewModel);