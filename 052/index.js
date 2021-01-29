// starting ring is made of 18 dots
// rings expand by +6 dots (18, 24, 30, 36, 42, 48, 54, 60, 66, 72)
// expands out to 10 rings
let rings = 10;
let dots = [18, 24, 30, 36, 42, 48, 54, 60, 66, 72]

let center = document.getElementById('center');

let r;
for (r = 1; r <= rings; r++ ){
    let ring = document.createElement('div');
    ring.id = 'ring'
    ring.className = 'ring ring' + r;

    // let d;
    // for(d = 1; d <= dots; d++){
    // let dot = document.createElement('div');
    // dot.className = 'dot dot' + d;

    center.append(ring)
}
