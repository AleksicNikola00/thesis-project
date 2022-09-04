import time
import constants
import json
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import requests

from model.Product import Product


from model.ProductBase import ProductBase
from model.ProductSpecific import ProductSpecific
from sites.scraper import Scraper, convert_to_num


class FashionAndFriendsScraper(Scraper):
    def __init__(self, driver):
        super().__init__(driver)

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
            image_src = product_soup.find('img', alt='main product photo')['src']
            self.products.append(
                Product(ProductBase(brand=brand, model=model, product_type=product_type.value, img_src=image_src),
                        ProductSpecific(link=link, price=price)))
        except:
            print('Exception on link: ' + link)


