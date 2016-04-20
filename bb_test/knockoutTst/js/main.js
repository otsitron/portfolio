$(function(){
    var viewModel = new KnockoutDocs();
    
    viewModel.addItem(new Document("Hello", "world"));
    viewModel.addItem(new Document("goodbye", "world"));
    
    ko.applyBindings(viewModel);
});