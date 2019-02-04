import React from "react";
import "./Filter.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const filter = props => {
  return (
    <div className="row">
      <div className="col-4 ">
        <select onChange={props.genderChange}>
          <option value="Gender" selected disabled>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="col-3">
        <input
          className="col"
          placeholder={props.minValue}
          type="number"
          onChange={props.minChange}
        />
      </div>
      -
      <div className="col-3">
        <input
          className="col"
          placeholder={props.maxValue}
          type="number"
          onChange={props.maxChange}
        />
      </div>
      <Button variant="contained" color="secondary" className="col" type="submit" onClick={props.click}>
        send
      </Button>
    </div>
  );
};

export default filter;
