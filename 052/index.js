// starting ring is made of 18 dots
// rings expand by +6 dots (18, 24, 30, 36, 42, 48, 54, 60, 66, 72)
// expands out to 10 rings
const rings = 10;

const viewBox = document.getElementById('view-box');

let r;
for (r = 1; r <= rings; r++ ){
    let ring = document.createElement('circle');
    ring.classList = 'ring-'+ r
    ring.setAttribute('cx', 150);
    ring.setAttribute('cy', 150);
    ring.setAttribute('r', 40+(r*10));

    viewBox.append(ring)
}