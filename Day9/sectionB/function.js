exports.fibonacci = function f(n){
    
    
    if (n==0 || n==1){
    return n
    }
    else{
        return f(n-1)+f(n-2)       
    }
 
};

exports.table = function (n){

    return 3*n
};

