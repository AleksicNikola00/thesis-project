import constants
from sites.sport_vision.sport_vision import SportVision


class SportVisionClothes(SportVision):
    def __init__(self, driver):
        super().__init__(driver)

    def get_man_clothes(self):
        self.land_first_page(constants.BASE_URL_SPORT_VISION_MAN_CLOTHES)
