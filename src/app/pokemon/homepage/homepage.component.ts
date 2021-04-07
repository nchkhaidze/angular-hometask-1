import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
    tags = [
        'Angular',
        'AngularJS',
        'Angular Material',
        'React',
        'Redux',
        'Vue',
        'JavaScript',
        'TypeScript',
        'RxJS',
        'HTML',
        'HTML5',
        'SASS',
        'SCSS',
        'Node.js',
        'HTTP',
        'HTTPS',
        'HTTP/2',
        'Git',
        'GitHub',
        'GitLab',
    ];

    myControl = new FormControl();
}
