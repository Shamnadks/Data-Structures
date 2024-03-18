
function heap()
{
    for(i=Math.floor((size/2)-1);i>=0;i--)
    {
        heapify(i)

    }
    function heapify(i)
      {
        smallest=i
        l=i*2+1
        r=i*2+2
        if(l<size && a[l]>a[smallest])
        {
          smallest=l
        }
        if(r<size&& a[r]>a[smallest])
        {
          smallest=r
        }
        if(smallest!=i)
        {
          [a[i],a[smallest]]=[a[smallest],a[i]]
          heapify(smallest)
        }
      }
}
var a=[44,3,22,1,77,53,77,432,09]
var size=a.length
console.log(a)
heap()
console.log(a)
