import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  keys:{
    streamwish: {name:"streamwish" , key:process.env.streamwish_key},
    filelions: {name:"filelions" , key:process.env.filelions_key}
  },

  db:{
    db_names:{
      servers:"servers"
    }
  }
};
