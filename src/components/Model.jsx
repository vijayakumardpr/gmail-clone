import CloseIcon from "@mui/icons-material/Close";
import HeightIcon from "@mui/icons-material/Height";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { ComposeContext } from "../context/ComposeContext";

const Model = () => {
  const { setIsComposeEmail, setIsMax } = useContext(ComposeContext);
  return (
    <div className="layout">
      <div className="model">
        <div className="row space-between create_email_header">
          <div>New Message</div>
          <div className="row">
            <RemoveIcon />
            <HeightIcon />
            <div
              onClick={() => {
                setIsComposeEmail(false);
                setIsMax(false);
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className="create_email_body">
          <div className="email_input">
            <input type="text" placeholder="Recipients" />
          </div>
          <div className="email_input">
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea></textarea>
          </div>
        </div>
        <div className="row space-between create_email_footer">
          <div>Send</div>
          <div
            onClick={() => {
              setIsComposeEmail(false);
              setIsMax(false);
            }}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
