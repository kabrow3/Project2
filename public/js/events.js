$(document).ready(function() {
  // eventContainer holds all of our posts
  var eventContainer = $(".events-today");
  // var eventCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.Drive", handleEventDriver);
  $(document).on("click", "button.Ride", handleEventRider);
  // Variable to hold our events
  var events;
  getEvents();
  // This function grabs events from the database and updates the view
  function getEvents() {
    $.get("/api/events", function(data) {
      console.log("Events", data);
      events = data;
      initializeRows();
    });
  }
  // InitializeRows handles appending all of our constructed post HTML inside eventContainer
  function initializeRows() {
    eventContainer.empty();
    var eventsToAdd = [];
    for (var i = 0; i < events.length; i++) {
      eventsToAdd.push(createNewRow(events[i]));
    }
    eventContainer.append(eventsToAdd);
  }

  // This function constructs an event's HTML
  function createNewRow(event) {
    var newEventCard = $("<div>");
    newEventCard.addClass("card");
    var newEventCardHeading = $("<div>");
    newEventCardHeading.addClass("card-header");
    var driverBtn = $("<button>");
    driverBtn.text("Drive");
    driverBtn.addClass("driver btn btn-danger");
    var riderBtn = $("<button>");
    riderBtn.text("Ride");
    riderBtn.addClass("rider btn btn-info");
    var newEventTitle = $("<h2>");
    var newEventDate = $("<small>");
    var newEventCardBody = $("<div>");
    newEventCardBody.addClass("card-body");
    var newEventBody = $("<p>");
    newEventTitle.text(event.eventName + " ");
    newEventLocation.text(event.eventLocation);
    newEventDate.text(formattedDate);
    newEventTitle.append(newEventDate);
    newEventCardHeading.append(driverBtn);
    newEventCardHeading.append(riderBtn);
    newEventCardBody.append(newEventBody);
    newEventCard.append(newEventCardHeading);
    newEventCard.append(newEventCardBody);
    newEventCard.data("event", event);
    return newEventCard;
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handleEventDriver() {
    $.post("/api/events/driver", function(data) {
      console.log("Event Driver", data);
    });
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handleEventRider() {
    $.post("/api/events/rider", function(data) {
      console.log("Event Rider", data);
    });
  }
});
