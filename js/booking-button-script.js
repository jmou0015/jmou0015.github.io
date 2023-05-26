// script to toggle visibility of quick booking form
// jason

// find hook for button
// enable visibility of booking form on click
$(".quick-booking-button").click(showBookingForm);

// find hook for close button
// disable visibility of booking form on click
$(".booking-form-close-button").click(hideBookingForm);

function showBookingForm()
{
  $(".booking-form-overlay").show(300);

}

function hideBookingForm()
{
  $(".booking-form-overlay").hide(300);
}

// hide booking form on page load
  $(".booking-form-overlay").hide();