import axios from "axios";

class ProductService {

    pathUrl = 'https://dummyjson.com/products';

    async List(page, offset) {
        const skip = (page - 1) * offset;
        const response = await axios.get(`${this.pathUrl}?limit=${offset}&skip=${skip}`);
        return response;
    }

    async Update(id, product){

    }

    async Create(product){
        return await axios.post(`${this.pathUrl}/add`, { product }, { headers: { 'Content-Type': 'application/json' } })
    }

    async delete(id){
        return await axios.delete(`${this.pathUrl}/${id}`)
    } 

} 

export default ProductService;