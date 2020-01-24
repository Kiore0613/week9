import { By } from "@angular/platform-browser";
import { MainLayoutModule } from "./../../main-layout.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductDetailComponent } from "./product-detail.component";
import { ActivatedRoute } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import { product } from "src/app/testing/products-test";
import { of } from "rxjs";

fdescribe("ProductDetailComponent", () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MainLayoutModule,
        MatFormFieldModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ slug: "barnetts-mega-sour" })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    component.productDetail = product;
    fixture.detectChanges();
  });

  fit("should route be about details product info", () => {
    component.product = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.productDetail).toBeTruthy();
  });

  fit("should render product title", () => {
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.nativeElement.query(
      By.css(".detail")
    );
    expect(htmlElement.textContent).toContain(product.name);
  });

  fit("should render product image", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("img").src).toContain(product.image.url);
  });

  fit("should render product descripcion", async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      product.description
    );
  });

  fit("should render product description", async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll("p").textContent).toContain(
      product.description
    );
  });
});
