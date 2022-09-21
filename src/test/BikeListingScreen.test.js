import BikeListingScreen from "../screens/BikeListingScreen";

const MockGetData = [
    {
        "company": [
          "ЗАО «СитиБайк»"
        ],
        "href": "/v2/networks/velobike-moscow",
        "id": "velobike-moscow",
        "location": {
          "city": "Moscow",
          "country": "RU",
          "latitude": 55.75,
          "longitude": 37.616667
        },
        "name": "Velobike"
      }
];

const MockPosList = [MockGetData];

describe('BikeListScreen',() =>{
    let component = BikeListingScreen;
    let fixture = ComponentFixture<BikeListingScreen>

    beforeEach(async () =>{
        await TestBed.configureTestingModule({
            declarations:[BikeListingScreen],
            schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            imports:[],
            providers:[]
        })
    }).compileComponents();
});

beforeEach(() =>{
    fixture = TestBed.createComponent(BikeListingScreen);
    component = fixture.componentInstance;
});

it('should create', ()=>{
    expect(component).toBeTruthy();
});

