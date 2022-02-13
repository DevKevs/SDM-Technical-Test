import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Cars } from '../model/cars';
import { CarsService } from '../service/cars.service';
import {Subject} from 'rxjs';



@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsViewComponent implements OnInit, OnDestroy {
  data_info: Cars | undefined;
  notFound: boolean = false;
  cars: Cars[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  search = "";

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.getCars();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      dom: 'Bfrtip',

    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getCars(){
    this.notFound = false;
    this.carService.getCars().subscribe((obj: Cars[]) => {
      this.cars = obj;
      this.dtTrigger.next(this.cars);
    },(err: any) => {
      console.error(err)
      this.notFound = true;
    }
    );
  }

  LoadData(_car: Cars){
    this.data_info = undefined;
    this.data_info = _car
    console.log(this.data_info)
  }
  filter(event: any){
    this.search = event.target.value
  }
}
