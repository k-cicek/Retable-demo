import React, { useState } from "react";
import "./AddProject.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AppleIcon from "@material-ui/icons/Apple";
import { Link } from "react-router-dom";
import "../Modal1/Modal1";
import Modal1 from "../Modal1/Modal1";
import Share from "../Share/Share";

function AddProject() {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };

  const [shareShow, setShareShow] = useState(false);
  const shareModal = () => {
    setShareShow(true);
  };

  return (
    <div className="container">
      <div className="pt-4 mb-0 align-items-center row">
        <div className="mb-2 col-sm-7">
          <h1 className="workspace-text mb-0">
            Dietician's Workspace
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </h1>
        </div>

        <div className="text-right mb-2 col-sm-5">
          <button
            type="button"
            className="custom-button-class first-step btn text-white btn-md btn-hover"
            onClick={openModal}
          >
            Add new project
          </button>
          {show === true ? (
            <Modal1
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
            <div className="d-flex align-items-center position-relative">
              <h5 className="workspace-size">
                A workspace that store all the dieticain informantions in UK
              </h5>
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-end col">
            <span>
              <button
                type="button"
                className="custom-button-class btn btn-primary btn-md person-icon"
                onClick={shareModal}
              >
                Share
                <PersonOutlineIcon
                  className="icon"
                  style={{ color: "white" }}
                />
              </button>
              {shareShow === true ? (
                <Share
                  show={shareShow}
                  closeModal={shareModal}
                  hide={() => setShareShow(false)}
                />
              ) : (
                ""
              )}
            </span>
          </div>
        </div>

        <div className="d-block py-5 px-5 shadow border-0 card card-body">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center project-icon-container rounded cursor-pointer mb-1 py-2">
                <Link to="/dashboard">
                  <div className="Icon-option">
                    <AppleIcon style={{ fontSize: "50" }} />
                  </div>
                </Link>
              </div>
              <div className="keyboard-icon">
                Dietician Project
                <span className="keyboard-icons">
                  <KeyboardArrowDownIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
