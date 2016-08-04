define(['angular',
        'angularRoute',
        'angularSanitize',
        'bootstrap',
        'config',
        'header',
        'jquery'],
        function (angular,
            angularRoute,
            angularSanitize,
            bootstrap,
            config,
            header,
            $) {
    "use strict";

    var app = angular.module('angular-example', [ 'ngRoute', 'ngSanitize' ]);

    app.constant("config", config);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/", {templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home"})
            .when("/home", {templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home"})
            .when("/home/:id", {templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home"})
            .when("/support", {templateUrl: "src/view/partial/support.html", controller: "SupportCtrl", title: "Support"})
            .otherwise({templateUrl: "src/view/partial/404.html", controller: "NotFoundCtrl", title: "404 Not Found"});
    }]);

    app.controller('BasePageCtrl', function ($scope, config) {
        $scope.config = config;
    });

    app.controller('HeaderHelperCtrl', function () {
        header.init();
    });

    app.controller('FooterHelperCtrl', function () {
    });

    app.controller('HomeCtrl', function ($scope, $routeParams) {
        if ($routeParams.id) {
            $scope.contentId = $routeParams.id;
        }
    });

    app.controller('SupportCtrl', function ($scope, config) {
        $scope.supportLink = config.supportLink;
    });

    app.controller('NotFoundCtrl', function ($rootScope) {
        $rootScope.title = '404 Not Found';
    });

    app.directive('renderContent', function () {
        return {
            link: function (scope, element, attrs) {
                var numOfContentNames = config.content.names.length,
                    contentNameIndex = -1,
                    i;

                $('.content-error').addClass('visually-hidden');
                $('.content-loading').removeClass('visually-hidden');

                if (scope.contentId) {
                    for (i = 0; i < numOfContentNames; i++) {
                        if (scope.contentId === config.content.names[i]) {
                            contentNameIndex = i;
                            break;
                        }
                    }
                } else {
                    contentNameIndex = Math.floor((Math.random() * numOfContentNames));
                }

                if (contentNameIndex >= 0 && contentNameIndex < numOfContentNames) {
                    var contentUrl = config.content.base + config.content.names[contentNameIndex] + '.txt';
                    $.ajax({
                        type: "GET",
                        url: contentUrl,
                        success: function (data) {
                            $('.content-loading').addClass('visually-hidden');
                            element.html(data);
                            element.addClass('content-loaded');
                        },
                        error: function () {
                            $('.content-loading').addClass('visually-hidden');
                            $('.content-error').removeClass('visually-hidden');
                        }
                    });
                } else {
                    $('.content-loading').addClass('visually-hidden');
                    $('.content-error').removeClass('visually-hidden');
                }
            }
        };
    });

    app.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.$$route) {
                $rootScope.title = current.$$route.title;
            }
        });
    }]);

    return app;
});