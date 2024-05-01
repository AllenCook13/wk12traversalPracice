//tree
function breadthFirstTrav(root) {
    let que = [root];
    while(que.length) {
        let cur = que.shift();
        console.log(cur.val);
        if(cur.left) {
            que.push(cur.left);
        }
        if(cur.right) {
            que.push(cur.right);
        }
    }
}

//graph using an adjacency list
function breadthFirstTrav(node) {
    let que = [node];
    let visited = new Set();
    while(stack.length) {
        let cur = stack.shift();
        if(!visited.has(cur)) {
            visited.add(cur);
            console.log(cur.val);
        }
        for(let child of adjList[cur]) {
            stack.push(child);
        }
    }
}