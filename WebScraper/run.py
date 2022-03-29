from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from sites.fashion_and_friends import FashionAndFriendsScraper

driver = webdriver.Chrome(ChromeDriverManager().install())

# Fashion and Friends
bot = FashionAndFriendsScraper(driver)
bot.execute()

