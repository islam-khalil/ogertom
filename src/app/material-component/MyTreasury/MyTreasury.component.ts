
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>تسجيل الدين</h1>

  <form class="basic-form">
<div mat-dialog-content>

  <mat-form-field>
  <input matInput placeholder="رقم الهوية">
  </mat-form-field>
  <mat-form-field>
  <input matInput placeholder="القيمة">
  </mat-form-field>
  <mat-form-field>
  <mat-checkbox matInput class="example-margin" >ربط مع خدمة ضامن</mat-checkbox>
  </mat-form-field>
  </div>

</form>
<div mat-dialog-actions>
  <button mat-button [mat-dialog-close]="data.animal" tabindex="2">حفظ</button>
  <button mat-button (click)="onNoClick()" tabindex="-1">الغاء</button>
</div>`
})
export class DialogOverviewExampleDialogComponent1 {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent1>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-MyTreasury',
  templateUrl: './MyTreasury.component.html',
  styleUrls: ['./MyTreasury.component.scss']
})
export class MyTreasuryComponent {
  tableColumns: string[] = ['NID', 'Name', 'Relation', 'Known'];
  dataSource = [{ NID:'1010101010', Name: 'محمد سالم',Relation:'ابن', Known: 'نعم' },
  { NID:'1210101010', Name: 'احمد سالم',Relation:'ابن', Known: 'نعم' },
  { NID:'130101010', Name: 'عبد الجبار سالم',Relation:'اخ', Known: 'نعم' },
  { NID:'1410101010', Name: 'هلا مسند  ',Relation:'زوجه', Known: 'لا' },
  { NID:'1510101010', Name: 'شيخة العتيبي ',Relation:'زوجة', Known: 'نعم' }
  ];
  name: any;
  animal: any;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent1, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
