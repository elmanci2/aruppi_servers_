import axios, { AxiosResponse } from "axios";
import { ApiError } from "../error/axios-error";

export class get_axios<T> {
    baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async get(url: string, id: string): Promise<T> {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseURL}/${url}`);
            if (response.status === 200) {
                const data: any = response.data;
                return data;
            } else {
                throw new ApiError(id, response.status, response.statusText, response.data);
            }
        } catch (error) {
            if (error instanceof ApiError) {
              
                console.error("Error en solicitud ID:", id);
                console.error("Error:", error.status, error.statusText);
                console.error("Data:", error.data);
                throw error;
            } else {
               
                console.error("Error inesperado:", error);
                throw error;
            }
        }
    }
}
