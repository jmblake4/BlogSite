BlogSite.controller('blogpostsController', ['$scope', '$http', '$rootScope', '$window', 'Parse', function($scope, $http, $rootScope, $window, Parse) {
	Parse.getPosts()
	.then(function(res) {
		console.log(res);
		$scope.blogPosts = res.data.results;
	}).catch(function(err) {
		console.log(err);
		alert('There was an error!');
	});
	$scope.createBlogEntry = function() {
		$window.location.href = '#newpost';
	}
}]);

BlogSite.controller('newpostController', ['$scope', '$http', '$rootScope', '$window', 'Parse', function($scope, $http, $rootScope, $window, Parse) {
	$scope.newPost = function() {
		var blogAuthor = $scope.blogAuthor, blogTitle = $scope.blogTitle, blogContent = $scope.blogContent;
		if ( blogAuthor === '' || blogTitle === '' || blogContent === '' ) {
			alert('Invalid blog entry!')
			$window.location.href = '#blogPosts';
		} else {
			var blogPost = {
				author: blogAuthor,
				title: blogTitle,
				content: blogContent
			};
			Parse.submitPost(blogPost)
			.then(function() {
				$window.location.href = '#blogPosts';
			}).catch(function(err) {
				console.log(err);
				alert('There was an error!');
			})
		}
	}
}]);

// TweetApp.controller('tweetController', ['$scope', '$http', '$rootScope', '$window', function($scope, $http, $rootScope, $window) {

// 	$scope.userName = $rootScope.userName;
// 	if ( $scope.userName === '' || ! $scope.userName ) {
// 		$scope.userName = 'Anonymous';
// 	}
// 	$scope.tweets = [];
// 	var urlPath = 'http://localhost:3000/messages';
	
// 	$http.get(urlPath)
// 	.then(function(res) {
// 		$scope.tweets = res.data.reverse();
// 	}).catch(function(err) {
// 		console.log(err);
// 		alert('Something horrible happened!');
// 	});
	
// 	$scope.postTweet = function() {
// 		var tweetObj = { text: $scope.tweetText, userName: $scope.userName };
// 		$http.post(urlPath, JSON.stringify(tweetObj))
// 		.then(function(res) {
// 			$scope.tweetText = '';
// 			return $http.get(urlPath);
// 		}).then(function(res) {
// 			$scope.tweets = res.data.reverse();
// 		}).catch(function(err) {
// 			console.log(err);
// 			alert('Something horrible happened!');
// 		});
// 	};
// }]);

// TweetApp.controller('welcomeController', ['$scope', '$http', '$rootScope', '$window', function($scope, $http, $rootScope, $window) {

// 	$scope.setUser = function() {
// 		if ( $scope.userName === ''  || ! $scope.userName ) {
// 			$rootScope.userName = 'Anonymous';
// 		} else {
// 			$rootScope.userName = $scope.userName;
// 		}
// 		$window.location.href = '#tweets';
// 	}

// }]);