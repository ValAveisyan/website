import {Component, Input, OnInit} from '@angular/core';
import {IComments, IUser} from "../../data/user";
import {IDataAcc} from "../../../../Interfaces/dataAccount";
import {FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-users-post',
  templateUrl: './users-post.component.html',
  styleUrls: ['./users-post.component.css']
})
export class UsersPostComponent implements OnInit {

  @Input() user!: IUser;

  public userComments!: IComments[];
  public showTF: boolean = false;
  private userData!: IUser[];
  public like: boolean = false;
  private data!: IDataAcc;

  public form = new FormGroup({
    com: new FormControl<string>('')
  });

  constructor(private usersService: AdminService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userData = this.usersService.Post;
    this.data = this.authService.getData(this.data);
  }

  clickLike() {
    this.like = !this.like;
  };

  show(u: string) {
    this.showTF = !this.showTF;
    const idUser = this.usersService.Post.findIndex(us => us.name === u);
    this.userComments = this.userData[idUser].comments;
  }

  sub(u: string) {
    const idUser = this.usersService.Post.findIndex(us => us.name === u);
    this.userComments = this.userData[idUser].comments;

    if (this.form.value.com ) {
      if (this.form.value.com.length > 2) {
        this.userComments.push({
          name: this.data.firstName,
          avatar: '../assets/img/banner.jpg',
          com: this.form.value.com as string
        });
        this.form.reset();
        this.showTF = true;
        this.usersService.setUser()
      } else {alert('you must mi ban grel')}
    }
  }

  deletePost(id: number) {
    const idx = this.userData.findIndex((item) => item.id === id);
    this.userData.splice(idx, 1);
    this.usersService.setUser()
  }


}
