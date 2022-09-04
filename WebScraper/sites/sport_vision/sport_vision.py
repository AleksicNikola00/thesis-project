import requests
from bs4 import BeautifulSoup
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains

import constants
from model.Product import Product
from model.ProductBase import ProductBase
from model.ProductSpecific import ProductSpecific
from sites.scraper import convert_to_num, Scraper


class SportVisionScraper(Scraper):
    def __init__(self, driver):
        super().__init__(driver)

    def land_first_page(self, base_url):
        self.driver.get(base_url)

    def collect_data(self, product_type):
        while self.driver.find_element_by_css_selector("[class='icon-caret-right']"):
            self.collect_page_data(product_type=product_type)
            self.click_next()
            time.sleep(constants.RELOAD_TIME)

    def click_next(self):
        action = ActionChains(self.driver)
        action.move_to_element(self.driver.find_element_by_css_selector("[class='icon-caret-right']"))
        try:
            WebDriverWait(self.driver, 20).until(
                expected_conditions.element_to_be_clickable((By.CSS_SELECTOR, "[class='icon-caret-right']")))
            self.driver.find_element_by_css_selector("[class='icon-caret-right']").click()
        except:
            action.move_by_offset(100, 100).perform()
            self.driver.find_element_by_css_selector("[class='icon-caret-right']").click()

    def close_cookies(self):
        try:
            cookie_button = WebDriverWait(self.driver, 20).until(
                expected_conditions.element_to_be_clickable((By.CSS_SELECTOR, "[class='cookie-agree-gdpr']")))
            cookie_button.click()
        except:
            print("No cookie button")
        time.sleep(2)

    def collect_page_data(self, product_type):
        products = self.driver.find_elements_by_css_selector("[class='product-link']")

        for product in products:
            href = product.get_attribute('href')
            self.collect_product(href, product_type)

    def collect_product(self, link, product_type):
        product_html = requests.get(link).text
        product_soup = BeautifulSoup(product_html, 'lxml')
        try:
            product_info = product_soup.find('div', class_='product-details-info')
            brand = product_info.find('div', class_='brand').text
            model = product_info.find('div', class_='product-description').text.strip()
            price = convert_to_num(product_soup.find('span', class_='product-price-value value').text)
            image_src = constants.BASE_URL_SPORT_VISION + \
                        product_soup.find('img', class_='img-responsive img-watermark')['src']
            self.products.append(
                Product(ProductBase(brand=brand, model=model, product_type=product_type.value, img_src=image_src),
                        ProductSpecific(link=link, price=price)))
        except:
            print('Exception on link: ' + link)
