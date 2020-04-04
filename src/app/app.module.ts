import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import {FormsModule} from '@angular/forms';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipe } from './filter.pipe';
import { DefaultTypePipe } from './default-type.pipe';
import {AddComicComponent, AddContentDialogComponent} from './add-comic/add-comic.component';
import { MessagesComponent } from './messages/messages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// @ts-ignore
import {MatInputModule} from '@angular/material/input';
// @ts-ignore
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentCardComponent,
    ContentListComponent,
    FilterPipe,
    DefaultTypePipe,
    AddComicComponent,
    MessagesComponent,
    AddContentDialogComponent,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent},
      { path: 'content', component: ContentListComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000 })
  ],
  entryComponents: [
    AddContentDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
