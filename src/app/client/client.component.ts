import { Component, OnInit } from '@angular/core';
import{ClientService} from '../client.service';
import{Client} from '../client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client:Client[]=[];
  searchText = '';
  term: string;
  
  constructor(private ClientApi: ClientService) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(){
    this.ClientApi.getClient().subscribe((data:any)=>{
      this.client=data;
      console.log(this.client);
    })
  }
  dataSource = this.client;
  displayedColumns: string[] = ['id', 'firstname', 'lastname'];
}
