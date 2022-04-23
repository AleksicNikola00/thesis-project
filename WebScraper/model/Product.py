class Product:
    def __init__(self, product_base, product_specific):
        self.productBase = product_base
        self.productSpecific = product_specific

    def to_string(self):
        print(f'Brand: {self.productBase.brand}')
        print(f'Model: {self.productBase.model}')
        print(f'Price: {self.productSpecific.price}')
        print(f'Link: {self.productSpecific.link}')
        print(f'Type: {self.productBase.product_type}')
        print(f'Image src: {self.productBase.img_src}')
