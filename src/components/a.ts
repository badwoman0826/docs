import { ref } from 'vue'
export const fun = <T>(value: T) => {
    const obj = ref<T>(value)
    return obj
}