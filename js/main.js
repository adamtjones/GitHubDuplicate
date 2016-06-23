$(document).ready(function() {
    console.log( "ready!" );


$.ajax({
	URL:'https://api.github.com/users/adamtjones/repos',
	type:"GET",
	success: function(allRepos) {

		var adamRepos = allRepos.results;
		adamRepos.forEach(function (Dallas,index) {
		$(".Utah").append('<div class="col-lg-12"><div class="review"><div class="people"><h4 class="repoName">'+Dallas.name+'</h4></div></div></div>');
		})
	}
});

});



/*Bootstrap Tab stuff, but couldnt' get it to work
$('#myTabs a:first').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#myTabs a:').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});*/
