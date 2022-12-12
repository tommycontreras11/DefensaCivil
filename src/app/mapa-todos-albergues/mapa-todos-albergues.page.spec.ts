import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaTodosAlberguesPage } from './mapa-todos-albergues.page';

describe('MapaTodosAlberguesPage', () => {
  let component: MapaTodosAlberguesPage;
  let fixture: ComponentFixture<MapaTodosAlberguesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaTodosAlberguesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaTodosAlberguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
