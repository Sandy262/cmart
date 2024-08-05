import { useFormik } from "formik";
import React from "react";
import { useAddNewProductMutation } from "../../services/product.service";

function AddProduct() {
   var [addNewProductFn]=useAddNewProductMutation()
  var addProductForm = useFormik({
    initialValues: {
      name: "",
      price: "",
      imgUrl: "",
      company: "",
      category: "",
    },
    // onSubmit:(values)=>{
    //     addNewProductFn(values).then(()=>{
    //         addProductForm.resetForm();
    //         alert("Product Added Successfully")})
    // }
    onSubmit:async (values)=>{
        try{
        var res=await addNewProductFn(values)
        addProductForm.resetForm();
        alert("Product Added Successfully")
        }
        catch(e){
            console.log(e)
        }
    }
  });
  return <div>
    <h2>Add Product Form</h2>
    <form onSubmit={addProductForm.handleSubmit}>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Product Name" {...addProductForm.getFieldProps('name')}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Price" {...addProductForm.getFieldProps('price')}/>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Product Image" {...addProductForm.getFieldProps('imgUrl')}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Company name" {...addProductForm.getFieldProps('company')}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Category" {...addProductForm.getFieldProps('category')}/>
    </div>
  </div>
  <button className="btn btn-success">Save Product</button>
</form>
  </div>;
}

export default AddProduct;
