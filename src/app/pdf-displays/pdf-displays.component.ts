import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pdf-displays',
  templateUrl: './pdf-displays.component.html',
  styleUrl: './pdf-displays.component.scss'
})
export class PdfDisplaysComponent implements OnInit {
  pdfSrc = ''; // URL of the PDF file
  totalPages = 0;
  page = 1;
  zoom = 1;
  originalSize = true;
  newComment = '';
  pdfFiles!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Set the URL of the PDF file
    this.http.get<any[]>('http://localhost:3000/files')
    .subscribe(
      (response) => {
        // Set PDF files array from the response
        this.pdfFiles = response;
      },
      (error) => {
        console.error('Error fetching PDF details:', error);
      }
    );
    this.pdfSrc = 'http://localhost:3000/uploads/NishCV-New.pdf';
  }

  viewPdf(filePath: any) {
    
  }

  onError(error: any) {
    console.error('Error loading PDF:', error);
  }

  onLoadComplete(event: any) {
    this.totalPages = event.numPages;
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  zoomIn() {
    this.zoom += 0.1;
  }

  zoomOut() {
    if (this.zoom > 0.2) {
      this.zoom -= 0.1;
    }
  }

  fitToPage() {
    this.originalSize = !this.originalSize;
  }

}
