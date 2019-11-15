import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NotesService } from 'src/app/notes.service';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  notes: Array<Note> = [];
  note: Note = new Note();
  constructor(private noteService: NotesService) { }
  ngOnInit(): void {
    this.noteService.getNotes().subscribe(res => {
      this.notes = res;
    },
      err => this.errMessage = err.message);
  }

  save() {
    if (this.note.title !== undefined && this.note.text !== '') {
      this.noteService.addNote(this.note).subscribe(res => {
        this.notes.push(res);
      }, err => this.errMessage = err.message);
    } else {
      this.errMessage = 'Title and Text both are required fields';
    }

  }
}
