
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          name: 'Anubias barteri var. nana',
          growth_rate: 'Slow',
          light_requirement: 'Low',
          co2_need: 'Low',
          structure: 'Rhizome',
          size: 'Midground',
          isFloating: true,
          price: '5.00',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Anubias.jpg',
          stock: 20
        },
        {
          name: 'Rotala rotundifolia (Dwarf Rotala)',
          growth_rate: 'Fast',
          light_requirement: 'Medium',
          co2_need: 'Low',
          structure: 'Stem',
          size: 'Midground',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://cdn.shopify.com/s/files/1/0819/6279/products/rotala_green_3_eaad16ba-8eb4-4c2c-8045-ba06a838647f_1024x1024.jpg?v=1520919063',
          stock: 10
        },
        {
          name: 'Taxiphyllum barbieri (Java Moss)',
          growth_rate: 'Medium',
          light_requirement: 'Low',
          co2_need: 'Low',
          structure: 'Moss',
          size: 'Foregound',
          isFloating: true,
          price: '5.00',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Javamoos.jpg',
          stock: 30
        },
        {
          name: 'Hydrocotyle leucocephala (Brazillian Pennywort)',
          growth_rate: 'Fast',
          light_requirement: 'Medium',
          co2_need: 'Low',
          structure: 'Free-Floating',
          size: 'Surface',
          isFloating: true,
          price: '5.00',
          photo_url: 'https://commons.wikimedia.org/wiki/File:Hydrocotyle_leucocephala_B.jpg',
          stock: 30
        },
        {
          name: 'Hygrophila difformis (Water Wisteria)',
          growth_rate: 'Fast',
          light_requirement: 'Medium',
          co2_need: 'Low',
          structure: 'Stem',
          size: 'Background',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Hygrophila_difformis.jpg',
          stock: 30
        },
        {
          name: 'Bacopa monnieri (Moneywort)',
          growth_rate: 'Medium',
          light_requirement: 'Medium',
          co2_need: 'Low',
          structure: 'Stem',
          size: 'Background',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Bacopa_monnieri_BotGardBln07122011A.jpg',
          stock: 30
        },
        {
          name: 'Lemma spp. (Duckweed)',
          growth_rate: 'Fast',
          light_requirement: 'Low',
          co2_need: 'Low',
          structure: 'Free-Floating',
          size: 'Surface',
          isFloating: true,
          price: '5.00',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LentejasDeAgua.jpg',
          stock: 30
        },
        {
          name: 'Sagittaria sublata (Dwarf Sagittaria)',
          growth_rate: 'Fast',
          light_requirement: 'Low',
          co2_need: 'Low',
          structure: 'Rosette',
          size: 'Foreground',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://shop.plantedaquariumscentral.com/assets/images/dw%20sag1.jpg',
          stock: 30
        },
        {
          name: 'Nymphaea lotus',
          growth_rate: 'Fast',
          light_requirement: 'Medium',
          co2_need: 'Low',
          structure: 'Rosette',
          size: 'Background',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Nymphaea_lotus.JPG',
          stock: 30
        },
        {
          name: 'Fissidens fontanus (Phoenix Moss)',
          growth_rate: 'Medium',
          light_requirement: 'Low',
          co2_need: 'Low',
          structure: 'Moss',
          size: 'Midground',
          isFloating: true,
          price: '5.00',
          photo_url: 'https://meethepet.com/wp-content/uploads/2018/10/Fissidens-fontanus1.jpg',
          stock: 30
        },
        {
          name: 'Echinodorus grisebachii "Amazonicus" (Amazon Sword)',
          growth_rate: 'Fast',
          light_requirement: 'Medium',
          co2_need: 'low',
          structure: 'Rosette',
          size: 'Background',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://www.flowgrow.de/db/images/aquaticplants/detail/echinodorus-grisebachii-amazonicus-53cdfe79b9451.jpg',
          stock: 30
        },
        {
          name: 'Hemianthus callitrichoides "Cuba" (Dwarf Baby Tears)',
          growth_rate: 'Medium',
          light_requirement: 'High',
          co2_need: 'Medium',
          structure: 'Stem',
          size: 'Foreground',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://i0.wp.com/aquaticmag.com/wp-content/uploads/2015/11/Heminathus-Callitrichoides-HC-Dwarf-Baby-Tears-Information-and-Caresheet-Dwarf-Baby-Tears-HC-for-sale-AquaticMag-8.jpg',
          stock: 30
        },
        {
          name: 'Staurogyne repens',
          growth_rate: 'Medium,',
          light_requirement: 'Medium',
          co2_need: 'Medium',
          structure: 'Stem',
          size: 'Foreground',
          isFloating: false,
          price: '5.00',
          photo_url: 'https://aquaticmag.com/wp-content/uploads/2014/07/Staurogyne-Repens-049-Aquatic-plant-for-sale-and-where-to-buy-Aquaticmag.jpg',
          stock: 0
        }
      ]);
    });
};
