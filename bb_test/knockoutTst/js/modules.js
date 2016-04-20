requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery',
        bootstrap: 'libs/bootstrap-3.3.6-dist/js'
    }
});

require(['jquery/jquery-1.12.3.min', 
        'bootstrap/bootstrap.min',
        'logic'], 
        function(){
            console.log("hello")
        }
);