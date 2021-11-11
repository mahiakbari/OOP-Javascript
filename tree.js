class Node {
    constructor(value){
        this.data = value
        this.left = null;
        this.right = null;
    }
}
let root;
let path1 = [];
let path2 = [];

function findLCA(n1,n2){
    path1 = [];
    path2 = [];
    return findLCAInternal(root,n1,n2) 
}

function findLCAInternal(root, n1, n2){
    if(!findPath(root,n1,path1) || !findPath(root, n2 , path2)){
        return -1
    }
    console.log(path1, path2)
    let i;
    for(i=0; i< path1.length && i< path2.length ;i++){
        console.log(path1[i],path2[i])
        if(path1[i] != path2[i]){
            break;
        }
    }
    return path1[i-1]
}
function findPath(root,n, path){
    if( root == null){
        return false;
    }
    path.push(root.data);
    if(root.data == n){
        return true
    }
    if(root.left != null && findPath(root.left,n,path)){
        return true
    }
    if(root.right != null && findPath(root.right,n,path)){
        return true
    }

    path.pop();
    return false;
}


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(root);
console.log( findLCA(4,5))
