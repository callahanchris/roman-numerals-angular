var app = angular.module('romanNumerals', []);

app.controller('RomanController', function($scope) {
    $scope.roman = "MMXIV",
    $scope.mappings = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    },

    $scope.deromanize = function() {
        if ( $scope.roman.match(/[^MDCLXVI]|D[M]|D{2,}|C{4,}|L[^XVI]|L{2,}|X[MD]|X{4,}|V[^I]|V{2,}|I[^XVI]|I{4,}/) ) {
            return "NaRN (Not a Roman Numeral)";
        } else if ( $scope.roman === "" ) {
            return "Perhaps zero?";
        }

        var arr = $scope.roman.split("");
        var number = 0;

        for ( var i = 0; i < arr.length; i++ ) {
            if ( $scope.mappings[arr[i]] < $scope.mappings[arr[i + 1]] ) {
                number -= $scope.mappings[arr[i]];
            } else {
                number += $scope.mappings[arr[i]];
            }
        }

        if ( number > 9000 ) {
            return "OVER 9000!!!!!!";
        } else {
            return number;
        }
    }
});
