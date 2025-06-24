import React, { Component } from "react";

export class GenderCheckBox extends Component {
  render() {
    return (
      <div className="flex p-2">
        <div className="form-control">
          <label htmlFor="" className={`label gap-2 cursor-pointer`}>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900" />
          </label>
        </div>
        <div className="form-control ps-2">
          <label htmlFor="" className={`label gap-2 cursor-pointer`}>
            <span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-slate-900" />
          </label>
        </div>
      </div>
    );
  }
}

export default GenderCheckBox;
