type streamwishVideo = {
    size: number;
    name: string;
    url: string;
};

type streamwishResults = {
    versions: streamwishVideo[];
    hls_direct?:string
 
};

export type streamwishType = {
    result: streamwishResults;
    status: number;
    msg?:string
  
};