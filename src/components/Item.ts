
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
        name:'water',
        desc: 'blue',
        images: [
            "http://via.placeholder.com/640x360"
        ]
    },
    {
        id:'2',
        name:'fire',
        desc: 'red',
        images: [
            "http://via.placeholder.com/300x300"
        ]
    }
]

export const illustrator_list:Item[] = [
    {
        id:'1',
        name:'mad',
        desc: 'blue',
        images: [
            "http://via.placeholder.com/640x360"
        ]
    },
    {
        id:'2',
        name:'titan',
        desc: 'red',
        images: [
            "http://via.placeholder.com/300x300"
        ]
    }
]

export const blender_list:Item[] = [
    {
        id:'1',
        name:'cat',
        desc: 'blue',
        images: [
            "http://via.placeholder.com/640x360"
        ]
    },
    {
        id:'2',
        name:'dog',
        desc: 'red',
        images: [
            "http://via.placeholder.com/300x300"
        ]
    }
]