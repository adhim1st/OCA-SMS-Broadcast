import React from "react";
import sortIcon from "../img/sort.svg";
import filterIcon from "../img/filter.svg";
import tableData from "../data/tableData";
const Table = () => {
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Recent BLAST</h2>
        <div className="table-function">
          <div className="sort">
            <img src={sortIcon} alt="sort" />
            <p>Sort</p>
          </div>
          <div className="filter">
            <img src={filterIcon} alt="filter" />
            <p>Filter</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="table-content">
        <table className="blast-table">
          <thead>
            <tr>
              <th>id name</th>
              <th>type</th>
              <th>campaign</th>
              <th>total blast</th>
              <th>status</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => {
              return (
                <tr>
                  <td>{data.id_name}</td>
                  <td>{data.type}</td>
                  <td>{data.campaign}</td>
                  <td>{data.total_blast}</td>
                  <td
                    id="status"
                    className={
                      data.status === "Success"
                        ? "status-green"
                        : data.status === "Failed"
                        ? "status-red"
                        : data.status === "Pending"
                        ? "status-yellow"
                        : "status-purple"
                    }
                  >
                    {data.status}
                  </td>
                  <td>{data.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
