angular.module('neiconn')
       .constant("ListActiveClass", "btn-primary")
       .constant("ListPageCount", 6)
       .controller('neiconnListCtrl', function ($scope){
       	    var selectedCategory = "westcoast"; // the result should be returned from backend; but at this point we need to match the role who is in westcoast
            
            $scope.categoryFilter = function(city){
            	//return if the category match the category given
            	return selectedCategory == null || city.category == selectedCategory;
            }
           
       })
       .controller('eventListCtrl', function ($scope, $window, $filter,
        ListActiveClass, ListPageCount) {

        var selectedCategory = null;
        
        $scope.selectedPage = 1;
        $scope.pageSize = ListPageCount;

        
        
        $scope.selectCategory = function (newCategory) {
        	//window.location.href="search-result.html";
        	$scope.currentCategory = "hahha";
            selectedCategory = newCategory;
            $scope.selectedPage = 1;

        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.location == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? ListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? ListActiveClass : "";
        }
       
        $scope.redirect = function() {
        	window.location = "/activity";
        }

        $scope.redirectEvent = function () {
            window.location = "/profile";
        }

        var initMap = function () {
			     var homeLatLng = new google.maps.LatLng(49.47805, -123.84716);

			     var map = new google.maps.Map(document.getElementById('map_canvas'), {
			       zoom: 12,
			       center: {lat: 37.7833, lng: -122.4167},
			       mapTypeId: google.maps.MapTypeId.ROADMAP
			     });

			     var beaches = [
			          ['Pier 39',37.809167, -122.411389,6],
			          ['Colt Tower', 37.802395, -122.405822, 4],
			          ['Twin Peak', 37.752166, -122.447431, 5],
			          ['ChinaTown', 37.794138, -122.407791, 3],
			          ['JapanTown', 37.785413, -122.429383, 2],
			          ['Union Square', 37.787994, -122.407437, 1]

			        ];

			     var image = {
			          url: 'images/iconmap.png',
			          // This marker is 20 pixels wide by 32 pixels high.
			          size: new google.maps.Size(40, 25),
			          // The origin for this image is (0, 0).
			          origin: new google.maps.Point(0, 0),
			          // The anchor for this image is the base of the flagpole at (0, 32).
			          anchor: new google.maps.Point(0, 40)
			        };

			     var shape = {
			        coords: [1, 1, 1, 20, 18, 20, 18, 1],
			        type: 'poly'
			      };
			    for (var i = 0; i < beaches.length; i++) {
			    var beach = beaches[i];
			     var marker1 = new MarkerWithLabel({
			       position: {lat: beach[1], lng: beach[2]},
			       map: map,
			       labelContent: " $32",
			       labelAnchor: new google.maps.Point(-5, 35),
			       icon: image,
			       shape: shape,
			       title: beach[0],
			       zIndex: beach[3]
			     });

			     }
             }

             initMap();

    });