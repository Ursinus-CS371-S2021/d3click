let canvas = new Canvas2D();

function updateEdges() {
    canvas.clearLines();
    let P = canvas.getPoints();
    // As an example of processing points and drawing lines, draw
    // lines between all adjacent points in the order they were selected
    for (let i = 0; i < P.length-1; i++) {
        canvas.drawLine(P[i][0], P[i][1], P[i+1][0], P[i+1][1], [200, 0, 0]);
    }
}

function clearEdges() {
    canvas.clearLines();
}

function clearPoints() {
    canvas.clearPoints();
}
