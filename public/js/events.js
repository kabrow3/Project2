$(document).ready(function() {
  
    /* global moment */
  
    // eventContainer holds all of our posts
    var eventContainer = $(".event-container");
    // var eventCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.Drive", handleEventDriver);
    $(document).on("click", "button.Ride", handleEventRider);
  
    // Variable to hold our events
    var events;
    
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
    function createNewRow(post) {
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
      $.post("/api/events/rider", function (data) {
          console.log("Event Rider", data);
      });
    }
  
    var $item = $('.carousel-item');
    var $wHeight = $(window).height();
    
    $item.height($wHeight); 
    $item.addClass('full-screen');
    
    var $numberofSlides = $('.carousel-item').length;
    var $currentSlide = Math.floor((Math.random() * $numberofSlides));
    
    $('.carousel-indicators li').each(function(){
      var $slideValue = $(this).attr('data-slide-to');
      if($currentSlide == $slideValue) {
        $(this).addClass('active');
        $item.eq($slideValue).addClass('active');
      } else {
        $(this).removeClass('active');
        $item.eq($slideValue).removeClass('active');
      }
    });
    
    $('.carousel img').each(function() {
      var $src = $(this).attr('src');
      var $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
      });
      $(this).remove();
    });
    
    $(window).on('resize', function (){
      $wHeight = $(window).height();
      $item.height($wHeight);
    });
    
    $('.carousel').carousel({
      interval: 6000,
      pause: "false"
    });

    
});


  