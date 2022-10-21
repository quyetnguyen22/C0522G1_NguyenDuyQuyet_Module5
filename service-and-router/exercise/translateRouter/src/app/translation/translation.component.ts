import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IWord} from '../word/iword';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  words: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.words = this.dictionaryService.getAllWords();
  }
}
