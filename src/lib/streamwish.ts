import { servers_config } from "../config/config-servers";
import { streamwishType } from "../types/types";
import { get_axios }from "../util/axios";

const { baseUrl, key } = servers_config.streamwish;

export const streamwish = async (url: string) => {
    try {
       
        const id = url.split("/").pop();

        if (!id) {
            throw new Error("Invalid parameter");
        }

        const api = new get_axios(baseUrl);
        const file_state_url = `api/file/direct_link?key=${key}&file_code=${id}`;

        const result = await api.get(file_state_url, "streamwish") as streamwishType;

        const response = {
            links: result.result.versions,
            status: result.status,
            message: "ok",
        };

        return response;
    } catch (error) {
        console.error("Error:", error);

        const errorResponse = {
            links: [],
            status: 0,
            message: "Failed to obtain the URL",
        };

        return errorResponse;
    }
};
