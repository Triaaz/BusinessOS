BusinessOS Database Design (MVP)

1. Business

Responsibility
Represents a company or organization using BusinessOS. Every other business-related resource belongs to a Business.

Fields
Business Name
Description
Business Email
Business Phone
Business Address
Logo (optional)
Currency
Time Zone
Created At
Updated At

Relationships
Business

↓

Has Many Users
Has Many Products
Has Many Categories
Has Many Inventory Records


2. User

Responsibility
Represents a person who can authenticate and access the system.

Fields
Full Name
Email
Password
Phone Number (optional)
Role
Email Verified
Created At
Updated At

Relationships
User

↓
Belongs To Business


3. Category
Responsibility
Groups products into logical sections.
Example
Drinks
Snacks
Electronics
Clothing

Fields
Name
Description
Created At

Relationships
Category

↓

Belongs To Business

↓

Has Many Products


4. Product

Responsibility
Represents an item sold by the business.

Fields
Product Name
SKU
Description
Selling Price
Cost Price
Quantity
Low Stock Threshold
Image (optional)
Barcode (optional)
Created At
Updated At

Relationships
Product

↓

Belongs To Business

↓

Belongs To Category


5. Inventory
Responsibility
Tracks stock movement.
Not current quantity.
Movement.

Example

+20 Coca-Cola

-2 Coca-Cola

+10 Pepsi

This lets you build history.

Fields
Movement Type
Stock In
Stock Out
Quantity
Reason
Date

Relationships
Inventory Record

↓

Belongs To Product

↓

Created By User

↓

Belongs To Business
Relationship Diagram
Business
│
├── Users
│
├── Categories
│      │
│      └── Products
│               │
│               └── Inventory Records