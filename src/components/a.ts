import { ref } from 'vue'
import { arr } from './b'
export const fun = <T>(value: T) => {
    const obj = ref<T>(value)
    arr.push(1)
    return {
        obj, arr
    }
}