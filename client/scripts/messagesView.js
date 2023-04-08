// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },


  // Somewhere someone calls render
  // 1. Define a helper function that will be used to:
  // - take JSON of all the messages
  // - parse the JSON string into an object
  // - ...
  // - render all of the messages as HTML on the page
  // 2. Parse.readall( helper function )
  // -> Get our JSON of all the messages
  // -> Call the helper function with the JSON of all the messages as its input
  render: function() {
    // TODO: Render _all_ the messages.
    var renderJSONMessages = function (messagesJSON) {
      console.log(messagesJSON);
      var parsedMessages = JSON.parse(messagesJSON);  // we're assuming that parsedMessages is an array
      console.log(parsedMessages);
      for (var i = 0; i < parsedMessages.length; i++) {
        var message = parsedMessages[i];
        renderMessage(message);
      }
    };

    Parse.readAll(renderJSONMessages);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var htmlMessage = MessageView.render({username: message.username, message: message.text});
    MessagesView.$chats.append(`<div>${htmlMessage}</div>`);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};