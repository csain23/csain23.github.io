Image Slider Maker README
=========================
ImageSliderMaker.com


Using in your website
---------------------

Please first make sure you have fully extracted the contents of the zip file.
In Windows, right-click on imageslidermaker.zip and select Extract All...

To get your slider working in your web page, you must add
my-slider.css, ism-2.2.min.js and the slide images to your project
directory and paste the markup (included below) into your HTML.

The directory structure of this package:

  imageslidermaker/
    README.txt
    example.html
    ism/
      css/
        my-slider.css
      js/
        ism-2.2.min.js
      image/
        slides/
          _u/1699544185661_90263.png
          _u/1699560322028_625479.png
          _u/1699560336205_45994.png
          _u/1699560350471_446212.png
          _u/1699560367414_438039.png

For a working example, open example.html in your web browser or
follow the instructions below to integrate the slider into your
project.


Step by step instructions
-------------------------

1. Paste the following into the head of your HTML file:

<link rel="stylesheet" href="ism/css/my-slider.css"/>
<script src="ism/js/ism-2.2.min.js"></script>


2. Paste this into the body of your HTML file (at the location where:
   you would like your slider to appear in the page):

<div class="ism-slider" id="my-slider">
  <ol>
    <li>
      <img src="ism/image/slides/_u/1699544185661_90263.png">
      <a class="ism-caption ism-caption-0" href="" target="_blank"><h2>Suzanne Collins</h2><br>              <p>The website of Suzanne Collins underwent a redesign with a primary emphasis on enhancing user experience. The key changes and improvements included elevating the site content above the natural breakpoint and grouping the books by series. These measures were taken to streamline the information and to ensure that the website is user-friendly and easy to navigate.</p></a>
    </li>
    <li>
      <img src="ism/image/slides/_u/1699560322028_625479.png">
      <a class="ism-caption ism-caption-0" href="www.linkhere.com" target="_blank"><h2>Bossier City Rentals</h2><br>                        <p>Bossier City Rentals, a new company based in Bossier City, Louisiana, required a website to inform its potential customers about the equipment available for rent. The website displayed the specifications of each item of equipment, making it easier for customers to choose the equipment that best suits their needs. Moreover, the website also allowed customers to reserve equipment online, providing them with added convenience.</p></a>
    </li>
    <li>
      <img src="ism/image/slides/_u/1699560336205_45994.png">
      <a class="ism-caption ism-caption-0" href="" target="_blank"><h2>318 Food Co.</h2><br>                        <p>318 Food Company is a popular food truck based in Shreveport and Bossier City, Louisiana. They offer an extensive menu with a range of options to choose from. Customers now have the option to place pre-orders on their new website. The site also features a weather forecast for the local area, keeping customers informed about whether the truck is operating on any given day.</p></a>
    </li>
    <li>
      <img src="ism/image/slides/_u/1699560350471_446212.png">
      <a class="ism-caption ism-caption-0" href="" target="_blank"><h2>Pixel Palace</h2><br>                        <p>The Pixel Palace is an outstanding retro arcade situated in downtown Boston, Massachusetts. It houses more than 100 restored arcade cabinets and pinball machines, offering affordable rates and a broad selection of games, menus, and party packages. The owner is also the author of a blog that reviews all the machines available at The Pixel Palace.</p></a>
    </li>
    <li>
      <img src="ism/image/slides/_u/1699560367414_438039.png">
      <a class="ism-caption ism-caption-0" href="" target="_blank"><h2>Taco Delite</h2><br>                        <p>For over 40 years, Taco Delite has been a favorite among families in Paris, TX. Now, the restaurant is bringing its services to the modern world with a brand new website. With an online ordering system in place, customers can easily place their orders online, making it more convenient and accessible for them. This move is expected to increase brand awareness, expand the customer base, and ultimately boost the restaurant's revenue.</p></a>
    </li>
  </ol>
</div>
<p class="ism-badge" id="my-slider-ism-badge"><a class="ism-link" href="http://imageslidermaker.com" rel="nofollow">generated with ISM</a></p>


3. Copy the ism/ directory into the root directory of your project.

   The css, js and image paths are relative, meaning the ism/
   directory should be in the same directory (path) as your HTML
   file containing the slider.


