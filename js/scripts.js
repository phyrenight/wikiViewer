function wikiSearch() {
  var input = document.getElementById('searchItem');
  var searchItem = input.value;
  var $links = $('#links');
  $links.empty();
  if(searchItem){
	var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
	searchItem + "&format=json&callback=wikiCAllBack";
	wikiApi(wikiUrl);
  }
  else{
    $links.append("Nothing entered");
  }
}
function wikiApi(wikiUrl){
  var bootstrap = "col-xs-10 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4";
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
        $links.append("<div class='row'><li class='"+bootstrap+"'><a href='" + url + "'>" + item + "</a></li></div>");
      }
      clearTimeout(TimeOutRequest);
    }
  });
}

