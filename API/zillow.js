import axios from 'axios';
import * as fs from 'fs';

let currentPage = 2;
let mapBounds = {
  "west": -123.29590774615478,
  "east": -123.26320625384521,
  "south": 44.55535199977121,
  "north": 44.57531751920906
};

var initialPayload = {
  'searchQueryState': {
    'isMapVisible': false,
    'mapBounds': mapBounds,
    'filterState': {
      'isForRent': {
        'value': true
      },
      'isForSaleByAgent': {
        'value': false
      },
      'isForSaleByOwner': {
        'value': false
      },
      'isNewConstruction': {
        'value': false
      },
      'isComingSoon': {
        'value': false
      },
      'isAuction': {
        'value': false
      },
      'isForSaleForeclosure': {
        'value': false
      }
    },
    'isListVisible': true,
    'mapZoom': 15
  },
  'wants': {
    'cat1': [
      'listResults',
      'mapResults'
    ]
  },
  'requestId': 3,
  'isDebugRequest': false
};

var followingPayload = {
  'searchQueryState': {
    'pagination': {
      'currentPage': currentPage
    },
    'isMapVisible': false,
    'mapBounds': mapBounds,
    'mapZoom': 14,
    'filterState': {
      'isForRent': {
        'value': true
      },
      'isForSaleByAgent': {
        'value': false
      },
      'isForSaleByOwner': {
        'value': false
      },
      'isNewConstruction': {
        'value': false
      },
      'isComingSoon': {
        'value': false
      },
      'isAuction': {
        'value': false
      },
      'isForSaleForeclosure': {
        'value': false
      }
    },
    'isListVisible': true
  },
  'wants': {
    'cat1': [
      'listResults'
    ]
  },
  'requestId': 4,
  'isDebugRequest': false
};


function getApartments() {
    return [{

    }];
}

const initialResponse = await axios.put(
  'https://www.zillow.com/async-create-search-page-state',
  initialPayload,
  {
    headers: {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'content-type': 'application/json',
      'origin': 'https://www.zillow.com',
      'priority': 'u=1, i',
      'referer': 'https://www.zillow.com/homes/for_rent/?searchQueryState=%7B%22isMapVisible%22%3Atrue%2C%22mapBounds%22%3A%7B%22west%22%3A-123.2998559578247%2C%22east%22%3A-123.23445297320556%2C%22south%22%3A44.54397501067483%2C%22north%22%3A44.58390700447436%7D%2C%22filterState%22%3A%7B%22fr%22%3A%7B%22value%22%3Atrue%7D%2C%22fsba%22%3A%7B%22value%22%3Afalse%7D%2C%22fsbo%22%3A%7B%22value%22%3Afalse%7D%2C%22nc%22%3A%7B%22value%22%3Afalse%7D%2C%22cmsn%22%3A%7B%22value%22%3Afalse%7D%2C%22auc%22%3A%7B%22value%22%3Afalse%7D%2C%22fore%22%3A%7B%22value%22%3Afalse%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A14%7D',
      'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Brave";v="134"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sec-gpc': '1',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    }
  }
);

console.log(`${initialResponse.data.cat1.searchResults.listResults.length} apartments found on page 1.`);

var totalPages = initialResponse.data.cat1.searchList.totalPages;

for (var i = 0; i < totalPages; i++) {
  const response = await axios.put(
    'https://www.zillow.com/async-create-search-page-state',
    followingPayload,
    {
      headers: {
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'content-type': 'application/json',
        'origin': 'https://www.zillow.com',
        'priority': 'u=1, i',
        'referer': 'https://www.zillow.com/homes/for_rent/?searchQueryState=%7B%22isMapVisible%22%3Atrue%2C%22mapBounds%22%3A%7B%22west%22%3A-123.2998559578247%2C%22east%22%3A-123.23445297320556%2C%22south%22%3A44.54397501067483%2C%22north%22%3A44.58390700447436%7D%2C%22filterState%22%3A%7B%22fr%22%3A%7B%22value%22%3Atrue%7D%2C%22fsba%22%3A%7B%22value%22%3Afalse%7D%2C%22fsbo%22%3A%7B%22value%22%3Afalse%7D%2C%22nc%22%3A%7B%22value%22%3Afalse%7D%2C%22cmsn%22%3A%7B%22value%22%3Afalse%7D%2C%22auc%22%3A%7B%22value%22%3Afalse%7D%2C%22fore%22%3A%7B%22value%22%3Afalse%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A14%7D',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Brave";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
      }
    }
  );

  console.log(`${response.data.cat1.searchResults.listResults.length} apartments found on page ${currentPage}.`);
  currentPage++;
}

/*
var apartments = response.data.cat1.searchResults.listResults;

for (var i = 0; i < apartments.length; i++) {
    var price, image,  statusType, price, address, beds, baths, area, latLong;
    price = apartments[i].price;
    image = apartments[i].imgSrc;
    statusType = apartments[i].statusType;
    address = apartments[i].address;
    beds = apartments[i].beds;
    baths = apartments[i].baths;
    area = apartments[i].area;
    latLong = apartments[i].latLong;

    if (beds && baths) {
        console.log(`Found an apartment that costs ${price} per month, has ${beds} bed(s), ${baths} bath(s), and an area of ${area} square feet.`);
        console.log(`Located at ${address}.\n`);
    }    
}
    */
    

export default getApartments;
