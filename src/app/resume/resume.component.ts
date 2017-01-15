import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// import { Http } from '@angular/http';

import { ResumeService } from './resume.service';
@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    providers: [ResumeService]
})

export class ResumeComponent implements OnInit {
    resumeTitle = 'Resume Title';
    resumes: [1, 2, 3, 4, 5];
    records: any;
    details: any;
    constructor(private resumeService: ResumeService) { }
    getResume(): void {
        this.resumeService.getResume().then(resumes => this.resumes = resumes);
    }
    /**
     * List of resume
     *
     */
    getResumes(): void {
        this.resumeService.getResumes().subscribe(res => {
            this.records = res;
            console.log("List of resume");
            console.log(this.records);

        })
    }

    ngOnInit(): void {
        this.getResumes();
    }

    /** Detailed resume */
    onSelect(id: any): void {
        this.details = true;
        this.resumeService.getDetails(id).subscribe(res => {
            this.records = res;
            console.log('detailed resume');
            console.log(this.records);
        })
    }
}