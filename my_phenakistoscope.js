const SLICE_COUNT = 10;

function setup_pScope(pScope){
    // pScope.output_mode(OUTPUT_GIF(1000));
  pScope.output_mode( ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("coin", "png");
  pScope.load_image("luckyCat", "png");
  pScope.load_image("pig", "png");
}

function setup_layers(pScope){

  new PLayer(null, '#ff0054');  //lets us draw the whole circle background, ignoring the boundaries

  var piggy = new PLayer(piggy_bank);
      piggy.mode( RING );
      piggy.set_boundary( 500, 800 );

  var cat = new PLayer(lucky_cats);
      cat.mode( RING );
      cat.set_boundary( 200, 200 );

   var coin1 = new PLayer(coin);
  //  layer1.mode( SWIRL(5) );
  // layer1.set_boundary( 200, 1000 );

//   var coin2 = new Player(coins);
//       coin2.mode( SWIRL(5) );
//       coin2.set_boundary( 200, 800 );
// }

function faces(x, y, animation, pScope){

  // pScope.draw_image("coin" , x, y);
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function lucky_cats(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  scale(animation.wave(0.5));
   
  //  fill('#eae2b7');
  //  arc(x,y,1000,1000,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
   pScope.draw_image("luckyCat" , 200, 400);
  // fill('#ffb703');
  // // // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw
  // ellipse(-10, -300-animation.wave()*50,40,40);


}

function coin(x,y, animation, pScope){
  pScope.draw_image("coin" , 0, 0);
}

function piggy_bank(x,y, animation, pScope) {
  scale(animation.wave(0.4));
  pScope.draw_image("pig" , 500, 800);
}

function coins(x,y, animation, pScope){
  scale(animation.frame*2);
  fill('#ffb703');
  ellipse(0,0,50,50);
}