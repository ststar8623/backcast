var VideoListEntryView = Backbone.View.extend({

  initialize: function() {

  },

  render: function() {
    this.$el.html(this.template());
    // console.log($('.video-list-entry-title').text(snippet.title));
    // this.$el.find($('.video-list-entry-title')).text({model: snipppet});

    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
