class grph{
    constructor()
    {
        this.vertex=new Map()
    }
    add(x)
    {
        this.vertex.set(x,new Set())
    }
    edg(x,y)
    {
        this.vertex.get(x).add(y)
        this.vertex.get(y).add(x)
    }
    getv()
    {
        return [...this.vertex.keys()]
    }
    gete(x)
    {
        return this.vertex.get(x)
    }

}
var ob=new grph()
ob.add('A')
ob.add('B')
ob.add('C')
ob.edg('A','B')
ob.edg('B','C')
console.log(ob.getv());
for(let x of ob.getv())
{
    console.log(`connection of ${x} : `,[...ob.gete(x)]);
}