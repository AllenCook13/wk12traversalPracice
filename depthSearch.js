//tree
function depthFirstSearch(root, target) {
    let stack = [root];
    while(stack.length) {
        let cur = stack.pop();
        if(cur.val === target) return cur;
        if(cur.left) {
            stack.push(cur.left);
        }
        if(cur.right) {
            stack.push(cur.right);
        }
    }
    return null;
}

//graph using adjacency list
function depthFirstSearch(node, target) {
    let stack = [node];
    let visited = new Set();
    while(stack.length) {
        let cur = stack.pop();
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