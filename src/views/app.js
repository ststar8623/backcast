var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ el: '.list', collection: this.videos });
    new VideoPlayerView({ el: '.player', collection: this.videos });
    new SearchView({ el: '.search', collection: this.videos });

    return this;
  },

  template: templateURL('src/templates/app.html')

});
