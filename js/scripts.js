(function() {
  $("#submitButton").click(wikiSearch);

  /**
   *  Concatenates the Wiki api url and the user search keyword.
   */
  function wikiSearch() {
    var input = document.getElementById('searchItem').value;
    var $links = $('#links');
    $links.empty();
    if(input){
	    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
	    input + "&format=json&callback=wikiCAllBack";
    }
    else{
      $links.append("Nothing entered");
    }
  }
/**
 *  Queries Wiki for word
 *  @param {string} contains the url + the searchword
 */
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
          var url = "http://en.wikipedia.org/wiki/" + searchList[i];
          $links.append("<a href='"+ url +"'><div class='row item'><li class='listItem"+bootstrap+
          "'>" + searchList[i] + "</li></div></a>");
        }
        clearTimeout(TimeOutRequest);
      }
    });
  }
})();