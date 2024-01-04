/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import { Link } from "react-router-dom";
import useMessages from "../utils/useMessages";
import CreateEmail from "./CreateEmail";
import { ComposeContext } from "../context/ComposeContext";
import Model from "./Model";

const Home = () => {
  const { data, setData } = useMessages("https://jsonplaceholder.org/posts");
  const { isComposeEmail, isMax } = useContext(ComposeContext);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 20;

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;

  const filteredData = data.slice(firstIndex, lastIndex);

  const handleCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id)
      );
    }
  };

  const handleSelectAllChange = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      const allRowIds = data.map((row) => row.id);
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows([]);
    }

    setSelectAll(isChecked);
  };

  function forward() {
    if (currentPage === 5) return;
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function backward() {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function removeItem(ids) {
    const remainingData = filteredData.filter((s) => s.id !== ids);
    setData(remainingData);
  }

  return (
    <main className="home">
      <Pagination
        dataLength={data.length}
        currentPage={currentPage}
        postPerPage={postPerPage}
        forward={forward}
        backward={backward}
        selectAll={selectAll}
        handleSelectAllChange={handleSelectAllChange}
      />
      <Table
        data={filteredData}
        removeItem={removeItem}
        selectedRows={selectedRows}
        handleCheckboxChange={handleCheckboxChange}
      />
      {isComposeEmail && <CreateEmail />}
      {isMax && <Model />}
    </main>
  );
};

export default Home;

const Table = ({ data, handleCheckboxChange, selectedRows }) => {
  if (data?.length === 0)
    return <h2 style={{ textAlign: "center" }}>Loading....</h2>;
  return (
    <>
      <table>
        <tbody>
          {data?.map((entry, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index + 1)}
                    onChange={(e) => handleCheckboxChange(e, index + 1)}
                  />
                </td>
                <td>
                  <StarBorderPurple500RoundedIcon style={{ color: "gray" }} />
                </td>
                <td>{entry["slug"]}</td>
                <td>
                  <Link to={`/${entry.id}`}> {entry["title"]}</Link>
                </td>
                {<td>{entry["publishedAt"]}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const Pagination = ({
  currentPage,
  postPerPage,
  forward,
  backward,
  dataLength,
  selectAll,
  handleSelectAllChange,
}) => {
  return (
    <div className="pagination row space-between">
      <div>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
        />
      </div>
      <div className="row gap-10">
        <div>
          {`${
            currentPage === 1 ? currentPage : 1 + postPerPage * currentPage - 20
          } - ${postPerPage * currentPage} of ${dataLength}`}
        </div>
        <div className="navigation row gap-10">
          <div onClick={backward}>&lt;</div>
          <div onClick={forward}>&gt;</div>
        </div>
      </div>
    </div>
  );
};
