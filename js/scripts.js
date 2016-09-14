function wikiApi() {
   /* var input = document.getElementById('searchItem');
    var searchItem = input.value;*/
    var searchItem = "cow"
   console.log(searchItem)
    var $links = $('#links');
	var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
	searchItem + "&format=json&callback=wikiCAllBack";
	$.ajax({
	  url: wikiUrl,
	  dataType: 'jsonp',
	  success: function(data) {
	    var searchList = data[1];
	    for(var i = 0; i < searchList.length; i++){
	      var item = searchList[i];
	      var url = "http://en.wikipedia.org/wiki/" + item;
	      $links.append("<li><a href='" + url + "'>" + item + "</a></li><hr>");
	    }
	  }
	})
}