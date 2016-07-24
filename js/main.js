$('.gallery').ready(function () {

var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var flickrOptions = {
  tags: "nature",
  format: "json"
};
  function displayPhotos(data) {
    var photoHTML = '<ul>';
    $.each(data.items,function(i,photo) {
      photoHTML += '<li class="grid-25">';
      photoHTML += '<a href=" ' + photo.media.m + ' " data-lightbox="image" data-title=" '+ photo.title + ' ' + photo.published + ' " ">';
      photoHTML += '<img src="' + photo.media.m + '"></a></li>';
    });
  photoHTML += '</ul>';
  $('.gallery').html(photoHTML);
  }
  $.getJSON(flickerAPI, flickrOptions, displayPhotos);
});













