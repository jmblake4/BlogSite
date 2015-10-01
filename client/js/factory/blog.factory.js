BlogSite.factory('Parse', function($http) {

	var ParseFactory = {};

	var reqHeaders = { headers: {
		"X-Parse-Application-Id": "l0snkcZ4pCRrEoTyJ3ip8VN3cO190TW08a78Vpxq",
		"X-Parse-REST-API-Key": "gWWPdxPQm3OfSdwm1ZHLbVtNIv2BWWQXUztGkw5H",
		"Content-Type": "application/json"
	}};
	
	var urlPath = 'https://api.parse.com/1/classes/blogPost/';

	ParseFactory.getPosts = function() {
		return $http.get(urlPath, reqHeaders);
	};
	
	ParseFactory.submitPost = function(blogPost) {
		return $http.post(urlPath, JSON.stringify(blogPost), reqHeaders);
	}
	
	return ParseFactory;
});