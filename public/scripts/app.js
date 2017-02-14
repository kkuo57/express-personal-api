var allDestinations = [];
var $suggestionList;
var allSuggestions = [];

$(document).ready(function(){

  $suggestionList = $('#suggestedPlaces');
  $destinationList = $('#pastPlaces');

  $.ajax({
    method: 'GET',
    url: '/api/destinations',
    success: onDestinationSuccess,
    error: onError
  });

  $.ajax({
    method: 'GET',
    url: '/api/suggestions',
    success: onSuggestionSuccess,
    error: onError
  });

  $('#newSuggestionForm').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/suggestions',
      data: $(this).serialize(),
      success: onSubmitSuccess,
      error: onError
    });
  });

  $suggestionList.on('click', '.deleteBtn', function(){
    $.ajax({
      method: 'DELETE',
      url: '/api/suggestions/' + $(this).attr('data._id'),
      success: onDeleteSuccess,
      error: onError
    });
  })
});

function onDestinationSuccess(json){
  allDestinations = json;
  console.log(allDestinations);
  allDestinations.forEach(function(destination){
    $destinationList.append(
      `<hr>
      <h5>${destination.name}, ${destination.country}</h5>`
      )
  });
};

function onError(){
  console.log("Error")
}