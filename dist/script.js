$(document).ready(function() {
    const $container = $('#cards-container');
    const $cards = $container.children();
    const cardCount = $cards.length;
    const cardWidth = $cards.outerWidth(true);
    let currentPosition = 0;
    let visibleCards = 4; // Default number of visible cards
    
    // Update visible cards based on screen size
    function updateVisibleCards() {
        if (window.innerWidth < 640) { // sm breakpoint
            visibleCards = 1;
        } else if (window.innerWidth < 1024) { // lg breakpoint
            visibleCards = 2;
        } else if (window.innerWidth < 1280) { // xl breakpoint
            visibleCards = 3;
        } else {
            visibleCards = 4;
        }
    }
    
    // Initialize
    updateVisibleCards();
    
    // Handle window resize
    $(window).resize(function() {
        updateVisibleCards();
        // Reset position on resize to prevent empty space
        currentPosition = 0;
        $container.css('transform', `translateX(0)`);
    });
    
    // Next button click
    $('#next-btn').click(function() {
        const maxPosition = (cardCount - visibleCards) * cardWidth;
        if (currentPosition > -maxPosition) {
            currentPosition -= cardWidth;
            $container.css('transform', `translateX(${currentPosition}px)`);
        }
    });
    
    // Previous button click
    $('#prev-btn').click(function() {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            $container.css('transform', `translateX(${currentPosition}px)`);
        }
    });
});


//navbar logic
 $(document).ready(function () {
  // Show mobile nav
  $("#menu-btn").click(function () {
    $("#mobile-nav")
      .removeClass("hidden")
      .hide()
      .fadeIn()
      .css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      });
  });

  // Hide mobile nav
  $("#close-nav").click(function () {
    $("#mobile-nav").fadeOut(function () {
      $(this).addClass("hidden").removeAttr("style");
    });
  });
});
