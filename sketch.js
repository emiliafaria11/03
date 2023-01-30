
let gIteration = 0;
let gRotationAngle = 76.0 / 55
let gNum = 0;

const WIDTH = 1430;
const HEIGHT =855;

function setup() {

  createCanvas( windowWidth,windowHeight );
  colorMode( HSB, 100 );
  background( "#90A959" );

}

function draw() {
  
  translate( WIDTH/2, HEIGHT/2);
  fill( "#F3B61F" );
  strokeWeight(0.1);
  stroke("#F3B61F");
  drawFermatSpiral( gIteration, gRotationAngle );
   gIteration++;

}

const drawFermatSpiral = ( iteration, angleRotation ) => {

  const scalar = 30;

  const theta = 5 * Math.PI * gRotationAngle * gIteration;
  const vectorV = p5.Vector.fromAngle( theta );
  vectorV.mult( scalar * Math.sqrt( gIteration ) );
  ellipse( vectorV.x, vectorV.y, scalar + scalar );
}

const setSpiralMode = ( mode ) => {

  gMode = mode;
  if( mode === MODE_1 ){
    gRotationAngle = 76.0 / 55;
  }else if( mode === MODE_2 ){
    gRotationAngle = Math.sqrt(5);
  }else if( mode === MODE_3 ){
    gNum = getSliderNumValue();
    gRotationAngle = 1 / gNum;
    console.log( 'num: ' + gNum  );
  }else if( mode === MODE_4 ){
    gRotationAngle = ( 1 + Math.sqrt(5) ) / 2;
  }else{
    gRotationAngle = Math.PI;
  }
    
  }
  //background( 'black' );
  gIteration = 0;
