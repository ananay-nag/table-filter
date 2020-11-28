import React, { Component } from "react";
import ProductComponent from "./productComponent";
import { ROW_DATA, FILTERS } from "../../common/index";
class ProductDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProductList: ROW_DATA,
      isFirst: true,
      filterProductList: [],
      filterValueList: [],
      filterConst: FILTERS,
    };
  }
  componentDidMount() {
    this.setState({ filterProductList: this.state.allProductList });
  }
  componentWillMount() {
    this.setState({ filterProductList: this.state.allProductList });
  }

  // validate values.
  validValues = () => {
    const { name, price, quantity } = this.state;
    if (!name || !name.trim().length) {
      this.setState({ error: "Enter name" });
      return false;
    } else if (!price || !price.trim().length || isNaN(price)) {
      this.setState({ error: "Enter price in numeric." });
      return false;
    } else if (!quantity || !quantity.trim().length || isNaN(quantity)) {
      this.setState({ error: "Enter price in numeric." });
      return false;
    } else {
      this.setState({ error: "" });
      return true;
    }
  };
  fillValues = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value.trim() });
  };
  searchProduct = async (event) => {
    const { id, value } = event.target;
    await this.setState({ [id]: value.trim() });
    if (this.state.search && this.state.search.length) {
      this.setState({ productList: this.props.productList });
      let productList = this.state.productList;
      productList = productList.filter((item) => {
        if (
          item.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
          item.price.toLowerCase().includes(this.state.search.toLowerCase()) ||
          item.quantity.toLowerCase().includes(this.state.search.toLowerCase())
        )
          return true;
        else return false;
      });
      this.setState({ productList: productList });
    } else {
      this.setState({ productList: [] });
    }
  };
  startFilter=()=>{
    this.setState({ productList: this.props.productList });
    let productList = this.state.productList;
  }
  addNewFilter = (value) => {
    this.setState({ isFirst: value });
    let valueList = this.state.filterValueList;
    valueList.push({ logical: "", key: "", boolean: "",  value: "" });
  };
  removeFilter = (index) => {
    let valueList = this.state.filterValueList;
    valueList.splice(index, 1);
    if (valueList.length) {
      valueList[0].logical = "";
    }
    this.setState({ filterValueList: valueList });
  };
  changeFilterValues = (index, event) => {
    console.log(typeof index + `${index}  ${event.target.id}  ${event.target.value}`);
    let valueList = this.state.filterValueList;
    valueList[index][event.target.id] = event.target.value;
    if (!index) valueList[index].logical = "";
    this.setState({ filterValueList: valueList });
  };
  render() {
    console.log(this.state);
    return (
      <ProductComponent
        toggleForm={this.toggleForm}
        state={this.state}
        fillValues={this.fillValues}
        searchProduct={this.searchProduct}
        addNewFilter={this.addNewFilter}
        removeFilter={this.removeFilter}
        changeFilterValues={this.changeFilterValues}
      />
    );
  }
}
export default ProductDashboard;
