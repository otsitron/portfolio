function ViewModel() { 
    var self = this;
    self.name = 'Steve Kennedy'; 

    self.getName = function() { 
        return 'Hello <em>' + self.name + '</em>!'; 
    }; 
}; 

var viewModel = new ViewModel();
ko.applyBindings(viewModel); 