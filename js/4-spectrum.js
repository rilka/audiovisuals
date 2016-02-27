const NUM_BINS = 32;

var colorScale = d3.scale.linear()
    .domain([0, NUM_BINS / 2, NUM_BINS])
    .range(['#FF4E50', '#FC913A', '#F9D423']);

function setup() {
    createCanvas(800, 400);
    audioFile.loop();
    analyzer = new p5.FFT(0.7, NUM_BINS);
    analyzer.setInput(audioFile);
}

function draw() {
    var spectrum = analyzer.analyze();

    background(0);
    rectMode(CORNERS);
    noStroke();
    for (var i = 0; i < NUM_BINS; i++) {
        var binFill = colorScale(i);
        fill(binFill);

        var barWidth = (width / spectrum.length);
        var barHeight = spectrum[i];

        // Upper-left corner
        var rectStartX = barWidth * i;
        var rectStartY = height - barHeight;

        // Bottom-right corner
        var rectEndX = (barWidth * i) + (barWidth - 10);
        var rectEndY = height;

        rect(rectStartX, rectStartY, rectEndX, rectEndY);
    }
}
