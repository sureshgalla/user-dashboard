import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/actions/loadDataAction";
import Form from "./Form";

const Grid = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [loading, setLoading] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);
  const [form, setForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [search, setSearch] = useState("");
  const [displayCount, setDisplayCount] = useState(2);

  // edit button
  const handleEdit = (data) => {
    setForm(true);
    setSelectedUser(data);
  };

  // delete button
  const handleDelete = (id) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(deleteUser(id));
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (data.length === 0) {
      setNoDataFound(true);
    }
  }, [data]);

  // add user button
  const handleAddUser = () => {
    setForm(true);
    setSelectedUser(null);
  };

  // search bar
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // load more button
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayCount(displayCount + 2);
      setLoading(false);
    }, 3000);
  };

  // serch includes in data
  const finalList = data
    .slice(0, displayCount)
    .filter((list) => list.firstName.toLowerCase().includes(search));
  return (
    <div>
      {noDataFound ? (
        <h3>No Data Found</h3>
      ) : (
        <>
          {loading && <div className="spinner-border text-danger"></div>}
          {!form && (
            <>
              <input
                onChange={handleSearch}
                type="text"
                placeholder="search Name"
              />
              <button onClick={handleAddUser}>Add User</button>
              <table
                className={`table table-striped table-hover ${
                  loading ? "disabled" : ""
                }`}
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Role</th>
                  </tr>
                </thead>
                {finalList.map((list, i) => (
                  <tbody key={i} className="table table-light table-hover">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{list.firstName}</td>
                      <td>{list.lastName}</td>
                      <td>{list.email}</td>
                      <td>{list.contact}</td>

                      <td>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>{list.role}</span>
                          <div style={{ alignSelf: "flex-end" }}>
                            <button
                              onClick={() => handleEdit(list)}
                              style={{ marginRight: "5px" }}
                            >
                              Edit
                            </button>
                            <button onClick={() => handleDelete(i + 1)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              {data.length > displayCount && (
                <button onClick={handleLoadMore}>Load More</button>
              )}
            </>
          )}
          {form && (
            <Form
              form={setForm}
              selectedUser={selectedUser}
              handleAddUser={handleAddUser}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Grid;
