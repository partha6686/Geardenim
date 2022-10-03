import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Paper,
  Pagination,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import Link from "next/link";

const Products = (props) => {
  const [products, setProducts] = useState(props.products);
  const changePage = async (event, page) => {
    const response = await fetch(
      `${process.env.HOST}getproducts?pg=${(page - 1) * 10}`
    );
    let json = await response.json();
    setProducts(json.products);
  };

  return (
    <BaseCard title="View Products">
      <TableContainer component={Paper}>
        <Table
          aria-label="simple table"
          sx={{
            mt: 3,
            whiteSpace: "nowrap",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Brand
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  MRP
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Price
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow key={product.slug}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {product._id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      <a href={`/product/${product.slug}`} target="_blank">
                        {product.title}
                      </a>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      {product.brand}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        pl: "4px",
                        pr: "4px",
                        backgroundColor: "#50D890",
                        color: "#fff",
                      }}
                      size="small"
                      label={product.category}
                    ></Chip>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">₹ {product.mrp}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">₹ {product.price}</Typography>
                  </TableCell>
                </TableRow>
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
  const response = await fetch(`${process.env.HOST}getproducts?pg=0`);
  let products = await response.json();
  return {
    props: products,
  };
}

export default Products;
