import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestComponentLibraryModule } from 'test-component-library';

@NgModule({
  imports: [CommonModule, TestComponentLibraryModule],
  exports: [TestComponentLibraryModule],
})
export class TestWrapperModule {}
