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
        name: "",
        year: "",
        material: "",
        designer: "",
        country: "",
        image: ""
    },
    


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