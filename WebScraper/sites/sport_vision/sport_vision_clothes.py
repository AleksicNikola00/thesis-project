import constants
from model.enumerations.product_type import ProductType
from sites.sport_vision.sport_vision import SportVisionScraper


class SportVisionClothes(SportVisionScraper):
    def __init__(self, driver):
        super().__init__(driver)

    def get_man_clothes(self, print_data=True):
        self.land_first_page(constants.BASE_URL_SPORT_VISION_MAN_CLOTHES)
        self.close_cookies()
        self.collect_data(product_type=ProductType.CLOTHES)
        self.serialize_to_json(path='men-clothes-sport-vision.json')
        if print_data:
            self.print_list()
            print(len(self.products))
