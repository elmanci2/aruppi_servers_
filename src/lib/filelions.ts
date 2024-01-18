import { servers_config } from "../config/config-servers";
import { streamwishType } from "../types/types";
import { get_axios } from "../util/axios";

const { baseUrl, key } = servers_config.filelions;

export const filelions = async (url: string) => {
  try {
    const id = url.split("/").pop();

    if (!id) {
      throw new Error("Invalid parameter");
    }
    const api = new get_axios(baseUrl);

    const file_state_url = `api/file/direct_link?key=${key}&file_code=${id}`;

    const response = (await api.get(
      file_state_url,
      "filelions-link"
    )) as streamwishType;

    const link = response?.result.versions.find(
      (e) => e.name === "h" || e.name === "n"
    );

    const { name, size, ...resto }: any = link;

    const result = {
      ...resto,
    };

    return result;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("erro filelions");
  }
};
