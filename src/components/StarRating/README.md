We have to achieve the star rating component and also if we hovers then till then we can see the rating color . We will take a state variable selectedCount.
We use &#9773 for star in HTML
We are using 5 span elements as star , here we have used array of 5 elements to render the stars.
when we click on any star we change the state varibale to that value(index+1)
then we conditionally apply style of color yellow till that color.
For hover , we take another state variable so that on mouseover and onmouseout state can be handled and it does not effect the state which we are using on click.