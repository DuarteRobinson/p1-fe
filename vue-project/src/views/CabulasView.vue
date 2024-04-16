<template>
    <div class="cabulas">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea v-model="newApontomentoRef" class="textarea"
                        placeholder="Adicionar apontamento"></textarea>
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success" @click="addApontamento"
                        :disabled="!newApontomento">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Apontamento v-for="cabula in cabulasStore.apontamentos" :key="cabula.id" :cabula="cabula" @delete-clicked="deleteApontamento" />
    <!--div class="card mb-4" v-for="cabula in apontamentos" :key="cabula.id">
            <div class="card-content">
                <div class="content">
                    {{ cabula.content }}
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
    </div> -->
</template>

<script setup>
import { ref } from 'vue';
import Apontamento from '@/components/cabula.vue';
import { useCabulasStore } from '@/stores/cabulasStore.js';

const cabulasStore = useCabulasStore();
const newApontomento = ref('');
const newApontomentoRef = ref(null);
const apontamentos = ref([
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
])

const addApontamento = () => {
    let id = new Date().getTime().toString()
    apontamentos.value.unshift({
        id,
        content: newApontomento.value
    })
    newApontomento.value = ''
    newApontomentoRef.value.focus()
}

const deleteApontamento = idToDelete => {
    apontamentos.value = apontamentos.value.filter(cabula => {return cabula.id !== idToDelete})
}
</script>