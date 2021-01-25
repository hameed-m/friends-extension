let button = document.getElementById('button');
let input = document.getElementById('episode');
button.onclick = function(element){
  let season = document.getElementById('season').value;
  let episode = document.getElementById('episode').value;
  let link = "https://www.egybest.com/episode/friends-season-"+season+"-ep-"+episode;
  window.open(link);
};

input.onchange = function(element){
  let episode = document.getElementById('episode').value;
  if(episode.charAt(episode.length-1)==' '){
    let season = document.getElementById('season').value;
    let episode = document.getElementById('episode').value;
    let link = "https://www.egybest.com/episode/friends-season-"+season+"-ep-"+episode;
    window.open(link);

  }
};
// var clickEvent = new MouseEvent("click", {
//     "view": window,
//     "bubbles": true,
//     "cancelable": false
// });
//
// button.dispatchEvent(clickEvent);
