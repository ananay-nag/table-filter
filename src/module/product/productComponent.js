import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const DriveDetails = (props) => {
  const { state } = props;
  return (
    <div className="width-avl height-95-p">
      <div className="p-5 width-avl txt-align-center bg-FFFFFF tab-filter-sec">{FilterComponent(props)}</div>
      <div className="p-5 width-avl txt-align-center tab-data">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name </TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Office</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Start date</TableCell>
                <TableCell align="right">Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.filterProductList.map((row) => (
                <TableRow key={row.Name}>
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell>{row.Position}</TableCell>
                  <TableCell>{row.Office}</TableCell>
                  <TableCell align="right">{row.Age}</TableCell>
                  <TableCell align="right">{row["Start date"]}</TableCell>
                  <TableCell align="right">{row.Salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const FilterComponent = (props) => {
  const { addNewFilter, state } = props;
  return (
    <div>
      <div>{FilterForm(props)}</div>
      <div className="txt-algin-start m-10">
        <Button variant="contained" color="primary" onClick={() => addNewFilter(!Boolean(state.filterValueList.length))}>
          + Add Filter
        </Button>
      </div>
    </div>
  );
};
const FilterForm = (props) => {
  const { addNewFilter, removeFilter, state, changeFilterValues } = props;
  return state.filterValueList.map((item, index) => {
    return (
      <div className="display-flex">
        {index ? (
          <div className="width-100-p m-10">
            <select id="logical" className="filter-form-control" value={item.logical} onChange={(event) => changeFilterValues(index, event)}>
              <option value="">LOGICAL</option>
              {Object.entries(state.filterConst.LOGICAL).map(function ([key, value]) {
                return <option value={value}>{key}</option>;
              })}
            </select>
          </div>
        ) : (
          <div className="width-100-p m-10">
            <div className="filter-form-control">Where</div>
          </div>
        )}
        <div className="width-100-p m-10">
          <select id="key" className="filter-form-control" value={item.key} onChange={(event) => changeFilterValues(index, event)}>
            <option value="">Fields</option>
            {Object.entries(state.filterConst.FIELDS).map(function ([key, value]) {
              return <option value={value}>{key}</option>;
            })}
          </select>
        </div>
        <div className="width-100-p m-10">
          <select id="boolean" className="filter-form-control" value={item.boolean} onChange={(event) => changeFilterValues(index, event)}>
            <option>Operator</option>
            {Object.entries(state.filterConst.BOOLEAN).map(function ([key, value]) {
              return <option value={value}>{key}</option>;
            })}
          </select>
        </div>
        <div className="width-100-p m-10">
          {item.boolean === "Equals" ? (
            <select id="value" className="filter-form-control" value={item.VALUE} onChange={(event) => changeFilterValues(index, event)}>
              <option value="1">Yes</option>
              <option value="0">NO</option>
            </select>
          ) : (
            <input
              id="value"
              placeholder="value"
              className="filter-form-control height-30"
              value={item.value}
              onChange={(event) => changeFilterValues(index, event)}
            />
          )}
        </div>
        <div>
          <IconButton aria-label="delete" onClick={() => removeFilter(index)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  });
};
const FolderDetails = (props) => {
  const { state } = props;
  return (
    <div className="width-avl display-flex txt-align-center jc-flex-start fl-flow-wrap">
      <div className="display-flex fl-detail-box">
        <div className="fl-detail-heading">Name</div>
        <div className="fl-detail-value">XYZ</div>
      </div>
      <div className="display-flex fl-detail-box">
        <div className="fl-detail-heading">Sub Folders</div>
        <div className="fl-detail-value">0</div>
      </div>
      <div className="display-flex fl-detail-box">
        <div className="fl-detail-heading">Sub Files</div>
        <div className="fl-detail-value">0</div>
      </div>
      <div className="display-flex fl-detail-box">
        <div className="fl-detail-heading">Created</div>
        <div className="fl-detail-value">0</div>
      </div>
      <div className="display-flex fl-detail-box">
        <div className="fl-detail-heading">Modified</div>
        <div className="fl-detail-value">0</div>
      </div>
    </div>
  );
};
const ProductComponent = (props) => {
  return (
    <div className="width-100-p m-20">
      <div className="m-5 display-flex jc-space-around width-100-p c-FFFFFF fw-600 fs-20">
        <div className="width-65-p txt-align-center">Product Dashboard</div>
      </div>
      <div className="m-t-50 height-90-p display-flex jc-space-around width-avl fl-flow-wrap p-10" style={{ overflowY: "auto", maxHeight: "90%" }}>
        {DriveDetails(props)}
      </div>
    </div>
  );
};
export default ProductComponent;
