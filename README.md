# Universal Spatial Data Mapper
Leaflet Map template to add various geodata layers to. Refer to Python data manipulation, and other documentation for easy data transformation, and more by following the steps used to add the current data to the map. Data is visualized and sptially positioned on the Interactive Web Atlas. 

## Summary of Project
This interactive web atlas allows for easy data visualization of various spatial data sets. This online tool and the attached code demonstrate how various forms of data, such as .csv and .shp can be imported, manipulated, and converted into a .geojson file. Once a .geojson file has been produced using python, it can be added to the data repository folder /src. A corresponding icon image as a .png will also need to be added to the same folder in order to have a visual icon for that layer. 

Once converted into a .geojson by following the steps outlined, it can be added to the interactive web atlas with its own section on the legend where the layer can be toggled on or off, by following/copying the codes found in the script.js file. Depending on the data types (point, line, or polygon), the user simple has to find the corresponding title and nderneath will find that code to add it to the map. All that needs to be changed is the input file name to the newly created .geojson file, to change the icon image to the newly added/corresponding .png, and finally to give this layer a legend title. There is also a popup feature that has been coded in, which allows for data from the geojson to be displayed on the Popup. This can be done to show the facility or location name, or any other descriptive info attributed to each location. This can be specified by looking at the 'properties' section of each data point or polygon. 

Once the JS code has been edited, the newly added layer should appear in the legend toggled off. It can simply be toggled on, and a spatial representation of the data can be observed on the map. The map offers the ability to switch between the CartoDB Light baselayer, and the Esri World Imagery Sattelite baselayer.

The interactive atlas features additional imported tools, such as a dynamic scale bar, a search bar, a +/- button for zooming as opposed to scrolling to zoom, and a counter in the top right corner showing the current zoom level.

## Rationale for Project
This project was created in order to allow individuals across various fields to be able to easily map out spatial data, regardless of its original data form, at no-cost. The Public Repository functions as a collaborative place where people can add their own .geojson files directly or through various conversion or further data manipulation methods outlined in the PythonConversions.ipynb file. It allows various data spatial data that would likely otherwise not be found together in an interactive atlas, to be combined and added to this map. 

Suppose a real estate agent has a client who is trying to determine which city or neighbourhood they would like to live in. This client has various factors that are important to making their choice. By adding the various spatial data sets to the map, a visual representation of their spatial distribution can be derived, offering an interactive map with their various important factors appearing. This could allow the client to easily visualize where they would like to live.

## Python Coding
The PythonConversions.ipynb file attached to this repository outlines and shows various lines of code that were used to manipulate and convert various data forms into the required .geojson file format for use in this web atlas. 

The conversions and maniupulations shown can be very easily reproduced with new data to in order to create new .geojson files for use in the atlas. The interactive python notebook has red-boxes indiciating errors or problems, however in this case they are just warning that the process might be slow, and that we are performing operations on a dataslice. These can be ignored as they do not affect our final results. If you are performing many data manipulation functions it might be preferable to address these warning messages.

When importing a .csv  file with latitiude and longitude columns, we will want to read it in and store it as a new variable. This will allow us to call it in the following lines of code. Once it has been read in, a line of code is ran to fill in any blank values. This helps clean up the dataset, and minimizes our chance for error when we begin doing analyses on the dataset. When looking at the first lines and dataset imported in the PythonConversions.ipynb file, for Canadian Airports, we created a new dataset and layer that narrowed down the airports to just those that were international. This was done by looking at the datasets column which indicated the airport types (International, Regional, ....etc.) and searching for the string 'International'. Another example of this step and the changes that would be required to reproduce it can be seen in the liens of code for "General Hospitals". Prior to exporting, we apply a crs="EPSG: 3347" in order to keep it consistent across all layers and for use in the leaflet map. The file is then exported as a .geojson, and can be added to the /src folder in the repo.

When importing a .shp file, it is important to note the that an additional/corresponding .shx file must be uploaded as well. When shapefile are downloaded, they will typically contain additional files, including this .shx. Upload both files into Python. As was done for .csv, we will read in the shapefile and store it as a variable. Next is a very simple conversion on one line of code that will convert the shapefile into the requested file type (in this case .GEOJSON), and the conversion will be completed to the new file indicted in this line with extension .geojson. 

## Conclusion
In conclusion, this repository can be used as a template for anyone looking to map out spatial data from various sources and in various forms, into one interactive web atlas. The process and steps required to add layers and customize the map are made very easy through use of this template, and will allow beginners to spatial data mapping, coding, and other computer processes to very easily create their own interactive web atlas. 

## Current Layers and Metadata (April 21, 2022) (Update when new layer added)
### 1. Canadian Airports - "Canadian Airports with Air Navigation Services"

summary/description: 	Canadian airports served by NAV CANADA control towers or flight service station.

spatial data type: 	Map Service

source/source url(s): https://open.canada.ca/data/en/dataset/3a1eb6ef-6054-4f9d-b1f6-c30322cd7abf/resource/d805cd5e-b91c-4598-849f-ca2d89f72ed9

date collected: May 19, 2021

date published: May 19, 2021

an explanation of each attribute:
Fields:
      Shape ( type: esriFieldTypeGeometry, alias: Shape )
      TC_ID ( type: esriFieldTypeDouble, alias: Identifier )
      IATA ( type: esriFieldTypeString, alias: International Air Transport Association Airport (IATA) Code, length: 254 )
      ICAO ( type: esriFieldTypeString, alias: International Civil Aviation Organization (ICAO) Code, length: 254 )
      TYPE ( type: esriFieldTypeString, alias: Airport Type, length: 254 )
      TYPE_CODE ( type: esriFieldTypeDouble, alias: Airport Type Code )
      AIRPORT ( type: esriFieldTypeString, alias: Airport Name, length: 254 )
      CITY ( type: esriFieldTypeString, alias: City, length: 254 )
      PROVINCE ( type: esriFieldTypeString, alias: Province, length: 254 )
      LATTITUDE ( type: esriFieldTypeDouble, alias: Lattitude )
      LONGITUDE ( type: esriFieldTypeDouble, alias: Longitude )
      OBJECTID ( type: esriFieldTypeOID, alias: Unique identifier )

spatial resolution: N/A

coordinate system: Decimal degrees / NAD_1983_Canada_Atlas_Lambert

projection: NAD_1983_Canada_Atlas_Lambert

extent: 	[[-146.108061782699,36.4810686346204],[-34.2795533650949,72.4613643971491]]

use limitations/license: 	Open Government Licence - Canada (https://open.canada.ca/en/open-government-licence-canada)


### 2. Canadian General hospitals (from: Open Data Base of Healthcare Facilities (ODHF)
summary/description: The Open Database of Healthcare Facilities (ODHF) is a Canada-wide healthcare facilities database. It has 
been compiled by the Centre for Special Business Projects (CSBP) at Statistics Canada.

spatial data type: .csv file 	

source/source url(s): https://www.statcan.gc.ca/en/lode/databases/odhf

date collected: November 2019 - March 2020

date published: August 7, 2020

an explanation of each attribute:
Fields:
      Index - unique serial number for each facility
      facility_name: name of facility
      source_facility_type: regional health authroity assigned healthcare facility type
      odhf_facility_type: odhf assigned healthcare facility type through classification
      provider: identity or name of data provider
      unit number: civic unit or suite number
      street_no: civic street number
      postal_code: civic postal code
      city: city name
      province/territory: province or territory name
      source_format_str_address: street address in source data
      CSDname: census subdivision name
      CSDuid: census subdivision unique identifier
      latitude: latitude value for location
      longitude: longitude value for location

spatial resolution: N/A

coordinate system: Decimal degrees / NAD_1983_Canada_Atlas_Lambert

projection: NAD_1983_Canada_Atlas_Lambert

extent: All of Canada

use limitations/license:  https://open.canada.ca/data/en/dataset/3a1eb6ef-6054-4f9d-b1f6-c30322cd7abf/resource/d805cd5e-b91c-4598-849f-ca2d89f72ed9

### 3. NHL Arenas
summary/description: latitude and longitude positions of all operational NHL arenas

spatial data type: shapefile	

source/source url(s): https://www.sciencebase.gov/catalog/item/4f4e4a48e4b07f02db6230a7

date collected: 18 February 2010

date published: 18 February 2010

an explanation of each attribute:

spatial resolution: N/A

coordinate system: Geographic Coordinate Units: Decimal degrees / WGS_1984

projection: WGS_1984

extent: All of Canada and the United States of America
      minY	26.158069962696914
      maxY	53.57140126405341
      minX	-123.10885981912702
      maxX	-71.06205994979899

use limitations/license: Open Data / Downloadable

metadata info source (missing info for above): https://www.statcan.gc.ca/en/lode/databases/odhf/metadata

### 4. NFL Stadiums
summary/description: locations of all NFL stadiums, with additional relevant information

spatial data type: .csv file containing latitude / longitude information

source/source url(s): https://github.com/Sinbad311/CloudProject/blob/master/NFL%20Stadium%20Latitude%20and%20Longtitude.csv

date collected: November 27, 2012

date published: November 27, 2012

an explanation of each attribute:
Fields:
      Team: Team name
      Conference: NFL conference the team plays in (AFC or NFC)
      Latitude: latitude value for stadium location
      Longitude: longitude value for stadium location
      Zip: zip code number
      pic:
      g:

spatial resolution: N/A

coordinate system: Decimal degrees

projection: N/A

extent: United States of America 

use limitations/license: none / open

### 5. Canada Census Metropolitan Area Boundaries
summary/description: The 2016 Census Boundary Files depict boundaries of standard geographic areas established for the purpose of 
disseminating census data

spatial data type: Shapefile (.shp)

source/source url(s): https://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2016-eng.cfm

date collected: 2016 Census Year

date published: September 13, 2017

an explanation of each attribute:
Fields:
      FID: field id/object ID
      Shape: geometry
      DigitalBoundary: MultiPolygon shape indicating geographic layout of polygon
      CMAUID: uniquely identifies a census metropolitan area/census agglomeration
      CMAPUID: uniquely identifies the province/territory of a census metropolitan area
      CMANAME: census metropolitan area or census agglomeration name
      CMATYPE: a one character field indicating whether the unit is a census metropolitan area, a tracted census agglomeration, or a nonn-tracted census agglomeration
      PRUID: uniquely identifies a province or territory
      PRNAME province or territory name
 
spatial resolution: N/A

coordinate system: Decimal degrees / North American Datum of 1983 [NAD83]

projection: North American Datum of 1983 [NAD83]

extent: All of Canada

use limitations/license: https://open.canada.ca/data/en/dataset/3a1eb6ef-6054-4f9d-b1f6-c30322cd7abf/resource/d805cd5e-b91c-4598-849f-ca2d89f72ed9

### 6. First Nations in Canada
summary/description: The First Nations geographic location dataset contains the geographic location of First Nations (groups and subgroups) in Canada as points as well as basic attributes data. The location identifies where the First Nations live. Each First Nation point represents its administrative office address as it is registered in Indigenous Services Canada (ISC) Band Governance Management System (BGMS). 

spatial data type: Shapefile (.shp)

source/source url(s): https://open.canada.ca/data/en/dataset/b6567c5c-8339-4055-99fa-63f92114d9e4

date collected: December 9, 2020

date published: December 9, 2020

an explanation of each attribute:
Fields:
OBJECTID ( type: esriFieldTypeOID, alias: OBJECTID )
BAND_NUMBER ( type: esriFieldTypeInteger, alias: Numéro de bande / Band Number )
BAND_NAME ( type: esriFieldTypeString, alias: Nom de bande / Band Name, length: 75 )
SHAPE ( type: esriFieldTypeGeometry, alias: Shape )

spatial resolution: N/A

coordinate system: EPSG:4140 DEPRECATED / NAD83(CSRS98)

projection: EPSG:4140 DEPRECATED / NAD83(CSRS98)

extent:
XMin: -140.87532668100002
YMin: 42.052805889000005
XMax: -55.755687395
YMax: 68.361004164

use limitations/license: https://open.canada.ca/data/en/dataset/3a1eb6ef-6054-4f9d-b1f6-c30322cd7abf/resource/d805cd5e-b91c-4598-849f-ca2d89f72ed9

Additional Metadata info / source (missing info/unable to locate) https://data.aadnc-aandc.gc.ca/geomatics/directories/output/DonneesOuvertes_OpenData/Premiere_Nation_First_Nation/Metadonnees_Premiere_Nation_First_Nation_Metadata.xml

### 7. Canadian Major Mining Sites
Title: Principal Mineral Areas, Producing Mines, and Oil and Gas Fields in Canada

summary/description: This web map service depicts the location of Canada’s principal metallurgical works for the given reference year. It includes the locations for significant smelters and refineries, steel mills, ferroalloy plants, and automobile shredders. The data in this web map service are based on Natural Resources Canada’s annual Map 900A – Principal Mineral Areas, Producing Mines, and Oil and Gas Fields in Canada. Pertinent information for each metallurgical site is provided, including operation name, owner/operator, commodities produced, and on-site facilities.

spatial data type: Shapefile (.shp)

source/source url(s): https://open.canada.ca/data/en/dataset/000183ed-8864-42f0-ae43-c4313a860720

date collected: 2019

date published: 2019

an explanation of each attribute:
Producing Mines Fields:
      ObjectID		- ArcInfo standard attribute
      Latitude - Actual Latitude of mine location
	Longitude - Actual Longitude of mine location
	Type_ - Type of Mine 
	TypeCode - Values 1 – 4 for selection of Type attribute
	Operation_E	- Mine operation name (English)
	Operation_F - Mine operation name (French)	
	Owners_E - Owner/company name (English)
	Owners_F - Owner/company name (French)
	Facility_E - Type of Facility (English) 
	Facility_F - Type of Facility (French) 
      City_E - Location name (English)
	City_F - Location name (French)
      Province - Province abbreviation
	ProvCode - Values 1 – 12 for selection of ProvAbbr attribute
	Commodity_E	- Commodities produced (English)
	Commodity_F	- Commodities produced (French)
	Label	- Number label for marker point as appears on the map
	Overlap - Toggle to remove from display any overlapping mines
	OverlapWith	- Overlapping mine name
	Shape	- ArcInfo standard attribute
	RuleID - ArcInfo Carto Rep attribute to visually change overlapping dot locations
	Override - ArcInfo Carto Rep attribute to visually change overlapping dot locations

spatial resolution: N/A

coordinate system: Geographic Coordinate System North American 1983

projection: LAMBERT 1983

extent: 
1ST STANDARD PARALLEL: 49 00 00
2ND STANDARD PARALLEL: 77 00 00
CENTRAL MERIDIAN: -95 00 00
LATITUDE OF ORIGI: 49 00 00

use limitations/license: https://open.canada.ca/data/en/dataset/3a1eb6ef-6054-4f9d-b1f6-c30322cd7abf/resource/d805cd5e-b91c-4598-849f-ca2d89f72ed9

### 8. Canadian National Park Boundaries
summary/description: The National Parks and National Park Reserves of Canada Legislative Boundaries web service includes the following lands: 1) National Parks of Canada as defined in Schedule 1 of the Canada National Parks Act, 2) National Park Reserves of Canada as defined in Schedule 2 of the Canada National Parks Act, 3) Rouge National Urban Park as defined in the Rouge National Urban Park Act and 4) Saguenay–St. Lawrence Marine Park as defined in the Saguenay-St. Lawrence Marine Park Act.

spatial data type: Shapefile (.shp)

source/source url(s): https://open.canada.ca/data/en/dataset/9e1507cd-f25c-4c64-995b-6563bf9d65bd/resource/0751aea0-0b6b-4c53-af21-0c2466c30a69

date collected: July 14, 2021

date published: July 14, 2021

an explanation of each attribute:
Fields:
adminAreaId ( type: esriFieldTypeString, alias: Administrative Area Identifier, length: 15 )
adminAreaNameEng ( type: esriFieldTypeString, alias: Administrative Area Name, length: 200 )
adminAreaNameAlt1 ( type: esriFieldTypeString, alias: Administrative Area Name Alternate Language, length: 200 )
adminAreaNameAltLang1 ( type: esriFieldTypeString, alias: Administrative Area Name Alternate Language Code, length: 50 )
distributionType ( type: esriFieldTypeString, alias: Aboriginal Land Type Code, length: 5 )
distributionTypeEng ( type: esriFieldTypeString, alias: Aboriginal Land Type Description, length: 100 )
absoluteAccuracy ( type: esriFieldTypeString, alias: Absolute Accuracy Code, length: 10 )
absoluteAccuracyEng ( type: esriFieldTypeString, alias: Absolute Accuracy Description, length: 50 )
adminRegion ( type: esriFieldTypeString, alias: Administrative Region Code, length: 10 )
adminRegionEng ( type: esriFieldTypeString, alias: Administrative Region Description, length: 100 )
jurisdiction ( type: esriFieldTypeString, alias: Jurisdiction Code, length: 5 )
jurisdictionEng ( type: esriFieldTypeString, alias: Jurisdiction Description, length: 60 )
NID ( type: esriFieldTypeString, alias: National Feature Identifier, length: 20 )
representationPurpose ( type: esriFieldTypeString, alias: Representation Purpose Code, length: 15 )
representationPurposeEng ( type: esriFieldTypeString, alias: Representation Purpose Description, length: 100 )
webReference ( type: esriFieldTypeString, alias: Dataset Download, length: 200 )
OBJECTID ( type: esriFieldTypeOID, alias: OBJECTID )
SHAPE ( type: esriFieldTypeGeometry, alias: SHAPE )

spatial resolution: N/A

coordinate system: Decimal degrees

projection: Spatial Reference: 3979 / "EPSG:3979, NAD83(CSRS) / Canada Atlas Lambert"

extent:
XMin: -2336824.9573000018
YMin: -724284.1658000043
XMax: 2842801.139399997
YMax: 3827745.4874000014

use limitations/license: https://open.canada.ca/data/en/dataset/3a1eb6ef-6054-4f9d-b1f6-c30322cd7abf/resource/d805cd5e-b91c-4598-849f-ca2d89f72ed9

### 9. MLB Stadiums
summary/description: Major League Baseball (MLB) Stadiums in the United States and Canada.

spatial data type: Shapefile (.shp)

source/source url(s): https://www.sciencebase.gov/catalog/item/4f4e4a48e4b07f02db6230c7

date collected: May 19, 2021

date published: 18 February 2010

an explanation of each attribute:
Fields:
SHAPE: feature geometry / coordinates defining features
ROOF_TYPE: This describes what type of roof the stadium has, to include the following:  Open (no roof...open to the air), Dome (non-removable roof), Retractable (moveable roof usually moving all tracks), and Convertible (roof folds up like convertible car roof as opposed to being rolled back.
Shape: Coordinates defining the features.
SECTOR: Assets have been categorized by NGA Preparedness Branch analysts and assigned to a primary asset sector, using the HSIP Tiger Team Report, ver. 1.1, of September 2002 as a guideline for categorization.
SUBSECTOR: Assets have been categorized by NGA Infrastructure Analysis Branch analysts and assigned to an asset subsector, as defined in the HSIP Tiger Team Report, and as modified/expanded by Preparedness Branch analysts to accommodate the given assets
PRIMARY_TY: The primary organization in charge of the baseball team operating at this site.
DATE_CREAT: The date, in YYYYMMDD format, when a record was created for the MLB Stadiums.
COMP_AFFIL: The company affiliation of a site, when known, to show the relationship of a subsidiary to a parent company.
NAME1: The primary accepted name of a site.
NAME2: The secondary name of a site, if available.  Can be an unofficial name commonly used for the site.
NAME3: The tertiary name of a site, if available.  Can be an unofficial name commonly used for the site.
ADDRESS1: The street address at which a site is physically located, or a street corner at which a site is located.
ADDRESS2: The second line for a street address, used to indicate a specific building, or a suite number, a room number, or a floor.
PO_BOX: The Post Office box for a site, if known.
PO_ZIP: The 5- or 9-digit Zip Code for a site, if known and if different than the Zip Code for the physical address of the site.
CITY: The city or town in which the site is located.
STATE: The two letter postal identifier for the state, commonwealth, or territory in which the site is located.
ZIP: The Zip Code for the site. Principally, this Zip Code is for where the site is physically located, although there exist some exceptions.
Attribute Definition Source:
ZIP_4: The Zip+4 for the site, if known, provided, or researched.
COUNTY: The county, parish, or independent city name in which a site is located.
FEMA_REGIO: The Federal Emergency Management Agency (FEMA) region in which a site is located.
LATITUDE: The latitude, in decimal degrees, of a site, to 5 decimal places.
LONGITUDE: The longitude, in decimal degrees, of a site, to 5 decimal places. Negative numbers in this field are for those locations in the Western Hemisphere.
LEAGUE: The league in which the baseball teams plays. National or American.
DIVISION: The league in which the baseball teams plays. National or American.
CAPACITY: The seating capacity of the stadium for baseball.
FID: Sequential unique whole numbers that are automatically generated.

spatial resolution: 
Latitude Resolution: 0.000000
Longitude Resolution: 0.000000

coordinate system: Decimal degrees / WGS_1984

projection: WGS_1984

extent:
West Bounding Coordinate: -122.533090
East Bounding Coordinate: -71.097710
North Bounding Coordinate: 47.591200
South Bounding Coordinate: 25.958010

use limitations/license: Downloadable Data / Open Data (USGS)

### 10. Canadian International Airports 
summary/description: Canadian airports served by NAV CANADA control towers or flight service station.

spatial data type: Map Service

source/source url(s): https://open.canada.ca/data/en/dataset/3a1eb6ef-6054-4f9d-b1f6-c30322cd7abf/resource/d805cd5e-b91c-4598-849f-ca2d89f72ed9

date collected: May 19, 2021

date published: May 19, 2021

an explanation of each attribute:
Fields:
      Shape ( type: esriFieldTypeGeometry, alias: Shape )
      TC_ID ( type: esriFieldTypeDouble, alias: Identifier )
      IATA ( type: esriFieldTypeString, alias: International Air Transport Association Airport (IATA) Code, length: 254 )
      ICAO ( type: esriFieldTypeString, alias: International Civil Aviation Organization (ICAO) Code, length: 254 )
      TYPE ( type: esriFieldTypeString, alias: Airport Type, length: 254 )
      TYPE_CODE ( type: esriFieldTypeDouble, alias: Airport Type Code )
      AIRPORT ( type: esriFieldTypeString, alias: Airport Name, length: 254 )
      CITY ( type: esriFieldTypeString, alias: City, length: 254 )
      PROVINCE ( type: esriFieldTypeString, alias: Province, length: 254 )
      LATTITUDE ( type: esriFieldTypeDouble, alias: Lattitude )
      LONGITUDE ( type: esriFieldTypeDouble, alias: Longitude )
      OBJECTID ( type: esriFieldTypeOID, alias: Unique identifier )

spatial resolution: 

coordinate system: NAD_1983_Canada_Atlas_Lambert / Decimal degrees

projection: NAD_1983_Canada_Atlas_Lambert

extent: [[-146.108061782699,36.4810686346204],[-34.2795533650949,72.4613643971491]]

use limitations/license: Open Government Licence - Canada (https://open.canada.ca/en/open-government-licence-canada)

---------------------------------------------------------------------------------------------------------------
