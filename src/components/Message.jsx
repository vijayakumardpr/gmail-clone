import { Link, useParams } from "react-router-dom";
import useMessages from "../utils/useMessages";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Message = () => {
  const { id } = useParams();
  const { data } = useMessages(`https://jsonplaceholder.org/posts/${id}`);

  if (data.length === 0)
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <>
      <div style={{ padding: "20px" }} className="home column gap-10">
        <div>
          <div>
            <Link to="/">
              <ArrowBackIcon />
            </Link>
            <DeleteOutlineIcon />
          </div>
        </div>
        <div className="column gap-10">
          <h2>{data?.title}</h2>
          <div className="row space-between">
            <div className="row align-item gap-10">
              <div className="avatar h-center align-item">
                {data?.title?.substring(0, 1)}
              </div>
              <div>{data?.slug}</div>
            </div>
            <div>
              <div>{data?.publishedAt}</div>
            </div>
          </div>
        </div>
        <div className="message_content">{data?.content}</div>
      </div>
    </>
  );
};

export default Message;
