import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inheretors',
  templateUrl: './inheretors.component.html',
  styleUrls: ['./inheretors.component.css']
})
export class InheretorsComponent implements OnInit {
  tableColumns: string[] = ['NID', 'Name', 'Relation', 'Known'];
  dataSource = [{ NID:'1010101010', Name: 'محمد سالم',Relation:'ابن', Known: 'نعم' },
  { NID:'1210101010', Name: 'احمد سالم',Relation:'ابن', Known: 'نعم' },
  { NID:'130101010', Name: 'عبد الجبار سالم',Relation:'اخ', Known: 'نعم' },
  { NID:'1510101010', Name: 'شيخة العتيبي ',Relation:'زوجة', Known: 'نعم' }
  ];
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.dataSource = [{ NID:'1010101010', Name: 'محمد سالم',Relation:'ابن', Known: 'نعم' },
    { NID:'1210101010', Name: 'احمد سالم',Relation:'ابن', Known: 'نعم' },
    { NID:'130101010', Name: 'عبد الجبار سالم',Relation:'اخ', Known: 'نعم' },
    { NID:'1510101010', Name: 'شيخة العتيبي ',Relation:'زوجة', Known: 'نعم' },
    { NID:'1410101010', Name: 'هلا مسند  ',Relation:'زوجه', Known: 'لا' }
    ];
  }

}
