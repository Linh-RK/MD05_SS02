import React from "react";
import Task08_user from "./task08_user";

export default function Task08() {
  const users = [
    {
      id: 1,
      fullName: "Daniel Kristeen",
      currentCareer: "Visual Designer",
      pastCareer: "teacher",
      email: "daniel@website.com",
      dateOfBirth: "15 Mar 1988",
    },
    {
      id: 2,
      fullName: "Emma Smith",
      currentCareer: "Visual Designer",
      pastCareer: "teacher",
      email: "daniel@website.com",
      dateOfBirth: "15 Mar 1855",
    },
    {
      id: 3,
      fullName: "Olivia Johnson",
      currentCareer: "Visual Designer",
      pastCareer: "teacher",
      email: "daniel@website.com",
      dateOfBirth: "17 Aug 1988",
    },
    {
      id: 4,
      fullName: "Isabella Williams",
      currentCareer: "Visual Designer",
      pastCareer: "teacher",
      email: "daniel@website.com",
      dateOfBirth: "26 Mar 1999",
    },
    {
      id: 5,
      fullName: "Sophia Jones",
      currentCareer: "Visual Designer",
      pastCareer: "teacher",
      email: "daniel@website.com",
      dateOfBirth: "16 Aug 2001",
    },
    {
      id: 6,
      fullName: "Charlotte Brown",
      currentCareer: "Visual Designer",
      pastCareer: "teacher",
      email: "daniel@website.com",
      dateOfBirth: "15 Mar 1988",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-uppercase mb-0">
                  4. MANAGER USER
                </h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    {users.map((user, index) => (
                      <React.Fragment key={user.id}>
                        <Task08_user user={user} index={index} />
                      </React.Fragment>
                    ))}
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
