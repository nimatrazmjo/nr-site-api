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
    constructor(private resumeService: ResumeService) { }
    getResume(): void {
        this.resumeService.getResume().then(resumes => this.resumes = resumes);
    }

    getResumes(): void {
        this.resumeService.getResumes().subscribe(res => {
            this.records = res;
            console.log(this.records);

        })
    }
    ngOnInit(): void {
        this.getResumes();
    }
    //resumeTitle = ResumeService.getResume();
}