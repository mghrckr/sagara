let stars = '';
let numStars = 6;

for (let i = 0; i < numStars; i++) {
    if (i === 0 || i === 1 ) {
        stars += '*';
    } else {
        stars += '**';
    }
    console.log(stars);
}
