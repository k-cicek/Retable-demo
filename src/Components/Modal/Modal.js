import React from "react";
import "./Modal.css";
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';

function Modal(props) {
  return (
    <div className="modal d-block" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <AddBoxSharpIcon style={{ color: "red" }}/> Add New Workspace</h5>
            <button
              onClick={props.hide}
              type="button"
              className="close border-0 bg-white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div class="form-group">
                <div className="d-flex justify-content-start pb-2">
                <label>Name Of The Workspace</label>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                />   
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save
            </button>
            <button
              onClick={props.hide}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
