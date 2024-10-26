import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

 private pdfUrls: { [key: string]: string } = {
  pdf1: '../../assets/pdf/TRABAJO MERCADONA IES HAYGON.pdf',
  pdf2: '../../assets/pdf/BOMBON BOSS.pdf',
  pdf3: '../../assets/video/EUNOIA.mp4'
};

 constructor() {}

 fetchAndDownloadPDF(pdfKey: string, isPDF: boolean): void {

  let userConfirmed;

  if(!isPDF) {
    userConfirmed = window.confirm('¿Estás seguro de que deseas abrir el vídeo?');
  } else {
    userConfirmed = window.confirm('¿Estás seguro de que deseas abrir el PDF?');
  }

  if (userConfirmed) {
    //ESTO ES SI SE QUIERE DESCARGA
    // fetch(this.pdfUrl)
    //   .then((response: Response) => {
    //     if (!response.ok) {
    //       throw new Error(`Error al descargar el PDF: ${response.statusText}`);
    //     }
    //     return response.blob();
    //   })
    //   .then((blob: Blob) => {
    //     const url: string = URL.createObjectURL(blob);
    //     const link: HTMLAnchorElement = document.createElement('a');
    //     link.href = url;
    //     link.download = 'nppatinetes-venta.pdf'; // Nombre del archivo descargado
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //     URL.revokeObjectURL(url);
    //   })
    //   .catch((error: Error) => {
    //     console.error('Error descargando el PDF:', error);
    //   });
    window.open(this.pdfUrls[pdfKey], '_blank');
  }
}
}
