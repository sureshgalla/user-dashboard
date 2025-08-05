import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../redux/actions/loadDataAction";

const Form = ({ form, selectedUser }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    role: "",
  });

  useEffect(() => {
    selectedUser
      ? setFormData(selectedUser)
      : setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          role: "",
        });
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitUser = (e) => {
    e.preventDefault();
    selectedUser ? dispatch(editUser(formData)) : dispatch(addUser(formData));
    form(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 p-1">
        <form onSubmit={submitUser}>
          <div className="mx-sm-3">
            <div className="form-group">
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your contact number"
                onChange={handleChange}
                name="contact"
                value={formData.contact}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Role"
                onChange={handleChange}
                name="role"
                value={formData.role}
              />
            </div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
