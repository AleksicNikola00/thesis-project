import { Injectable } from '@angular/core';
import { IProduct } from '../model/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getClothes(): IProduct[]{
    return [
      {
        brand: 'Nike',
        model: 'Air Max',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'Adidas',
        model: 'Bla',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'New balanca',
        model: 'Tenk',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/C/P/CPPPCU61055CA-1067-1.jpg' 
      },
      {
        brand: 'Nike',
        model: 'Air Max',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'Adidas',
        model: 'Bla',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'New balanca',
        model: 'Tenk',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/C/P/CPPPCU61055CA-1067-1.jpg' 
      },
      {
        brand: 'Nike',
        model: 'Air Max',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'Adidas',
        model: 'Bla',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'New balanca',
        model: 'Tenk',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/C/P/CPPPCU61055CA-1067-1.jpg' 
      },
      {
        brand: 'Nike',
        model: 'Air Max',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'Adidas',
        model: 'Bla',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'New balanca',
        model: 'Tenk',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/C/P/CPPPCU61055CA-1067-1.jpg' 
      },
      {
        brand: 'Nike',
        model: 'Air Max',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'Adidas',
        model: 'Bla',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'New balanca',
        model: 'Tenk',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/C/P/CPPPCU61055CA-1067-1.jpg' 
      },
      {
        brand: 'Nike',
        model: 'Air Max',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'Adidas',
        model: 'Bla',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/S/D/SDMS311279A-02A-1.jpg' 
      },
      {
        brand: 'New balanca',
        model: 'Tenk',
        type: 'Shoes',
        imgUrl: 'https://www.fashionandfriends.com/pub/media/catalog/product/cache/67eb99f26f3721ba9aa4712a229cdf1d/C/P/CPPPCU61055CA-1067-1.jpg' 
      },
      
      
    ];
  }
}
