import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { GetdataService } from './getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public many: Array<Object> = [];
  // private many: Array<Object> = [{ "item_seq_id": 1, "item_id": 243041, "item_type_id": 5, "resource_title": "Utanipenda", "item_resource_id": 1573027, "resource_image_url": "http://cdn.mziiki.com/060/0035/046/08/060003504608125_0.jpg", "container_id": 1 }, { "item_seq_id": 2, "item_id": 243042, "item_type_id": 5, "resource_title": "Nana", "item_resource_id": 1469604, "resource_image_url": "http://cdn.mziiki.com/060/0031/009/08/060003100908125_0.jpg", "container_id": 1 }, { "item_seq_id": 3, "item_id": 243043, "item_type_id": 5, "resource_title": "Nasema Nawe Rmx", "item_resource_id": 1445136, "resource_image_url": "http://cdn.mziiki.com/060/0023/497/08/060002349708125_0.jpg", "container_id": 1 }, { "item_seq_id": 4, "item_id": 243044, "item_type_id": 5, "resource_title": "My Number One", "item_resource_id": 1207644, "resource_image_url": "http://cdn.mziiki.com/060/0023/497/08/060002349708125_0.jpg", "container_id": 1 }, { "item_seq_id": 5, "item_id": 243045, "item_type_id": 5, "resource_title": "Make Me Sing", "item_resource_id": 1615196, "resource_image_url": "http://cdn.mziiki.com/060/0049/907/08/060004990708125_0.jpg", "container_id": 1 }, { "item_seq_id": 6, "item_id": 243046, "item_type_id": 5, "resource_title": "Nimpende Nani", "item_resource_id": 641838, "resource_image_url": "http://cdn.mziiki.com/060/0023/497/08/060002349708125_0.jpg", "container_id": 1 }, { "item_seq_id": 7, "item_id": 243047, "item_type_id": 5, "resource_title": "Ntampata Wapi Ver 3", "item_resource_id": 1337968, "resource_image_url": "http://cdn.mziiki.com/060/0034/388/08/060003438808125_0.jpg", "container_id": 1 }, { "item_seq_id": 8, "item_id": 243048, "item_type_id": 5, "resource_title": "Nasema Nawee", "item_resource_id": 1390400, "resource_image_url": "http://cdn.mziiki.com/060/0023/497/08/060002349708125_0.jpg", "container_id": 1 }, { "item_seq_id": 9, "item_id": 243049, "item_type_id": 5, "resource_title": "Ukimuona", "item_resource_id": 761983, "resource_image_url": "http://cdn.mziiki.com/060/0023/497/08/060002349708125_0.jpg", "container_id": 1 }, { "item_seq_id": 10, "item_id": 243050, "item_type_id": 5, "resource_title": "Lala Salama", "item_resource_id": 642067, "resource_image_url": "http://cdn.mziiki.com/060/0023/497/08/060002349708125_0.jpg", "container_id": 1 }];
  public constructor(private dragulaService: DragulaService, private getDataService: GetdataService) {

    dragulaService.setOptions('another-bag', {
      removeOnSpill: false
    });
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {

      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });


  }
  private hasClass(el: any, name: string): any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }
  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args: any): void {

    let [e] = args;
    console.log(this.many);
    this.addClass(e, 'ex-moved');
  }
  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  ngOnInit() {
    this.getDataService.getContainerItems('Mziiki', 1).subscribe((res:any) => {
      // console.log(res);
      this.many=res;
    })
  }
}
