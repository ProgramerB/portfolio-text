//illustrattor
// import i3d11 from '../images/illustrator/3d object/3d 1/3d 1.png'
// import i3d12 from '../images/illustrator/3d object/3d 1/process one.png'

import i3d21 from '../images/illustrator/3d object/3d 2/main.png'
import i3d22 from '../images/illustrator/3d object/3d 2/process one.png'
import i3d23 from '../images/illustrator/3d object/3d 2/process two.png'

// import i3d31 from '../images/illustrator/3d object/3d 3/3d 3.png'
// import i3d32 from '../images/illustrator/3d object/3d 3/process one.png'
// import i3d33 from '../images/illustrator/3d object/3d 3/process two.png'

import i41 from '../images/illustrator/illustrator pratice/pratice one.jpg'
import i42 from '../images/illustrator/illustrator pratice/pratice two.png'
import i43 from '../images/illustrator/illustrator pratice/pratice three.png'

import i51 from '../images/illustrator/infographic or poster/infographic 2/main.png'
import i52 from '../images/illustrator/infographic or poster/infographic 2/process one.png'
import logo1 from '../images/illustrator/logo/logo two/main.png'
import logo2 from '../images/illustrator/logo/logo two/process one.png'
import poster1 from '../images/illustrator/poster/main.png'
import poster2 from '../images/illustrator/poster/poster1.jpg'
import vector1 from '../images/illustrator/vector illusrtration/one vectore/main.png'

//blender
import blender1 from '../images/blender/blender 1.png'
import blender3 from '../images/blender/blender 3.png'

//photoshop
import image_main from '../images/photoshop/image enhancement/2/main.png' 
import image_p1 from '../images/photoshop/image enhancement/2/p1.png'

import poster_main from '../images/photoshop/poster/1/main.jpg'
import poster_1 from '../images/photoshop/poster/1/p1.png'
import poster_2 from '../images/photoshop/poster/1/p2.png'
import poster_3 from '../images/photoshop/poster/1/p3.png'
import vinyl_main from '../images/photoshop/vinly cover/main.png'
// import vinyl_1 from '../images/photoshop/vinly cover/p1.png'
// import vinyl_2 from '../images/photoshop/vinly cover/p2.png'
// import vinyl_3 from '../images/photoshop/vinly cover/p3.png'
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
        name:'Image enhancement',
        desc: '',
        images: [
            image_main,
            image_p1,
        ]
    },
    {
        id:'2',
        name:'poster',
        desc: '',
        images: [
            poster_main,
            poster_1,
            poster_2,
            poster_3,
        ]
    },
    {
        id:'3',
        name:'vinyl cover',
        desc: '',
        images: [
            vinyl_main,
            // vinyl_1,
            // vinyl_2,
            // vinyl_3,
        ]
    },
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
    {
        id:'5',
        name:'info graphics',
        desc: '',
        images: [
            i51,
            i52,
        ]
    },
    {
        id:'6',
        name:'logo',
        desc: '',
        images: [
            logo1,
            logo2,
        ]
    },
    {
        id:'7',
        name:'poster',
        desc: '',
        images: [
            poster1,
            poster2
        ]
    },
    {
        id:'9',
        name:'vector illustration',
        desc: '',
        images: [
            vector1
        ]
    },
    
]

export const blender_list:Item[] = [
    {
        id:'1',
        name:'dice',
        desc: '',
        images: [
            blender3
        ]
    },
    {
        id:'2',
        name:'glass bottle',
        desc: '',
        images: [
            blender1
        ]
    },

]
export const video_list:Item[] = [

]
export const photo_list:Item[] = [

]
export const art_list:Item[] = [

]
export const design_list:Item[] = [
    
]
export const work_list:Item[] = [
    
]