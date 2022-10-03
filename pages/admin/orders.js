import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function Row({ order }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineUp /> : <AiOutlineDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {order.orderId}
        </TableCell>
        <TableCell>{order.paymentId}</TableCell>
        <TableCell align="center">{order.amount}</TableCell>
        <TableCell align="center">{order.status}</TableCell>
        <TableCell>
          <div>
            <p>{order.name}</p>
            <p>{order.phone}</p>
            <div dangerouslySetInnerHTML={{ __html: order.address }} />
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h4" gutterBottom component="div">
                Product Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="text-cust_light_text">
                      Product Id
                    </TableCell>
                    <TableCell className="text-cust_light_text">
                      Title
                    </TableCell>
                    <TableCell className="text-cust_light_text" align="center">
                      Size
                    </TableCell>
                    <TableCell className="text-cust_light_text" align="center">
                      Quantity
                    </TableCell>
                    <TableCell className="text-cust_light_text" align="center">
                      Delivery Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.products.map((product) => (
                    <TableRow key={`${product.id}${product.size}`}>
                      <TableCell component="th" scope="row">
                        {product.id}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell align="center">{product.size}</TableCell>
                      <TableCell align="center">{product.qty}</TableCell>
                      <TableCell align="center">{product.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Orders = (props) => {
  const [orders, setOrders] = React.useState(props.orders);
  const changePage = async (event, page) => {
    const response = await fetch(
      `${process.env.HOST}getorders?pg=${(page - 1) * 10}`
    );
    let json = await response.json();
    setOrders(json.orders);
  };
  return (
    <BaseCard title="View Orders">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="text-cust_light_text">Order Id</TableCell>
              <TableCell className="text-cust_light_text">Payment Id</TableCell>
              <TableCell className="text-cust_light_text" align="center">
                Amount
              </TableCell>
              <TableCell className="text-cust_light_text" align="center">
                Payment Status
              </TableCell>
              <TableCell className="text-cust_light_text" align="center">
                Address
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <Row key={order._id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="my-6 ml-auto">
        <Pagination count={Math.ceil(props.count / 10)} onChange={changePage} />
      </div>
    </BaseCard>
  );
};

export async function getServerSideProps(context) {
  // const { category } = context.query;
  const response = await fetch(`${process.env.HOST}getorders?pg=0`);
  let orders = await response.json();
  return {
    props: orders,
  };
}

export default Orders;
