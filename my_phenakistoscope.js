const SLICE_COUNT = 10;

function setup_pScope(pScope){
  // pScope.output_mode(STATIC_FRAME);
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("coin", "png");
  pScope.load_image("bat", "png");
  pScope.load_image_sequence("luckyCat", "png", 4);
  pScope.load_image_sequence("flog", "png", 2);
}

function setup_layers(pScope){

  new PLayer(null, '#1b263b');  //lets us draw the whole circle background, ignoring the boundaries
 
  let outerRing = new PLayer(outsideRing);
  outerRing.mode(RING);
  outerRing.set_boundary(950,1000);
 
  var bat = new PLayer(lucky_bat);
  bat.mode(RING);
  bat.set_boundary( 0, 950 );

  var flog = new PLayer(golden_flog);
      flog.mode( RING );
      flog.set_boundary( 600, 1000 );


  var coin2 = new PLayer(coins);
      coin2.mode( SWIRL(8) );
      coin2.set_boundary( 250, 700 );

  var cat = new PLayer(lucky_cats);
      // cat.mode( RING );
       cat.set_boundary( 100, 200 );

   var coin1 = new PLayer(coin);
}



function lucky_cats(x, y, animation, pScope){
   pScope.fill_background('#e76f51');
    scale(1);
    let xvalue = 0
    pScope.draw_image_from_sequence("luckyCat", xvalue, -250, animation.frame);
}

function coin(x,y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  scale(1.5);
  pScope.draw_image("coin" , 0, 0);
}

function golden_flog(x,y, animation, pScope) {
  scale(1);
  let xvalue = 0
  pScope.draw_image_from_sequence("flog", xvalue, -680, animation.frame);

}

function lucky_bat(x,y, animation, pScope){
  
  scale(1);
  let yValue = -750 - (animation.wave(1) *100);
  translate(0, yValue) 
  pScope.draw_image("bat", 245, 0);
}

function coins(x,y, animation, pScope){
  scale(animation.frame);
  fill('#ffb703');
  angleMode(DEGREES);
  arc(0,15,50,50, -65, 65, OPEN);
  arc(0,15,50,50, 20, 155, OPEN);
  arc(0,15,50,50, 115, 245, OPEN);
  arc(0,15,50,50, 200, 335, OPEN);
  fill('#ffffff');
  noFill();
  rect(-10, 5, 20, 20);

}

function outsideRing (x,y,animation,pScope){
  
  pScope.fill_background('#e63946');
}