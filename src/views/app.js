var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    let videoList = new VideoListView({
      collection: this.videos
    }).render();
    this.$el.find('.list').html(videoList);

    let videoPlayer = new VideoPlayerView({el: '.player'});
    videoPlayer.render();

    let search = new SearchView({el: '.search'});
    search.render();
  },

  template: templateURL('src/templates/app.html')

});
