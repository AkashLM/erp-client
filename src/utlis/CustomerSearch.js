import axios from "axios";

const PreviousCustomerFunction = () => {
  const PrevCustomerList = [];
  const TempFunction = async () => {
    const UpdatedPreviousCustomer = await axios.get("http://localhost:9000/api/v1/FindCustomer");
    if (UpdatedPreviousCustomer) {
      UpdatedPreviousCustomer.data.Data.map((Pair) => {
        PrevCustomerList.push(Pair.CustomerName);
      });
    }
  };
  TempFunction();
  return PrevCustomerList;
};

export default PreviousCustomerFunction;
