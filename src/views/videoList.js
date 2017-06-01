var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.collection.on('sync', this.render, this);

  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    let videosEntry = _.map(this.collection, video => {
      let videosEntry = new VideoListEntryView({
        model: video
      }).render();
      this.$el.find('.video-list').append(videosEntry);
    });
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
