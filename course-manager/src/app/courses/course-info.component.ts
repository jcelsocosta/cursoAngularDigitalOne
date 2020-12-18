import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './courses.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

    }
    ngOnInit(): void{
        this.courseService.retrieveByIdAux(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course =>{
                this.course = course;
            },
            error: err =>{
                console.log("Error: "+err);
            }
        })
    }

    save(){
        this.courseService.saveAux(this.course).subscribe({
            next: course => {
                console.log("Save with Sucess!!!", course);
            },
            error: err =>{
                console.log("Error: "+err);
            }
        })
    }
}