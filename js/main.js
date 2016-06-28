$(document).ready(function() {
    console.log( "ready!" );

$('#myTabs a[href="#contributions"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a[href="#repositories"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a[href="#activity"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$.ajax({
	url:'https://api.github.com/users/adamtjones/repos',
	type:"GET",
	success: function(review) {
		
		var myRepos = review;
		
		myRepos.forEach(function (Richmond) {
		$(".repoName").append('<h4>'+Richmond.name+'</h4></hr><h6>'+Richmond.description+'</h6></hr><h6>Updated at '+Richmond.updated_at+'</h6></hr>');
		/*$(".repoInfo").append
		/*$(".repoUpdated").append('<h5>'+Richmond.updated_at+'<h5>');
		/*$(".Raven").append('<h4 class="name">'+Richmond.name+'</h4><h4>'+Richmond.updated_at+'</h4><h4>'+Richmond.language+'</h4><h4>'+Richmond.forks_count+'</h4>');
		/*$(".Rhino").append('<h4>'+Richmond.updated_at+'</h4>');
		$(".Raptor").append('<h4>'+Richmond.language+'</h4>');*/
		});
	},
	}
);});

/* User*/
$.ajax({
	url:'https://api.github.com/users/adamtjones',
	type:"GET",
	success: function(Utah) {
		$(".Uglyduck").append('<img src="'+Utah.avatar_url+'">');
		$(".Unicorn").append('<h2>'+Utah.name+'</h2>');
		$(".Unicode").append('<h4>'+Utah.login+'</h4>');
		$(".UC").append('<h5>'+Utah.bio+'</h5>');
		$(".Unicycle").append('<h5>Joined on '+Utah.created_at+'</h5>');
		$(".Universe").append('<h6><h2>'+Utah.followers+'</h2></br>Followers</h6>');
		$(".Uhaul").append('<h6><h2>'+Utah.following+'</h2></br>Following</h6>');	
	}
});


/*Activity
$.ajax({
	url:'https://api.github.com/users/adamtjones/events',
	type:"GET",
	success: function(review) {

		var adamEvents = review.results;
		
		adamEvents.forEach(function (Akron,index) {
		$(".Armadillo").append('<div class="col-lg-12"><div class="review"><div class="people"><h4 class="repoName">'+Wichita.name+'</h4></div></div></div>');
		})
	}
});*/

/*Orgs
$.ajax({
	url:'https://api.github.com/users/adamtjones/orgs',
	type:"GET",
	success: function(review) {

		var adamOrgs = review.results;
		
		adamRepos.forEach(function (Oklahoma,index) {
		$(".Otter").append('<div class="col-lg-12"><div class="review"><div class="people"><h4 class="repoName">'+Tulsa.name+'</h4></div></div></div>');
		})
	}
});*/





/*Bootstrap Tab stuff, but couldnt' get it to work
$('#myTabs a:first').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#myTabs a:').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});*/
