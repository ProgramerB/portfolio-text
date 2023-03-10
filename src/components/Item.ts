//illustrattor
// import i3d11 from '../images/illustrator/3d object/3d 1/3d 1.png'
// import i3d12 from '../images/illustrator/3d object/3d 1/process one.png'

import i3d21 from '../images/illustrator/3d object/3d 2/3d 2.png'
import i3d22 from '../images/illustrator/3d object/3d 2/process one.png'
import i3d23 from '../images/illustrator/3d object/3d 2/process two.png'

// import i3d31 from '../images/illustrator/3d object/3d 3/3d 3.png'
// import i3d32 from '../images/illustrator/3d object/3d 3/process one.png'
// import i3d33 from '../images/illustrator/3d object/3d 3/process two.png'

import i41 from '../images/illustrator/illustrator pratice/pratice one.jpg'
import i42 from '../images/illustrator/illustrator pratice/pratice two.png'
import i43 from '../images/illustrator/illustrator pratice/pratice three.png'
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
    // {
    //     id:'1',
    //     name:'3d objects 1',
    //     desc: '',
    //     images: [
    //         i3d11,
    //         i3d12,
    //     ]
    // },
    {
        id:'2',
        name:'3d objects',
        desc: '',
        images: [
            i3d21,
            i3d22,
            i3d23,
        ]
    },
    // {
    //     id:'3',
    //     name:'3d objects 3',
    //     desc: '',
    //     images: [
    //         i3d31,
    //         i3d32,
    //         i3d33,
    //     ]
    // },
    {
        id:'4',
        name:'illustrator practice',
        desc: '',
        images: [
            i41,
            i42,
            i43,
        ]
    },
    
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