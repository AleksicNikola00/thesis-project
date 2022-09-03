import constants
from model.enumerations.product_type import ProductType
from sites.fashion_and_friends.fashion_and_friends import FashionAndFriendsScraper


class FashionAndFriendsClothes(FashionAndFriendsScraper):
    def __init__(self):
        super().__init__()

    def get_man_clothes(self, print_data=True):
        self.land_first_page(constants.BASE_URL_FASHION_MAN_CLOTHES)
        self.close_pop_ups()
        self.scroll_down()
        self.collect_data(product_type=ProductType.CLOTHES)
        self.serialize_to_json(path='men-clothes-fashion-and-friends.json')
        if print_data:
            self.print_list()
            print(len(self.products))
