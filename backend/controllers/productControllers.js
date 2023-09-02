import {
  ArrowForwardIosTwoTone,
  ProductionQuantityLimitsRounded,
} from "@mui/icons-material";
import Product from "../models/product";
import APIFilters from "@/backend/utils/APIFilters";



export const newProduct = async (req, res, next) => {
  let product = await Product.create(req.body);
  res.status(200).json({ product });
};

// ************************************************


// Finding All The Product At Once
export const getProducts = async (req, res, next) => {

  // For Pagination
  const resPerPage = 3;

  // FOR FRONTEND
  const productsCount = await Product.countDocuments();

  // Getting the Products As Per The Search
  const apiFilters = new APIFilters(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFilters.query;

  // FOR FRONTEND
  const filteredProductsCount = products.length;

  apiFilters.pagination(resPerPage);

  products = await apiFilters.query.clone();
  res.status(200).json({
    productsCount,
    filteredProductsCount,
    resPerPage,
    products,
  });
};

// *******
// export const getProducts = async (req, res, next) => {
//     const resPerPage = 3;
//     const productsCount = await Product.countDocuments();

//     const apiFilters = new APIFilters(Product.find(), req.query)
//       .search()

//     let products = await apiFilters.query;
//     const filteredProductsCount = products.length;

//     apiFilters.pagination(resPerPage);

//     products = await apiFilters.query.clone();

//     res.status(200).json({
//       productsCount,
//       resPerPage,
//       filteredProductsCount,
//       products,
//     });
//   };

// Finding Specific Product By Its Id


export const getProduct = async (req, res, next) => {
  const product = await Product.findById(request.query.id);

  if (!product) {
    res.status(404).json({
      error: "Product Not Found",
    });
  }
  res.status(200).json({
    product,
  });
};
