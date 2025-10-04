function ellipseContainsPoint(f0, f1, l, p) {
    function getDistance(a, b) {
        return Math.hypot(b.x - a.x, b.y - a.y);
    }
    const d0 = getDistance(p, f0);
    const d1 = getDistance(p, f1);
    return d0 + d1 <= l;
}

console.log(ellipseContainsPoint({ x: 0, y: 0 }, { x: 0, y: 0 }, 2, { x: 0, y: 0 }));
console.log(ellipseContainsPoint({ x: 0, y: 0 }, { x: 0, y: 0 }, 2, { x: 1, y: 1 }));
