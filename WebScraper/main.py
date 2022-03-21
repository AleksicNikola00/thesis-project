from bs4 import BeautifulSoup
import requests

import web_locations
from model.product import Product

product_list = []


def open_file():
    html_text = requests.get(web_locations.FASHION_N_FRIENDS).text
    soup = BeautifulSoup(html_text, 'lxml')
    products = soup.find_all('li', class_="item product product-item-info product-item col-lg-4 col-md-4 col-sm-4 col-xs-6")
    for product in products:
        link = product.find('a')['href']
        add_product(link)

        
def add_product(link):
    product_html = requests.get(link).text
    product_soup = BeautifulSoup(product_html, 'lxml')

    product_info = product_soup.find('div', class_='product-info-main')
    brand = product_info.a['title']
    model = product_info.find('div', class_='product attribute overview').div.text
    price = convert_to_num(product_info.find('span', class_='price').text)
    product_list.append(Product(brand=brand, model=model, price=price, link=link))


# form 32.232,00 RSD
def convert_to_num(number_string):
    num = number_string.split(' ')[0]
    num = num.replace('.', '')
    num = num.split(',')[0]
    return float(num)


def print_list():
    for product in product_list:
        product.to_string()
        print('\n')

if __name__ == '__main__':
    open_file()
    print_list()


