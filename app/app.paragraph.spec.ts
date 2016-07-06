/* tslint:disable:no-unused-variable */
import { AppParagraph } from './app.paragraph';

import { async, inject } from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { provide } from '@angular/core';
import { ViewMetadata } from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppParagraph with TCB', function() {

  it('should instantiate paragraph',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(AppParagraph).then(fixture => {
        expect(fixture.componentInstance instanceof AppParagraph).toBe(true, 'should create AppParagraph');
      });
    })));

  it('should have expected <p> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(AppParagraph).then(fixture => {
        // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding

        let paraTag = fixture.debugElement.query(el => el.name === 'p').nativeElement; // it works

        paraTag = fixture.debugElement.query(By.css('p')).nativeElement; // preferred

        expect(paraTag.innerText).toMatch(/lorem ipsum/i, '<p> should say something about "Lorem ipsum"');
      });

    })));
});
