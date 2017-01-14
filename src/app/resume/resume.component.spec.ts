import { TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';
describe('Resume', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [ResumeComponent] });
    });

    it('Should work', () => {
        let fixture = TestBed.createComponent(ResumeComponent);
        expect(fixture.componentInstance instanceof ResumeComponent).toBe(true, 'should create ResumeComponent');
    });
})