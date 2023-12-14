import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { useEffect, useState } from "react";
import Add from "../../components/add/Add";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "./redux/userActions";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    flex: 0,
  },
  {
    field: "img",
    flex: 1,
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    flex: 1,
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    flex: 1,
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    flex: 2,
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    flex: 1,
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    flex: 1,
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    flex: 1,
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

function Users() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // Call the fetchUserList action creator using dispatch
    dispatch(fetchUserList() as any);
  }, [dispatch]);

  const { data, listLoading } = useSelector((state: any) => state.users);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button className="btn" onClick={() => setOpen(true)}>
          Add New User
        </button>
      </div>

      <DataTable
        slug="users"
        columns={columns}
        rows={data}
        loading={listLoading}
      />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Users;
