import {Component, OnInit, ViewChild} from '@angular/core';
import { ShoppingListItem } from '../../models/ShoppingListItem';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})

export class ShoppingListsComponent implements OnInit {
  item: ShoppingListItem = {
    name: '',
    email: '',
    age: 0,
    phone: 0,
    comment: ''
  };
  shoppingList: ShoppingListItem[];
  @ViewChild('form') form: NgForm;

  constructor() { }

  ngOnInit() {
    this.shoppingList = [];
  }

  onSubmit(form) {
    // if (form.invalid) return;

    const newItem: ShoppingListItem = {
      id: this.shoppingList.length,
      name: this.item.name,
      email: this.item.email,
      age: this.item.age,
      phone: this.item.phone,
      comment: this.item.comment
    };
    this.shoppingList.push(newItem);
    this.form.resetForm();
    // form.reset();
  }

  deleteItem(id) {
    this.shoppingList = this.shoppingList.filter(item => item.id !== id);
  }
}
