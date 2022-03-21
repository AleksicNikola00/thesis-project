from bs4 import BeautifulSoup
import requests
from selenium import webdriver

import web_locations


def open_file():
    html_text = requests.get(web_locations.FASHION_N_FRIENDS).text
    soup = BeautifulSoup(html_text, 'lxml')
    products = soup.find_all('li', class_="item product product-item-info product-item col-lg-4 col-md-4 col-sm-4 col-xs-6")
    for product in products:
        print(product.text)
        print(product.find('a')['href'])


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    open_file()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
