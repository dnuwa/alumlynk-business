$(".logo-toggle").click(function () {
    $(".sibar-left").toggle();
  });
  
  $(".menu-toggle").click(function () {
    console.log("clicked --");
    $(".sibar-nav").toggle();
  });
  
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  $(".support-").click(function () {
    $(".donation-form").removeClass("d-none").addClass("d-block");
    $(".main-view").removeClass("d-block").addClass("d-none");
  
    if ($(window).width() < 767) {
      $(".sibar-left").css("display", "none");
    }
  });
  
  $(".donationback").click(function () {
    $(".donation-form").removeClass("d-block").addClass("d-none");
    $(".main-view").removeClass("d-none").addClass("d-block");
  });
  
  // business-view
  $(".business-view").click(function () {
    $(".businessWrapper").addClass(`d-block`);
    $(".businessWrapper").removeClass(`d-none`);
    $(".business-view").removeClass(`bg-secondary`);
    $(".business-view").addClass(`bg-success`);
    $(".allWrapper").removeClass(`d-block`);
    $(".allWrapper").addClass(`d-none`);
    $(".people-view").removeClass(`bg-success`);
    $(".people-view").addClass(`bg-secondary`);
    $(".biz-search").removeClass(`d-none`);
    $(".biz-search").addClass(`d-block`);
    $(".people-search").removeClass(`d-block`);
    $(".people-search").addClass(`d-none`);
    $(".peopleWrapper").addClass(`d-none`);
    $(".peopleWrapper").removeClass(`d-block`);
  });
  
  // people-view
  $(".people-view").click(function () {
    $(".peopleWrapper").addClass(`d-block`);
    $(".peopleWrapper").removeClass(`d-none`);
    $(".businessWrapper").addClass(`d-none`);
    $(".businessWrapper").removeClass(`d-block`);
    $(".allWrapper").removeClass(`d-block`);
    $(".allWrapper").addClass(`d-none`);
    $(".people-view").removeClass(`bg-secondary`);
    $(".people-view").addClass(`bg-success`);
    $(".business-view").removeClass(`bg-success`);
    $(".business-view").addClass(`bg-secondary`);
    $(".people-search").removeClass(`d-none`);
    $(".people-search").addClass(`d-block`);
    $(".biz-search").removeClass(`d-block`);
    $(".biz-search").addClass(`d-none`);
    $(".all-view").addClass(`bg-secondary`);
    $(".all-view").removeClass(`bg-success`);
  });
  
  // all-view
  $(".all-view").click(function () {
    $(".peopleWrapper").removeClass(`d-block`);
    $(".peopleWrapper").addClass(`d-none`);
    $(".businessWrapper").addClass(`d-none`);
    $(".businessWrapper").removeClass(`d-block`);
    $(".allWrapper").addClass(`d-block`);
    $(".allWrapper").removeClass(`d-none`);
    $(".people-view").addClass(`bg-secondary`);
    $(".people-view").removeClass(`bg-success`);
    $(".business-view").removeClass(`bg-success`);
    $(".business-view").addClass(`bg-secondary`);
    $(".people-search").removeClass(`d-none`);
    $(".people-search").addClass(`d-block`);
    $(".biz-search").removeClass(`d-block`);
    $(".biz-search").addClass(`d-none`);
    $(".all-view").removeClass(`bg-secondary`);
    $(".all-view").addClass(`bg-success`);
  });
  