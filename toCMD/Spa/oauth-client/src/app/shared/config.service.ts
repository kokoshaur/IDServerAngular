import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {    

    constructor() {}

    get authApiURI() {
        return 'https://localhost:44377/api';
    }    
     
    get resourceApiURI() {
        return 'https://localhost:44341/api';
    }  
}