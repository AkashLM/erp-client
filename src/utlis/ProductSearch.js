import axios from "axios";
const ProductListFunction = () => {
    const ProductListList = [];
    const TempFunction2 = async () => {
      const UpdatedProductList = await axios.get("http://localhost:9000/api/v1/FindProduct");
      if (UpdatedProductList) {
        UpdatedProductList.data.Data.map((Pair) => {
          ProductListList.push(Pair.ProductName);
        });
      }
    };
    TempFunction2();
    return ProductListList;
  }
 

export default ProductListFunction;
