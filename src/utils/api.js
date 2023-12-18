import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

async function createOrderNotClosed(body) {
    const response = await axios.post(`${URL}/order`, body);

    return response.data
}

async function getOrdersNotClosed() {
    const {name} = JSON.parse(localStorage.getItem('data'));
    if (!name) {
        return false;
    }
    const response = await axios.get(`${URL}/order/checkout/${name}`);
    return response.data;
}

const apiUtil = {createOrderNotClosed, getOrdersNotClosed};

export default apiUtil;