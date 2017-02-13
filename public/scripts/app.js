console.log("Sanity Check: JS is working!");
var $suggestionList;
var allSuggestions = [];

$(document).ready(function(){

  $suggestionList = $('#suggestedPlaces');

  $.ajax({
    method: 'GET',
    url: '/api/destinations',
    success: onSuccess,
    error: onError
  });

  $.ajax({
    method: 'GET',
    url: '/api/suggestions',
    success: onSuccess,
    error: onError
  });

  $('#newSuggestionForm').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/suggestions',
      success: onSuccess,
      error: onError
    });
  });

  $suggestionList.on('click', '.deleteBtn', function(){
    $.ajax({
      method: 'DELETE',
      url: '/api/suggestions/' + $(this).attr('data._id'),
      success: onSuccess,
      error: onError
    });
  })

});
