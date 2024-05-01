function breadthFirstSearch(root, target) {
    let que = [root];
    while(que.length) {
        let cur = que.shift();
        if(cur.val === target) return cur;
        if(cur.left) {
            que.push(cur.left);
        }
        if(cur.right) {
            que.push(cur.right);
        }
    }
    return null;
}

//graph using an adjacency list
function breadthFirstSearch(node, target) {
    let que = [node];
    let visited = new Set();
    while(stack.length) {
        let cur = stack.shift();
        if(!visited.has(cur)) {
            visited.add(cur);
            if(cur.val === target) return cur;
        }
        for(let child of adjList[cur]) {
            stack.push(child);
        }
    }
    return null;
}