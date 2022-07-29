import { getCurrentInstance } from "vue";

function useExpose<T>(extra: T) {
  const instance = getCurrentInstance();
  if (instance?.proxy) {
    Object.assign(instance.proxy, extra);
  }else{
    console.warn("useExpose: can't assign extra:<T> to instance.");
  }
}

export {useExpose}