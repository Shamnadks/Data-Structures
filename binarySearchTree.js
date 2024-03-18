class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


class BST{
    constructor(){
        this.root=null;
    }
    Insert(value){
        let newNode =new Node(value)
        if(this.root===null){
            this.root=newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value===current.value)return undefined;
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this
                }
                current=current.left
            }else{
                if(current.right===null){
                    current.right=newNode;
                    return this;
                }
                current=current.right;
            }
        }
    }
    contain(value){ 
        if(this.root===null)return false;
        var current=this.root,
        found=false;
        while(current && !found){
            if(value<current.value){
                current=current.left;
            }else if(value>current.value){
                current=current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node=this.root,
        data=[],
        Queue=[]
        Queue.push(node)
        while(Queue.length){
            node=Queue.shift()
            data.push(node)
            if(node.left)Queue.push(node.left)
            if(node.right)Queue.push(node.right)
        }
        return data;
    }
    DFSPreOrder(){
        var data=[]
        function traverse(node){
            data.push(node)
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
    DFSPostOrder(){
        var data=[]
        function traverse(node){
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
            data.push(node)
        }
        traverse(this.root)
        return data;
    }   
    DFSInOrder(){
        var data=[]
        function traverse(node){
            if(node.left)traverse(node.left)
            data.push(node)
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
    
}

var tree = new BST();
tree.Insert(10)
tree.Insert(6)
tree.Insert(15)
tree.Insert(3)

tree.DFSInOrder()   
// [Node { value: 3, left: null, right: null },
//   Node { value: 6, left: null, right: null },
//   Node { value: 10, left: null, right: null },
//   Node { value: 15, left: null, right: null }]
tree.DFSPreOrder()
// [Node { value: 10, left: null, right: null },
//   Node { value: 6, left: null, right: null },
//   Node { value: 3, left: null, right: null },
//   Node { value: 15, left: null, right: null }]
tree.DFSPostOrder()
// [Node { value: 3, left: null, right: null },
//   Node { value: 6, left: null, right: null },
//   Node { value: 15, left: null, right: null },
//   Node { value: 10, left: null, right: null }]


