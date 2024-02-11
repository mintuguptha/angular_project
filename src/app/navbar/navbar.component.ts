import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public title = ''
  prod_dashboards: { dash_path: string; dash_name: string }[] = [];
  lower_dashboards: { dash_path: string; dash_name: string }[] = [];
  prod_alerts: { alert_path: string; alert_name: string }[] = [];
  lower_alerts: { alert_path: string; alert_name: string }[] = [];

  public buttonItems= ['HCS', 'DIS'];

  handleEvent(item: string): void {
    switch (item) {
      case 'HCS':
        this.title = 'HCS';
        this.prod_dashboards = [
          { dash_path: 'https://www.google.com/', dash_name: 'hcs_prod_dashboard_1' },
          { dash_path: 'https://www.facebook.com/', dash_name: 'hcs_prod_dashboard_1' }
        ];
        this.lower_dashboards = [
          { dash_path: 'https://www.google.com/', dash_name: 'hcs_Dashboard1' },
          { dash_path: 'https://www.facebook.com/', dash_name: 'hcs_Dashboard2' }
        ];
        this.prod_alerts = [
          { alert_path: 'https://www.google.com/', alert_name: 'hcs_prod_alert_1' },
          { alert_path: 'https://www.facebook.com/', alert_name: 'hcs_prod_alert_2' }
        ];
        this.lower_alerts = [
          { alert_path: 'https://www.google.com/', alert_name: 'hcs_lower_alert_1' },
          { alert_path: 'https://www.facebook.com/', alert_name: 'hcs_lower_alert_2' }
        ];
        break;
      case 'DIS':
        this.title = 'DIS';
        this.prod_dashboards = [
          { dash_path: 'https://www.google.com/', dash_name: 'dis_Dashboard1' },
          { dash_path: 'https://www.facebook.com/', dash_name: 'dis_Dashboard2' }
        ];
        break;
      case 'another_event':
        // Handle another event
        break;
      case 'yet_another_event':
        // Handle yet another event
        break;
      default:
        // Handle default case
    }
  }
}
