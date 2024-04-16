import { defineStore } from 'pinia'

export const useCabulaStore = defineStore('cabulasStore', {
    state: () => {
        return{
            apontamentos: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, iure nobis aperiam quod sint similique officia nihil fugiat voluptas adipisci deserunt repellendus facilis necessitatibus dicta impedit quidem, ratione numquam unde?'
                },
                {
                    id: 'id2',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam eveniet labore accusamus ab temporibus, provident harum nam inventore dicta exercitationem maxime cumque nihil odit odio animi aliquid iure. Explicabo!'
                },
                {
                    id: 'id3',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse corporis veniam aspernatur consequatur voluptas deleniti repellendus aliquid, sapiente rerum perferendis sequi distinctio fugit ullam qui veritatis non quia magni? Nam.'
                }
            ]
        }
    }
})