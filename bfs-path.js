function findNeighbors(node, matrix) {
    // Create an array to hold the valid neighbors
    let neighbors = [];
    [row, col] = node;

    // UP:
    // Identify the node above the current node, if it exists
    // Push that node into the new array
    if (row - 1 >= 0) {
        neighbors.push([row - 1, col])
    }

    // DOWN:
    // Identify the node below the current node, if it exists
    // Push that node into the new array
    if (row + 1 < matrix.length) {
        neighbors.push([row + 1, col])
    }

    // LEFT:
    // Identify the node to the left of the current node, if it exists
    // Push that node into the new array
    if (col - 1 >= 0) {
        neighbors.push([row, col - 1])
    }

    // RIGHT:
    // Identify the node to the right of the current node, if it exists
    // Push that node into the new array
    if (col + 1 < matrix[row].length) {
        neighbors.push([row, col + 1])
    }
    return neighbors;
    // Return the neighbors array
}


function bfsPath(matrix, startNode, endValue) {
    let queue = [startNode];
    let visited = new Set();
    visited.add(startNode.toString());
    let path = [];


    while (queue.length) {
        let currentPath = queue.shift();
        path.push(currentPath);

        // currentNode = currentPath[currentPath.length - 1];

        if (matrix[currentPath[0]][currentPath[1]] === endValue) return path;

        let neighbors = findNeighbors(currentPath, matrix)

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                queue.push(neighbor)
                visited.add(neighbor.toString())
            }
        })

    }
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1, 1], matrix1)) // Finds all 4 neighbors from an
// internal node (left, right, down, up)
// [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2, 2], 11)); // returns a single node if end
// // // value is located at start node
// // // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1, 2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 3 ] ]



// console.log(bfsPath(matrix1, [0, 0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
