angular.module('App', [])
  .controller('AppController', function() {
    var scope = this;
    scope.movie = {
        title: '',
        synopsis: '',
        genre: '',
        url: '',
        cast: ''
    };
    scope.movieList = [
      {title: 'Yolo', synopsis: 'u hev no sweg', genre: 'sweg', url: 'http://fr.web.img5.acsta.net/cx_160_213/pictures/15/10/18/18/56/052074.jpg', cast: 'sweglord'}
    ];

    scope.addMovie = function () {
      event.preventDefault();

      console.log(scope.formTitle);

      scope.movieList.push({
        title: scope.formTitle,
        synopsis: scope.formSynopsis,
        genre: scope.formGenre,
        url: scope.formUrl,
        cast: scope.formCast
      });

      scope.formTitle = '';
      scope.formSynopsis = '';
      scope.formUrl = '';
      scope.formCast = '';
 };
  });
