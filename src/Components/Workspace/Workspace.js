import React, { useState } from "react";
import "./Workspace.css";
import SearchIcon from "@material-ui/icons/Search";
import ReorderIcon from "@material-ui/icons/Reorder";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import Modal from "../Modal/Modal";

function Workspace() {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };

  return (
    <div className="container">
      <div className="pt-4 mb-0 align-items-center row">
        <div className="mb-2 col-sm-7">
          <h1 className="workspace-text mb-0">Workspaces</h1>
        </div>
        <div className="text-right mb-2 col-sm-5">
          <button
            type="button"
            className="custom-button-class first-step btn text-white btn-md btn-hover"
            onClick={openModal}
          >
            Add new Workspace
          </button>
          {show === true ? (
            <Modal
              show={show}
              closeModal={openModal}
              hide={() => setShow(false)}
            />
          ) : (
            ""
          )}
        </div>
        <div className="align-items-center row">
          <div className="col-md-3 col-sm-12">
            <form>
              <div className="d-flex align-items-center ws-search form-group search-form">
                <SearchIcon className="svg_icons icons" />
                <input
                  placeholder="Diet"
                  type="text"
                  id="searchInput"
                  className="px-4 search-input form-control"
                  value=""
                >
                </input>
                
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-end col">
            <span>
              <ViewModuleIcon
                className="svg_icons"
                style={{ color: "#0CBAFF" }}
              />
            </span>
            <span>
              <ReorderIcon
                className="icon svg_icons"
                style={{ color: "#BBBABE" }}
              />
            </span>
          </div>

          <hr className="mx-2 mb-3 mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
