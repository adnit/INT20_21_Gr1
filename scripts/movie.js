const ombdAPI_KEY = 'af2beff5';
const googleAPI_KEY = 'AIzaSyCcbyvSc4f5CvRwdimTbSioPY7uPYBQB4Q';

let trailerFrame = document.getElementById('trailer');
let poster = document.getElementById('poster');
let title = document.getElementById('title');
let releasedRating = document.getElementById('releasedRating');
let runtimeGenre = document.getElementById('runtimeGenre');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let plot = document.getElementById('plot');
let loadingScreen = document.getElementById('loadingScreen');
let movieDetailsScreen = document.getElementById('movieGeneratedDetails');
let trailerBlock = document.getElementById('trailerBlock');
let trailerTitle = document.getElementById('trailer-title');
let term = '';

function generateDetails() {
  getMovieDetails(checkURL());
  movieDetailsScreen.style.visibility = 'visible';
  trailerBlock.style.visibility = 'visible';
  loadingScreen.style.display = 'none';
}

function checkURL() {
  let url = window.location.href;
  let movieID = url.substring(url.indexOf('?') + 1, url.length);
  if (movieID.length > 10) {
    window.location.href = 'index.html';
  }
  return movieID;
}

function getMovieDetails(movieID) {
  $.getJSON(
    'https://www.omdbapi.com/?',
    { apikey: ombdAPI_KEY, i: movieID },
    (movieData) => {
      if (movieData.Response != 'True') {
        throw movieData.Error;
      }
      document.title = movieData.Title;
      $(poster).attr('src', movieData.Poster);
      $(title).html(movieData.Title);
      term = movieData.Title;
      $(releasedRating).html(movieData.Year + ' | ' + movieData.imdbRating);
      $(runtimeGenre).html(movieData.Runtime + ' | ' + movieData.Genre);
      $(director).html(movieData.Director);
      $(actors).html(movieData.Actors);
      $(plot).html(movieData.Plot);
      $(trailerTitle).html('Traileri i ' + movieData.Title);
      console.log(term);
      $.getJSON(
        'https://www.googleapis.com/youtube/v3/search?',
        {
          key: googleAPI_KEY,
          type: 'video',
          part: 'id',
          maxResults: 1,
          q: term,
        },
        (trailer) => {
          let videoTag = trailer.items[0].id.videoId;
          $(trailerFrame).attr(
            'src',
            'https://www.youtube.com/embed/' + videoTag
          );
        }
      );
    }
  );
}

setTimeout(generateDetails, 3000);
