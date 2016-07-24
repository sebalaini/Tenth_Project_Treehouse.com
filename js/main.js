$('.gallery').ready(function () {

var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var flickrOptions = {
  tags: "nature",
  format: "json"
};
  function displayPhotos(data) {
    var photoHTML = '<ul>';
    $.each(data.items,function(i,photo) {
      photoHTML += '<li class="grid-25 tablet-grid-50">';
      photoHTML += '<a href="' + photo.link + '" class="image">';
      photoHTML += '<img src="' + photo.media.m + '"></a></li>';
    });
  photoHTML += '</ul>';
  $('.gallery').html(photoHTML);
  }
  $.getJSON(flickerAPI, flickrOptions, displayPhotos);
});













