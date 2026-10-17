# Diagrama Entidad-Relación

```mermaid
erDiagram
    USERS ||--o{ STORES : "posee"
    USERS ||--o{ ORDERS : "realiza"
    STORES ||--o{ PRODUCTS : "ofrece"
    STORES ||--o{ ORDERS : "recibe"
    CATEGORIES ||--o{ PRODUCTS : "clasifica"
    ORDERS ||--o{ ORDER_ITEMS : "contiene"
    PRODUCTS ||--o{ ORDER_ITEMS : "aparece_en"

    USERS {
        int id PK
        string firebase_uid
        string full_name
        string role
        string photo_url
        datetime created_at
    }
    STORES {
        int id PK
        int owner_user_id FK
        string name
        string address
        boolean is_approved
    }
    CATEGORIES {
        int id PK
        string name
        string description
    }
    PRODUCTS {
        int id PK
        int store_id FK
        int category_id FK
        string name
        decimal price
        int stock
        string image_url
    }
    ORDERS {
        int id PK
        int customer_user_id FK
        int store_id FK
        string status
        decimal total
        datetime created_at
    }
    ORDER_ITEMS {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        decimal unit_price
    }
```