import time
import constants
import json
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import requests

from model.Product import Product

# form 32.232,00 RSD
from model.enumerations.product_type import ProductType


def convert_to_num(number_string):
    num = number_string.split(' ')[0]
    num = num.replace('.', '')
    num = num.split(',')[0]
    return float(num)


class FashionAndFriendsScraper:
    def __init__(self, driver):
        self.driver = driver
        self.products = []

    def land_first_page(self, base_url):
        self.driver.get(base_url)

    def close_pop_ups(self):
        self.close_cookies()
        self.close_subscriptions()

    def close_cookies(self):
        self.driver.implicitly_wait(10)
        for button in self.driver.find_elements(By.CLASS_NAME, 'action-close'):
            if button.is_enabled() and button.is_displayed():
                button.click()

    # usually displayed 30 seconds after page landing
    def close_subscriptions(self):
        try:
            WebDriverWait(self.driver, 60).until(
                expected_conditions.element_to_be_clickable(
                    # Element filtration
                    (By.XPATH, "//span[text()='X']")
                )
            )
            button = self.driver.find_element(By.XPATH, "//span[text()='X']")
            button.click()
        except:
            print('Subscription pop up did not show!')

    def scroll_down(self):
        # Get scroll height
        last_height = self.driver.execute_script("return document.body.scrollHeight")

        while True:
            # Scroll down to bottom
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

            # Wait to load page
            time.sleep(constants.SCROLL_PAUSE_TIME)

            # Calculate new scroll height and compare with last scroll height
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

    def collect_data(self, product_type):
        shoes = self.driver.find_elements(By.XPATH,
                                          '//li[@class="item product product-item-info product-item col-lg-4 col-md-4 col-sm-4 col-xs-6"]')
        for shoe in shoes:
            href = shoe.find_element(By.TAG_NAME, 'a').get_attribute('href')
            self.collect_product(href, product_type)

    def collect_product(self, link, product_type):
        product_html = requests.get(link).text
        product_soup = BeautifulSoup(product_html, 'lxml')
        try:
            product_info = product_soup.find('div', class_='product-info-main')
            brand = product_info.a['title']
            model = product_info.find('div', class_='product attribute overview').div.text
            price = convert_to_num(product_info.find('span', class_='price').text)
            self.products.append(
                Product(brand=brand, model=model, price=price, link=link, product_type=product_type.value))
        except:
            print('Exception on link: ' + link)

    def serialize_to_json(self, path):
        with open('../jsons/' + path, 'w+') as write:
            json.dump(self.products, write, default=vars)

    def print_list(self):
        for product in self.products:
            product.to_string()
            print('\n')

    def execute_shoes(self, print_data=True):
        self.products = []
        self.land_first_page(constants.BASE_URL_FASHION_SHOES)
        # self.close_pop_ups()
        self.scroll_down()
        self.collect_data(product_type=ProductType.SHOES)
        self.serialize_to_json(path='men-shoes-fashion-and-friends.json')
        if print_data:
            self.print_list()
            print(len(self.products))

    def execute_clothes(self, print_data=True):
        self.products = []
        self.land_first_page(constants.BASE_URL_FASHION_CLOTHES)
        self.close_pop_ups()
        self.scroll_down()
        self.collect_data(product_type=ProductType.CLOTHES)
        self.serialize_to_json(path='men-clothes-fashion-and-friends.json')
        if print_data:
            self.print_list()
            print(len(self.products))
