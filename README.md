## 3 Interior Design Challenge
- the use of position:fixed it is just an absolute but with document as a parent 
- right now I have a serious problem with modal navbar on mobile, when closing the navbar from "x" then changing the size of the screen the navbar will still be hidden even on large screen. It's due it was hidden with javascript.
- this is a workaround but I don't know if it's good https://css-tricks.com/working-with-javascript-media-queries/


## 4 Recipe Page
- Some font like Playfair Display need custom padding to align vertically in middle.
- This project promise nice upgrade when I convert this single page to fully fullstack application, it will contain the followin: 
  - web scrapping for the recipes from the source website
  - nextjs react application to consume and show these meals
  - also complete the ui/ux design of this website


## 5 My gallery 
- it's playing with grid and css selectors 
- just curios to see another solutions

## 6 Checkout Pages 
- There is many reusable component in here. What is the best way to deal with it without the full power of frameworks?
- I used reefjs which provide simple utility function for creating and managing ui state elements. However I can't get onclick event to work properly
- the dropdown menu is tough work either in styling or getting and getting the current selected value.
- When I'm doing form validation I really appreciate what something like formik to offer to me. 
- I used simple html5 validation with customization but I couldn't customize the style for this message.


## 7 Edie homepage
- I saw a wise reason for not putting margin or padding on main body.
- In the ourteam section when using grid I was getting all image with same width which wasn't in the design. The solution is simple don't set max-width to 100% leave it to default. It result in horizontal mobil scroll so the problem isn't solved till now.
- The solution to this dilemma is to use javascript. With matchMedia and naturalWidth It can achive the trick easiy. 
- The hero image change it's content based on the current mediaquery. I was able to achive this with clibpath and negative margin.


## 8 Portfolio
- the use of `grid-column : 1 / -1` is neat remove redudent media query.
- I created a container element inspired by -Ahem! and stole code from- bootstrap
- The power of creating components.
- Overall it's a good exercise on grid. 