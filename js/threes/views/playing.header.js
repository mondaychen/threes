define([
  'jquery'
, 'underscore'
, 'backbone'
, 'threes/app'
], function($, _, Backbone, app) {

  var PlayingHeader = Backbone.View.extend({
    tagName: 'header'
  , template: $('#tmpl-playing-header').html()
  , initialize: function(options) {
      this.number = options.number || 1
      this.translateY = 0
    }
  , events: {
      'click .button-menu a': 'showMenu'
    , 'click .button-help a': 'showHelp'
    }
  , render: function() {
      this.$el.html(_.template(this.template, {
        number: this.number
      , mark: this.number > 3 ? '+' : ''
      }))

      return this
    }
  , setComingNumber: function(number) {
      this.number = number
      this.render()
    }
  , showWords: function(words) {
      var container = this.$el.find('.transition-container')
      var wordsContainer = $('<div class="box">' + words +'</div>')
        .appendTo(container)

      this.translateY -= this.$el.height()
      container.css({
        transform: 'translateY(' + this.translateY + 'px)'
      })
    }
  , showMenu: function() {
      this.trigger('show:menu')
    }
  , showHelp: function() {
      this.trigger('show:help')
    }
  })

  return PlayingHeader
})