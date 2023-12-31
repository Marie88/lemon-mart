import { SecurityContext } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  SafeResourceUrl,
  SafeValue
} from '@angular/platform-browser'
import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { Observable, of } from 'rxjs'
import { MaterialModule } from '../material.module'
import {HttpClientTestingModule} from "@angular/common/http/testing";
const FAKE_SVGS = {
  lemon: '<svg><path id="lemon" name="lemon"></path></svg>',
}

export class MatIconRegistryFake {
  // tslint:disable-next-line: variable-name
  _document = document
  addSvgIcon(iconName: string, url: SafeResourceUrl): this {
    // this.addSvgIcon('lemon', 'lemon.svg')
    return this
  }
  getNamedSvgIcon(name: string, namespace: string = ''): Observable<SVGElement> {
    return of(this._svgElementFromString(FAKE_SVGS.lemon))
  }
  private _svgElementFromString(str: string): SVGElement {
    const div = (this._document || document)
      . createElement('DIV')
    div.innerHTML = str
    const svg = div.querySelector('svg') as SVGElement
    if (!svg) {
      throw Error('<svg> tag not found')
    }
    return svg
  }
}

export class DomSanitizerFake {
  bypassSecurityTrustResourceUrl(url: string): SafeResourceUrl {
    return {} as SafeResourceUrl
  }
  sanitize(
    context: SecurityContext,
    value: SafeValue | string | null):
    string | null
  {
    return value?.toString() || null
  }
}
export const commonTestingProviders: any[] = [
  // Intentionally Left Blank!!!
]
export const commonTestingModules: any[] = [
  ReactiveFormsModule,
  MaterialModule,
  NoopAnimationsModule,
  HttpClientTestingModule,
  RouterTestingModule,
]
