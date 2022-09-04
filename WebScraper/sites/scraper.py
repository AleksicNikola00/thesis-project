import json
import time

import constants


# form 32.232,00 RSD
def convert_to_num(number_string):
    num = number_string.split(' ')[0]
    num = num.replace('.', '')
    num = num.split(',')[0]
    return float(num)


class Scraper:
    def __init__(self, driver):
        self.driver = driver
        self.products = []

    def scroll_down(self):
        # Get scroll height
        last_height = self.driver.execute_script("return document.body.scrollHeight")

        while True:
            # Scroll down to bottom
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

            # Wait to load page
            time.sleep(constants.RELOAD_TIME)

            # Calculate new scroll height and compare with last scroll height
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

    def print_list(self):
        for product in self.products:
            product.to_string()
            print('\n')

    def serialize_to_json(self, path):
        with open('../jsons/' + path, 'w+') as write:
            json.dump(self.products, write, default=vars)
