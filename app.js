console.log('Hello World')
//MOVEMENT AND ANTIMATIONS

const  card  =  document.querySelector('.card');
const  container  =  document.querySelector('.container');

//grab items to animate // optional
const  title  =  document.querySelector('.title');
const  sneaker  =  document.querySelector('.sneaker img');
const  purchase  =  document.querySelector('.purchase button');
const  description  =  document.querySelector('.info h3');
const  sizes  =  document.querySelector('.sizes');


//Moving animation event
container.addEventListener('mousemove',   (e)  =>  {    
	let  xAxis  =   (window.innerWidth  /  2   -  e.pageX ) /  25;    
	let  yAxis  =   (window.innerHeight  /  2   -  e.pageY)  /  25;    
	card.style.transform  =  `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// animate in 
container.addEventListener('mouseenter', e => {    card.style.transition = 'none';
     //Pop Out    
     title.style.transform = 'translateZ(75px)';    
     sneaker.style.transform = 'translateZ(100px) rotateZ(-10deg)';    
     // description.style.transform = 'translateZ(75px)';    
     // sizes.style.transform = 'translateZ(120px)';    
     // purchase.style.transform = 'translateZ(90px)';    
    });


     //animate out

container.addEventListener('mouseleave',  e  =>  {    
	card.style.transition  =  'all 0.5s ease';    
    card.style.transform  =  `rotateY(0deg) rotateX(0deg)`;     
    
    //pop back    
    title.style.transform = 'none';    
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';    
    //description.style.transform = 'translateZ(0px)';    
    // sizes.style.transform = 'translateZ(0px)';    
    // purchase.style.transform = 'translateZ(0px)';

});