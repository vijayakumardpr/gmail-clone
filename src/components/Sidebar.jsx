/* eslint-disable react/prop-types */
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import StarPurple500RoundedIcon from "@mui/icons-material/StarPurple500Rounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LabelImportantRoundedIcon from "@mui/icons-material/LabelImportantRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useContext, useState } from "react";
import { ToggleContext } from "../context/ToggleContext";
import { ComposeContext } from "../context/ComposeContext";

const sidebarData = [
  {
    id: 1,
    icon: <InboxRoundedIcon />,
    content: "Inbox",
  },
  {
    id: 2,
    icon: <StarPurple500RoundedIcon />,
    content: "Starred",
  },
  {
    id: 3,
    icon: <AccessTimeRoundedIcon />,
    content: "Snoozed",
  },
  {
    id: 4,
    icon: <LabelImportantRoundedIcon />,
    content: "Important",
  },
  {
    id: 5,
    icon: <SendRoundedIcon />,
    content: "Sent",
  },
  {
    id: 6,
    icon: <TaskRoundedIcon />,
    content: "Draft",
  },
  {
    id: 7,
    icon: <BookmarkBorderRoundedIcon />,
    content: "Categories",
  },
  {
    id: 8,
    icon: <KeyboardArrowDownRoundedIcon />,
    content: "More",
  },
];

const Sidebar = () => {
  const [count, setCount] = useState(1);
  const { toggle } = useContext(ToggleContext);
  const { setIsComposeEmail } = useContext(ComposeContext);

  return (
    <aside className={`${toggle ? "aside" : "aside_toggle"}`}>
      <span
        onClick={() => setIsComposeEmail((prev) => !prev)}
        className={`row gap-10 compose_email ${
          toggle ? "" : "width_min-content"
        }`}
      >
        <EditRoundedIcon />
        {toggle && <span>Compose</span>}
      </span>
      <nav className="sidebar_nav">
        <ul>
          {sidebarData.map((item) => {
            return (
              <List
                key={item.content}
                {...item}
                setCount={setCount}
                count={count}
                toggle={toggle}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

const List = ({ id, icon, content, setCount, count, toggle }) => {
  return (
    <li
      onClick={() => setCount(id)}
      className={`row align-item gap-10 ${toggle ? "" : "width_min-content"} ${
        count === id ? "selected" : ""
      }`}
    >
      {icon}
      {toggle && <div>{content}</div>}
    </li>
  );
};
