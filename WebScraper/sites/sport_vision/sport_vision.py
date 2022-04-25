class SportVision:
    def __init__(self, driver):
        self.driver = driver
        self.products = []

    def land_first_page(self, base_url):
        self.driver.get(base_url)
