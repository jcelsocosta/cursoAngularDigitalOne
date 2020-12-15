import { Component, OnInit } from '@angular/core';
import {Course} from './course';
@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',

})
export class CourseListComponent implements OnInit{

    courses: Course[];

    constructor(){
        this.courses = [];
    }
    ngOnInit(){
        this.courses = [
            {
                id: 1 ,
                name: "Angular: Forms",
                imageUrl: "",
                preco: 99.99 ,
                code: 'XPS-8796' ,
                duration: 120,
                rating: 4.4,
                releaseDate: '20/05/2020'

            },
            {
                id: 2 ,
                name: "Angular: HTTP",
                imageUrl: "",
                preco: 45.99 ,
                code: 'LKL-8796' ,
                duration: 80,
                rating: 4.6,
                releaseDate: '02/12/2019'
            },
        ]
    }

}