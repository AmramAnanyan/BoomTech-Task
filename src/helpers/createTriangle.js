function triangle(n) {
    if (n) {
        let newArr = []; 
        for(let i=0;i<=n;i++){
                for(let j=0;j<=n;j++){
                            if (j<=i) {
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

export default triangle


