let canvas = new Canvas2D();

function updateEdges() {
    canvas.clearLines();
    let PX = canvas.getPoints("X");
    // As an example of processing points and drawing lines, draw
    // lines between all adjacent points in the order they were selected
    for (let i = 0; i < PX.length-1; i++) {
        canvas.drawLine(PX[i][0], PX[i][1], PX[i+1][0], PX[i+1][1], [200, 0, 0]);
    }

    let PY = canvas.getPoints("Y");
    // As an example of processing points and drawing lines, draw
    // lines between all adjacent points in the order they were selected
    for (let i = 0; i < PY.length-1; i++) {
        canvas.drawLine(PY[i][0], PY[i][1], PY[i+1][0], PY[i+1][1], [200, 200, 0]);
    }
}

function clearEdges() {
    canvas.clearLines();
}

function clearPoints() {
    canvas.clearPoints();
}

function selectX() {
    canvas.which = "X";
    document.getElementById("selectX").style["background-color"] = "red";
    document.getElementById("selectY").style["background-color"] = "gray";
}

function selectY() {
    canvas.which = "Y";
    document.getElementById("selectX").style["background-color"] = "gray";
    document.getElementById("selectY").style["background-color"] = "red";
}

selectX();