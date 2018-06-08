import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecAssetsComponent } from './components/spec-assets/spec-assets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MarketsComponent } from './components/markets/markets.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LogInCodeComponent } from './components/log-in-code/log-in-code.component';

const routes: Routes = [
  { path: 'spec-assets', component: SpecAssetsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'trade-history', component: TradeHistoryComponent },
  { path: 'wallets', component: WalletsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'log-in-code', component: LogInCodeComponent },
  { path: 'markets', component: MarketsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
