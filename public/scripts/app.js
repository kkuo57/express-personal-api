console.log("Sanity Check: JS is working!");
var $suggestionList;
var allSuggestions = [];

$(document).ready(function(){

  $suggestionList = $('#suggestedPlaces');
  $destinationList = $('#pastPlaces');

  $.ajax({
    method: 'GET',
    url: '/api/destinations',
    success: onDestinationSuccess,
    error: onDestinationError
  });

  $.ajax({
    method: 'GET',
    url: '/api/suggestions',
    success: onSuggestionSuccess,
    error: onSuggestionError
  });

  $('#newSuggestionForm').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/suggestions',
      data: $(this).serialize(),
      success: onSubmitSuccess,
      error: onSubmitError
    });
  });

  $suggestionList.on('click', '.deleteBtn', function(){
    $.ajax({
      method: 'DELETE',
      url: '/api/suggestions/' + $(this).attr('data._id'),
      success: onDeleteSuccess,
      error: onDeleteError
    });
  })
});


// function getDestinationHtml(destination) {
//   return `<hr>
//           <p>
//           ${(destinations.name) ? destinations.country : 'null'}
//           </p>
//           `;
// }

// function getAllDestinationsHtml(destinations) {
//   return destinations.map(getDestinationHtml).join("");
// };

// function render (){
//   $destinationList.empty();
//   var destinationHtml = getAllDestinationsHtml(allDestinations);
//   $destinationList.append(destinationHtml);
// };

function onDestinationSuccess(json){
  $destinationList.empty();
  $destinationList.append(json);
};

function onDestinationError(e){
  console.log("Error")
}