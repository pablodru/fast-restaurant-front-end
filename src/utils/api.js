import axios from "axios";
import { getName } from "./helpers";

const URL = import.meta.env.VITE_API_URL;

async function createOrderNotClosed(body) {
    const response = await axios.post(`${URL}/order`, body);

    return response.data
}

async function getOrdersNotClosed() {
    const name = getName();
    if (!name) {
        return false;
    }
    const response = await axios.get(`${URL}/order/checkout/${name}`);
    return response.data;
}

async function cancelOrder() {
    const name = getName();
    if (!name) {
        return false;
    }
    const response = await axios.delete(`${URL}/order/cancel/${name}`);
    return response.data;
}

async function getCodeNumber() {
    const response = await axios.get(`${URL}/order/number`);
    return response.data
}

async function closeOrder(newName) {
    const oldName = getName();
    const response = await axios.put(`${URL}/order`, {oldName, newName});
    return response.data;
}

async function getOrdersClosed() {
    const response = await axios.get(`${URL}/orders/closed`);
    return response.data;
}

const apiUtil = {createOrderNotClosed, getOrdersNotClosed, cancelOrder, getCodeNumber, closeOrder, getOrdersClosed};

export default apiUtil;