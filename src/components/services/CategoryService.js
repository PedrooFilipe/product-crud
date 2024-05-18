import axios from "axios";

class ProductService {

    async List(page, offset) {
        const skip = (page - 1) * offset;
        const response = await axios.get(`https://dummyjson.com/products?limit=${offset}&skip=${skip}`);
        console.log(response);
        return response;
    }

    async Update(id, product){

    }

    async Create(product){

    }

    async delete(id){

    } 

} 

export default ProductService;