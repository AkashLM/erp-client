import { useState } from "react";
import axios from "axios";

const InventoryCreation = (
  InvoiceNo,
  InvoiceDate,
  CustomerName,
  DeliveryType,
  CurrentProductList,
  TotalAmount,
  PaymentMethod
) => {
  const [InventoryResult, setInventoryResult] = useState(null);

  const SubmitCreatedInventory = async () => {
    const StatusReport = await axios.post(
      "http://localhost:9000/api/v1/CreateInventory",
      {
        InvoiceNo: InvoiceNo,
        InvoiceDate: InvoiceDate,
        CustomerName: CustomerName,
        DeliveryType: DeliveryType,
        ProductList: CurrentProductList,
        TotalAmount: TotalAmount,
        PaymentMethod: {
          ChequeAmount: PaymentMethod.ChequeAmount,
          ChequeDetails: PaymentMethod.ChequeDetails,
          CashAmount: PaymentMethod.CashAmount,
        },
      },
      {
        header: {
          "content-type": "application/json",
        },
      }
    );
    setInventoryResult(StatusReport);
  };
  SubmitCreatedInventory();
  return InventoryResult;
};

export default InventoryCreation;
