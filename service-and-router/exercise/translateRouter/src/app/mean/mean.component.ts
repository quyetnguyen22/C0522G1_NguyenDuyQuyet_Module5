import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../word/iword';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements OnInit {
  wordObj: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const wordTran = this.activatedRoute.snapshot.params.word;
    this.wordObj = this.dictionaryService.findByWord(wordTran);
    console.log(this.wordObj);
  }

}
