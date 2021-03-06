var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/overview.html",
        controller: "defaultController" 
    })
    .when("/contactus", { 
        templateUrl: "views/contactus.html",
        // controller: "defaultController" 
    })
})




app.controller("defaultController", function($scope) {
    $scope.testamonials = [
        { image: "girl.png", title: "Anna Andersson", text: "Head Editor" },
        { image: "girl2.png", title: "Bea Bengtsson", text: "Wedding Editor" },
        { image: "girl3.png", title: "Cissi Carlsson", text: "Travel Editor" },
        { image: "girl4.png", title: "Daniella Dhalgren", text: "Action Editor" },
        { image: "girl5.png", title: "Erika Eriksson", text: "Let's Play Editor" },
        { image: "girl6.png", title: "Felicia Fredriksson", text: "SPX Creator" },
        { image: "girl7.png", title: "Ginni Green", text: "Animator" },
    ]
})

// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: '<header> <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom d-flex justify-content-around"> <a class="navbar-brand ml-2" href="#/!"> <img src="images/Logo_sample_3_20200204.jpg" width="30" height="30" class="d-inline-block align-top" alt=""> 4U Editing </a><div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav"><li class="nav-item mr-5"> <a class="nav-link" href="#!aboutus.html">About Us <span class="sr-only">(current)</span></a></li><li class="nav-item mr-5"> <a class="nav-link" href="#!contactus.html">Contact Us</a></li><li class="nav-item mr-2"> <a class="nav-link" href="#">Terms & Conditions</a></li></ul></div> </nav> </header>'
    }
})
app.directive("appfooter",function(){
    return {
        template: '<footer class="page-footer bg-dark-custom footer-dark-custom"><div class="pt-5 pb-4 d-flex justify-content-between align-items-center"> <a class="ml-2 mr-5 footer-dark-custom" href="#/!"> <img src="images/Logo_sample_3_20200204.jpg" width="80" height="80" class="d-inline-block align-top" alt=""></a><div class="justify-content-center"> <a class="footer-dark-custom" href="#!aboutus.html">About Us</a> <a class="footer-dark-custom ml-4" href="#!contactus.html">Contact Us</a> <a class="footer-dark-custom ml-4" href="#">Terms & Conditions</a></div><p class="mr-5">Editor Street 1,720 05 <br> Westeros Sweden <br> +46 070 123 44 55 <br> edittogether@gmail.com</p></div> </footer>'
    }
})