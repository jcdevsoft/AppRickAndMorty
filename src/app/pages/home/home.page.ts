import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ShareModule } from 'src/app/share/share/share.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ShareModule]
})
export class HomePage implements OnInit {
 characters: any[]=[];
 params={} as any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.params.page=0;
    this.getCharacters();
  }
  getCharacters(){
    this.params.page+=1;
    this.api.getCharacters(this.params).subscribe({
      next:(res:any)=>{
        this.characters.push(...res.results);
        console.log(this.characters);
      },
      error:(error:any)=>{
        
      }
    })
  }
}
