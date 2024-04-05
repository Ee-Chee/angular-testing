import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPermissionComponent } from './get-permission.component';


xdescribe('GetPermissionComponent', () => {
  let component: GetPermissionComponent;
  let fixture: ComponentFixture<GetPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
