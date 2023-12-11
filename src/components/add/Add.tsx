import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import React from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add({ slug, columns, setOpen }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // call API
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={handleClose}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form>
          {columns
            .filter((column) => column.field !== "id" && column.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
