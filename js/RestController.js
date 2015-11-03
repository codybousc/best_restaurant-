bestRest.controller('RestController', function RestController($scope) {
    $scope.restaurants = [
    {name: "Tbone's Joint", foodtype: "Ribs", priceRange: "moderate", takeOut: "yes", delivery: "no", ratings: "5 stars"},
    {name: "Pedro's Pizzeria", foodtype: "Pizza", priceRange: "expensive", takeOut: "yes", delivery: "yes", ratings: "2 stars"},
    {name: "From Thailand, with love", foodtype: "Thai", priceRange: "inexpensive", takeOut: "yes", delivery: "yes", ratings: "4 stars"}
  ];
  $scope.addRest = function() {
    $scope.restaurants.push(
      {
        name: $scope.restName,
        foodtype: $scope.foodtype,
        priceRange: $scope.priceRange,
        takeOut: $scope.takeOut,
        delivery: $scope.delivery,
        ratings: $scope.ratings

      });
    };

  $scope.goodies = $scope.restaurants;


});
