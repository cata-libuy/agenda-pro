var state = {
    current_resolution: '',
    images: [
      {id:1, src: 'new-zealand-679068', name: 'Hermoso Paisaje'},
      {id:2, src: 'new-zealand-583176_1920', name: 'Perfecto Paisaje'},
      {id:3, src: 'new-zealand-583181_1920', name: 'Paisaje sin igual'},
      {id:4, src: 'sun-rise-661541_1920', name: 'Bello Paisaje'}
    ]
}

sayHello = function() {
  // Prueba que el js se carga ok
  console.log('Gallery app started ok');}

setCurrentResolution = function() {
  // Determina el rango de tamaño del dispositivo
  var deviceWidth = $(window).width();
  if (deviceWidth < 450) {
    state.current_resolution = 'small';
  } else if (deviceWidth >= 450 && deviceWidth < 1450) {
    state.current_resolution = 'medium';
  } else {
    state.current_resolution = 'large';
  }
  console.log(state.current_resolution);
  updateImagesSources()
}

updateImagesSources = function() {
  // Envía el tamaño correspondiente al contexto y tamaño de dispositivo
  var i = 0;
  for (i in state.images) {
    $('#' + state.images[i].id).attr('src', 'img/' + state.images[i].src + '-' + state.current_resolution + '.jpg');
    $('#' + state.images[i].id).attr('alt', state.images[i].name);
    console.log('#' + state.images[i].id + ' src updated to ' + state.images[i].src + '-' + state.current_resolution + '.jpg');
  }
}

showImage = function(imageId) {
  // Recibe un imageId y despliega modal con imagen a tamaño completo
  console.log('showImage ' + imageId + ' with name ' + state.images[imageId - 1].name);
  $('#selected').attr('src', 'img/' + state.images[imageId - 1].src + '-' + state.current_resolution + '.jpg' );
  $('#imgName').text(state.images[imageId - 1].name);
  $('#modal').toggle();
}

handleModalClose = function() {
  $('#modal').toggle();
  $('#selected').attr('src', '' );
}

handleBackButton = function () {
  if ($('#selected').attr('src') !== '') {
    handleModalClose();
  }
}
