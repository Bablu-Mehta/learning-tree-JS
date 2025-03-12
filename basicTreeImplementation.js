class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    addChildren(node){
        this.children.push(node);
    }
}

// Creating nodes
const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");


// Building the tree
root.addChildren(nodeB);
root.addChildren(nodeC);
nodeB.addChildren(nodeD);
nodeB.addChildren(nodeE);
nodeC.addChildren(nodeF);

console.log(root);  // Displays the tree structure