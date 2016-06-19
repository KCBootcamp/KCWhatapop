angular.module("whatapop")
    .filter('htmlToPlaintext', function() {
        return function(text) {
            return angular.element(text).text();
        }
    }
    )
    .filter ('')
;