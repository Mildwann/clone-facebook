import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendPage } from './friend.page';

describe('FriendPage', () => {
  let component: FriendPage;
  let fixture: ComponentFixture<FriendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
