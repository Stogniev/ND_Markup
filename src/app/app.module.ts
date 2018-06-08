import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecAssetsComponent } from './components/spec-assets/spec-assets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MarketsComponent } from './components/markets/markets.component';
import { MainGraphTogglesComponent } from './components/main-graph-toggles/main-graph-toggles.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecAssetsComponent,
    ProfileComponent,
    TradeHistoryComponent,
    WalletsComponent,
    RegistrationComponent,
    LogInComponent,
    MarketsComponent,
    NotificationsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
