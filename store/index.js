import { card, sensor, status } from '~/src/class'

export const state = () => ({
  updated:false,
  updated2:false,
  updated3:false,
  updated4:false,
  api_key_bintulu:'https://api.openweathermap.org/data/2.5/forecast?q=bintulu&units=metric&appid=45a2a23d23c78dbe34c5fbd75a591573',
  // api_key_bintulu:'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=bintulu&units=metric&appid=45a2a23d23c78dbe34c5fbd75a591573',
  api_key: '45a2a23d23c78dbe34c5fbd75a591573',
  url_base: 'https://api.openweathermap.org/data/2.5/',
  api_key_ipah:"https://api.openweathermap.org/data/2.5/onecall?lat=2.6914&lon=101.7505&appid=45a2a23d23c78dbe34c5fbd75a591573",
  query: '',
  // weather: {},
  forecasts: [
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      }
      ,
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
  ],
  weather:{
    windDirection:"North",
    windSpeed:"1",
    temperature:"28",
    humidity:"20",
    pressure:"101.32",
    rainfall:"10"
  },
  arrayTime:[[],[],[],[]],
  arrayTimeIpah2:[[],[],[]],
  arrayTimeTkpmPagoh:[[],[],[]],
  summaryIpah: [
    {
      detail: "Station",
      icon: "mdi mdi-map-marker-radius",
      data: "IPAH",
      class: "primary"
    },
    {
      detail: "Blocks",
      icon: "mdi mdi-checkbox-multiple-marked",
      data: "4",
      class: "accent"
    },
    {
      detail: "Warnings",
      icon: "mdi mdi-alert-rhombus-outline",
      data: "0",
      class: "error"
    }
  ],
  summaryTkpmIpah: [
    {
      detail: "Station",
      icon: "mdi mdi-map-marker-radius",
      data: "IPAH",
      class: "primary"
    },
    {
      detail: "Blocks",
      icon: "mdi mdi-checkbox-multiple-marked",
      data: "4",
      class: "accent"
    },
    {
      detail: "Warnings",
      icon: "mdi mdi-alert-rhombus-outline",
      data: "0",
      class: "error"
    }
  ],
  summaryTkpmPagoh: [
    {
      detail: "Station",
      icon: "mdi mdi-map-marker-radius",
      data: "IPAH",
      class: "primary"
    },
    {
      detail: "Blocks",
      icon: "mdi mdi-checkbox-multiple-marked",
      data: "4",
      class: "accent"
    },
    {
      detail: "Warnings",
      icon: "mdi mdi-alert-rhombus-outline",
      data: "0",
      class: "error"
    }
  ],
  summaryKongPo: [
    {
      detail: "Station",
      icon: "mdi mdi-map-marker-radius",
      data: "IPAH",
      class: "primary"
    },
    {
      detail: "Blocks",
      icon: "mdi mdi-checkbox-multiple-marked",
      data: "4",
      class: "accent"
    },
    {
      detail: "Warnings",
      icon: "mdi mdi-alert-rhombus-outline",
      data: "0",
      class: "error"
    }
  ],
  status:[],
  stations:[
    {
      station:'IPAH 1',
      description:"IPAH 1",
      image: "IPAH1.png",
      sensorSoil:[
        {
          block:'Block 1',
          description:"Block 1",
          cols:6,
          sensors:['N','P','K', 'pH', 'EC', 'SM','Temp'],
          sensorData:[
            new sensor('N','N',0,'%',40,false, 'N'),
            new sensor('P','P',0,'%',40,false, 'P'),
            new sensor('K','K',0,'%',40,false, 'K'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
            new sensor('Temp','Temp',0,'%',25,false, 'Temp')
          ],
          warnings:[],
          warningsCounts: [],
        },
        {
          block:'Block 2',
          description:"Block 2",
          cols:6,
          sensors:['N','P','K', 'pH', 'EC', 'SM','Temp'],
          sensorData:[
            new sensor('N','N',0,'%',40,false, 'N'),
            new sensor('P','P',0,'%',40,false, 'P'),
            new sensor('K','K',0,'%',40,false, 'K'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
            new sensor('Temp','Temp',0,'%',25,false, 'Temp')
          ],
          warnings:[],
          warningsCounts: [],
        },
        {
          block:'Block 3',
          description:"Block 3",
          cols:6,
          sensors:['N','P','K', 'pH', 'EC', 'SM','Temp'],
          sensorData:[
            new sensor('N','N',0,'%',40,false, 'N'),
            new sensor('P','P',0,'%',40,false, 'P'),
            new sensor('K','K',0,'%',40,false, 'K'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
            new sensor('Temp','Temp',0,'%',25,false, 'Temp')
          ],
          warnings:[],
          warningsCounts: [],
        },
        {
          block:'Block 4',
          description:"Block 4",
          cols:6,
          sensors:['N','P','K', 'pH', 'EC', 'SM','Temp'],
          sensorData:[
            new sensor('N','N',0,'%',40,false, 'N'),
            new sensor('P','P',0,'%',40,false, 'P'),
            new sensor('K','K',0,'%',40,false, 'K'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
            new sensor('Temp','Temp',0,'%',25,false, 'Temp')
          ],
          warnings:[],
          warningsCounts: [],
        },
      ],
      sensorWater:[
        {
          block:'All',
          description:"All",
          cols:6,
          sensors:['Level', 'pH', 'EC'],
          sensorData:[
            new sensor('Level','Level',0,'%',40,false, 'Level'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
          warnings:[]
        },
      ],
      sensors:['N','P','K', 'pH', 'EC', 'SM','Temp'],
      sensorData:[
        new sensor('N','N',0,'%',40,false, 'N'),
        new sensor('P','P',0,'%',40,false, 'P'),
        new sensor('K','K',0,'%',40,false, 'K'),
        new sensor('pH','pH',0,'%',25,false, 'pH'),
        new sensor('EC','EC',0,'%',25,false, 'EC'),
        new sensor('SM','SM',0,'%',25,false, 'SM'),
        new sensor('Temp','Temp',0,'%',25,false, 'Temp')
      ],
      warnings:[],
      warningsCounts: [],
      sensorType:[
        {
          name:"Soil",
          image:"ipah1/ipah1.png"
        },
        {
          name:"Nutrient House",
          image:"ipah1Water.jpeg"
        }
      ],
      status: [
        new status('Block 1', 'Waiting for incoming data...'),
        new status('Block 2', 'Waiting for incoming data...'),
        new status('Block 3', 'Waiting for incoming data...'),
        new status('Block 4', 'Waiting for incoming data...'),
      ],
    },
    {
      station:'IPAH 2',
      description:"IPAH 2",
      image: "IPAH2.png",
      sensorSoil:[
        {
          block:'Block 1',
          description:"Block 1",
          cols:4,
          sensors:[ 'pH','EC', 'SM'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
        },
        {
          block:'Block 2',
          description:"Block 2",
          cols:4,
          sensors:[ 'pH','EC', 'SM'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
          
        },
        {
          block:'Block 3',
          description:"Block 3",
          cols:4,
          sensors:[ 'pH','EC', 'SM'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
        },
      ],
      sensorWater:[
        {
          block:'SPH 1',
          description:"SPH 1",
          cols:4,
          sensors:['pH', 'EC'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
          warnings:[]
        },
          {
          block:'SPH 4',
          description:"SPH 4",
          cols:4,
          sensors:['pH', 'EC'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
          warnings:[]
          },
        {
          block:'SPH 5',
          description:"SPH 5",
          cols:4,
          sensors:['pH', 'EC'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
         warnings:[]
        },
      ],
      sensors:['pH', 'EC', 'SM'],
      sensorData:[
        new sensor('pH','pH',0,'%',25,false, 'pH'),
        new sensor('EC','EC',0,'%',25,false, 'EC'),
        new sensor('SM','SM',0,'%',25,false, 'SM'),
      ],
      warnings:[],
      warningsCounts: [],
      sensorType:[
        {
          name:"Soil",
          image:"ipah2/ipah2.png"
        },
        {
          name:"Nutrient House",
          image:"ipah2Water.jpeg"
        }
      ],
      status: [
        new status('Block 1', 'Waiting for incoming data...'),
        new status('Block 2', 'Waiting for incoming data...'),
        new status('Block 3', 'Waiting for incoming data...'),
      ],
    },
    {
      station:'TKPM PAGOH',
      description:"TKPM PAGOH",
      image: "PAGOH.png",
      sensorSoil:[
        {
          block:'Block 1',
          description:"Block 1",
          cols:4,
          sensors:['pH', 'EC', 'SM'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
        },
        {
          block:'Block 2',
          description:"Block 2",
          cols:4,
          sensors:['pH', 'EC', 'SM'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
        },
        {
          block:'Block 3',
          description:"Block 3",
          cols:4,
          sensors:['pH', 'EC', 'SM'],
          sensorData:[
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
        },
      ],
      sensorWater:[
        {
          block:'Block 1',
          description:"Block 1",
          cols:4,
          sensors:['Level', 'pH', 'EC'],
          sensorData:[
            new sensor('Level','Level',0,'%',40,false, 'Level'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
          warnings:[]
        },
          {
          block:'Block 2',
          description:"Block 2",
          cols:4,
          sensors:['Level', 'pH', 'EC'],
          sensorData:[
            new sensor('Level','Level',0,'%',40,false, 'Level'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
          warnings:[]
          },
        {
          block:'Block 3',
          description:"Block 3",
          cols:4,
          sensors:['Level', 'pH', 'EC'],
          sensorData:[
            new sensor('Level','Level',0,'%',40,false, 'Level'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
         warnings:[]
        },
      ],
      sensors:['pH', 'EC', 'SM',],
      sensorData:[
        new sensor('pH','pH',0,'%',25,false, 'pH'),
        new sensor('EC','EC',0,'%',25,false, 'EC'),
        new sensor('SM','SM',0,'%',25,false, 'SM'),
      ],
      warnings:[],
      warningsCounts: [],
      sensorType:[
        {
          name:"Soil",
          image:"tkpmPagoh/tkpmPagoh.png"
        },
        {
          name:"Nutrient House",
          image:"tkpmPagohWater.jpeg"
        }
      ],
      status: [
        new status('Block 1', 'Waiting for incoming data...'),
        new status('Block 2', 'Waiting for incoming data...'),
        new status('Block 3', 'Waiting for incoming data...'),
      ],
    },  
    {
      station:'KONG PO',
      description:"KONG PO",
      image: "IPAH1.png",
      sensorSoil:[
        {
          block:'Block 1',
          description:"Block 1",
          cols:6,
          sensors:['N','P','K', 'pH', 'EC', 'SM'],
          sensorData:[
            new sensor('N','N',0,'%',40,false, 'N'),
            new sensor('P','P',0,'%',40,false, 'P'),
            new sensor('K','K',0,'%',40,false, 'K'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
        },
        {
          block:'Block 2',
          description:"Block 2",
          cols:6,
          sensors:['N','P','K', 'pH', 'EC', 'SM'],
          sensorData:[
            new sensor('N','N',0,'%',40,false, 'N'),
            new sensor('P','P',0,'%',40,false, 'P'),
            new sensor('K','K',0,'%',40,false, 'K'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
            new sensor('SM','SM',0,'%',25,false, 'SM'),
          ],
          warnings:[],
          warningsCounts: [],
        },
      ],
      sensorWater:[
        {
          block:'All',
          description:"All",
          cols:6,
          sensors:['Level', 'pH', 'EC'],
          sensorData:[
            new sensor('Level','Level',0,'%',40,false, 'Level'),
            new sensor('pH','pH',0,'%',25,false, 'pH'),
            new sensor('EC','EC',0,'%',25,false, 'EC'),
          ],
          warnings:[]
        },
      ],
      sensors:['N','P','K', 'pH', 'EC', 'SM'],
      sensorData:[
        new sensor('N','N',0,'%',40,false, 'N'),
        new sensor('P','P',0,'%',40,false, 'P'),
        new sensor('K','K',0,'%',40,false, 'K'),
        new sensor('pH','pH',0,'%',25,false, 'pH'),
        new sensor('EC','EC',0,'%',25,false, 'EC'),
        new sensor('SM','SM',0,'%',25,false, 'SM'),
      ],
      warnings:[],
      warningsCounts: [],
      sensorType:[
        {
          name:"Soil",
          image:"ipah1/ipah1.png"
        },
        {
          name:"Nutrient House",
          image:"ipah1Water.jpeg"
        }
      ],
      status: [
        new status('Block 1', 'Waiting for incoming data...'),
        new status('Block 2', 'Waiting for incoming data...'),
      ],
    },
  ],
  activeUser:0,
  trendsIpah1:[
    {
      name:"Block 1",
      current:[[],[],[],[],[],[],[]],
      hourly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }, 
      ],
      daily:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
    {
      name:"Block 2",
      current:[[],[],[],[],[],[],[]],
      hourly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }, 
      ],
      daily:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
    {
      name:"Block 3",
      current:[[],[],[],[],[],[],[]],
      hourly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }, 
      ],
      daily:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
    {
      name:"Block 4",
      current:[[],[],[],[],[],[],[]],
      hourly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }, 
      ],
      daily:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
  ],
  trendsIpah2:[
    {
      name:"Block 1",
      current:[[],[],[]],
      hourly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }, 
      ],
      daily:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
      ]
    },
    {
      name:"Block 2",
      current:[[],[],[]],
      hourly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
      ],
      daily:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
      ],
      monthly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
      ]
    },
    {
      name:"Block 3",
      current:[[],[],[]],
      hourly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
      ],
      daily:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
      ],
      monthly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
      ]
    },
  ],
  trendsTkpmPagoh:[
    {
      name:"Block 1",
      current:[[],[],[]],
      hourly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }, 
      ],
      daily:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilTEMP",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
      ]
    },
    {
      name:"Block 2",
      current:[[],[],[]],
      hourly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
      ],
      daily:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
      ],
      monthly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
      ]
    },
    {
      name:"Block 3",
      current:[[],[],[]],
      hourly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
      ],
      daily:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
      ],
      monthly:[
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
      ]
    },
  ],
  trendsKongPo:[
    {
      name:"Block 1",
      current:[[],[],[],[],[],[]],
      hourly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }, 
      ],
      daily:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
      ],
      monthly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
    {
      name:"Block 2",
      current:[[],[],[],[],[],[]],
      hourly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }
      ],
      daily:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"soilNitrogen",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPhosphorus",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPotassium",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilPH",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilEC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"soilMS",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
  ],
  ipahStatus:{
    SV1:0,
    SV2:0,
    SV3:0,
    SV4:0,
    SV5:0,
    SV6:0,
    P:0,
    DP:0
  },
  tkpmIpahStatus:{
    SV1:0,
    SV2:0,
    SV3:0,
    SV4:0,
    SV5:0,
    SV6:0,
    SV7:0,
    SV8:0,
    SV9:0,
    SV10:0,
    SV11:0,
    SV12:0,
    SV13:0,
    SV14:0,
    SV15:0,
    P1:0,
    P2:0,
    P3:0,
    DP:0
  },
  tkpmPagohStatus:{
    SV1:0,
    SV2:0,
    SV3:0,
    SV4:0,
    SV5:0,
    SV6:0,
    SV7:0,
    SV8:0,
    SV9:0,
    SV10:0,
    SV11:0,
    SV12:0,
    SV13:0,
    SV14:0,
    P1:0,
    P2:0,
    P3:0,
    PNW:0,
    DP1:0,
    DP2:0
  },
  kongPoStatus:{
    SV1:0,
    SV2:0,
    SV3:0,
    SV4:0,
    SV5:0,
    DP:0,
    PNW:0,
    PTW:0,
  },
  ipahProcess:"System is idle",
  tkpmIpahProcess:"System is idle",
  tkpmPagohProcess:"System is idle",
  kongPoProcess:"System is idle",
  weatherIpah: 
  [
    {
    dt_txt:"",
    weatherMain:"",
    weatherDescription:"",
    feels_like:"",
    temp_min:"",
    temp_max:"",
    humidity:"",
    windSpeed:"",
    windDeg:""
  },
  {
    dt_txt:"",
    weatherMain:"",
    weatherDescription:"",
    feels_like:"",
    temp_min:"",
    temp_max:"",
    humidity:"",
    pressure:"",
    windSpeed:"",
    windDeg:""
  },
  {
    dt_txt:"",
    weatherMain:"",
    weatherDescription:"",
    feels_like:"",
    temp_min:"",
    temp_max:"",
    humidity:"",
    windSpeed:"",
    windDeg:""
  },
  {
    dt_txt:"",
    weatherMain:"",
    weatherDescription:"",
    feels_like:"",
    temp_min:"",
    temp_max:"",
    humidity:"",
    windSpeed:"",
    windDeg:""
  },
  {
    dt_txt:"",
    weatherMain:"",
    weatherDescription:"",
    feels_like:"",
    temp_min:"",
    temp_max:"",
    humidity:"",
    windSpeed:"",
    windDeg:""
  }
],
ipah1ManualFill:false,
ipah1ManualStop:false,
ipah2ManualFill:false,
ipah2ManualStop:false,
tkpmPagohManualFill:false,
tkpmPagohManualStop:false,
kongPoManualFill:false,
kongPoManualStop:false,
kongPoManualNutrient:false,
});


export const mutations = {
    // api for OpenWeatherMap
    SET_WEATHER (state, value) {
      // state.weatherIpah = []
      
      // console.log(value)
      const data = value.list.filter(forecast => forecast.dt_txt.slice(-8) === '12:00:00' && forecast.dt_txt.slice(0, 10) !== state.today)
      
      console.log(data)
      let weather = [
        {
          dt_txt:data[0].dt_txt.slice(0, -9),
          weatherMain:data[0].weather[0].main,
          weatherDescription:data[0].weather[0].description,
          feels_like:data[0].main.feels_like,
          temp_min:data[0].main.temp_min,
          temp_max:data[0].main.temp_max,
          humidity:data[0].main.humidity,
          pressure:data[0].main.pressure,
          windSpeed:data[0].wind.speed,
          windDeg:data[0].wind.deg
        },
        {
          dt_txt:data[1].dt_txt.slice(0, -9),
          weatherMain:data[1].weather[0].main,
          weatherDescription:data[1].weather[0].description,
          feels_like:data[1].main.feels_like,
          temp_min:data[1].main.temp_min,
          temp_max:data[1].main.temp_max,
          humidity:data[1].main.humidity,
          windSpeed:data[1].wind.speed,
          windDeg:data[1].wind.deg
        },
        {
          dt_txt:data[2].dt_txt.slice(0, -9),
          weatherMain:data[2].weather[0].main,
          weatherDescription:data[2].weather[0].description,
          feels_like:data[2].main.feels_like,
          temp_min:data[2].main.temp_min,
          temp_max:data[2].main.temp_max,
          humidity:data[2].main.humidity,
          windSpeed:data[2].wind.speed,
          windDeg:data[2].wind.deg
        },
        {
          dt_txt:data[3].dt_txt.slice(0, -9),
          weatherMain:data[3].weather[0].main,
          weatherDescription:data[3].weather[0].description,
          feels_like:data[3].main.feels_like,
          temp_min:data[3].main.temp_min,
          temp_max:data[3].main.temp_max,
          humidity:data[3].main.humidity,
          windSpeed:data[3].wind.speed,
          windDeg:data[3].wind.deg
        },
        {
          dt_txt:data[4].dt_txt.slice(0, -9),
          weatherMain:data[4].weather[0].main,
          weatherDescription:data[4].weather[0].description,
          feels_like:data[4].main.feels_like,
          temp_min:data[4].main.temp_min,
          temp_max:data[4].main.temp_max,
          humidity:data[4].main.humidity,
          windSpeed:data[4].wind.speed,
          windDeg:data[4].wind.deg
        }
      ]
      state.weatherIpah = weather
      console.log(state.weatherIpah)
      // console.log(value)
    },
    SET_FORECASTS (state, value) {
      const data = value.list.filter(forecast => forecast.dt_txt.slice(-8) === '12:00:00' && forecast.dt_txt.slice(0, 10) !== state.today)
      state.forecasts = data
    },
    updateQuery (state, query) {
      state.query = query
    },
    SET_TODAY (state, value) {
      state.today = value
    },
    setActiveGraph(state, payload){
      state.activeGraph=payload
      // console.log(state.arrayTime)
    },

    //SET ACTIVE USER
    setActiveUser(state, payload){
      let user;
      state.status=[]
      if(state.auth.user.station[0] == 'ipah1'){
        user = 0
        state.summaryIpah[0].data = "IPAH"
        state.summaryIpah[1].data = 4
      }else if (state.auth.user.station[0] == 'ipah2'){
        user =1
        state.summaryTkpmIpah[0].data = "TKPM Ipah"
        state.summaryTkpmIpah[1].data = 3

      }else if (state.auth.user.station[0] == 'tkpmPagoh'){
        user =2
        state.summaryTkpmPagoh[0].data = "TKPM Pagoh"
        state.summaryTkpmPagoh[1].data = 3

      }else{
        user =3
        state.summaryKongPo[0].data = "Kong Po"
        state.summaryKongPo[1].data = 3
      }
      state.activeUser = user
    },
    // SET UPDATED
    updateDateState(state,payload){
      state.updated=payload
      console.log("here2");
    },
    // SET UPDATED
    updateDateState2(state,payload){
      state.updated2=payload
      console.log("here3");
    },
    // SET UPDATED
    updateDateState3(state,payload){
      state.updated3=payload
      console.log("here3");
    },
    // SET UPDATED
    updateDateState4(state,payload){
      state.updated4=payload
      console.log("here4");
    },

    // IPAH1 //
  // Hourly
  getHourlyIpah1(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
     
     state.trendsIpah1[indexStation].hourly[indexSensor].min=data.min;
     state.trendsIpah1[indexStation].hourly[indexSensor].max=data.max;
     state.trendsIpah1[indexStation].hourly[indexSensor].avg=data.avg;
     state.trendsIpah1[indexStation].hourly[indexSensor].hour=data.hour
    //  console.log(state.trendsIpah1)
   },
 // Daily
 getDailyIpah1(state,payload){
  let indexStation=payload.indexStation;
  let indexSensor=payload.indexSensor;
  let data=payload;
  // console.log(data)
  state.trendsIpah1[indexStation].daily[indexSensor].min=data.min;
  state.trendsIpah1[indexStation].daily[indexSensor].max=data.max;
  state.trendsIpah1[indexStation].daily[indexSensor].avg=data.avg;
  state.trendsIpah1[indexStation].daily[indexSensor].day=data.day
  // console.log(state.trends[0].daily)
},
  // Monthly
  getMonthlyIpah1(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
    state.trendsIpah1[indexStation].monthly[indexSensor].min=data.min;
    state.trendsIpah1[indexStation].monthly[indexSensor].max=data.max;
    state.trendsIpah1[indexStation].monthly[indexSensor].avg=data.avg;
    state.trendsIpah1[indexStation].monthly[indexSensor].monthName=data.monthName;
    // console.log(state.trendsIpah1)
  },
  //Insert array time for current trend IPAH1
  getCurrentTimeArrayIpah1(state,payload){
    if (state.arrayTime[payload.index].length < 10) {
      state.arrayTime[payload.index].push(payload.realTime);
    } else {
      state.arrayTime[payload.index].splice(0, 1);
      state.arrayTime[payload.index].push(payload.realTime);
    }
  },

   //Insert data into array for current trend IPAH1
   getCurrentDataArrayIpah1(state,payload,){
    let sensor=payload.sensor;
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;

    if(state.trendsIpah1[indexStation].current[indexSensor].length<10){
      if( sensor=='soilNitrogen'){
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilPhosphorus'){
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilPotassium'){
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[2].data)
      }
      if( sensor=='soilPH'){
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[3].data)
      }
      if( sensor=='soilEC'){
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[4].data)
      }
      if( sensor=='soilMS'){
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[5].data)
      }
      if( sensor=='soilTEMP'){
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[6].data)
      }
    }else{
      if( sensor=='soilNitrogen'){
      state.trendsIpah1[indexStation].current[indexSensor].splice(0, 1);
      state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilPhosphorus'){
      state.trendsIpah1[indexStation].current[indexSensor].splice(0, 1);
      state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilPotassium'){
      state.trendsIpah1[indexStation].current[indexSensor].splice(0, 1);
      state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[2].data)
      }
      if( sensor=='soilPH'){
        state.trendsIpah1[indexStation].current[indexSensor].splice(0, 1);
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[3].data)
      }
      if( sensor=='soilEC'){
        state.trendsIpah1[indexStation].current[indexSensor].splice(0, 1);
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[4].data)
      }
      if( sensor=='soilMS'){
        state.trendsIpah1[indexStation].current[indexSensor].splice(0, 1);
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[5].data)
      }
      if( sensor=='soilTEMP'){
        state.trendsIpah1[indexStation].current[indexSensor].splice(0, 1);
        state.trendsIpah1[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[6].data)
      }
    }
  },

  // UPDATE CURRENT DATA IPAH1
  getCurrentDataIpah1(state,payload){
    let station = payload.station
    let block = payload.block
    let soilNitrogen = payload.soilNitrogen
    let soilPhosphorus = payload.soilPhosphorus
    let soilPotassium = payload.soilPotassium
    let soilPH = payload.soilPH
    let soilEC = payload.soilEC
    let soilMS = payload.soilMS
    let soilTEMP = payload.soilTEMP
    state.stations[station].sensorSoil[block].sensorData[0].data = soilNitrogen
    state.stations[station].sensorSoil[block].sensorData[1].data = soilPhosphorus
    state.stations[station].sensorSoil[block].sensorData[2].data = soilPotassium
    state.stations[station].sensorSoil[block].sensorData[3].data = soilPH
    state.stations[station].sensorSoil[block].sensorData[4].data = soilEC
    state.stations[station].sensorSoil[block].sensorData[5].data = soilMS
    state.stations[station].sensorSoil[block].sensorData[6].data = soilTEMP
  },

  // END OF IPAH1 //

  // IPAH2 //
  // Hourly
  getHourlyIpah2(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
     
     state.trendsIpah2[indexStation].hourly[indexSensor].min=data.min;
     state.trendsIpah2[indexStation].hourly[indexSensor].max=data.max;
     state.trendsIpah2[indexStation].hourly[indexSensor].avg=data.avg;
     state.trendsIpah2[indexStation].hourly[indexSensor].hour=data.hour
    //  console.log(state.trendsIpah1)
   },
 // Daily
 getDailyIpah2(state,payload){
  let indexStation=payload.indexStation;
  let indexSensor=payload.indexSensor;
  let data=payload;
  // console.log(data)
  state.trendsIpah2[indexStation].daily[indexSensor].min=data.min;
  state.trendsIpah2[indexStation].daily[indexSensor].max=data.max;
  state.trendsIpah2[indexStation].daily[indexSensor].avg=data.avg;
  state.trendsIpah2[indexStation].daily[indexSensor].day=data.day
  // console.log(state.trends[0].daily)
},
  // Monthly
  getMonthlyIpah2(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
    state.trendsIpah2[indexStation].monthly[indexSensor].min=data.min;
    state.trendsIpah2[indexStation].monthly[indexSensor].max=data.max;
    state.trendsIpah2[indexStation].monthly[indexSensor].avg=data.avg;
    state.trendsIpah2[indexStation].monthly[indexSensor].monthName=data.monthName;
    // console.log(state.trendsIpah1)
  },

  //Insert array time for current trend IPAH2
  getCurrentTimeArrayIpah2(state,payload){
    if (state.arrayTimeIpah2[payload.index].length < 10) {
      state.arrayTimeIpah2[payload.index].push(payload.realTime);
    } else {
      state.arrayTimeIpah2[payload.index].splice(0, 1);
      state.arrayTimeIpah2[payload.index].push(payload.realTime);
    }
  },

   //Insert data into array for current trend IPAH2
   getCurrentDataArrayIpah2(state,payload,){
    let sensor=payload.sensor;
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;

    if(state.trendsIpah2[indexStation].current[indexSensor].length<10){
      if( sensor=='soilPH'){
        state.trendsIpah2[indexStation].current[indexSensor].push(state.stations[1].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilEC'){
        state.trendsIpah2[indexStation].current[indexSensor].push(state.stations[1].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilMS'){
        state.trendsIpah2[indexStation].current[indexSensor].push(state.stations[1].sensorSoil[indexStation].sensorData[2].data)
      }
    }else{
      if( sensor=='soilPH'){
        state.trendsIpah2[indexStation].current[indexSensor].splice(0, 1);
        state.trendsIpah2[indexStation].current[indexSensor].push(state.stations[1].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilEC'){
        state.trendsIpah2[indexStation].current[indexSensor].splice(0, 1);
        state.trendsIpah2[indexStation].current[indexSensor].push(state.stations[1].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilMS'){
        state.trendsIpah2[indexStation].current[indexSensor].splice(0, 1);
        state.trendsIpah2[indexStation].current[indexSensor].push(state.stations[1].sensorSoil[indexStation].sensorData[2].data)
      }
    }
  },

  // UPDATE CURRENT DATA IPAH2
  getCurrentDataIpah2(state,payload){
    let station = payload.station
    let block = payload.block
    let soilPH = payload.soilPH
    let soilEC = payload.soilEC
    let soilMS = payload.soilMS
    state.stations[station].sensorSoil[block].sensorData[0].data = soilPH
    state.stations[station].sensorSoil[block].sensorData[1].data = soilEC
    state.stations[station].sensorSoil[block].sensorData[2].data = soilMS
  },
  // END OF IPAH2 //

  // TKPM PAGOH //
  // Hourly
  getHourlyTkpmPagoh(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
     
     state.trendsTkpmPagoh[indexStation].hourly[indexSensor].min=data.min;
     state.trendsTkpmPagoh[indexStation].hourly[indexSensor].max=data.max;
     state.trendsTkpmPagoh[indexStation].hourly[indexSensor].avg=data.avg;
     state.trendsTkpmPagoh[indexStation].hourly[indexSensor].hour=data.hour
    //  console.log(state.trendsIpah1)
   },
 // Daily
 getDailyTkpmPagoh(state,payload){
  let indexStation=payload.indexStation;
  let indexSensor=payload.indexSensor;
  let data=payload;
  // console.log(data)
  state.trendsTkpmPagoh[indexStation].daily[indexSensor].min=data.min;
  state.trendsTkpmPagoh[indexStation].daily[indexSensor].max=data.max;
  state.trendsTkpmPagoh[indexStation].daily[indexSensor].avg=data.avg;
  state.trendsTkpmPagoh[indexStation].daily[indexSensor].day=data.day
  // console.log(state.trends[0].daily)
},
  // Monthly
  getMonthlyTkpmPagoh(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
    state.trendsTkpmPagoh[indexStation].monthly[indexSensor].min=data.min;
    state.trendsTkpmPagoh[indexStation].monthly[indexSensor].max=data.max;
    state.trendsTkpmPagoh[indexStation].monthly[indexSensor].avg=data.avg;
    state.trendsTkpmPagoh[indexStation].monthly[indexSensor].monthName=data.monthName;
    // console.log(state.trendsIpah1)
  },

  //Insert array time for current trend TkpmPagoh
  getCurrentTimeArrayTkpmPagoh(state,payload){
    if (state.arrayTimeTkpmPagoh[payload.index].length < 10) {
      state.arrayTimeTkpmPagoh[payload.index].push(payload.realTime);
    } else {
      state.arrayTimeTkpmPagoh[payload.index].splice(0, 1);
      state.arrayTimeTkpmPagoh[payload.index].push(payload.realTime);
    }
  },

   //Insert data into array for current trend TkpmPagoh
   getCurrentDataArrayTkpmPagoh(state,payload,){
    let sensor=payload.sensor;
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;

    if(state.trendsTkpmPagoh[indexStation].current[indexSensor].length<10){
      if( sensor=='soilPH'){
        state.trendsTkpmPagoh[indexStation].current[indexSensor].push(state.stations[2].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilEC'){
        state.trendsTkpmPagoh[indexStation].current[indexSensor].push(state.stations[2].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilMS'){
        state.trendsTkpmPagoh[indexStation].current[indexSensor].push(state.stations[2].sensorSoil[indexStation].sensorData[2].data)
      }
    }else{
      if( sensor=='soilPH'){
        state.trendsTkpmPagoh[indexStation].current[indexSensor].splice(0, 1);
        state.trendsTkpmPagoh[indexStation].current[indexSensor].push(state.stations[2].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilEC'){
        state.trendsTkpmPagoh[indexStation].current[indexSensor].splice(0, 1);
        state.trendsTkpmPagoh[indexStation].current[indexSensor].push(state.stations[2].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilMS'){
        state.trendsTkpmPagoh[indexStation].current[indexSensor].splice(0, 1);
        state.trendsTkpmPagoh[indexStation].current[indexSensor].push(state.stations[2].sensorSoil[indexStation].sensorData[2].data)
      }
    }
  },

  // UPDATE CURRENT DATA TkpmPagoh
  getCurrentDataTkpmPagoh(state,payload){
    let station = payload.station
    let block = payload.block
    let soilPH = payload.soilPH
    let soilEC = payload.soilEC
    let soilMS = payload.soilMS
    state.stations[station].sensorSoil[block].sensorData[0].data = soilPH
    state.stations[station].sensorSoil[block].sensorData[1].data = soilEC
    state.stations[station].sensorSoil[block].sensorData[2].data = soilMS
  },
  // END OF TkpmPagoh //

     // KONG PO //
  // Hourly
  getHourlyKongPo(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
     
     state.trendsKongPo[indexStation].hourly[indexSensor].min=data.min;
     state.trendsKongPo[indexStation].hourly[indexSensor].max=data.max;
     state.trendsKongPo[indexStation].hourly[indexSensor].avg=data.avg;
     state.trendsKongPo[indexStation].hourly[indexSensor].hour=data.hour
    //  console.log(state.trendsIpah1)
   },
 // Daily
 getDailyKongPo(state,payload){
  let indexStation=payload.indexStation;
  let indexSensor=payload.indexSensor;
  let data=payload;
  // console.log(data)
  state.trendsKongPo[indexStation].daily[indexSensor].min=data.min;
  state.trendsKongPo[indexStation].daily[indexSensor].max=data.max;
  state.trendsKongPo[indexStation].daily[indexSensor].avg=data.avg;
  state.trendsKongPo[indexStation].daily[indexSensor].day=data.day
  // console.log(state.trends[0].daily)
},
  // Monthly
  getMonthlyKongPo(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
    state.trendsKongPo[indexStation].monthly[indexSensor].min=data.min;
    state.trendsKongPo[indexStation].monthly[indexSensor].max=data.max;
    state.trendsKongPo[indexStation].monthly[indexSensor].avg=data.avg;
    state.trendsKongPo[indexStation].monthly[indexSensor].monthName=data.monthName;
    // console.log(state.trendsIpah1)
  },
  //Insert array time for current trend KONG PO
  getCurrentTimeArrayKongPo(state,payload){
    if (state.arrayTime[payload.index].length < 10) {
      state.arrayTime[payload.index].push(payload.realTime);
    } else {
      state.arrayTime[payload.index].splice(0, 1);
      state.arrayTime[payload.index].push(payload.realTime);
    }
  },

   //Insert data into array for current trend KONG PO
   getCurrentDataArrayKongPo(state,payload,){
    let sensor=payload.sensor;
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;

    if(state.trendsKongPo[indexStation].current[indexSensor].length<10){
      if( sensor=='soilNitrogen'){
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilPhosphorus'){
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilPotassium'){
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[2].data)
      }
      if( sensor=='soilPH'){
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[3].data)
      }
      if( sensor=='soilEC'){
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[4].data)
      }
      if( sensor=='soilMS'){
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[5].data)
      }
    }else{
      if( sensor=='soilNitrogen'){
      state.trendsKongPo[indexStation].current[indexSensor].splice(0, 1);
      state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[0].data)
      }
      if( sensor=='soilPhosphorus'){
      state.trendsKongPo[indexStation].current[indexSensor].splice(0, 1);
      state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[1].data)
      }
      if( sensor=='soilPotassium'){
      state.trendsKongPo[indexStation].current[indexSensor].splice(0, 1);
      state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[2].data)
      }
      if( sensor=='soilPH'){
        state.trendsKongPo[indexStation].current[indexSensor].splice(0, 1);
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[3].data)
      }
      if( sensor=='soilEC'){
        state.trendsKongPo[indexStation].current[indexSensor].splice(0, 1);
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[4].data)
      }
      if( sensor=='soilMS'){
        state.trendsKongPo[indexStation].current[indexSensor].splice(0, 1);
        state.trendsKongPo[indexStation].current[indexSensor].push(state.stations[0].sensorSoil[indexStation].sensorData[5].data)
      }
    }
  },

  // UPDATE CURRENT DATA KONG PO
  getCurrentDataKongPo(state,payload){
    let station = payload.station
    let block = payload.block
    let soilNitrogen = payload.soilNitrogen
    let soilPhosphorus = payload.soilPhosphorus
    let soilPotassium = payload.soilPotassium
    let soilPH = payload.soilPH
    let soilEC = payload.soilEC
    let soilMS = payload.soilMS
    state.stations[station].sensorSoil[block].sensorData[0].data = soilNitrogen
    state.stations[station].sensorSoil[block].sensorData[1].data = soilPhosphorus
    state.stations[station].sensorSoil[block].sensorData[2].data = soilPotassium
    state.stations[station].sensorSoil[block].sensorData[3].data = soilPH
    state.stations[station].sensorSoil[block].sensorData[4].data = soilEC
    state.stations[station].sensorSoil[block].sensorData[5].data = soilMS
  },

  // END OF KONG PO //


    // Set boolean for isHigh key in state
    checkWarning (state, payload) {
      const indexStation = payload.indexStation
      const indexBlock = payload.indexBlock
      const indexSensor = payload.indexSensor
      const isHigh = payload.isHigh
      const value = payload.value
      const warningString = payload.warningString
      state.stations[indexStation].sensorSoil[indexBlock].sensorData[indexSensor].isHigh = isHigh
      state.stations[indexStation].sensorSoil[indexBlock].warningsCounts[indexSensor] = value
      state.stations[indexStation].sensorSoil[indexBlock].warnings[indexSensor] = warningString
      // console.log(state.stations[0].sensorSoil[0].warnings)
    },
  // toString() warnings array for table
  stringArray (state, payload) {
    const indexStation = payload.indexStation
    const indexBlock = payload.indexBlock
    const filter = state.stations[indexStation].sensorSoil[indexBlock].warnings.filter(element => element != null)
    const stringArray = filter.toString()
    if (stringArray) {
      state.stations[indexStation].status[indexBlock].remarks = stringArray
    } else {
      state.stations[indexStation].status[indexBlock].remarks = 'Good'
    }
  },
    // Count warnings
    countWarningsIpah (state, payload) {
      let station = payload.station
      let block = payload.block
      let warnings = 0
      for (let i = 0; i < block; i++) {
        warnings = state.stations[station].sensorSoil[i].warningsCounts.reduce(function (a, b) {
          return a + b
        }, warnings)
      }
      state.summaryIpah[2].data = warnings
    },
    // Count warnings
    countWarningsTkpmIpah (state, payload) {
      let station = payload.station
      let block = payload.block
      let warnings = 0
      for (let i = 0; i < block; i++) {
        warnings = state.stations[station].sensorSoil[i].warningsCounts.reduce(function (a, b) {
          return a + b
        }, warnings)
      }
      state.summaryTkpmIpah[2].data = warnings
    },
    // Count warnings
    countWarningsTkpmPagoh (state, payload) {
      let station = payload.station
      let block = payload.block
      let warnings = 0
      for (let i = 0; i < block; i++) {
        warnings = state.stations[station].sensorSoil[i].warningsCounts.reduce(function (a, b) {
          return a + b
        }, warnings)
      }
      state.summaryTkpmPagoh[2].data = warnings
    },
    // Count warnings
    countWarningsKongPo (state, payload) {
      let station = payload.station
      let block = payload.block
      let warnings = 0
      for (let i = 0; i < block; i++) {
        warnings = state.stations[station].sensorSoil[i].warningsCounts.reduce(function (a, b) {
          return a + b
        }, warnings)
      }
      state.summaryKongPo[2].data = warnings
    },

    // STATUS IPAH 
    ipahStatus(state,payload){
      state.ipahStatus.SV1= 1
      console.log(state.ipahStatus)
    },

    //STATUS IPAH 
    ipahStatus(state,payload){
      // RESET
      state.ipahStatus.SV1=0
      state.ipahStatus.SV2=0
      state.ipahStatus.SV3=0
      state.ipahStatus.SV4=0
      state.ipahStatus.SV5=0
      state.ipahStatus.SV6=0
      state.ipahStatus.P=0
      state.ipahStatus.DP=0
      // state.ipahProcess = 'System is idle'

      // Water Dripping on Block 1
      if(payload.WDB1==1){
        state.ipahStatus.SV1=1
        state.ipahStatus.SV4=1
        state.ipahStatus.SV5=1
        state.ipahStatus.P=1
        state.ipahProcess = 'Water dripping on block 1.'
      }

      // Water Dripping on Block 2
      if(payload.WDB2==1){
        
        state.ipahStatus.SV1=1
        state.ipahStatus.SV4=1
        state.ipahStatus.SV6=1
        state.ipahStatus.P=1
        state.ipahProcess = 'Water dripping on block 2.'
      }

      // Nutrient Dripping on Block 1
      if(payload.NDB1==1){
        state.ipahStatus.SV2=1
        state.ipahStatus.SV4=1
        state.ipahStatus.SV5=1
        state.ipahStatus.P=1
        state.ipahProcess = 'Nutrient dripping on block 1.'
      }

      // Nutrient Dripping on Block 2
      if(payload.NDB2==1){
        state.ipahStatus.SV2=1
        state.ipahStatus.SV4=1
        state.ipahStatus.SV6=1
        state.ipahStatus.P=1
        state.ipahProcess = 'Nutrient dripping on block 2.'
      }

      // Nutrient Filling (Nutrient preparation, Dosing process)
      if(payload.NF==1){
        state.ipahStatus.SV2=1
        state.ipahStatus.SV3=1
        state.ipahStatus.P=1
        state.ipahStatus.DP=1
        state.ipahProcess = 'Nutrient preparation. Dosing process is ongoing.'
      }

      //Water Filling (Nutrient preparation)
      if(payload.WF==1){
        state.ipahStatus.SV1=1
        state.ipahStatus.SV3=1
        state.ipahStatus.P=1
        state.ipahProcess = 'Nutrient prepatation. Water filling process in fertilizer solution tank.'
      }

      // Logic for water dripping on blocks
      if (payload.WDB1 == 1 && payload.WDB2 == 1){
        state.ipahProcess = 'Water dripping on all blocks.'
      }

      // Logic for nutrient dripping on blocks
      if (payload.NDB1 == 1 && payload.NDB2 == 1){
        state.ipahProcess = 'Nutrient dripping on all blocks.'
      }

      // System idle. No process
      if(payload.WDB1==0 && payload.WDB2==0 && payload.NDB1==0 && payload.NDB2==0 && payload.NF==0 && payload.WF==0){
        state.ipahStatus.SV1=0
        state.ipahStatus.SV2=0
        state.ipahStatus.SV3=0
        state.ipahStatus.SV4=0
        state.ipahStatus.SV5=0
        state.ipahStatus.SV6=0
        state.ipahStatus.P=0
        state.ipahStatus.DP=0
        state.ipahProcess = 'System is idle'
      }

    },
    // STATUS TKPM IPAH 
    tkpmIpahStatus(state,payload){
      // RESET
      state.tkpmIpahStatus.SV1=0
      state.tkpmIpahStatus.SV2=0
      state.tkpmIpahStatus.SV3=0
      state.tkpmIpahStatus.SV4=0
      state.tkpmIpahStatus.SV5=0
      state.tkpmIpahStatus.SV6=0
      state.tkpmIpahStatus.SV7=0
      state.tkpmIpahStatus.SV8=0
      state.tkpmIpahStatus.SV9=0
      state.tkpmIpahStatus.SV10=0
      state.tkpmIpahStatus.SV11=0
      state.tkpmIpahStatus.SV12=0
      state.tkpmIpahStatus.SV13=0
      state.tkpmIpahStatus.SV14=0
      state.tkpmIpahStatus.SV15=0
      state.tkpmIpahStatus.P1=0
      state.tkpmIpahStatus.P2=0
      state.tkpmIpahStatus.P3=0
      state.tkpmIpahStatus.DP=0

      // Water Dripping on Block 1
      if(payload.WDB1==1){
        state.tkpmIpahStatus.SV1=1
        state.tkpmIpahStatus.SV13=1
        state.tkpmIpahStatus.P1=1
        state.tkpmIpahProcess = 'Water dripping on block 1.'
      }

      // Water Dripping on Block 2
      if(payload.WDB2==1){
        
        state.tkpmIpahStatus.SV5=1
        state.tkpmIpahStatus.SV14=1
        state.tkpmIpahStatus.P2=1
        state.tkpmIpahProcess = 'Water dripping on block 2.'
      }
 
      // Water Dripping on Block 3
      if(payload.WDB3==1){
        state.tkpmIpahStatus.SV9=1
        state.tkpmIpahStatus.SV15=1
        state.tkpmIpahStatus.P3=1
        state.tkpmIpahProcess = 'Water dripping on block 3.'
      }

      // Nutrient Dripping on Block 1
      if(payload.NDB1==1){
        state.tkpmIpahStatus.SV2=1
        state.tkpmIpahStatus.SV13=1
        state.tkpmIpahStatus.P1=1
        state.tkpmIpahProcess = 'Nutrient dripping on block 1.'
      }

      // Nutrient Dripping on Block 2
      if(payload.NDB2==1){
        state.tkpmIpahStatus.SV6=1
        state.tkpmIpahStatus.SV14=1
        state.tkpmIpahStatus.P2=1
        state.tkpmIpahProcess = 'Nutrient dripping on block 2.'
      }

      // Nutrient Dripping on Block 3
      if(payload.NDB3==1){
        state.tkpmIpahStatus.SV10=1
        state.tkpmIpahStatus.SV15=1
        state.tkpmIpahStatus.P3=1
        state.tkpmIpahProcess = 'Nutrient dripping on block 3.'
      }

      // Nutrient Filling (Nutrient preparation, Dosing process)
      if(payload.NF==1){
        state.tkpmIpahStatus.SV2=1
        state.tkpmIpahStatus.SV3=1
        state.tkpmIpahStatus.SV4=1
        state.tkpmIpahStatus.P1=1
        state.tkpmIpahStatus.SV6=1
        state.tkpmIpahStatus.SV7=1
        state.tkpmIpahStatus.SV8=1
        state.tkpmIpahStatus.P2=1
        state.tkpmIpahStatus.SV10=1
        state.tkpmIpahStatus.SV11=1
        state.tkpmIpahStatus.SV12=1
        state.tkpmIpahStatus.P3=1
        state.tkpmIpahStatus.DP=1
        state.tkpmIpahProcess = 'Nutrient preparation. Dosing process is ongoing.'
      }

      //Water Filling (Nutrient preparation)
      if(payload.WF==1){
        state.tkpmIpahStatus.SV1=1
        state.tkpmIpahStatus.SV3=1
        state.tkpmIpahStatus.SV4=1
        state.tkpmIpahStatus.P1=1
        state.tkpmIpahStatus.SV5=1
        state.tkpmIpahStatus.SV7=1
        state.tkpmIpahStatus.SV8=1
        state.tkpmIpahStatus.P2=1
        state.tkpmIpahStatus.SV9=1
        state.tkpmIpahStatus.SV11=1
        state.tkpmIpahStatus.SV12=1
        state.tkpmIpahStatus.P3=1
        state.tkpmIpahProcess = 'Nutrient prepatation. Water filling process in fertilizer solution tank.'
      }

      // Logic for water dripping on blocks
      if (payload.WDB1 == 1 && payload.WDB2 == 1){
        state.tkpmIpahProcess = 'Water dripping on block 1 and 2.'
      }
      if (payload.WDB1 == 1 && payload.WDB3 == 1){
        state.tkpmIpahProcess = 'Water dripping on block 1 and 3.'
      }
      if (payload.WDB2 == 1 && payload.WDB3 == 1){
        state.tkpmIpahProcess = 'Water dripping on block 2 and 3.'
      }
      if (payload.WDB1 == 1 && payload.WDB2 == 1 && payload.WDB3 == 1){
        state.tkpmIpahProcess = 'Water dripping on all block.'
      }

      // Logic for nutrient dripping on blocks
      if (payload.NDB1 == 1 && payload.NDB2 == 1){
        state.tkpmIpahProcess = 'Nutrient dripping on block 1 and 2.'
      }
      if (payload.NDB1 == 1 && payload.NDB3 == 1){
        state.tkpmIpahProcess = 'Nutrient dripping on block 1 and 3.'
      }
      if (payload.NDB2 == 1 && payload.NDB3 == 1){
        state.tkpmIpahProcess = 'Nutrient dripping on block 2 and 3.'
      }
      if (payload.NDB1 == 1 && payload.NDB2 == 1 && payload.NDB3 == 1){
        state.tkpmIpahProcess = 'Nutrient dripping on all block.'
      }
      
      // System idle. No process
      if(payload.WDB1==0 && payload.WDB2==0 && payload.WDB3==0 && payload.NDB1==0 && payload.NDB2==0 && payload.NDB3==0 && payload.NF==0 && payload.WF==0){
        state.tkpmIpahStatus.SV1=0
        state.tkpmIpahStatus.SV2=0
        state.tkpmIpahStatus.SV3=0
        state.tkpmIpahStatus.SV4=0
        state.tkpmIpahStatus.SV5=0
        state.tkpmIpahStatus.SV6=0
        state.tkpmIpahStatus.SV7=0
        state.tkpmIpahStatus.SV8=0
        state.tkpmIpahStatus.SV9=0
        state.tkpmIpahStatus.SV10=0
        state.tkpmIpahStatus.SV11=0
        state.tkpmIpahStatus.SV12=0
        state.tkpmIpahStatus.SV13=0
        state.tkpmIpahStatus.SV14=0
        state.tkpmIpahStatus.SV15=0
        state.tkpmIpahStatus.P1=0
        state.tkpmIpahStatus.P2=0
        state.tkpmIpahStatus.P3=0
        state.tkpmIpahStatus.DP=0
        state.tkpmIpahProcess = 'System is idle'
      }
    },

    // STATUS TKPM Pagoh 
    tkpmPagohStatus(state,payload){
      // RESET
      state.tkpmPagohStatus.SV1=0
      state.tkpmPagohStatus.SV2=0
      state.tkpmPagohStatus.SV3=0
      state.tkpmPagohStatus.SV4=0
      state.tkpmPagohStatus.SV5=0
      state.tkpmPagohStatus.SV6=0
      state.tkpmPagohStatus.SV7=0
      state.tkpmPagohStatus.SV8=0
      state.tkpmPagohStatus.SV9=0
      state.tkpmPagohStatus.SV10=0
      state.tkpmPagohStatus.SV11=0
      state.tkpmPagohStatus.SV12=0
      state.tkpmPagohStatus.SV13=0
      state.tkpmPagohStatus.SV14=0
      state.tkpmPagohStatus.P1=0
      state.tkpmPagohStatus.P2=0
      state.tkpmPagohStatus.P3=0
      state.tkpmPagohStatus.DP1=0
      state.tkpmPagohStatus.DP2=0

      // Water Dripping on Block 1
      if(payload.WDB1==1){
        state.tkpmPagohStatus.SV3=1
        state.tkpmPagohStatus.SV12=1
        state.tkpmPagohStatus.P1=1
        state.tkpmPagohProcess = 'Water dripping on block 1.'
      }

      // Water Dripping on Block 2
      if(payload.WDB2==1){
        state.tkpmPagohStatus.SV6=1
        state.tkpmPagohStatus.SV13=1
        state.tkpmPagohStatus.P2=1
        state.tkpmPagohProcess = 'Water dripping on block 2.'
      }
 
      // Water Dripping on Block 3
      if(payload.WDB3==1){
        state.tkpmPagohStatus.SV9=1
        state.tkpmPagohStatus.SV14=1
        state.tkpmPagohStatus.P3=1
        state.tkpmPagohProcess = 'Water dripping on block 3.'
      }

      // Nutrient Dripping on Block 1
      if(payload.NDB1==1){
        state.tkpmPagohStatus.SV4=1
        state.tkpmPagohStatus.SV12=1
        state.tkpmPagohStatus.P1=1
        state.tkpmPagohProcess = 'Nutrient dripping on block 1.'
      }

      // Nutrient Dripping on Block 2
      if(payload.NDB2==1){
        state.tkpmPagohStatus.SV7=1
        state.tkpmPagohStatus.SV13=1
        state.tkpmPagohStatus.P2=1
        state.tkpmPagohProcess = 'Nutrient dripping on block 2.'
      }

      // Nutrient Dripping on Block 3
      if(payload.NDB3==1){
        state.tkpmPagohStatus.SV10=1
        state.tkpmPagohStatus.SV14=1
        state.tkpmPagohStatus.P3=1
        state.tkpmPagohProcess = 'Nutrient dripping on block 3.'
      }

      // Nutrient Filling (Nutrient preparation, Dosing process)
      if(payload.NF==1){
        state.tkpmPagohStatus.SV4=1
        state.tkpmPagohStatus.SV5=1
        state.tkpmPagohStatus.P1=1
        state.tkpmPagohStatus.SV7=1
        state.tkpmPagohStatus.SV8=1
        state.tkpmPagohStatus.P2=1
        state.tkpmPagohStatus.SV10=1
        state.tkpmPagohStatus.SV11=1
        state.tkpmPagohStatus.P3=1
        state.tkpmPagohStatus.DP1=1
        state.tkpmPagohStatus.DP2=1
        state.tkpmPagohProcess = 'Nutrient preparation. Dosing process is ongoing.'
      }

      //Water Filling (Nutrient preparation)
      if(payload.WF==1){
        state.tkpmPagohStatus.SV3=1
        state.tkpmPagohStatus.SV5=1
        state.tkpmPagohStatus.P1=1
        state.tkpmPagohStatus.SV6=1
        state.tkpmPagohStatus.SV8=1
        state.tkpmPagohStatus.P2=1
        state.tkpmPagohStatus.SV9=1
        state.tkpmPagohStatus.SV11=1
        state.tkpmPagohStatus.P3=1
        state.tkpmPagohProcess = 'Nutrient prepatation. Water filling process in fertilizer solution tank.'
      }

      // Logic for water dripping on blocks
      if (payload.WDB1 == 1 && payload.WDB2 == 1){
        state.tkpmPagohProcess = 'Water dripping on block 1 and 2.'
      }
      if (payload.WDB1 == 1 && payload.WDB3 == 1){
        state.tkpmPagohProcess = 'Water dripping on block 1 and 3.'
      }
      if (payload.WDB2 == 1 && payload.WDB3 == 1){
        state.tkpmPagohProcess = 'Water dripping on block 2 and 3.'
      }
      if (payload.WDB1 == 1 && payload.WDB2 == 1 && payload.WDB3 == 1){
        state.tkpmPagohProcess = 'Water dripping on all block.'
      }

      // Logic for nutrient dripping on blocks
      if (payload.NDB1 == 1 && payload.NDB2 == 1){
        state.tkpmPagohProcess = 'Nutrient dripping on block 1 and 2.'
      }
      if (payload.NDB1 == 1 && payload.NDB3 == 1){
        state.tkpmPagohProcess = 'Nutrient dripping on block 1 and 3.'
      }
      if (payload.NDB2 == 1 && payload.NDB3 == 1){
        state.tkpmPagohProcess = 'Nutrient dripping on block 2 and 3.'
      }
      if (payload.NDB1 == 1 && payload.NDB2 == 1 && payload.NDB3 == 1){
        state.tkpmPagohProcess = 'Nutrient dripping on all block.'
      }
      
      // System idle. No process
      if(payload.WDB1==0 && payload.WDB2==0 && payload.WDB3==0 && payload.NDB1==0 && payload.NDB2==0 && payload.NDB3==0 && payload.NF==0 && payload.WF==0){
        state.tkpmPagohStatus.SV1=0
        state.tkpmPagohStatus.SV2=0
        state.tkpmPagohStatus.SV3=0
        state.tkpmPagohStatus.SV4=0
        state.tkpmPagohStatus.SV5=0
        state.tkpmPagohStatus.SV6=0
        state.tkpmPagohStatus.SV7=0
        state.tkpmPagohStatus.SV8=0
        state.tkpmPagohStatus.SV9=0
        state.tkpmPagohStatus.SV10=0
        state.tkpmPagohStatus.SV11=0
        state.tkpmPagohStatus.SV12=0
        state.tkpmPagohStatus.SV13=0
        state.tkpmPagohStatus.SV14=0
        state.tkpmPagohStatus.P1=0
        state.tkpmPagohStatus.P2=0
        state.tkpmPagohStatus.P3=0
        state.tkpmPagohStatus.DP1=0
        state.tkpmPagohStatus.DP2=0
        state.tkpmPagohProcess = 'System is idle'
      }
    },

        // STATUS KONG PO 
        kongPoStatus(state,payload){
          // RESET
          state.kongPoStatus.SV1=0
          state.kongPoStatus.SV2=0
          state.kongPoStatus.SV3=0
          state.kongPoStatus.SV4=0
          state.kongPoStatus.SV5=0
          state.kongPoStatus.P1=0
          state.kongPoStatus.P2=0
          state.kongPoStatus.DP=0
    
          // Water Dripping on Block 1
          if(payload.WDB1==1){
            state.tkpmPagohStatus.SV3=1
            state.tkpmPagohStatus.SV12=1
            state.tkpmPagohStatus.P1=1
            state.tkpmPagohProcess = 'Water dripping on block 1.'
          }
    
          // Water Dripping on Block 2
          if(payload.WDB2==1){
            state.tkpmPagohStatus.SV6=1
            state.tkpmPagohStatus.SV13=1
            state.tkpmPagohStatus.P2=1
            state.tkpmPagohProcess = 'Water dripping on block 2.'
          }
     
          // Water Dripping on Block 3
          if(payload.WDB3==1){
            state.tkpmPagohStatus.SV9=1
            state.tkpmPagohStatus.SV14=1
            state.tkpmPagohStatus.P3=1
            state.tkpmPagohProcess = 'Water dripping on block 3.'
          }
    
          // Nutrient Dripping on Block 1
          if(payload.NDB1==1){
            state.tkpmPagohStatus.SV4=1
            state.tkpmPagohStatus.SV12=1
            state.tkpmPagohStatus.P1=1
            state.tkpmPagohProcess = 'Nutrient dripping on block 1.'
          }
    
          // Nutrient Dripping on Block 2
          if(payload.NDB2==1){
            state.tkpmPagohStatus.SV7=1
            state.tkpmPagohStatus.SV13=1
            state.tkpmPagohStatus.P2=1
            state.tkpmPagohProcess = 'Nutrient dripping on block 2.'
          }
    
          // Nutrient Dripping on Block 3
          if(payload.NDB3==1){
            state.tkpmPagohStatus.SV10=1
            state.tkpmPagohStatus.SV14=1
            state.tkpmPagohStatus.P3=1
            state.tkpmPagohProcess = 'Nutrient dripping on block 3.'
          }
    
          // Nutrient Filling (Nutrient preparation, Dosing process)
          if(payload.NF==1){
            state.tkpmPagohStatus.SV4=1
            state.tkpmPagohStatus.SV5=1
            state.tkpmPagohStatus.P1=1
            state.tkpmPagohStatus.SV7=1
            state.tkpmPagohStatus.SV8=1
            state.tkpmPagohStatus.P2=1
            state.tkpmPagohStatus.SV10=1
            state.tkpmPagohStatus.SV11=1
            state.tkpmPagohStatus.P3=1
            state.tkpmPagohStatus.DP1=1
            state.tkpmPagohStatus.DP2=1
            state.tkpmPagohProcess = 'Nutrient preparation. Dosing process is ongoing.'
          }
    
          //Water Filling (Nutrient preparation)
          if(payload.WF==1){
            state.tkpmPagohStatus.SV3=1
            state.tkpmPagohStatus.SV5=1
            state.tkpmPagohStatus.P1=1
            state.tkpmPagohStatus.SV6=1
            state.tkpmPagohStatus.SV8=1
            state.tkpmPagohStatus.P2=1
            state.tkpmPagohStatus.SV9=1
            state.tkpmPagohStatus.SV11=1
            state.tkpmPagohStatus.P3=1
            state.tkpmPagohProcess = 'Nutrient prepatation. Water filling process in fertilizer solution tank.'
          }
    
          // Logic for water dripping on blocks
          if (payload.WDB1 == 1 && payload.WDB2 == 1){
            state.tkpmPagohProcess = 'Water dripping on block 1 and 2.'
          }
          if (payload.WDB1 == 1 && payload.WDB3 == 1){
            state.tkpmPagohProcess = 'Water dripping on block 1 and 3.'
          }
          if (payload.WDB2 == 1 && payload.WDB3 == 1){
            state.tkpmPagohProcess = 'Water dripping on block 2 and 3.'
          }
          if (payload.WDB1 == 1 && payload.WDB2 == 1 && payload.WDB3 == 1){
            state.tkpmPagohProcess = 'Water dripping on all block.'
          }
    
          // Logic for nutrient dripping on blocks
          if (payload.NDB1 == 1 && payload.NDB2 == 1){
            state.tkpmPagohProcess = 'Nutrient dripping on block 1 and 2.'
          }
          if (payload.NDB1 == 1 && payload.NDB3 == 1){
            state.tkpmPagohProcess = 'Nutrient dripping on block 1 and 3.'
          }
          if (payload.NDB2 == 1 && payload.NDB3 == 1){
            state.tkpmPagohProcess = 'Nutrient dripping on block 2 and 3.'
          }
          if (payload.NDB1 == 1 && payload.NDB2 == 1 && payload.NDB3 == 1){
            state.tkpmPagohProcess = 'Nutrient dripping on all block.'
          }
          
          // System idle. No process
          if(payload.WDB1==0 && payload.WDB2==0 && payload.WDB3==0 && payload.NDB1==0 && payload.NDB2==0 && payload.NDB3==0 && payload.NF==0 && payload.WF==0){
            state.tkpmPagohStatus.SV1=0
            state.tkpmPagohStatus.SV2=0
            state.tkpmPagohStatus.SV3=0
            state.tkpmPagohStatus.SV4=0
            state.tkpmPagohStatus.SV5=0
            state.tkpmPagohStatus.SV6=0
            state.tkpmPagohStatus.SV7=0
            state.tkpmPagohStatus.SV8=0
            state.tkpmPagohStatus.SV9=0
            state.tkpmPagohStatus.SV10=0
            state.tkpmPagohStatus.SV11=0
            state.tkpmPagohStatus.SV12=0
            state.tkpmPagohStatus.SV13=0
            state.tkpmPagohStatus.SV14=0
            state.tkpmPagohStatus.P1=0
            state.tkpmPagohStatus.P2=0
            state.tkpmPagohStatus.P3=0
            state.tkpmPagohStatus.DP1=0
            state.tkpmPagohStatus.DP2=0
            state.tkpmPagohProcess = 'System is idle'
          }
        },

    // SET COMMAND FOR FILL/STOP 
    setIpah1ManualFill(state, payload){
      state.ipah1ManualFill= payload;
    },
    setIpah1ManualStop(state, payload){
      state.ipah1ManualStop= payload;
    },

    setIpah2ManualFill(state, payload){
      state.ipah2ManualFill= payload;
    },
    setIpah2ManualStop(state, payload){
      state.ipah2ManualStop= payload;
    },

    setTkpmPagohManualFill(state, payload){
      state.tkpmPagohManualFill= payload;
    },
    setTkpmPagohManualStop(state, payload){
      state.tkpmPagohManualStop= payload;
    },

    setKongPoManualFill(state, payload){
      state.kongPoManualFill= payload;
    },
    setKongPoManualStop(state, payload){
      state.kongPoManualStop= payload;
    },
    setKongPoManualNutrient(state, payload){
      state.kongPoManualNutrient= payload;
    }

};

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    // console.log(state.auth.user.userId)
    return state.auth.user
    // return {username:"ali"}
  },

  // fiter out remaining results for todays date from 3 hrly data
  threeHourlyToday: (state) => {
     const forecasts = state.forecasts
     return forecasts.filter(forecast => forecast.dt_txt.slice(0, 10) === state.today)
  },
  // filter out miVOCay weather from 3hrly data for next 4 days (not today)
  dailyMiVOCay: (state) => {
     const forecasts = state.forecasts
     return forecasts.filter(forecast => forecast.dt_txt.slice(-8) === '12:00:00' && forecast.dt_txt.slice(0, 10) !== state.today)
   }
}

export const actions = {
  async setForecasts ({ commit, getters }) {
    // const { data } = await this.$axios.get(`${this.state.api_key_bintulu}`)
    const { data } = await this.$axios.get(this.state.api_key_ipah)
    // const { data } = await axios.get(`${this.state.url_base}forecast?q=${this.state.query}&units=metric&appid=${this.state.api_key}`)
    commit('SET_FORECASTS', data)

  },
  async setWeather ({ commit }) {
    const { data } = await this.$axios.get(`${this.state.url_base}weather?q=${this.state.query}&units=metric&APPID=${this.state.api_key}`).catch(() => {
      // simple error catch
      alert('Unable to find forecast for this location, please try a different location')
    })
    
    commit('SET_WEATHER', data)
  },
  // sets todays date in correct format for filters
  setToday ({ commit }) {
    let today = new Date()
    const VOC = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + VOC
    commit('SET_TODAY', today)
  }
}
