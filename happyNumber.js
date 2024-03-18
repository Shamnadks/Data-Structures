var isHappy = function(n) {
    var square=0;
    
    while(true){
        n=n.toString().split('');
        for(var i=0;i<n.length;i++){
            n[i]=parseInt(n[i]);
        }

        if(n.length==1 && n[0]==1){
            console.log("its a happy number");
            return true;
        }
        if(n.length==1 && n[0]!==1){
            console.log("its not a happy number");
            return false;

        }else{
            for(var i=0;i<n.length;i++){
                square=square+(n[i]*n[i]);
            }
            n=square;
            square=0;
        }
    }
      
};

isHappy(2);