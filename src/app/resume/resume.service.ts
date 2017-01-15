import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class ResumeService {

    constructor(private http: Http) {
        console.log("Resume Service called");
    }

    getResume(): Promise<[1, 2, 3, 4, 5]> {
        return Promise.resolve([1, 2, 3, 4, 5]);
    }
    /**
     * List all resumes
     */
    getResumes(): Observable<Response> {
        return this.http.get('/resume')
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Get details of selected resume
     */
    getDetails(id: string): Observable<Response> {
        return this.http.get('/resume/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}