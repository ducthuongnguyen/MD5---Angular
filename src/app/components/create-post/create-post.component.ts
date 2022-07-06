import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Post} from '../../models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {


  constructor(private postService: PostService,
              private fb: FormBuilder) {
  }

  postForm: FormGroup = this.fb.group({
    title: new FormControl(),
    content: new FormControl(),
    likes: new FormControl()
  });

  ngOnInit() {
  }

  onSubmit() {
    const post = this.postForm.value;
    console.log(post);
    this.postService.save(post).subscribe(() => {
      this.postForm.reset();
      alert('Create successfully');
    }, error => {
      console.log(error);
    });
  }
}
