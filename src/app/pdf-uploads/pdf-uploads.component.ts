import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pdf-uploads',
  templateUrl: './pdf-uploads.component.html',
  styleUrl: './pdf-uploads.component.scss'
})
export class PdfUploadsComponent {
  selectedFiles = [];

  @Output() uploadFileEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadPDF() {
    const formData = new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('pdfFiles', this.selectedFiles[i]);
    }

    this.http.post('http://localhost:3000/upload', formData).subscribe(
      response => {
        this.uploadFileEvent.emit(true);
        console.log('Files uploaded successfully:', response);
      },
      error => {
        console.error('Error uploading files:', error);
      }
    );
  }
}
