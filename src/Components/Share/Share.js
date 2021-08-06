import React from "react";
import "./Share.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import ShareIcon from "@material-ui/icons/Share";


function Share(props) {
  return (
    <div className="modal d-block" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {" "}
              <ShareIcon style={{ color: "#085ED6" }} /> Share File
            </h5>
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
            <div class="social">
              <ul>
                <li class="entypo-facebook">
                <a href="/" class="share_icon" rel="tooltip" title="Facebook">
                    <FacebookIcon />
                  </a>
                </li>
                <li class="entypo-linkedIn">
                <a
                    href="/"
                    class="share_icon"
                    rel="tooltip"
                    title="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li class="entypo-whatsapp">
                <a href="/" class="share_icon" rel="tooltip" title="Whatsapp">
                    <WhatsAppIcon />
                  </a>
                </li>
                <li class="entypo-twitter">
                <a href="/" class="share_icon" rel="tooltip" title="Twitter">
                    <TwitterIcon />
                  </a>
                </li>
                <li class="entypo-instagram">
                <a href="/" class="share_icon" rel="tooltip" title="İnstagram">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Share
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

export default Share;
