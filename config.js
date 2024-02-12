var config = {
    style: 'mapbox://styles/vtaemoon/clsiyx58h016j01ql1h59bhh1/draft',
    accessToken: 'pk.eyJ1IjoidnRhZW1vb24iLCJhIjoiY2s5ODdwbXZzMWVndTNlcHVseTE0ZXZwcCJ9.MXm3aL33vJLLPxVRr7QjaQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Go Tokyo whenever you want',
    byline: 'By Meng Chenxin',
    footer: 'Source: OpenStreetMap & Google Map. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Explore Tokyo Right Now!',
            image: 'tkshopping3.jpg',
            description: 'Tokyo is a great place to visit in either four seasons.Here our maps will help you know a little bit about the whole tokyo through attractions, anime. You can also explore more on the website. <a href="https://www.gotokyo.org/cn/index.html"> <strong>Read more</strong></a>',
            location: {
                center: [139.67141, 35.69176],
                zoom: 11.01,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hotel',
                    opacity: 0.5,
                    duration: 5000
                },
                {
                    layer: 'anime-shop',
                    opacity: 0.5,
                    duration: 5000              
                },
                {
                    layer: 'attraction',
                    opacity: 1,
                    duration: 5000                
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.5,
                    duration: 5000                
                },
                {
                    layer: 'railway-line',
                    opacity: 0.5,
                    duration: 5000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'hotel',
                    opacity: 0.1
                },
                {
                    layer: 'anime-shop',
                    opacity: 0.1               
                },
                {
                    layer: 'attraction',
                    opacity: 1                
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.1                
                },
                {
                    layer: 'railway-line',
                    opacity: 0.1                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Attractions',
            image: 'Things-to-do-in-Tokyo-Tokyo-Tower.jpg',
            description: 'The start of the route is exploring what tourists of attractions in Tokyo Hometown. As you can see, most of the attractions are centred on the Shinjuku, Ikebururo, Shibuya and Ginza.',
            location: {
                center: [139.73429, 35.68850],
                zoom: 12.48,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'attraction',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.5,
                    duration: 5000
                },
                {
                    layer: 'railway-line',
                    opacity: 0.5,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'attraction',
                    opacity: 0
                },
                {
                    layer: 'railway-dot',
                    opacity: 0                
                },
                {
                    layer: 'railway-line',
                    opacity: 0               
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Anime! We Like!Part Ⅰ-(Ikebukuro)',
            image: 'otomeroad01.jpg',
            description: 'Ikebukuro is famous for its Otome Street, and there are many peripheral shops where you can make purchases.',
            location: {
                center: [139.71581, 35.72971],
                zoom: 15.45,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'anime-shop',
                    opacity: 1,
                    duration: 5000                              
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.5,
                    duration: 5000                              
                },
                {
                    layer: 'railway-line',
                    opacity: 0.5,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'anime-shop',
                    opacity: 1
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.1                
                },
                {
                    layer: 'railway-line',
                    opacity: 0.1                
                }
            ],
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Anime! We Like!Part Ⅱ-(Akihabara)',
            image: 'Tokyo2608_1-thumb-2064x1300-14969.jpg',
            description: 'Akihabara is a shopping district in Tokyo, Japan, centred on Akihabara Station and known for its large number of electrical and 3C stores, electronic entertainment businesses such as video games and anime, and information industry companies.',
            location: {
                center: [139.76629, 35.69754],
                zoom: 15.45,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'anime-shop',
                    opacity: 0.5,
                    duration: 5000              
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.5,
                    duration: 5000                
                },
                {
                    layer: 'railway-line',
                    opacity: 0.5,
                    duration: 5000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'anime-shop',
                    opacity: 1
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.1                
                },
                {
                    layer: 'railway-line',
                    opacity: 0.1                
                }
            ],
        },
        {
            id: 'fifth-container',
            alignment: 'left',
            hidden: false,
            title: 'Where to live in Tokyo',
            description: 'As you can see, there are many areas in Tokyo where you can live and play, so when choosing a hotel, you can choose Shinjuku, Ikebukuro and other areas.',
            location: {
                center: [139.73429, 35.68850],
                zoom: 12.48,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hotel',
                    opacity: 1,
                    duration: 5000                              
                },
                {
                    layer: 'anime-shop',
                    opacity: 0.5,
                    duration: 5000                              
                },
                {
                    layer: 'attraction',
                    opacity: 0.5,
                    duration: 5000                              
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.5,
                    duration: 5000                              
                },
                {
                    layer: 'railway-line',
                    opacity: 0.5,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'hotel',
                    opacity: 1
                },
                {
                    layer: 'anime-shop',
                    opacity: 0.5
                },
                {
                    layer: 'attraction',
                    opacity: 0.5
                },
                {
                    layer: 'railway-dot',
                    opacity: 0.1                
                },
                {
                    layer: 'railway-line',
                    opacity: 0.1                
                }
            ]
        }
    ]
};