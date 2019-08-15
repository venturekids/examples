// This is the completed code example for the Gif Code Along.
// You can give the students as much or as little of this code as you feel comfortable teaching
// Run this code when the document is ready.
$(function () {
  console.log('ready!');
  getGifs();
});

function getGifs () {
  console.log('get gifs');
  $.ajax('http://api.giphy.com/v1/gifs/search?api_key=fG0RMnhYPlPbxslC6MEpWgqjXGQbQfpe&q=puppy&limit=5&offset=0&rating=G&lang=en')
    .done((res) => {
      displayGifs(res.data);
    });
}

function displayGifs (gifs) {
  console.log('display a gif');
  $(`<div><img src=${gifs[0].images.downsized_medium.url} /></div>`).appendTo('section');
  // Advanced challenge: iterate through each gif and display on the page.
  // $.each(gifs, (i, gif) => {
  //   console.log(gif);
  //   $(`<div><img src=${gif.images.downsized_medium.url} /></div>`).appendTo('section');
  // });
}
