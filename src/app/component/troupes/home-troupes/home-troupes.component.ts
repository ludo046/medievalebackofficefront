import { Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddTroupeComponent } from '../../dialog/add-troupe/add-troupe.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-home-troupes',
  standalone: true,
  imports: [NavComponent, MatButtonModule, MatIconModule,AddTroupeComponent,  MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,],
  templateUrl: './home-troupes.component.html',
  styleUrl: './home-troupes.component.scss'
})
export class HomeTroupesComponent {
  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(AddTroupeComponent);
  // }
}
