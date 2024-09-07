// ❓ DESCRIPTION:
// In this kata, you are given the sum of the number of vertices, edges, and faces of an
// N-sided prism, which is equal to s. Your task is to determine and return a tuple containing four values: the number of vertices, edges,
// faces, and the number of sides of the base of the prism.
// A prism is a polyhedron with two parallel, congruent bases and rectangular lateral faces connecting the corresponding sides of the bases.
// For an N-sided prism:
// Vertices (V): The total number of vertices.
// Edges (E): The total number of edges.
// Faces (F): The total number of faces.
// Base sides (B): The number of sides of the base of the prism.
//
// ✅ SOLUTION:
function prismProperties(s) {
    let b = (s - 2) / 6
    let v = 2 * b;
    let e = 3 * b;
    let f = b + 2;
    return [v, e, f, b];
}

console.log(prismProperties(26));
console.log(prismProperties(44));
console.log(prismProperties(74));
console.log(prismProperties(32));