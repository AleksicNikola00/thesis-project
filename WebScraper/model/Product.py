class Product:
    def __init__(self, brand, model, price, link, product_type):
        self.brand = brand
        self.model = model
        self.price = price
        self.link = link
        self.product_type = product_type

    def to_string(self):
        print(f'Brand: {self.brand}')
        print(f'Model: {self.model}')
        print(f'Price: {self.price}')
        print(f'Link: {self.link}')
        print(f'Type: {self.product_type}')