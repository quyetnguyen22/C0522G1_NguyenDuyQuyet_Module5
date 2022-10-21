import {Injectable} from '@angular/core';
import {IWord} from '../word/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {
      word: 'Papaya',
      mean: 'Quả đu đủ'
    },
    {
      word: 'Dragon fruit',
      mean: 'Quả thanh long'
    },
    {
      word: 'Custard apple',
      mean: 'Quả na'
    },
    {
      word: 'Logan',
      mean: 'Quả nhãn'
    },
    {
      word: 'Grapes',
      mean: 'Quả nho'
    },
    {
      word: 'Grapefruit',
      mean: 'Quả bưởi'
    }
  ];

  constructor() {
  }

  getAllWords() {
    return this.words;
  }

  findByWord(word: string): IWord {
    return this.words.find(wordObj => wordObj.word === word);
  }
}
