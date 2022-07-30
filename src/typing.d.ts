declare class faceIO {
    constructor(publicAPIKey: string)
    enroll(payload:any): Promise<any>;
    authenticate(payload:any): Promise<any>;
}