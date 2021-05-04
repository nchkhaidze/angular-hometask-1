import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit {
    constructor(private formBuilder: FormBuilder) {
    }

    tagForm: FormGroup;
    ngOnInit() {
        this.tagForm = this.formBuilder.group({
            tag: [ "", Validators.minLength(3) ],
        })

        this.displayedTags = this.tagForm.get("tag")!.valueChanges
        .pipe(
            debounceTime(1000),
            startWith(""),
            tap(value => this.search.emit(value)),
            map(value => this._filter(value)),
        )
    }
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
    displayedTags: Observable<string[]>;
    private _filter(value: string) {
        const filterValue = value.toLowerCase();
        return this.tags.filter(tag => tag.toLowerCase().includes(filterValue));
    }

    @Output() search: EventEmitter<string> = new EventEmitter<string>();
}
