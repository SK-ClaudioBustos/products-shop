export interface Product {
    id:                 string;
    buying_mode:        string;
    price:              Price;
    rebates:            any[];
    value_propositions: any[];
    category_id:        string;
    seller_info:        SellerInfo;
    permalink:          string;
    image_ratio:        string;
    reviews:            Reviews;
    vertical:           string;
    title:              string;
    installments:       Installments;
    tags:               string[];
    stop_time:          Date;
    product:            ProductClass;
    highlight:          Highlight;
    shipping:           Shipping;
    order_backend:      number;
    promotions:         any[];
    pills:              Pill[];
    bottom_pills:       BottomPill[];
    inventory_id:       string;
    buy_box_winner_id:  string;
    is_presale:         boolean;
    pictures:           Pictures;
    bookmarked:         boolean;
    variations:         Variations;
    promise:            Promise;
    discount_source:    string;
    item_highlight:     Highlight;
    pictures_quantity:  number;
    is_ad:              boolean;
    subtitles:          Subtitles;
}

export interface BottomPill {
    id:         string;
    values:     Value[];
    styles:     BottomPillStyles;
    class_name: string;
    type:       string;
    text:       string;
}

export interface BottomPillStyles {
    color:       string;
    font_size:   string;
    font_weight: string;
}

export interface Value {
    text:     string;
    key:      string;
    type:     string;
    icon_id?: string;
    styles?:  ValueStyles;
}

export interface ValueStyles {
    background: string;
    color:      string;
}

export interface Highlight {
    id:                         string;
    label:                      Label;
    type:                       string;
    background:                 string;
    shipping_guaranteed_label?: Label;
}

export interface Label {
    text:  string;
    color: string;
}

export interface Installments {
    amount:      number;
    currency_id: string;
    metadata:    Metadata;
    quantity:    number;
    rate:        number;
}

export interface Metadata {
    meliplus_installments:    boolean;
    additional_bank_interest: boolean;
}

export interface Pictures {
    stack:  Grid;
    grid:   Grid;
    mosaic: Mosaic;
}

export interface Grid {
    normal: string;
    retina: string;
    tags:   GridTags;
}

export interface GridTags {
    heigth: number;
    width:  number;
    alt:    string;
}

export interface Mosaic {
    normal: string;
    retina: string;
    tags:   MosaicTags;
}

export interface MosaicTags {
    alt:        string;
    class_name: string;
}

export interface Pill {
    id:         string;
    values:     Value[];
    class_name: string;
    type:       string;
    text:       string;
}

export interface Price {
    amount:         number;
    currency_id:    string;
    original_price: number;
    discount_rate:  number;
    discount_label: Label;
    rebate_price:   Label;
    billing:        boolean;
}

export interface ProductClass {
    id:   string;
    name: string;
}

export interface Promise {
    id:            string;
    promise_text:  string;
    tracking_type: string;
    icon?:         string;
}

export interface Reviews {
    rating_average:           number;
    total:                    number;
    formatted_total_label:    Formatted;
    formatted_rating_average: Formatted;
    rating_stars:             RatingStars;
    alt_text:                 string;
    rating_average_formatted: string;
    formatted_total:          string;
    accessibility_text:       string;
}

export interface Formatted {
    text:        string;
    color:       string;
    font_size:   string;
    font_family: string;
}

export interface RatingStars {
    value: number;
    color: string;
    size:  number;
}

export interface SellerInfo {
    id:                          number;
    power_seller_status:         string;
    car_dealer:                  boolean;
    real_estate_agency:          boolean;
    tags:                        string[];
    address:                     Address;
    official_store_id:           string;
    official_store_name:         string;
    official_store_text:         string;
    official_store_verbose_text: string;
    official_store_icon:         boolean;
}

export interface Address {
    id:           number;
    comment:      string;
    address_line: string;
    country:      ProductClass;
    city:         ProductClass;
}

export interface Shipping {
    promise:  Promise;
    benefits: any[];
}

export interface Subtitles {
}

export interface Variations {
    label: string;
}

