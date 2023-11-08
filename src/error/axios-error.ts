export class ApiError extends Error {
    id: string;
    status: number;
    statusText: string;
    data: any;
  
    constructor(id: string, status: number, statusText: string, data: any) {
      super(`API Error in request ID ${id}: ${status} - ${statusText}`);
      this.id = id;
      this.status = status;
      this.statusText = statusText;
      this.data = data;
    }
  }