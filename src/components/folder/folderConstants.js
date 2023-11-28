export const FOLDER_DATA = {
    id:1,
    name:'root',
    isFolder: true,
    items :[
        {
            id:2,
            name:'public',
            isFolder: true,
            items:[
                {
                    id:5,
                    name:'build',
                    isFolder: true,
                    items:[]
                },
                {
                    id:6,
                    name:'vite.svg',
                    isFolder: false,
                    items:[]
                },
            ]
        },
        {
            id:3,
            name:'src',
            isFolder: true,
            items:[
                {
                    id:7,
                    name:'components',
                    isFolder: true,
                    items:[
                        {
                            id:9,
                            name:'carousel',
                            isFolder: true,
                            items:[
                                {
                                    id:10,
                                    name:'carousel.jsx',
                                    isFolder: false,
                                    items:[]
                                },
                            ]
                        },
                    ]
                },
                {
                    id:8,
                    name:'assets',
                    isFolder: false,
                    items:[]
                },
            ]
        },
        {
            id:4,
            name:'package.json',
            isFolder: false,
            items:[]
        },

    ]
}