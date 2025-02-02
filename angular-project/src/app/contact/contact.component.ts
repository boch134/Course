import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { FeedBack, contactType } from '../shared/feedback' ;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm : FormGroup ;
  feedback : FeedBack ;
  contacttype = contactType ;
  @ViewChild('fform') feedbackFormDirective ;

  constructor(private fb : FormBuilder ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: false,
      contacttype: 'None',
      message: ''

    })
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value ;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
    }

}
