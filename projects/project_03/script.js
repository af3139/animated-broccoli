const chairs = [
    {
        name: "Herringbones Chair",
        year: "2016",
        material: "wood",
        designer: "Raw Edges",
        country: "England",
        image: "https://images.squarespace-cdn.com/content/v1/5523bc4ce4b05485b52b391e/1463666353814-CK846CT2622HA24HEYPY/image-asset.jpeg?format=1500w"
    },
    {
        name: "Grano",
        year: "1975",
        material: "plastic",
        designer: "Alessandro Mendini",
        country: "Italy",
        image: "https://geoffisaac.com.au/wp-content/uploads/2020/12/Grano.jpg"
    },
    {
        name: "Golgotha",
        year: "1972",
        material: "fabric",
        designer: "Gaetano Pesce",
        country: "Italy",
        image: "https://d2w9rnfcy7mm78.cloudfront.net/2444887/original_de6b6062399b3d34aa05b751c4bd93e1.jpg?1531881311?bc=1"
    },
    {
        name: "Etruscan Chair",
        year: "1984",
        material: "glass",
        designer: "Danny Lane",
        country: "England",
        image: "https://www.cmog.org/sites/default/files/styles/cmog_primary_image/public/collections/F7/F7330940-C2A6-4033-8BCF-5668A8111BA8.jpg?itok=9KwNQajW"
    },
    {
        name: "Dehmel Chair",
        year: "1903",
        material: "wood",
        designer: "Peter Behrens",
        country: "Germany",
        image: "https://www.wright20.com/items/index/2000/339_2_modernists_20_michael_and_gabrielle_boyd_september_2003_peter_behrens_side_chair_for_the_poet_richard_dehmel_hamburg__wright_auction.jpg?t=1620223128"
    },
    {
        name: "Chair for house Laueli",
        year: "1940",
        material: "wood",
        designer: "Berta Rahm",
        country: "Switzerland",
        image: ""
    },
    {
        name: "S-Chair",
        year: "1956",
        material: "plastic",
        designer: "Verner Panton",
        country: "Denmark",
        image: "https://a.1stdibscdn.com/s-chair-no-275-in-red-by-verner-panton-1956-for-sale/1121189/f_145827611556961313358/14582761_master.jpg?width=1500"
    },
    {
        name: "Kramer Chair",
        year: "1927",
        material: "wood",
        designer: "Ferdinand Kramer",
        country: "Germany",
        image: "https://franklandau.com/images/picture-teaser/thonet_ferdinand_kramer_815-2.jpg"
    },
    {
        name: "Carbon Balloon Chair",
        year: "2013",
        material: "balloon",
        designer: "Marcel Wanders",
        country: "Netherlands",
        image: "https://static.marcelwanders.com/assets-boutique/images/Carbon_Chair_White_Gold_1080x1080_PDP_Carosel_1.jpg?mtime=20180713164048&focal=none"
    },
    {
        name: "Chair #84",
        year: "1982",
        material: "wood",
        designer: "Donald Judd",
        country: "USA",
        image: "https://sfmoma-media-dev.s3.us-west-1.amazonaws.com/www-media/2020/04/22123801/x2018.6010.047_01_H02-Large-TIFF_4000-pixels-long-scaled.jpg"
    },
    {
        name: "Sansa",
        year: "2010",
        material: "metal",
        designer: "Cheick Diallo",
        country: "Mali",
        image: "https://stories.isu.pub/78731230/images/19_original_file_I0.jpg"
    },
    {
        name: "Sacco",
        year: "1968",
        material: "fabric",
        designer: "Piero Gatti",
        country: "Italy",
        image: "https://a.1stdibscdn.com/sacco-easy-chair-in-red-by-gatti-paolini-teodoro-for-sale/1121189/f_112741131530962305302/11274113_master.jpg?disable=upscale&auto=webp&quality=60&width=640"
    },
    {
        name: "Rolling Lounge Chair",
        year: "1968",
        material: "metal",
        designer: "Paul Rudolph",
        country: "USA",
        image: "https://www.wright20.com/items/index/2000/518_1_important_design_june_2010_paul_rudolph_rolling_lounge_chair__wright_auction.jpg?t=1517384758"
    },
    {   name: "Ravioli",
        year: "2005",
        material: "fabric",
        designer: "Greg Lynn",
        country: "USA",
        image: "https://www.moma.org/media/W1siZiIsIjE1Nzk5OCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=4bdf55d4808e5497"
    },
    {   name: "Random Chair",
        year: "2003",
        material: "carbon fiber",
        designer: "Bertjan Pot",
        country: "Netherlands",
        image: "http://www.bertjanpot.nl/wp-content/uploads/2003/08/random_chair_3_SBP-portfolio.jpg"
    },
    {   name: "RZ 60",
        year: "1960",
        material: "metal",
        designer: "Dieter Rams",
        country: "Germany",
        image: "https://img.vntg.com/15820211731074/chair-rz-60-601602-by-dieter-rams-for-vits%C5%93-and-zapf-1961.jpg"
    },
    {
        name: "Pigiama",
        year: "1979",
        material: "fabric",
        designer: "Andrea Branzi",
        country: "Italy",
        image: "https://images.squarespace-cdn.com/content/v1/5f9f1117d5f4371e480f603e/1615680886695-UIPFL3LDWOH95WXRG9JG/Branzi_Pigiama_Armchair_01.jpg"
    },
    {
        name: "GJ Chair",
        year: "1960",
        material: "wood",
        designer: "Grete Jalk",
        country: "Denmark",
        image: "https://cdn.shopify.com/s/files/1/0051/9342/products/grete-jalk-gk-chair-teak_1_696x.jpg?v=1647972531"
    },
    {
        name: "Coconut Chair",
        year: "1955",
        material: "fabric",
        designer: "George Nelson",
        country: "USA",
        image: "https://cdn.connox.com/m/100030/125460/media/Vitra/Coconut-Chair/coconut-chair1-440x440.jpg"
    },
    {
        name: "No. 346",
        year: "1904",
        material: "wood",
        designer: "Gustav Stickley",
        country: "USA",
        image: "http://www.artnet.com/WebServices/images/ll00230lldNzVJFgqjECfDrCWvaHBOczMaF/gustav-stickley-morris-chair,-346.jpg"
    },
    {
        name: "Blow",
        year: "1967",
        material: "plastic",
        designer: "Jonathan De Pas",
        country: "Italy",
        image: "https://framemark.vam.ac.uk/collections/2007BR3576/full/735,/0/default.jpg"
    },
    {
        name: "Mies",
        year: "1969",
        material: "metal",
        designer: "Archizoom Associati",
        country: "Italy",
        image: "https://www.wright20.com/items/index/2000/477_0_modern_design_march_2008_archizoom_associati_mies_chair_and_ottoman__wright_auction.jpg?t=1517363944"
    },
    {
        name: "Medici",
        year: "2012",
        material: "wood",
        designer: "Konstantin Grcic",
        country: "Germany",
        image: "https://res.cloudinary.com/steelcasestore/image/upload/f_auto,q_auto:eco/v1638975965/Catalog/EM7EG9PF7TH4VU6UT7KZ/4970f0a0-5fb1-4750-b269-152a5bde2600.jpg"
    },
    {
        name: "Lounge Chair for Kiva Cinema",
        year: "1938",
        material: "wood",
        designer: "Erik Bryggman",
        country: "Finland",
        image: ""
    },
    {
        name: "Locus solus",
        year: "1964",
        material: "metal",
        designer: "Gae Aulenti",
        country: "Italy",
        image: "https://image.architonic.com/img_pro2-4/143/4754/12-5-locus-solus-locus-solus-poltrona-07-b.jpg"
    },
    {
        name: "Lily",
        year: "1957",
        material: "plastic",
        designer: "Estrelle & Erwine Laverne",
        country: "USA",
        image: "https://www.wright20.com/items/index/2000/440_0_modernist_20th_century_june_2004_erwine_and_estelle_laverne_lily_lounge_chair__wright_auction.jpg?t=1517419527"
    },
    {
        name: "Knotted Chair",
        year: "1995",
        material: "cord",
        designer: "Marcel Wanders",
        country: "Netherlands",
        image: "https://cdn.shopify.com/s/files/1/0508/7988/9594/products/CAP-knotted-chair-iso-3_3240x1823_e88ab48d-156d-4b27-ba78-dbb512a02731.jpg?v=1617898819"
    },
    {
        name: "Joe",
        year: "1970",
        material: "fabric",
        designer: "Jonathan De Pas",
        country: "Italy",
        image: "https://a.1stdibscdn.com/de-sede-leather-joe-chair-by-de-pas-durbino-lomazzi-for-poltronova-italy-for-sale/f_18533/f_262526221643667146949/f_26252622_1643667147564_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=640"
    },
    {
        name: "Joseph",
        year: "2000",
        material: "fabric",
        designer: "Lothar Windels",
        country: "Germany",
        image: "http://lotharwindels.com/img/joseph_felt_chair_01.jpg"
    },
    {
        name: "How High the Moon",
        year: "1986",
        material: "metal",
        designer: "Shiro Kuramata",
        country: "Japan",
        image: "https://a.1stdibscdn.com/shiro-kuramata-how-high-the-moon-armchair-for-sale/f_9864/f_262050821637364048838/f_26205082_1637364049143_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=640"
    },
    {
        name: "Ghost",
        year: "1987",
        material: "glass",
        designer: "Cini Boeri",
        country: "Italy",
        image: "https://www.salvioniarredamenti.it/wp-content/uploads/2020/04/ghost-fiam-1.jpg"
    },
    {
        name: "Favela",
        year: "1991",
        material: "wood",
        designer: "Fernando & Humberto Campana",
        country: "Brazil",
        image: "https://static.dezeen.com/uploads/2016/07/Campana-Brothers-Favela-chair-Most-loved-_dezeen_youtube.jpg"
    },
    {
        name: "Extension de generosite",
        year: "2017",
        material: "fabric",
        designer: "Matali Crasset",
        country: "France",
        image: "https://campeggidesign.it/sites/default/files/styles/prodotti_scheda/public/01_Extension_de_generosite2.jpg?itok=iVtAlQxD"
    },
    {
        name: "Ekstrem",
        year: "1972",
        material: "fabric",
        designer: "Terje Ekstrom",
        country: "Norway",
        image: "https://varierchairs.com/wp-content/uploads/2019/07/Ekstrem_frontside_KNI088_370088_UK370004-1.png"
    },
    {
        name: "E 10",
        year: "1948",
        material: "rattan",
        designer: "Egon Eiermann",
        country: "Germany",
        image: "https://img.vntg.com/large/15532770148333/vintage-e10-armchairs-by-egon-eiermann-1950s.jpg"
    },
    {
        name: "Chair for the Rosenbaum House",
        year: "1939",
        material: "wood",
        designer: "Frank Lloyd Wright",
        country: "USA",
        image: "https://www.wright20.com/items/index/2000/148_1_important_design_december_2014_frank_lloyd_wright_pair_of_lounge_chairs_from_the_clarence_sondern_house_kansas_city__wright_auction.jpg?t=1558439131"
    },
    {
        name: "Chair for the Auldbrass Plantation",
        year: "1939",
        material: "wood",
        designer: "Frank Lloyd Wright",
        country: "USA",
        image: "http://www.artnet.com/WebServices/images/ll00245lldvKjGFgneECfDrCWvaHBOcavxC/frank-lloyd-wright-a-chair-(from-the-auldbrass-plantation,-yemassee,-south-carolina).jpg"
    },
    {
        name: "Capitello",
        year: "1971",
        material: "foam",
        designer: "Studio 65",
        country: "Italy",
        image: "https://cdn.shopify.com/s/files/1/0551/0607/6857/products/12_33bb8376-71fb-41d2-8050-94b66daf0f42_720x.gif?v=1626960838"
    },
    {
        name: "Camp Chair",
        year: "1877",
        material: "wood",
        designer: "Joseph Beverley Fenby",
        country: "England",
        image: "https://darioalfonsi.com/wp-content/uploads/%E2%80%9CTripolina%E2%80%9D-folding-chair-in-mustard-leather-and-teak-from-side.jpg"
    },
    {
        name: "Butaque",
        year: "1948",
        material: "wood",
        designer: "Clara Porset",
        country: "Mexico",
        image: "https://a.1stdibscdn.com/clara-porsets-wood-and-rattan-mexican-butaque-chair-by-luteca-for-sale/1121189/f_243655221625160476653/24365522_master.jpg"
    },
    {
        name: "Brasilia",
        year: "2002",
        material: "plastic",
        designer: "Ross Lovegrove",
        country: "Italy",
        image: "https://cdn.stylepark.com/manufacturers/z/zanotta/produkte/925-brasilia/925-brasilia-1.jpg?mtime=20160829180403&focal=none"
    },
    {
        name: "Wassily",
        year: "1925",
        material: "metal",
        designer: "Marcel Breuer",
        country: "Germany",
        image: "https://www.knoll.com/static_resources/images/products/catalog/eco/parts/50L/50L-BLBLCK_(BELTING)_FZ.jpg"
    },
    {
        name: "Albatros",
        year: "1968",
        material: "plastic",
        designer: "Danielle Quarante",
        country: "France",
        image: "https://www.anselme-kindt-larsen.com/wp-content/uploads/04-albatros-danielle-quarante.jpg"
    },
    {
        name: "Air One",
        year: "2000",
        material: "foam",
        designer: "Ross Lovegrove",
        country: "Italy",
        image: "http://www.rosslovegrove.com/wp-content/uploads/2012/04/2107.jpg"
    },
    {
        name: "A1C1",
        year: "1955",
        material: "wood",
        designer: "Pierre Jeanneret",
        country: "India",
        image: "https://www.objekt-vintage.nl/wp-content/uploads/2021/01/pierre-1.jpg"
    },
    {
        name: "AEO",
        year: "1973",
        material: "fabric",
        designer: "Archizoom Associati",
        country: "Italy",
        image: "https://www.salvioniarredamenti.it/imgcatalogo/prodotti/cassina/cassina_poltrona_AEO.jpg"
    },
    {
        name: "A 63 F",
        year: "1929",
        material: "wood",
        designer: "Josef Frank",
        country: "Austria",
        image: "https://www.ragoarts.com/items/index/2000/522_2_living_contemporary_march_2020_josef_frank_armchair_model_a_63_f__rago_auction.jpg?t=1628098833"
    },
    {
        name: "Paimio Chair",
        year: "1932",
        material: "wood",
        designer: "Alvar Aalto",
        country: "Finland",
        image: "https://www.moma.org/media/W1siZiIsIjkzOTUiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgOTAgLXJlc2l6ZSAyMDAweDE0NDBcdTAwM2UiXV0.jpg?sha=a8fad75c14c50c0b"
    },

    {
        name: "Large Diamond Chair",
        year: "1950",
        material: "metal",
        designer: "Harry Bertoia",
        country: "USA",
        image: "https://img.vntg.com/large/16254342772317/early-black-diamond-chair-by-harry-bertoia-for-knoll-international.jpg"
    },

    {
        name: "31",
        year: "1932",
        material: "wood",
        designer: "Alvar Aalto",
        country: "Finland",
        image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/483067/1006243/restricted"
    },

    {
        name: "Box Chair",
        year: "1971",
        material: "plastic",
        designer: "Enzo Mari",
        country: "Italy",
        image: "https://modernity.ams3.cdn.digitaloceanspaces.com/2015/05/2_2131429_chairs-box-designed-by-enzo-mari-for-driade.jpeg"
    },
    {
        name: "Bellevue",
        year: "1951",
        material: "wood",
        designer: "Andre Bloc",
        country: "France",
        image: "https://www.wright20.com/items/index/2000/139_1_important_design_day_1_december_2008_andre_bloc_bellevue_chair__wright_auction.jpg?t=1626284725"
    },
    {
        name: "Bamboo Chair #1",
        year: "1985",
        material: "wood",
        designer: "Robert Wilson",
        country: "USA",
        image: "https://images.squarespace-cdn.com/content/v1/52797371e4b0f7d3b5b349c7/1446411827053-S2KCFNJ8XLWQLP9YI418/bamboochair.jpg"
    },
    {
        name: "Art Deco",
        year: "1979",
        material: "wood",
        designer: "Robert Venturi",
        country: "USA",
        image: "https://www.wright20.com/items/index/2000/284_1_design_june_2016_robert_venturi_art_deco_chair__wright_auction.jpg?t=1475092419"
    },
    {
        name: "A 811/1",
        year: "1929",
        material: "wood",
        designer: "Josef Hoffmann",
        country: "Austria",
        image: "https://a.1stdibscdn.com/two-chairs-thonet-811-josef-hoffmann-for-sale/1121189/f_244440421625815863751/24444042_master.jpg"
    },
    {
        name: "Superleggera",
        year: "1951",
        material: "wood",
        designer: "Gio Ponti",
        country: "Italy",
        image: "https://www.kirklandmuseum.org/wp-content/uploads/2020/04/DA_Ponti-SUPER-768x1078.jpg"
    },
    {
        name: "T-Chair",
        year: "1952",
        material: "metal",
        designer: "William Katavolos",
        country: "USA",
        image: "https://cdn.shopify.com/s/files/1/0289/5187/1548/products/45004756_01__master_81376809-a7f2-4d84-bf49-a2376aae068e.jpg?v=1649059127"
    },
    {
        name: "103",
        year: "1933",
        material: "wood",
        designer: "Alvar Aalto",
        country: "Finland",
        image: "https://www.moma.org/media/W1siZiIsIjIxMDEzNSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=d8d4d4b2defc385d"
    },
    {
        name: "Revolving Armchair No. 1",
        year: "1865",
        material: "wood",
        designer: "Anonymous",
        country: "Austria",
        image: "https://img.vntg.com/large/1620329252721/no-5501-bentwood-swivel-chair-from-thonet-1980s.jpg"
    },
    {
        name: "Globe Chair",
        year: "1963",
        material: "plastic",
        designer: "Eero Aarnio",
        country: "Finland",
        image: "https://www.famous-design.com/design-lounge/upload/grande/ball-chair-eero-aarnio-red_20160404175330.jpg"
    },
    {
        name: "Karuselli",
        year: "1963",
        material: "plastic",
        designer: "Yrjo Kukkapuro",
        country: "Finland",
        image: "https://shop.mohd.it/media/catalog/product/cache/11b1b7f5d04077d123613fe5bd9b4f06/k/a/karuselli_1.jpg"
    },
    {
        name: "Cone Chair",
        year: "1958",
        material: "metal",
        designer: "Verner Panton",
        country: "Denmark",
        image: "https://hivemodern.com/public_resources/full/verner-panton-cone-chair-vitra-2.jpg"
    },
    {
        name: "Elda Chair",
        year: "1963",
        material: "fabric",
        designer: "Joe Colombo",
        country: "Italy",
        image: "https://www.artic.edu/iiif/2/498cf884-0602-3248-095c-2810f3584d6b/full/843,/0/default.jpg"
    },
    {
        name: "Salon Chair",
        year: "1936",
        material: "metal",
        designer: "Warren McArthur",
        country: "USA",
        image: "https://images-na.ssl-images-amazon.com/images/I/61DUkrNHMhL.jpg"
    },
    {
        name: "Alu Chair",
        year: "1957",
        material: "metal",
        designer: "Ray and Charles Eames",
        country: "USA",
        image: "https://i.pinimg.com/736x/7b/26/00/7b26005050cbda6d89de4811a41b22c5.jpg"
    },
    {
        name: "Tip Ton",
        year: "2008",
        material: "plastic",
        designer: "Edward Barber & Jay Osgerby",
        country: "England",
        image: "https://static.vitra.com/media-resized/lse7p8aNqRX8KnG6CGTbesAm1woAKBiku26AfJBnl2g/fill/1040/1390/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzI0NjA1NTUvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC8zNDc2MzUyNy5qcGc.jpg"
    },
    {
        name: "Soft Heart",
        year: "1990",
        material: "fabric",
        designer: "Ron Arad",
        country: "Italy",
        image: "https://www.psmuseum.org/storage/app/uploads/public/a23/959/e79/thumb__1600_0_0_0_auto.jpg"
    },
    {
        name: "RSR",
        year: "1952",
        material: "plastic",
        designer: "Ray and Charles Eames",
        country: "USA",
        image: "https://eames-media.s3.amazonaws.com/724/RSR-Greige-Shell.jpg"
    },
    {
        name: "Pastil Chair",
        year: "1968",
        material: "plastic",
        designer: "Eero Aarnio",
        country: "Finland",
        image: "https://media.fds.fi/product_image/800/6EeroAarnio_Pastillipunainen_EK.jpg"
    },
    {
        name: "Endless Flow Rocking Chair",
        year: "2011",
        material: "plastic",
        designer: "Dirk Vander Kooij",
        country: "Netherlands",
        image: "https://www.moma.org/media/W1siZiIsIjI1MTIzNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=db9f5fc17d7f8ebe"
    },
    {
        name: "Correalist Rocker",
        year: "1942",
        material: "wood",
        designer: "Frederick Kiesler",
        country: "Finland",
        image: "https://static2.lot-art.com/public/upl/79/Attrib-Frederick-Kiesler-Correalist-Rocker-Chair_1589578366_8866.jpg"
    },
    {
        name: "Relaxer 2",
        year: "1974",
        material: "wood",
        designer: "Verner Panton",
        country: "Denmark",
        image: "https://img.vntg.com/16172776541827/verner-panton-relaxer-2-rocking-chair-for-rosenthal-1974.jpg"
    },
    {
        name: "Sedia dattilo",
        year: "1970",
        material: "metal",
        designer: "Ettore Sottsass",
        country: "Italy",
        image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/484847/1683657/restricted"
    },
    {
        name: "The Swan",
        year: "1957",
        material: "fabric",
        designer: "Arne Jacobsen",
        country: "Denmark",
        image: "https://static.turbosquid.com/Preview/2019/08/14__16_58_58/Previez01.jpg0BE59047-EFD4-4128-9251-283522D199B4Default.jpg"
    },
    {
        name: "4814",
        year: "1988",
        material: "plastic",
        designer: "Anna Castelli Ferrieri",
        country: "Italy",
        image: "https://cdn.incollect.com/sites/default/files/zoom/Anna-Castelli-Lounge-chair-4841-by-Anna-Castelli-Ferrieri-for-Kartell-1980s-451262-1919789.jpg"
    },
    {
        name: "360 Chair",
        year: "2010",
        material: "plastic",
        designer: "Konstantin Grcic",
        country: "Germany",
        image: "https://www.moma.org/media/W1siZiIsIjIwMjUyOCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=b321ecac74fd95c7"
    },
    {
        name: "Tube Chair",
        year: "1969",
        material: "plastic",
        designer: "Joe Colombo",
        country: "Italy",
        image: "https://assets.catawiki.nl/assets/2020/8/30/e/9/1/e91dd150-c777-4a6e-97f3-9956f7129bd9.jpg"
    },
    {
        name: "Colani",
        year: "1972",
        material: "plastic",
        designer: "Luigi Colani",
        country: "Germany",
        image: "https://www.moma.org/media/W1siZiIsIjI2NTczNiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=0c805c96c63c3260"
    },
    {
        name: "MC763",
        year: "1928",
        material: "metal",
        designer: "Pierre Chareau",
        country: "France",
        image: "https://flockler.com/thumbs/sites/889/tjm_666-chareau_f018-chair-mc763_s600x0_q80_noupscale.jpg"
    },
    {
        name: "Sitzgeiststuhl",
        year: "1926",
        material: "wood",
        designer: "Heinz & Bodo Rasch",
        country: "Germany",
        image: "https://live.staticflickr.com/317/31664987960_1f261f8b87_b.jpg"
    },
    {
        name: "S88",
        year: "1956",
        material: "wood",
        designer: "Osvaldo Borsani",
        country: "Italy",
        image: "https://a.1stdibscdn.com/archivesE/upload/9331/18_15/2224902/2224902_l.jpeg"
    },
    {
        name: "JH512",
        year: "1949",
        material: "wood",
        designer: "Hans J. Wegner",
        country: "Denmark",
        image: "https://a.1stdibscdn.com/archivesE/upload/1121189/f_54277431473662318403/5427743_master.jpg?width=768"
    },
    {
        name: "Araignée",
        year: "1958",
        material: "metal",
        designer: "Hoffer",
        country: "France",
        image: "https://freight.cargo.site/w/1200/i/3e3031b014d02270f0266557d01e3c6f4113b754eca0d522284e1433cddb2c32/Hoffer--Araignee.png"
    },
    {
        name: "B 25",
        year: "1928",
        material: "metal",
        designer: "Marcel Breuer",
        country: "Germany",
        image: "http://www.artnet.com/WebServices/images/ll00034lldopVJFgoPECfDrCWvaHBOcuaXF/marcel-breuer-a-rare-b-25-seat-machine.jpg"
    },
    {
        name: "Multichair",
        year: "1970",
        material: "fabric",
        designer: "Joe Colombo",
        country: "Italy",
        image: "https://socialdesignmagazine.com/mag/products-selection/wp-content/uploads/sites/2/2020/12/Poltrona-Multichair-Rosso-B-LINE-Joe-Colombo.jpg"
    },
    {
        name: "Chair for the H.C. Price Company Tower",
        year: "1955",
        material: "metal",
        designer: "Frank Lloyd Wright",
        country: "USA",
        image: "https://www.wright20.com/items/index/2000/181_5_design_june_2015_frank_lloyd_wright_rare_executive_office_chair_from_price_tower_bartlesville_oklahoma__wright_auction.jpg?t=1456250379"
    },
    {
        name: "Plywood Chair",
        year: "1946",
        material: "wood",
        designer: "Herbert von Thaden",
        country: "USA",
        image: "https://www.wright20.com/items/index/2000/206_1_important_design_december_2012_herbert_von_thaden_plywood_chair__wright_auction.jpg?t=1517390458"
    },
    {
        name: "Wink",
        year: "1980",
        material: "fabric",
        designer: "Toshiyuki Kita",
        country: "Italy",
        image: "https://www.moma.org/media/W1siZiIsIjIzMDczNSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=b0599c3fde96882e"
    },
    {
        name: "P40",
        year: "1955",
        material: "fabric",
        designer: "Osvaldo Borsani",
        country: "Italy",
        image: "https://hivemodern.com/public_resources/borsani-p40-lounge-chair-osvaldo-borsani-tecno-2.jpg"
    },
    {
        name: "Adjustable Chair",
        year: "1870",
        material: "metal",
        designer: "George Wilson",
        country: "USA",
        image: "https://a.1stdibscdn.com/archivesE/upload/1121189/f_74397031494849857690/7439703_master.jpg"
    },
    {
        name: "REX",
        year: "2010",
        material: "plastic",
        designer: "Ineke Hans",
        country: "Netherlands",
        image: "https://www.inekehans.com/images/large/7638/rex-yellow-black-photo-annegien-van-doorn.jpg"
    },
    {
        name: "Untitled",
        year: "1933",
        material: "metal",
        designer: "Alfred Roth",
        country: "Switzerland",
        image: "https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/UK050214/352_001.jpg"
    },
    {
        name: "No. 2004",
        year: "1969",
        material: "plastic",
        designer: "Alexander Begge",
        country: "Germany",
        image: "https://cdn20.pamono.com/p/s/1/2/1232330_rroe4zqlxt/german-casalino-chair-in-mocca-by-alexander-begge-for-casala-2000s.jpg"
    },
    {
        name: "Poly",
        year: "2005",
        material: "plastic",
        designer: "Karim Rashid",
        country: "Italy",
        image: "https://www.3dfurniture.net/media/catalog/product/cache/5d096ae0443227b075582d4bbb3a0ac7/k/a/karim_rashidspoly4.jpg"
    },
    {
        name: "No. 577 (Tongue)",
        year: "1963",
        material: "fabric",
        designer: "Pierre Paulin",
        country: "Netherlands",
        image: "https://assets.catawiki.nl/assets/2018/7/3/e/1/c/e1cbfbb0-b566-451e-9dcb-0fef94042481.jpg"
    },
    {
        name: "BA 1171",
        year: "1964",
        material: "plastic",
        designer: "Helmut Bätzner",
        country: "Germany",
        image: "https://live.staticflickr.com/7007/6585193463_f550daac77_w.jpg"
    },
    {
        name: "B 32 (Cesca)",
        year: "1928",
        material: "metal",
        designer: "Marcel Breuer",
        country: "Germany",
        image: "https://hivemodern.com/public_resources/full/cesca-chair-with-cane-seat-marcel-breuer-knoll-6.jpg"
    },
    {
        name: "65",
        year: "1934",
        material: "wood",
        designer: "Alvar & Aino Aalto",
        country: "Finland",
        image: "https://media.fds.fi/product_image/800/1Artek_AK.jpg"
    },
    {
        name: "Chassis",
        year: "2006",
        material: "metal",
        designer: "Stefan Diez",
        country: "Germany",
        image: "https://static.dezeen.com/uploads/2011/04/dzn_Chassis-by-Stefan-Diez-3.jpg"
    },
    {
        name: "Steiger stacking chair",
        year: "1932",
        material: "metal",
        designer: "Flora Steiger-Crawford",
        country: "Switzerland",
        image: "https://img.vntg.com/15681017023747/rare-chair-by-swiss-architect-flora-steiger-crawford.jpg"
    }
]

const ul = document.querySelector("ul");

function renderChairsToPage(chairs) {
    for (let i = 0; i < chairs.length; i++) {
      let list_item = document.createElement("li");

      list_item.classList.add(chairs[i].country, "card");

      // add chair name
      let title = document.createElement("h3");
      title.textContent = chairs[i].name;

      // add chair country
      let country = document.createElement("p");
      country.classList.add(chairs[i].country);
      country.textContent = chairs[i].country;

       // add chair image
      let image = document.createElement("img");
      image.setAttribute("src", chairs[i].image);

      // append created elements to page
      ul.appendChild(list_item);
      list_item.appendChild(title);
      list_item.appendChild(country);
      list_item.appendChild(image);
    }
  }

  renderChairsToPage(chairs);

  let filterBtns = document.querySelector(".filters");
  let cards = document.querySelectorAll(".card"); 
  function filterFn(e) {
    // console.log("clicked", e.target);
    if (e.target.classList.contains("filter-btn")) { 
        filterBtns.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
    
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].classList.contains(filterValue) || filterValue === "all") {
            cards[i].classList.remove("hide");
            cards[i].classList.add("show");
          } else {
            cards[i].classList.remove("show");
            cards[i].classList.add("hide");
          }
        }
      }
    }
    filterBtns.addEventListener("click", filterFn);

    let sortBtns = document.querySelector(".sort");
    function sortingFn(event){
        if (event.target.classList.contains("sort-btn")){
            const sortValue = event.target.getAttribute("data-filter");
            if (sortValue === "ascending"){
                chairs.sort(function(a, b){
                    if (a.year < b.year){
                        return -1
                    }
                    if (a.year > b.year){
                        return 1;
                    }
                    return 0;
                });
                console.log('sorted', chairs)
                ul.HTML = "";
                renderChairsToPage(chairs);

            } else if (sortValue === "descending") {
                chairs.reverse();
                //clear page
                ul.HTML = "";
                renderChairsToPage(chairs);
            }

        }
    }
    sortBtns.addEventListener("click", sortingFn);

