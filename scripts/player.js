// Create a new YouTube player
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    playerVars: {
      listType: 'playlist',
      list: 'PLUAbBqgJ-JEUHT4_-UckJUdKwIEu1-CVv'
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

// Called when the player is ready
function onPlayerReady(event) {
  event.target.playVideo();
}