var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(videos) {
    let video = new VideoListEntryView({ model: videos });
    this.$el.find('.video-list').append(video.render());
  },

  template: templateURL('src/templates/videoList.html')

});
