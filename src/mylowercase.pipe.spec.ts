import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import { MylowercasePipe } from './mylowercase.pipe';

@Component({
    selector: 'test', 
    template: `
        <p>{{ text | mylowercase }}</p>
    `
})
class TestComponent {
    text : string;
}
describe('MylowercasePipe', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, MylowercasePipe]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
    }));
    it('should change the string to lowercase', async(() => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.text = 'FOO';
        fixture.detectChanges();
        const el = <HTMLElement>fixture.debugElement.nativeElement;
        expect(el.querySelector('p').textContent).toBe('foo');
    }));
});