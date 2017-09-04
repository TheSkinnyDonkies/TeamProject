import { Upload } from './../../../models/upload.model';
import { Component, OnInit } from '@angular/core';
import { UploadService } from './../../../services/upload.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) { }

  uploadFiles() {
    const filesToUpload = this.files;
    const filesIndexs = _.range(filesToUpload.length);
    _.each(filesIndexs, (index) => {
      console.log(filesToUpload[index]);
      this.upload = new Upload(filesToUpload[index]);
      this.uploadService.uploadFile(this.upload);
    });
  }
  handleFiles(event) {
    this.files = event.target.files;
  }
  ngOnInit() {
  }
}