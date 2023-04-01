class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    isEmpty() {
        return this.rear === this.front;
    }
}

function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);

    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    const queue = new Queue();
    queue.enqueue(1);

    while (!queue.isEmpty()) {
        const src = queue.dequeue();
        for (const dest of graph[src]) {
            if (distance[dest] === 0) {
                queue.enqueue(dest);
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
