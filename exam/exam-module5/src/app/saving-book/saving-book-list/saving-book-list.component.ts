import { Component, OnInit } from '@angular/core';
import {SavingBook} from '../../model/saving-book';
import {BehaviorSubject, Observable} from 'rxjs';
import {SavingBookService} from '../../service/saving-book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saving-book-list',
  templateUrl: './saving-book-list.component.html',
  styleUrls: ['./saving-book-list.component.css']
})
export class SavingBookListComponent implements OnInit {

  page = 1;
  pageSize = 2;
  savingBooks$: Observable<SavingBook[]>;
  total$: Observable<number>;
  delId: number;

  constructor(private savingBookService: SavingBookService) {
  }

  ngOnInit(): void {
    this.getAllSavingBook();
  }

  getAllSavingBook() {
    this.savingBookService.getAll(this.page, this.pageSize).subscribe(value => {
      this.savingBooks$ = new BehaviorSubject<SavingBook[]>(value.data);
      this.total$ = new BehaviorSubject<number>(value.pagination._totalRows);
    });
  }

  deleteConfirm(savingBook: SavingBook) {
    console.log(savingBook);
    this.delId = savingBook.id;
  }

  delete() {
    this.savingBookService.deleteObject(this.delId).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Delete successfully!',
        text: 'Saving Book: ' + this.delId,
        showConfirmButton: false,
        timer: 2500
      });
      this.getAllSavingBook();
      // confirm('Delete successfully!\n' + this.delName);
    });

  }

}
