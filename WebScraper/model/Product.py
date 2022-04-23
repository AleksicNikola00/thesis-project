class Product:
    def __init__(self, brand, model, price, link, product_type, img_src):
        self.brand = brand
        self.model = model
        self.price = price
        self.link = link
        self.product_type = product_type
        self.img_src = img_src

    def to_string(self):
        print(f'Brand: {self.brand}')
        print(f'Model: {self.model}')
        print(f'Price: {self.price}')
        print(f'Link: {self.link}')
        print(f'Type: {self.product_type}')
        print(f'Image src: {self.img_src}')
