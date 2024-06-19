import { ref } from 'vue';

const isLoading = ref(false);

export const useLoading = () => {
  const setLoading = (loading) => {
    isLoading.value = loading;
  };

  return { isLoading, setLoading };
};
