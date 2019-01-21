import { Component, OnInit } from '@angular/core';

import { Topic } from '../topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic: Topic = {      // temporary object
    id: 1,
    strand: 'SSM',
    topic: 'Triangle Constructions',
    image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj4yufN1_7fAhXS8uAKHWPWCFgQjRx6BAgBEAU&url=http%3A%2F%2Fceemrr.com%2FGeometry2%2FConstructing_Triangles%2FConstructing_Triangles3.html&psig=AOvVaw0BBkOcE5rH4PBrZNPWEhwI&ust=1548153538693300',
    link: 'corbettmaths',
    rating: 7
  };


  constructor() { }

  ngOnInit() {
  }

}
