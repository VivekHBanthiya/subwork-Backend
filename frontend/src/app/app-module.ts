import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ScopeModule } from './features/scope/scope-module';
import { ConfirmDeleteDialog } from './shared/components/confirm-delete-dialog';
import { FeedbackSnackBar } from './shared/components/feedback-snackbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    App,
    ConfirmDeleteDialog,
    FeedbackSnackBar,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScopeModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideHttpClient(),
  ],
  bootstrap: [App],
})
export class AppModule {}
