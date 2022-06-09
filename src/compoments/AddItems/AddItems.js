import React from 'react';

const AddItems = () => {
    const handleAddProduct =  event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const vendor =event.target.vendor.value;
        const product ={name, vendor};

        // SEND DATA TO SERVER
        fetch ('http://localhost:5000/product', {
          method:'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('success houechy',data )
        })
    }

    return (
      <div>
          <form onSubmit={handleAddProduct}>
              <input type="text" name="name" placeholder='Name' required />
              <br />
              <input type="text" name="vendor" placeholder='vendor Name' required />
              <br />
              <input type="submit" value="Add Product" />
          </form>
      </div>
  );
};

export default AddItems;