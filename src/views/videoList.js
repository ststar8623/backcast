var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.collection.map(this.renderVideo, this);
    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({ model: video }).render().el;
      })
    );
    return this;
  },

  // renderVideo: function(videos) {
  //   let video = new VideoListEntryView({ model: videos });
  //   this.$el.find('.video-list').append(video.render());
  // },

  template: templateURL('src/templates/videoList.html')

});
