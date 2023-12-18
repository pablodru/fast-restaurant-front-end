import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

async function createOrderNotClosed(body) {
    const response = await axios.post(`${URL}/order`, body);

    return response.data
}

const apiUtil = {createOrderNotClosed};

export default apiUtil;