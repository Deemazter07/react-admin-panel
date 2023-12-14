import { useEffect, useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "./redux/productActions";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0 },
  {
    field: "img",
    headerName: "Image",
    flex: 1,
    renderCell: ({ row }) => {
      return <img src={row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    flex: 1,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    flex: 1,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    flex: 1,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    flex: 1,
    type: "boolean",
  },
];

function Products() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList() as any);
  }, [dispatch]);

  const { data, listLoading } = useSelector((state: any) => state.products);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button className="btn" onClick={() => setOpen(true)}>
          Add New Product
        </button>
      </div>
      <DataTable
        slug="products"
        columns={columns}
        rows={data}
        loading={listLoading}
      />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Products;
