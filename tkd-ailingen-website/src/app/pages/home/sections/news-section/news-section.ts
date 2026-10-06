import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';

@Component({
  selector: 'app-news-section',
  imports: [CommonModule, MaterialModule],
  templateUrl: './news-section.html',
  styleUrl: './news-section.scss',
})
export class NewsSection {}
