import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const columns = [
  { id: "fname", label: "First Name", minWidth: 170 },
  { id: "lname", label: "Last Name", minWidth: 170 },

  { id: "email", label: "Email", minWidth: 170 },
  { id: "dob", label: "Date of birth", minWidth: 170 },
  { id: "date", label: "Date Created", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
  { id: "empty", label: "", minWidth: 100 },
];

function createData(fname, lname, email, dob, date, status, empty) {
  return { fname, lname, email, dob, date, status, empty };
}

const Beneficiaries = () => {
  const [businesses, setBusinesses] = useState([]);

  const fetchBusinesses = async () => {
    try {
      const res = await axios.get("http://208.73.206.2:8080/api/businesses");
      setBusinesses(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, [businesses?.length]);

  const [query, setQuery] = useState("");

  const businessByName = businesses?.filter((business) => {
    if (query === "") {
      return business;
    } else if (
      business.business_name.toLowerCase().includes(query.toLowerCase())
    ) {
      return business;
    }
  });

  const VStatus = () => {
    return (
      <div
        style={{
          padding: "5px",
          background: "#2b7833",
          color: "white",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        verified
      </div>
    );
  };

  const UnVStatus = () => {
    return (
      <div
        style={{
          padding: "5px",
          background: "red",
          color: "white",
          borderRadius: "20px",
        }}
      >
        unverified
      </div>
    );
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: "5px",
    height: "300px",
    fontFamily: 'DM Sans'
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = businessByName?.map((business) => {
    const info = {
      fname: business?.business_name,
      lname: business?.business_name,
      email: business?.business_email,
      dob: business?.business_incorporation_date.slice(0, 10),
      date: business?.added_datetime.slice(0, 10),
      status: <VStatus />,
      empty: (
        <div>
          <IconButton
            aria-controls={openDropDown ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openDropDown ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openDropDown}
            onClose={handleCloseDropDown}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              style={{ fontSize: "12px", fontFamily: "DM Sans" }}
              onClick={handleOpen}
            >
              Activate account
            </MenuItem>
            <MenuItem
              style={{ fontSize: "12px", fontFamily: "DM Sans" }}
              onClick={handleCloseDropDown}
            >
              Edit
            </MenuItem>
          </Menu>
        </div>
      ),
    };

    return info;
  });

  const rows = [
    data?.map((el) => {
      return createData(
        el.fname,
        el.lname,
        el.email,
        el.dob,
        el.date,
        el.status,
        el.empty
      );
    }),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className="laneheaderstyle" style={{ fontFamily: "DM Sans" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <div className="text-2xl text-black">Accounts</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            color="success"
            sx={{
              width: "305px",
              background: "white",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  paddingRight: "0",
                  borderRadius: "23px",
                  border: "none",
                },
              },

              "& .MuiInputBase-root": {
                fontFamily: "Poppins",
                fontSize: "14px",
              },
            }}
            size="small"
            className="search"
            id="outlined-basic"
            placeholder="Search by name"
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <SearchIcon style={{ color: "#eca44c" }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      {businesses?.length === 0 ? (
        <div>No data</div>
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontFamily: "DM Sans",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows[0]
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row, _) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={_}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ fontFamily: "DM Sans" }}
                            >
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows[0]?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box style={style} className="bg-white w-[85%] md:w-[30%] px-3 pt-5">
          <div> Please enter beneficiary's ICSS ID:</div>
          <div>
            <TextField
              color="success"
              style={{
                width: "100%",
                marginTop: '20px',
                paddingBottom: "15px",
                borderRadius: "6px",
              }}
              id="icssis"
              variant="outlined"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="p-2 w-[80px] rounded bg-[red] text-white"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button className="p-2 w-[80px] rounded bg-[green] text-white">
              Ok
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Beneficiaries;
