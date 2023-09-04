const SLICE_COUNT = 6;

function setup_pScope(pScope){
    // pScope.output_mode(OUTPUT_GIF(1000));
  // pScope.output_mode(STATIC_FRAME);
  pScope.output_mode(ANIMATED_DISK);
//  pScope.output_mode(ANIMATED_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("coin", "png");
  pScope.load_image("pig", "png");
  pScope.draw_image_from_sequence("luckyCat", "png", 2);
}

function setup_layers(pScope){

  new PLayer(null, '#ef233c');  //lets us draw the whole circle background, ignoring the boundaries
 
  var piggy = new PLayer(piggy_bank);
       piggy.mode( RING );
     piggy.set_boundary( 600, 1000 );

  

  var coin2 = new PLayer(coins);
      coin2.mode( SWIRL(8) );
      coin2.set_boundary( 250, 700 );

  var cat = new PLayer(lucky_cats);
      // cat.mode( RING );
       cat.set_boundary( 100, 250 );

   var coin1 = new PLayer(coin);
  //  layer1.mode( SWIRL(5) );
  // layer1.set_boundary( 200, 1000 );
}

// function faces(x, y, animation, pScope){

//   // pScope.draw_image("coin" , x, y);
  
//   scale(animation.frame*2);

//   ellipse(0,0,50,50); // draw head
//   fill(30);
//   ellipse(-10,-10,10,10); //draw eye
//   ellipse(10,-10,10,10); // draw eye
//   arc(0,10,20,10,0,180); // draw mouth

// }

function lucky_cats(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  // fill('#ffffff');
  //  arc(x,y,600,600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
   //scale(animation.wave(0.5));
   scale(0.8);
   //let xvalue = animation.frame * 50
   let xvalue = 0
    // pScope.draw_image("luckyCat" , xvalue, -180);
    pScope.draw_image_from_sequence("luckyCat", xvalue, -180, animation.frame);
}

function coin(x,y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  //  fill('#e4c1f9');
  //  arc(x,y,200,200,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  
  pScope.draw_image("coin" , 0, 0);
}

function piggy_bank(x,y, animation, pScope) {
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
   fill('#edf2f4');
   arc(x,y,1400,1400,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  //scale(animation.wave(0.4));
 
  scale(1)

  let yValue = -750 - (animation.wave(1) *200);
  //console.log(yValue)
  translate(0, yValue) 
  //rotate(180)
  pScope.draw_image("pig", 0, 0);
}

function coins(x,y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
   // draws "pizza
  scale(animation.frame);
  
  fill('#ffb703');
  ellipse(0,15,50,50);
  fill('#ffffff');
  rect(-10, 5, 20, 20);

}