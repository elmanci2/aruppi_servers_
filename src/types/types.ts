type streamwishVideo = {
    size: number;
    name: string;
    url: string;
};

type streamwishResults = {
    versions: streamwishVideo[];
};

export type streamwishType = {
    result: streamwishResults;
    status: number;
};