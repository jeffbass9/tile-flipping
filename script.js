//The following surrounding function is so that the $ will work, as you usually have to sub in the word "$" to get custom jQuery code to work with Wordpress
// (function($){

//Keep all blog category posts hidden when the page is first loaded
$(document).ready(function(){
  $(".blog-category-1").hide();
  $(".blog-category-2").hide();
  $(".blog-category-3").hide();
});

//Hide other categories when category tiles are clicked and corresponding dropdowns are revealed
$(".dropdown-tile-1").click(function(){
  $(".blog-category-1").slideToggle("fast");
  $(".blog-category-2").hide();
  $(".blog-category-3").hide();
});
$(".dropdown-tile-2").click(function(){
  $(".blog-category-2").slideToggle("fast");
  $(".blog-category-1").hide();
  $(".blog-category-3").hide();
});
$(".dropdown-tile-3").click(function(){
  $(".blog-category-3").slideToggle("fast");
  $(".blog-category-1").hide();
  $(".blog-category-2").hide();
});

//Flipping tile functionality

  (function() {
  var tiles = $(".flipping-tile");
  var length = tiles.length;
  for (var i  = 0; i < length; i++) {
    var tile = tiles[i];
    clickListener(tile);
  }
  //original function
  function clickListener(tile) {
    tile.addEventListener( "click", function() {
      var classes = this.classList;
      classes.contains("flipped") === true ? classes.remove("flipped") : classes.add("flipped");
      $(this).find("h3").toggle();
    });
  }
})();

//Viewport specific functionality
var notMobile = window.matchMedia("(min-width: 789px)");

if(notMobile.matches){
    //Home page dropdown blog post functionality:
    $('.dropdown-tile').click(function(){
      /* If the tile has been clicked once, turn the class
      indicating so off, and return all tiles to default state */
      if($(this).hasClass('clicked-once')){
        $(this).removeClass('clicked-once');
        $('.dropdown-tile').each(function(){
          $(this).find('img').removeClass('desaturate');
          $(this).find('h3').removeClass('darken-text');
        });
      }

      /*If the tile has not been clicked an odd number of times, add the class
      that indicates it has now, remove the darkening classes
      from the current tile, and give the other tiles darkening classes */
      else{
        $(this).addClass('clicked-once');
        $(this).find('img').removeClass('desaturate');
        $(this).find('h3').removeClass('darken-text');

        $('.dropdown-tile').not(this).each(function(){
            $(this).removeClass('clicked-once');
            $(this).find('img').addClass('desaturate');
            $(this).find('h3').addClass('darken-text');
        });
      }
    });
}
else{
      //Enable the blog categories to drop down below the clicked tile on mobile views
      $('.blog-category-1').insertAfter('.dropdown-tile-1');
      $('.blog-category-2').insertAfter('.dropdown-tile-2');
      $('.blog-category-3').insertAfter('.dropdown-tile-3');

      //Hide the navigation menu and the flipping tile content on mobile views
      $(".flipping-tile-content").hide();

      //Enable the dropdown functionality on all tiles that flip over on larger views
      $(".flipping-tile").click(function(){
        $(this).find(".flipping-tile-content").slideToggle("fast");
      });
}
//End jQuery - Wordpress compatibility function
// })(jQuery );
