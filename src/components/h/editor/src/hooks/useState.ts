import { reactive, ref, toRefs } from 'vue';
import type { Ref } from 'vue';
interface State {
    history: Ref<any[]>;

}
export function useState(props) {
    const history: State['history'] = ref([])
    const state: State = reactive({
        history
    })

    const setState = function(){
    }
    return reactive({...toRefs(state), setState});
}
