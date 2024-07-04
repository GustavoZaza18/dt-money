import { Axios } from "axios";
import { api } from "../lib/axios";

        export interface Transaction {
        "id": string
        "date": string
        "category": string
        "name": string
        "price": string
        "type": string
}


export async function getAllTransactions() {
    const response = await api.get<Transaction[]>('transactions')

    return response.data
}


export async function createTransaction(data: Transaction) {
    await api.post('/transactions', data)
}