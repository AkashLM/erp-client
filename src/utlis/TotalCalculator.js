
const TotalCalculator =(SubTotal) =>{
    let total = 0;
    SubTotal.map((NPD) => {
      total=total+NPD;
    });
    return total;
  };
  
export default TotalCalculator;
