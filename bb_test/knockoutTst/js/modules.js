requirejs.config({
    baseUrl: 'js',
    paths: {
        app: 'js/libs'
    }
});

requirejs([ 'libs/jquery-1.12.3.min', 
            'libs/knockout-3.4.0', 
            'libs/bootstrap-3.3.6-dist/js/bootstrap.min',
            'logic'], function(util) {
                console.log("asdfasdf");
});