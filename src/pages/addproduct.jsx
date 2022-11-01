import React, { useState } from "react";
import axios from 'axios';
class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="box">
              <img src={this.state.image} style={{ padding: "20px" }} />
            </div>

            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}

const AddProduct = () => {
  const [name, setName] = useState(null);
  const [quantity, setquantity] = useState(0);
  const [productdescription, setproductdescription] = useState(null); // this is product name
  const [category, setcategory] = useState(null);
  const [rentcharges, setrentcharges] = useState(0);
  const [maxdaylimit, setmaxdaylimit] = useState(0);
  const [fineperday, setfineperday] = useState(0);
  const [thumbnail, setthumbnail] = useState(null);

  /*
        this.name = Description.name;
        this.category = Description.category;
        this.rentCharges = Description.rentCharges;
        this.maxDayLimit = Description.maxDayLimit;
        this.finePerDay = Description.finePerDay;
        this.instructions = Description.instructions;
        this.thumbnail = Description.thumbnail;
  */

  const [initiate,setInitiate] = useState(0);

  function checkstates() {
    if (
      quantity == 0 ||
      productdescription == null ||
      category == null ||
      rentcharges <= 0 ||
      maxdaylimit <= 0 ||
      fineperday <= 0 ||
      thumbnail == null
    ) {
      return false;
    } else {
      return true;
    }
  }

  function prevent(event) {
    event.preventDefault();
  }

  function HandleAddProduct() {
    if (checkstates()) {
      /// write your code here for sending the data
      console.log("states collected");
    } else {
      alert("Field Either Incomplete/Invalid");
    }
  }
  const HandleInitiateAddProduct = async ()=>{
    axios.defaults.withCredentials = true;
    const res = await axios.post('http://localhost:3001/addProduct/initiate');
    console.log(res);
    if(res.status==200){
      setInitiate(1);
    }
  }

  const HandleSetProduct = async () =>{
      const Description = {
        category:category,
        instruction:productdescription,
        thumbnail:thumbnail,
        finePerday:fineperday,
        maxDayLimit:maxdaylimit,
        rentCharges:rentcharges,
        name:name
      }
      axios.defaults.withCredentials = true;
      const res = await axios.post('http://localhost:3001/addProduct/set',{
        Quantity:quantity,
        Description:Description
      });
      if(res.status==200){
        setInitiate(2);
      }
  }
  const HandleConfirmProduct = async () =>{
    axios.defaults.withCredentials = true;
    const res = await axios.post('http://localhost:3001/addProduct/confirm');
    if(res.status==200){
      setInitiate(3);
    }
  }
  function HandleAddReset(){
    setInitiate(0);
  }
  function HandleAddClose(){
    window.location.href = 'http://localhost:3000/';
  }
  return (<div>
    {
      initiate==3 && (<div className="col-4">
      <div className="card">
        <div className="form-items">
          <h3>Add Product</h3>
          <p>Enter the product details</p>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <p>Product Added in Stock</p>
            <br></br>
            <div className="form-button">
              <button
                id="submit"
                onClick={HandleAddReset}
                type="submit"
                className="ibtn"
              >
                Add Another Product
              </button>
              <button
                id="submit"
                onClick={HandleAddClose}
                type="submit"
                className="ibtn"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>)
    }
    {
      initiate==2 && (<div className="col-4">
      <div className="card">
        <div className="form-items">
          <h3>Add Product</h3>
          <p>Enter the product details</p>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <p>Product Name: {name}</p>

            <p>Description: {productdescription}</p>

            <p>Category: {category}</p>

            <div>
              <p>Quantity: {quantity}</p>
            </div>

            <div>
              <div>
                <p>Rent charges /Day: {rentcharges} PKR</p>
              </div>

              <div>
                <p>Max Day Limit: {maxdaylimit}</p>
              </div>

              <div>
                <p>Fine /Day: {fineperday} PKR</p>
              </div>
            </div>
            <br></br>
            <div className="form-button">
              <button
                id="submit"
                onClick={HandleConfirmProduct}
                type="submit"
                className="ibtn"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>)
    }
    {
      initiate==1 && (<div className="col-6">
      <div className="card">
        <div className="form-items">
          <h3>Add Product</h3>
          <p>Enter the product details</p>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <p>Product Name</p>
            <input
              className="form-control"
              type="text"
              name="productname"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <p>Description</p>
            <input
              className="form-control"
              type="text"
              name="productdescription"
              onChange={(e) => setproductdescription(e.target.value)}
              required
            />

            <p>Category</p>
            <input
              className="form-control"
              type="text"
              name="productcategory"
              onChange={(e) => setcategory(e.target.value)}
              required
            />

            <div className="col-4">
              <p>Quantity</p>
              <input
                className="form-control"
                type="text"
                name="productquantity"
                onChange={(e) => setquantity(e.target.value)}
                required
              />
            </div>

            <div
              style={{
                display: "flex",
                "margin-top": "25px",
                "margin-bottom": "25px",
              }}
            >
              <div className="col-3">
                <p>Rent charges /Day</p>
                <input
                  className="form-control"
                  type="text"
                  name="productcategory"
                  required
                  onChange={(e) => setrentcharges(e.target.value)}
                  style={{ margin: "5px" }}
                />
              </div>

              <div className="col-3">
                <p>Max Day Limit </p>
                <input
                  className="form-control"
                  type="text"
                  name="productcategory"
                  onChange={(e) => setmaxdaylimit(e.target.value)}
                  required
                  style={{ margin: "5px" }}
                />
              </div>

              <div className="col-3">
                <p>Fine /Day</p>
                <input
                  className="form-control"
                  type="text"
                  name="productcategory"
                  onChange={(e) => setfineperday(e.target.value)}
                  style={{ margin: "5px" }}
                  required
                />
              </div>
            </div>

            <div>
              <p>Thumbnail</p>
              <input
                className="form-control"
                type="file"
                required
                onChange={(e) => setthumbnail(e.target.value)}
              />
            </div>

            <br></br>
            <div className="form-button">
              <button
                id="submit"
                onClick={HandleSetProduct}
                type="submit"
                className="ibtn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  }
  {
    initiate==0 && (<div>
      <h6>Press Add New Product and Fill the information</h6> 
      <button
    id="submit"
    onClick={HandleInitiateAddProduct}
    type="submit"
    className="ibtn"
    >
    Add New Product
    </button></div>)
  }</div>
  );
};

export default AddProduct;
