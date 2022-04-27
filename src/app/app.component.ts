import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // paymentHandler: any = null;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    // this.invokeStripe();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  // makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: 'ppk_test_51KrvpxEzgKwEXW8k5mK3d4Mwc2y5hOD2N9p5zFd0nCZ1EKlLFdzKultSwMnZmVVAB47CUYNXV6KHuXMHO7oXIL3e006sGZzB2L',
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken);
  //       alert('Stripe token generated!');
  //     },
  //   });
  //   paymentHandler.open({
  //     name: 'Positronx',
  //     description: '3 widgets',
  //     amount: amount * 100,
  //   });
  // }
  // invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken);
  //           alert('Payment has been successfull!');
  //         },
  //       });
  //     };
  //   }
  // }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  }
  
