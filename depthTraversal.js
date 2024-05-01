//tree
function depthFirstTrav(root) {
    let stack = [root];
    while(stack.length) {
        let cur = stack.pop();
        console.log(cur.val);
        if(cur.left) {
            stack.push(cur.left);
        }
        if(cur.right) {
            stack.push(cur.right);
        }
    }
}

//graph using adjacency list
function depthFirstTrav(node) {
    let stack = [node];
    let visited = new Set();
    while(stack.length) {
        let cur = stack.pop();
        if(!visited.has(cur)) {
            visited.add(cur);
            console.log(cur.val);
        }
        for(let child of adjList[cur]) {
            stack.push(child);
        }
    }
}