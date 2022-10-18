//invoice number setting
//Calculations error.
//Clear data function.
//Customer database.
//Delete functionality.

import {
  Box,
  Paper,
  TextField,
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
  Select,
  MenuItem,
  Autocomplete,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material/";
import "./GeneratorContainer.css";
import { NotificationProvider } from "../utlis/NotificationContext/NotificationContext";
import { useState, useContext, useEffect } from "react";
import NotificationBar from "../utlis/GlobalContext/NotificationBar";
import SerialGenerator from "../utlis/SerialGenerator.js";
import BasicDatePicker from "../utlis/DateSetter";
import PreviousCustomerFunction from "../utlis/CustomerSearch";
import ProductListFunction from "../utlis/ProductSearch";
import CodeSearch from "../utlis/CodeSearch";
import FieldChecker from "../utlis/FieldChecker";
import InventoryCreation from "../utlis/InventoryCreation";
import rowGenerator from "../utlis/RowGenerator";
import axios from "axios";

const GeneratorContainer = () => {
  const newNumber = SerialGenerator();
  const newDate = BasicDatePicker();
  // const fieldValue= FieldChecker();
  const [PreviousCustomerList, setPreviousCustomerList] = useState([]);
  const [PreviousProductList, setPreviousProductList] = useState([]);
  const [InvoiceNo, setInvoiceNo] = useState("");
  const [InvoiceDate, setInvoiceDate] = useState(new Date(Date.now()));
  const [CustomerName, setCustomerName] = useState("No Customer");
  const [DeliveryType, setDeliveryType] = useState("");
  const [Product, setProduct] = useState("");
  const [ProductQty, setProductQty] = useState([]);
  const [ProductPrice, setProductPrice] = useState([]);
  const [SubTotal, setSubTotal] = useState([]);
  const [TotalAmount, setTotalAmount] = useState(0);
  const [Visible, setVisible] = useState([]);
  //
  const [cashField, setCashField] = useState(false);
  //
  const [chequeField, setChequeField] = useState(false);
  const [ProductCode, setProductCode] = useState([]);
  const [FinalProductCode, setFinalProductCode] = useState("");
  const [CurrentProductList, setCurrentProductList] = useState([
    { ProductName: "Chilli ", ProductCode: 'CSDX251254', ProductPrice: 7582 },
  ]);
  const [DummyCurrentProductList, setDummyCurrentProductList] = useState([]);
  //
  const [PaymentMethod, setPaymentMethod] = useState({});

  const PaymentSetter = (Attr, Value) => {
    setPaymentMethod({
      ...PaymentMethod,
      [Attr]: Value,
    });
  };

  useEffect(() => {
    setPreviousCustomerList(PreviousCustomerFunction());
    setPreviousProductList(ProductListFunction());
    setInvoiceNo(newNumber);
  }, []);

  // useEffect(()=>{
  //   rowGenerator();
  // },[ProductPrice,ProductQty]);
  // const deleteRecordFunction = (record, ArrayParam) => {
  //   console.log(record, ArrayParam);
  //   if (record) {
  //     ArrayParam.splice(record, 1);
  //   }
  // };
  const createRecord = () => {
    const findPrice = async () => {
      const PriceOfProduct = await axios.post(
        "http://localhost:9000/api/v1/ProductPrice",
        {
          ProductName: Product,
        },
        {
          header: {
            "content-type": "application/json",
          },
        }
      );

      let SampleArray1 = [
        ...ProductPrice,
        PriceOfProduct.data.Data.ProductPrice,
      ];
      setProductPrice(SampleArray1);
    };

    // console.log("Code Of Product", PreviousProductList);
    findPrice();
    setProductCode(CodeSearch(Product));
    ProductCode.map((NPX) => {
      if (NPX.ProductName === Product) {
        setFinalProductCode(NPX.ProductCode);
      }
    });
    if (Product && FinalProductCode && ProductPrice[ProductPrice.length - 1]) {
      const newRecord = {
        ProductName: Product,
        ProductCode: FinalProductCode,
        ProductPrice: ProductPrice[ProductPrice.length - 1],
      };
      let SampleArray2 = [...CurrentProductList, newRecord];
      setDummyCurrentProductList(SampleArray2);
      console.log("new===", DummyCurrentProductList);
    } else {
      console.log("Try again !!");
    }
  };

  const createInventory = () => {
    setInvoiceNo(newNumber);
    const ResponseR = InventoryCreation(
      InvoiceNo,
      InvoiceDate,
      CustomerName,
      DeliveryType,
      CurrentProductList,
      TotalAmount,
      PaymentMethod
    );
  };

  const {
    setMessage,
    setColor,
    btnMessage,
    setBtnMessage,
    open,
    setOpen,
    handleOpen,
    handleClose,
  } = useContext(NotificationProvider);

  const SubTotalT = (Index) => {
    const subTotalT = ProductPrice * ProductQty[Index];
    return subTotalT;
  };

  const SubTotalCalc = (Qty) => {
    setProductQty(Qty);
  };

  // const TotalCal = () => {
  //   let total = 0;
  //   CurrentProductList.map((NPD) => {
  //     total = total + NPD.ProductTotalPrice;
  //   });
  //   // setSubTotal(total);
  // };

  return (
    <div className="Main-Generator">
      <Paper
        elevation={0}
        sx={{
          height: "640px",
          borderRadius: "0px",
          width: "96%",
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box
          sx={{
            height: "140px",
            width: "100%",
            // backgroundColor: "blue",
            marginTop: "20px",
            paddingTop: "20px",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridTemplateRows: "auto auto auto",
          }}
        >
          <div className="grid-item" style={{}}>
            <TextField
              id="outlined-basic"
              label="Invoice Number :"
              required="true"
              variant="outlined"
              value={newNumber}
              color="success"
              disabled
              sx={{
                marginLeft: "25px",
                marginRight: "auto",
                width: "60%",
                borderRadius: "2px",
                marginTop: "10px",
              }}
            />
          </div>
          <div className="grid-item">
            {" "}
            <TextField
              id="outlined-basic"
              label="Invoice Date :"
              required="true"
              variant="outlined"
              disabled
              value={newDate}
              color="success"
              sx={{
                marginLeft: "25px",
                marginRight: "auto",
                width: "60%",
                borderRadius: "2px",
                marginTop: "10px",
              }}
            />
            {/* <BasicDatePicker /> */}
          </div>
          <div className="grid-item" style={{ display: "flex" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={PreviousCustomerList}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Customer Name"
                  onSelect={(Event) => {
                    setCustomerName(Event.target.value);
                  }}
                />
              )}
            />
            <InputAdornment position="end">
              <AddCircle
                edge="end"
                style={{ cursor: "pointer", marginTop: "50px" }}
                onClick={() => {
                  handleOpen();
                  setMessage("Customer added in Database !");
                  setColor("success");
                  setBtnMessage("Done");
                }}
              />
            </InputAdornment>
          </div>
          <div className="grid-item">
            <FormControl sx={{ width: "60%", marginLeft: "25px" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                D T:{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                // value={age}
                // onChange={handleChange}
                autoWidth
                label="Age"
              >
                <MenuItem value={10}>Hand To Hand</MenuItem>
                <MenuItem value={21}>Courier</MenuItem>
                <MenuItem value={22}>Post Delivery</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="grid-item">
            {" "}
            <Autocomplete
              disablePortal
              required
              id="combo-box-demo"
              options={PreviousProductList}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product Name or Code:"
                  onSelect={(Event) => {
                    setProduct(Event.target.value);
                  }}
                />
              )}
            />
          </div>
          <div className="grid-item">
            <Button
              variant="outlined"
              sx={{ marginLeft: "25px" }}
              onClick={() => {
                createRecord();
              }}
            >
              <AddCircle /> Add
            </Button>
          </div>

          {/* Second Box Container */}
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "30px",
            minHeight: "140px",
            maxHeight: "auto",
            borderTop: "4px solid #FFE7CC",
            // backgroundColor: "blue"
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Edit</th>
                <th>PRODUCT NAME</th>
                <th>SELLING SCENARIO</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {rowGenerator(
                CurrentProductList,
                setProductQty,
                ProductQty,
                SubTotal,
                SubTotalT,
                setSubTotal,
                setTotalAmount,
                Visible,
                setVisible
              )}

              <tr>
                <td
                  colSpan="5"
                  style={{
                    fontWeight: "bold",
                    textAlign: "right",
                    paddingRight: "15px",
                    fontSize: "14px",
                    color: "grey",
                  }}
                >
                  Total
                </td>
                <td
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingRight: "15px",
                    fontSize: "14px",
                    color: "blue",
                  }}
                >
                  {TotalAmount}
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Third Table */}
        <Box
          sx={{
            height: "140px",
            width: "100%",
            // backgroundColor: "blue",
            marginTop: "20px",
            borderTop: "4px solid #FFE7CC",
          }}
        >
          <table>
            <thead>
              <tr>
                <th colSpan="2">Payment Mode</th>
                <th>
                  <input
                    type="checkbox"
                    onClick={(Event) => {
                      setCashField(FieldChecker(Event.target.checked));
                    }}
                  />
                  Cash
                </th>
                <th>
                  <input
                    type="checkbox"
                    onClick={(Event) => {
                      setChequeField(FieldChecker(Event.target.checked));
                    }}
                  />
                  Cheque
                </th>
                <th>
                  <input type="checkbox" disabled />
                  Card
                </th>
                <th>
                  <input type="checkbox" disabled />
                  Voucher
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">Cheque Amount</td>
                <td colSpan="1">
                  <input
                    className="TableInput"
                    type="number"
                    min="0"
                    disabled={!chequeField}
                    onChange={(Event) => {
                      PaymentSetter("ChequeAmount", Event.target.value);
                    }}
                  />
                </td>
                <td colSpan="2">Cheque Details</td>
                <td colSpan="1">
                  <input
                    className="TableInput"
                    type="text"
                    disabled={!chequeField}
                    onChange={(Event) => {
                      PaymentSetter("ChequeDetails", Event.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2"></td>
                <td colSpan="1"></td>
                <td colSpan="2">Cash Amount</td>
                <td colSpan="1">
                  <input
                    className="TableInput"
                    type="number"
                    min="0"
                    disabled={!cashField}
                    onChange={(Event) => {
                      PaymentSetter("CashAmount", Event.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Last Box */}
        <Box
          sx={{
            height: "40px",
            width: "100%",
            // backgroundColor: "blue",
            marginTop: "20px",
          }}
        >
          <NotificationBar />
          <Button
            variant="contained"
            sx={{ marginLeft: "25px" }}
            onClick={() => {
              handleOpen();
              setMessage("Inventor Created Successfully !");
              setColor("success");
              setBtnMessage("BACK");
              createInventory();
            }}
          >
            Create Inventory
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "25px" }}
            onClick={() => {
              handleOpen();
              setMessage("All fields are cleared !");
              setColor("warning");
              setBtnMessage("Done");
            }}
          >
            Clear Data
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default GeneratorContainer;
