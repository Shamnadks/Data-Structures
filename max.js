function heap()
{
var size=a.length
for(var i=Math.floor(size/2);i>=0;i--)
{
    heapify(i)
}
function heapify(i)
{
    var smallest=i
    var l=2*i+1
    var r=2*i+2
    if(l<size && a[l]>a[smallest])
    {
        smallest=l
    }
    if(r<size && a[r]>a[smallest])
    {
        smallest=r
    }
    if(smallest!=i)
    {
        var temp=a[i]
        a[i]=a[smallest]
        a[smallest]=temp
        
        heapify(smallest)
    }
}
}





function dlt(x)
{
    for(var i=0;i<size;i++)
    {
        if(a[i]==x)
        {
            var temp=a[i]
            a[i]=a[size-1]
            a[size-1]=temp
            a.pop()
            heap()
        }
    }
}



var a=[44,12,23,32,1,10,105,25]
a.push(110)
heap()
console.log(a);
// dlt(110)
// console.log(a);


