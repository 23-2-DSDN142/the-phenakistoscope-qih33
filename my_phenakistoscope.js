const SLICE_COUNT = 10;

function setup_pScope(pScope){
    // pScope.output_mode(OUTPUT_GIF(1000));
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.draw_slits(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("coin", "png");
  pScope.load_image("luckyCat", "png");

}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  // var layer2 = new PLayer(lucky_cats);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(coins);
   layer1.mode( SWIRL(5) );
  // layer1.set_boundary( 200, 1000 );
}

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
   pScope.draw_image("luckyCat" , x, y);


  // fill('#eae2b7');
  // arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  // fill('#ffb703');
  // // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw
  // ellipse(-10, -300-animation.wave()*50,40,40);


}

function coins(x,y, animation, pScope){
  pScope.draw_image("coin" , 0, 0);

}
