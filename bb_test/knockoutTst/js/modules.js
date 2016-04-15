requirejs.config({
    baseUrl: '../libs',
    paths: {
        app: '../knockoutTst/js'
    }
});

requirejs([ 'jquery-1.12.3.min', 
            'knockout-3.4.0', 
            'bootstrap-3.3.6-dist/js/bootstrap',
            'app/logic'], function(util) {
                console.log("asdfasdf");
});