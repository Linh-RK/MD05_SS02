import React from "react";

export default function Task08_user(param) {
  const user = param.user;
  const index = param.index;

  return (
    <tr>
      <td className="pl-4">{index + 1}</td>
      <td>
        <h6 className="font-medium mb-0">{user.fullName}</h6>
      </td>
      <td>
        <span className="text-muted">{user.currentCareer}</span>
        <br />
        <span className="text-muted">Past : {user.pastCareer}</span>
      </td>
      <td>
        <span className="text-muted">{user.email}</span>
        <br />
      </td>
      <td>
        <span className="text-muted">{user.dateOfBirth}</span>
        <br />
      </td>
      <td>
        <select
          className="form-control category-select"
          id="exampleFormControlSelect1"
        >
          <option>Modulator</option>
          <option>Admin</option>
          <option>User</option>
          <option>Subscriber</option>
        </select>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        >
          <i className="fa fa-trash" />{" "}
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        >
          <i className="fa fa-edit" />{" "}
        </button>
      </td>
    </tr>
  );
}
