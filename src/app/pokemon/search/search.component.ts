import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes'
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit {
    visible = true;
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    tagForm: FormGroup;
    @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
    @Output() search: EventEmitter<string> = new EventEmitter<string>();
    tags = ['Angular'];
    allTags = [
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

    constructor(private formBuilder: FormBuilder) {
        this.tagForm = this.formBuilder.group({
            tag: [ "", Validators.minLength(3) ],
        })

        this.displayedTags = this.tagForm.get("tag")!.valueChanges.pipe(
            startWith(null),
            map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()),
            tap(value => console.log(value)),
        )
    }
    
    ngOnInit() {
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
    
        if ((value || '').trim()) {
          this.tags.push(value.trim());
        }
    
        if (input) {
          input.value = '';
        }
    
        this.tagForm.get("tag")?.setValue(null);
      }

    remove(tag: string): void {
        const index = this.tags.indexOf(tag);
    
        if (index >= 0) {
          this.tags.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.tags.push(event.option.viewValue);
        this.tagInput.nativeElement.value = '';
        this.tagForm.get("tag")?.setValue(null);
    }

    private _filter(value: string) {
        const filterValue = value.toLowerCase();
        return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
    }
}
