var App = Backbone.View.extend({

  el: '#app',

  events: {
    'submit form': 'addMovie'
  },
  addMovie: function(event){
    event.preventDefault();
    var form = $(event.currentTarget);
    var ftitle = this.$el.find("input[name='title']").val();
    var fsynopsis = this.$el.find("input[name='synopsis']").val();
    var furl = this.$el.find("input[name='url']").val();
    var fgenre = this.$el.find("select[name='genre']").val();
    var fcast = this.$el.find("input[name='cast']").val();

    var newMovie = {
      title: ftitle,
      synopsis: fsynopsis,
      url: furl,
      genre: fgenre,
      cast: fcast
    };

    this.render(newMovie);
  },

  getMovieTemplate: function(movieData) {
		var url = '<div class="inline-block movie-poster"><img src="' + movieData.url + '"></div>';
    var title = '<div class="inline-block align-top movie-info"><h2>'+ movieData.title + '</h2>';
    var genre = '<p>Genre: <strong>' + movieData.genre + '</strong></p>';
    var synopsis = '<p>Synopsis: <strong>' + movieData.synopsis + '</strong></p>';
    var cast = '<p>Cast: <strong>' + movieData.cast + '</strong></p></div>';

		// On retourne un template jQuery
		return $('<li>' + url + title + genre + synopsis + cast + '</li>');
	},

  render: function(newMovie){
    var movieList = $('#movieUL');
    var movieTemplate = this.getMovieTemplate(newMovie);

    movieList.append(movieTemplate);
  }
});

var myApp = new App();
