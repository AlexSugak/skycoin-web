import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';

import { SendSkycoinComponent } from './send-skycoin.component';
import { WalletService } from '../../../services/wallet.service';

class MockWalletService {
}

describe('SendSkycoinComponent', () => {
  let component: SendSkycoinComponent;
  let fixture: ComponentFixture<SendSkycoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSkycoinComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ MatSnackBarModule ],
      providers: [
        FormBuilder,
        { provide: WalletService, useClass: MockWalletService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSkycoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
