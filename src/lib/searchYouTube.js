var searchYouTube = (options, callback) => {
  // TODO

  options.type = 'video';
  options.part = 'snippet';
  options.q = options.query;
  options.maxResults = options.max;
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: options,
    success: function (data) {
      console.log(data);
      return callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        
      console.error('youtube: Failed to get video', data);
    }
  }); 
 
};


window.searchYouTube = searchYouTube;

