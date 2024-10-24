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

/// ----- sport social ------------------------------------------------------------------------------------------------------------------------------------


$(".accout-settings").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-account-settings-nav-main").addClass(`d-block`);
  $("body, html, .mobile-nav").scrollTop(0);
});

$(".setings-back").click(function () {
  //   $(".mobile-nav-main").addClass(`d-block`);
  $(".mobile-account-settings-nav-main").removeClass("d-block");
  $(".mobile-account-access-nav-main").addClass(`d-none`);
});

// account-access
$(".account-access").click(function () {
  $(".mobile-account-settings-nav-main").toggle();
  if ($(".mobile-account-settings-nav-main").hasClass("d-block")) {
    $(".mobile-account-settings-nav-main").removeClass("d-block");
  }

  $(".mobile-account-access-nav-main").addClass(`d-block`);
  $("body, html, .mobile-nav").scrollTop(0);
});

$(".access-back").click(function () {
  if ($(".mobile-account-access-nav-main").hasClass("d-block")) {
    $(".mobile-nav-main").addClass("d-none");
    $(".mobile-account-access-nav-main").removeClass("d-block");
    $(".mobile-account-settings-nav-main").addClass("d-block");
  }
  // $(".mobile-account-access-nav-main").addClass(`d-none`)
});

// email-update
$(".email-update").click(function () {
  $(".mobile-account-access-nav-main").removeClass("d-block");
  $(".mobile-account-access-nav-main").addClass("d-none");
  $(".mobile-update-email-nav-main").addClass(`d-block`);
});

$(".email-update-back").click(function () {
  $(".mobile-update-email-nav-main").removeClass(`d-block`);
  $(".mobile-update-email-nav-main").addClass("d-none");
  $(".mobile-account-access-nav-main").addClass("d-block");
});

// phone-update
$(".phone-update").click(function () {
  $(".mobile-account-access-nav-main").removeClass("d-block");
  $(".mobile-account-access-nav-main").addClass("d-none");
  $(".mobile-update-phone-nav-main").addClass(`d-block`);
});

$(".phone-update-back").click(function () {
  $(".mobile-update-phone-nav-main").removeClass(`d-block`);
  $(".mobile-update-phone-nav-main").addClass("d-none");
  $(".mobile-account-access-nav-main").addClass("d-block");
});

// password-update
$(".password-update").click(function () {
  $(".mobile-account-access-nav-main").removeClass("d-block");
  $(".mobile-account-access-nav-main").addClass("d-none");
  $(".mobile-update-password-nav-main").addClass(`d-block`);
});

$(".password-update-back").click(function () {
  $(".mobile-update-password-nav-main").removeClass(`d-block`);
  $(".mobile-update-password-nav-main").addClass("d-none");
  $(".mobile-account-access-nav-main").addClass("d-block");
});

// account-access
$(".update-profile").click(function () {
  $(".mobile-account-settings-nav-main").toggle();
  if ($(".mobile-account-settings-nav-main").hasClass("d-block")) {
    $(".mobile-account-settings-nav-main").removeClass("d-block");
  }

  $(".mobile-update-profile-nav-main").addClass(`d-block`);
});

$(".profile-update-back").click(function () {
  if ($(".mobile-update-profile-nav-main").hasClass("d-block")) {
    $(".mobile-nav-main").addClass("d-none");
    $(".mobile-update-profile-nav-main").removeClass("d-block");
    $(".mobile-account-settings-nav-main").addClass("d-block");
  }
  // $(".mobile-account-access-nav-main").addClass(`d-none`)
});

// list-my-sport-business
$(".list-my-sport-business").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-list-my-sport-business-nav").addClass(`d-block`);
});

$(".list-my-sport-business-back").click(function () {
  $(".mobile-list-my-sport-business-nav").removeClass("d-block");
  $(".mobile-list-my-sport-business-nav").addClass(`d-none`);
  if ($(window).width() < 576) {
    $(".mobile-nav").removeClass("d-none");
  }
});

// scheduledemo here

// scheduledemo
$(".scheduledemo").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    // our-mission-desk
    $(".mobile-nav-main").toggle();
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass("d-none");
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass("d-none");
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass("d-none");
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass("d-none");
    $(".atheletic-club").removeClass("d-block");
    $(".atheletic-club").addClass("d-none");
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass("d-none");
  }

  $(".mdesk-demo").removeClass("d-none");
  $(".mdesk-demo").addClass(`d-block`);
  // $(".contactus-desk").addClass(`d-none`);
});

$(".scheduledemoback").click(function () {
  if ($(window).width() > 576) {
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass(`d-none`);
  } else {
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// signupyoursport
$(".signupyoursport").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass("d-none");
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass("d-none");
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass("d-none");
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass("d-none");
    $(".atheletic-club").removeClass("d-block");
    $(".atheletic-club").addClass("d-none");
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass("d-none");
  }

  $(".sign-up-sport").removeClass("d-none");
  $(".sign-up-sport").addClass(`d-block`);
  // $(".contactus-desk").addClass(`d-none`);
});

$(".signupyoursportback").click(function () {
  if ($(window).width() > 576) {
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass(`d-none`);
  } else {
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// claimlisting
$(".claimlisting").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass("d-none");
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass("d-none");
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass("d-none");
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass("d-none");
    $(".atheletic-club").removeClass("d-block");
    $(".atheletic-club").addClass("d-none");
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass("d-none");
  }

  $(".claim-listing").removeClass("d-none");
  $(".claim-listing").addClass(`d-block`);
  // $(".contactus-desk").addClass(`d-none`);
});

$(".claimlistingback").click(function () {
  if ($(window).width() > 576) {
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass(`d-none`);
  } else {
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// businessownerguidelines
$(".businessownerguidelines").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass("d-none");
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass("d-none");
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass("d-none");
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass("d-none");
    $(".atheletic-club").removeClass("d-block");
    $(".atheletic-club").addClass("d-none");
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass("d-none");
  }

  $(".biz-owner").removeClass("d-none");
  $(".biz-owner").addClass(`d-block`);
  // $(".contactus-desk").addClass(`d-none`);
});

$(".businessownerguidelinesback").click(function () {
  if ($(window).width() > 576) {
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass(`d-none`);
  } else {
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// white-label
$(".whitelabel").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass("d-none");
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass("d-none");
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass("d-none");
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass("d-none");
    $(".atheletic-club").removeClass("d-block");
    $(".atheletic-club").addClass("d-none");
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass("d-none");
  }

  $(".white-label").removeClass("d-none");
  $(".white-label").addClass(`d-block`);
  // $(".contactus-desk").addClass(`d-none`);
});

$(".whitelabelback").click(function () {
  if ($(window).width() > 576) {
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass(`d-none`);
  } else {
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// atheleticlubs
$(".atheleticlubs").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass("d-none");
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass("d-none");
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass("d-none");
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass("d-none");
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass("d-none");
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass("d-none");
  }

  $(".atheletic-club").removeClass("d-none");
  $(".atheletic-club").addClass(`d-block`);
  // $(".contactus-desk").addClass(`d-none`);
});

$(".atheleticlubsback").click(function () {
  if ($(window).width() > 576) {
    $(".atheletic-club").removeClass("d-block");
    $(".atheletic-club").addClass(`d-none`);
  } else {
    $(".atheletic-club").removeClass("d-block");
    $(".atheletic-club").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// fitnessplaces
$(".fitnessplaces").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".mdesk-demo").removeClass("d-block");
    $(".mdesk-demo").addClass("d-none");
    $(".sign-up-sport").removeClass("d-block");
    $(".sign-up-sport").addClass("d-none");
    $(".claim-listing").removeClass("d-block");
    $(".claim-listing").addClass("d-none");
    $(".biz-owner").removeClass("d-block");
    $(".biz-owner").addClass("d-none");
    $(".white-label").removeClass("d-block");
    $(".white-label").addClass("d-none");
    $("atheletic-club").removeClass("d-block");
    $("atheletic-club").addClass("d-none");
  }

  $(".fitness-places").removeClass("d-none");
  $(".fitness-places").addClass(`d-block`);
  // $(".contactus-desk").addClass(`d-none`);
});

$(".fitnessplacesback").click(function () {
  if ($(window).width() > 576) {
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass(`d-none`);
  } else {
    $(".fitness-places").removeClass("d-block");
    $(".fitness-places").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// list-my-sport-business
//view changes
$(".sport-social-about-us").click(function () {
  $(".mobile-nav-main").toggle();
  $(".contactus-desk").addClass(`d-block`);
});

$(".sport-social-us-back").click(function () {
  $(".contactus-desk").removeClass("d-block");
  $(".contactus-desk").addClass(`d-none`);
  // if ($(window).width() < 576) {
  //   $(".sibar-nav").toggle();
  // } else {
  //   $(".mobile-nav").removeClass("d-none");
  // }
});

// contact-us
$(".contact-us").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-contact-us-nav-main").addClass(`d-block`);
  $("body, html, .mobile-nav").scrollTop(0);
});

$(".contact-us-back").click(function () {
  //   $(".mobile-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
});

// contact-us
$(".feedback").click(function () {
  // $(".mobile-nav-main").toggle();
  $(".mobile-feedback-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
});

$(".feedback-back").click(function () {
  $(".mobile-feedback-nav-main").removeClass("d-block");
  $(".mobile-feedback-nav-main").addClass(`d-none`);
  $(".mobile-contact-us-nav-main").addClass("d-block");
});

// report-spam
$(".report-spam").click(function () {
  $(".mobile-report-spam-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
});

$(".report-spam-back").click(function () {
  $(".mobile-report-spam-nav-main").removeClass("d-block");
  $(".mobile-report-spam-nav-main").addClass(`d-none`);
  $(".mobile-contact-us-nav-main").addClass("d-block");
});

// email-us
$(".email-us").click(function () {
  $(".mobile-email-us-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
});

$(".email-us-back").click(function () {
  $(".mobile-email-us-nav-main").removeClass("d-block");
  $(".mobile-report-spam-nav-main").addClass(`d-none`);
  $(".mobile-contact-us-nav-main").addClass("d-block");
});

// career-opportunity
$(".career-opportunity").click(function () {
  $(".mobile-career-opportunity-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
});

$(".career-opportunity-back").click(function () {
  $(".mobile-career-opportunity-nav-main").removeClass("d-block");
  $(".mobile-report-spam-nav-main").addClass(`d-none`);
  $(".mobile-contact-us-nav-main").addClass("d-block");
});

// business-partnerships
$(".business-partnerships").click(function () {
  $(".mobile-business-partnerships-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
});

$(".business-partnerships-back").click(function () {
  $(".mobile-business-partnerships-nav-main").removeClass("d-block");
  $(".mobile-report-spam-nav-main").addClass(`d-none`);
  $(".mobile-contact-us-nav-main").addClass("d-block");
});

// report-problem
$(".report-problem").click(function () {
  $(".mobile-report-problem-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
});

$(".report-problem-back").click(function () {
  $(".mobile-report-problem-nav-main").removeClass("d-block");
  $(".mobile-report-spam-nav-main").addClass(`d-none`);
  $(".mobile-contact-us-nav-main").addClass("d-block");
});

// deskcontactus
$(".deskcontactus").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-feedback-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
  $("body, html, .mobile-nav").scrollTop(0);
});

// deskreport
$(".deskreport").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-report-problem-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
  $("body, html, .mobile-nav").scrollTop(0);
});

// deskreportspam
$(".deskreportspam").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-report-spam-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
  $("body, html, .mobile-nav").scrollTop(0);
});

// deskbusinesspartnership
$(".deskbusinesspartnership").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-business-partnerships-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
  $("body, html, .mobile-nav").scrollTop(0);
});

// deskemailus
$(".deskemailus").click(function () {
  $(".mobile-nav-main").toggle();
  $(".desk-email-us-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
  $("body, html, .mobile-nav").scrollTop(0);
});

// deskcareeropp
$(".deskcareeropp").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mobile-career-opportunity-nav-main").addClass(`d-block`);
  $(".mobile-contact-us-nav-main").removeClass("d-block");
  $(".mobile-contact-us-nav-main").addClass(`d-none`);
  $("body, html, .mobile-nav").scrollTop(0);
});

// deskeditprofile
$(".deskeditprofile").click(function () {
  $(".mobile-nav-main").toggle();
  $(".mdesk-account-settings-main").removeClass("d-none");
  $(".mdesk-account-settings-main").addClass("d-block");
});

$(".deskeditprofileback").click(function () {
  $(".mdesk-account-settings-main").removeClass("d-block");
  $(".mdesk-account-settings-main").addClass("d-none");
  if ($(window).width() < 576) {
    $(".mobile-nav").removeClass("d-none");
  }
});

// deskaccountaccess
$(".deskaccountaccess").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass("d-none");
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass("d-none");
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass("d-none");
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass("d-none");
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass("d-none");
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass("d-none");
  }
  $(".profile-update-desk").removeClass("d-none");
  $(".profile-update-desk").addClass(`d-block`);
});

$(".deskaccountaccessback").click(function () {
  if ($(window).width() > 576) {
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass(`d-none`);
  } else {
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass(`d-none`);
    $(".mdesk-account-settings-main").addClass(`d-block`);
    $(".mdesk-account-settings-main").removeClass("d-none");
    $(".mobile-nav").removeClass("d-none");
  }
});

// deskaccountpass
$(".deskaccountpass").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass("d-none");
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass("d-none");
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass("d-none");
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass("d-none");
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass("d-none");
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass("d-none");
  }
  $(".account-access-desk").removeClass("d-none");
  $(".account-access-desk").addClass(`d-block`);
});

$(".deskaccountpassback").click(function () {
  if ($(window).width() > 576) {
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass(`d-none`);
  } else {
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass(`d-none`);
    $(".mdesk-account-settings-main").addClass(`d-block`);
    $(".mdesk-account-settings-main").removeClass("d-none");
  }
});

// notificationsdesk
$(".notificationsdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass("d-none");
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass("d-none");
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass("d-none");
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass("d-none");
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass("d-none");
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass("d-none");
  }
  $(".notifications-desk").removeClass("d-none");
  $(".notifications-desk").addClass(`d-block`);
});

$(".notificationsdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass(`d-none`);
  } else {
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass(`d-none`);
    $(".mdesk-account-settings-main").addClass(`d-block`);
    $(".mdesk-account-settings-main").removeClass("d-none");
  }
});

$(".languagedesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass("d-none");
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass("d-none");
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass("d-none");
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass("d-none");
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass("d-none");
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass("d-none");
  }
  $(".language-desk").removeClass("d-none");
  $(".language-desk").addClass(`d-block`);
});

$(".languagedeskback").click(function () {
  if ($(window).width() > 576) {
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass(`d-none`);
  } else {
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass(`d-none`);
    $(".mdesk-account-settings-main").addClass(`d-block`);
    $(".mdesk-account-settings-main").removeClass("d-none");
  }
});

$(".locationdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass("d-none");
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass("d-none");
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass("d-none");
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass("d-none");
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass("d-none");
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass("d-none");
  }
  $(".location-desk").removeClass("d-none");
  $(".location-desk").addClass(`d-block`);
});

$(".locationdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass(`d-none`);
  } else {
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass(`d-none`);
    $(".mdesk-account-settings-main").addClass(`d-block`);
    $(".mdesk-account-settings-main").removeClass("d-none");
  }
});

$(".dsktermsandconditions").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass("d-none");
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass("d-none");
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass("d-none");
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass("d-none");
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass("d-none");
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass("d-none");
  }
  $(".terms-and-conditions-desk").removeClass("d-none");
  $(".terms-and-conditions-desk").addClass(`d-block`);
});

$(".dsktermsandconditionsback").click(function () {
  if ($(window).width() > 576) {
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass(`d-none`);
  } else {
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass(`d-none`);
    $(".mdesk-account-settings-main").addClass(`d-block`);
    $(".mdesk-account-settings-main").removeClass("d-none");
  }
});

$(".privacypolicy").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".profile-update-desk").removeClass("d-block");
    $(".profile-update-desk").addClass("d-none");
    $(".account-access-desk").removeClass("d-block");
    $(".account-access-desk").addClass("d-none");
    $(".notifications-desk").removeClass("d-block");
    $(".notifications-desk").addClass("d-none");
    $(".language-desk").removeClass("d-block");
    $(".language-desk").addClass("d-none");
    $(".location-desk").removeClass("d-block");
    $(".location-desk").addClass("d-none");
    $(".terms-and-conditions-desk").removeClass("d-block");
    $(".terms-and-conditions-desk").addClass("d-none");
  }
  $(".privacy-policy-desk").removeClass("d-none");
  $(".privacy-policy-desk").addClass(`d-block`);
});

$(".privacypolicyback").click(function () {
  if ($(window).width() > 576) {
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass(`d-none`);
  } else {
    $(".privacy-policy-desk").removeClass("d-block");
    $(".privacy-policy-desk").addClass(`d-none`);
    $(".mdesk-account-settings-main").addClass(`d-block`);
    $(".mdesk-account-settings-main").removeClass("d-none");
  }
});

$(".feedbackdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".feature-problem-desk").removeClass("d-block");
    $(".feature-problem-desk").addClass("d-none");
    $(".report-spam-desk").removeClass("d-block");
    $(".report-spam-desk").addClass("d-none");
    $(".business-partnerships-desk").removeClass("d-block");
    $(".business-partnerships-desk").addClass("d-none");
    $(".email-us-desk").removeClass("d-block");
    $(".email-us-desk").addClass("d-none");
    $(".career-opportunities-desk").removeClass("d-block");
    $(".career-opportunities-desk").addClass("d-none");
  }
  $(".give-us-feedback-desk").removeClass("d-none");
  $(".give-us-feedback-desk").addClass(`d-block`);
});

$(".feedbackdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".give-us-feedback-desk").removeClass("d-block");
    $(".give-us-feedback-desk").addClass(`d-none`);
  } else {
    $(".give-us-feedback-desk").removeClass("d-block");
    $(".give-us-feedback-desk").addClass(`d-none`);
    $(".contact-us-desk").addClass(`d-block`);
    $(".contact-us-desk").removeClass("d-none");
  }
});

// reportproblemdesk
$(".reportproblemdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".give-us-feedback-desk").removeClass("d-block");
    $(".give-us-feedback-desk").addClass("d-none");
    $(".report-spam-desk").removeClass("d-block");
    $(".report-spam-desk").addClass("d-none");
    $(".business-partnerships-desk").removeClass("d-block");
    $(".business-partnerships-desk").addClass("d-none");
    $(".email-us-desk").removeClass("d-block");
    $(".email-us-desk").addClass("d-none");
    $(".career-opportunities-desk").removeClass("d-block");
    $(".career-opportunities-desk").addClass("d-none");
  }
  $(".feature-problem-desk").removeClass("d-none");
  $(".feature-problem-desk").addClass(`d-block`);
});

$(".reportproblemdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".feature-problem-desk").removeClass("d-block");
    $(".feature-problem-desk").addClass(`d-none`);
  } else {
    $(".feature-problem-desk").removeClass("d-block");
    $(".feature-problem-desk").addClass(`d-none`);
    $(".contact-us-desk").addClass(`d-block`);
    $(".contact-us-desk").removeClass("d-none");
  }
});

// reportspamdesk
$(".reportspamdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".give-us-feedback-desk").removeClass("d-block");
    $(".give-us-feedback-desk").addClass("d-none");
    $(".feature-problem-desk").removeClass("d-block");
    $(".feature-problem-desk").addClass("d-none");
    $(".business-partnerships-desk").removeClass("d-block");
    $(".business-partnerships-desk").addClass("d-none");
    $(".email-us-desk").removeClass("d-block");
    $(".email-us-desk").addClass("d-none");
    $(".career-opportunities-desk").removeClass("d-block");
    $(".career-opportunities-desk").addClass("d-none");
  }
  $(".report-spam-desk").removeClass("d-none");
  $(".report-spam-desk").addClass(`d-block`);
});

$(".reportspamdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".report-spam-desk").removeClass("d-block");
    $(".report-spam-desk").addClass(`d-none`);
  } else {
    $(".report-spam-desk").removeClass("d-block");
    $(".report-spam-desk").addClass(`d-none`);
    $(".contact-us-desk").addClass(`d-block`);
    $(".contact-us-desk").removeClass("d-none");
  }
});

// businesspartnershipsdesk
$(".businesspartnershipsdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".give-us-feedback-desk").removeClass("d-block");
    $(".give-us-feedback-desk").addClass("d-none");
    $(".feature-problem-desk").removeClass("d-block");
    $(".feature-problem-desk").addClass("d-none");
    $(".report-spam-desk").removeClass("d-block");
    $(".report-spam-desk").addClass("d-none");
    $(".email-us-desk").removeClass("d-block");
    $(".email-us-desk").addClass("d-none");
    $(".career-opportunities-desk").removeClass("d-block");
    $(".career-opportunities-desk").addClass("d-none");
  }
  $(".business-partnerships-desk").removeClass("d-none");
  $(".business-partnerships-desk").addClass(`d-block`);
});

$(".businesspartnershipsdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".business-partnerships-desk").removeClass("d-block");
    $(".business-partnerships-desk").addClass(`d-none`);
  } else {
    $(".business-partnerships-desk").removeClass("d-block");
    $(".business-partnerships-desk").addClass(`d-none`);
    $(".contact-us-desk").addClass(`d-block`);
    $(".contact-us-desk").removeClass("d-none");
  }
});

// emailusdesk
$(".emailusdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".give-us-feedback-desk").removeClass("d-block");
    $(".give-us-feedback-desk").addClass("d-none");
    $(".feature-problem-desk").removeClass("d-block");
    $(".feature-problem-desk").addClass("d-none");
    $(".report-spam-desk").removeClass("d-block");
    $(".report-spam-desk").addClass("d-none");
    $(".business-partnerships-desk").removeClass("d-block");
    $(".business-partnerships-desk").addClass("d-none");
    $(".career-opportunities-desk").removeClass("d-block");
    $(".career-opportunities-desk").addClass("d-none");
  }
  $(".email-us-desk").removeClass("d-none");
  $(".email-us-desk").addClass(`d-block`);
});

$(".emailusdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".email-us-desk").removeClass("d-block");
    $(".email-us-desk").addClass(`d-none`);
  } else {
    $(".email-us-desk").removeClass("d-block");
    $(".email-us-desk").addClass(`d-none`);
    $(".contact-us-desk").addClass(`d-block`);
    $(".contact-us-desk").removeClass("d-none");
  }
});

$(".careeropportunitydesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav-main").toggle();
    $(".give-us-feedback-desk").removeClass("d-block");
    $(".give-us-feedback-desk").addClass("d-none");
    $(".feature-problem-desk").removeClass("d-block");
    $(".feature-problem-desk").addClass("d-none");
    $(".report-spam-desk").removeClass("d-block");
    $(".report-spam-desk").addClass("d-none");
    $(".business-partnerships-desk").removeClass("d-block");
    $(".business-partnerships-desk").addClass("d-none");
    $(".email-us-desk").removeClass("d-block");
    $(".email-us-desk").addClass("d-none");
  }
  $(".career-opportunities-desk").removeClass("d-none");
  $(".career-opportunities-desk").addClass(`d-block`);
});

$(".careeropportunitydeskback").click(function () {
  if ($(window).width() > 576) {
    $(".career-opportunities-desk").removeClass("d-block");
    $(".career-opportunities-desk").addClass(`d-none`);
  } else {
    $(".career-opportunities-desk").removeClass("d-block");
    $(".career-opportunities-desk").addClass(`d-none`);
    $(".contact-us-desk").addClass(`d-block`);
    $(".contact-us-desk").removeClass("d-none");
  }
});

// deskemailupdate
$(".deskemailupdate").click(function () {
  $(".desk-account-access-nav-main").removeClass("d-block");
  $(".desk-account-access-nav-main").addClass(`d-none`);
  $(".desk-email-us-nav-main").addClass(`d-block`);
  $(".desk-email-us-nav-main").removeClass("d-none");
});

$(".deskemailupdateback").click(function () {
  $(".desk-account-access-nav-main").removeClass("d-none");
  $(".desk-account-access-nav-main").addClass(`d-block`);
  $(".desk-email-us-nav-main").addClass(`d-none`);
  $(".desk-email-us-nav-main").removeClass("d-block");
});

// passwordupdate
$(".passwordupdate").click(function () {
  $(".desk-account-access-nav-main").removeClass("d-block");
  $(".desk-account-access-nav-main").addClass(`d-none`);
  $(".desk-password-update").addClass(`d-block`);
  $(".desk-password-update").removeClass("d-none");
});

$(".passwordupdateback").click(function () {
  $(".desk-account-access-nav-main").removeClass("d-none");
  $(".desk-account-access-nav-main").addClass(`d-block`);
  $(".desk-password-update").addClass(`d-none`);
  $(".desk-password-update").removeClass("d-block");
});

// phoneupdate
$(".phoneupdate").click(function () {
  $(".desk-account-access-nav-main").removeClass("d-block");
  $(".desk-account-access-nav-main").addClass(`d-none`);
  $(".desk-password-update").addClass(`d-block`);
  $(".desk-password-update").removeClass("d-none");
});

$(".phoneupdateback").click(function () {
  $(".desk-account-access-nav-main").removeClass("d-none");
  $(".desk-account-access-nav-main").addClass(`d-block`);
  $(".desk-password-update").addClass(`d-none`);
  $(".desk-password-update").removeClass("d-block");
});

// emaildeskupdate
$(".emaildeskupdate").click(function () {
  // $(".mobile-nav-main").addClass(`d-none`);
  $(".account-access-desk").removeClass("d-block");
  $(".account-access-desk").addClass(`d-none`);
  $(".update-email-desk").addClass(`d-block`);
  $(".update-email-desk").removeClass("d-none");
});

$(".emaildeskupdateback").click(function () {
  $(".account-access-desk").removeClass("d-none");
  $(".account-access-desk").addClass(`d-block`);
  $(".update-email-desk").addClass(`d-none`);
  $(".update-email-desk").removeClass("d-block");
});

// passworddeskupdate
$(".passworddeskupdate").click(function () {
  // $(".mobile-nav-main").addClass(`d-none`);
  $(".account-access-desk").removeClass("d-block");
  $(".account-access-desk").addClass(`d-none`);
  $(".update-password-desk").addClass(`d-block`);
  $(".update-password-desk").removeClass("d-none");
});

$(".passworddeskupdateback").click(function () {
  $(".account-access-desk").removeClass("d-none");
  $(".account-access-desk").addClass(`d-block`);
  $(".update-password-desk").addClass(`d-none`);
  $(".update-password-desk").removeClass("d-block");
});

// phoneupdatedesk
$(".phoneupdatedesk").click(function () {
  // $(".mobile-nav-main").addClass(`d-none`);
  $(".account-access-desk").removeClass("d-block");
  $(".account-access-desk").addClass(`d-none`);
  $(".update-phonenumber-desk").addClass(`d-block`);
  $(".update-phonenumber-desk").removeClass("d-none");
});

$(".phoneupdatedeskback").click(function () {
  $(".account-access-desk").removeClass("d-none");
  $(".account-access-desk").addClass(`d-block`);
  $(".update-phonenumber-desk").addClass(`d-none`);
  $(".update-phonenumber-desk").removeClass("d-block");
});

// contactusdesk
$(".contactusdesk").click(function () {
  $(".mobile-nav-main").toggle();
  $(".contact-us-desk").removeClass("d-none");
  $(".contact-us-desk").addClass(`d-block`);
});

$(".contactusdeskback").click(function () {
  $(".contact-us-desk").removeClass("d-block");
  $(".contact-us-desk").addClass(`d-none`);
  if ($(window).width() < 576) {
    $(".mobile-nav").removeClass("d-none");
  }
});

// sportSocailaboutusdesk
$(".sportSocailaboutusdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
  }
  $(".mobile-nav-main").toggle();
  $(".contactus-desk").removeClass("d-none");
  $(".contactus-desk").addClass(`d-block`);
});

$(".sportSocailaboutusdeskback").click(function () {
  $(".contactus-desk").removeClass("d-block");
  $(".contactus-desk").addClass(`d-none`);
  if ($(window).width() < 576) {
    $(".mobile-nav").removeClass("d-none");
  }
});

// codeofconductdesk
$(".codeofconductdesk").click(function () {
  $(".code-of-conduct-desk").removeClass("d-none");
  $(".code-of-conduct-desk").addClass(`d-block`);
  $(".contactus-desk").addClass(`d-none`);
  $(".contactus-desk").removeClass("d-block");
  // if ($(window).width() < 576) {
  // our-mission-desk
  $(".mobile-nav").removeClass("d-none");
  $(".mobile-nav-main").toggle();
  $(".community-standards-desk").removeClass("d-block");
  $(".community-standards-desk").addClass("d-none");
  $(".our-mission-desk").removeClass("d-block");
  $(".our-mission-desk").addClass("d-none");
  $(".our-team-desk").removeClass("d-block");
  $(".our-team-desk").addClass("d-none");
  $(".verified-user-desk").removeClass("d-block");
  $(".verified-user-desk").addClass("d-none");
  // }
});

$(".codeofconductdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".code-of-conduct-desk").removeClass("d-block");
    $(".code-of-conduct-desk").addClass(`d-none`);
  } else {
    $(".code-of-conduct-desk").removeClass("d-block");
    $(".code-of-conduct-desk").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// communitydesk
$(".communitydesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".our-mission-desk").removeClass("d-block");
    $(".our-mission-desk").addClass("d-none");
    $(".code-of-conduct-desk").removeClass("d-block");
    $(".code-of-conduct-desk").addClass("d-none");
    $(".our-team-desk").removeClass("d-block");
    $(".our-team-desk").addClass("d-none");
    $(".verified-user-desk").removeClass("d-block");
    $(".verified-user-desk").addClass("d-none");
  }
  $(".community-standards-desk").removeClass("d-none");
  $(".community-standards-desk").addClass(`d-block`);
  $(".contactus-desk").addClass(`d-none`);
  $(".contactus-desk").removeClass("d-block");
});

$(".communitydeskback").click(function () {
  if ($(window).width() > 576) {
    $(".community-standards-desk").removeClass("d-block");
    $(".community-standards-desk").addClass(`d-none`);
  } else {
    $(".community-standards-desk").removeClass("d-block");
    $(".community-standards-desk").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// ourteamdesk
$(".ourteamdesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".our-mission-desk").removeClass("d-block");
    $(".our-mission-desk").addClass("d-none");
    $(".code-of-conduct-desk").removeClass("d-block");
    $(".code-of-conduct-desk").addClass("d-none");
    $(".verified-user-desk").removeClass("d-block");
    $(".verified-user-desk").addClass("d-none");
  }
  $(".our-team-desk").removeClass("d-none");
  $(".our-team-desk").addClass(`d-block`);
  $(".contactus-desk").addClass(`d-none`);
  $(".contactus-desk").removeClass("d-block");
});

$(".ourteamdeskback").click(function () {
  if ($(window).width() > 576) {
    $(".our-team-desk").removeClass("d-block");
    $(".our-team-desk").addClass(`d-none`);
  } else {
    $(".our-team-desk").removeClass("d-block");
    $(".our-team-desk").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// verifiedusers
$(".verifiedusers").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle();
  } else {
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav").removeClass("d-none");
    $(".mobile-nav-main").toggle();
    $(".our-mission-desk").removeClass("d-block");
    $(".our-mission-desk").addClass("d-none");
    $(".code-of-conduct-desk").removeClass("d-block");
    $(".code-of-conduct-desk").addClass("d-none");
    $(".our-team-desk").removeClass("d-block");
    $(".our-team-desk").addClass("d-none");
  }
  $(".verified-user-desk").removeClass("d-none");
  $(".verified-user-desk").addClass(`d-block`);
  $(".contactus-desk").addClass(`d-none`);
  $(".contactus-desk").removeClass("d-block");
});

$(".verifiedusersback").click(function () {
  if ($(window).width() > 576) {
    $(".verified-user-desk").removeClass("d-block");
    $(".verified-user-desk").addClass(`d-none`);
  } else {
    $(".verified-user-desk").removeClass("d-block");
    $(".verified-user-desk").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// ourmissiondesk
$(".ourmissiondesk").click(function () {
  if ($(window).width() < 576) {
    $(".sibar-nav").toggle()
  } else {
    $(".sibar-nav").removeClass("d-none");
    // our-mission-desk
    $(".sibar-nav").removeClass("d-none");
    $(".sibar-nav-main").toggle();
    $(".community-standards-desk").removeClass("d-block");
    $(".community-standards-desk").addClass("d-none");
    $(".code-of-conduct-desk").removeClass("d-block");
    $(".code-of-conduct-desk").addClass("d-none");
    $(".our-team-desk").removeClass("d-block");
    $(".our-team-desk").addClass("d-none");
    $(".verified-user-desk").removeClass("d-block");
    $(".verified-user-desk").addClass("d-none");
  }

  $(".our-mission-desk").removeClass("d-none");
  $(".our-mission-desk").addClass(`d-block`);
  $(".contactus-desk").addClass(`d-none`);
});

$(".ourmissiondeskback").click(function () {
  if ($(window).width() > 576) {
    $(".our-mission-desk").removeClass("d-block");
    $(".our-mission-desk").addClass(`d-none`);
  } else {
    $(".our-mission-desk").removeClass("d-block");
    $(".our-mission-desk").addClass(`d-none`);
    $(".contactus-desk").addClass(`d-block`);
    $(".contactus-desk").removeClass("d-none");
  }
});

// editAutomaticLocationsModal
$(".editAutomaticLocationsModal").click(function () {
  $(".mobile-nav-main").addClass(`d-none`);
  $(".confirmautomatically").removeClass("d-none");
  $(".confirmautomatically").addClass(`d-block`);
});

$(".editAutomaticLocationsModalback").click(function () {
  $(".confirmautomatically").removeClass("d-block");
  $(".confirmautomatically").addClass(`d-none`);
});

// editManualLocationsModal
$(".editManualLocationsModal").click(function () {
  $(".mobile-nav-main").addClass(`d-none`);
  $(".confirmmanually").removeClass("d-none");
  $(".confirmmanually").addClass(`d-block`);
});

$(".editManualLocationsModalback").click(function () {
  $(".confirmmanually").removeClass("d-block");
  $(".confirmmanually").addClass(`d-none`);
});

// open-invites
$(".open-invites").click(function () {
  $(".sport-members-toggle").addClass("d-none");
  $(".sport-members-toggle").removeClass(`d-block`);
  $(".open-invites-toggle").removeClass("d-none");
  $(".open-invites-toggle").addClass(`d-block`);
  $(".open-invites").removeClass("d-block");
  $(".open-invites").addClass("d-none");
  if ($(window).width() < 576) {
    $(".sport-invites-toggle").css("display", "none");
  }
});

// sport-members
$(".sport-members").click(function () {
  $(".open-invites-toggle").removeClass("d-block");
  $(".open-invites-toggle").addClass(`d-none`);
  $(".sport-members-toggle").removeClass("d-none");
  $(".sport-members-toggle").addClass(`d-block`);
  $(".view-open-invites").addClass("bg-secondary").removeClass("bg-success");
  $(".sport-members").addClass("bg-success").removeClass("bg-secondary");
  if ($(window).width() < 576) {
    $(".sport-invites-toggle").css("display", "none");
  }
});

$(".view-open-invites").click(function () {
  $(".open-invites-toggle").addClass("d-block");
  $(".open-invites-toggle").removeClass(`d-none`);
  $(".sport-members-toggle").addClass("d-none");
  $(".sport-members-toggle").removeClass(`d-block`);
  $(".view-open-invites").addClass("bg-success").removeClass("bg-secondary");
  $(".sport-members").addClass("bg-secondary").removeClass("bg-success");
  if ($(window).width() < 576) {
    $(".sport-invites-toggle").css("display", "none");
  }
});

$(".sport-members-search").click(function () {
  // $(".displayFilters").removeClass("bg-dark-grey").addClass("btn-secondary")
  $(".open-invites-members-toggle").removeClass("d-none");
  $(".open-invites-members-toggle").addClass(`d-block`);
  $(".sport-members-search").removeClass(`d-block`).addClass("d-none");
  $(".matches-show").removeClass("d-none").addClass(".d-block");
  $(".open-invites-toggle").removeClass("d-none").addClass("d-block");
  $(".on-search-hide").addClass("d-none");
  $(".on-search-show").removeClass("d-none").addClass("d-block");
  $(".helper-pops").removeClass("d-flex flex-wrap").addClass("d-none");
  $(".show-after-search").removeClass("d-none").addClass("d-block");
  $(".sport-members-search-filter").html("(Sport) Results (xxx)");
});

$(".sport-members-search-filter").click(function () {
  $(".open-invites-members-toggle").removeClass("d-none");
  $(".open-invites-members-toggle").addClass(`d-block`);
  // $(".sport-members-search").removeClass(`d-block`).addClass("d-none");
  $(".matches-show").removeClass("d-none").addClass(".d-block");
  $(".open-invites-toggle").removeClass("d-none").addClass("d-block");
  $(".on-search-hide").addClass("d-none");
  $(".on-search-show").removeClass("d-none").addClass("d-flex");
  $(".helper-pops").removeClass("d-flex flex-wrap").addClass("d-none");
  $(".sport-members-search-filter").html("(Sport) Results (xxx)");
  $("#stepin0").removeClass("d-block").addClass("d-none");
  $("#stepin1").addClass("d-block").removeClass("d-none");
});

// $(".sport-members-search-filter").click(function () {
//   $(".open-invites-members-toggle").removeClass("d-none");
//   $(".open-invites-members-toggle").addClass(`d-block`);
//   $(".matches-show").removeClass("d-none").addClass(".d-block");
//   $(".open-invites-toggle").removeClass("d-none").addClass("d-block");
//   $(".on-search-hide").addClass("d-none");
//   $(".on-search-show").removeClass("d-none").addClass("d-flex");
//   $(".helper-pops").removeClass("d-flex flex-wrap").addClass("d-none");
//   $(".sport-members-search-filter").html("(Sport) Results (xxx)");
//   $("#stepin0").removeClass("d-block").addClass("d-none");
//   $("#hide-header").removeClass("d-block").addClass("d-none");
//   $("#stepin1").addClass("d-block").removeClass("d-none");
//   if (preferences.length > 0) {
//     $(".selected-preferences").html("Selected Preferences");
//   }

//   $(".fitersWrapper").addClass(`d-none`);
//   $(".fitersWrapper").removeClass(`d-block`);
//   $(".onFiterHide").addClass(`d-block`).removeClass(`d-none`);
//   $(".displayFilters").addClass(`d-block`).removeClass(`d-none`);
//   $(".selected-preference").removeClass("d-none").addClass(`d-block`);
//   $(".pref-clicked").removeClass("w-50 mx-auto").addClass(`w-100`);
// });

// logo-nav-mini
$(".logo-toggle").click(function () {
  $(".logo-nav-mini").toggle();
  $(".logo-nav").removeClass(`d-block`);
  $(".logo-nav").addClass(`d-none`);
});

$(".logo-nav-mini").click(function () {
  $(".logo-nav-mini").toggle();
  $(".logo-nav").removeClass(`d-none`);
  $(".logo-nav").addClass(`d-block`);
  // $(".logo-nav").toggle();
});

// dashboard-toggle
$(".dashboard-toggle").click(function () {
  // $(".logo-nav-mini").toggle();
  $(".logo-nav").removeClass(`d-none`);
  $(".logo-nav").addClass(`d-block`);
});

//hide dashboard
$("#close-mobile-nav").click(function () {
  // $(".logo-nav-mini").toggle();
  $(".logo-nav").addClass(`d-none`);
  $(".logo-nav").removeClass(`d-block`);
});

// open-invites
$(".sport-events").click(function () {
  $(".sport-members-toggle").addClass("d-none");
  $(".sport-members-toggle").removeClass(`d-block`);
  $(".open-invites-toggle").removeClass("d-block");
  $(".open-invites-toggle").addClass(`d-none`);
  $(".sport-invites-toggle").css("display", "block");
});

// matches-btn
$(".matches-btn").click(function () {
  $(".sportFriendButton").addClass(`d-block`);
  $(".sportFriendButton").removeClass(`d-none`);
  $(".requestsArea").addClass(`d-block`);
  $(".requestsArea").removeClass(`d-none`);
});

// addNewSport wanno
$(".addNewSport").click(function () {
  $(".mainDisplay").addClass(`d-none`);
  $(".mainDisplay").removeClass(`d-block`);
  $(".addSportView").removeClass(`d-none`);
  $(".addSportView").addClass(`d-block`);
  $(".open-invites-toggle").removeClass("d-block").addClass("d-none");
  //homeFitnessPlaces.html
  $(".listings").removeClass("d-block").addClass("d-none");
  $(".search-button").removeClass("d-block").addClass("d-none");
  $(".sport-places-header").removeClass("d-block").addClass("d-none");
});

// addNewSportBack
$(".addNewSportBack").click(function () {
  $(".mainDisplay").addClass(`d-block`);
  $(".mainDisplay").removeClass(`d-none`);
  $(".addSportView").addClass(`d-none`);
  $(".addSportView").removeClass(`d-block`);
  //homeFitnessPlaces.html
  $(".listings").addClass("d-block").removeClass("d-none");
  $(".search-button").addClass("d-block").removeClass("d-none");
  $(".sport-places-header").addClass("d-block").removeClass("d-none");
});

// replyMessage
$(".replyMessage").click(function () {
  $(".mainDisplay").addClass(`d-none`);
  $(".mainDisplay").removeClass(`d-block`);
  $(".messageReply").removeClass(`d-none`);
  $(".messageReply").addClass(`d-block`);
  // open-invites-toggle
  $(".open-invites-toggle").addClass(`d-none`);
  $(".open-invites-toggle").removeClass(`d-block`);
});

// replyMessageBack
$(".replyMessageBack").click(function () {
  $(".mainDisplay").addClass(`d-block`);
  $(".mainDisplay").removeClass(`d-none`);
  $(".messageReply").addClass(`d-none`);
  $(".messageReply").removeClass(`d-block`);
  // open-invites-toggle
  // $(".open-invites-toggle").removeClass(`d-none`);
  // $(".open-invites-toggle").addClass(`d-block`);
});

// replyCal
$(".replyCal").click(function () {
  $(".replayCalendar").addClass(`d-block`);
  $(".replayCalendar").removeClass(`d-none`);
  $(".messageReply").addClass(`d-none`);
  $(".messageReply").removeClass(`d-block`);
});

// calReplyBack
$(".calReplyBack").click(function () {
  $(".replayCalendar").addClass(`d-none`);
  $(".replayCalendar").removeClass(`d-block`);
  $(".messageReply").addClass(`d-block`);
  $(".messageReply").removeClass(`d-none`);
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

// displayFilters
$(".displayFilters").click(function () {
  // $(".fitersWrapper").toggle();
  $(".fitersWrapper").addClass(`d-block`);
  $(".fitersWrapper").removeClass(`d-none`);
  // hideFilters
  $(".displayFilters").addClass(`d-none`);
  $(".displayFilters").removeClass(`d-block`);
  // $(".hideFilters").addClass(`d-block`);
  // $(".hideFilters").removeClass(`d-none`);
  // onFiterHide
  $(".show-after-search").removeClass("d-block").addClass("d-none");
  $(".sport-members-search-filter").html("Search");
  $(".onFiterHide").removeClass(`d-block`);
  $(".onFiterHide").addClass(`d-none`);
  $(".search-clicked").addClass(`d-none`);
});

// displayFiltersMobi
$(".displayFiltersMobi").click(function () {
  // $(".fitersWrapper").toggle();
  $(".fitersWrapper").addClass(`d-block`);
  $(".fitersWrapper").removeClass(`d-none`);
  // hideFilters
  $(".displayFilters").addClass(`d-none`);
  $(".displayFilters").removeClass(`d-block`);
  // $(".hideFilters").addClass(`d-block`);
  // $(".hideFilters").removeClass(`d-none`);
  // onFiterHide
  $(".show-after-search").removeClass("d-block").addClass("d-none");
  $(".sport-members-search-filter").html("Search");
  $(".onFiterHide").removeClass(`d-block`);
  $(".onFiterHide").addClass(`d-none`);
  $(".search-clicked").addClass(`d-none`);
});

$(".hideFilters").click(function () {
  // $(".fitersWrapper").toggle();
  $(".fitersWrapper").addClass(`d-none`);
  $(".fitersWrapper").removeClass(`d-block`);
  $(".selected-preference").removeClass("d-none").addClass(`d-block`);
  $(".pref-clicked").removeClass("w-50 mx-auto").addClass(`w-100`);
  $(".onFiterHide").addClass(`d-block`);
  $(".onFiterHide").removeClass(`d-none`);
  $(".displayFilters").addClass(`d-block`);
  $(".displayFilters").removeClass(`d-none`);
  $(".search-clicked").removeClass(`d-none`);
});

$(".show-share-socials").click(function () {
  $(".share-socials").removeClass("d-none").addClass("d-block");
});

const options = ["Tennis", "Golf", "Squash", "Pickleball"];
// add sports to search from
// const options = [];
const additionalSports = ["Sport 1", "Sport 2", "Sport 3"];
const searchInput = $(".search-input");
const searchDropdown = $(".search-dropdown");

searchInput.on("focus", function () {
  // Trigger the input event to update the dropdown based on initial input value
  searchInput.trigger("input");
  showDropdown();
  $(".fitersWrapper").addClass(`d-none`).removeClass(`d-block`);
  $(".selected-preference").removeClass("d-none").addClass(`d-block`);
  $(".pref-clicked").removeClass("w-50 mx-auto").addClass(`w-100`);
  $(".onFiterHide").addClass(`d-block`);
  $(".onFiterHide").removeClass(`d-none`);
  $(".displayFilters").addClass(`d-block`);
  $(".displayFilters").removeClass(`d-none`);
  $(".search-clicked").removeClass(`d-none`);
  $(".sport-members-search-filter-").removeClass("d-none").addClass("d-block");
});

searchInput.on("input", function () {
  const inputValue = $(this).val().toLowerCase();
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue)
  );

  searchDropdown.empty();

  const groupedOptions = groupOptions(filteredOptions);

  groupedOptions.forEach((group) => {
    const groupElement = $("<div>")
      .addClass("search-option-group")
      .text(group.groupTitle);
    searchDropdown.append(groupElement);

    group.options.forEach((option) => {
      const optionElement = $("<div>").addClass("search-option").text(option);
      optionElement.on("click", function () {
        searchInput.val(option);
        searchDropdown.empty().hide();
        $(".sport-members-search-filter-")
          .removeClass("btn-secondary")
          .addClass("btn-success");
        $(".search-button-plain")
          .removeClass("btn-success")
          .addClass("bg-dark-green3");
        $(".search-option").removeClass("selected");
        optionElement.addClass("selected");

        //my-sport-groups.html
        $("#searchButton")
          .removeClass("btn-light text-dark")
          .addClass("btn-success");
      });
      searchDropdown.append(optionElement);
    });
  });

  if (groupedOptions.length > 0) {
    showDropdown();
  } else {
    hideDropdown();
  }
});

$(document).on("click", function (e) {
  if (
    !searchDropdown.is(e.target) &&
    searchDropdown.has(e.target).length === 0 &&
    !searchInput.is(e.target)
  ) {
    hideDropdown();
  }
});

function showDropdown() {
  searchDropdown.show();
}

function hideDropdown() {
  searchDropdown.hide();
}

function groupOptions(options) {
  const grouped = [
    {
      groupTitle: "My Sports",
      options: options,
    },
    {
      groupTitle: "All Sports",
      options: additionalSports,
    },
  ];
  return grouped;
}

function hideL() {
  $(".claimStep0").removeClass("d-block").addClass("d-none");
  $(".claim-form").removeClass("d-none").addClass("d-block");
}

// Sample array data
const searchData = [
  {
    firstName: "Skyler",
    lastName: "Cuban",
    city: "City1",
    state: "State1",
    userimaga: "images/ss2.PNG",
    connected: true,
  },
  {
    firstName: "Scott",
    lastName: "Holley",
    businessName: "Business Name1",
    title: "Title1",
    city: "City2",
    state: "State2",
    userimaga: "images/ss4.PNG",
    connected: false,
  },
  { firstName: "Mark", lastName: "Macathy", connected: false },
  {
    firstName: "Timo",
    lastName: "bunjo",
    city: "City1",
    state: "State1",
    connected: false,
  },
];

// Function to generate and display search options
function showSearchOptions(input) {
  const searchOptions = document.getElementById("search-options");
  searchOptions.innerHTML = "";

  // Filter the data based on the input value
  const filteredData = searchData.filter((item) =>
    item.firstName.toLowerCase().includes(input.value.toLowerCase())
  );

  // Create and append search options based on filtered data
  filteredData.forEach((item) => {
    const option = document.createElement("div");
    option.className = "d-flex justify-content-between m-1 py-1";
    option.innerHTML = `
      <div class="d-flex justify-content-between w-100">
        <div class="d-flex">
          <i class="fa fa-search mx-2"></i>
          <div>
            <p class="mb-0"><small>${item.firstName} <strong>${
      item.lastName || item.businessName || item
    }</strong>${
      item.city ? ` .(${item.city}), (${item.state})` : ""
    }</small></p>
            <small>${item.connected ? "Connected" : "Not Connected"}</small>
          </div>
        </div>
        ${
          item.userimaga
            ? `<img src="${item.userimaga}" alt="" width="25" height="25"
                                    class="rounded-circle m-1 ml-auto">`
            : ``
        }
        
      </div>
    `;

    option.addEventListener("click", () => {
      input.value = item.firstName;
      searchOptions.style.display = "none";
    });

    searchOptions.appendChild(option);
  });

  if (filteredData.length > 0) {
    searchOptions.style.display = "block";
  } else {
    searchOptions.style.display = "none";
  }
}

const inputField = document.querySelector(".nosubmit");
inputField.addEventListener("input", () => showSearchOptions(inputField));

$(".select-time").click(function () {
  $(".select-time").addClass("btn-success").removeClass("btn-secondary");
  $(".select-time").html("Current");
  $(".select-time-current")
    .removeClass("btn-success")
    .addClass("btn-secondary");
  $(".select-time-current").html("Select");
});

$(".select-time-current").click(function () {
  $(".select-time-current")
    .addClass("btn-success")
    .removeClass("btn-secondary");
  $(".select-time-current").html("Current");
  $(".select-time").removeClass("btn-success").addClass("btn-secondary");
  $(".select-time").html("Select");
});

$(document).ready(function () {
  $(".sport-checkbox").change(function () {
    var selectedValues = [];
    $(".sport-checkbox:checked").each(function () {
      selectedValues.push($(this).val());
      $("#sport-select-btn")
        .removeClass("btn-secondary")
        .addClass("btn-success");
    });
    $("#sel1").val(selectedValues.join(", "));
  });
});

setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation1 = 30 * hr + min / 2; //converting current time
  min_rotation1 = 6 * min;
  sec_rotation1 = 6 * sec;

  hour1.style.transform = `rotate(${hr_rotation1}deg)`;
  minute1.style.transform = `rotate(${min_rotation1}deg)`;
  second1.style.transform = `rotate(${sec_rotation1}deg)`;

  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function updateClock() {
  const d = new Date();

  // 12-Hour Format
  let hours12 = d.getHours() % 12 || 12; // Use 12 when hours are 0
  const ampm = d.getHours() < 12 ? "AM" : "PM";
  const minutes12 = d.getMinutes();
  const seconds12 = d.getSeconds();

  document.getElementById(
    "currentTime12"
  ).textContent = `${hours12}:${minutes12} ${ampm}`;

  // 24-Hour Format
  const hours24 = ("0" + d.getHours()).slice(-2);
  const minutes24 = ("0" + d.getMinutes()).slice(-2);
  const seconds24 = ("0" + d.getSeconds()).slice(-2);

  document.getElementById(
    "currentTime24"
  ).textContent = `${hours24}:${minutes24}`;
}

// Initial call to display the time immediately
updateClock();

// Update the time every second
setInterval(updateClock, 1000);

function skillLevelSelect(text) {
  // let text = document.querySelector('.selected-sport').innerText;
  if (text === `Pickball`) {
    $(".Default").addClass("d-none").removeClass("d-block");
    $(".Golf").addClass("d-none").removeClass("d-block");
    $(".Tennis").addClass("d-none").removeClass("d-block");
    $(".Squash").addClass("d-none").removeClass("d-block");
    $(".Pickball").addClass("d-block").removeClass("d-none");
    $(".Default-Desk").addClass("d-none").removeClass("d-block");
    $(".Golf-Desk").addClass("d-none").removeClass("d-block");
    $(".Tennis-Desk").addClass("d-none").removeClass("d-block");
    $(".Squash-Desk").addClass("d-none").removeClass("d-block");
    $(".Pickball-Desk").addClass("d-block").removeClass("d-none");
    $("#price").addClass("d-none");
    $("#pickball-").addClass("d-block").removeClass("d-none");
    $("#golf-").removeClass("d-block").addClass("d-none");
    $("#tennis-").removeClass("d-block").addClass("d-none");
    $("#squash-").removeClass("d-block").addClass("d-none");

    $(".skill-default-check-golf-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check-tennis-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check-squash-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check").removeClass("d-flex").addClass("d-none");

    $("#price-desk").addClass("d-none");
  } else if (text === `Golf`) {
    $(".Default").addClass("d-none").removeClass("d-block");
    $(".Pickball").addClass("d-none").removeClass("d-block");
    $(".Tennis").addClass("d-none").removeClass("d-block");
    $(".Squash").addClass("d-none").removeClass("d-block");
    $(".Golf").addClass("d-block").removeClass("d-none");
    $(".Default-Desk").addClass("d-none").removeClass("d-block");
    $(".Pickball-Desk").addClass("d-none").removeClass("d-block");
    $(".Tennis-Desk").addClass("d-none").removeClass("d-block");
    $(".Squash-Desk").addClass("d-none").removeClass("d-block");
    $(".Golf-Desk").addClass("d-block").removeClass("d-none");
    $("#price").addClass("d-none");
    $("#golf-").addClass("d-block").removeClass("d-none");
    $("#pickball-").removeClass("d-block").addClass("d-none");
    $("#tennis-").removeClass("d-block").addClass("d-none");
    $("#squash-").removeClass("d-block").addClass("d-none");

    $(".skill-default-check-pickball-")
      .removeClass("d-flex")
      .addClass("d-none");
    $(".skill-default-check-tennis-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check-squash-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check").removeClass("d-flex").addClass("d-none");

    $("#price-desk").addClass("d-none");
  } else if (text === `Tennis`) {
    $(".Default").addClass("d-none").removeClass("d-block");
    $(".Pickball").addClass("d-none").removeClass("d-block");
    $(".Golf").addClass("d-none").removeClass("d-block");
    $(".Tennis").addClass("d-block").removeClass("d-none");
    $(".Squash").addClass("d-none").removeClass("d-block");
    $(".Default-Desk").addClass("d-none").removeClass("d-block");
    $(".Pickball-Desk").addClass("d-none").removeClass("d-block");
    $(".Golf-Desk").addClass("d-none").removeClass("d-block");
    $(".Tennis-Desk").addClass("d-block").removeClass("d-none");
    $(".Squash-Desk").addClass("d-none").removeClass("d-block");
    $("#price").addClass("d-none");
    $("#tennis-").addClass("d-block").removeClass("d-none");
    $("#golf-").removeClass("d-block").addClass("d-none");
    $("#pickball-").removeClass("d-block").addClass("d-none");
    $("#squash-").removeClass("d-block").addClass("d-none");

    $(".skill-default-check-golf-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check-pickball-")
      .removeClass("d-flex")
      .addClass("d-none");
    $(".skill-default-check-squash-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check").removeClass("d-flex").addClass("d-none");

    $("#price-desk").addClass("d-none");
  } else if (text === `Squash`) {
    $(".Default").addClass("d-none").removeClass("d-block");
    $(".Pickball").addClass("d-none").removeClass("d-block");
    $(".Golf").addClass("d-none").removeClass("d-block");
    $(".Tennis").addClass("d-none").removeClass("d-block");
    $(".Squash").addClass("d-block").removeClass("d-none");
    $(".Default-Desk").addClass("d-none").removeClass("d-block");
    $(".Pickball-Desk").addClass("d-none").removeClass("d-block");
    $(".Golf-Desk").addClass("d-none").removeClass("d-block");
    $(".Tennis-Desk").addClass("d-none").removeClass("d-block");
    $(".Squash-Desk").addClass("d-block").removeClass("d-none");
    $("#price").addClass("d-none");
    $("#squash-").addClass("d-block").removeClass("d-none");
    $("#golf-").removeClass("d-block").addClass("d-none");
    $("#tennis-").removeClass("d-block").addClass("d-none");
    $("#pickball-").removeClass("d-block").addClass("d-none");

    $(".skill-default-check-golf-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check-tennis-").removeClass("d-flex").addClass("d-none");
    $(".skill-default-check-pickball-")
      .removeClass("d-flex")
      .addClass("d-none");
    $(".skill-default-check").removeClass("d-flex").addClass("d-none");

    $("#price-desk").addClass("d-none");
  } else {
    $(".Default").removeClass("d-none").addClass("d-block");
    $(".Pickball").removeClass("d-block").addClass("d-none");
    $(".Golf").addClass("d-none").removeClass("d-block");
    $(".Tennis").addClass("d-none").removeClass("d-block");
    $(".Squash").addClass("d-none").removeClass("d-block");
    $(".Default-Desk").removeClass("d-none").addClass("d-block");
    $(".Pickball-Desk").removeClass("d-block").addClass("d-none");
    $(".Golf-Desk").addClass("d-none").removeClass("d-block");
    $(".Tennis-Desk").addClass("d-none").removeClass("d-block");
    $(".Squash-Desk").addClass("d-none").removeClass("d-block");
  }
}

