// Based on "bouncing-dvd-logo" by "AlessioMaddaluno"
// https://github.com/AlessioMaddaluno/bouncing-dvd-logo


// Sets re-draw timing.
let timeoutSpeed = 20;

// Create a canvas context to draw the logo on.
let canvas = document.getElementById("canvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");;

// Build the logo object.
let logo = 
{
    x: 400,
    y: 400,
    xspeed: 3,
    yspeed: 3,
	scale: 0.5,
    img: new Image()
};
 
// Sets the logo source and begins the animation.
(function main(){
    logo.img.src = 'resources/shadowmask_icon_minimal.png';
    animate();
})();

// Draws the logo, and moves it according to the logo's speed attribute.
function animate() {
    setTimeout(() => {;
        // Draw logo.
        ctx.drawImage(logo.img, logo.x, logo.y, logo.img.width*logo.scale, logo.img.height*logo.scale);
        // Move the logo
        logo.x+=logo.xspeed;
        logo.y+=logo.yspeed;
        // Check for collision 
        checkHitBox();
        animate();   
    }, timeoutSpeed)
}

// Check for border collision
function checkHitBox(){
    if(logo.x+logo.img.width*logo.scale >= canvas.width || logo.x <= 0){
        logo.xspeed *= -1;
    }
        
    if(logo.y+logo.img.height*logo.scale >= canvas.height || logo.y <= 0){
        logo.yspeed *= -1;
    }    
}
