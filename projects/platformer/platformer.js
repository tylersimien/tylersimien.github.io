$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(150, 629, 27, 32)
    createPlatform(250, 529, 27, 32)
    createPlatform(350, 429, 27, 32)
    createPlatform(450, 329, 27, 32)
    createPlatform(550, 000, 27, 200)
    createPlatform(550, 330, 27, 500)
    createPlatform(650, 329, 27, 32)
    createPlatform(800, 350, 147, 32)
    createPlatform(900, 80, 47, 990)
    createPlatform(830, 257, 20, 32)
    createPlatform(830, 657, 5, 32)
    createPlatform(730, 557, 5, 32)
    createPlatform(630, 457, 5, 32)
    createPlatform(745, 157, 20, 32)
    createPlatform(872, 100, 29, 20)
    createPlatform(994, 150, 55, 37)
    createPlatform(1042, 250, 45, 37)
    createPlatform(1152, 350, 45, 37)
    createPlatform(1262, 450, 45, 37)
    createPlatform(1382, 550, 45, 37)
    createPlatform(1182, 850, 45, 37)


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('diamond', 1072, 130, 0, 3)
    createCollectable('diamond', 250, 510, 0, 3)
    createCollectable('max', 800, 330, 0, 3)
    createCollectable('max',800, 700, -8, 3)
    createCollectable('kennedi',1000, 700, 0, 3)
    createCollectable('kennedi',1282, 379, 0, 3)
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('left' , 500, 1500, 10,10)
    createCannon('top' , 500, 1500, 10,15)
    createCannon('right' , 200, 1500, 10,19)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
