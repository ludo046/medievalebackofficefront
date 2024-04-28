import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { AddUserComponent } from '../dialog/add-user/add-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NavComponent, MatIcon, MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(AddUserComponent);
  // }
}
