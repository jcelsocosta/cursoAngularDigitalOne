import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import { CourseService } from './courses.service';
@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',

})
export class CourseListComponent implements OnInit{

    //a inicializacao com um _ quer dizer para o desenvolvedor que for ler, que a variavel pertence somente a este component
    _courses: Course[];
    filteredCourses: Course[] = [];
    _filterBy: string;
    
    constructor(private courseService: CourseService){
        
    }
    ngOnInit(){
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLowerCase()) > -1 );
    }

    get filter(){
        return this._filterBy;
    }
}