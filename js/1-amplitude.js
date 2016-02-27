const WIDTH = 800;
const HEIGHT = 400;

var amplitude;

var radiusScale = d3.scale.linear()
    .domain([0, 1])
    .range([0, 200]);

function setup() {
    createCanvas(WIDTH, HEIGHT);
    audioFile.loop();
    amplitude = new p5.Amplitude(0.8);
}

function draw() {
    background(0);
    fill(255);

    var level = amplitude.getLevel();
    var radius = radiusScale(level);

    ellipseMode(RADIUS);
    ellipse(WIDTH / 2, HEIGHT / 2, radius, radius);
}
