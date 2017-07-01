var acceptedDomains = ['www.youtube.com', 'youtu.be'];
var activeVideoID;
var currentVideo; 
var getVideos
var integer = 0;
var redditPosts;
var videoIndex = 0;
var videoList = [];
//console.log(player)
function Item(data, index) {
  this.index       = ko.observable(index);
  this.title       = ko.observable(data.title);
  this.commentsUrl = ko.observable('http://reddit.com' + data.permalink);
  this.videoID     = ko.observable(data.url);
  if (data.thumbnail == 'nsfw') {
    this.thumbnail = ko.observable('assets/images/nsfw.png');
  } else if (data.thumbnail == 'spoiler') {
    this.thumbnail = ko.observable('assets/images/spoiler.png');
  } else {
    this.thumbnail = ko.observable(data.thumbnail);
  }
  videoIndex    += 1;
};

getVideos = function(url = 'https://www.reddit.com/r/videos/.json?jsonp') {
  $.getJSON(url, function(data){
    var posts = data.data;
    console.log(posts)
    var mappedData = $.map(posts.children, function(item) {
      var media    = item.data;
      var url      = new URL(media.url);

      if (media.url.length > 0 && acceptedDomains.includes(url.hostname)) {
        videoList.push({
          title:       item.data.title,
          url:         item.data.url,
          id:          videoIndex
        });
        return new Item(item.data, videoIndex);
      };
    });

    self.videos(mappedData);
    $('#load-more').html('Load More')
  });
};

function viewModel() {
  var self = this;

  self.videoTitle   = ko.observable();
  self.videoUrl     = ko.observable();
  self.videos       = ko.observableArray();
  self.booleanValue = ko.observable(true);

  self.changeActiveVideo = function(url, index, title) {
    integer = index;
    tryNext(url, title);
  };

  getVideos()
};

