import constants
from model.enumerations.product_type import ProductType
from sites.fashion_and_friends.fashion_and_friends import FashionAndFriendsScraper


class FashionAndFriendsShoes(FashionAndFriendsScraper):
    def __init__(self, driver):
        super().__init__(driver)

    def get_man_shoes(self, print_data=True):
        self.land_first_page(constants.BASE_URL_FASHION_MAN_SHOES)
        self.close_pop_ups()
        self.scroll_down()
        self.collect_data(product_type=ProductType.SHOES)
        self.serialize_to_json(path='men-shoes-fashion-and-friends.json')
        if print_data:
            self.print_list()
            print(len(self.products))
