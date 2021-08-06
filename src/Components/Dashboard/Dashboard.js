import React from "react";
import "./Dashboard.css";
import Data from "../../data.json";
import AppleIcon from "@material-ui/icons/Apple";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import FilterListSharpIcon from "@material-ui/icons/FilterListSharp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";

function Dashboard() {
  return (
    <div>
      <nav class="navbar navbar-light dashboard-background">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="data:image/png;base64,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"
              width="25"
              height="25"
              alt="logo"
            />
          </a>
          <div className="Apple-option">
            <AppleIcon />
            <span className="Table-logo mx-5 text-white">Table</span>
          </div>

          <form class="d-flex">
            <button class="btn border-0 text-white" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </nav>
      <div className="p-2 mb-0 align-items-center row">
        <div className="Visibilty-option">
          <VisibilityOffOutlinedIcon />
          <span className="text-dark">Hide Columns</span>
          <KeyboardArrowDownIcon />

          <span className="text-dark">
            <FilterListSharpIcon />
            Filter
          </span>
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            
          </div>
        </div>
      </div>
      <div class="container-fluid"></div>
      <div className="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr className="table-name">
              <th></th>
              <th>
                <TextFieldsIcon style={{ height: 17 }} /> Name and Surname
              </th>
              <th>
                <TextFieldsIcon style={{ height: 17 }} />
                Title
              </th>
              <th>
                <FormatAlignLeftIcon style={{ height: 17 }} />
                Short Bio
              </th>
              <th>
                <TextFieldsIcon style={{ height: 17 }} />
                Web Site URL
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {Data.Data.map((post) => {
              return (
                <>
                  <tr>
                    <td scope="row"></td>
                    <td>{post.name}</td>
                    <td>{post.title}</td>
                    <td>{post.bio}</td>
                    <td>{post.url}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Dashboard;
