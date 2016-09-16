

// find a way to implement DRY, the search and random should pass parameter(url) to a function containing the $.ajax call
function wikiSearch() {
	var input = document.getElementById('searchItem');
    var searchItem = input.value;
    var $links = $('#links');
    $links.empty()
    if(searchItem){
	  var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
	  searchItem + "&format=json&callback=wikiCAllBack";
	  wikiApi(wikiUrl);
    }else{
    	$links.append("Nothing entered")
    }
}
function wikiApi(wikiUrl){
	var $links = $('#links');
	var TimeOutRequest = setTimeout(function(){
          $links.text("Wiki failed to load");
        },8000);
	$links.empty();
	  $.ajax({
	    url: wikiUrl,
	    dataType: 'jsonp',
	    success: function(data) {
	      var searchList = data[1];
	     for(var i = 0; i < searchList.length; i++){
	        var item = searchList[i];
	        var url = "http://en.wikipedia.org/wiki/" + item;
	        $links.append("<li><a href='" + url + "'>" + item + "</a></li>");
	      }
	     clearTimeout(TimeOutRequest)
	    }
	  });
}

