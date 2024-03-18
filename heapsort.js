
function heap()
{
    for(var i=Math.floor((length/2)-1);i>=0;i--)
    {
        heapify(length,i)
    }
    for(i=length-1;i>=0;i--)
       {
         temp =a[0]
        a[0]=a[i]
        a[i]=temp
        heapify(i,0)
       }
    function heapify(length,i)
    {
   var small=i
   var l=i*2+1
   var r=i*2+2
   if(l<length && a[l]>a[small])
   {
     small=l
   }
   if(r<length && a[r]>a[small])
   {
    small=r
   }
   if(small!=i)
   {
    [a[i],a[small]]=[a[small],a[i]]
    heapify(length,small)
   }
    }
}

//find largest value in maxheap
function findmax()
{
    return a[0]
}

//find largest value in minheap
function findmin()
{
    return a[length-1]
}




var a=[69,79,89,13,1,10,2]
 var length=a.length
heap()
console.log(a);