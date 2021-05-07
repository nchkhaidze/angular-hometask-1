import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-pokemon',
  templateUrl: './manage-pokemon.component.html',
  styleUrls: ['./manage-pokemon.component.scss']
})
export class ManagePokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onSearch(searchValue: string) {
    console.log(searchValue);
}

}
