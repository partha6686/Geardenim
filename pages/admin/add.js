import React, { useState } from "react";
import {
  Grid,
  Stack,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import useForm from "../../Hooks/useForm";
import { BsInfoCircle } from "react-icons/bs";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Add = () => {
  const router = useRouter();
  const [availability, setAvailability] = useState([]);
  const addProduct = async () => {
    console.log("ADDD");
    const data = {
      ...values,
      availability,
    };
    console.log(data);
    let response = await fetch(`${process.env.HOST}addproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    var json = await response.json();
    if (response.status == 200) {
      toast.success(json.msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "add-product-success",
      });
      router.push("/admin/products");
    } else {
      toast.error(json.error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "add-product-error",
      });
    }
    console.log(values);
  };
  const { handleChange, values, errors, handleSubmit } = useForm(
    {
      slug: "",
      title: "",
      brand: "",
      desc: "",
      img: "",
      category: "",
      mrp: "",
      price: "",
      size: "",
      qty: "",
    },
    addProduct
  );
  const handleAvailability = () => {
    if (!values.size) return;
    else {
      setAvailability([
        ...availability.filter((itm) => itm.size !== values.size),
        {
          size: values.size,
          qty: values.qty ? values.qty : 0,
        },
      ]);
    }
  };
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add a Product">
          <Stack spacing={3}>
            <div>
              <TextField
                error={errors.title ? true : false}
                className="w-full"
                value={values.title}
                onChange={handleChange}
                name="title"
                label="Title"
                variant="outlined"
              />
              {errors.title && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.title}
                  </div>
                </div>
              )}
            </div>
            <div>
              <TextField
                className="w-full"
                value={values.slug}
                onChange={handleChange}
                name="slug"
                label="Slug"
                variant="outlined"
              />
              {errors.slug && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.slug}
                  </div>
                </div>
              )}
            </div>
            <div>
              <TextField
                className="w-full"
                value={values.brand}
                onChange={handleChange}
                name="brand"
                label="Brand"
                variant="outlined"
              />
              {errors.brand && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.brand}
                  </div>
                </div>
              )}
            </div>
            <div>
              <TextField
                className="w-full"
                value={values.desc}
                onChange={handleChange}
                name="desc"
                label="Description"
                multiline
                rows={4}
              />
              {errors.desc && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.desc}
                  </div>
                </div>
              )}
            </div>
            <div>
              <TextField
                className="w-full"
                value={values.img}
                onChange={handleChange}
                name="img"
                label="Image URL"
                variant="outlined"
              />
              {errors.img && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.img}
                  </div>
                </div>
              )}
            </div>
            <div>
              <FormControl className="w-full">
                <InputLabel>Category</InputLabel>
                <Select
                  className="w-full"
                  aria-labelledby="Category"
                  name="category"
                  label="Category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <MenuItem value="suits">Suits</MenuItem>
                  <MenuItem value="jackets">Jackets</MenuItem>
                  <MenuItem value="pants">Pants</MenuItem>
                  <MenuItem value="gloves">Gloves</MenuItem>
                  <MenuItem value="helmets">Helmets</MenuItem>
                  <MenuItem value="boots">Boots</MenuItem>
                </Select>
              </FormControl>
              {errors.category && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.category}
                  </div>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold my-6">Inventory Quantity</h3>
              {availability[0] && (
                <TableContainer
                  component={Paper}
                  className="my-6 border-solid border"
                >
                  <Table size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Size</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {availability.map((row) => (
                        <TableRow key={row.size}>
                          <TableCell component="th" scope="row">
                            {row.size}
                          </TableCell>
                          <TableCell align="right">{row.qty}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
              <div className="flex items-center justify-start my-2 space-x-2">
                <div className="flex-grow">
                  <TextField
                    className="w-full"
                    value={values.size}
                    onChange={handleChange}
                    name="size"
                    label="Size"
                    variant="outlined"
                  />
                  {errors.size && (
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                        <BsInfoCircle className=" mr-1 text-bold" />
                        {errors.size}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <TextField
                    className="w-full"
                    value={values.qty}
                    onChange={handleChange}
                    type="number"
                    name="qty"
                    label="Quantity"
                    variant="outlined"
                  />
                  {errors.qty && (
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                        <BsInfoCircle className=" mr-1 text-bold" />
                        {errors.qty}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                className="bg-cust_green px-2 py-1 text-sm text-white my-2"
                onClick={handleAvailability}
              >
                Add
              </button>
            </div>
            <div>
              <TextField
                className="w-full"
                value={values.mrp}
                onChange={handleChange}
                name="mrp"
                type="number"
                label="MRP"
                variant="outlined"
              />
              {errors.mrp && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.mrp}
                  </div>
                </div>
              )}
            </div>
            <div>
              <TextField
                className="w-full"
                value={values.price}
                onChange={handleChange}
                name="price"
                type="number"
                label="Price after discount"
                variant="outlined"
              />
              {errors.price && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 text-bold" />
                    {errors.price}
                  </div>
                </div>
              )}
            </div>
          </Stack>
          <br />
          <button
            className="bg-cust_green px-4 py-2 font-semibold text-white mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Add;
