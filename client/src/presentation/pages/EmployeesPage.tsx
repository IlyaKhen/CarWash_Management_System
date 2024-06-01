import * as React from "react";
import { employeesData } from "@/infrastructure/api/mockData/EmploeesData";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full Name", width: 130 },
  { field: "role", headerName: "Role", width: 130 },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 90,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 90,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const EmployeesPage = () => {
  return (
    <div>
      <h1>Employees</h1>
      {/* {employeesData.map((employee) => (
        <div key={employee.id}>
          <h2>{employee.name}</h2>
          <p>{employee.email}</p>
        </div>
      ))} */}
      <DataGrid
        rows={employeesData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default EmployeesPage;
