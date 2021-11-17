import { Component, OnInit } from '@angular/core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ckeditor';
  public editor = ClassicEditorBuild;
  data: any = `<b>bold text</><ul><li>op 1</li><li>op 2</li></ul>`;
  public isDisabled = false;
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  public onReady(editor: any) {
    console.log('editor', editor.config);

    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();

    console.log(data);
  }

  ngOnInit(): void {}
}
