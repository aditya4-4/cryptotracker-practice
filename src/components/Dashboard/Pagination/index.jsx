/* eslint-disable react/prop-types */


import Pagination from "@mui/material/Pagination";
import "./styles.css";
function PaginationComponent({ pageNumber, handleOnPageChange }) {
    
  return (
    <div className="pagination-div">
      <Pagination
        count={10}
        page={pageNumber}
        onChange={(event, value) =>handleOnPageChange(event, value)}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}

export default PaginationComponent;