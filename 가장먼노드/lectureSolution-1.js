function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);

    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    const queue = [1];

    while (queue.length > 0) {
        const src = queue.shift();
        for (const dest of graph[src]) {
            if (distance[dest] === 0) {
                queue.push(dest);
                distance[dest] = distance[src] + 1;
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter((item) => item === max).length;
}

console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ])
);

/** 
[
    [],
    [ 3, 2 ],
    [ 3, 1, 4, 5 ],
    [ 6, 4, 2, 1 ],
    [ 3, 2 ],
    [ 2 ],
    [ 3 ]
]

*/
