import CloseIcon from "@mui/icons-material/Close";
import HeightIcon from "@mui/icons-material/Height";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { ComposeContext } from "../context/ComposeContext";

const CreateEmail = () => {
  const { setIsComposeEmail, setIsMax } = useContext(ComposeContext);

  return (
    <div className="create_email">
      <div className="row space-between create_email_header">
        <div>New Message</div>
        <div className="row">
          <RemoveIcon />
          <div
            onClick={() => {
              setIsMax(true);
              setIsComposeEmail(false);
            }}
          >
            <HeightIcon />
          </div>
          <div onClick={() => setIsComposeEmail((prev) => !prev)}>
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
        <div>
          <div>Send</div>
        </div>
        <div onClick={() => setIsComposeEmail((prev) => !prev)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default CreateEmail;
