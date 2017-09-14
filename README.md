Tile Flipping Functionality
=============================

## Synopsis

Javascript code enabling developers to insert image tiles into a website, which
flip when clicked to reveal more information. Also included is functionality
enabling dropdown reveal of information.

## Code Example

This project combines a simple javascript function that adds and removes class "flipped" when clicked with css that flips the images around via the "transform" property when that class is added. 

```javascript
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
```
```css
  .image-box, .flipping-tile-content {
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transition: -webkit-transform 0.3s;
            transition: transform 0.3s;
  }
  .flipping-tile-content{
    -webkit-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }

  .flipping-tile.flipped .image-box{
    -webkit-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }
  .flipping-tile.flipped .flipping-tile-content{
    -webkit-transform: rotateY(0);
        -ms-transform: rotateY(0);
            transform: rotateY(0);
  }
  .image-box:hover img, .dropdown-tile:hover img{
    opacity: 1;
    -webkit-animation: flash 1.5s;
        -ms-animation: flash 1.5s;
    animation: flash 1.5s;
  }
```

## Motivation

I put together this functionality for a client, who wanted modern visual appeal while still containing a large amount of information on one page. 

## Dependencies

jQuery Core 3.2.1

## License

MIT License

Copyright (c) 2017 Jeff Bass Design & Development

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
