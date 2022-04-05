from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from sites.fashion_and_friends.fashion_and_friends_clothes import FashionAndFriendsClothes
from sites.fashion_and_friends.fashion_and_friends_shoes import FashionAndFriendsShoes

driver = webdriver.Chrome(ChromeDriverManager().install())

# Fashion and Friends
bot_clothes = FashionAndFriendsClothes(driver)
bot_clothes.get_man_clothes()

bot_shoes = FashionAndFriendsShoes(driver)
bot_shoes.get_man_shoes()

