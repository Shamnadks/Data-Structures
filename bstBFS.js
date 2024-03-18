class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null
    }
    insert(value){
        var newNode=new Node(value)
        if(this.root===null){
            this.root=newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value===current.value)return undefined;
            if(current.value>value){
                if(current.left===null){
                    current.left=newNode
                    return this
                }
                current=current.left;
            }else{
                if(current.right===null){
                    current.right=newNode;
                    return this
                }
                current=current.right;
            }
        }
    }
    BFS(){
        var node= this.root,
        data=[],
        Queue=[]
        Queue.push(node);
        while(Queue.length){
            node=Queue.shift()
            data.push(node)
            if(node.left)Queue.push(node.left);
            if(node.right)Queue.push(node.right);       
         }
         return data;
    }
}