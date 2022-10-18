import axios from "axios";
const CodeSearch = (Param) => {
    const ProductListList1 = [];
    const TempFunction2 = async () => {
      const UpdatedProductList = await axios.get("http://localhost:9000/api/v1/FindProduct");
      if (UpdatedProductList) {
        UpdatedProductList.data.Data.map((Pair) => {
          ProductListList1.push(Pair);
        });
      }
    };
    TempFunction2();
    return ProductListList1;
  }
 

export default CodeSearch;
