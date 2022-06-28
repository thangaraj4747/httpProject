import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsdata: any = '';
  news = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology']

  constructor(public newsSer: UserService, public myRoute: Router) { }
  ngOnInit(): void {
    this.startNews();
  }

  startNews() {
    this.newsSer.doCheckNews().subscribe((data: any) => {
      this.newsdata = data;

    }, (error: any) => {
      console.log(error);
    });
  }

  getMoreInfo(index: any) {
    this.newsSer.doCheckMore(index);
    this.myRoute.navigateByUrl("/newsletter");

  }

  checkNews(index: number) {
    this.newsSer.doCheckNewsWithCat(this.news[index]).subscribe((data) => {
      this.newsdata = data;
    }, (error) => {
      console.log(error);

    })

  }


}
