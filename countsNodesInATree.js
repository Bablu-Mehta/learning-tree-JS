class TreeNode{
    constructor(value){
        this.value = value;
        this.children = []
    }

    addChild(node){
        this.children.push(node);
    }
}

function countNode(node) {
    if(!node) return 0;
    let count = 1;
    for(let child of node.children){
        count += countNode(child);
    }
    return count;
}

// Creating tree
const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");

root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);

console.log("Count of nodes: ", countNode(root));