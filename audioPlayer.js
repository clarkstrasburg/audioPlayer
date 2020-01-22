videojs.getPlayer('audioOnly').ready(function() {
    var myPlayer = this;
    myPlayer.getChild('bigPlayButton').controlText('Play Audio');
  });