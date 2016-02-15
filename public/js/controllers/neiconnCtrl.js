angular.module("neiconn")
       .controller("neiconnCtrl",function ($scope){
       	  //http request to the backend and return the data to the front-end
       	  $scope.data = {
              popular_city : [
                               { name: "San Fransico",img:"images/sf.jpeg" ,category: "westcoast"},
                               { name: "Los Angeles",img:"images/la.jpg" ,category: "westcoast"},
                               { name: "Seattle",img:"images/sea.jpg" ,category: "westcoast"},
                               { name: "Portland",img:"images/pdx.jpg" ,category: "westcoast"},
                               { name: "New York",img:"images/nyc.jpg" ,category: "eastcoast"},
                               { name: "Boston",img:"images/bos.jpg" ,category: "eastcoast"},
                               { name: "D.C.",img:"images/DC.jpg" ,category: "eastcoast"},
                               { name: "Miami",img:"images/mia.jpg" ,category: "eastcoast"}
                             ],

             events : [
                               {name: "Eat At Union Square",host_img : "images/owner1.jpg",price: 32 ,category:"Eat&Drink",img:"images/union_square.jpg", location: "San Fransico", rating: 4.5, reviews: [

                                   {name : "sen zheng", review: "Good service"}, 
                               ]},
                               {name: "Exploring the JapanTown",host_img : "images/owner2.jpg",price: 32 ,category:"Eat&Drink",img:"images/japanTown.jpg", location: "San Fransico", rating: 4.5, reviews: [

                                   {name : "sen zheng", review: "Good service"}, 
                                   {name : "enwei wu", review : "Host is awesome but the event is bad."}
                               ]},
                               {name: "Walking China Town",host_img : "images/owner2.jpg",price: 32 ,category:"Excercise",img:"images/chinatown.jpg", location: "San Fransico", rating: 4.5, reviews: [

                                   {name : "sen zheng", review: "Good service"}, 
                                   {name : "enwei wu", review : "Host is awesome but the event is bad."}
                               ]},
                               {name: "Pier 39",host_img : "images/owner1.jpg",price: 32 ,category:"Networking",img:"images/pier.jpg", location: "San Fransico", rating: 4.5, reviews: [

                                   {name : "sen zheng", review: "Good service"}, 
                                   {name : "enwei wu", review : "Host is awesome but the event is bad."}
                               ]},
                               {name: "Bar at ItalyTown",host_img : "images/owner2.jpg",price: 32 ,category:"Eat&Drink",img:"images/ItalyTown.jpg", location: "San Fransico", rating: 4.5, reviews: [

                                   {name : "sen zheng", review: "Good service"}, 
                                   {name : "enwei wu", review : "Host is awesome but the event is bad."}
                               ]},
                               {name: "Drink at Downtown",host_img : "images/owner1.jpg",price: 32 ,category:"Eat&Drink",img:"images/Downtown.jpg", location: "San Fransico", rating: 4.5, reviews: [

                                   {name : "sen zheng", review: "Good service"}, 
                                   {name : "enwei wu", review : "Host is awesome but the event is bad."}
                               ]},
                               {name: "TwinPeak",host_img : "images/owner2.jpg",price: 32 ,category:"Networking",img:"images/TwinPeak.jpg", location: "San Fransico", rating: 4.5, reviews: [

                                   {name : "sen zheng", review: "Good service"}, 
                                   {name : "enwei wu", review : "Host is awesome but the event is bad."}
                               ]}
             ],                
       	  };
       })