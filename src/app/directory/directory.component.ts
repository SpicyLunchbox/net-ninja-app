import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  ninja: string;

  constructor(private route: ActivatedRoute) {
    // grabs the route param to make unique route
    this.ninja = route.snapshot.params['ninja'];
  }

  ngOnInit(): void {}
}
