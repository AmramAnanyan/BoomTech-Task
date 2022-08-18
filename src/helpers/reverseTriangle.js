function diagonalTriangle(n) {
    if (n) {
        let newArr = []; 
        for(let i=1;i<=n;i++){
                for(let j=0;j<=n;j++){
                            if (i<=j) {
                                newArr.push(<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>);
                               
                }else{
                newArr.push(<span>*&nbsp;&nbsp;</span>)
            }
                }   
            newArr.push(<br/>)
        }
        return newArr
    } else {
        return []
    }
   
};

export default diagonalTriangle;