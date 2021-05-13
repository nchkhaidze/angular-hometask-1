import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes'
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SearchComponent),
        multi: true,
    },
]
})
export class SearchComponent implements OnInit, ControlValueAccessor {
    visible = true;
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    tagControl = new FormControl();
    @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
    value: string;
    tags: string[] = [];
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
    autocompleteTags: Observable<string[]>;

    constructor() {
        this.autocompleteTags = this.tagControl.valueChanges.pipe(
            startWith(null),
            map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()),
        );
    }
    
    writeValue(value: string[]) {
        if (value !== undefined) {
            this.tags = value;
        }
    }

    onChange = (tags: string[]) => {};

    onTouched = () => {};

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    ngOnInit() {}

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
    
        if ((value || '').trim()) {
          this.tags.push(value.trim());
          this.onChange(this.tags);
        }
    
        if (input) {
          input.value = '';
        }
    
        this.tagControl.setValue(null);
      }

    remove(tag: string): void {
        const index = this.tags.indexOf(tag);
    
        if (index >= 0) {
          this.tags.splice(index, 1);
          this.onChange(this.tags);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.onTouched();
        this.tags.push(event.option.viewValue);
        this.onChange(this.tags);
        this.tagInput.nativeElement.value = '';
        this.tagControl.setValue(null);
    }

    private _filter(value: string) {
        const filterValue = value.toLowerCase();
        return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
    }
}
