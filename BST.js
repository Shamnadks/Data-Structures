class Node{
    constructor(value)
    {
        this.value=value;
    }
}
class bst{
    constructor()
    {
        this.root=null
    }
    add(x)
    {
        var obj =new Node(x)
        if(!this.root)
        {
            this.root=obj
        }
        else
        {
            var current=this.root
         while(true)
         {
            if(x<current.value)
            {
                if(!current.left)
                {
                    current.left=obj
                    break;
                }
                current=current.left
            }
            else
            {
                if(!current.right)
                {
                    current.right=obj
                    break;
                }
                current=current.right
            }
         }
        }
    }
    display()
    {
        this.print(this.root)
    }
    print(x)
    {
        if(x)
        {
            console.log(x.value);
            this.print(x.left)
            this.print(x.right)
        }
    }
    pre(x)
    {
        if(x)
        {
            console.log(x.value);
            this.pre(x.left)
            this.pre(x.right)
        }
    }
    in(x)
    {
        if(x)
        {
            
            this.in(x.left)
            console.log(x.value);
            this.in(x.right)
        }
    }
    post(x)
    {
        if(x)
        {
            this.post(x.left)
            this.post(x.right)
            console.log(x.value);
        }
    }
}







var ob=new bst()
ob.add(10)
ob.add(5)
ob.add(15)
ob.add(3)
ob.add(7)
ob.add(12)
ob.display()
console.log("in order");
ob.in(ob.root)
console.log("pre order");
ob.pre(ob.root)
console.log("post order");
ob.post(ob.root)
