document.addEventListener('DOMContentLoaded', function() {
       const genButton = document.getElementById('button');
       
       genButton.addEventListener('click', generateCircle);
   });
   
   function generateCircle() {
       // array of color strings
       let colorsArray = ['orange', 'purple', 'yellow', 'blue', 'yellow', 'white', 'pink', 'red', 'brown', 'black', 'green'];
       // choose a random color from colorsArray
       let color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
     
       
       // circle style
       const circle = document.createElement('div'); 
       circle.style.width = '1.25em';
       circle.style.height = '1.25em';
       circle.style.backgroundColor = color;
       circle.style.borderRadius = '50%';
       circle.style.position = 'absolute';
       circle.style.top = Math.floor(Math.random() * 100) + '%';
       circle.style.left = Math.floor(Math.random() * 100) + '%';
       circle.style.right = Math.floor(Math.random() * 100) + '%';
       circle.style.bottom = Math.floor(Math.random() * 100) + '%';

       
       
       // append
       document.querySelector('.container').appendChild(circle);
   }







