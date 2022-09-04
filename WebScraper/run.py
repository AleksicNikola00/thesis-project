from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from sites.fashion_and_friends.fashion_and_friends_clothes import FashionAndFriendsClothes
from sites.fashion_and_friends.fashion_and_friends_shoes import FashionAndFriendsShoes
from sites.sport_vision.sport_vision_clothes import SportVisionClothes


driver = webdriver.Chrome(ChromeDriverManager().install())

# Fashion and Friends
bot_fashion_clothes = FashionAndFriendsClothes(driver)
bot_fashion_clothes.get_man_clothes()

bot_fashion_shoes = FashionAndFriendsShoes(driver)
bot_fashion_shoes.get_man_shoes()

# Sport vision
bot_sport_vision_clothes = SportVisionClothes(driver)
bot_sport_vision_clothes.get_man_clothes()