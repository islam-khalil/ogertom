import { Component } from '@angular/core';

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

  constructor() { }
}
