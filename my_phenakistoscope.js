const SLICE_COUNT = 10;

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
  pScope.load_image_sequence("luckyCat", "png", 3);
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



function lucky_cats(x, y, animation, pScope){
  
    scale(1);
    let xvalue = 0
    pScope.draw_image_from_sequence("luckyCat", xvalue, -250, animation.frame);
}

function coin(x,y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  //  fill('#e4c1f9');
  //  arc(x,y,200,200,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  scale(1.5);
  pScope.draw_image("coin" , 0, 0);
}

function piggy_bank(x,y, animation, pScope) {
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
   fill('#edf2f4');
   arc(x,y,1400,1400,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
 
  scale(1)

  // let yValue = -750 - (animation.wave(1) *200);
  let yValue = -750 - (animation.wave(1) *100);
  //console.log(yValue)
  translate(0, yValue) 
  //rotate(180)
  pScope.draw_image("pig", 0, 0);
  fill('#ffb703');
  ellipse(-20,800,150,150);
  // fill('#ffffff');
  // rect(-10, -800, 20, 20);
}

function coins(x,y, animation, pScope){
 
  scale(animation.frame);
  
  fill('#ffb703');
  ellipse(0,15,50,50);
  fill('#ffffff');
  rect(-10, 5, 20, 20);

}