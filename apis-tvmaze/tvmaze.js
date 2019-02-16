
/** Given a query string, return array of matching shows:
 *    Shows (an array of objects) = [ { id, name, summary, episodesUrl }]
 */

async function searchShows(query) {
  
  let results = await $.get(
    `http://api.tvmaze.com/search/shows?q=${query}`);

  let shows = results.map(result => {
    let show = result.show;

    const errorImg = 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/film-3119741174._CB483525279_.png'
    let resultImg = (show.image) ? show.image.original : errorImg

    return {
      id: result.show.id,
      name: show.name,
      summary: show.summary,
      episodesUrl: `http://api.tvmaze.com/shows/${show.id}/episodes`,
      image: resultImg
    };

  });

  return shows;
}


/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="btn btn-primary">List Episodes</button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($item);
  }
}

/* getEpisodes:
Request episode information and return an array of objects */
async function getEpisodes(showId) {
  let results = await $.get(
    `http://api.tvmaze.com/shows/${showId}/episodes`);

  let episodes = results.map(result => {

      return {
        id: result.id,
        name: result.name,
        season: result.season,
        number: result.number
      }
  });
  return episodes;
}

/* populateEpisodes:
Places episode information in a new elements at the base of page. */
function populateEpisodes(episodes) {
  let $epInformation = 

}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});
