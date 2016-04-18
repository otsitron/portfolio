requirejs.config({
    baseUrl: 'js',
    paths: {
        app: 'libs',
        'bootstrap': 'libs/bootstrap-3.3.6-dist/js/bootstrap.min',
        'jquery': 'libs/jquery/jquery-1.12.3.min',
        'ko':'libs/knockout-3.4.0'
    },
    shim:{
        'bootstrap':['jquery']
    }
});

require(['jquery', 
        'bootstrap',
        'ko',
        'logic'], 
        function(){
            console.log("hello")
        }
);

define(["jquery", "bootstrap"], function($) {

});