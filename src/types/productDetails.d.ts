export interface ProductData {
    id:                      string;
    layout:                  string;
    vertical:                string;
    search_box:              SearchBox;
    components:              ProductDetailsComponent[];
    share:                   Share;
    bookmark:                Bookmark;
    history:                 History;
    track:                   ProductDetailsTrack;
    picture_config:          ProductDetailsPictureConfig;
    recommendations_context: RecommendationsContext;
    header_title:            HeaderTitle;
    back_to_top_button:      BackToTopButton;
    updatable_components:    UpdatableComponents;
}

export interface BackToTopButton {
    visible:            boolean;
    title:              TitleElement;
    background_color:   ColorEnum;
    screens_to_display: number;
    track:              ViewportTrackClass;
    viewport_track:     ViewportTrackClass;
}

export enum ColorEnum {
    Black = "BLACK",
    Blue = "BLUE",
    Empty = "",
    Gray = "GRAY",
    Green = "GREEN",
    Red = "RED",
    TextSecondary = "TEXT_SECONDARY",
    White = "WHITE",
}

export interface TitleElement {
    text?:               string;
    color?:              ColorEnum;
    font_size?:          Size;
    font_family?:        FontFamily;
    accessibility_text?: string;
    id?:                 string;
}

export enum FontFamily {
    Regular = "REGULAR",
    Semibold = "SEMIBOLD",
}

export enum Size {
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
    Xsmall = "XSMALL",
    Xxsmall = "XXSMALL",
    Xxxsmall = "XXXSMALL",
}

export interface ViewportTrackClass {
    melidata_event: ShowTrackMelidataEvent;
}

export interface ShowTrackMelidataEvent {
    path:       string;
    event_data: PurpleEventData;
}

export interface PurpleEventData {
    catalog_product_id: string;
}

export interface Bookmark {
    id:            string;
    type:          string;
    state:         State;
    item_id:       string;
    is_bookmarked: boolean;
    add:           Add;
    delete:        Add;
    label:         string;
}

export interface Add {
    timeout:  number;
    duration: number;
    label:    HeaderTitle;
    icon:     IconValue;
    track?:   AddTrack;
}

export interface IconValue {
    id: string;
}

export interface HeaderTitle {
    text: string;
}

export interface AddTrack {
    melidata_event: TrackClass;
}

export interface TrackClass {
    path:       string;
    event_data: FluffyEventData;
}

export interface FluffyEventData {
    item_id:            string;
    catalog_product_id: string;
    context:            string;
}

export enum State {
    Deferred = "DEFERRED",
    Hidden = "HIDDEN",
    Visible = "VISIBLE",
}

export interface ProductDetailsComponent {
    id:                                 string;
    type:                               string;
    state?:                             State;
    title?:                             TitleElement | string;
    url?:                               string;
    logo?:                              LogoClass | string;
    track?:                             IndecentTrack;
    carousel?:                          ThumbnailsContainerClass;
    background_color?:                  ComponentBackgroundColor;
    has_native_card_shadow_background?: boolean;
    has_bottom_spacing?:                boolean;
    subtitle?:                          string;
    reviews?:                           ComponentReviews;
    has_disabled_loader?:               boolean;
    heading_label?:                     HeadingLabel;
    tag_action?:                        TagAction;
    description_action?:                DescriptionActionClass;
    max_line?:                          number;
    picture_config?:                    ComponentPictureConfig;
    pictures?:                          Picture[];
    previews?:                          { [key: string]: IconValue };
    show_share?:                        boolean;
    gallery_type?:                      string;
    set_paddings?:                      boolean;
    accessibility_text?:                string;
    pickers?:                           PickerElement[];
    url_default?:                       string;
    closeable?:                         boolean;
    price?:                             ComponentPrice;
    discount_label?:                    DiscountLabel;
    subtitles?:                         TitleElement[];
    price_tags?:                        any[];
    action?:                            PurpleAction;
    has_currency_change?:               boolean;
    discounts_tags?:                    any[];
    bg_color?:                          ComponentBackgroundColor;
    expansion_animator?:                boolean;
    error?:                             string;
    thumbnails_container?:              ThumbnailsContainerClass;
    icon?:                              string;
    dynamic_component?:                 DynamicComponent;
    benefit_type?:                      string;
    show_seller_logo?:                  boolean;
    top_constraint?:                    number;
    picker?:                            PurplePicker;
    quantity_selector?:                 QuantitySelector;
    form?:                              Form;
    actions?:                           FluffyAction[];
    closed?:                            boolean;
    storable?:                          boolean;
    has_shadow?:                        boolean;
    change_color?:                      boolean;
    title_value?:                       string;
    seller_link?:                       SellerLink;
    seller?:                            Seller;
    seller_info?:                       SellerInfo;
    is_exclusive_official_store?:       boolean;
    is_new_benefits?:                   boolean;
    benefits?:                          any[];
    products?:                          ComponentProduct[];
    components?:                        string[];
    items?:                             any[];
    has_shadow_background?:             boolean;
    has_divider?:                       boolean;
    header?:                            string;
    seller_status_info?:                SellerStatusInfo[];
    thermometer?:                       Thermometer;
    extra_info?:                        any[];
    viewport_track?:                    ViewportTrack;
    max_show_images?:                   number;
    is_collapsible?:                    boolean;
    image_screen_ratio?:                number;
    fullscreen_track?:                  Track;
    open_image_track?:                  Track;
    data?:                              Data;
    content?:                           string;
    max_pages?:                         number;
    min_pages?:                         number;
    show_track?:                        ViewportTrackClass;
    tabs?:                              Tab[];
    payment_methods?:                   PaymentMethod[];
    qadb_data?:                         QadbData;
    track_view?:                        TrackView;
    tabs_disabled?:                     boolean;
    height?:                            number;
    separator_type?:                    string;
    item_info?:                         ShareTitle;
}

export interface PurpleAction {
    target?:             string;
    timeout:             number;
    duration:            number;
    label?:              ShareTitle;
    modal_title?:        string;
    close_modal_label?:  string;
    track?:              PurpleTrack;
    icon?:               SellerStatusInfoIcon;
    action_type?:        string;
    type?:               string;
    accessibility_text?: string;
}

export interface SellerStatusInfoIcon {
    id:    string;
    color: ColorEnum;
}

export interface ShareTitle {
    text:   string;
    color?: ColorEnum;
}

export interface PurpleTrack {
    melidata_event:   PurpleMelidataEvent;
    analytics_event?: PurpleAnalyticsEvent;
}

export interface PurpleAnalyticsEvent {
    section:  string;
    action:   string;
    category: string;
    label?:   string;
}

export interface PurpleMelidataEvent {
    path:       string;
    event_data: TentacledEventData;
}

export interface TentacledEventData {
    item_id:                   string;
    is_cash_price?:            boolean;
    original_price?:           number;
    price?:                    number;
    currency_id?:              string;
    installments_value_total?: number;
    installments_value_each?:  number;
    installments_amount?:      number;
    is_free_installments?:     boolean;
    catalog_product_id?:       string;
    item_condition?:           string;
    listing_type_id?:          string;
    domain_id?:                string;
    product_status?:           string;
    seller_id?:                number;
    seller_name?:              string;
    official_store_id?:        number;
    context?:                  string;
}

export interface FluffyAction {
    type:                string;
    target:              string;
    style_blocked:       boolean;
    timeout:             number;
    duration:            number;
    label:               HeaderTitle;
    track:               FluffyTrack;
    disabled:            boolean;
    should_raise_errors: boolean;
    action_type:         string;
    presentation_type:   string;
}

export interface FluffyTrack {
    melidata_event:  FluffyMelidataEvent;
    analytics_event: PurpleAnalyticsEvent;
}

export interface FluffyMelidataEvent {
    path:       string;
    event_data: StickyEventData;
}

export interface StickyEventData {
    catalog_product_id:         string;
    item_id:                    string;
    vertical:                   string;
    domain_id:                  string;
    review_rate:                number;
    item_condition:             string;
    listing_type_id:            string;
    cart_content:               boolean;
    price:                      number;
    original_price:             number;
    currency_id:                string;
    discount_reasons:           string[];
    available_promotions:       any[];
    seller_id:                  number;
    seller_name:                string;
    reputation_level:           string;
    power_seller_status:        string;
    official_store_id:          number;
    installment_info:           string;
    free_shipping:              boolean;
    shipping_mode:              string;
    local_pick_up:              boolean;
    store_pick_up:              boolean;
    logistic_type:              string;
    is_cbt_fulfillment_us:      boolean;
    shipping_conditions:        string;
    pushing_puis:               boolean;
    showing_puis:               boolean;
    bo_pick_up_conditions:      string;
    pdp_type:                   string;
    credits_opensea:            boolean;
    user_product_id:            string;
    page_type:                  string;
    flow_type?:                 string;
    offering_visualization_id?: string;
}

export enum ComponentBackgroundColor {
    Black10 = "BLACK_10",
    LightGray = "LIGHT_GRAY",
    White = "WHITE",
}

export interface ThumbnailsContainerClass {
}

export interface Data {
    object_id:  string;
    title:      TitleElement;
    rating:     Rating;
    attributes: Attributes;
    reviews:    DataReviews;
    carousel:   DataCarousel;
    see_more:   SeeMore;
}

export interface Attributes {
    show_see_more: ShowSeeMore;
    items:         AttributesItem[];
}

export interface AttributesItem {
    name:  TitleElement;
    value: number;
}

export interface ShowSeeMore {
    label:  TitleElement;
    target: string;
    track:  ViewportTrackClass;
}

export interface DataCarousel {
    title: TitleElement;
    media: Media[];
}

export interface Media {
    alt:       string;
    url:       string;
    id_review: number;
    target:    string;
    rating?:   TitleElement;
    track:     MediaTrack;
}

export interface MediaTrack {
    melidata_event: TentacledMelidataEvent;
}

export interface TentacledMelidataEvent {
    event_data: IndigoEventData;
    path:       string;
}

export interface IndigoEventData {
    catalog_product_id: string;
    review_id:          number;
    picture_id:         number;
}

export interface Rating {
    description:              TitleElement;
    average:                  number;
    stars:                    number;
    track:                    ViewportTrackClass;
    target:                   string;
    rating_average_formatted: string;
    accessibility_text:       string;
    right_icon_name:          string;
}

export interface DataReviews {
    title:           TitleElement;
    show_all_button: SeeMore;
    items:           ReviewsItem[];
}

export interface ReviewsItem {
    id:                 number;
    rating:             number;
    variant:            TitleElement;
    comment:            Comment;
    review_actions:     ReviewAction[];
    accessibility_text: string;
    carousel?:          ItemCarousel;
}

export interface ItemCarousel {
    media: Media[];
}

export interface Comment {
    content:      Content;
    date:         TitleElement;
    country:      TitleElement;
    menu_options: MenuOptions;
}

export interface Content {
    description:    TitleElement;
    view_more:      TitleElement;
    view_less:      TitleElement;
    max_characters: number;
}

export interface MenuOptions {
    track: MenuOptionsTrack;
    items: MenuOptionsItem[];
}

export interface MenuOptionsItem {
    label:   TitleElement;
    target:  string;
    track:   ItemTrack;
    icon_id: string;
}

export interface ItemTrack {
    melidata_event: StickyMelidataEvent;
}

export interface StickyMelidataEvent {
    event_data: IndecentEventData;
    path:       string;
}

export interface IndecentEventData {
    catalog_product_id: string;
    review_id:          number;
    type:               string;
}

export interface MenuOptionsTrack {
    melidata_event: IndigoMelidataEvent;
}

export interface IndigoMelidataEvent {
    event_data: HilariousEventData;
    path:       string;
}

export interface HilariousEventData {
    catalog_product_id: string;
    review_id:          number;
}

export interface ReviewAction {
    id:           string;
    value?:       number;
    text:         string;
    label_text:   TitleElement;
    label_value?: TitleElement;
    track:        ItemTrack;
    selected:     boolean;
}

export interface SeeMore {
    label:  TitleElement;
    target: string;
    track:  SeeMoreTrack;
}

export interface SeeMoreTrack {
    melidata_event: IndecentMelidataEvent;
}

export interface IndecentMelidataEvent {
    event_data: AmbitiousEventData;
    path:       string;
}

export interface AmbitiousEventData {
    catalog_product_id: string;
    origin:             string;
}

export interface DescriptionActionClass {
    target:   string;
    timeout:  number;
    duration: number;
    label?:   DescriptionActionLabel;
    track?:   DescriptionActionTrack;
}

export interface DescriptionActionLabel {
    text:      string;
    color:     ColorEnum;
    bg_color:  ColorEnum;
    font_size: Size;
    type:      string;
    campaign:  string;
}

export interface DescriptionActionTrack {
    melidata_event:  HilariousMelidataEvent;
    analytics_event: PurpleAnalyticsEvent;
}

export interface HilariousMelidataEvent {
    path:       string;
    event_data: CunningEventData;
}

export interface CunningEventData {
    catalog_product_id: string;
    item_id:            string;
    item_condition:     string;
    listing_type_id:    string;
    domain_id:          string;
    product_status:     string;
    seller_id:          number;
    seller_name:        string;
    official_store_id:  number;
    context:            string;
}

export interface DiscountLabel {
    color:           ColorEnum;
    value:           number;
    value_font_size: Size;
}

export interface DynamicComponent {
    spot:  string;
    order: number;
}

export interface Form {
    item_id: string;
    context: string;
}

export interface Track {
    melidata_event: FullscreenTrackMelidataEvent;
}

export interface FullscreenTrackMelidataEvent {
    path:       string;
    event_data: MagentaEventData;
}

export interface MagentaEventData {
    catalog_product_id: string;
    domain_id:          string;
    context?:           string;
    page_type:          string;
    is_collapsible?:    boolean;
}

export interface HeadingLabel {
    text:       string;
    is_heading: boolean;
    color?:     ColorEnum;
}

export interface LogoClass {
    url:    URL;
    width:  number;
    height: number;
}

export interface URL {
    src: string;
}

export interface PaymentMethod {
    title:              HeaderTitle;
    icons:              IconElement[];
    accessibility_text: string;
}

export interface IconElement {
    id:     string;
    name:   string;
    url:    URL;
    width:  number;
    height: number;
}

export interface PurplePicker {
    title:          string;
    selected:       number;
    selected_label: TitleElement;
    description:    string;
    messages:       TitleElement[];
    track:          PickerTrack;
}

export interface PickerTrack {
    melidata_event: AmbitiousMelidataEvent;
}

export interface AmbitiousMelidataEvent {
    path:       string;
    event_data: FriskyEventData;
}

export interface FriskyEventData {
    catalog_product_id: string;
    item_id:            string;
    seller_id:          number;
    seller_name:        string;
    quantity:           number;
    user_product_id:    string;
    page_type:          string;
}

export interface PickerElement {
    id:                string;
    has_details:       boolean;
    disabled:          boolean;
    label:             ShareTitle;
    selected_option:   ShareTitle;
    thumbnail:         IconValue;
    products:          PickerProduct[];
    picker_text_style: string;
    show_divider:      boolean;
}

export interface PickerProduct {
    id:              string;
    preview_id:      string;
    label:           ProductLabel;
    picture:         IconValue;
    decoration_type: string;
    track:           ProductTrack;
    stock:           ShareTitle;
    price:           ProductPrice;
}

export interface ProductLabel {
    text:               string;
    color:              ColorEnum;
    accessibility_text: string;
}

export interface ProductPrice {
    value:           number;
    currency_symbol: string;
    currency_id:     string;
    original_value?: number;
}

export interface ProductTrack {
    melidata_event:  CunningMelidataEvent;
    analytics_event: PurpleAnalyticsEvent;
}

export interface CunningMelidataEvent {
    path:       string;
    event_data: COLORElement;
}

export interface COLORElement {
    catalog_product_id: string;
    picker_id?:         string;
    picker_type:        string;
    value:              string;
    selected?:          boolean;
}

export interface ComponentPictureConfig {
    template:               string;
    template_thumbnail:     string;
    template_zoom:          string;
    template_icon?:         string;
    template_2x?:           string;
    template_thumbnail_2x?: string;
}

export interface Picture {
    id:     string;
    alt?:   string;
    width:  number;
    height: number;
}

export interface ComponentPrice {
    type:            Type;
    value:           number;
    original_value:  number;
    currency_symbol: string;
    currency_id:     string;
    billing:         boolean;
}

export enum Type {
    Price = "price",
    Reviews = "reviews",
    Standard = "standard",
}

export interface ComponentProduct {
    title:  ShareTitle;
    action: DescriptionActionClass;
}

export interface QadbData {
    title:      string;
    components: QadbDataComponent[];
    track:      QadbDataTrack;
    product_id: string;
    item_id:    string;
}

export interface QadbDataComponent {
    id:                               string;
    state:                            State;
    offline_state:                    State;
    title?:                           string;
    actions?:                         StickyAction[];
    is_big?:                          boolean;
    type?:                            string;
    placeholder?:                     string;
    target?:                          string;
    autosuggest_label_while_loading?: string;
    track?:                           TrackClass;
    accessibility_text?:              string;
    components?:                      ComponentComponent[];
    tooltip?:                         ComponentTooltip;
    action?:                          TentacledAction;
    parameters?:                      Parameters;
}

export interface TentacledAction {
    text:  string;
    track: TentacledTrack;
}

export interface TentacledTrack {
    path:       string;
    event_data: MischievousEventData;
}

export interface MischievousEventData {
    catalog_product_id: string;
    item_id:            string;
}

export interface StickyAction {
    text:   string;
    target: string;
    track:  StickyTrack;
}

export interface StickyTrack {
    path:       string;
    event_data: BraggadociousEventData;
}

export interface BraggadociousEventData {
    catalog_product_id: string;
    item_id:            string;
    domain_id:          string;
    context:            string;
    type:               string;
}

export interface ComponentComponent {
    id:                string;
    state:             State;
    offline_state:     State;
    questions:         QuestionElement[];
    see_more_limit:    number;
    see_more_text:     string;
    title:             string;
    track:             IndigoTrack;
    denounce_template: DenounceTemplate;
    touchable_links:   TouchableLinks;
    close_modal_label: string;
    hide_divider:      boolean;
}

export interface DenounceTemplate {
    question: HeaderTitle;
    answer:   HeaderTitle;
    label:    HeaderTitle;
}

export interface QuestionElement {
    site:                    string;
    product_id:              string;
    product_parent_id:       string;
    item_id:                 string;
    question_id:             number;
    question_date:           Date;
    question_date_formatted: string;
    question:                QuestionQuestion;
    answers:                 Answer[];
    origin:                  string;
    denounce:                SearchBox;
}

export interface Answer {
    text:             string;
    answered_by:      number;
    answered_by_text: string;
    highlights:       any[];
    denounce:         SearchBox;
}

export interface SearchBox {
    target: string;
}

export interface QuestionQuestion {
    text:       string;
    highlights: any[];
}

export interface TouchableLinks {
    fragment: string;
    pattern:  string;
    flag:     string;
}

export interface IndigoTrack {
    melidata_event:  MagentaMelidataEvent;
    analytics_event: PurpleAnalyticsEvent;
}

export interface MagentaMelidataEvent {
    path:       string;
    event_data: EventData1;
}

export interface EventData1 {
    catalog_product_id: string;
    item_id:            string;
    context:            string;
    query:              string;
    see_more_limit:     number;
    total_answers:      number;
}

export interface Parameters {
    filtered: string;
}

export interface ComponentTooltip {
    body: string;
}

export interface QadbDataTrack {
    event_data: EventData2;
    path:       string;
}

export interface EventData2 {
    results:            QadbInfo[];
    item_id:            string;
    catalog_product_id: string;
    catalog_parent_id:  string;
    context:            string;
}

export interface QadbInfo {
    question_id: number;
    invented:    boolean;
}

export interface QuantitySelector {
    type:               string;
    available_quantity: number;
    minimum_quantity:   number;
    selector:           Selector;
    input:              Input;
    track:              PickerTrack;
}

export interface Input {
    title:             ShareTitle;
    subtitles:         HeaderTitle[];
    placeholder:       string;
    confirm_button:    ConfirmButton;
    error_message:     ShareTitle;
    min_error_message: ShareTitle;
}

export interface ConfirmButton {
    timeout:  number;
    duration: number;
    label:    HeaderTitle;
}

export interface Selector {
    title:     ShareTitle;
    subtitles: TitleElement[];
    template:  Template;
    rows:      number;
}

export interface Template {
    singular: string;
    plural:   string;
}

export interface ComponentReviews {
    rating:                   number;
    amount:                   number;
    subtitle:                 string;
    action:                   DescriptionActionClass;
    title:                    string;
    stars:                    string;
    accessibility_text:       string;
    aria_label:               string;
    rating_average_formatted: string;
    formatted_rating_average: TitleElement;
    formatted_total:          TitleElement;
    formatted_total_label:    TitleElement;
    rating_stars:             RatingStars;
}

export interface RatingStars {
    value: number;
    color: string;
    size:  number;
}

export interface Seller {
    id:                number;
    official_store_id: number;
    name:              string;
    reputation_level:  string;
}

export interface SellerInfo {
    state:                       State;
    header:                      string;
    title:                       string;
    subtitles:                   TitleElement[];
    logo:                        string;
    power_seller_status:         PowerSellerStatus;
    store_type:                  string;
    thermometer:                 Thermometer;
    extra_info:                  any[];
    is_exclusive_official_store: boolean;
}

export interface PowerSellerStatus {
    title:    string;
    subtitle: string;
}

export interface Thermometer {
    rank: number;
    info: Info[];
}

export interface Info {
    title?:   string;
    subtitle: string;
    icon?:    IconValue;
}

export interface SellerLink {
    timeout:           number;
    duration:          number;
    label:             ShareTitle;
    close_modal_label: string;
}

export interface SellerStatusInfo {
    icon:          SellerStatusInfoIcon;
    title:         ShareTitle;
    subtitle:      HeaderTitle;
    heading_label: HeadingLabel;
}

export interface Tab {
    attributes_list?:     AttributesList[];
    recommended_products: TabRecommendedProduct[];
    tracking:             Tracking;
    title?:               string;
    labels?:              Labels;
    max_attribute_init?:  number;
    priority?:            number;
}

export interface AttributesList {
    id:    string;
    title: string;
    type:  Type;
}

export interface Labels {
    this_product: string;
    see_product:  string;
    more_details: string;
    tab:          string;
    empty_column: string;
}

export interface TabRecommendedProduct {
    id:              string;
    status:          string;
    trigger:         boolean;
    site_id:         string;
    domain_id:       string;
    permalink:       string;
    name:            string;
    img_url:         string;
    img_max_width:   number;
    img_max_height:  number;
    item_id:         string;
    parent_id:       string;
    product_details: ProductDetailsClass;
}

export interface ProductDetailsClass {
    REVIEWS:             Reviews;
    PRICE:               Price;
    FINISH:              HeaderTitle;
    COLOR:               HeaderTitle;
    UNITS_PER_PACK:      HeaderTitle;
    IS_LONG_LASTING:     HeaderTitle;
    LIPSTICK_FORMATS:    HeaderTitle;
    IS_WATERPROOF:       HeaderTitle;
    IS_CRUELTY_FREE:     HeaderTitle;
    WITH_SUN_PROTECTION: HeaderTitle;
    SALE_FORMAT?:        HeaderTitle;
    SHADES_INCLUDED?:    HeaderTitle;
}

export interface Price {
    value:              number;
    currency_symbol:    string;
    decimal_separator:  string;
    currency_id:        string;
    thousand_separator: string;
    accessibility_text: string;
}

export interface Reviews {
    count_reviews:  number;
    rating_average: number;
}

export interface Tracking {
    experiment: ThumbnailsContainerClass;
    event_data: TrackingEventData;
    path:       string;
}

export interface TrackingEventData {
    recommendations: Recommendations;
}

export interface Recommendations {
    backend_id:        string;
    client:            string;
    recommendation_id: string;
    track_info:        TrackInfo;
}

export interface TrackInfo {
    has_recommendations:   boolean;
    backend_id:            string;
    model_id:              string;
    model_version:         string;
    trigger:               Trigger;
    recommended_products?: TrackInfoRecommendedProduct[];
}

export interface TrackInfoRecommendedProduct {
    item_id: string;
    id:      string;
}

export interface Trigger {
    trigger_type: string;
    product?:     TriggerProduct;
}

export interface TriggerProduct {
    id:        string;
    status:    string;
    domain_id: string;
    item_id:   string;
    parent_id: string;
}

export interface TagAction {
    type?:       string;
    target?:     string;
    timeout:     number;
    duration:    number;
    label:       TagActionLabel;
    action_type: string;
}

export interface TagActionLabel {
    text:         string;
    color:        ColorEnum;
    bg_color:     string;
    font_size:    Size;
    type:         string;
    font_family?: FontFamily;
    text_icon?:   TextIcon;
}

export interface TextIcon {
    id:        string;
    color:     ColorEnum;
    size:      Size;
    type:      string;
    alignment: string;
}

export interface IndecentTrack {
    melidata_event: FriskyMelidataEvent;
}

export interface FriskyMelidataEvent {
    path:       string;
    event_data: EventData3;
}

export interface EventData3 {
    catalog_product_id:   string;
    item_id?:             string;
    url?:                 string;
    category_l1?:         string;
    official_store_id?:   string;
    brand_id?:            string;
    page_type?:           string;
    type?:                string;
    rate?:                number;
    count?:               number;
    pictures_quantity?:   number;
    attributes_quantity?: number;
}

export interface TrackView {
    melidata_event: TrackViewMelidataEvent;
}

export interface TrackViewMelidataEvent {
    path:        string;
    event_data:  EventData2;
    experiments: ThumbnailsContainerClass;
}

export interface ViewportTrack {
    melidata_event: MischievousMelidataEvent;
}

export interface MischievousMelidataEvent {
    path:         string;
    event_data:   EventData4;
    experiments?: ThumbnailsContainerClass;
}

export interface EventData4 {
    seller_type?:       string;
    variant_id?:        string;
    seller_id?:         number;
    reputation?:        string;
    item_id?:           string;
    catalog_product_id: string;
    domain_id?:         string;
    image_quantity?:    number;
    show_more_button?:  boolean;
    is_collapsible?:    boolean;
    page_type?:         string;
}

export interface History {
    id:                string;
    product_id:        string;
    parent_product_id: string;
}

export interface ProductDetailsPictureConfig {
    template:           string;
    template_thumbnail: string;
    template_zoom:      string;
    template_icon:      string;
}

export interface RecommendationsContext {
    item_id:              string;
    product_id:           string;
    category_id:          string;
    is_carousel_polycard: boolean;
}

export interface Share {
    id:            string;
    type:          string;
    state:         State;
    share_title:   ShareTitle;
    permalink:     string;
    title:         string;
    picture:       Picture;
    action:        Add;
    share_actions: any[];
}

export interface ProductDetailsTrack {
    melidata_event:  BraggadociousMelidataEvent;
    analytics_event: FluffyAnalyticsEvent;
    gtm_event:       GtmEvent;
    firebase_event:  FirebaseEvent;
}

export interface FluffyAnalyticsEvent {
    section:           string;
    custom_dimensions: { [key: string]: string };
}

export interface FirebaseEvent {
    event_name: string;
    event_data: FirebaseEventEventData;
}

export interface FirebaseEventEventData {
    item_id:              string;
    catalog_product_id:   string;
    catalog_product_name: string;
    vertical:             string;
    domain_id:            string;
    root_category_id:     string;
    category_id:          string;
}

export interface GtmEvent {
    pageId:           string;
    vertical:         string;
    siteId:           string;
    itemId:           string;
    catalogParentId:  string;
    catalogProductId: string;
    domainId:         string;
    rootCategoryId:   string;
    pathToRoot:       string;
    categoryId:       string;
    reviewRate:       number;
    brandId:          string;
    cartContent:      boolean;
    itemPrice:        number;
    localItemPrice:   number;
    currencyId:       string;
    sellerId:         number;
    reputationLevel:  string;
    installmentInfo:  string;
    freeShipping:     boolean;
    tagManagerId:     string;
    userProductId:    string;
    pageType:         string;
    familyId:         string;
}

export interface BraggadociousMelidataEvent {
    path:        string;
    event_data:  EventData5;
    experiments: Experiments;
}

export interface EventData5 {
    seller_id:                      number;
    seller_name:                    string;
    reputation_level:               string;
    power_seller_status:            string;
    official_store_id:              number;
    subtitle_types:                 string[];
    installment_info:               string;
    compats_info:                   SInfo;
    installations_info:             SInfo;
    free_shipping:                  boolean;
    shipping_mode:                  string;
    local_pick_up:                  boolean;
    store_pick_up:                  boolean;
    logistic_type:                  string;
    is_cbt_fulfillment_us:          boolean;
    review_rate:                    number;
    reviews:                        EventDataReviews;
    price:                          number;
    original_price:                 number;
    currency_id:                    string;
    available_promotions:           any[];
    best_seller_position:           number;
    highlights:                     IconValue;
    credit_view_components:         CreditViewComponents;
    pickers:                        Pickers;
    pickers_attributes:             PickersAttributes;
    gallery:                        Gallery;
    catalog_parent_id:              string;
    catalog_product_id:             string;
    item_id:                        string;
    category_id:                    string;
    vertical:                       string;
    domain_id:                      string;
    item_condition:                 string;
    listing_type_id:                string;
    cart_content:                   boolean;
    deal_ids:                       string[];
    item_attribute_brand_id:        string;
    page_type:                      string;
    user_product_id:                string;
    family_id:                      string;
    stock_type:                     string;
    shipping_conditions:            string;
    shipping_promise:               ShippingPromise;
    item_origins:                   any[];
    pushing_puis:                   boolean;
    showing_puis:                   boolean;
    bo_pick_up_conditions:          string;
    has_roda:                       boolean;
    has_garex:                      boolean;
    is_out_of_coverage:             boolean;
    pdp_type:                       string;
    item_attributes:                string;
    cac_item:                       boolean;
    cac_status:                     string;
    qadb_info:                      QadbInfo[];
    has_unselected_pickers:         boolean;
    seo:                            SEO;
    bank_discounts:                 any[];
    tags:                           string[];
    has_full_enhanced_descriptions: boolean;
    filtered_pdp:                   FilteredPDP;
}

export interface SInfo {
    status: string;
}

export interface CreditViewComponents {
    pricing: Pricing;
    widget:  WidgetClass;
    tooltip: WidgetClass;
}

export interface Pricing {
    installments:          number;
    installments_amount:   number;
    installments_total:    number;
    is_free_installments:  boolean;
    original_price:        number;
    actual_price:          number;
    discount:              string;
    with_mercado_credito:  boolean;
    unit_of_measurement:   string;
    meliplus_installments: boolean;
}

export interface WidgetClass {
    visible: boolean;
}

export interface FilteredPDP {
    relax_filters:                       any[];
    filters_not_applied:                 any[];
    has_filters_not_applied:             boolean;
    is_filter_changing_experience_shown: boolean;
}

export interface Gallery {
    max_size: string;
}

export interface Pickers {
    COLOR: COLORElement[];
}

export interface PickersAttributes {
    COLOR: Color;
}

export interface Color {
    count:        number;
    component:    string;
    picker_label: string;
}

export interface EventDataReviews {
    qualitative_attributes: any[];
    attributes_quantity:    number;
    count:                  number;
    reviews_with_comment:   number;
    pictures_quantity:      number;
    rate:                   number;
}

export interface SEO {
    seo_experiments:  SEOExperiments;
    seo_top_keywords: SEOTopKeyword[];
}

export interface SEOExperiments {
    status:          string;
    experiment_list: ExperimentList[];
}

export interface ExperimentList {
    id:                    string;
    is_enabled:            boolean;
    is_active:             boolean;
    should_apply:          boolean;
    group:                 string;
    executed_successfully: boolean;
}

export interface SEOTopKeyword {
    keyword:        string;
    keyword_source: string;
}

export interface ShippingPromise {
    destination:              string;
    showing_melitag:          boolean;
    showing_promises:         any[];
    showing_upselling:        boolean;
    address_options:          any[];
    agency_options:           any[];
    shipping_failure_message: string;
}

export interface Experiments {
    "buybox-ab-installments-new":           string;
    "recommendations/carousel-seller-pdp":  string;
    "search/best-seller-migration":         string;
    "vip/mcoins-modal":                     string;
    "vpp/dummy-device-consistency":         string;
    "vpp/hide-seller-reputation-permalink": string;
    "vpp/post-purchase-engine":             string;
    "vpp/recommended-installments":         string;
    "vpp/render_landing_preload_container": string;
    "vpp/reviews_position":                 string;
    "vpp/seller-reputation":                string;
    "vpp/tec-spec-native-declarative":      string;
}

export interface UpdatableComponents {
    variation: Quantity;
    quantity:  Quantity;
}

export interface Quantity {
    components: string[];
}
