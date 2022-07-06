import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  posts: Post[];
  id: number;

  constructor(private postService: PostService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    this.load();
  }

  delete(id: number) {
    this.postService.delete(id).subscribe(() => {
      alert('OK');
      this.load();
    }, error => {
      console.log(error);
    });
  }

  load() {
    this.postService.getAll().subscribe(result => {
      // @ts-ignore
      this.posts = result.content;
      // @ts-ignore
      console.log(result.content);
    }, error => {
      console.log(error);
    });
  }

  // getPost(id: number) {
  //   return this.postService.findById(id).subscribe(post=>{
  //     this.postForm = new FormGroup({
  //
  //     })
  //   })
  // }
}
