// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    videoId: '',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': checkPlayback
    }
  });
};

function onPlayerReady(event) {
  setTimeout(tryNext(videoList[integer].url, videoList[integer].title), 0);
  self.videoTitle(videoList[integer].title);
  event.target.playVideo();
};
function onPlayerStateChange(evt) {
  if (evt.data == YT.PlayerState.ENDED) {
    if (booleanValue() == true) {
			setTimeout(tryNext(videoList[integer += 1].url, videoList[integer].title), 0);
    }
  }
};
function renderVideo(newID) {
  player.loadVideoById(newID);
};

function tryNext(url, title) {
  newID = getURLParameter('v', url);
  renderVideo(newID);
  self.videoUrl(url);
  self.videoTitle(videoList[integer].title);
  var listItemPosistion = $('#video_' + videoList[integer].id).offset().top
  if($(window).width() < 1024) {
     var contentMainHeight = $('#content-main').height();
   } else {
     var contentMainHeight = 0;
   };
  $('#list').animate({scrollTop: listItemPosistion - contentMainHeight - 60 + $('#list').scrollTop()}, 100);
};

function checkPlayback() {
  flashError('Something went wrong loading that video.');
  setTimeout(tryNext(videoList[integer += 1].url, videoList[integer].title), 0);
};
