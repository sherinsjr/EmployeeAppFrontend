import React from "react";
import { Navbar } from "../navbar/Navbar";

export const Formemp = () => {
  return (
    <div>
      <Navbar />

      <div className="container ">
        <div className="row g-3 mt-3">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <label htmlFor="" className="form-label  fw-bold">
             FIRST NAME:
            </label>
            <input type="text" className="form-control border border-primary" />
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <label htmlFor="" className="form-label fw-bold">
              DESIGNATION:
            </label>
            <input type="text" className="form-control border border-primary" />
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <label htmlFor="" className="form-label fw-bold">
              LOCATION:
            </label>
            <input type="text" className="form-control border border-primary" />
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <label htmlFor="" className="form-label fw-bold">
             SALARY:
            </label>
            <input type="text" className="form-control  border border-primary" />
          </div>
          <br /><br />
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
           <button className="position-absolute top-50 start-50 translate-middle btn btn-outline-primary ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
