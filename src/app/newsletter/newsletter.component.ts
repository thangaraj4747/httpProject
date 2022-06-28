import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
news:any='';
  constructor(public newsSer:UserService) { }

  ngOnInit(): void {

    this.news=this.newsSer.doNewsLetter()


  }

}
