import pandas as pd

# Define the data
menu_data = {
    "starters": [
        {"name": "Spring Rolls", "description": "Crispy fried rolls filled with vegetables or meat.", "price": 4.99, "type": "veg"},
        {"name": "Wontons", "description": "Dumplings filled with minced pork or shrimp, steamed or fried.", "price": 5.99, "type": "non-veg"},
        {"name": "Cucumber Salad", "description": "Chilled cucumber tossed with garlic, sesame oil, and vinegar.", "price": 3.99, "type": "veg"},
        {"name": "Hot and Sour Soup", "description": "Spicy and tangy soup with mushrooms, tofu, and bamboo shoots.", "price": 4.49, "type": "veg"},
        {"name": "Chicken Corn Soup", "description": "Smooth soup with shredded chicken and sweet corn.", "price": 4.79, "type": "non-veg"},
        {"name": "Crab Rangoon", "description": "Fried wontons filled with crab meat and cream cheese.", "price": 6.49, "type": "non-veg"},
        {"name": "Edamame with Sea Salt", "description": "Steamed soybeans sprinkled with sea salt.", "price": 3.49, "type": "veg"},
        {"name": "Tofu Skewers", "description": "Grilled tofu skewers with sesame and scallions.", "price": 4.99, "type": "veg"},
        {"name": "Chili Oil Dumplings", "description": "Boiled dumplings topped with spicy chili oil.", "price": 5.49, "type": "non-veg"},
        {"name": "Steamed Shrimp Shumai", "description": "Open-topped shrimp dumplings steamed to perfection.", "price": 6.29, "type": "non-veg"},
        {"name": "Cold Noodles with Sesame Sauce", "description": "Chilled noodles served in a creamy sesame sauce.", "price": 5.29, "type": "veg"},
        {"name": "Lotus Root Chips", "description": "Thin crispy slices of lotus root, lightly salted.", "price": 3.99, "type": "veg"},
        {"name": "Szechuan Pickled Vegetables", "description": "Tangy and spicy preserved vegetables.", "price": 2.99, "type": "veg"},
        {"name": "Spicy Seaweed Salad", "description": "Thin seaweed tossed with vinegar, garlic, and chili.", "price": 3.79, "type": "veg"},
        {"name": "Mini Bao Buns", "description": "Small fluffy steamed buns with savory pork filling.", "price": 5.99, "type": "non-veg"}
    ],
    "mainCourse": [
        {"name": "Kung Pao Chicken", "description": "Stir-fried chicken with peanuts, vegetables, and chili peppers.", "price": 9.99, "type": "non-veg"},
        {"name": "Sweet and Sour Pork", "description": "Crispy pork in a tangy sweet sauce with pineapple and peppers.", "price": 10.49, "type": "non-veg"},
        {"name": "Vegetable Chow Mein", "description": "Stir-fried noodles with fresh vegetables and soy sauce.", "price": 7.99, "type": "veg"},
        {"name": "Mapo Tofu", "description": "Silken tofu in a spicy Sichuan sauce with minced pork.", "price": 8.99, "type": "non-veg"},
        {"name": "Yangzhou Fried Rice", "description": "Classic fried rice with shrimp, eggs, peas, and ham.", "price": 7.49, "type": "non-veg"},
        {"name": "Beef and Broccoli", "description": "Tender beef slices stir-fried with fresh broccoli in oyster sauce.", "price": 10.99, "type": "non-veg"},
        {"name": "Szechuan Eggplant", "description": "Eggplant in spicy garlic sauce.", "price": 8.49, "type": "veg"},
        {"name": "Orange Chicken", "description": "Crispy chicken tossed in a sweet citrusy glaze.", "price": 9.89, "type": "non-veg"},
        {"name": "Char Siu Pork", "description": "Cantonese-style roasted pork with a sweet soy glaze.", "price": 10.59, "type": "non-veg"},
        {"name": "General Tso's Chicken", "description": "Spicy-sweet fried chicken dish popular in American-Chinese cuisine.", "price": 9.99, "type": "non-veg"},
        {"name": "Peking Duck", "description": "Roast duck with crispy skin, served with pancakes and hoisin sauce.", "price": 14.99, "type": "non-veg"},
        {"name": "Spicy Dry Pot", "description": "Mixed meats and vegetables stir-fried with chili and Szechuan peppercorns.", "price": 12.49, "type": "non-veg"},
        {"name": "Steamed Fish with Ginger and Scallions", "description": "Whole fish steamed with fresh herbs and light soy sauce.", "price": 13.99, "type": "non-veg"},
        {"name": "Dan Dan Noodles", "description": "Spicy Sichuan noodles with minced pork and chili oil.", "price": 8.49, "type": "non-veg"},
        {"name": "Stir-fried Tofu and Bok Choy", "description": "Fresh tofu and bok choy stir-fried in a light garlic sauce.", "price": 7.99, "type": "veg"}
    ],
    "desserts": [
        {"name": "Sesame Balls", "description": "Fried glutinous rice balls filled with red bean paste.", "price": 3.99, "type": "veg"},
        {"name": "Mango Pudding", "description": "Sweet mango pudding topped with cream.", "price": 4.29, "type": "veg"},
        {"name": "Almond Jelly", "description": "Chilled almond-flavored jelly with fruit cocktail.", "price": 4.59, "type": "veg"},
        {"name": "Lychee Ice Cream", "description": "Creamy lychee-flavored ice cream.", "price": 3.99, "type": "veg"},
        {"name": "Fortune Cookies", "description": "Crispy cookies with fun fortunes inside.", "price": 1.99, "type": "veg"},
        {"name": "Red Bean Cake", "description": "Sweet cake with a red bean paste filling.", "price": 3.49, "type": "veg"},
        {"name": "Snow Skin Mooncake", "description": "Soft chilled mooncake with custard filling.", "price": 4.99, "type": "veg"},
        {"name": "Banana Fritters", "description": "Deep-fried bananas coated in sweet syrup.", "price": 4.29, "type": "veg"},
        {"name": "Coconut Jelly", "description": "Refreshing jelly made with coconut milk.", "price": 3.99, "type": "veg"},
        {"name": "Fried Milk Custard", "description": "Milk-based custard, battered and deep-fried.", "price": 4.59, "type": "veg"},
        {"name": "Sticky Rice Balls in Ginger Syrup", "description": "Chewy rice balls in a warm ginger syrup.", "price": 4.19, "type": "veg"},
        {"name": "Taro Balls", "description": "Sweet and chewy taro-based dessert balls.", "price": 4.49, "type": "veg"},
        {"name": "Sweet Egg Tart", "description": "Mini tart with a creamy egg custard center.", "price": 3.79, "type": "veg"},
        {"name": "Mung Bean Cake", "description": "Dense cake made with mung beans and sugar.", "price": 3.89, "type": "veg"},
        {"name": "Lotus Seed Paste Pastry", "description": "Flaky pastry filled with smooth lotus seed paste.", "price": 4.79, "type": "veg"}
    ]
}

# Flatten the data with category
flat_data = []
for category, items in menu_data.items():
    for item in items:
        item_with_category = item.copy()
        item_with_category["category"] = category
        flat_data.append(item_with_category)

# Create DataFrame
df = pd.DataFrame(flat_data)

# Save to CSV
csv_path = "chinese_menu.csv"
df.to_csv(csv_path, index=False)

csv_path
