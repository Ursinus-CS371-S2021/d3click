let canvas = new Canvas2D();

function updateEdges() {
    canvas.clearLines();
    let P = canvas.getPoints();
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
