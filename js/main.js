
// Run as soon as the Document is Ready.
$(function() {

  var game = new ConwayGame('.conway-game', 50, 50);
  game.setIterationSelector('#iterations');

  $('#nextButton').on('click', function() {
    game.next();
  });

  $('#playButton').on('click', function() {
    game.play();
  });

  $('#pauseButton').on('click', function() {
    game.pause();
  });

  $('#speedUpButton').on('click', function() {
    game.increaseSpeed();
  });

  $('#slowDownButton').on('click', function() {
    game.decreaseSpeed();
  });

  $('#fetchDetailsButton').on('click', function() {
    $('#cellsCreated').text(game.getCellsCreated());
    $('#cellsDestroyed').text(game.getCellsDestroyed());
  });

});
