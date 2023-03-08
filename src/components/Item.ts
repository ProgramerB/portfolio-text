import poster1 from '../images/illustrator/poster/poster1.png'
export type Item = {
    id: string
    name: string
    desc: string
    images: string[]
}
export interface ItemProp{
    items:Item[]
}
export const photoshop_list:Item[] = [
    {
        id:'1',
        name:'poster',
        desc: 'blue',
        images: [
            "http://via.placeholder.com/640x360"
        ]
    },
    {
        id:'2',
        name:'vinyl cover',
        desc: 'red',
        images: [
            "http://via.placeholder.com/300x300"
        ]
    }, 
    {
        id:'3',
        name:'image enhancement',
        desc: 'red',
        images: [
            "http://via.placeholder.com/300x300"
        ]
    },
    {
        id:'4',
        name:'city stories',
        desc: 'red',
        images: [
            "http://via.placeholder.com/300x300"
        ]
    }
]

export const illustrator_list:Item[] = [
    {
        id:'1',
        name:'3d abstracts/objects',
        desc: 'blue',
        images: [
            "http://via.placeholder.com/640x360"
        ]
    },
    {
        id:'2',
        name:'practice work',
        desc: '    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        images: [
            "http://via.placeholder.com/300x300",
            "http://via.placeholder.com/300x300",
            "http://via.placeholder.com/300x300"
        ]
    },
    {
        id:'3',
        name:'logo',
        desc: 'red',
        images: [
            "http://via.placeholder.com/300x300",
            "http://via.placeholder.com/300x300",
            "http://via.placeholder.com/300x300"
        ]
    },
    {
        id:'4',
        name:'infographics',
        desc: 'red',
        images: [
            poster1,
            "http://via.placeholder.com/300x300",
            "http://via.placeholder.com/300x300"
        ]
    }
]

export const blender_list:Item[] = [
    {
        id:'1',
        name:'practices',
        desc: 'blue',
        images: [
            "http://via.placeholder.com/640x360"
        ]
    },
]
export const video_list:Item[] = [
    {
        id:'1',
        name:'cantasia 2019',
        desc: 'blue',
        images: [
        ]
    },
]
export const photo_list:Item[] = [
    {
        id:'1',
        name:'landscape',
        desc: 'blue',
        images: [
        ]
    },
]
export const art_list:Item[] = [
    {
        id:'1',
        name:'art',
        desc: 'blue',
        images: [
        ]
    },
]
export const design_list:Item[] = [
    
]
export const work_list:Item[] = [
    
]