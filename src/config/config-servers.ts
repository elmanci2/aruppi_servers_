import { config } from "./config";

export const servers_config =  {
    streamwish:{
        baseUrl:"https://api.streamwish.com",
        key:config.keys.streamwish.key
    },

    filelions:{
        baseUrl:"https://api.filelions.com",
        key:config.keys.filelions.key
    }
}