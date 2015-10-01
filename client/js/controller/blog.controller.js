BlogSite.controller('blogpostsController', ['$scope', '$http', '$rootScope', '$window', 'Parse', function($scope, $http, $rootScope, $window, Parse) {

	Parse.getPosts()
	.then(function(res) {
		$scope.blogPosts = res.data.results.reverse();
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
		if ( blogAuthor === '' || blogTitle === '' || blogContent === '' || blogAuthor === undefined || blogTitle === undefined || blogContent === undefined) {
			alert('Invalid blog entry!')
			$window.location.href = '#blogposts';
		} else {
			var blogPost = {
				author: blogAuthor,
				title: blogTitle,
				content: blogContent
			};
			Parse.submitPost(blogPost)
			.then(function(res) {
				$window.location.href = '#blogposts';
			}).catch(function(err) {
				console.log(err);
				alert('There was an error!');
			});
		}
	}

}]);