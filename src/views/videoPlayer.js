var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log(this.collection);
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
