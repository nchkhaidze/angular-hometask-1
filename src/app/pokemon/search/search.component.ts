import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes'
import {MatChipInputEvent, MatChipList, MatChipListChange, MatChipSelectionChange} from '@angular/material/chips';
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
    tagControl = new FormControl();
    @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
    @ViewChild('chipList') chipList: ElementRef<MatChipList>;
    @Output() tagsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
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
    displayedTags: Observable<string[]>;

    constructor() {
        this.displayedTags = this.tagControl.valueChanges.pipe(
            startWith(null),
            map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()),
        );
    }
    
    ngOnInit() {
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
    
        if ((value || '').trim()) {
          this.tags.push(value.trim());
          this.tagsChange.emit(this.tags);
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
          this.tagsChange.emit(this.tags);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.tags.push(event.option.viewValue);
        this.tagsChange.emit(this.tags);
        this.tagInput.nativeElement.value = '';
        this.tagControl.setValue(null);
    }

    private _filter(value: string) {
        const filterValue = value.toLowerCase();
        return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
    }
}
