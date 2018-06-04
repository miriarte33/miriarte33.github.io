$(function() {

  $('.button').css('cursor', 'pointer'); //change cursor


  $(".menuIcon").on("click", function() { //when burger icon is clicks
    $("nav").toggleClass("open"); //toggle that class
    $(".hideMe").toggleClass("open");
  });

  $("#clicker").on("click", function() { //when burger icon is clicks
    $(".hideMe").toggleClass("open"); //toggle that class
  });

//Learned these from https://stackoverflow.com/questions/6677035/jquery-scroll-to-element
//Not my code, used this snippet to learn to do cool smooth scrolling animation
  $("#aboutMe").click(function() {
      $("html, body").animate({
        scrollTop: $("#Label1").offset().top
      }, 1000); //Pass what to do on animate, and how long to do it (in miliseconds)
  });

  $("#projects").click(function() {
      $("html, body").animate({
        scrollTop: $("#Label2").offset().top
      }, 1000); //Pass what to do on animate, and how long to do it (in miliseconds)
  });

  $("#education").click(function() {
      $("html, body").animate({
        scrollTop: $("#Label3").offset().top
      }, 1000); //Pass what to do on animate, and how long to do it (in miliseconds)
  });

  $("#experience").click(function() {
      $("html, body").animate({
        scrollTop: $("#Label4").offset().top
      }, 1000); //Pass what to do on animate, and how long to do it (in miliseconds)
  });

  $("#volunteering").click(function() {
      $("html, body").animate({
        scrollTop: $("#Label5").offset().top
      }, 1000); //Pass what to do on animate, and how long to do it (in miliseconds)
  });
});
