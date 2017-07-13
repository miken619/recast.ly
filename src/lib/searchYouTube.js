var searchYouTube = (options, callback) => {
  // TODO
  $('document').ready(function() {
    var searchForCats = gapi.client.youtube.search.list({
      part: 'snippet',
      type: 'video',
      q: encodeURIComponent('cats'.replace(/%20/g, '+')),
      maxResults: 3,
      order: 'viewCount',
      publishedAfter: '2015-01=01t00:00:00Z'
    });
    

    request.execute(function(response) {
      var results = reponse.result;
      
      for (var i = 0; i < results.items.length; ++i) {
        console.log('VideoId: ' + results.items[i].id.videoId);
      }
    });
   
  
  });
};

var init = () => {
  gapi.client.setApiKey(window.YOUTUBE_API_KEY);
  gapi.client.load('youtube', 'v3', function() {
    console.log('youtube api is ready');
  });
};
window.searchYouTube = searchYouTube;

