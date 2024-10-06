import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolioLucia';

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const customColor = '#ea899a';
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: customColor
    })

    writer
      .type('Estudiante de Comercio Internacional')
      .rest(1000)
      .changeOps({ deleteSpeed: 80 })
      .remove(22)
      .type('Marketing')
      .rest(1000)
      .remove(23)
      .type('lo que estabas buscando')
      .rest(1000)
      .clear()
      .start()
  }
}
